/**
 * Metrics API Samples
 * 
 * This file demonstrates how to use the Metrics API to:
 * - List breakdown values
 * - List overall values
 * - Get timeseries data
 * - List comparison values
 * 
 * Run this sample:
 * npx tsx analytics/metrics.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { logResponse } from "../common/config.js";

async function listBreakdownValues() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.metrics.listBreakdownValues({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
    dimension: "device_type",
    metric: "views",
  });

  logResponse("List Breakdown Values", result);
  return result;
}

async function listOverallValues() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.metrics.listOverallValues({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
    metric: "views",
  });

  logResponse("List Overall Values", result);
  return result;
}

async function getTimeseriesData() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.metrics.getTimeseriesData({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
    metric: "views",
    interval: "day",
  });

  logResponse("Get Timeseries Data", result);
  return result;
}

async function listComparisonValues() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.metrics.listComparisonValues({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
    compareTimespan: ["2023-01-01T00:00:00Z", "2023-12-31T23:59:59Z"],
    metric: "views",
  });

  logResponse("List Comparison Values", result);
  return result;
}

async function getMultipleMetrics() {
  const fastpix = createFastpixClient();
  
  const metrics = ["views", "unique_viewers", "play_time"];
  const results = [];

  for (const metric of metrics) {
    const result = await fastpix.metrics.listOverallValues({
      timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
      metric: metric,
    });
    results.push({ metric, result });
  }

  logResponse("Get Multiple Metrics", results);
  return results;
}

async function getBreakdownByMultipleDimensions() {
  const fastpix = createFastpixClient();
  
  const dimensions = ["device_type", "browser_name", "country"];
  const results = [];

  for (const dimension of dimensions) {
    const result = await fastpix.metrics.listBreakdownValues({
      timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
      dimension: dimension,
      metric: "views",
    });
    results.push({ dimension, result });
  }

  logResponse("Get Breakdown by Multiple Dimensions", results);
  return results;
}

async function main() {
  console.log("📈 Metrics API Samples");
  console.log("======================");
  
  await runSample("List Breakdown Values", listBreakdownValues);
  await runSample("List Overall Values", listOverallValues);
  await runSample("Get Timeseries Data", getTimeseriesData);
  await runSample("List Comparison Values", listComparisonValues);
  await runSample("Get Multiple Metrics", getMultipleMetrics);
  await runSample("Get Breakdown by Multiple Dimensions", getBreakdownByMultipleDimensions);
}

main().catch(console.error);
