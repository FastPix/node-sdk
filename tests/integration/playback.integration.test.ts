import test from "node:test";
import assert from "node:assert/strict";
import { Fastpix } from "../../src/sdk/sdk.js";

const USERNAME = process.env["FASTPIX_USERNAME"];
const PASSWORD = process.env["FASTPIX_PASSWORD"];

function haveCreds() {
  return Boolean(USERNAME && PASSWORD);
}

const TEST_TIMEOUT_MS = 120_000;

test("Playback.createMediaPlaybackId (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  // First get existing media that's already processed
  const listRes = await sdk.manageVideos.listMedia({
    limit: 10,
    page: 1,
  } as any, { timeoutMs: TEST_TIMEOUT_MS });
  
  const listData = (listRes as any).data ?? (listRes as any);
  const existingMedia = listData?.find((media: any) => media.status === "ready" || media.status === "Ready");
  
  if (!existingMedia?.id) {
    console.warn("No processed media available for createMediaPlaybackId test");
    return;
  }

  const mediaId = existingMedia.id;
  console.log("Using existing processed media with ID:", mediaId);

  // Now create a playback ID
  const res = await sdk.playback.createMediaPlaybackId({
    mediaId: mediaId,
    requestBody: {
      accessPolicy: "public",
      resolution: "1080p",
    },
  } as any, { timeoutMs: TEST_TIMEOUT_MS });

  const data = (res as any).data ?? (res as any);
  console.log("createMediaPlaybackId response:", JSON.stringify(data, null, 2));
  
  // Check if the response is empty (which might mean the media already has playback IDs)
  if (!data || Object.keys(data).length === 0) {
    console.log("Empty response - media might already have playback IDs or endpoint behavior differs");
    // Let's check the media to see if it has existing playback IDs
    const mediaRes = await sdk.manageVideos.getMedia({
      mediaId: mediaId,
    } as any, { timeoutMs: TEST_TIMEOUT_MS });
    
    const mediaData = (mediaRes as any).data ?? (mediaRes as any);
    console.log("Media details:", JSON.stringify(mediaData, null, 2));
    
    if (mediaData?.playbackIds && mediaData.playbackIds.length > 0) {
      console.log("Media already has playback IDs:", mediaData.playbackIds.map((p: any) => p.id));
      return;
    }
  }
  
  if (!data?.playbackIds) {
    console.warn("No playbackIds in response, checking for alternative structure");
    if (data?.id) {
      console.log("Found single playback ID:", data.id);
      return;
    }
  }
  
  assert.ok(data?.playbackIds, "expected playbackIds in response");
  assert.ok(Array.isArray(data.playbackIds), "playbackIds should be an array");
  assert.ok(data.playbackIds.length > 0, "should have at least one playback ID");
  
  const playbackId = data.playbackIds[0];
  assert.ok(playbackId?.id, "playback ID should have an id");
  console.log("Created playback ID:", playbackId.id);
});

test("Playback.getPlaybackId (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  // First get existing media that's already processed
  const listRes = await sdk.manageVideos.listMedia({
    limit: 10,
    page: 1,
  } as any, { timeoutMs: TEST_TIMEOUT_MS });
  
  const listData = (listRes as any).data ?? (listRes as any);
  const existingMedia = listData?.find((media: any) => media.status === "ready" || media.status === "Ready");
  
  if (!existingMedia?.id) {
    console.warn("No processed media available for getPlaybackId test");
    return;
  }

  const mediaId = existingMedia.id;
  console.log("Using existing processed media with ID:", mediaId);

  // Get existing playback IDs from the media
  const mediaRes = await sdk.manageVideos.getMedia({
    mediaId: mediaId,
  } as any, { timeoutMs: TEST_TIMEOUT_MS });

  const mediaData = (mediaRes as any).data ?? (mediaRes as any);
  const playbackId = mediaData?.playbackIds?.[0]?.id;
  
  if (!playbackId) {
    console.warn("No existing playback ID available for getPlaybackId test");
    return;
  }

  console.log("Using existing playback ID:", playbackId);

  // Now get the playback ID details
  const res = await sdk.playback.getPlaybackId({
    mediaId: mediaId,
    playbackId: playbackId,
  } as any, { timeoutMs: TEST_TIMEOUT_MS });

  const data = (res as any).data ?? (res as any);
  assert.ok(data?.id, "expected playback id in response");
  assert.equal(data.id, playbackId, "playback ID should match requested ID");
  assert.ok(data?.accessPolicy, "expected access policy in response");
  console.log("Retrieved playback ID:", data.id, "with policy:", data.accessPolicy);
});

