/**
 * Manage Videos API Samples
 * 
 * This file demonstrates how to use the Manage Videos API to:
 * - List all media
 * - Get media by ID
 * - Update media
 * - Delete media
 * - Add/update/delete tracks
 * - Generate subtitles
 * 
 * Run this sample:
 * npx tsx media/manage-videos.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { config, logResponse, logError } from "../common/config.js";

let createdMediaId: string | undefined;

async function listMedia() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageVideos.listMedia({
    limit: 10,
    offset: 0,
  });

  logResponse("List Media", result);
  return result;
}

async function getMediaById() {
  if (!createdMediaId) {
    console.log("⚠️  No media ID available. Run createMediaFromUrl first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageVideos.getMedia({
    mediaId: createdMediaId,
  });

  logResponse("Get Media by ID", result);
  return result;
}

async function updateMedia() {
  if (!createdMediaId) {
    console.log("⚠️  No media ID available. Run createMediaFromUrl first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageVideos.updatedMedia({
    mediaId: createdMediaId,
    requestBody: {
      metadata: {
        title: "Updated Sample Video",
        description: "This video has been updated via SDK",
        category: "updated-sample",
      },
    },
  });

  logResponse("Update Media", result);
  return result;
}

async function addMediaTrack() {
  if (!createdMediaId) {
    console.log("⚠️  No media ID available. Run createMediaFromUrl first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageVideos.addMediaTrack({
    mediaId: createdMediaId,
    requestBody: {
      type: "subtitle",
      language: "en",
      name: "English Subtitles",
    },
  });

  logResponse("Add Media Track", result);
  return result;
}

async function generateSubtitleTrack() {
  if (!createdMediaId) {
    console.log("⚠️  No media ID available. Run createMediaFromUrl first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageVideos.generateSubtitleTrack({
    mediaId: createdMediaId,
    requestBody: {
      language: "en",
      name: "Auto-generated English Subtitles",
    },
  });

  logResponse("Generate Subtitle Track", result);
  return result;
}

async function deleteMedia() {
  if (!createdMediaId) {
    console.log("⚠️  No media ID available. Run createMediaFromUrl first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.manageVideos.deleteMedia({
    mediaId: createdMediaId,
  });

  logResponse("Delete Media", result);
  createdMediaId = undefined; // Reset the ID since media is deleted
  return result;
}

async function main() {
  console.log("🎬 Manage Videos API Samples");
  console.log("=============================");
  
  // First, create a media item to work with
  console.log("\n📹 Creating sample media...");
  const fastpix = createFastpixClient();
  const createResult = await fastpix.inputVideo.createMedia({
    inputs: [
      {
        type: "video",
        url: config.sampleVideoUrl,
      },
    ],
    metadata: {
      title: "Sample Video for Management",
      description: "This video will be used to demonstrate management operations",
    },
    accessPolicy: "public",
  });

  if (createResult.createMediaSuccessResponse?.data?.id) {
    createdMediaId = createResult.createMediaSuccessResponse.data.id;
    console.log(`✅ Created media with ID: ${createdMediaId}`);
  }

  await runSample("List Media", listMedia);
  await runSample("Get Media by ID", getMediaById);
  await runSample("Update Media", updateMedia);
  await runSample("Add Media Track", addMediaTrack);
  await runSample("Generate Subtitle Track", generateSubtitleTrack);
  
  // Uncomment to delete the media (be careful!)
  // await runSample("Delete Media", deleteMedia);
}

main().catch(console.error);
