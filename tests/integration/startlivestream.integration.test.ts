import test from "node:test";
import assert from "node:assert/strict";
import { Fastpix } from "../../src/sdk/sdk.js";

const USERNAME = process.env["FASTPIX_USERNAME"];
const PASSWORD = process.env["FASTPIX_PASSWORD"];

function haveCreds() {
  return Boolean(USERNAME && PASSWORD);
}

const TEST_TIMEOUT_MS = 120_000;

test("StartLiveStream.createNewStream (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.startLiveStream.createNewStream({
      playbackSettings: {
        accessPolicy: "public",
      },
      inputMediaSettings: {
        mediaPolicy: "public",
        metadata: {
          "livestream_name": "fastpix_livestream_test",
          "description": "Test livestream created by integration tests",
        },
        enableDvrMode: true,
      },
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(data?.streamId, "expected stream id in response");
    assert.ok(data?.streamKey, "expected stream key in response");
    assert.ok(data?.srtSecret, "expected SRT secret in response");
    assert.ok(data?.status, "expected status in response");
    assert.ok(data?.createdAt, "expected createdAt in response");
    assert.ok(data?.playbackIds, "expected playback IDs in response");
    assert.ok(data?.srtPlaybackResponse, "expected SRT playback response in response");
    console.log("Created livestream with ID:", data.streamId);
    console.log("Stream key:", data.streamKey);
    console.log("SRT secret:", data.srtSecret);
    console.log("Status:", data.status);
  } catch (error) {
    console.error("Error creating livestream:", error);
    throw error;
  }
});

test("StartLiveStream.createNewStream with private access (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.startLiveStream.createNewStream({
      playbackSettings: {
        accessPolicy: "private",
      },
      inputMediaSettings: {
        mediaPolicy: "private",
        metadata: {
          "livestream_name": "fastpix_private_livestream_test",
          "description": "Private test livestream created by integration tests",
        },
        enableDvrMode: false,
      },
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(data?.streamId, "expected stream id in response");
    assert.ok(data?.streamKey, "expected stream key in response");
    assert.ok(data?.srtSecret, "expected SRT secret in response");
    assert.ok(data?.status, "expected status in response");
    assert.ok(data?.createdAt, "expected createdAt in response");
    assert.ok(data?.playbackIds, "expected playback IDs in response");
    assert.ok(data?.srtPlaybackResponse, "expected SRT playback response in response");
    console.log("Created private livestream with ID:", data.streamId);
    console.log("Stream key:", data.streamKey);
    console.log("SRT secret:", data.srtSecret);
    console.log("Status:", data.status);
  } catch (error) {
    console.error("Error creating private livestream:", error);
    throw error;
  }
});

test("StartLiveStream.createNewStream with custom metadata (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    const res = await sdk.startLiveStream.createNewStream({
      playbackSettings: {
        accessPolicy: "public",
      },
      inputMediaSettings: {
        mediaPolicy: "public",
        metadata: {
          "livestream_name": "fastpix_custom_livestream_test",
          "description": "Custom test livestream with extended metadata",
          "category": "testing",
          "tags": "integration,test,livestream",
          "quality": "hd",
        },
        enableDvrMode: true,
      },
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(data?.streamId, "expected stream id in response");
    assert.ok(data?.streamKey, "expected stream key in response");
    assert.ok(data?.srtSecret, "expected SRT secret in response");
    assert.ok(data?.status, "expected status in response");
    assert.ok(data?.createdAt, "expected createdAt in response");
    assert.ok(data?.playbackIds, "expected playback IDs in response");
    assert.ok(data?.srtPlaybackResponse, "expected SRT playback response in response");
    console.log("Created custom livestream with ID:", data.streamId);
    console.log("Stream key:", data.streamKey);
    console.log("SRT secret:", data.srtSecret);
    console.log("Status:", data.status);
  } catch (error) {
    console.error("Error creating custom livestream:", error);
    throw error;
  }
});
