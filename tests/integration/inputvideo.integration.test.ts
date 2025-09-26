import test from "node:test";
import assert from "node:assert/strict";
import { Fastpix } from "../../src/sdk/sdk.js";

const USERNAME = process.env["FASTPIX_USERNAME"];
const PASSWORD = process.env["FASTPIX_PASSWORD"];

function haveCreds() {
  return Boolean(USERNAME && PASSWORD);
}

// Increase default test timeout for live API
const TEST_TIMEOUT_MS = 120_000;

test("InputVideo.createMedia (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  const res = await sdk.inputVideo.createMedia({
    inputs: [
      {
        type: "video",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
    ],
    accessPolicy: "public",
    optimizeAudio: false,
  } as any, { timeoutMs: TEST_TIMEOUT_MS });

  const data = (res as any).data ?? (res as any);
  if (!(data?.id || data?.mediaId)) {
    console.error("createMedia response:", JSON.stringify(res));
  }
  assert.ok(data?.id || data?.mediaId, "expected media id in response");
  if (data?.status) {
    assert.ok(["preparing", "ready", "queued", "processing", "Created"].includes(String(data?.status)));
  }
});

test("InputVideo.directUploadVideoMedia (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  const res = await sdk.inputVideo.directUploadVideoMedia({
    corsOrigin: "*",
    pushMediaSettings: { accessPolicy: "public" },
  } as any, { timeoutMs: TEST_TIMEOUT_MS });

  const data = (res as any).data ?? (res as any);
  if (!(data?.url || (data as any)?.signedUrl || (data as any)?.signed_url)) {
    console.error("directUploadVideoMedia response:", JSON.stringify(res));
  }
  assert.ok(data?.url || (data as any)?.signedUrl || (data as any)?.signed_url, "expected signed upload url");
  if (typeof data?.timeout !== "number") {
    console.warn("directUploadVideoMedia missing numeric timeout");
  }
});

test("InputVideo.createMedia with metadata (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  const res = await sdk.inputVideo.createMedia({
    inputs: [
      {
        type: "video",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
    ],
    accessPolicy: "public",
    metadata: { testKey: "testValue", source: "integration-test" },
    optimizeAudio: false,
  } as any, { timeoutMs: TEST_TIMEOUT_MS });

  const data = (res as any).data ?? (res as any);
  assert.ok(data?.id || data?.mediaId, "expected media id in response");
  if (data?.status) {
    assert.ok(["preparing", "ready", "queued", "processing", "Created"].includes(String(data?.status)));
  }
});

test("InputVideo.directUploadVideoMedia with metadata (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  const res = await sdk.inputVideo.directUploadVideoMedia({
    corsOrigin: "*",
    pushMediaSettings: {
      accessPolicy: "public",
      metadata: { testKey: "testValue", source: "integration-test" },
    },
  } as any, { timeoutMs: TEST_TIMEOUT_MS });

  const data = (res as any).data ?? (res as any);
  assert.ok(data?.url || (data as any)?.signedUrl || (data as any)?.signed_url, "expected signed upload url");
  if (typeof data?.timeout !== "number") {
    console.warn("directUploadVideoMedia missing numeric timeout");
  }
});

test("InputVideo.createMedia with private access policy (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  const res = await sdk.inputVideo.createMedia({
    inputs: [
      {
        type: "video",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
    ],
    accessPolicy: "private",
    optimizeAudio: true,
  } as any, { timeoutMs: TEST_TIMEOUT_MS });

  const data = (res as any).data ?? (res as any);
  assert.ok(data?.id || data?.mediaId, "expected media id in response");
  if (data?.status) {
    assert.ok(["preparing", "ready", "queued", "processing", "Created"].includes(String(data?.status)));
  }
});

test("InputVideo.createMedia with audio input (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  const res = await sdk.inputVideo.createMedia({
    inputs: [
      {
        type: "audio",
        url: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
      },
    ],
    accessPolicy: "public",
    optimizeAudio: true,
  } as any, { timeoutMs: TEST_TIMEOUT_MS });

  const data = (res as any).data ?? (res as any);
  assert.ok(data?.id || data?.mediaId, "expected media id in response");
  if (data?.status) {
    assert.ok(["preparing", "ready", "queued", "processing", "Created"].includes(String(data?.status)));
  }
});

test("InputVideo.directUploadVideoMedia with custom CORS origin (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  const res = await sdk.inputVideo.directUploadVideoMedia({
    corsOrigin: "https://example.com",
    pushMediaSettings: {
      accessPolicy: "private",
      metadata: { environment: "test", version: "1.0" },
    },
  } as any, { timeoutMs: TEST_TIMEOUT_MS });

  const data = (res as any).data ?? (res as any);
  assert.ok(data?.url || (data as any)?.signedUrl || (data as any)?.signed_url, "expected signed upload url");
  assert.equal(data?.corsOrigin, "https://example.com", "CORS origin should match request");
});

