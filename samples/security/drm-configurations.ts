/**
 * DRM Configurations API Samples
 * 
 * This file demonstrates how to use the DRM Configurations API to:
 * - List DRM configurations
 * - Get DRM configuration by ID
 * 
 * Run this sample:
 * npx tsx security/drm-configurations.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { logResponse } from "../common/config.js";

async function listDrmConfigurations() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.drmConfigurations.getDrmConfiguration();

  logResponse("List DRM Configurations", result);
  return result;
}

async function getDrmConfigurationById() {
  const fastpix = createFastpixClient();
  
  // First, get available DRM configurations
  const configs = await fastpix.drmConfigurations.getDrmConfiguration();
  const configId = configs.getDrmConfigurationSuccessResponse?.data?.configurations?.[0]?.id;
  
  if (!configId) {
    console.log("⚠️  No DRM configurations found.");
    return;
  }

  const result = await fastpix.drmConfigurations.getDrmConfigurationById({
    configId: configId,
  });

  logResponse(`Get DRM Configuration by ID (${configId})`, result);
  return result;
}

async function exploreDrmConfigurations() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.drmConfigurations.getDrmConfiguration();
  const configurations = result.getDrmConfigurationSuccessResponse?.data?.configurations || [];
  
  console.log("\n🔒 DRM Configurations Overview:");
  console.log("===============================");
  console.log(`Found ${configurations.length} DRM configurations:`);
  
  for (const config of configurations) {
    console.log(`\n📋 Configuration: ${config.name || 'Unnamed'}`);
    console.log(`   ID: ${config.id}`);
    console.log(`   Type: ${config.type || 'Unknown'}`);
    console.log(`   Status: ${config.status || 'Unknown'}`);
    
    if (config.description) {
      console.log(`   Description: ${config.description}`);
    }
    
    if (config.supportedFormats) {
      console.log(`   Supported Formats: ${config.supportedFormats.join(', ')}`);
    }
  }

  return result;
}

async function getDetailedDrmInfo() {
  const fastpix = createFastpixClient();
  
  // Get all configurations
  const configs = await fastpix.drmConfigurations.getDrmConfiguration();
  const configurations = configs.getDrmConfigurationSuccessResponse?.data?.configurations || [];
  
  if (configurations.length === 0) {
    console.log("⚠️  No DRM configurations available.");
    return;
  }

  console.log("\n🔍 Detailed DRM Configuration Information:");
  console.log("==========================================");

  // Get detailed info for each configuration
  for (const config of configurations.slice(0, 3)) { // Limit to first 3 for demo
    try {
      const detailedConfig = await fastpix.drmConfigurations.getDrmConfigurationById({
        configId: config.id!,
      });

      console.log(`\n📊 ${config.name || 'Configuration'} (${config.id}):`);
      console.log(`   Type: ${detailedConfig.data?.type || 'Unknown'}`);
      console.log(`   Status: ${detailedConfig.data?.status || 'Unknown'}`);
      console.log(`   Created: ${detailedConfig.data?.createdAt || 'Unknown'}`);
      console.log(`   Updated: ${detailedConfig.data?.updatedAt || 'Unknown'}`);
      
      if (detailedConfig.data?.settings) {
        console.log(`   Settings: ${JSON.stringify(detailedConfig.data.settings, null, 2)}`);
      }
      
      if (detailedConfig.data?.capabilities) {
        console.log(`   Capabilities: ${detailedConfig.data.capabilities.join(', ')}`);
      }
    } catch (error) {
      console.log(`   ❌ Error getting details for ${config.id}: ${error}`);
    }
  }

  return configs;
}

async function main() {
  console.log("🔒 DRM Configurations API Samples");
  console.log("===================================");
  
  await runSample("List DRM Configurations", listDrmConfigurations);
  await runSample("Get DRM Configuration by ID", getDrmConfigurationById);
  await runSample("Explore DRM Configurations", exploreDrmConfigurations);
  await runSample("Get Detailed DRM Info", getDetailedDrmInfo);
}

main().catch(console.error);
