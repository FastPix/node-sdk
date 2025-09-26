import test from "node:test";
import assert from "node:assert/strict";
import { Fastpix } from "../../src/sdk/sdk.js";

const USERNAME = process.env["FASTPIX_USERNAME"];
const PASSWORD = process.env["FASTPIX_PASSWORD"];

function haveCreds() {
  return Boolean(USERNAME && PASSWORD);
}

const TEST_TIMEOUT_MS = 120_000;

test("Views.listVideoViews - general structure (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listVideoViews({ timespan: "7:days", limit: 10, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data ?? (res as any);

    assert.ok(Array.isArray(data), "expected array of video views");
    assert.ok(res.pagination, "expected pagination object");
    assert.ok(Array.isArray(res.timespan) && res.timespan.length === 2, "expected timespan array of length 2");
    console.log("Retrieved", data.length, "video views with pagination:", res.pagination);
  } catch (error) {
    console.error("Error listing video views:", error);
    throw error;
  }
});

test("Views.listVideoViews - first video view fields (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listVideoViews({ timespan: "7:days", limit: 1, offset: 0 }, { timeoutMs: TEST_TIMEOUT_MS });
    const view = (res as any).data[0];

    assert.ok(view.viewId, "viewId should exist");
    assert.ok(view.operatingSystem, "operatingSystem should exist");
    assert.ok(view.application, "application should exist");
    assert.ok(view.viewStartTime && !isNaN(Date.parse(view.viewStartTime)), "viewStartTime should be valid");
    assert.ok(view.viewEndTime && !isNaN(Date.parse(view.viewEndTime)), "viewEndTime should be valid");
    assert.ok(typeof view.viewWatchTime === "number", "viewWatchTime should be a number");
    assert.ok(typeof view.qoeScore === "number" && view.qoeScore >= 0 && view.qoeScore <= 1, "qoeScore should be 0-1");

    console.log("First video view validated:", view.viewId, view.videoTitle);
  } catch (error) {
    console.error("Error validating first video view:", error);
    throw error;
  }
});

test("Views.listVideoViews - error handling (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listVideoViews({ timespan: "7:days", limit: 10, offset: 0 }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data;
    const viewWithError = data.find((v: any) => v.errorCode);

    if (viewWithError) {
      assert.ok(viewWithError.errorMessage, "errorMessage should exist when errorCode exists");
      assert.ok(typeof viewWithError.errorId === "number", "errorId should exist when errorCode exists");
      console.log("Video view with error validated:", viewWithError.viewId, viewWithError.errorMessage);
    } else {
      console.log("No video views with error found for this test run");
    }
  } catch (error) {
    console.error("Error validating video view error handling:", error);
    throw error;
  }
});

test("Views.listVideoViews - pagination validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listVideoViews({ timespan: "7:days", limit: 5, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
    const pagination = (res as any).pagination;

    assert.ok(pagination, "pagination should exist");
    assert.strictEqual(typeof pagination.totalRecords, "number", "totalRecords should be a number");
    assert.strictEqual(typeof pagination.currentOffset, "number", "currentOffset should be a number");
    assert.strictEqual(typeof pagination.offsetCount, "number", "offsetCount should be a number");

    console.log("Pagination validated:", pagination);
  } catch (error) {
    console.error("Error validating pagination:", error);
    throw error;
  }
});

test("Views.listVideoViews - QoE score range validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listVideoViews({ timespan: "7:days", limit: 10, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data;

    data.forEach((view: any, index: number) => {
      assert.ok(view.qoeScore >= 0 && view.qoeScore <= 1, `qoeScore out of range for item ${index}`);
    });

    console.log("All QoE scores validated for", data.length, "video views");
  } catch (error) {
    console.error("Error validating QoE scores:", error);
    throw error;
  }
});

