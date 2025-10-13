/**
 * Errors API Samples
 * 
 * This file demonstrates how to use the Errors API to:
 * - List playback errors
 * - Analyze error patterns
 * 
 * Run this sample:
 * npx tsx analytics/errors.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { logResponse } from "../common/config.js";

async function listErrors() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.errors.listErrors({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
  });

  logResponse("List Errors", result);
  return result;
}

async function listErrorsWithFilters() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.errors.listErrors({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
    filterby: ["device_type", "browser_name"],
    limit: 20,
    offset: 0,
  });

  logResponse("List Errors with Filters", result);
  return result;
}

async function analyzeErrorPatterns() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.errors.listErrors({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
  });

  const errors = result.listErrorsSuccessResponse?.data?.errors || [];
  const topErrors = result.listErrorsSuccessResponse?.data?.topErrors || [];
  
  console.log("\n📊 Error Analysis:");
  console.log(`   Total errors: ${errors.length}`);
  console.log(`   Top errors: ${topErrors.length}`);
  
  if (topErrors.length > 0) {
    console.log("\n🔝 Top Error Types:");
    topErrors.slice(0, 5).forEach((error, index) => {
      console.log(`   ${index + 1}. ${error.message || error.description}`);
      console.log(`      Count: ${error.count}`);
      console.log(`      Percentage: ${error.percentage}%`);
      console.log(`      Last seen: ${error.lastSeen}`);
    });
  }

  if (errors.length > 0) {
    console.log("\n📋 Recent Errors:");
    errors.slice(0, 3).forEach((error, index) => {
      console.log(`   ${index + 1}. ${error.message || error.description}`);
      console.log(`      Code: ${error.code}`);
      console.log(`      Count: ${error.count}`);
    });
  }

  return result;
}

async function getErrorsByTimeRange() {
  const fastpix = createFastpixClient();
  
  // Get errors for different time ranges
  const timeRanges = [
    {
      name: "Last 7 days",
      timespan: [
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        new Date().toISOString()
      ]
    },
    {
      name: "Last 30 days", 
      timespan: [
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        new Date().toISOString()
      ]
    }
  ];

  const results = [];

  for (const range of timeRanges) {
    const result = await fastpix.errors.listErrors({
      timespan: range.timespan,
    });

    const errorCount = result.listErrorsSuccessResponse?.data?.errors?.length || 0;
    const topErrorCount = result.listErrorsSuccessResponse?.data?.topErrors?.length || 0;
    
    results.push({
      range: range.name,
      errorCount,
      topErrorCount,
      result
    });

    console.log(`\n📅 ${range.name}:`);
    console.log(`   Errors: ${errorCount}`);
    console.log(`   Top errors: ${topErrorCount}`);
  }

  logResponse("Get Errors by Time Range", results);
  return results;
}

async function main() {
  console.log("❌ Errors API Samples");
  console.log("=====================");
  
  await runSample("List Errors", listErrors);
  await runSample("List Errors with Filters", listErrorsWithFilters);
  await runSample("Analyze Error Patterns", analyzeErrorPatterns);
  await runSample("Get Errors by Time Range", getErrorsByTimeRange);
}

main().catch(console.error);
