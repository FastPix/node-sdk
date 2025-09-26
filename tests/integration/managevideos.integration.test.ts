import test from "node:test";
import assert from "node:assert/strict";
import { Fastpix } from "../../src/sdk/sdk.js";

const USERNAME = process.env["FASTPIX_USERNAME"];
const PASSWORD = process.env["FASTPIX_PASSWORD"];
const TEST_TIMEOUT_MS = 120_000;

function haveCreds() {
  return Boolean(USERNAME && PASSWORD);
}

function getSdk() {
  return new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });
}

/**
 * Helper to get the first media ID from listMedia
 */
async function getFirstMediaId(sdk: Fastpix) {
  const listRes = await sdk.manageVideos.listMedia({ limit: 1, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
  const listData: any[] = (listRes as any).data ?? (listRes as any);
  return listData?.[0]?.id;
}

async function getFirstTrackId(sdk: Fastpix) {
  const listRes = await sdk.manageVideos.listMedia({ limit: 5, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
  const listData: any = (listRes as any).data ?? (listRes as any);
  return listData?.[0]?.tracks?.[0]?.id;
}

// ------------------- LIST MEDIA -------------------
test("ManageVideos.listMedia returns an array", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const res = await sdk.manageVideos.listMedia({ limit: 10, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any[] = (res as any).data ?? (res as any);

  assert.ok(Array.isArray(data), "expected array of media");
  assert.ok(data.length > 0, "expected at least one media item");

  // Validate each media object
  data.forEach((media, index) => {
    assert.ok(media.id, `media at index ${index} should have id`);
    assert.strictEqual(typeof media.id, "string");
    assert.ok(media.status, `media at index ${index} should have status`);
    assert.ok(media.thumbnail, `media at index ${index} should have thumbnail`);
    assert.ok(media.createdAt, `media at index ${index} should have createdAt`);
    const createdAtDate = new Date(media.createdAt);
    assert.ok(!isNaN(createdAtDate.getTime()), "createdAt should be valid date");
  });

  console.log("Retrieved", data.length, "media items");
});

// ------------------- GET MEDIA BY ID -------------------
test("ManageVideos.getMedia returns correct media by ID", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const mediaId = await getFirstMediaId(sdk);
  if (!mediaId) {
    console.warn("No media available for getMedia test");
    return;
  }

  const res = await sdk.manageVideos.getMedia({ mediaId }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (res as any).data ?? (res as any);

  assert.ok(data.id, "expected media id in response");
  assert.strictEqual(data.id, mediaId, "media ID should match requested ID");
  assert.ok(data.status, "expected status in response");
  assert.ok(data.thumbnail, "expected thumbnail in response");
  assert.ok(data.metadata, "expected metadata object");
  assert.ok(data.duration, "expected duration property");
  assert.ok(data.aspectRatio, "expected aspectRatio property");

  console.log("Retrieved media:", data.id, "with status:", data.status);
});

// ------------------- UPDATE MEDIA -------------------
test("ManageVideos.updatedMedia updates media metadata", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const mediaId = await getFirstMediaId(sdk);
  if (!mediaId) {
    console.warn("No media available for updatedMedia test");
    return;
  }

  const res = await sdk.manageVideos.updatedMedia({
    mediaId,
    requestBody: {
      metadata: {
        title: "Updated Test Title",
        description: "Updated test description for integration testing",
        tags: "test,integration,updated",
      },
    },
  }, { timeoutMs: TEST_TIMEOUT_MS });

  const data: any = (res as any).data ?? (res as any);

  assert.ok(data.id, "expected media id in response");
  assert.strictEqual(data.id, mediaId, "media ID should match requested ID");
  assert.ok(data.metadata, "expected metadata object in updated response");
  assert.strictEqual(data.metadata.title, "Updated Test Title");
  assert.strictEqual(data.metadata.description, "Updated test description for integration testing");
  assert.strictEqual(data.metadata.tags, "test,integration,updated");

  assert.ok(data.updatedAt, "expected updatedAt in response");
  const updatedAtDate = new Date(data.updatedAt);
  assert.ok(!isNaN(updatedAtDate.getTime()), "updatedAt should be a valid date");

  console.log("Updated media:", data.id, "with new metadata");
});

// ------------------- ADDITIONAL TEST CASES -------------------

// 4. Verify media object contains playbackIds array
test("ManageVideos.media contains playbackIds array", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const mediaId = await getFirstMediaId(sdk);
  if (!mediaId) return;

  const res = await sdk.manageVideos.getMedia({ mediaId }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (res as any).data ?? (res as any);

  assert.ok(Array.isArray(data.playbackIds), "playbackIds should be an array");
  console.log("Media has", data.playbackIds.length, "playback IDs");
});

// 5. Validate media duration format
test("ManageVideos.media duration format", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const mediaId = await getFirstMediaId(sdk);
  if (!mediaId) return;

  const res = await sdk.manageVideos.getMedia({ mediaId }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (res as any).data ?? (res as any);

  assert.match(data.duration, /^\d{2}:\d{2}:\d{2}$/, "duration should be in HH:MM:SS format");
});

// 6. Validate maxResolution and sourceResolution
test("ManageVideos.media resolution properties", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const mediaId = await getFirstMediaId(sdk);
  if (!mediaId) return;

  const res = await sdk.manageVideos.getMedia({ mediaId }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (res as any).data ?? (res as any);

  assert.strictEqual(data.maxResolution, "1080p", "expected maxResolution to be 1080p");
  assert.strictEqual(data.sourceResolution, "1080p", "expected sourceResolution to be 1080p");
});

// 7. Validate aspect ratio property
test("ManageVideos.media aspect ratio", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const mediaId = await getFirstMediaId(sdk);
  if (!mediaId) return;

  const res = await sdk.manageVideos.getMedia({ mediaId }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (res as any).data ?? (res as any);

  assert.strictEqual(data.aspectRatio, "16:9", "expected aspectRatio to be 16:9");
});

// 8. Ensure media object contains tracks array
test("ManageVideos.media tracks array exists", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const mediaId = await getFirstMediaId(sdk);
  if (!mediaId) return;

  const res = await sdk.manageVideos.getMedia({ mediaId }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (res as any).data ?? (res as any);

  assert.ok(Array.isArray(data.tracks), "tracks should be an array");
  console.log("Media has", data.tracks.length, "tracks");
});

// 9. Verify updatedAt is later than createdAt after update
test("ManageVideos.updatedMedia updates updatedAt timestamp", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const mediaId = await getFirstMediaId(sdk);
  if (!mediaId) return;

  const getRes = await sdk.manageVideos.getMedia({ mediaId }, { timeoutMs: TEST_TIMEOUT_MS });
  const originalData: any = (getRes as any).data ?? (getRes as any);
  const originalUpdatedAt = new Date(originalData.updatedAt);

  const updateRes = await sdk.manageVideos.updatedMedia({
    mediaId,
    requestBody: { metadata: { game: "football" } },
  }, { timeoutMs: TEST_TIMEOUT_MS });

  const updatedData: any = (updateRes as any).data ?? (updateRes as any);
  const newUpdatedAt = new Date(updatedData.updatedAt);

  assert.ok(newUpdatedAt > originalUpdatedAt, "updatedAt should be later than original updatedAt");
  console.log("Media updatedAt timestamp correctly updated");
});

test("ManageVideos.deleteMedia (integration)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();

  // Get the first media ID
  const firstMedia = await getFirstMediaId(sdk);
  if (!firstMedia) {
    console.warn("No media available for deleteMedia test");
    return;
  }

  // Delete the media
  const res = await sdk.manageVideos.deleteMedia({ mediaId: firstMedia }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any = res as any;

  // Assert the response contains success: true
  assert.strictEqual(data.success, true, "expected deleteMedia response to succeed");
  console.log("Deleted media with ID:", firstMedia);

  // Verify the media no longer exists in the list
  const listRes = await sdk.manageVideos.listMedia({ limit: 10, offset: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
  const listData: any[] = (listRes as any).data ?? (listRes as any);
  const found = listData.find(media => media.id === firstMedia);

  assert.strictEqual(found, undefined, "deleted media should no longer exist in the list");
  console.log("Verified deletion in list for media ID:", firstMedia);
});

test("ManageVideos.addMediaTrack (success)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;
  const sdk = getSdk();
  const firstMedia = await getFirstMediaId(sdk);
  if (!firstMedia) return;

  const res = await sdk.manageVideos.addMediaTrack({
    mediaId: firstMedia,
    requestBody: {
      tracks: {
        url: "https://static.fastpix.io/music-1.mp3",
        type: "audio",
        languageCode: "it",
        languageName: "Italian",
      },
    },
  }, { timeoutMs: TEST_TIMEOUT_MS });

  const data: any = (res as any).data ?? (res as any);

  assert.strictEqual(data.type, "audio");
  assert.strictEqual(data.url, "https://static.fastpix.io/music-1.mp3");
  assert.strictEqual(data.languageCode, "it");
  assert.strictEqual(data.languageName, "Italian");
  assert.ok(data.id);
  console.log("Added media track ID:", data.id);
});

test("ManageVideos.addMediaTrack (missing fields)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;
  const sdk = getSdk();
  const firstMedia = await getFirstMediaId(sdk);
  if (!firstMedia) return;

  try {
    await sdk.manageVideos.addMediaTrack({
      mediaId: firstMedia,
      requestBody: {
        tracks: {
          url: "",  // missing URL
          type: "audio",
        },
      },
    }, { timeoutMs: TEST_TIMEOUT_MS });
    assert.fail("Expected error due to missing URL");
  } catch (err) {
    assert.ok(err, "should throw an error when required fields are missing");
    console.log("Properly failed to add track with missing fields");
  }
});

test("ManageVideos.updateMediaTrack (success)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;
  const sdk = getSdk();

  const firstMedia = await getFirstMediaId(sdk);
  const trackId = await getFirstTrackId(sdk);
  if (!firstMedia || !trackId) return;

  const res = await sdk.manageVideos.updateMediaTrack({
    mediaId: firstMedia,
    trackId: trackId,
    updateTrackRequest: {
      url: "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt",
      languageCode: "fr",
      languageName: "French",
    },
  }, { timeoutMs: TEST_TIMEOUT_MS });

  const data: any = (res as any).data ?? (res as any);
  assert.strictEqual(data.url, "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt");
  assert.strictEqual(data.languageCode, "fr");
  assert.strictEqual(data.languageName, "French");
  assert.ok(data.id);
  console.log("Updated media track ID:", data.id);
});

test("ManageVideos.updateMediaTrack (invalid track ID)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;
  const sdk = getSdk();
  const firstMedia = await getFirstMediaId(sdk);
  if (!firstMedia) return;

  const fakeTrackId = "00000000-0000-0000-0000-000000000000";
  try {
    await sdk.manageVideos.updateMediaTrack({
      mediaId: firstMedia,
      trackId: fakeTrackId,
      updateTrackRequest: {
        url: "http://example.com/invalid.vtt",
        languageCode: "en",
        languageName: "English",
      },
    }, { timeoutMs: TEST_TIMEOUT_MS });

    assert.fail("Expected error for invalid track ID");
  } catch (err) {
    assert.ok(err, "should throw an error for invalid track ID");
    console.log("Properly failed to update non-existing track ID");
  }
});

test("ManageVideos.updateMediaTrack (multiple property update)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;
  const sdk = getSdk();

  const firstMedia = await getFirstMediaId(sdk);
  const trackId = await getFirstTrackId(sdk);
  if (!firstMedia || !trackId) return;

  const res = await sdk.manageVideos.updateMediaTrack({
    mediaId: firstMedia,
    trackId: trackId,
    updateTrackRequest: {
      url: "https://static.fastpix.io/music-2.mp3",
      languageCode: "es",
      languageName: "Spanish",
    },
  }, { timeoutMs: TEST_TIMEOUT_MS });

  const data: any = (res as any).data ?? (res as any);
  assert.strictEqual(data.url, "https://static.fastpix.io/music-2.mp3");
  assert.strictEqual(data.languageCode, "es");
  assert.strictEqual(data.languageName, "Spanish");
  console.log("Updated track properties for ID:", data.id);
});