test("Views.getVideoViewDetails (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    // First get a list of video views to find an existing view ID
    const listRes = await sdk.views.listVideoViews({
      timespan: "7:days",
      limit: 5,
      offset: 1,
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const listData = (listRes as any).data ?? (listRes as any);
    const existingView = listData?.[0];

    if (!existingView?.viewId) {
      console.warn("No video view available for getVideoViewDetails test");
      return;
    }

    const viewId = existingView.viewId;
    console.log("Using existing view with ID:", viewId);

    // Now get the specific video view details
    const res = await sdk.views.getVideoViewDetails({
      viewId: viewId,
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(data?.viewId, "expected view id in response");
    assert.equal(data.viewId, viewId, "view ID should match requested ID");
    assert.ok(data?.videoTitle, "expected video title in response");
    assert.ok(data?.browserName, "expected browser name in response");
    assert.ok(data?.deviceType, "expected device type in response");
    assert.ok(data?.qualityOfExperienceScore, "expected quality of experience score in response");
    console.log("Retrieved video view details:", data.viewId, "for video:", data.videoTitle);
  } catch (error) {
    console.error("Error getting video view details:", error);
    throw error;
  }
});

test("Views.getVideoViewDetails - general structure (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    // First get a list of video views to find an existing view ID
    const listRes = await sdk.views.listVideoViews({ timespan: "7:days", limit: 5, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
    const existingView = (listRes as any).data?.[0];

    if (!existingView?.viewId) {
      console.warn("No video view available for getVideoViewDetails test");
      return;
    }

    const res = await sdk.views.getVideoViewDetails({ viewId: existingView.viewId }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data ?? (res as any);

    assert.ok(data.viewId, "expected viewId in response");
    assert.ok(data.videoTitle, "expected videoTitle in response");
    assert.ok(data.playerName, "expected playerName in response");
    assert.ok(data.qualityOfExperienceScore !== undefined, "expected QoE score in response");

    console.log("Retrieved video view details for viewId:", data.viewId, "title:", data.videoTitle);
  } catch (error) {
    console.error("Error getting video view details:", error);
    throw error;
  }
});

test("Views.getVideoViewDetails - player information validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const listRes = await sdk.views.listVideoViews({ timespan: "7:days", limit: 5, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
    const existingView = (listRes as any).data?.[0];
    if (!existingView?.viewId) return;

    const res = await sdk.views.getVideoViewDetails({ viewId: existingView.viewId }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data ?? (res as any);

    assert.ok(data.playerName, "playerName should exist");
    assert.ok(data.playerVersion, "playerVersion should exist");
    assert.ok(data.playerSoftwareName, "playerSoftwareName should exist");
    assert.ok(typeof data.playerHeight === "number", "playerHeight should be a number");
    assert.ok(typeof data.playerWidth === "number", "playerWidth should be a number");

    console.log("Player info validated:", data.playerName, data.playerVersion);
  } catch (error) {
    console.error("Error validating player info:", error);
    throw error;
  }
});

test("Views.getVideoViewDetails - video metadata validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const listRes = await sdk.views.listVideoViews({ timespan: "7:days", limit: 5, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
    const existingView = (listRes as any).data?.[0];
    if (!existingView?.viewId) return;

    const res = await sdk.views.getVideoViewDetails({ viewId: existingView.viewId }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data ?? (res as any);

    assert.ok(data.videoId, "videoId should exist");
    assert.ok(data.videoTitle, "videoTitle should exist");
    assert.ok(data.videoLanguage, "videoLanguage should exist");
    assert.ok(data.videoSourceUrl, "videoSourceUrl should exist");
    assert.ok(data.videoSourceDuration > 0, "videoSourceDuration should be > 0");

    console.log("Video metadata validated for videoId:", data.videoId);
  } catch (error) {
    console.error("Error validating video metadata:", error);
    throw error;
  }
});

test("Views.getVideoViewDetails - playback statistics and QoE validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const listRes = await sdk.views.listVideoViews({ timespan: "7:days", limit: 5, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
    const existingView = (listRes as any).data?.[0];
    if (!existingView?.viewId) return;

    const res = await sdk.views.getVideoViewDetails({ viewId: existingView.viewId }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data ?? (res as any);

    assert.ok(typeof data.playbackScore === "number", "playbackScore should be a number");
    assert.ok(data.viewPlayingTime >= 0, "viewPlayingTime should be >= 0");
    assert.ok(typeof data.qualityOfExperienceScore === "number" && data.qualityOfExperienceScore >= 0 && data.qualityOfExperienceScore <= 1, "QoE score should be 0-1");
    assert.ok(data.videoStartupTime >= 0, "videoStartupTime should be >= 0");
    assert.ok(data.bufferCount >= 0, "bufferCount should be >= 0");

    console.log("Playback statistics and QoE validated for viewId:", data.viewId);
  } catch (error) {
    console.error("Error validating playback statistics:", error);
    throw error;
  }
});

