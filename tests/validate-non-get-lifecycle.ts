#!/usr/bin/env tsx
/*
 * Non-GET endpoints validator (POST / PUT / PATCH / DELETE) — Node.js SDK port.
 *
 * Ported from the PHP-driven version. Calls the Node SDK directly and captures
 * raw response bodies via an HTTPClient "response" hook, so we can run both:
 *   - OpenAPI response-schema validation against the raw wire body
 *   - SDK-output ↔ raw API diff
 * ...without making the request twice (critical for mutating endpoints).
 *
 * Lifecycle: CREATE → UPDATE → DELETE.  Steps whose required IDs were never
 * captured (upstream create failed) are SKIPped, not invoked with nulls.
 *
 * Output:
 *   tests/artifacts-non-get/<op>.raw.json     raw API wire response
 *   tests/artifacts-non-get/<op>.sdk.json     SDK parsed/returned value
 *   tests/NON_GET_ENDPOINTS_VALIDATION_REPORT.md
 *
 * Requirements:
 *   FASTPIX_USERNAME / FASTPIX_PASSWORD env vars (Basic Auth)
 *   FASTPIX_BASE_URL / FASTPIX_SERVER_URL (optional override)
 */

/// <reference types="node" />

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import yaml from "js-yaml";
import { Fastpix } from "../src/sdk/sdk.js";
import { HTTPClient } from "../src/lib/http.js";

const require = createRequire(import.meta.url);
const openapiResponseValidatorMod = require("openapi-response-validator");
const OpenAPIResponseValidator =
  openapiResponseValidatorMod?.default ?? openapiResponseValidatorMod;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ARTIFACTS_DIRNAME = "artifacts-non-get";
const REPORT_MD = "NON_GET_ENDPOINTS_VALIDATION_REPORT.md";
const MAX_PREVIEW_CHARS = 4000;

type Phase = "CREATE" | "UPDATE" | "DELETE";

type EndpointInfo = {
  path: string;
  method: string;
  operationId: string;
  responses: Record<string, any>;
};

type Ctx = {
  signingKeyId?: string;
  playlistId?: string;
  streamId?: string;
  mediaId?: string;
  mediaPlaybackId?: string;
  createdPlaybackId?: string;
  trackId?: string;
  streamPlaybackId?: string;
  simulcastId?: string;
  uploadId?: string;
};

type SDKInvoker = (client: Fastpix, ctx: Ctx) => Promise<any>;

type Step = {
  operationId: string;
  phase: Phase;
  needs?: (keyof Ctx)[];
  invoke: SDKInvoker;
  capture?: (value: any, ctx: Ctx) => void;
  retryOn?: string;
};

