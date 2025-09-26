import test from "node:test";
import assert from "node:assert/strict";
import { Fastpix } from "../../src/sdk/sdk.js";

const USERNAME = process.env["FASTPIX_USERNAME"];
const PASSWORD = process.env["FASTPIX_PASSWORD"];

function haveCreds() {
  return Boolean(USERNAME && PASSWORD);
}

const TEST_TIMEOUT_MS = 120_000;

test("Dimensions.listDimensions (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.dimensions.listDimensions({ timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(Array.isArray(data), "expected array of dimensions");
    console.log("Retrieved", data.length, "dimensions");
  } catch (error) {
    console.error("Error listing dimensions:", error);
    throw error;
  }
});

test("Dimensions.listFilterValuesForDimension (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.dimensions.listFilterValuesForDimension({
      dimensionsId: "browser_name",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(Array.isArray(data), "expected array of filter values");
    console.log("Retrieved", data.length, "filter values for browser_name dimension");
  } catch (error) {
    console.error("Error listing filter values for dimension:", error);
    throw error;
  }
});

test("Dimensions.listFilterValuesForDimension with device_type (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.dimensions.listFilterValuesForDimension({
      dimensionsId: "device_type",
      timespan: "7:days",
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(Array.isArray(data), "expected array of filter values");
    console.log("Retrieved", data.length, "filter values for device_type dimension");
  } catch (error) {
    console.error("Error listing filter values for device_type dimension:", error);
    throw error;
  }
});
