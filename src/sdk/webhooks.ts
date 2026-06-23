/*
* FastPix webhook verification and unwrapping.
*
* Unlike the other files under `src/sdk/`, this resource is hand-written rather
* than code-generated, but it follows the exact same conventions: it extends the
* shared `ClientSDK` base class and reads its configuration from `this._options`
* (here, the webhook signing secret resolved by the base constructor).
*
* Signature scheme (verified against a live FastPix delivery):
*   - The signature travels in the `FastPix-Signature` header (read lowercase as
*     `fastpix-signature`). It is a SINGLE base64 value — there is no `t=`/`v1=`
*     structure to parse. A real digest looks like
*     "oeDnZHgmhQ3UJ7qUw7uJAzo0O3Dbulfr0w89eoy0lVA=" (44 base64 chars => 32-byte
*     HMAC-SHA256 output).
*   - The signing secret is itself base64-encoded; decode it with
*     `Buffer.from(secret, "base64")` and use those raw bytes as the HMAC key.
*   - The HMAC-SHA256 is computed over the RAW REQUEST BODY ONLY (no timestamp
*     prefix) and the digest is encoded as base64 (not hex).
*   - No timestamp is signed, so there is no replay/tolerance window to enforce.
*     Callers MUST instead dedupe on the top-level event `id` for idempotency.
*/

/// <reference types="node" />

import { createHmac, timingSafeEqual as nodeTimingSafeEqual } from "node:crypto";
import { ClientSDK } from "../lib/sdks.js";
import type { CreateLiveStreamResponseDTO } from "../models/createlivestreamresponsedto.js";
import type { Media } from "../models/media.js";
import { Buffer } from "node:buffer";

/**
* The raw, unparsed webhook request body. Always pass the bytes exactly as they
* arrived on the wire — verification fails if the body was re-serialized.
*/
export type WebhookRawBody = string | Buffer | Uint8Array;

/**
* Inbound request headers. Accepts a WHATWG `Headers` instance or a plain object
* such as Node's `IncomingHttpHeaders` (values may be `string` or `string[]`).
*/
export type WebhookHeaders =
  | Headers
  | Record<string, string | string[] | undefined>;

/** The `object` envelope field: the resource this event is about. */
export interface WebhookEventObject {
  /** The resource type, e.g. "media" or "live-stream". */
  type: string;
  /** The affected resource id (equal to `data.id`). */
  id: string;
}

/** The `workspace` envelope field. */
export interface WebhookWorkspace {
  id: string;
  name: string;
}

/** Every webhook event type whose `data` payload is a {@link Media}. */
export type MediaWebhookEventType =
  | "video.media.created"
  | "video.media.updated"
  | "video.media.ready"
  | "video.media.failed"
  | "video.media.deleted"
  | "video.media.track.created"
  | "video.media.track.ready"
  | "video.media.track.updated"
  | "video.media.track.deleted"
  | "video.media.upload.cancelled"
  | "video.media.subtitle.generated.ready"
  | "video.media.source.ready"
  | "video.media.source.deleted"
  | "video.media.mp4Support.ready";

/**
* Every webhook event type whose `data` payload is a
* {@link CreateLiveStreamResponseDTO}.
*/
export type LiveStreamWebhookEventType =
  | "video.live_stream.created"
  | "video.live_stream.updated"
  | "video.live_stream.deleted"
  | "video.live_stream.simulcast_target.updated"
  | "video.live_stream.simulcast_target.deleted";

/** Union of all known FastPix webhook event `type` strings. */
export type WebhookEventType =
  | MediaWebhookEventType
  | LiveStreamWebhookEventType;