type StepResult = {
  operationId: string;
  method: string;
  path: string;
  phase: Phase;
  status: "PASS" | "FAIL" | "SKIP";
  httpStatus: number | null;
  openapiValid: boolean | null;
  openapiErrors: any[];
  sdkOk: boolean;
  sdkError?: string;
  missingInSDK: string[];
  missingInAPI: string[];
  note?: string;
  capturedId?: string;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function safeFileSlug(input: string): string {
  return input.replace(/[^a-zA-Z0-9_.-]+/g, "_");
}
function toPrettyJson(v: unknown): string {
  return JSON.stringify(v, null, 2);
}
function preview(text: string): string {
  return text.length > MAX_PREVIEW_CHARS
    ? `${text.slice(0, MAX_PREVIEW_CHARS)}\n... [truncated]`
    : text;
}
function basicAuthHeader(u: string, p: string): string {
  return "Basic " + Buffer.from(`${u}:${p}`).toString("base64");
}

// ---------------------------------------------------------------------------
// Raw response capture via HTTPClient hook
// ---------------------------------------------------------------------------
//
// The SDK reads the response body for parsing, which would close the stream
// before we could read it ourselves. We clone the Response inside the hook
// (.clone() must run before the body is consumed) and stash the cloned body
// on a per-call basis. The Step.invoke wrapper reads it after the SDK call.

let lastRawCapture: {
  url: string;
  status: number;
  bodyText: string;
  bodyJson: any;
} | null = null;

const sharedHttpClient = new HTTPClient();
sharedHttpClient.addHook("response", async (res, req) => {
  // Skip non-API hosts (in case the SDK fans out to GCS etc.).
  if (!/api\.fastpix\.(com|io)/i.test(req.url)) return;
  try {
    const cloned = res.clone();
    const bodyText = await cloned.text();
    let bodyJson: any = null;
    try {
      bodyJson = bodyText ? JSON.parse(bodyText) : null;
    } catch {
      bodyJson = null;
    }
    lastRawCapture = { url: req.url, status: res.status, bodyText, bodyJson };
  } catch {
    // ignore — capture failed; the diff will treat raw as null
  }
});

async function invokeSDK(
  client: Fastpix,
  step: Step,
  ctx: Ctx,
):
  | Promise<{ ok: true; value: any; statusCode: number | null; rawBody: any }>
  | Promise<{
      ok: false;
      error: { name?: string; message?: string; statusCode?: number; bodyJson?: any };
    }> {
  lastRawCapture = null;
  try {
    const value = await step.invoke(client, ctx);
    const cap = lastRawCapture;
    return {
      ok: true,
      value,
      statusCode: cap?.status ?? null,
      rawBody: cap?.bodyJson ?? null,
    };
  } catch (e: any) {
    return {
      ok: false,
      error: {
        name: e?.name ?? "Error",
        message: e?.message ?? String(e),
        statusCode: e?.statusCode ?? lastRawCapture?.status ?? undefined,
        bodyJson:
          e?.body && typeof e.body === "string"
            ? safeJsonParse(e.body)
            : lastRawCapture?.bodyJson ?? null,
      },
    };
  }
}

function safeJsonParse(s: string): any {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Spec + OpenAPI validation
// ---------------------------------------------------------------------------

function resolveSpecPath(): string {
  const candidates = [
    join(__dirname, "../fixed.yaml"),
    join(__dirname, "../fastpix.yaml"),
    join(__dirname, "../../fixed.yaml"),
  ];
  for (const p of candidates) if (existsSync(p)) return p;
  throw new Error(`OpenAPI spec not found. Tried: ${candidates.join(", ")}`);
}

function loadOpenAPISpec(): any {
  return yaml.load(readFileSync(resolveSpecPath(), "utf-8"));
}

function extractNonGetEndpoints(spec: any): Map<string, EndpointInfo> {
  const out = new Map<string, EndpointInfo>();
  for (const [path, methods] of Object.entries(spec.paths || {})) {
    const m = methods as any;
    for (const method of ["post", "put", "patch", "delete"]) {
      if (!m[method]) continue;
      out.set(m[method].operationId, {
        path,
        method: method.toUpperCase(),
        operationId: m[method].operationId,
        responses: m[method].responses || {},
      });
    }
  }
  return out;
}

function convertRefsToDefinitions(node: any): any {
  if (node == null || typeof node !== "object") return node;
  if (Array.isArray(node)) return node.map(convertRefsToDefinitions);
  const out: any = {};
  for (const [k, v] of Object.entries(node)) {
    if (k === "$ref" && typeof v === "string")
      out[k] = v.replace("#/components/schemas/", "#/definitions/");
    else out[k] = convertRefsToDefinitions(v);
  }
  return out;
}

function makeOpenAPIResponseValidator(spec: any, ep: EndpointInfo) {
  const definitions = convertRefsToDefinitions(spec.components?.schemas || {});
  const responses: any = {};
  for (const [status, def] of Object.entries(ep.responses || {})) {
    const d = def as any;
    const schema = d?.content?.["application/json"]?.schema;
    if (!schema) continue;
    responses[status] = {
      description: d.description || "",
      schema: convertRefsToDefinitions(schema),
    };
  }
  if (Object.keys(responses).length === 0) return null;
  return new OpenAPIResponseValidator({ responses, definitions });
}

// ---------------------------------------------------------------------------
// JSON diff helpers
// ---------------------------------------------------------------------------

function collectJsonPaths(
  value: any,
  prefix = "",
  opts: { includeEmptyArrays?: boolean } = {},
): Set<string> {
  const out = new Set<string>();
  const includeEmptyArrays = opts.includeEmptyArrays ?? true;
  if (value === null || value === undefined) return out;
  if (typeof value !== "object") {
    if (prefix) out.add(prefix);
    return out;
  }
  if (Array.isArray(value)) {
    if (!includeEmptyArrays && value.length === 0) return out;
    const arrayPrefix = prefix ? `${prefix}[]` : "[]";
    out.add(arrayPrefix);
    for (const item of value)
      for (const p of collectJsonPaths(item, arrayPrefix, opts)) out.add(p);
    return out;
  }
  for (const [k, v] of Object.entries(value)) {
    if (!includeEmptyArrays && Array.isArray(v) && v.length === 0) continue;
    if (!includeEmptyArrays && (v === null || v === undefined)) continue;
    const p = prefix ? `${prefix}.${k}` : k;
    out.add(p);
    for (const child of collectJsonPaths(v, p, opts)) out.add(child);
  }
  return out;
}

function canonicalizeKey(key: string): string {
  const camel = key.includes("_")
    ? key.toLowerCase().replace(/_([a-z0-9])/g, (_, c) => String(c).toUpperCase())
    : key;
  return camel.replaceAll("SDK", "Sdk").replaceAll("API", "Api");
}

function normalizeJsonForComparison(value: any): any {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map(normalizeJsonForComparison);
  if (typeof value !== "object") return value;
  const out: any = {};
  for (const [k, v] of Object.entries(value))
    out[canonicalizeKey(k)] = normalizeJsonForComparison(v);
  return out;
}

function sortUnique(arr: string[]) {
  return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b));
}
function jsonRoundTrip(v: any): any {
  return JSON.parse(JSON.stringify(v));
}

