# FastPix Webhooks

FastPix signs every webhook delivery. The SDK's `webhooks` resource verifies
that signature and returns the parsed, trusted event in **one call** — so you
never act on a forged or tampered payload.

## The one function you call

```ts
const event = fastpix.webhooks.unwrap(rawBody, headers);
```

`unwrap(body, headers, secret?)` verifies the signature and returns the parsed
event. It **throws `WebhookVerificationError`** if anything is wrong. To verify
without parsing, use `fastpix.webhooks.verifySignature(body, headers, secret?)`.

## Setup

The webhook signing secret is **separate** from your API username/password. Get
it from the FastPix dashboard (it's base64) and provide it any of three ways:

```ts
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  webhookSecret: process.env.FASTPIX_WEBHOOK_SECRET, // 1. client option
});

// 2. the FASTPIX_WEBHOOK_SECRET env var (used automatically if the option is omitted)
// 3. per call: fastpix.webhooks.unwrap(body, headers, "the-secret")
```

## Complete Express server

A full, runnable endpoint. Three things matter, and all three are handled here:

1. **`express.raw()`** — verification runs over the *exact bytes* FastPix sent;
   `express.json()` would re-serialize and break it.
2. **The validation probe** — when you add the URL in the dashboard, FastPix
   sends an unsigned `{}` body to check the endpoint. Answer it with `200`
   *before* verifying, or the dashboard won't activate it.
3. **`WebhookVerificationError` → `400`** — distinguish a bad signature (client
   error) from a real server crash (`500`).

```ts
import express from "express";
import { Fastpix, WebhookVerificationError } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({ webhookSecret: process.env.FASTPIX_WEBHOOK_SECRET });
const app = express();

// Use a durable store in production (Redis, or a DB unique constraint on the id).
const seen = new Set<string>();

app.post(
  "/webhooks/fastpix",
  express.raw({ type: "application/json" }), // keep the RAW body
  (req, res) => {
    const signature = req.header("FastPix-Signature");
    const rawText = req.body?.toString("utf8") ?? "";

    // Dashboard validation probe: unsigned, empty/"{}" body → ack first.
    if (!signature && (rawText.trim() === "" || rawText.trim() === "{}")) {
      return res.status(200).send("ok");
    }

    try {
      const event = fastpix.webhooks.unwrap(req.body, req.headers);

      // Dedupe on the top-level id (the idempotency key — NOT object.id).
      if (seen.has(event.id)) return res.status(202).send("duplicate");
      seen.add(event.id);

      // Route on `type`. `event.data` is typed per event (see "Typed events").
      switch (event.type) {
        case "video.media.ready":
        case "video.media.updated":
          console.log(`media ${event.object.id} -> ${event.data.status}`);
          break;
        case "video.live_stream.created":
          console.log(`stream ${event.data.streamId} created`);
          break;
        default:
          console.log(`unhandled: ${event.type}`);
      }

      return res.status(202).send("accepted");
    } catch (err) {
      if (err instanceof WebhookVerificationError) {
        return res.status(400).send("invalid signature"); // bad signature
      }
      throw err; // unexpected → 500
    }
  },
);

app.listen(3000, () => console.log("Listening on :3000/webhooks/fastpix"));
```

> **CommonJS:** replace the imports with
> `const express = require("express");` and
> `const { Fastpix, WebhookVerificationError } = require("@fastpix/fastpix-node");`
> — everything else is identical.

## The event envelope

```jsonc
{
  "type": "video.media.updated",            // route on this
  "object": { "type": "media", "id": "…" }, // affected resource id (== data.id)
  "id": "…",                                 // IDEMPOTENCY KEY — dedupe on this
  "workspace": { "id": "…", "name": "…" },
  "status": "media_created",
  "data": { /* full entity: id, status, playbackIds, tracks, … */ },
  "createdAt": "2026-06-22T12:38:29.375Z",
  "attempts": []
}
```

- **Route** on `type`.
- **Dedupe** on the top-level `id` (not `object.id`).
- **Affected resource** is `object.id`, equal to `data.id`.

## Typed events

`unwrap()` returns a discriminated union, so `switch (event.type)` narrows
`event.data` automatically — no casts:

- `video.media.*` events ⇒ `data` is a [`Media`](../src/models/media.ts).
- `video.live_stream.*` events ⇒ `data` is a
  [`CreateLiveStreamResponseDTO`](../src/models/createlivestreamresponsedto.ts).

For an event the SDK doesn't model yet, pass your own shape:
`unwrap<MyShape>(body, headers)` returns `WebhookEvent<MyShape>`.

## Local testing

`http://localhost` is **not reachable** by FastPix. Expose your server with a
tunnel and register the **public** URL in the dashboard:

```bash
npx ngrok http 3000
# register https://<id>.ngrok-free.app/webhooks/fastpix in the FastPix dashboard
```

To send a test event yourself, sign the **exact body bytes** with the
**base64-decoded** secret:

```ts
import { createHmac } from "node:crypto";

const sig = createHmac("sha256", Buffer.from(secret, "base64")) // decode the secret!
  .update(rawBody)                                              // exact bytes you send
  .digest("base64");                                           // base64, not hex
// send it as the `FastPix-Signature` header
```

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `400` "must be the raw request payload" | Body was parsed (e.g. `express.json()`) | Mount `express.raw({ type: "application/json" })` |
| Dashboard says endpoint **not connecting** | Validation probe (unsigned `{}`) got a `400` | Return `200` to the unsigned empty/`{}` probe before verifying |
| `400` "signature mismatch" on your own test | Signed with the secret as a **raw string** | Base64-**decode** the secret: `Buffer.from(secret, "base64")` |
| `400` "signature mismatch" with right secret | Signed **different bytes** than you sent (whitespace, key order, trailing newline) | Sign the *exact* bytes of the request body |
| No requests arrive at all | `localhost` registered, or stale tunnel URL | Register the current public tunnel URL |
| `400` "Missing webhook secret" | No secret configured | Set `webhookSecret` / `FASTPIX_WEBHOOK_SECRET`, or pass it to `unwrap()` |

## Key takeaways

- **One call:** `fastpix.webhooks.unwrap(body, headers)` → verified, parsed, typed event.
- **Raw body only** — never feed `unwrap` a pre-parsed object.
- **Secret ≠ password** — it's base64; the SDK base64-decodes it before keying the HMAC.
- **Answer the validation probe** (unsigned empty/`{}` body) with `200`.
- **No timestamp is signed** → no replay window; dedupe on the top-level `id`.
- **Status codes:** `200` probe, `202` accepted/duplicate, `400` on `WebhookVerificationError`.
 