/**
 * Start Live Stream API Samples
 * 
 * This file demonstrates how to use the Start Live Stream API to:
 * - Create new live streams
 * - Configure stream settings
 * 
 * Run this sample:
 * npx tsx live/start-live-stream.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { config, logResponse } from "../common/config.js";

let createdStreamId: string | undefined;

async function createNewStream() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.startLiveStream.createNewStream({
    requestBody: {
      metadata: {
        name: config.sampleStreamName,
        description: config.sampleStreamDescription,
      },
      reconnectWindow: 30, // 30 seconds
      privacy: "public",
    },
  });

  if (result.data?.id) {
    createdStreamId = result.data.id;
  }

  logResponse("Create New Stream", result);
  return result;
}

async function createPrivateStream() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.startLiveStream.createNewStream({
    requestBody: {
      metadata: {
        name: "Private Sample Stream",
        description: "A private stream created via SDK",
      },
      reconnectWindow: 60, // 60 seconds
      privacy: "private",
    },
  });

  logResponse("Create Private Stream", result);
  return result;
}

async function createStreamWithCustomSettings() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.startLiveStream.createNewStream({
    requestBody: {
      metadata: {
        name: "Custom Settings Stream",
        description: "A stream with custom settings",
        category: "gaming",
        tags: ["live", "demo", "sdk"],
      },
      reconnectWindow: 45, // 45 seconds
      privacy: "public",
    },
  });

  logResponse("Create Stream with Custom Settings", result);
  return result;
}

async function main() {
  console.log("🔴 Start Live Stream API Samples");
  console.log("=================================");
  
  await runSample("Create New Stream", createNewStream);
  await runSample("Create Private Stream", createPrivateStream);
  await runSample("Create Stream with Custom Settings", createStreamWithCustomSettings);
  
  if (createdStreamId) {
    console.log(`\n📝 Created stream ID: ${createdStreamId}`);
    console.log("   You can use this ID with the manage-live-stream.ts sample");
  }
}

main().catch(console.error);
