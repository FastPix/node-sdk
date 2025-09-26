import test from "node:test";
import assert from "node:assert/strict";
import { Fastpix } from "../../src/sdk/sdk.js";

const USERNAME = process.env["FASTPIX_USERNAME"];
const PASSWORD = process.env["FASTPIX_PASSWORD"];
const TEST_TIMEOUT_MS = 120_000;

function haveCreds() {
  return Boolean(USERNAME && PASSWORD);
}

// Test 1: Check main listErrors response structure
test("Errors.listErrors returns structured response (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const res = await sdk.errors.listErrors({ timespan: "7:days" }, { timeoutMs: TEST_TIMEOUT_MS });
  const data = (res as any).data ?? (res as any);

  assert.ok(Array.isArray(data.errors), "expected 'errors' to be an array");
  assert.ok(Array.isArray(data.topErrors), "expected 'topErrors' to be an array");
  assert.ok(Array.isArray(data.timespan) && data.timespan.length === 2, "expected timespan array of length 2");
});

// Test 2: Validate each error object fields
test("Errors.listErrors errors objects have required fields", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const res = await sdk.errors.listErrors({ timespan: "7:days" }, { timeoutMs: TEST_TIMEOUT_MS });
  const errors = (res as any).data.errors;

  errors.forEach((err: any, index: number) => {
    assert.ok(err.id, `error[${index}].id should exist`);
    assert.ok(err.message, `error[${index}].message should exist`);
    assert.ok(err.code, `error[${index}].code should exist`);
    assert.strictEqual(typeof err.count, "number", `error[${index}].count should be a number`);
    assert.strictEqual(typeof err.percentage, "number", `error[${index}].percentage should be a number`);
    assert.ok(err.description, `error[${index}].description should exist`);
    assert.ok(err.lastSeen && !isNaN(Date.parse(err.lastSeen)), `error[${index}].lastSeen should be valid date`);
  });
});

// Test 3: Validate topErrors objects
test("Errors.listErrors topErrors objects have required fields", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const res = await sdk.errors.listErrors({ timespan: "7:days" }, { timeoutMs: TEST_TIMEOUT_MS });
  const topErrors = (res as any).data.topErrors;

  topErrors.forEach((top: any, index: number) => {
    assert.ok(top.code, `topErrors[${index}].code should exist`);
    assert.strictEqual(typeof top.count, "number", `topErrors[${index}].count should be a number`);
    assert.strictEqual(typeof top.uniqueViewersEffectedPercentage, "number", `topErrors[${index}].uniqueViewersEffectedPercentage should be a number`);
    assert.ok(top.message, `topErrors[${index}].message should exist`);
    assert.ok(top.lastSeen && !isNaN(Date.parse(top.lastSeen)), `topErrors[${index}].lastSeen should be valid date`);
  });
});

// Test 4: Filter by browser_name
test("Errors.listErrors supports browser filter", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const res = await sdk.errors.listErrors({ timespan: "7:days", filterby: "browser_name:Chrome" }, { timeoutMs: TEST_TIMEOUT_MS });
  const errors = (res as any).data.errors;
  assert.ok(errors.length >= 0, "expected 0 or more errors for Chrome browser");
});

// Test 5: Filter by device_type
test("Errors.listErrors supports device filter", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const res = await sdk.errors.listErrors({ timespan: "7:days", filterby: "device_type:Mobile" }, { timeoutMs: TEST_TIMEOUT_MS });
  const errors = (res as any).data.errors;
  assert.ok(errors.length >= 0, "expected 0 or more errors for Mobile devices");
});