// ---------------------------------------------------------------------------
// Resource-readiness polling
// ---------------------------------------------------------------------------

async function waitForMediaReady(
  baseUrl: string,
  username: string,
  password: string,
  mediaId: string,
  timeoutMs = 180000,
  intervalMs = 5000,
): Promise<string> {
  const url = `${baseUrl.replace(/\/$/, "")}/on-demand/${mediaId}`;
  const deadline = Date.now() + timeoutMs;
  let last = "unknown";
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, {
        headers: {
          Accept: "application/json",
          Authorization: basicAuthHeader(username, password),
        },
      });
      const body: any = await res.json().catch(() => null);
      last = body?.data?.status ?? last;
      if (last === "Ready") return "Ready";
      if (last === "Errored" || last === "Failed") return last;
    } catch {
      /* transient */
    }
    await sleep(intervalMs);
  }
  return last;
}

async function waitForTrackReady(
  baseUrl: string,
  username: string,
  password: string,
  mediaId: string,
  trackId: string,
  timeoutMs = 180000,
  intervalMs = 5000,
): Promise<string> {
  const url = `${baseUrl.replace(/\/$/, "")}/on-demand/${mediaId}`;
  const deadline = Date.now() + timeoutMs;
  let last = "absent";
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, {
        headers: {
          Accept: "application/json",
          Authorization: basicAuthHeader(username, password),
        },
      });
      const body: any = await res.json().catch(() => null);
      const track = (body?.data?.tracks ?? []).find((t: any) => t?.id === trackId);
      if (track) {
        last = track.status ?? "present";
        if (last === "Ready" || last === "present") return last;
      }
    } catch {
      /* transient */
    }
    await sleep(intervalMs);
  }
  return last;
}

// ---------------------------------------------------------------------------
// Lifecycle (Node SDK invocations)
// ---------------------------------------------------------------------------

