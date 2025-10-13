/**
 * Manage Live Stream API Samples
 * 
 * This file demonstrates how to use the Manage Live Stream API to:
 * - List all streams
 * - Get stream by ID
 * - Update stream settings
 * - Enable/disable streams
 * - Get viewer count
 * - Complete streams
 * - Delete streams
 * 
 * Run this sample:
 * npx tsx live/manage-live-stream.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { config, logResponse } from "../common/config.js";

let streamId: string | undefined;

async function listAllStreams() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageLiveStream.getAllStreams({
    limit: 10,
    offset: 0,
  });

  logResponse("List All Streams", result);
  
  // Store the first stream ID for other operations
  if (result.getAllStreamsSuccessResponse?.data?.streams?.[0]?.id) {
    streamId = result.getAllStreamsSuccessResponse.data.streams[0].id;
  }
  
  return result;
}

async function getStreamById() {
  if (!streamId) {
    console.log("⚠️  No stream ID available. Run listAllStreams first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageLiveStream.getLiveStreamById({
    streamId: streamId,
  });

  logResponse("Get Stream by ID", result);
  return result;
}

async function updateStream() {
  if (!streamId) {
    console.log("⚠️  No stream ID available. Run listAllStreams first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageLiveStream.updateLiveStream({
    streamId: streamId,
    requestBody: {
      metadata: {
        name: "Updated Stream Name",
        description: "This stream has been updated via SDK",
      },
      reconnectWindow: 60,
    },
  });

  logResponse("Update Stream", result);
  return result;
}

async function enableStream() {
  if (!streamId) {
    console.log("⚠️  No stream ID available. Run listAllStreams first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageLiveStream.enableLiveStream({
    streamId: streamId,
  });

  logResponse("Enable Stream", result);
  return result;
}

async function disableStream() {
  if (!streamId) {
    console.log("⚠️  No stream ID available. Run listAllStreams first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageLiveStream.disableLiveStream({
    streamId: streamId,
  });

  logResponse("Disable Stream", result);
  return result;
}

async function getViewerCount() {
  if (!streamId) {
    console.log("⚠️  No stream ID available. Run listAllStreams first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageLiveStream.getLiveStreamViewerCountById({
    streamId: streamId,
  });

  logResponse("Get Viewer Count", result);
  return result;
}

async function completeStream() {
  if (!streamId) {
    console.log("⚠️  No stream ID available. Run listAllStreams first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageLiveStream.completeLiveStream({
    streamId: streamId,
  });

  logResponse("Complete Stream", result);
  return result;
}

async function deleteStream() {
  if (!streamId) {
    console.log("⚠️  No stream ID available. Run listAllStreams first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageLiveStream.deleteLiveStream({
    streamId: streamId,
  });

  logResponse("Delete Stream", result);
  streamId = undefined; // Reset the ID since stream is deleted
  return result;
}

async function main() {
  console.log("📺 Manage Live Stream API Samples");
  console.log("==================================");
  
  await runSample("List All Streams", listAllStreams);
  await runSample("Get Stream by ID", getStreamById);
  await runSample("Update Stream", updateStream);
  await runSample("Enable Stream", enableStream);
  await runSample("Get Viewer Count", getViewerCount);
  await runSample("Disable Stream", disableStream);
  
  // Uncomment to complete or delete the stream (be careful!)
  // await runSample("Complete Stream", completeStream);
  // await runSample("Delete Stream", deleteStream);
}

main().catch(console.error);
