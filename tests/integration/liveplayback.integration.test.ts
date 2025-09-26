import test from "node:test";
import assert from "node:assert/strict";
import { Fastpix } from "../../src/sdk/sdk.js";

const USERNAME = process.env["FASTPIX_USERNAME"];
const PASSWORD = process.env["FASTPIX_PASSWORD"];

function haveCreds() {
  return Boolean(USERNAME && PASSWORD);
}

const TEST_TIMEOUT_MS = 120_000;

test("LivePlayback.createPlaybackIdOfStream (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
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
      console.warn("No live stream available for createPlaybackIdOfStream test");
      return;
    }

    const streamId = existingStream.streamId;
    console.log("Using existing stream with ID:", streamId);

    // Now create a playback ID for the stream
    const res = await sdk.livePlayback.createPlaybackIdOfStream({
      streamId: streamId,
      playbackIdRequest: {
        accessPolicy: "public",
      },
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(data?.id, "expected playback id in response");
    assert.ok(data?.accessPolicy, "expected access policy in response");
    console.log("Created playback ID:", data.id, "with access policy:", data.accessPolicy);
  } catch (error) {
    console.error("Error creating playback ID of stream:", error);
    throw error;
  }
});

test("LivePlayback.createPlaybackIdOfStream with private access (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
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
      console.warn("No live stream available for createPlaybackIdOfStream with private access test");
      return;
    }

    const streamId = existingStream.streamId;
    console.log("Using existing stream with ID:", streamId);

    // Now create a private playback ID for the stream
    const res = await sdk.livePlayback.createPlaybackIdOfStream({
      streamId: streamId,
      playbackIdRequest: {
        accessPolicy: "private",
      },
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(data?.id, "expected playback id in response");
    assert.ok(data?.accessPolicy, "expected access policy in response");
    assert.equal(data.accessPolicy, "private", "access policy should be private");
    console.log("Created private playback ID:", data.id, "with access policy:", data.accessPolicy);
  } catch (error) {
    console.error("Error creating private playback ID of stream:", error);
    throw error;
  }
});

test("LivePlayback.getLiveStreamPlaybackId (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
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
      console.warn("No live stream available for getLiveStreamPlaybackId test");
      return;
    }

    const streamId = existingStream.streamId;
    console.log("Using existing stream with ID:", streamId);

    // First create a playback ID to get an ID
    const createRes = await sdk.livePlayback.createPlaybackIdOfStream({
      streamId: streamId,
      playbackIdRequest: {
        accessPolicy: "public",
      },
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const createData = (createRes as any).data ?? (createRes as any);
    const playbackId = createData?.id;
    
    if (!playbackId) {
      console.warn("No playback ID available for getLiveStreamPlaybackId test");
      return;
    }

    console.log("Created playback ID:", playbackId);

    // Now get the playback ID details
    const res = await sdk.livePlayback.getLiveStreamPlaybackId({
      streamId: streamId,
      playbackId: playbackId,
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(data?.id, "expected playback id in response");
    assert.equal(data.id, playbackId, "playback ID should match requested ID");
    assert.ok(data?.accessPolicy, "expected access policy in response");
    console.log("Retrieved playback ID details:", data.id);
  } catch (error) {
    console.error("Error getting live stream playback ID:", error);
    throw error;
  }
});

test("LivePlayback.deletePlaybackIdOfStream (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
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
      console.warn("No live stream available for deletePlaybackIdOfStream test");
      return;
    }

    const streamId = existingStream.streamId;
    console.log("Using existing stream with ID:", streamId);

    // First create a playback ID to get an ID
    const createRes = await sdk.livePlayback.createPlaybackIdOfStream({
      streamId: streamId,
      playbackIdRequest: {
        accessPolicy: "public",
      },
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const createData = (createRes as any).data ?? (createRes as any);
    const playbackId = createData?.id;
    
    if (!playbackId) {
      console.warn("No playback ID available for deletePlaybackIdOfStream test");
      return;
    }

    console.log("Created playback ID:", playbackId);

    // Now delete the playback ID
    const res = await sdk.livePlayback.deletePlaybackIdOfStream({
      streamId: streamId,
      playbackId: playbackId,
    }, { timeoutMs: TEST_TIMEOUT_MS });

    const data = (res as any).data ?? (res as any);
    assert.ok(data?.success, "expected success in delete response");
    console.log("Deleted playback ID successfully:", playbackId);
  } catch (error) {
    console.error("Error deleting playback ID of stream:", error);
    throw error;
  }
});
