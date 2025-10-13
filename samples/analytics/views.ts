/**
 * Views API Samples
 * 
 * This file demonstrates how to use the Views API to:
 * - List video views
 * - Get video view details
 * - List by top content
 * - Get concurrent viewers timeseries
 * - Get concurrent viewers breakdown
 * 
 * Run this sample:
 * npx tsx analytics/views.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { logResponse } from "../common/config.js";

async function listVideoViews() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.views.listVideoViews({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
    limit: 10,
    offset: 0,
  });

  logResponse("List Video Views", result);
  return result;
}

async function listVideoViewsWithFilters() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.views.listVideoViews({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
    filterby: ["device_type", "browser_name"],
    limit: 5,
    offset: 0,
    orderBy: "timestamp",
    sort: "desc",
  });

  logResponse("List Video Views with Filters", result);
  return result;
}

async function getVideoViewDetails() {
  const fastpix = createFastpixClient();
  
  // First, get a view ID from the list
  const views = await fastpix.views.listVideoViews({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
    limit: 1,
  });

  const viewId = views.listVideoViewsSuccessResponse?.data?.views?.[0]?.viewId;
  
  if (!viewId) {
    console.log("⚠️  No views found. Please ensure you have some video views first.");
    return;
  }

  const result = await fastpix.views.getVideoViewDetails({
    viewId: viewId,
  });

  logResponse("Get Video View Details", result);
  return result;
}

async function listByTopContent() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.views.listByTopContent({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
    limit: 5,
    offset: 0,
  });

  logResponse("List by Top Content", result);
  return result;
}

async function getConcurrentViewersTimeseries() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.views.getDataViewlistCurrentViewsGetTimeseriesViews({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
    interval: "hour",
  });

  logResponse("Get Concurrent Viewers Timeseries", result);
  return result;
}

async function getConcurrentViewersBreakdown() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.views.getDataViewlistCurrentViewsFilter({
    timespan: ["2024-01-01T00:00:00Z", "2024-12-31T23:59:59Z"],
    filterby: ["device_type", "country"],
  });

  logResponse("Get Concurrent Viewers Breakdown", result);
  return result;
}

async function main() {
  console.log("📊 Views API Samples");
  console.log("====================");
  
  await runSample("List Video Views", listVideoViews);
  await runSample("List Video Views with Filters", listVideoViewsWithFilters);
  await runSample("Get Video View Details", getVideoViewDetails);
  await runSample("List by Top Content", listByTopContent);
  await runSample("Get Concurrent Viewers Timeseries", getConcurrentViewersTimeseries);
  await runSample("Get Concurrent Viewers Breakdown", getConcurrentViewersBreakdown);
}

main().catch(console.error);
