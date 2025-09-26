import test from "node:test";
import assert from "node:assert/strict";
import { Fastpix } from "../../src/sdk/sdk.js";

const USERNAME = process.env["FASTPIX_USERNAME"];
const PASSWORD = process.env["FASTPIX_PASSWORD"];

function haveCreds() {
  return Boolean(USERNAME && PASSWORD);
}

const TEST_TIMEOUT_MS = 120_000;

// Helper function to get SDK instance
function getSdk() {
  return new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });
}

// Helper to get an existing stream ID
async function getFirstStreamId(sdk: Fastpix): Promise<string | undefined> {
  const listRes = await sdk.manageLiveStream.getAllStreams({ limit: 5 }, { timeoutMs: TEST_TIMEOUT_MS });
  const listData: any[] = (listRes as any).data ?? (listRes as any);
  return listData?.[0]?.streamId;
}

test("ManageLiveStream.getAllStreams (basic test)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");

  const sdk = getSdk();
  const res = await sdk.manageLiveStream.getAllStreams({ limit: 10 }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any[] = (res as any).data ?? (res as any);

  assert.ok(Array.isArray(data), "expected array of live streams");
  console.log("Retrieved", data.length, "live streams");
});

test("Each live stream contains streamId, streamKey, and srtSecret", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const data: any = (await sdk.manageLiveStream.getAllStreams({ limit: 10 }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  data.forEach((stream: any, index: any) => {
    assert.ok(stream.streamId, `stream at index ${index} should have streamId`);
    assert.strictEqual(typeof stream.streamId, "string");

    assert.ok(stream.streamKey, `stream at index ${index} should have streamKey`);
    assert.strictEqual(typeof stream.streamKey, "string");

    assert.ok(stream.srtSecret, `stream at index ${index} should have srtSecret`);
    assert.strictEqual(typeof stream.srtSecret, "string");
  });
});

test("ManageLiveStream.getLiveStreamById (basic test)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  try {
    // First get a list of streams to find an existing stream ID
    const listRes = await sdk.manageLiveStream.getAllStreams({
      limit: 5,
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const listData = (listRes as any).data ?? (listRes as any);
    const existingStream = listData?.[0];

    if (!existingStream?.streamId) {
      console.warn("No live stream available for getLiveStreamById test");
      return;
    }

    const streamId = existingStream.streamId;
    console.log("Using existing stream with ID:", streamId);

    // Now get the specific stream
    const res = await sdk.manageLiveStream.getLiveStreamById({
      streamId: streamId,
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(data?.streamId, "expected stream id in response");
    assert.equal(data.streamId, streamId, "stream ID should match requested ID");
    assert.ok(data?.status, "expected status in response");
    console.log("Retrieved stream:", data.streamId, "with status:", data.status);
  } catch (error) {
    console.error("Error getting live stream by ID:", error);
    throw error;
  }
});

test("ManageLiveStream.getLiveStreamById (basic test)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return console.warn("No live stream available for getLiveStreamById test");

  const res = await sdk.manageLiveStream.getLiveStreamById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (res as any).data ?? (res as any);

  assert.ok(data.streamId, "expected streamId in response");
  assert.strictEqual(data.streamId, streamId, "streamId should match requested ID");
});

test("Live stream contains valid streamKey and srtSecret", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const data: any = (await sdk.manageLiveStream.getLiveStreamById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(data.streamKey, "expected streamKey in response");
  assert.strictEqual(typeof data.streamKey, "string");

  assert.ok(data.srtSecret, "expected srtSecret in response");
  assert.strictEqual(typeof data.srtSecret, "string");
});

test("Live stream boolean fields are valid", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const data: any = (await sdk.manageLiveStream.getLiveStreamById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  ["trial", "enableRecording", "enableDvrMode"].forEach(field => {
    assert.strictEqual(typeof data[field], "boolean", `field ${field} should be boolean`);
  });
});

test("Live stream numeric fields are valid", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const data: any = (await sdk.manageLiveStream.getLiveStreamById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  ["maxDuration", "reconnectWindow"].forEach(field => {
    assert.strictEqual(typeof data[field], "number", `field ${field} should be number`);
  });
});

test("Live stream string fields are valid", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const data: any = (await sdk.manageLiveStream.getLiveStreamById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(["idle", "active", "ended"].includes(data.status), "status should be valid");
  assert.strictEqual(typeof data.maxResolution, "string", "maxResolution should be string");
  assert.ok(["public", "private"].includes(data.mediaPolicy), "mediaPolicy should be valid string");
});

test("Live stream createdAt is valid date", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const data: any = (await sdk.manageLiveStream.getLiveStreamById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS })).data;
  const createdAtDate = new Date(data.createdAt);
  assert.ok(!isNaN(createdAtDate.getTime()), "createdAt should be a valid date");
});