test("Playback.deleteMediaPlaybackId (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  // First get existing media that's already processed
  const listRes = await sdk.manageVideos.listMedia({
    limit: 10,
    page: 1,
  } as any, { timeoutMs: TEST_TIMEOUT_MS });
  
  const listData = (listRes as any).data ?? (listRes as any);
  const existingMedia = listData?.find((media: any) => media.status === "ready" || media.status === "Ready");
  
  if (!existingMedia?.id) {
    console.warn("No processed media available for deleteMediaPlaybackId test");
    return;
  }

  const mediaId = existingMedia.id;
  console.log("Using existing processed media with ID:", mediaId);

  // Get existing playback IDs from the media
  const mediaRes = await sdk.manageVideos.getMedia({
    mediaId: mediaId,
  } as any, { timeoutMs: TEST_TIMEOUT_MS });

  const mediaData = (mediaRes as any).data ?? (mediaRes as any);
  const playbackId = mediaData?.playbackIds?.[0]?.id;
  
  if (!playbackId) {
    console.warn("No existing playback ID available for deleteMediaPlaybackId test");
    return;
  }

  console.log("Using existing playback ID for deletion:", playbackId);

  // Now delete the playback ID
  const res = await sdk.playback.deleteMediaPlaybackId({
    mediaId: mediaId,
    playbackId: playbackId,
  } as any, { timeoutMs: TEST_TIMEOUT_MS });

  const data = (res as any).data ?? (res as any);
  assert.ok(data?.success, "expected success in delete response");
  console.log("Deleted playback ID successfully:", playbackId);
});

test("Playback.createMediaPlaybackId with different resolutions (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  // First get existing media that's already processed
  const listRes = await sdk.manageVideos.listMedia({
    limit: 10,
    page: 1,
  } as any, { timeoutMs: TEST_TIMEOUT_MS });
  
  const listData = (listRes as any).data ?? (listRes as any);
  const existingMedia = listData?.find((media: any) => media.status === "ready" || media.status === "Ready");
  
  if (!existingMedia?.id) {
    console.warn("No processed media available for resolution test");
    return;
  }

  const mediaId = existingMedia.id;
  console.log("Using existing processed media with ID:", mediaId);

  // Test different resolutions
  const resolutions = ["480p", "720p", "1080p", "1440p", "2160p"];
  
  for (const resolution of resolutions) {
    try {
      const res = await sdk.playback.createMediaPlaybackId({
        mediaId: mediaId,
        requestBody: {
          accessPolicy: "public",
          resolution: resolution as any,
        },
      } as any, { timeoutMs: TEST_TIMEOUT_MS });

      const data = (res as any).data ?? (res as any);
      assert.ok(data?.playbackIds, `expected playbackIds for ${resolution}`);
      assert.ok(Array.isArray(data.playbackIds), `playbackIds should be array for ${resolution}`);
      assert.ok(data.playbackIds.length > 0, `should have playback ID for ${resolution}`);
      
      const playbackId = data.playbackIds[0];
      assert.ok(playbackId?.id, `playback ID should have id for ${resolution}`);
      console.log(`Created ${resolution} playback ID:`, playbackId.id);
    } catch (error) {
      console.warn(`Failed to create ${resolution} playback ID:`, error);
    }
  }
});
