/**
 * Dimensions API Samples
 * 
 * This file demonstrates how to use the Dimensions API to:
 * - List available dimensions
 * - List filter values for specific dimensions
 * 
 * Run this sample:
 * npx tsx analytics/dimensions.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { logResponse, getErrorMessage } from "../common/config.js";

async function listDimensions() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.dimensions.listDimensions();

  logResponse("List Dimensions", result);
  return result;
}

async function listFilterValuesForDimension() {
  const fastpix = createFastpixClient();
  
  // First, get available dimensions
  const dimensions = await fastpix.dimensions.listDimensions();
  const dimensionId = dimensions.listDimensionsSuccessResponse?.data?.dimensions?.[0]?.id;
  
  if (!dimensionId) {
    console.log("⚠️  No dimensions found.");
    return;
  }

  const result = await fastpix.dimensions.listFilterValuesForDimension({
    dimensionId: dimensionId,
  });

  logResponse(`List Filter Values for Dimension (${dimensionId})`, result);
  return result;
}

async function exploreAllDimensions() {
  const fastpix = createFastpixClient();
  
  // Get all dimensions
  const dimensions = await fastpix.dimensions.listDimensions();
  const dimensionList = dimensions.listDimensionsSuccessResponse?.data?.dimensions || [];
  
  console.log(`\n📊 Found ${dimensionList.length} dimensions:`);
  
  for (const dimension of dimensionList.slice(0, 5)) { // Limit to first 5 for demo
    console.log(`\n🔍 Exploring dimension: ${dimension.name} (${dimension.id})`);
    
    const filterValues = await fastpix.dimensions.listFilterValuesForDimension({
      dimensionId: dimension.id!,
    });
    
    const values = filterValues.listFilterValuesForDimensionSuccessResponse?.data?.values || [];
    console.log(`   Found ${values.length} filter values`);
    
    if (values.length > 0) {
      console.log(`   Sample values: ${values.slice(0, 3).map(v => v.value).join(", ")}`);
    }
  }

  return dimensionList;
}

async function getFilterValuesForSpecificDimensions() {
  const fastpix = createFastpixClient();
  
  // Common dimensions to explore
  const commonDimensions = ["device_type", "browser_name", "country", "os_name"];
  const results = [];

  for (const dimensionName of commonDimensions) {
    try {
      // First, find the dimension ID by name
      const dimensions = await fastpix.dimensions.listDimensions();
      const dimension = dimensions.listDimensionsSuccessResponse?.data?.dimensions?.find(
        d => d.name === dimensionName
      );
      
      if (dimension?.id) {
        const result = await fastpix.dimensions.listFilterValuesForDimension({
          dimensionId: dimension.id,
        });
        results.push({ dimension: dimensionName, result });
      } else {
        console.log(`⚠️  Dimension '${dimensionName}' not found`);
      }
    } catch (error) {
      console.log(`⚠️  Error getting filter values for '${dimensionName}': ${getErrorMessage(error)}`);
    }
  }

  logResponse("Get Filter Values for Specific Dimensions", results);
  return results;
}

async function main() {
  console.log("📏 Dimensions API Samples");
  console.log("=========================");
  
  await runSample("List Dimensions", listDimensions);
  await runSample("List Filter Values for Dimension", listFilterValuesForDimension);
  await runSample("Explore All Dimensions", exploreAllDimensions);
  await runSample("Get Filter Values for Specific Dimensions", getFilterValuesForSpecificDimensions);
}

main().catch(console.error);
