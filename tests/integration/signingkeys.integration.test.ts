import test from "node:test";
import assert from "node:assert/strict";
import { Fastpix } from "../../src/sdk/sdk.js";

const USERNAME = process.env["FASTPIX_USERNAME"];
const PASSWORD = process.env["FASTPIX_PASSWORD"];
const TEST_TIMEOUT_MS = 120_000;

function haveCreds() {
  return Boolean(USERNAME && PASSWORD);
}

// Helper to get a signing key ID
async function getFirstSigningKeyId(sdk: Fastpix) {
  const listRes = await sdk.signingKeys.listSigningKeys({ limit: 5 }, { timeoutMs: TEST_TIMEOUT_MS });
  const listData: any = (listRes as any).data ?? (listRes as any);
  return listData?.[0]?.id;
}

/* ---------------------- CREATE SIGNING KEY ---------------------- */
test("SigningKeys.createSigningKey returns object", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (await sdk.signingKeys.createSigningKey({ timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(data, "expected data object");
});

test("SigningKeys.createSigningKey includes id", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (await sdk.signingKeys.createSigningKey({ timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(data.id, "expected signing key id");
  assert.strictEqual(typeof data.id, "string");
});

test("SigningKeys.createSigningKey includes privateKey", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (await sdk.signingKeys.createSigningKey({ timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(data.privateKey, "expected private key");
  assert.strictEqual(typeof data.privateKey, "string");
  assert.ok(data.privateKey.startsWith("LS0tLS1CRUdJTiBQUklWQVRF"));
});

test("SigningKeys.createSigningKey includes createdAt", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (await sdk.signingKeys.createSigningKey({ timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(data.createdAt, "expected createdAt");
  const date = new Date(data.createdAt);
  assert.ok(!isNaN(date.getTime()), "createdAt should be a valid date");
});

/* ---------------------- LIST SIGNING KEYS ---------------------- */
test("SigningKeys.listSigningKeys returns array", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (await sdk.signingKeys.listSigningKeys({ limit: 10 }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(Array.isArray(data), "expected array");
  assert.ok(data.length > 0, "expected at least one signing key");
});

test("Each signing key contains id and createdAt", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (await sdk.signingKeys.listSigningKeys({ limit: 10 }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  data.forEach((key: any, i: any) => {
    assert.ok(key.id, `key ${i} should have id`);
    assert.strictEqual(typeof key.id, "string");
    assert.ok(key.createdAt, `key ${i} should have createdAt`);
    const date = new Date(key.createdAt);
    assert.ok(!isNaN(date.getTime()), "createdAt should be a valid date");
  });
});

/* ---------------------- GET SIGNING KEY BY ID ---------------------- */
test("SigningKeys.getSigningKeyById returns correct signingKeyId", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const signingKeyId = await getFirstSigningKeyId(sdk);
  if (!signingKeyId) return;

  const data: any = (await sdk.signingKeys.getSigningKeyById({ signingKeyId }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.strictEqual(data.signingKeyId, signingKeyId);
});

test("SigningKeys.getSigningKeyById includes workspaceId and publicKey", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const signingKeyId = await getFirstSigningKeyId(sdk);
  if (!signingKeyId) return;

  const data: any = (await sdk.signingKeys.getSigningKeyById({ signingKeyId }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(data.workspaceId);
  assert.strictEqual(typeof data.workspaceId, "string");

  assert.ok(data.publicKey);
  assert.strictEqual(typeof data.publicKey, "string");
  assert.ok(data.publicKey.startsWith("-----BEGIN PUBLIC KEY-----"));
  assert.ok(data.publicKey.endsWith("-----END PUBLIC KEY-----\n"));
});

/* ---------------------- DELETE SIGNING KEY ---------------------- */
test("SigningKeys.deleteSigningKey succeeds", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const signingKeyId = await getFirstSigningKeyId(sdk);
  if (!signingKeyId) return;

  const data: any = await sdk.signingKeys.deleteSigningKey({ signingKeyId }, { timeoutMs: TEST_TIMEOUT_MS }) as any;

  assert.strictEqual(data.success, true);
});

test("Deleting a key removes it from list", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const signingKeyId = await getFirstSigningKeyId(sdk);
  if (!signingKeyId) return;

  await sdk.signingKeys.deleteSigningKey({ signingKeyId }, { timeoutMs: TEST_TIMEOUT_MS });

  const listData: any = (await sdk.signingKeys.listSigningKeys({ limit: 10 }, { timeoutMs: TEST_TIMEOUT_MS })).data;
  const found = listData.find((key: { id: any; }) => key.id === signingKeyId);
  assert.strictEqual(found, undefined);
});

test("SigningKeys.getSigningKeyById with invalid ID returns error or null", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const fakeId = "00000000-0000-0000-0000-000000000000";

  try {
    const res = await sdk.signingKeys.getSigningKeyById({ signingKeyId: fakeId }, { timeoutMs: TEST_TIMEOUT_MS });
    const data: any = (res as any).data ?? (res as any);

    // Depending on API, either data is null or some error object
    assert.ok(!data || data.signingKeyId !== fakeId, "Expected no valid data for fake ID");
  } catch (err) {
    console.log("Expected error for non-existent signing key ID:", err);
  }
});

test("Creating multiple signing keys generates unique IDs", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });

  const key1: any = (await sdk.signingKeys.createSigningKey({ timeoutMs: TEST_TIMEOUT_MS })).data;
  const key2: any = (await sdk.signingKeys.createSigningKey({ timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.notStrictEqual(key1.id, key2.id, "Each signing key should have a unique ID");
});

test("SigningKeys.listSigningKeys respects limit parameter", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (await sdk.signingKeys.listSigningKeys({ limit: 2 }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(data.length <= 2, "List should respect limit parameter");
});

test("Deleting an already deleted signing key returns success", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const signingKeyId = await getFirstSigningKeyId(sdk);
  if (!signingKeyId) return;

  // First deletion
  await sdk.signingKeys.deleteSigningKey({ signingKeyId }, { timeoutMs: TEST_TIMEOUT_MS });

  // Attempt to delete again
  const data: any = await sdk.signingKeys.deleteSigningKey({ signingKeyId }, { timeoutMs: TEST_TIMEOUT_MS }) as any;
  assert.strictEqual(data.success, true, "Deleting an already deleted key should still return success");
});

test("SigningKeys.getSigningKeyById publicKey format validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = new Fastpix({ security: { username: USERNAME!, password: PASSWORD! }, timeoutMs: TEST_TIMEOUT_MS });
  const signingKeyId = await getFirstSigningKeyId(sdk);
  if (!signingKeyId) return;

  const data: any = (await sdk.signingKeys.getSigningKeyById({ signingKeyId }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(data.publicKey.startsWith("-----BEGIN PUBLIC KEY-----"), "publicKey should start with BEGIN PUBLIC KEY");
  assert.ok(data.publicKey.endsWith("-----END PUBLIC KEY-----\n"), "publicKey should end with END PUBLIC KEY");
  assert.ok(data.publicKey.includes("\n"), "publicKey should contain newlines for PEM formatting");
});