test("Views.getVideoViewDetails - device and browser info validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const listRes = await sdk.views.listVideoViews({ timespan: "7:days", limit: 5, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
    const existingView = (listRes as any).data?.[0];
    if (!existingView?.viewId) return;

    const res = await sdk.views.getVideoViewDetails({ viewId: existingView.viewId }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data ?? (res as any);

    assert.ok(data.deviceType, "deviceType should exist");
    assert.ok(data.deviceManufacturer, "deviceManufacturer should exist");
    assert.ok(data.deviceModel, "deviceModel should exist");
    assert.ok(data.browserName, "browserName should exist");
    assert.ok(data.browserVersion, "browserVersion should exist");
    assert.ok(data.osName, "osName should exist");
    assert.ok(data.osVersion, "osVersion should exist");

    console.log("Device and browser info validated for viewId:", data.viewId);
  } catch (error) {
    console.error("Error validating device and browser info:", error);
    throw error;
  }
});

test("Views.getVideoViewDetails - geolocation info validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const listRes = await sdk.views.listVideoViews({ timespan: "7:days", limit: 5, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
    const existingView = (listRes as any).data?.[0];
    if (!existingView?.viewId) return;

    const res = await sdk.views.getVideoViewDetails({ viewId: existingView.viewId }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data ?? (res as any);

    assert.ok(data.country, "country should exist");
    assert.ok(data.countryCode, "countryCode should exist");
    assert.ok(data.continent, "continent should exist");
    assert.ok(data.city, "city should exist");
    assert.ok(data.region, "region should exist");
    assert.ok(data.latitude, "latitude should exist");
    assert.ok(data.longitude, "longitude should exist");

    console.log("Geolocation info validated for viewId:", data.viewId);
  } catch (error) {
    console.error("Error validating geolocation info:", error);
    throw error;
  }
});

test("Views.listByTopContent (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listByTopContent({
      timespan: "7:days",
      limit: 20,
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(Array.isArray(data), "expected array of top content");
    assert.ok(data.length > 0, "expected at least one top content item");

    // Validate structure of first item
    const firstItem = data[0];
    assert.ok(firstItem?.videoTitle, "expected video title in top content");
    assert.ok(typeof firstItem?.views === 'number', "expected views count as number");
    assert.ok(typeof firstItem?.uniqueViews === 'number', "expected unique views count as number");

    console.log("Retrieved", data.length, "top content items");
    console.log("Top video:", firstItem.videoTitle, "with", firstItem.views, "views");
  } catch (error) {
    console.error("Error listing top content:", error);
    throw error;
  }
});

test("Views.listByTopContent - general structure (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listByTopContent({ timespan: "7:days", limit: 20 }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data ?? (res as any);

    assert.ok(Array.isArray(data), "expected array of top content");
    assert.ok(data.length > 0, "expected at least one top content item");

    console.log("Retrieved", data.length, "top content items");
  } catch (error) {
    console.error("Error listing top content:", error);
    throw error;
  }
});

test("Views.listByTopContent - first item validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listByTopContent({ timespan: "7:days", limit: 20 }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data ?? (res as any);
    const firstItem = data[0];

    assert.ok(firstItem?.videoTitle, "expected videoTitle in first top content item");
    assert.ok(typeof firstItem?.views === "number", "expected views as number");
    assert.ok(typeof firstItem?.uniqueViews === "number", "expected uniqueViews as number");

    console.log("Top video:", firstItem.videoTitle, "with", firstItem.views, "views");
  } catch (error) {
    console.error("Error validating first top content item:", error);
    throw error;
  }
});