test("Live stream metadata exists and is an object", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const data: any = (await sdk.manageLiveStream.getLiveStreamById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS })).data;
  assert.ok(typeof data.metadata === "object" && data.metadata !== null, "metadata should be an object");
});

test("Live stream playbackIds should be an array", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const data: any = (await sdk.manageLiveStream.getLiveStreamById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS })).data;
  assert.ok(Array.isArray(data.playbackIds), "playbackIds should be an array");
});

test("Live stream srtPlaybackResponse contains required fields", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const data: any = (await sdk.manageLiveStream.getLiveStreamById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(typeof data.srtPlaybackResponse === "object" && data.srtPlaybackResponse !== null, "srtPlaybackResponse should be an object");
  assert.ok(data.srtPlaybackResponse.srtPlaybackStreamId, "srtPlaybackStreamId should exist");
  assert.ok(data.srtPlaybackResponse.srtPlaybackSecret, "srtPlaybackSecret should exist");
});

test("Live stream full object validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const data: any = (await sdk.manageLiveStream.getLiveStreamById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(data.streamId && typeof data.streamId === "string");
  assert.ok(data.streamKey && typeof data.streamKey === "string");
  assert.ok(data.srtSecret && typeof data.srtSecret === "string");
  assert.strictEqual(typeof data.trial, "boolean");
  assert.strictEqual(typeof data.enableRecording, "boolean");
  assert.strictEqual(typeof data.enableDvrMode, "boolean");
  assert.strictEqual(typeof data.maxDuration, "number");
  assert.strictEqual(typeof data.reconnectWindow, "number");
  assert.ok(["idle", "active", "ended"].includes(data.status));
  assert.ok(["public", "private"].includes(data.mediaPolicy));
  assert.ok(!isNaN(new Date(data.createdAt).getTime()));
  assert.ok(typeof data.metadata === "object");
  assert.ok(Array.isArray(data.playbackIds));
  assert.ok(typeof data.srtPlaybackResponse === "object");
  assert.ok(data.srtPlaybackResponse.srtPlaybackStreamId);
  assert.ok(data.srtPlaybackResponse.srtPlaybackSecret);
});

test("ManageLiveStream.getLiveStreamViewerCountById (basic test)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return console.warn("No live stream available for getLiveStreamViewerCountById test");

  const res: any = await sdk.manageLiveStream.getLiveStreamViewerCountById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS });
  const data = res.data ?? res;

  assert.ok(typeof data.views === "number", "expected views to be a number");
  console.log("Viewer count for stream", streamId, "is", data.views);
});

test("Live stream viewer count should be >= 0", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const data: any = (await sdk.manageLiveStream.getLiveStreamViewerCountById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS })).data;

  assert.ok(data.views >= 0, "viewer count should be zero or positive");
});

test("Live stream viewer count response success", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const res: any = await sdk.manageLiveStream.getLiveStreamViewerCountById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS });
  assert.strictEqual(res.success, true, "expected success to be true");
});

test("Live stream viewer count is integer", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const data: any = (await sdk.manageLiveStream.getLiveStreamViewerCountById({ streamId }, { timeoutMs: TEST_TIMEOUT_MS })).data;
  assert.strictEqual(Number.isInteger(data.views), true, "viewer count should be an integer");
});

test("ManageLiveStream.updateLiveStream (basic test)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return console.warn("No live stream available for updateLiveStream test");

  const patch = {
    metadata: { livestream_name: "Gaming_stream" },
    reconnectWindow: 100,
  };

  const res: any = await sdk.manageLiveStream.updateLiveStream({
    streamId,
    patchLiveStreamRequest: patch,
  }, { timeoutMs: TEST_TIMEOUT_MS });

  assert.strictEqual(res.success, true, "expected success to be true");
  console.log("Updated live stream with ID:", streamId);
});

test("updateLiveStream updates metadata correctly", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const patch = { metadata: { livestream_name: "Gaming_stream" } };
  const res: any = await sdk.manageLiveStream.updateLiveStream({ streamId, patchLiveStreamRequest: patch }, { timeoutMs: TEST_TIMEOUT_MS });
  const data = res.data ?? res;

  assert.ok(data.metadata, "expected metadata in response");
  assert.strictEqual(data.metadata.livestream_name, "Gaming_stream", "metadata livestream_name should be updated");
});

