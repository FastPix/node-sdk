import dotenv from "dotenv";
dotenv.config();
/**
 * Example usage of the @fastpix/fastpix-node SDK: live streaming with
 * recording control and playback access restrictions.
 *
 * To run this example from the examples directory:
 * npm run build && npx tsx liveStreaming.example.ts
 */

import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: process.env["FASTPIX_USERNAME"] ?? "FASTPIX_TOKEN",
    password: process.env["FASTPIX_PASSWORD"] ?? "SECRET-KEY",
  },
});

async function main() {
  // 1. Create a live stream, disabling Live-to-VOD recording, and set
  //    domain restrictions on the default playback ID.
  const stream = await fastpix.liveStreams.create({
    playbackSettings: {
      accessPolicy: "public",
      accessRestrictions: {
        domains: { defaultPolicy: "deny", allow: ["example.com"], deny: [] },
        userAgents: { defaultPolicy: "allow", allow: [], deny: [] },
      },
    },
    inputMediaSettings: {
      metadata: { livestream_name: "fastpix_livestream" },
      enableRecording: false,
    },
  });
  console.log("stream:", JSON.stringify(stream, null, 2));

  const streamId = "data" in stream ? stream.data?.streamId : undefined;
  if (!streamId) return;

  // 2. Create an additional playback ID that carries its own access restrictions.
  const playback = await fastpix.livePlayback.createId({
    streamId,
    body: {
      accessPolicy: "public",
      accessRestrictions: {
        domains: { defaultPolicy: "deny", allow: ["example.com"], deny: [] },
        userAgents: { defaultPolicy: "allow", allow: [], deny: [] },
      },
    },
  });
  console.log("playback:", JSON.stringify(playback, null, 2));

  const playbackId = "data" in playback ? playback.data?.id : undefined;
  if (!playbackId) return;

  // 3. Update the playback ID's domain restrictions.
  const updated = await fastpix.livePlayback.updateDomainRestrictions({
    streamId,
    playbackId,
    body: {
      defaultPolicy: "allow",
      allow: ["yourdomain.com", "*.sampledomain.com"],
      deny: ["malicioussite.io"],
    },
  });
  console.log("updated restrictions:", JSON.stringify(updated, null, 2));
}

main();