const STEPS: Step[] = [
  // ---- CREATE ----
  {
    operationId: "create_signing_key",
    phase: "CREATE",
    invoke: (c) => c.signingKeys.create(),
    capture: (v, c) => { c.signingKeyId = v?.data?.id; },
  },
  {
    operationId: "create-a-playlist",
    phase: "CREATE",
    invoke: (c) =>
      c.playlist.create({
        name: "sdk validate playlist",
        referenceId: "sdkValidate" + Date.now().toString(36),
        type: "manual",
        description: "sdk validate",
        mediaIds: [],
        metadata: {},
      } as any),
    capture: (v, c) => { c.playlistId = v?.data?.id; },
  },
  {
    operationId: "create-new-stream",
    phase: "CREATE",
    invoke: (c) =>
      c.liveStreams.create({
        playbackSettings: { accessPolicy: "public" },
        inputMediaSettings: {
          metadata: { name: "sdk-validate" },
          maxResolution: "1080p",
          reconnectWindow: 60,
          mediaPolicy: "public",
        },
      } as any),
    capture: (v, c) => { c.streamId = v?.data?.streamId ?? v?.data?.id; },
  },
  {
    operationId: "create-media",
    phase: "CREATE",
    invoke: (c) =>
      c.inputVideo.create({
        inputs: [{ type: "video", url: "https://static.fastpix.com/fp-sample-video.mp4" }],
        metadata: { source: "sdk-validate" },
        accessPolicy: "public",
        maxResolution: "720p",
      } as any),
    capture: (v, c) => {
      c.mediaId = v?.data?.id;
      c.mediaPlaybackId = v?.data?.playbackIds?.[0]?.id;
    },
  },
  {
    operationId: "create-media-playback-id",
    phase: "CREATE",
    needs: ["mediaId"],
    invoke: (c, ctx) =>
      c.playback.create({
        mediaId: ctx.mediaId!,
        body: { accessPolicy: "public" },
      } as any),
    capture: (v, c) => { c.createdPlaybackId = v?.data?.id; },
  },
  {
    operationId: "Add-media-track",
    phase: "CREATE",
    needs: ["mediaId"],
    invoke: (c, ctx) =>
      c.manageVideos.addTrack({
        mediaId: ctx.mediaId!,
        body: {
          tracks: {
            url: "https://static.fastpix.com/music-1.mp3",
            type: "audio",
            languageCode: "it",
            languageName: "Italian",
          },
        },
      } as any),
    capture: (v, c) => { c.trackId = v?.data?.id; },
  },
  {
    operationId: "create-playbackId-of-stream",
    phase: "CREATE",
    needs: ["streamId"],
    invoke: (c, ctx) =>
      c.livePlayback.createId({
        streamId: ctx.streamId!,
        body: { accessPolicy: "public" },
      } as any),
    capture: (v, c) => { c.streamPlaybackId = v?.data?.id; },
  },
  {
    operationId: "create-simulcast-of-stream",
    phase: "CREATE",
    needs: ["streamId"],
    invoke: (c, ctx) =>
      c.simulcasts.create({
        streamId: ctx.streamId!,
        body: {
          url: "rtmp://example.com/live",
          streamKey: "sk-" + Date.now().toString(36),
        },
      } as any),
    capture: (v, c) => { c.simulcastId = v?.data?.simulcastId ?? v?.data?.id; },
  },
  {
    operationId: "direct-upload-video-media",
    phase: "CREATE",
    invoke: (c) =>
      c.inputVideo.upload({
        corsOrigin: "*",
        pushMediaSettings: {
          accessPolicy: "public",
          metadata: { source: "sdk-validate" },
        },
      } as any),
    capture: (v, c) => { c.uploadId = v?.data?.uploadId ?? v?.data?.id; },
  },
  {
    operationId: "Generate-subtitle-track",
    phase: "CREATE",
    needs: ["mediaId", "trackId"],
    invoke: (c, ctx) =>
      c.manageVideos.generateSubtitleTrack({
        mediaId: ctx.mediaId!,
        trackId: ctx.trackId!,
        body: {
          languageCode: "en-US",
          languageName: "English",
        },
      } as any),
  },

  // ---- UPDATE ----
  {
    operationId: "updated-media",
    phase: "UPDATE",
    needs: ["mediaId"],
    invoke: (c, ctx) =>
      c.manageVideos.update({
        mediaId: ctx.mediaId!,
        body: {
          metadata: { updated: "true" },
          title: "sdk validate title",
        },
      } as any),
  },
  {
    operationId: "updated-source-access",
    phase: "UPDATE",
    needs: ["mediaId"],
    invoke: (c, ctx) =>
      c.media.updateSourceAccess({
        mediaId: ctx.mediaId!,
        body: { sourceAccess: true },
      } as any),
  },
  {
    operationId: "updated-mp4Support",
    phase: "UPDATE",
    needs: ["mediaId"],
    invoke: (c, ctx) =>
      c.manageVideos.updateMp4Support({
        mediaId: ctx.mediaId!,
        body: { mp4Support: "capped_4k" },
      } as any),
  },
  {
    operationId: "update-media-summary",
    phase: "UPDATE",
    needs: ["mediaId"],
    invoke: (c, ctx) =>
      c.aiFeatures.updateSummary({
        mediaId: ctx.mediaId!,
        body: { generate: true, summaryLength: 100 },
      } as any),
  },
  {
    operationId: "update-media-chapters",
    phase: "UPDATE",
    needs: ["mediaId"],
    invoke: (c, ctx) =>
      c.inVideoAIfeatures.generateChapters({
        mediaId: ctx.mediaId!,
        body: { chapters: true },
      } as any),
  },
  {
    operationId: "update-media-named-entities",
    phase: "UPDATE",
    needs: ["mediaId"],
    invoke: (c, ctx) =>
      c.aiFeatures.generateNamedEntities({
        mediaId: ctx.mediaId!,
        body: { namedEntities: true },
      } as any),
  },
  {
    operationId: "update-media-moderation",
    phase: "UPDATE",
    needs: ["mediaId"],
    invoke: (c, ctx) =>
      c.inVideoAI.updateModeration({
        mediaId: ctx.mediaId!,
        body: { moderation: { type: "video" } },
      } as any),
  },
  {
    operationId: "update-media-track",
    phase: "UPDATE",
    needs: ["mediaId", "trackId"],
    invoke: (c, ctx) =>
      c.manageVideos.updateTrack({
        mediaId: ctx.mediaId!,
        trackId: ctx.trackId!,
        body: {
          url: "https://static.fastpix.com/music-1.mp3",
          languageCode: "en",
          languageName: "English",
        },
      } as any),
  },
  {
    operationId: "update-domain-restrictions",
    phase: "UPDATE",
    needs: ["mediaId", "mediaPlaybackId"],
    retryOn: "not ready for updates",
    invoke: (c, ctx) =>
      c.playback.updateDomainRestrictions({
        mediaId: ctx.mediaId!,
        playbackId: ctx.mediaPlaybackId!,
        body: {
          defaultPolicy: "allow",
          allow: ["example.com"],
          deny: [],
        },
      } as any),
  },
  {
    operationId: "update-user-agent-restrictions",
    phase: "UPDATE",
    needs: ["mediaId", "mediaPlaybackId"],
    retryOn: "not ready for updates",
    invoke: (c, ctx) =>
      c.playback.updateUserAgentRestrictions({
        mediaId: ctx.mediaId!,
        playbackId: ctx.mediaPlaybackId!,
        body: {
          defaultPolicy: "allow",
          allow: ["Mozilla"],
          deny: [],
        },
      } as any),
  },
  {
    operationId: "update-a-playlist",
    phase: "UPDATE",
    needs: ["playlistId"],
    invoke: (c, ctx) =>
      c.playlist.update({
        playlistId: ctx.playlistId!,
        body: {
          name: "sdk validate updated",
          description: "updated by validator",
        },
      } as any),
  },
  {
    operationId: "add-media-to-playlist",
    phase: "UPDATE",
    needs: ["playlistId", "mediaId"],
    invoke: (c, ctx) =>
      c.playlists.addMedia({
        playlistId: ctx.playlistId!,
        body: { mediaIds: [ctx.mediaId!] },
      } as any),
  },
  {
    operationId: "change-media-order-in-playlist",
    phase: "UPDATE",
    needs: ["playlistId", "mediaId"],
    invoke: (c, ctx) =>
      c.playlist.updateMediaOrder({
        playlistId: ctx.playlistId!,
        body: { mediaIds: [ctx.mediaId!] },
      } as any),
  },
  {
    operationId: "update-live-stream",
    phase: "UPDATE",
    needs: ["streamId"],
    invoke: (c, ctx) =>
      c.manageLiveStream.update({
        streamId: ctx.streamId!,
        body: {
          metadata: { updated: "true" },
          reconnectWindow: 120,
        },
      } as any),
  },
  {
    operationId: "update-specific-simulcast-of-stream",
    phase: "UPDATE",
    needs: ["streamId", "simulcastId"],
    invoke: (c, ctx) =>
      c.simulcasts.update({
        streamId: ctx.streamId!,
        simulcastId: ctx.simulcastId!,
        body: { isEnabled: false },
      } as any),
  },
  {
    operationId: "disable-live-stream",
    phase: "UPDATE",
    needs: ["streamId"],
    invoke: (c, ctx) => c.manageLiveStream.disable({ streamId: ctx.streamId! } as any),
  },
  {
    operationId: "enable-live-stream",
    phase: "UPDATE",
    needs: ["streamId"],
    invoke: (c, ctx) => c.liveStreams.enable({ streamId: ctx.streamId! } as any),
  },
  {
    operationId: "complete-live-stream",
    phase: "UPDATE",
    needs: ["streamId"],
    invoke: (c, ctx) => c.manageLiveStream.complete({ streamId: ctx.streamId! } as any),
  },
  {
    operationId: "cancel-upload",
    phase: "UPDATE",
    needs: ["uploadId"],
    invoke: (c, ctx) => c.manageVideos.cancelUpload({ uploadId: ctx.uploadId! } as any),
  },

  // ---- DELETE (last) ----
  {
    operationId: "delete-media-from-playlist",
    phase: "DELETE",
    needs: ["playlistId", "mediaId"],
    invoke: (c, ctx) =>
      c.playlists.deleteMedia({
        playlistId: ctx.playlistId!,
        body: { mediaIds: [ctx.mediaId!] },
      } as any),
  },
  {
    operationId: "delete-a-playlist",
    phase: "DELETE",
    needs: ["playlistId"],
    invoke: (c, ctx) => c.playlist.delete({ playlistId: ctx.playlistId! } as any),
  },
  {
    operationId: "delete-media-track",
    phase: "DELETE",
    needs: ["mediaId", "trackId"],
    invoke: (c, ctx) =>
      c.media.deleteTrack({ mediaId: ctx.mediaId!, trackId: ctx.trackId! } as any),
  },
  {
    operationId: "delete-media-playback-id",
    phase: "DELETE",
    needs: ["mediaId", "createdPlaybackId"],
    invoke: (c, ctx) =>
      c.playback.delete({
        mediaId: ctx.mediaId!,
        playbackId: ctx.createdPlaybackId!,
      } as any),
  },
  {
    operationId: "delete-simulcast-of-stream",
    phase: "DELETE",
    needs: ["streamId", "simulcastId"],
    invoke: (c, ctx) =>
      c.simulcastStreams.delete({
        streamId: ctx.streamId!,
        simulcastId: ctx.simulcastId!,
      } as any),
  },
  {
    operationId: "delete-playbackId-of-stream",
    phase: "DELETE",
    needs: ["streamId", "streamPlaybackId"],
    invoke: (c, ctx) =>
      c.livePlayback.delete({
        streamId: ctx.streamId!,
        playbackId: ctx.streamPlaybackId!,
      } as any),
  },
  {
    operationId: "delete-live-stream",
    phase: "DELETE",
    needs: ["streamId"],
    invoke: (c, ctx) => c.liveStreams.delete({ streamId: ctx.streamId! } as any),
  },
  {
    operationId: "delete-media",
    phase: "DELETE",
    needs: ["mediaId"],
    invoke: (c, ctx) => c.manageVideos.delete({ mediaId: ctx.mediaId! } as any),
  },
  {
    operationId: "delete_signing_key",
    phase: "DELETE",
    needs: ["signingKeyId"],
    invoke: (c, ctx) =>
      c.signingKeys.delete({ signingKeyId: ctx.signingKeyId! } as any),
  },
];