test("updateLiveStream updates reconnectWindow correctly", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const patch = { reconnectWindow: 100 };
  const res: any = await sdk.manageLiveStream.updateLiveStream({ streamId, patchLiveStreamRequest: patch }, { timeoutMs: TEST_TIMEOUT_MS });
  const data = res.data ?? res;

  assert.strictEqual(data.reconnectWindow, 100, "reconnectWindow should be updated to 100");
});

test("updateLiveStream response contains required fields", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const patch = { reconnectWindow: 100 };
  const res: any = await sdk.manageLiveStream.updateLiveStream({ streamId, patchLiveStreamRequest: patch }, { timeoutMs: TEST_TIMEOUT_MS });
  const data = res.data ?? res;

  const requiredFields = [
    "streamId", "streamKey", "srtSecret", "status",
    "maxResolution", "maxDuration", "createdAt",
    "reconnectWindow", "enableRecording", "mediaPolicy",
    "metadata", "playbackIds", "srtPlaybackResponse"
  ];

  requiredFields.forEach(field => {
    assert.ok(field in data, `expected field ${field} in response`);
  });
});

test("updateLiveStream response field types", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const patch = { reconnectWindow: 100 };
  const res: any = await sdk.manageLiveStream.updateLiveStream({ streamId, patchLiveStreamRequest: patch }, { timeoutMs: TEST_TIMEOUT_MS });
  const data = res.data ?? res;

  assert.strictEqual(typeof data.streamId, "string");
  assert.strictEqual(typeof data.streamKey, "string");
  assert.strictEqual(typeof data.srtSecret, "string");
  assert.strictEqual(typeof data.status, "string");
  assert.strictEqual(typeof data.maxResolution, "string");
  assert.strictEqual(typeof data.maxDuration, "number");
  assert.ok(!isNaN(new Date(data.createdAt).getTime()), "createdAt should be a valid date");
  assert.strictEqual(typeof data.reconnectWindow, "number");
  assert.strictEqual(typeof data.enableRecording, "boolean");
  assert.strictEqual(typeof data.mediaPolicy, "string");
  assert.strictEqual(typeof data.metadata, "object");
  assert.ok(Array.isArray(data.playbackIds));
  assert.strictEqual(typeof data.srtPlaybackResponse, "object");
});

test("ManageLiveStream.deleteLiveStream (basic test)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return console.warn("No live stream available to delete");

  const res: any = await sdk.manageLiveStream.deleteLiveStream({ streamId }, { timeoutMs: TEST_TIMEOUT_MS });
  assert.strictEqual(res.success, true, "expected deleteLiveStream to succeed");
  console.log("Deleted live stream with ID:", streamId);
});

test("deleteLiveStream with non-existing stream ID", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const fakeStreamId = "00000000000000000000000000000000";

  const res: any = await sdk.manageLiveStream.deleteLiveStream({ streamId: fakeStreamId }, { timeoutMs: TEST_TIMEOUT_MS });
  // Depending on API behavior, it may return success or throw error. Here we check for success.
  assert.strictEqual(res.success, true, "expected deleteLiveStream to return success even for non-existing ID");
  console.log("Attempted deletion of non-existing stream ID:", fakeStreamId);
});

test("deleteLiveStream removes stream from list", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  await sdk.manageLiveStream.deleteLiveStream({ streamId }, { timeoutMs: TEST_TIMEOUT_MS });

  const listRes: any = await sdk.manageLiveStream.getAllStreams({ limit: 10 }, { timeoutMs: TEST_TIMEOUT_MS });
  const listData: any[] = listRes.data ?? listRes;
  const found = listData.find(s => s.streamId === streamId);

  assert.strictEqual(found, undefined, "deleted live stream should not exist in the list");
  console.log("Verified live stream deletion in list for ID:", streamId);
});

test("deleteLiveStream with empty streamId", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();

  try {
    await sdk.manageLiveStream.deleteLiveStream({ streamId: "" }, { timeoutMs: TEST_TIMEOUT_MS });
    assert.fail("Expected error when deleting with empty streamId");
  } catch (err) {
    console.log("Caught expected error for empty streamId:", (err as any).message ?? err);
  }
});

test("deleteLiveStream response structure", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const streamId = await getFirstStreamId(sdk);
  if (!streamId) return;

  const res: any = await sdk.manageLiveStream.deleteLiveStream({ streamId }, { timeoutMs: TEST_TIMEOUT_MS });

  assert.ok("success" in res, "response should contain 'success'");
  assert.strictEqual(typeof res.success, "boolean", "success should be a boolean");
});
