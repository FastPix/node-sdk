/**
* Example: receiving FastPix webhooks with Express.
*
* To run this example from the examples directory:
*   npm i express && npm i -D @types/express
*   npm run build && npx tsx webhooksServer.example.ts
*
* Set FASTPIX_WEBHOOK_SECRET in your environment (or .env) to the webhook
* signing secret from the FastPix dashboard. It is base64-encoded and is NOT
* your API password.
*/

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Fastpix, WebhookVerificationError } from "@fastpix/fastpix-node";

// `security` here is only needed if this same client also makes API calls.
// Webhook verification uses `webhookSecret` (or FASTPIX_WEBHOOK_SECRET), which
// is completely separate from the API username/password.
const fastpix = new Fastpix({
  webhookSecret: process.env.FASTPIX_WEBHOOK_SECRET, // defaults to this env var anyway
});

const app = express();

// Don't advertise the framework/version in responses (avoids the
// "X-Powered-By: Express" header). Recommended for production endpoints.
app.disable("x-powered-by");

// In-memory idempotency store. In production use a durable store (Redis, a DB
// table with a unique constraint on the event id, etc.) so dedupe survives
// restarts and works across instances.
const processedEventIds = new Set<string>();

app.post(
  "/webhooks/fastpix",
  // CRITICAL: capture the RAW body. The signature is computed over the exact
  // bytes FastPix sent — express.json() would re-serialize and break verification.
  express.raw({ type: "application/json" }),
  (req, res) => {
    const signature = req.header("FastPix-Signature");

    // 1. Endpoint-validation PING.
    //    When you add/verify an endpoint, FastPix sends a probe with an empty
    //    body (or "{}") and NO signature. Acknowledge it with 200 BEFORE doing
    //    any verification, otherwise the endpoint can't be validated.
    const rawText = req.body?.toString("utf8") ?? "";
    const isPing = !signature && (rawText.trim() === "" || rawText.trim() === "{}");
    if (isPing) {
      return res.status(200).send("ok");
    }

    // 2. Real event: verify + parse in one call.
    try {
      const event = fastpix.webhooks.unwrap(req.body, req.headers);

      // 3. Dedupe on the TOP-LEVEL event id (the idempotency key), not object.id.
      //    There is no signed timestamp, so idempotency is the only replay guard.
      if (processedEventIds.has(event.id)) {
        return res.status(202).send("duplicate ignored");
      }
      processedEventIds.add(event.id);

      // 4. Route on `type`; the affected resource id is `object.id` (== data.id).
      switch (event.type) {
        case "video.media.created":
        case "video.media.updated":
          console.log(`media ${event.object.id} -> ${event.status}`);
          break;
        default:
          console.log(`unhandled event type: ${event.type}`);
      }

      // Acknowledge fast (202 Accepted) and do heavy work asynchronously.
      return res.status(202).send("accepted");
    } catch (err) {
      // Verification failures are client errors -> 400 so FastPix retries later.
      if (err instanceof WebhookVerificationError) {
        console.warn("webhook verification failed:", err.message);
        return res.status(400).send("invalid signature");
      }
      throw err; // unexpected -> let Express return 500
    }
  },
);

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => {
  console.log(`Listening for FastPix webhooks on http://localhost:${port}/webhooks/fastpix`);
});
 