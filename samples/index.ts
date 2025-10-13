/**
 * FastPix Node.js SDK Samples Index
 * 
 * This file provides an overview of all available samples and can be used
 * to run multiple samples or get a quick reference of what's available.
 * 
 * Run this file to see all available samples:
 * npx tsx index.ts
 */

import { createFastpixClient } from "./common/setup.js";

// Sample categories and their descriptions
const sampleCategories = {
  media: {
    name: "Media API Samples",
    description: "Upload, manage, and transform video content",
    samples: [
      {
        file: "media/input-video.ts",
        name: "Input Video",
        description: "Create media from URL and upload from device"
      },
      {
        file: "media/manage-videos.ts", 
        name: "Manage Videos",
        description: "List, update, delete, and manage video tracks"
      },
      {
        file: "media/playback.ts",
        name: "Playback",
        description: "Create and manage playback IDs for secure access"
      },
      {
        file: "media/playlist.ts",
        name: "Playlist",
        description: "Create and manage video playlists"
      }
    ]
  },
  live: {
    name: "Live Streaming Samples",
    description: "Stream, manage, and transform live video content",
    samples: [
      {
        file: "live/start-live-stream.ts",
        name: "Start Live Stream",
        description: "Create new live streaming sessions"
      },
      {
        file: "live/manage-live-stream.ts",
        name: "Manage Live Stream",
        description: "Manage active live streams and viewer statistics"
      },
      {
        file: "live/live-playback.ts",
        name: "Live Playback",
        description: "Create and manage live playback access"
      }
    ]
  },
  analytics: {
    name: "Analytics Samples",
    description: "Monitor video performance and quality with comprehensive analytics",
    samples: [
      {
        file: "analytics/views.ts",
        name: "Views",
        description: "Analyze video views and viewer behavior"
      },
      {
        file: "analytics/metrics.ts",
        name: "Metrics",
        description: "Get performance metrics and breakdowns"
      },
      {
        file: "analytics/dimensions.ts",
        name: "Dimensions",
        description: "Explore data dimensions and filter values"
      },
      {
        file: "analytics/errors.ts",
        name: "Errors",
        description: "Track and analyze playback errors"
      }
    ]
  },
  ai: {
    name: "AI Features Samples",
    description: "Enhance video content with AI-powered features",
    samples: [
      {
        file: "ai/ai-features.ts",
        name: "AI Features",
        description: "Generate summaries, chapters, entities, and moderation"
      }
    ]
  },
  security: {
    name: "Security Samples",
    description: "Manage security and authentication",
    samples: [
      {
        file: "security/signing-keys.ts",
        name: "Signing Keys",
        description: "Create and manage signing key pairs for authentication"
      },
      {
        file: "security/drm-configurations.ts",
        name: "DRM Configurations",
        description: "Manage DRM settings and configurations"
      }
    ]
  }
};

function displaySampleIndex() {
  console.log("📚 FastPix Node.js SDK Samples");
  console.log("===============================");
  console.log("Comprehensive examples demonstrating FastPix API usage\n");

  Object.entries(sampleCategories).forEach(([categoryKey, category]) => {
    console.log(`📁 ${category.name}`);
    console.log(`   ${category.description}\n`);
    
    category.samples.forEach(sample => {
      console.log(`   📄 ${sample.name}`);
      console.log(`      File: ${sample.file}`);
      console.log(`      Description: ${sample.description}`);
      console.log(`      Run: npx tsx ${sample.file}\n`);
    });
  });

  console.log("🚀 Quick Start Commands:");
  console.log("========================");
  console.log("npm run media          # Run all media samples");
  console.log("npm run live           # Run all live streaming samples");
  console.log("npm run analytics      # Run all analytics samples");
  console.log("npm run ai             # Run AI features samples");
  console.log("npm run security       # Run security samples");
  console.log("npm run all            # Run all samples");
  console.log("\n📖 For detailed instructions, see README.md");
}

function displayQuickReference() {
  console.log("\n🔧 Quick Reference");
  console.log("==================");
  console.log("Common operations you can perform:\n");
  
  console.log("📹 Media Management:");
  console.log("  • Upload videos from URL or device");
  console.log("  • List, update, and delete media");
  console.log("  • Add audio/subtitle tracks");
  console.log("  • Generate automatic subtitles");
  console.log("  • Create and manage playlists");
  console.log("  • Generate secure playback IDs\n");
  
  console.log("🔴 Live Streaming:");
  console.log("  • Create live streams (RTMPS/SRT)");
  console.log("  • Manage stream settings and privacy");
  console.log("  • Enable/disable streams");
  console.log("  • Monitor viewer counts");
  console.log("  • Create live playback access\n");
  
  console.log("📊 Analytics:");
  console.log("  • Track video views and engagement");
  console.log("  • Analyze performance metrics");
  console.log("  • Monitor concurrent viewers");
  console.log("  • Track playback errors");
  console.log("  • Filter data by dimensions\n");
  
  console.log("🤖 AI Features:");
  console.log("  • Generate video summaries");
  console.log("  • Create automatic chapters");
  console.log("  • Extract named entities");
  console.log("  • Enable content moderation\n");
  
  console.log("🔐 Security:");
  console.log("  • Create signing key pairs");
  console.log("  • Manage DRM configurations");
  console.log("  • Secure token-based authentication\n");
}

async function testConnection() {
  console.log("\n🔌 Testing FastPix Connection");
  console.log("=============================");
  
  try {
    const fastpix = createFastpixClient();
    
    // Test with a simple API call
    const dimensions = await fastpix.dimensions.listDimensions();
    console.log("✅ Connection successful!");
    console.log(`📊 Found ${dimensions.listDimensionsSuccessResponse?.data?.dimensions?.length || 0} available dimensions`);
    
    return true;
  } catch (error) {
    console.log("❌ Connection failed!");
    console.log("Please check your credentials in the .env file");
    console.log("Error:", error.message || error);
    
    return false;
  }
}

async function main() {
  displaySampleIndex();
  displayQuickReference();
  
  const connected = await testConnection();
  
  if (connected) {
    console.log("\n🎉 You're ready to start using the FastPix SDK samples!");
    console.log("Choose a sample from the list above and run it with:");
    console.log("npx tsx <sample-file>");
  } else {
    console.log("\n⚠️  Please configure your credentials before running samples");
    console.log("1. Copy env.example to .env");
    console.log("2. Add your FastPix credentials");
    console.log("3. Run this file again to test the connection");
  }
}

main().catch(console.error);
