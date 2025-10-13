/**
 * AI Features API Samples
 * 
 * This file demonstrates how to use the In-Video AI Features API to:
 * - Generate video summaries
 * - Create video chapters
 * - Extract named entities
 * - Enable content moderation
 * 
 * Run this sample:
 * npx tsx ai/ai-features.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { config, logResponse, getErrorMessage } from "../common/config.js";

let mediaId: string | undefined;

async function getMediaForAI() {
  const fastpix = createFastpixClient();
  
  // First, get a media item to apply AI features to
  const mediaList = await fastpix.manageVideos.listMedia({ limit: 1 });
  const media = mediaList.listMediaSuccessResponse?.data?.media?.[0];
  
  if (!media?.id) {
    console.log("⚠️  No media found. Please create some media first.");
    return;
  }

  mediaId = media.id;
  console.log(`📹 Using media ID: ${mediaId}`);
  return media;
}

async function generateVideoSummary() {
  if (!mediaId) {
    console.log("⚠️  No media ID available. Run getMediaForAI first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.inVideoAIFeatures.updateMediaSummary({
    mediaId: mediaId,
    requestBody: {
      enabled: true,
    },
  });

  logResponse("Generate Video Summary", result);
  return result;
}

async function createVideoChapters() {
  if (!mediaId) {
    console.log("⚠️  No media ID available. Run getMediaForAI first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.inVideoAIFeatures.updateMediaChapters({
    mediaId: mediaId,
    requestBody: {
      enabled: true,
    },
  });

  logResponse("Create Video Chapters", result);
  return result;
}

async function extractNamedEntities() {
  if (!mediaId) {
    console.log("⚠️  No media ID available. Run getMediaForAI first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.inVideoAIFeatures.updateMediaNamedEntities({
    mediaId: mediaId,
    requestBody: {
      enabled: true,
    },
  });

  logResponse("Extract Named Entities", result);
  return result;
}

async function enableContentModeration() {
  if (!mediaId) {
    console.log("⚠️  No media ID available. Run getMediaForAI first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.inVideoAIFeatures.updateMediaModeration({
    mediaId: mediaId,
    requestBody: {
      enabled: true,
      nsfw: true,
      profanity: true,
    },
  });

  logResponse("Enable Content Moderation", result);
  return result;
}

async function enableAllAIFeatures() {
  if (!mediaId) {
    console.log("⚠️  No media ID available. Run getMediaForAI first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  console.log("\n🤖 Enabling all AI features for media...");
  
  const results = [];
  
  // Enable summary generation
  try {
    const summaryResult = await fastpix.inVideoAIFeatures.updateMediaSummary({
      mediaId: mediaId,
      requestBody: { enabled: true },
    });
    results.push({ feature: "Summary", result: summaryResult });
    console.log("✅ Summary generation enabled");
  } catch (error) {
    console.log("❌ Failed to enable summary generation:", getErrorMessage(error));
  }

  // Enable chapter generation
  try {
    const chaptersResult = await fastpix.inVideoAIFeatures.updateMediaChapters({
      mediaId: mediaId,
      requestBody: { enabled: true },
    });
    results.push({ feature: "Chapters", result: chaptersResult });
    console.log("✅ Chapter generation enabled");
  } catch (error) {
    console.log("❌ Failed to enable chapter generation:", getErrorMessage(error));
  }

  // Enable named entity extraction
  try {
    const entitiesResult = await fastpix.inVideoAIFeatures.updateMediaNamedEntities({
      mediaId: mediaId,
      requestBody: { enabled: true },
    });
    results.push({ feature: "Named Entities", result: entitiesResult });
    console.log("✅ Named entity extraction enabled");
  } catch (error) {
    console.log("❌ Failed to enable named entity extraction:", getErrorMessage(error));
  }

  // Enable content moderation
  try {
    const moderationResult = await fastpix.inVideoAIFeatures.updateMediaModeration({
      mediaId: mediaId,
      requestBody: { 
        enabled: true,
        nsfw: true,
        profanity: true,
      },
    });
    results.push({ feature: "Content Moderation", result: moderationResult });
    console.log("✅ Content moderation enabled");
  } catch (error) {
    console.log("❌ Failed to enable content moderation:", getErrorMessage(error));
  }

  logResponse("Enable All AI Features", results);
  return results;
}

async function main() {
  console.log("🤖 AI Features API Samples");
  console.log("===========================");
  
  await runSample("Get Media for AI", getMediaForAI);
  await runSample("Generate Video Summary", generateVideoSummary);
  await runSample("Create Video Chapters", createVideoChapters);
  await runSample("Extract Named Entities", extractNamedEntities);
  await runSample("Enable Content Moderation", enableContentModeration);
  await runSample("Enable All AI Features", enableAllAIFeatures);
}

main().catch(console.error);
