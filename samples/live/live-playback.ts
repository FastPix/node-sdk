/**
 * Live Playback API Samples
 * 
 * This file demonstrates how to use the Live Playback API to:
 * - Create playback IDs for live streams
 * - Get live playback ID details
 * - Delete live playback IDs
 * 
 * Run this sample:
 * npx tsx live/live-playback.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { logResponse } from "../common/config.js";

let streamId: string | undefined;
let createdPlaybackId: string | undefined;

async function getStreamForPlayback() {
  const fastpix = createFastpixClient();
  
  // First, get a stream to create playback ID for
  const streams = await fastpix.manageLiveStream.getAllStreams({ limit: 1 });
  const stream = streams.getAllStreamsSuccessResponse?.data?.streams?.[0];
  
  if (!stream?.id) {
    console.log("⚠️  No streams found. Please create a stream first using start-live-stream.ts");
    return;
  }

  streamId = stream.id;
  console.log(`📺 Using stream ID: ${streamId}`);
  return stream;
}

async function createPlaybackIdOfStream() {
  if (!streamId) {
    console.log("⚠️  No stream ID available. Run getStreamForPlayback first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.livePlayback.createPlaybackIdOfStream({
    streamId: streamId,
    requestBody: {
      policy: "public",
    },
  });

  if (result.createPlaybackIdOfStreamSuccessResponse?.data?.id) {
    createdPlaybackId = result.createPlaybackIdOfStreamSuccessResponse.data.id;
  }

  logResponse("Create Playback ID of Stream", result);
  return result;
}

async function getLiveStreamPlaybackId() {
  if (!createdPlaybackId) {
    console.log("⚠️  No playback ID available. Run createPlaybackIdOfStream first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.livePlayback.getLiveStreamPlaybackId({
    playbackId: createdPlaybackId,
  });

  logResponse("Get Live Stream Playback ID", result);
  return result;
}

async function deletePlaybackIdOfStream() {
  if (!createdPlaybackId) {
    console.log("⚠️  No playback ID available. Run createPlaybackIdOfStream first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.livePlayback.deletePlaybackIdOfStream({
    playbackId: createdPlaybackId,
  });

  logResponse("Delete Playback ID of Stream", result);
  createdPlaybackId = undefined; // Reset the ID since playback ID is deleted
  return result;
}

async function main() {
  console.log("▶️  Live Playback API Samples");
  console.log("=============================");
  
  await runSample("Get Stream for Playback", getStreamForPlayback);
  await runSample("Create Playback ID of Stream", createPlaybackIdOfStream);
  await runSample("Get Live Stream Playback ID", getLiveStreamPlaybackId);
  
  // Uncomment to delete the playback ID
  // await runSample("Delete Playback ID of Stream", deletePlaybackIdOfStream);
}

main().catch(console.error);