/**
* A verified FastPix webhook event.
*
* Route on `type`, dedupe on the top-level `id` (the idempotency key — NOT
* `object.id`), and read the affected resource id from `object.id`
* (== `data.id`). `data` carries the full entity payload.
*
* Two type parameters, both with sensible defaults:
*   - `TData` — the shape of `data` (defaults to a loose record).
*   - `TType` — the literal `type` (defaults to any `string`).
*
* Most callers don't use these directly: {@link Webhooks.unwrap} returns the
* discriminated {@link FastpixWebhookEvent} union, which narrows both for you.
*/
export interface WebhookEvent<
  TData = Record<string, unknown>,
  TType extends string = string,
> {
  /** Routing key, e.g. "video.media.updated". */
  type: TType;
  /** The resource this event concerns. */
  object: WebhookEventObject;
  /** Event id — the idempotency key. Dedupe on this. */
  id: string;
  /** The workspace that produced the event. */
  workspace: WebhookWorkspace;
  /** Coarse status string, e.g. "media_created". */
  status: string;
  /** Full entity payload (has its own id/status/playbackIds/tracks/...). */
  data: TData;
  /** ISO-8601 timestamp string. */
  createdAt: string;
  /** Delivery attempt metadata. */
  attempts: unknown[];
}

/** A `video.media.*` event. `data` is a {@link Media}. */
export type MediaWebhookEvent = WebhookEvent<Media, MediaWebhookEventType>;

/**
* A `video.live_stream.*` event. `data` is a
* {@link CreateLiveStreamResponseDTO}.
*/
export type LiveStreamWebhookEvent = WebhookEvent<
  CreateLiveStreamResponseDTO,
  LiveStreamWebhookEventType
>;

/**
* The discriminated union of every known FastPix webhook event. This is what
* {@link Webhooks.unwrap} returns: `switch (event.type)` narrows `event.data`
* to the right payload type automatically.
*
* ```ts
* const event = fastpix.webhooks.unwrap(body, headers);
* switch (event.type) {
*   case "video.media.ready":
*     event.data.playbackIds; // ✅ typed as Media
*     break;
*   case "video.live_stream.created":
*     event.data.streamKey;   // ✅ typed as CreateLiveStreamResponseDTO
*     break;
* }
* ```
*/
export type FastpixWebhookEvent = MediaWebhookEvent | LiveStreamWebhookEvent;

/**
* Thrown when a webhook cannot be verified. Catch this to return `400` (bad
* signature / malformed input) versus `500` (unexpected server error).
*/
export class WebhookVerificationError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "WebhookVerificationError";
  }
}

/** Header name we read, always lower-cased per the HTTP spec. */
const SIGNATURE_HEADER = "fastpix-signature";

/**
* Webhooks resource — verifies and unwraps inbound FastPix webhook deliveries.
*
* Accessed as `fastpix.webhooks`. The signing secret defaults to the client's
* `webhookSecret` option (which itself falls back to
* `process.env.FASTPIX_WEBHOOK_SECRET`), and can be overridden per call.
*/
export class Webhooks extends ClientSDK {
  /**
   * Verify the signature and return the parsed event.
   *
   * This is the single function most integrations need: hand it the raw body and
   * request headers and it returns a typed {@link WebhookEvent}, throwing
   * {@link WebhookVerificationError} if anything is wrong.
   *
   * @param body    The raw, unparsed request body (string or Buffer/Uint8Array).
   * @param headers The inbound request headers.
   * @param secret  Optional override for the webhook signing secret. Defaults to
   *                the client's `webhookSecret` option.
   * @returns The verified, parsed webhook event.
   */
  unwrap(
    body: WebhookRawBody,
    headers: WebhookHeaders,
    secret?: string | null,
  ): FastpixWebhookEvent;
  /**
   * Escape hatch: supply your own `data` shape (e.g. for an event type the SDK
   * doesn't model yet) by passing an explicit type argument.
   */
  unwrap<TData>(
    body: WebhookRawBody,
    headers: WebhookHeaders,
    secret?: string | null,
  ): WebhookEvent<TData>;
  unwrap(
    body: WebhookRawBody,
    headers: WebhookHeaders,
    secret?: string | null,
  ): unknown {
    this.verifySignature(body, headers, secret);

    const raw = typeof body === "string" ? body : Buffer.from(body).toString("utf8");
    try {
      return JSON.parse(raw);
    } catch (cause) {
      throw new WebhookVerificationError(
        "Webhook signature verified but the body is not valid JSON.",
        { cause },
      );
    }
  }

