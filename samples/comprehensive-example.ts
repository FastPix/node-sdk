/**
 * Comprehensive FastPix SDK Example
 * 
 * This example demonstrates a complete workflow using multiple FastPix APIs:
 * 1. Create media from URL
 * 2. Create a live stream
 * 3. Create playlists
 * 4. Generate analytics
 * 5. Apply AI features
 * 6. Set up security
 * 
 * Run this sample:
 * npx tsx comprehensive-example.ts
 */

import { createFastpixClient, runSample } from "./common/setup.js";
import { config, logResponse, getErrorMessage } from "./common/config.js";

interface WorkflowData {
  mediaId?: string;
  streamId?: string;
  playlistId?: string;
  playbackId?: string;
  signingKeyId?: string;
}

async function comprehensiveWorkflow() {
  const fastpix = createFastpixClient();
  const data: WorkflowData = {};

  console.log("🚀 Starting Comprehensive FastPix SDK Workflow");
  console.log("==============================================");

  // Step 1: Create Media
  console.log("\n📹 Step 1: Creating Media");
  console.log("-------------------------");
  
  const mediaResult = await fastpix.inputVideo.createMedia({
    inputs: [
      {
        type: "video",
        url: config.sampleVideoUrl,
      },
    ],
    metadata: {
      title: "Comprehensive Example Video",
      description: "A video created for the comprehensive SDK example",
      category: "demo",
      tags: ["sdk", "example", "comprehensive"],
    },
    accessPolicy: "public",
  });

  if (mediaResult.createMediaSuccessResponse?.data?.id) {
    data.mediaId = mediaResult.createMediaSuccessResponse.data.id;
    console.log(`✅ Created media with ID: ${data.mediaId}`);
  }

  // Step 2: Create Live Stream
  console.log("\n🔴 Step 2: Creating Live Stream");
  console.log("-------------------------------");
  
  const streamResult = await fastpix.startLiveStream.createNewStream({
    requestBody: {
      metadata: {
        name: "Comprehensive Example Stream",
        description: "A live stream created for the comprehensive SDK example",
        category: "demo",
      },
      reconnectWindow: 30,
      privacy: "public",
    },
  });

  if (streamResult.data?.id) {
    data.streamId = streamResult.data.id;
    console.log(`✅ Created stream with ID: ${data.streamId}`);
    console.log(`📡 Stream Key: ${streamResult.data.streamKey || 'N/A'}`);
  }

  // Step 3: Create Playlist
  console.log("\n📋 Step 3: Creating Playlist");
  console.log("----------------------------");
  
  const playlistResult = await fastpix.playlist.createAPlaylist({
    requestBody: {
      name: "Comprehensive Example Playlist",
      description: "A playlist created for the comprehensive SDK example",
      metadata: {
        category: "demo",
        created_by: "sdk_example",
      },
    },
  });

  if (playlistResult.createAPlaylistSuccessResponse?.data?.id) {
    data.playlistId = playlistResult.createAPlaylistSuccessResponse.data.id;
    console.log(`✅ Created playlist with ID: ${data.playlistId}`);
  }

  // Step 4: Add Media to Playlist
  if (data.mediaId && data.playlistId) {
    console.log("\n➕ Step 4: Adding Media to Playlist");
    console.log("-----------------------------------");
    
    await fastpix.playlist.addMediaToPlaylist({
      playlistId: data.playlistId,
      requestBody: {
        mediaId: data.mediaId,
      },
    });
    console.log("✅ Added media to playlist");
  }

  // Step 5: Create Playback ID
  if (data.mediaId) {
    console.log("\n▶️  Step 5: Creating Playback ID");
    console.log("--------------------------------");
    
    const playbackResult = await fastpix.playback.createMediaPlaybackId({
      mediaId: data.mediaId,
      requestBody: {
        policy: "public",
      },
    });

    if (playbackResult.createMediaPlaybackIdSuccessResponse?.data?.id) {
      data.playbackId = playbackResult.createMediaPlaybackIdSuccessResponse.data.id;
      console.log(`✅ Created playback ID: ${data.playbackId}`);
    }
  }

  // Step 6: Apply AI Features
  if (data.mediaId) {
    console.log("\n🤖 Step 6: Applying AI Features");
    console.log("-------------------------------");
    
    try {
      // Enable summary generation
      await fastpix.inVideoAIFeatures.updateMediaSummary({
        mediaId: data.mediaId,
        requestBody: { enabled: true },
      });
      console.log("✅ Enabled video summary generation");

      // Enable chapter generation
      await fastpix.inVideoAIFeatures.updateMediaChapters({
        mediaId: data.mediaId,
        requestBody: { enabled: true },
      });
      console.log("✅ Enabled video chapter generation");

      // Enable content moderation
      await fastpix.inVideoAIFeatures.updateMediaModeration({
        mediaId: data.mediaId,
        requestBody: {
          enabled: true,
          nsfw: true,
          profanity: true,
        },
      });
      console.log("✅ Enabled content moderation");
    } catch (error) {
      console.log("⚠️  AI features may not be available for this media");
      console.log(`   Error: ${getErrorMessage(error)}`);
    }
  }

  // Step 7: Create Signing Key
  console.log("\n🔐 Step 7: Creating Signing Key");
  console.log("-------------------------------");
  
  const signingKeyResult = await fastpix.signingKeys.createSigningKey();
  if (signingKeyResult.data?.id) {
    data.signingKeyId = signingKeyResult.data.id;
    console.log(`✅ Created signing key with ID: ${data.signingKeyId}`);
    console.log("📝 Private key generated (stored securely)");
  }

  // Step 8: Generate Analytics
  console.log("\n📊 Step 8: Generating Analytics");
  console.log("-------------------------------");
  
  try {
    // Get dimensions
    const dimensions = await fastpix.dimensions.listDimensions();
    console.log(`✅ Found ${dimensions.listDimensionsSuccessResponse?.data?.dimensions?.length || 0} dimensions`);

    // Get metrics
    const metrics = await fastpix.metrics.listOverallValues({
      timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
      metric: "views",
    });
    console.log("✅ Retrieved performance metrics");

    // Get views
    const views = await fastpix.views.listVideoViews({
      timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
      limit: 5,
    });
    console.log(`✅ Retrieved ${views.listVideoViewsSuccessResponse?.data?.views?.length || 0} video views`);
  } catch (error) {
    console.log("⚠️  Analytics data may not be available yet");
    console.log(`   Error: ${getErrorMessage(error)}`);
  }

  // Step 9: Display Summary
  console.log("\n📋 Workflow Summary");
  console.log("===================");
  console.log(`Media ID: ${data.mediaId || 'Not created'}`);
  console.log(`Stream ID: ${data.streamId || 'Not created'}`);
  console.log(`Playlist ID: ${data.playlistId || 'Not created'}`);
  console.log(`Playback ID: ${data.playbackId || 'Not created'}`);
  console.log(`Signing Key ID: ${data.signingKeyId || 'Not created'}`);

  // Step 10: Cleanup (Optional)
  console.log("\n🧹 Cleanup Options");
  console.log("==================");
  console.log("To clean up created resources, uncomment the cleanup section below");
  
  // Uncomment to clean up resources
  /*
  if (data.signingKeyId) {
    await fastpix.signingKeys.deleteSigningKey({ keyId: data.signingKeyId });
    console.log("🗑️  Deleted signing key");
  }
  
  if (data.playbackId) {
    await fastpix.playback.deleteMediaPlaybackId({ playbackId: data.playbackId });
    console.log("🗑️  Deleted playback ID");
  }
  
  if (data.playlistId) {
    await fastpix.playlist.deleteAPlaylist({ playlistId: data.playlistId });
    console.log("🗑️  Deleted playlist");
  }
  
  if (data.streamId) {
    await fastpix.manageLiveStream.deleteLiveStream({ streamId: data.streamId });
    console.log("🗑️  Deleted stream");
  }
  
  if (data.mediaId) {
    await fastpix.manageVideos.deleteMedia({ mediaId: data.mediaId });
    console.log("🗑️  Deleted media");
  }
  */

  return data;
}

async function main() {
  try {
    await runSample("Comprehensive Workflow", comprehensiveWorkflow);
    console.log("\n🎉 Comprehensive workflow completed successfully!");
    console.log("\n💡 Next Steps:");
    console.log("1. Check your FastPix dashboard to see the created resources");
    console.log("2. Use the stream key to start a live broadcast");
    console.log("3. Use the playback ID to embed videos in your application");
    console.log("4. Monitor analytics and AI features as they process");
  } catch (error) {
    console.error("\n❌ Workflow failed:");
    console.error(`   Error: ${getErrorMessage(error)}`);
  }
}

main().catch(console.error);