// ---------------------------------------------------------------------------
// Artifacts + report
// ---------------------------------------------------------------------------

function writeArtifacts(operationId: string, rawBody: any, sdkValue: any) {
  const dir = join(__dirname, ARTIFACTS_DIRNAME);
  mkdirSync(dir, { recursive: true });
  const slug = safeFileSlug(operationId);
  writeFileSync(join(dir, `${slug}.raw.json`), toPrettyJson(rawBody ?? null));
  writeFileSync(join(dir, `${slug}.sdk.json`), toPrettyJson(sdkValue ?? null));
}

function writeReport(results: StepResult[], ctx: Ctx) {
  const total = results.length;
  const pass = results.filter((r) => r.status === "PASS").length;
  const fail = results.filter((r) => r.status === "FAIL").length;
  const skip = results.filter((r) => r.status === "SKIP").length;

  const lines: string[] = [];
  lines.push("# Non-GET endpoints validation report (Node SDK)\n");
  lines.push(`Generated: ${new Date().toISOString()}\n`);
  lines.push("## Summary\n");
  lines.push(`- **Total**: ${total}`);
  lines.push(`- **PASS**: ${pass}`);
  lines.push(`- **FAIL**: ${fail}`);
  lines.push(`- **SKIP**: ${skip}\n`);

  lines.push("## Captured resources\n");
  for (const [k, v] of Object.entries(ctx))
    lines.push(`- \`${k}\`: ${v ?? "(not created)"}`);
  lines.push("");

  lines.push("## Consolidated\n");
  lines.push(
    "| Phase | Method | OperationId | HTTP | OpenAPI valid | SDK | Missing in SDK | Missing in API | Status |",
  );
  lines.push("|---|---|---|---:|:--:|:--:|---|---|:--:|");
  const order: Phase[] = ["CREATE", "UPDATE", "DELETE"];
  for (const ph of order) {
    for (const r of results.filter((x) => x.phase === ph)) {
      const ov = r.openapiValid === null ? "—" : r.openapiValid ? "✅" : "❌";
      const sdk = r.status === "SKIP" ? "—" : r.sdkOk ? "✅" : "❌";
      const mis = (a: string[]) => (a.length ? a.join(", ") : "None");
      const st =
        r.status === "PASS"
          ? "✅ PASS"
          : r.status === "SKIP"
            ? "⤳ SKIP"
            : "❌ FAIL";
      lines.push(
        `| ${r.phase} | ${r.method} | \`${r.operationId}\` | ${r.httpStatus ?? "—"} | ${ov} | ${sdk} | ${mis(r.missingInSDK)} | ${mis(r.missingInAPI)} | ${st} |`,
      );
    }
  }
  lines.push("");

  lines.push("## Per-operation\n");
  for (const r of results) {
    lines.push(`### ${r.operationId} (\`${r.method} ${r.path}\`)`);
    lines.push(`- **Phase**: ${r.phase}`);
    lines.push(`- **Status**: ${r.status}`);
    if (r.httpStatus !== null) lines.push(`- **HTTP**: ${r.httpStatus}`);
    if (r.capturedId) lines.push(`- **Captured id**: \`${r.capturedId}\``);
    if (r.note) lines.push(`- **Note**: ${r.note}`);
    if (r.sdkError) lines.push(`- **SDK error**: ${preview(r.sdkError)}`);
    if (r.openapiErrors.length) {
      lines.push(`- **OpenAPI errors**:`);
      for (const e of r.openapiErrors.slice(0, 20))
        lines.push(`  - \`${e.path ?? ""}\` ${e.message ?? JSON.stringify(e)}`);
    }
    if (r.missingInSDK.length) {
      lines.push(`- **Missing in SDK**:`);
      for (const p of r.missingInSDK) lines.push(`  - \`${p}\``);
    }
    if (r.missingInAPI.length) {
      lines.push(`- **Missing in API**:`);
      for (const p of r.missingInAPI) lines.push(`  - \`${p}\``);
    }
    lines.push("");
  }

  writeFileSync(join(__dirname, REPORT_MD), lines.join("\n"));
  console.log(`Report generated: ${join(__dirname, REPORT_MD)}`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const spec = loadOpenAPISpec();
  const endpoints = extractNonGetEndpoints(spec);

  const baseUrl: string =
    process.env.FASTPIX_BASE_URL ??
    process.env.FASTPIX_SERVER_URL ??
    ((spec.servers?.[0]?.url as string | undefined) ?? "https://api.fastpix.com/v1/");

  const username = process.env.FASTPIX_USERNAME ?? "";
  const password = process.env.FASTPIX_PASSWORD ?? "";
  if (!username || !password) {
    throw new Error(
      "Set FASTPIX_USERNAME and FASTPIX_PASSWORD env vars (BasicAuth) — use real credentials for live API validation",
    );
  }

  const client = new Fastpix({
    security: { username, password },
    serverURL: baseUrl,
    httpClient: sharedHttpClient,
  } as any);

  const ctx: Ctx = {};
  const results: StepResult[] = [];

  for (let i = 0; i < STEPS.length; i++) {
    const step = STEPS[i];
    const ep = endpoints.get(step.operationId);
    const base = {
      operationId: step.operationId,
      method: ep?.method ?? "?",
      path: ep?.path ?? "?",
      phase: step.phase,
      openapiErrors: [] as any[],
      missingInSDK: [] as string[],
      missingInAPI: [] as string[],
    };

    console.log(`[${i + 1}/${STEPS.length}] (${step.phase}) ${step.operationId}`);

    if (!ep) {
      results.push({
        ...base,
        status: "SKIP",
        httpStatus: null,
        openapiValid: null,
        sdkOk: false,
        note: "operationId not found in spec",
      });
      continue;
    }

    const missing = (step.needs ?? []).filter((k) => !ctx[k]);
    if (missing.length) {
      console.log(`  ⤳ SKIP (missing: ${missing.join(", ")})`);
      results.push({
        ...base,
        status: "SKIP",
        httpStatus: null,
        openapiValid: null,
        sdkOk: false,
        note: `missing dependency: ${missing.join(", ")}`,
      });
      continue;
    }

    // Track generate-subtitles needs the just-added track to be present
    if (
      step.operationId === "Generate-subtitle-track" &&
      ctx.mediaId &&
      ctx.trackId
    ) {
      process.stdout.write(`  ⏳ waiting for track ${ctx.trackId} to be ready...`);
      const t = await waitForTrackReady(baseUrl, username, password, ctx.mediaId, ctx.trackId);
      console.log(` ${t}`);
    }

    let result = await invokeSDK(client, step, ctx);

    if (step.retryOn) {
      let attempt = 0;
      const maxAttempts = 24;
      while (
        !result.ok &&
        attempt < maxAttempts &&
        JSON.stringify(result.error ?? {}).includes(step.retryOn)
      ) {
        attempt++;
        if (attempt === 1) process.stdout.write(`  ⏳ resource not ready, retrying`);
        else process.stdout.write(".");
        await sleep(5000);
        result = await invokeSDK(client, step, ctx);
      }
      if (attempt > 0) console.log("");
    }

    if (!result.ok) {
      const msg = `${result.error.name ?? "Error"}: ${result.error.message ?? "SDK call failed"}`;
      console.log(`  ❌ FAIL — ${msg.split("\n")[0].slice(0, 140)}`);
      writeArtifacts(step.operationId, result.error.bodyJson ?? null, result.error);
      results.push({
        ...base,
        status: "FAIL",
        httpStatus: result.error.statusCode ?? null,
        openapiValid: null,
        sdkOk: false,
        sdkError: msg,
      });
      continue;
    }

    let capturedId: string | undefined;
    if (step.capture) step.capture(result.value, ctx);

    if (step.operationId === "create-media" && ctx.mediaId) {
      process.stdout.write(`  ⏳ waiting for media ${ctx.mediaId} to be Ready...`);
      const status = await waitForMediaReady(baseUrl, username, password, ctx.mediaId);
      console.log(` ${status}`);
    }

    capturedId =
      step.operationId === "create_signing_key"
        ? ctx.signingKeyId
        : step.operationId === "create-a-playlist"
          ? ctx.playlistId
          : step.operationId === "create-new-stream"
            ? ctx.streamId
            : step.operationId === "create-media"
              ? ctx.mediaId
              : step.operationId === "create-media-playback-id"
                ? ctx.createdPlaybackId
                : step.operationId === "Add-media-track"
                  ? ctx.trackId
                  : step.operationId === "create-playbackId-of-stream"
                    ? ctx.streamPlaybackId
                    : step.operationId === "create-simulcast-of-stream"
                      ? ctx.simulcastId
                      : step.operationId === "direct-upload-video-media"
                        ? ctx.uploadId
                        : undefined;

    const validator = makeOpenAPIResponseValidator(spec, ep);
    let openapiValid: boolean | null = null;
    let openapiErrors: any[] = [];
    if (validator && result.statusCode) {
      const err = validator.validateResponse(String(result.statusCode), result.rawBody);
      openapiValid = !err;
      openapiErrors = err?.errors ?? [];
    }

    const apiNorm = normalizeJsonForComparison(result.rawBody);
    const sdkNorm =
      result.value && typeof result.value === "object"
        ? normalizeJsonForComparison(jsonRoundTrip(result.value))
        : null;
    const apiPaths = collectJsonPaths(apiNorm, "", { includeEmptyArrays: false });
    const sdkPaths = sdkNorm
      ? collectJsonPaths(sdkNorm, "", { includeEmptyArrays: false })
      : new Set<string>();
    const missingInSDK = sdkPaths.size
      ? sortUnique([...apiPaths].filter((p) => !sdkPaths.has(p)))
      : [];
    const missingInAPI = sdkPaths.size
      ? sortUnique([...sdkPaths].filter((p) => !apiPaths.has(p)))
      : [];

    writeArtifacts(step.operationId, result.rawBody, result.value);

    const status: StepResult["status"] =
      result.ok &&
      (openapiValid === null || openapiValid) &&
      missingInSDK.length === 0 &&
      missingInAPI.length === 0
        ? "PASS"
        : "FAIL";

    console.log(
      `  ${status === "PASS" ? "✅ PASS" : "❌ FAIL"} (HTTP ${result.statusCode ?? "?"})${capturedId ? ` id=${capturedId}` : ""}`,
    );

    results.push({
      ...base,
      status,
      httpStatus: result.statusCode,
      openapiValid,
      openapiErrors,
      sdkOk: true,
      missingInSDK,
      missingInAPI,
      capturedId,
    });
  }

  writeReport(results, ctx);
  const pass = results.filter((r) => r.status === "PASS").length;
  const fail = results.filter((r) => r.status === "FAIL").length;
  const skip = results.filter((r) => r.status === "SKIP").length;
  console.log(
    `Summary: total=${results.length} pass=${pass} fail=${fail} skip=${skip}`,
  );
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