  /**
   * Verify the signature without parsing. Throws {@link WebhookVerificationError}
   * on any failure (missing secret, parsed-instead-of-raw body, missing header,
   * or signature mismatch). Returns `void` on success.
   */
  verifySignature(
    body: WebhookRawBody,
    headers: WebhookHeaders,
    secret?: string | null,
  ): void {
    // 1. Resolve the signing secret. Explicit arg wins, then the client option.
    const signingSecret = secret ?? this._options.webhookSecret;
    if (!signingSecret) {
      throw new WebhookVerificationError(
        "Missing webhook secret. Pass one to unwrap()/verifySignature(), set the "
          + "`webhookSecret` client option, or set the FASTPIX_WEBHOOK_SECRET "
          + "environment variable.",
      );
    }

    // 2. The body MUST be the raw bytes. A plain object means the caller already
    //    JSON.parsed it, which destroys the exact bytes the signature covers.
    if (
      typeof body !== "string"
      && !Buffer.isBuffer(body)
      && !(body instanceof Uint8Array)
    ) {
      throw new WebhookVerificationError(
        "Webhook body must be the raw request payload as a string or Buffer. It "
          + "looks like the body was already parsed into an object — configure your "
          + "framework to expose the raw body (e.g. express.raw({ type: "
          + "'application/json' })).",
      );
    }

    // 3. Pull the signature header (single base64 value, no `t=`/`v1=` parts).
    const provided = this.extractSignature(headers);
    if (!provided) {
      throw new WebhookVerificationError(
        `Missing "FastPix-Signature" header on the webhook request.`,
      );
    }

    // 4. Compute the expected signature over the raw body and compare in
    //    constant time.
    const expected = this.computeSignature(body, signingSecret);
    if (!this.timingSafeEqual(provided, expected)) {
      throw new WebhookVerificationError(
        "Webhook signature mismatch. The payload may have been tampered with, or "
          + "a different signing secret was used.",
      );
    }
  }

  /**
   * Compute the base64 HMAC-SHA256 of the raw payload using the base64-decoded
   * secret as the key. Matches FastPix's signing scheme exactly.
   */
  private computeSignature(
    payload: WebhookRawBody,
    secret: string,
  ): string {
    const key = Buffer.from(secret, "base64");
    return createHmac("sha256", key).update(payload).digest("base64");
  }

  /**
   * Constant-time string comparison. Performs a length check first (lengths are
   * not secret), then delegates to `crypto.timingSafeEqual`.
   */
  private timingSafeEqual(a: string, b: string): boolean {
    const ab = Buffer.from(a);
    const bb = Buffer.from(b);
    if (ab.length !== bb.length) {
      return false;
    }
    return nodeTimingSafeEqual(ab, bb);
  }

  /**
   * Read the `FastPix-Signature` header case-insensitively. If a framework hands
   * back an array of values, the first one is used.
   */
  private extractSignature(headers: WebhookHeaders): string | undefined {
    if (typeof Headers !== "undefined" && headers instanceof Headers) {
      return headers.get(SIGNATURE_HEADER) ?? undefined;
    }

    const record = headers as Record<string, string | string[] | undefined>;
    // Fast path: HTTP servers (e.g. Node) already lower-case header names.
    let value = record[SIGNATURE_HEADER];
    if (value === undefined) {
      for (const key of Object.keys(record)) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          value = record[key];
          break;
        }
      }
    }

    return Array.isArray(value) ? value[0] : value;
  }
}
 