test("Views.listByTopContent - all items numeric views validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listByTopContent({ timespan: "7:days", limit: 20 }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data ?? (res as any);

    data.forEach((item: any, index: number) => {
      assert.ok(typeof item.views === "number", `views should be number for item ${index}`);
      assert.ok(typeof item.uniqueViews === "number", `uniqueViews should be number for item ${index}`);
      assert.ok(item.views >= 0, `views should be >= 0 for item ${index}`);
      assert.ok(item.uniqueViews >= 0, `uniqueViews should be >= 0 for item ${index}`);
    });

    console.log("All top content items have valid numeric views and uniqueViews");
  } catch (error) {
    console.error("Error validating numeric views:", error);
    throw error;
  }
});

test("Views.listByTopContent - views greater than zero (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listByTopContent({ timespan: "7:days", limit: 20 }, { timeoutMs: TEST_TIMEOUT_MS });
    const data = (res as any).data ?? (res as any);

    data.forEach((item: any, index: number) => {
      assert.ok(item.views > 0, `views should be > 0 for item ${index}`);
      assert.ok(item.uniqueViews > 0, `uniqueViews should be > 0 for item ${index}`);
    });

    console.log("All top content items have views and uniqueViews greater than zero");
  } catch (error) {
    console.error("Error validating positive views:", error);
    throw error;
  }
});

test("Views.getDataViewlistCurrentViewsGetTimeseriesViews (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.getDataViewlistCurrentViewsGetTimeseriesViews();

    const data = (res as any).data ?? (res as any);
    assert.ok(Array.isArray(data), "expected array of timeseries data");
    assert.ok(data.length > 0, "expected at least one timeseries data point");

    // Validate structure of first item
    const firstItem = data[0];
    assert.ok(firstItem?.intervalTime, "expected interval time in timeseries data");
    assert.ok(typeof firstItem?.numberOfViews === 'number', "expected numberOfViews as number");

    console.log("Retrieved", data.length, "timeseries data points");
    console.log("First interval:", firstItem.intervalTime, "with", firstItem.numberOfViews, "views");
  } catch (error) {
    console.error("Error getting timeseries views:", error);
    throw error;
  }
});

test("Views.getDataViewlistCurrentViewsFilter (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.getDataViewlistCurrentViewsFilter();

    const data = (res as any).data ?? (res as any);
    assert.ok(Array.isArray(data), "expected array of filter data");
    console.log("Retrieved", data.length, "filter values for browser_name dimension");
  } catch (error) {
    console.error("Error getting current views filter:", error);
    throw error;
  }
});

test("Views.listVideoViews with filters (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listVideoViews({
      timespan: "7:days",
      filterby: "device_type:Mobile",
      limit: 10,
      offset: 1,
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(Array.isArray(data), "expected array of video views");
    console.log("Retrieved", data.length, "video views filtered by Mobile devices");
  } catch (error) {
    console.error("Error listing video views with filters:", error);
    throw error;
  }
});

test("Views.listVideoViews with browser filter (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listVideoViews({
      timespan: "7:days",
      filterby: "browser_name:com.aaonxt.android",
      limit: 10,
      offset: 1,
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(Array.isArray(data), "expected array of video views");
    console.log("Retrieved", data.length, "video views filtered by Android browser");
  } catch (error) {
    console.error("Error listing video views with browser filter:", error);
    throw error;
  }
});

test("Views.listVideoViews with video title filter (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.views.listVideoViews({
      timespan: "7:days",
      filterby: "video_title:Kerek",
      limit: 10,
      offset: 1,
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(Array.isArray(data), "expected array of video views");
    console.log("Retrieved", data.length, "video views filtered by video title 'Kerek'");
  } catch (error) {
    console.error("Error listing video views with video title filter:", error);
    throw error;
  }
});
