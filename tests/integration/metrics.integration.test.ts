import test from "node:test";
import assert from "node:assert/strict";
import { Fastpix } from "../../src/sdk/sdk.js";

const USERNAME = process.env["FASTPIX_USERNAME"];
const PASSWORD = process.env["FASTPIX_PASSWORD"];

function haveCreds() {
  return Boolean(USERNAME && PASSWORD);
}

const TEST_TIMEOUT_MS = 120_000;

test("Metrics.listOverallValues (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.listOverallValues({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(data, "expected overall values data in response");
    console.log("Retrieved overall values for metric");
  } catch (error) {
    console.error("Error listing overall values:", error);
    throw error;
  }
});

test("Metrics.listOverallValues - general structure (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.listOverallValues({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);

    assert.ok(data, "expected overall values data");
    assert.strictEqual(typeof data, "object", "expected overall values to be an object");

    console.log("Retrieved overall values:", data);
  } catch (error) {
    console.error("Error validating structure of overall values:", error);
    throw error;
  }
});

test("Metrics.listOverallValues - numeric fields validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.listOverallValues({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);

    assert.strictEqual(typeof data.value, "number", "expected value to be number");
    assert.strictEqual(typeof data.totalWatchTime, "number", "expected totalWatchTime to be number");
    assert.strictEqual(typeof data.totalPlayTime, "number", "expected totalPlayTime to be number");
    assert.strictEqual(typeof data.uniqueViews, "number", "expected uniqueViews to be number");
    assert.strictEqual(typeof data.totalViews, "number", "expected totalViews to be number");
    assert.strictEqual(typeof data.globalValue, "number", "expected globalValue to be number");

    console.log("Validated numeric fields for overall values");
  } catch (error) {
    console.error("Error validating numeric fields:", error);
    throw error;
  }
});

test("Metrics.listOverallValues - value ranges validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.listOverallValues({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);

    assert.ok(data.value >= 0 && data.value <= 1, "value should be between 0 and 1");
    assert.ok(data.globalValue >= 0 && data.globalValue <= 1, "globalValue should be between 0 and 1");
    assert.ok(data.uniqueViews <= data.totalViews, "uniqueViews should not exceed totalViews");

    console.log("Validated value and globalValue ranges");
  } catch (error) {
    console.error("Error validating value ranges:", error);
    throw error;
  }
});

test("Metrics.listOverallValues - consistency checks (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.listOverallValues({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);

    assert.ok(data.totalWatchTime >= data.totalPlayTime, "totalWatchTime should be >= totalPlayTime");
    assert.ok(data.totalViews >= data.uniqueViews, "totalViews should be >= uniqueViews");

    console.log("Validated consistency between totals and unique values");
  } catch (error) {
    console.error("Error validating consistency:", error);
    throw error;
  }
});

test("Metrics.listOverallValues - timespan validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.listOverallValues({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const timespan = (res as any).timespan;

    assert.ok(Array.isArray(timespan), "expected timespan to be array");
    assert.strictEqual(timespan.length, 2, "expected timespan array length 2");
    assert.ok(typeof timespan[0] === "number" && typeof timespan[1] === "number", "expected numeric timespan values");

    console.log("Timespan validated:", timespan);
  } catch (error) {
    console.error("Error validating timespan:", error);
    throw error;
  }
});

test("Metrics.listBreakdownValues - structure validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.listBreakdownValues({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
      groupBy: "browser_name",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);

    assert.ok(Array.isArray(data), "expected breakdown values to be an array");
    assert.ok(data.length > 0, "expected at least one breakdown entry");

    const first = data[0];
    assert.ok("views" in first, "expected views field");
    assert.ok("value" in first, "expected value field");
    assert.ok("totalWatchTime" in first, "expected totalWatchTime field");
    assert.ok("totalPlayingTime" in first, "expected totalPlayingTime field");
    assert.ok("field" in first, "expected field name");

    console.log("Validated breakdown structure with", data.length, "entries");
  } catch (error) {
    console.error("Error validating structure of breakdown values:", error);
    throw error;
  }
});

test("Metrics.listBreakdownValues - numeric fields validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.listBreakdownValues({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
      groupBy: "browser_name",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);

    data.forEach((item: any) => {
      assert.strictEqual(typeof item.views, "number", "views should be number");
      assert.strictEqual(typeof item.value, "number", "value should be number");
      assert.strictEqual(typeof item.totalWatchTime, "number", "totalWatchTime should be number");
      assert.strictEqual(typeof item.totalPlayingTime, "number", "totalPlayingTime should be number");
      assert.strictEqual(typeof item.field, "string", "field should be string");
    });

    console.log("Validated numeric fields for all breakdown entries");
  } catch (error) {
    console.error("Error validating numeric fields of breakdown values:", error);
    throw error;
  }
});

