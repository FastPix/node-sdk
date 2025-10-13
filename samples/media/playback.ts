/**
 * Playback API Samples
 * 
 * This file demonstrates how to use the Playback API to:
 * - Create playback IDs
 * - Get playback ID details
 * - Delete playback IDs
 * 
 * Run this sample:
 * npx tsx media/playback.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { config, logResponse } from "../common/config.js";

let createdPlaybackId: string | undefined;

async function createPlaybackId() {
  const fastpix = createFastpixClient();
  
  // First, get a media item to create playback ID for
  const mediaList = await fastpix.manageVideos.listMedia({ limit: 1 });
  const mediaId = mediaList.listMediaSuccessResponse?.data?.media?.[0]?.id;
  
  if (!mediaId) {
    console.log("⚠️  No media found. Please create some media first.");
    return;
  }

  const result = await fastpix.playback.createMediaPlaybackId({
    mediaId: mediaId,
    requestBody: {
      policy: "public",
    },
  });

  if (result.createMediaPlaybackIdSuccessResponse?.data?.id) {
    createdPlaybackId = result.createMediaPlaybackIdSuccessResponse.data.id;
  }

  logResponse("Create Playback ID", result);
  return result;
}

async function getPlaybackId() {
  if (!createdPlaybackId) {
    console.log("⚠️  No playback ID available. Run createPlaybackId first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.playback.getPlaybackId({
    playbackId: createdPlaybackId,
  });

  logResponse("Get Playback ID", result);
  return result;
}

async function deletePlaybackId() {
  if (!createdPlaybackId) {
    console.log("⚠️  No playback ID available. Run createPlaybackId first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.playback.deleteMediaPlaybackId({
    playbackId: createdPlaybackId,
  });

  logResponse("Delete Playback ID", result);
  createdPlaybackId = undefined; // Reset the ID since playback ID is deleted
  return result;
}

async function main() {
  console.log("▶️  Playback API Samples");
  console.log("========================");
  
  await runSample("Create Playback ID", createPlaybackId);
  await runSample("Get Playback ID", getPlaybackId);
  
  // Uncomment to delete the playback ID
  // await runSample("Delete Playback ID", deletePlaybackId);
}

main().catch(console.error);
