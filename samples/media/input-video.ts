/**
 * Input Video API Samples
 * 
 * This file demonstrates how to use the Input Video API to:
 * - Create media from URL
 * - Upload media from device
 * 
 * Run this sample:
 * npx tsx media/input-video.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { config, logResponse, logError } from "../common/config.js";

async function createMediaFromUrl() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.inputVideo.createMedia({
    inputs: [
      {
        type: "video",
        url: config.sampleVideoUrl,
      },
    ],
    metadata: {
      title: "Sample Video from URL",
      description: "This video was created using the FastPix SDK",
      category: "sample",
    },
    accessPolicy: "public",
  });

  logResponse("Create Media from URL", result);
  return result;
}

async function uploadMediaFromDevice() {
  const fastpix = createFastpixClient();
  
  // Note: This example shows the structure, but you'll need an actual file
  // In a real application, you'd get the file from a file input or file system
  const result = await fastpix.inputVideo.directUploadVideoMedia({
    file: new Blob(["sample video content"], { type: "video/mp4" }),
    metadata: {
      title: "Sample Uploaded Video",
      description: "This video was uploaded directly from device",
    },
    accessPolicy: "public",
  });

  logResponse("Upload Media from Device", result);
  return result;
}

async function main() {
  console.log("📹 Input Video API Samples");
  console.log("==========================");
  
  await runSample("Create Media from URL", createMediaFromUrl);
  
  // Uncomment to test direct upload (requires actual file)
  // await runSample("Upload Media from Device", uploadMediaFromDevice);
}

main().catch(console.error);