test("Metrics.listBreakdownValues - value ranges validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.listBreakdownValues({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
      groupBy: "browser_name",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);

    data.forEach((item: any) => {
      assert.ok(item.value >= 0 && item.value <= 1, `value out of range for field ${item.field}`);
      assert.ok(item.views >= 0, `views should not be negative for field ${item.field}`);
    });

    console.log("Validated value and views ranges for breakdown entries");
  } catch (error) {
    console.error("Error validating value ranges:", error);
    throw error;
  }
});

test("Metrics.listBreakdownValues - consistency checks (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.listBreakdownValues({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
      groupBy: "browser_name",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);

    data.forEach((item: any) => {
      assert.ok(item.totalWatchTime >= item.totalPlayingTime, `watchTime < playingTime for field ${item.field}`);
    });

    console.log("Validated consistency between totalWatchTime and totalPlayingTime");
  } catch (error) {
    console.error("Error validating consistency of breakdown values:", error);
    throw error;
  }
});

test("Metrics.listBreakdownValues - timespan validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.listBreakdownValues({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
      groupBy: "browser_name",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const timespan = (res as any).timespan;

    assert.ok(Array.isArray(timespan), "expected timespan to be array");
    assert.strictEqual(timespan.length, 2, "expected timespan to have two values");
    assert.ok(timespan[0] < timespan[1], "expected timespan start < end");

    console.log("Validated timespan:", timespan);
  } catch (error) {
    console.error("Error validating timespan of breakdown values:", error);
    throw error;
  }
});

test("Metrics.getTimeseriesData (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.getTimeseriesData({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(data, "expected timeseries data in response");
    console.log("Retrieved timeseries data for metric");
  } catch (error) {
    console.error("Error getting timeseries data:", error);
    throw error;
  }
});

test("Metrics.getTimeseriesData - structure validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.getTimeseriesData({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(Array.isArray(data), "expected timeseries data as array");
    assert.ok(data.length > 0, "expected at least one timeseries entry");

    const first = data[0];
    assert.ok("intervalTime" in first, "expected intervalTime field");
    assert.ok("metricValue" in first, "expected metricValue field");
    assert.ok("numberOfViews" in first, "expected numberOfViews field");

    console.log("Validated structure of timeseries data with", data.length, "entries");
  } catch (error) {
    console.error("Error validating structure of timeseries data:", error);
    throw error;
  }
});

test("Metrics.getTimeseriesData - type checks (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.getTimeseriesData({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);

    data.forEach((point: any, idx: number) => {
      assert.ok(!isNaN(Date.parse(point.intervalTime)), `invalid intervalTime at index ${idx}`);
      assert.strictEqual(typeof point.metricValue, "number", "metricValue should be number");
      assert.strictEqual(typeof point.numberOfViews, "number", "numberOfViews should be number");
    });

    console.log("Validated types for all timeseries points");
  } catch (error) {
    console.error("Error validating types in timeseries data:", error);
    throw error;
  }
});

test("Metrics.getTimeseriesData - metric value range (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.getTimeseriesData({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);

    data.forEach((point: any, idx: number) => {
      assert.ok(point.metricValue >= 0 && point.metricValue <= 1, `metricValue out of range at index ${idx}`);
    });

    console.log("Validated metricValue range [0–1] for all points");
  } catch (error) {
    console.error("Error validating metricValue ranges:", error);
    throw error;
  }
});

test("Metrics.getTimeseriesData - number of views validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.getTimeseriesData({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);

    data.forEach((point: any, idx: number) => {
      assert.ok(point.numberOfViews >= 0, `numberOfViews should not be negative at index ${idx}`);
    });

    console.log("Validated numberOfViews non-negative for all points");
  } catch (error) {
    console.error("Error validating numberOfViews:", error);
    throw error;
  }
});

test("Metrics.getTimeseriesData - chronological order (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.getTimeseriesData({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);

    for (let i = 1; i < data.length; i++) {
      const prev = new Date(data[i - 1].intervalTime).getTime();
      const curr = new Date(data[i].intervalTime).getTime();
      assert.ok(curr >= prev, `intervalTime not sorted at index ${i}`);
    }

    console.log("Validated chronological ordering of intervalTime");
  } catch (error) {
    console.error("Error validating chronological order of timeseries data:", error);
    throw error;
  }
});

test("Metrics.getTimeseriesData - timespan validation (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.metrics.getTimeseriesData({
      metricId: "quality_of_experience_score",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const timespan = (res as any).timespan;

    assert.ok(Array.isArray(timespan), "expected timespan to be array");
    assert.strictEqual(timespan.length, 2, "expected timespan to have 2 values");
    assert.ok(timespan[0] < timespan[1], "expected timespan start < end");

    console.log("Validated timespan boundaries:", timespan);
  } catch (error) {
    console.error("Error validating timespan of timeseries data:", error);
    throw error;
  }
});
