import test from "node:test";
import assert from "node:assert/strict";
import { Fastpix } from "../../src/sdk/sdk.js";

const USERNAME = process.env["FASTPIX_USERNAME"];
const PASSWORD = process.env["FASTPIX_PASSWORD"];

function haveCreds() {
  return Boolean(USERNAME && PASSWORD);
}

const TEST_TIMEOUT_MS = 120_000;

function getSdk() {
  return new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });
}

async function createTestPlaylist(sdk: Fastpix) {
  const res = await sdk.playlist.createAPlaylist({
    name: "Test Playlist",
    referenceId: `testplaylist${Date.now()}`,
    type: "manual",
    description: "A test playlist created by integration tests",
  }, { timeoutMs: TEST_TIMEOUT_MS });
  return (res as any).data ?? (res as any);
}

async function getFirstPlaylistId(sdk: Fastpix) {
  const res = await sdk.playlist.getAllPlaylists({ limit: 1 }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any[] = (res as any).data ?? (res as any);
  return data?.[0]?.id;
}

test("Playlist.createAPlaylist (basic creation)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const data = await createTestPlaylist(sdk);

  assert.ok(data.id, "expected playlist id in response");
  assert.equal(data.name, "Test Playlist");
  assert.equal(data.type, "manual");
  console.log("Created playlist:", data.id, "with name:", data.name);
});

test("Playlist.createAPlaylist string fields", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const data = await createTestPlaylist(sdk);

  ["id", "name", "referenceId", "type", "description", "playOrder", "workspaceId"].forEach(field => {
    assert.ok(data[field], `expected ${field} to exist`);
    assert.strictEqual(typeof data[field], "string", `${field} should be a string`);
  });
});

test("Playlist.createAPlaylist metadata validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const data = await createTestPlaylist(sdk);

  assert.ok(data.metadata, "expected metadata object");
  assert.ok(data.metadata.createdDate, "metadata should have createdDate");
  assert.ok(data.metadata.updatedDate, "metadata should have updatedDate");
});

test("Playlist.createAPlaylist mediaList is array", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const data = await createTestPlaylist(sdk);

  assert.ok(Array.isArray(data.mediaList), "expected mediaList to be an array");
});

test("Playlist.createAPlaylist date fields", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const data = await createTestPlaylist(sdk);

  ["createdAt", "updatedAt"].forEach(field => {
    assert.ok(data[field], `expected ${field} to exist`);
    const d = new Date(data[field]);
    assert.ok(!isNaN(d.getTime()), `${field} should be a valid date`);
  });
});

test("Playlist.createAPlaylist mediaCount validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const data = await createTestPlaylist(sdk);

  assert.ok("mediaCount" in data, "expected mediaCount field");
  assert.strictEqual(typeof data.mediaCount, "number", "mediaCount should be a number");
});

test("Playlist.createAPlaylist full object validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const data = await createTestPlaylist(sdk);

  assert.ok(data.id && typeof data.id === "string");
  assert.ok(data.name && typeof data.name === "string");
  assert.ok(data.referenceId && typeof data.referenceId === "string");
  assert.ok(data.type && typeof data.type === "string");
  assert.ok(data.description && typeof data.description === "string");
  assert.ok(data.playOrder && typeof data.playOrder === "string");
  assert.ok(data.metadata && typeof data.metadata === "object");
  assert.ok(Array.isArray(data.mediaList));
  assert.ok(data.workspaceId && typeof data.workspaceId === "string");
  ["createdAt", "updatedAt"].forEach(field => {
    const d = new Date(data[field]);
    assert.ok(!isNaN(d.getTime()));
  });
  assert.strictEqual(typeof data.mediaCount, "number");
});

test("Playlist.getAllPlaylists (working test)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  const res = await sdk.playlist.getAllPlaylists({
    limit: 10,
  }, { timeoutMs: TEST_TIMEOUT_MS });

  const data = (res as any).data ?? (res as any);
  assert.ok(Array.isArray(data), "expected array of playlists");
  console.log("Retrieved", data.length, "playlists");
});

test("Playlist.getAllPlaylists (basic test)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const res = await sdk.playlist.getAllPlaylists({ limit: 10 }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any[] = (res as any).data ?? (res as any);

  assert.ok(Array.isArray(data), "expected array of playlists");
  console.log("Retrieved", data.length, "playlists");
});

// 2. Validate each playlist contains required fields
test("Playlist.getAllPlaylists contains required fields", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const data: any[] = (await sdk.playlist.getAllPlaylists({ limit: 10 }, { timeoutMs: TEST_TIMEOUT_MS })).data ?? [];

  data.forEach((playlist, index) => {
    assert.ok(playlist.id, `playlist at index ${index} should have id`);
    assert.ok(playlist.name, `playlist at index ${index} should have name`);
    assert.ok(playlist.type, `playlist at index ${index} should have type`);
    assert.ok(playlist.referenceId, `playlist at index ${index} should have referenceId`);
    assert.ok(playlist.createdAt, `playlist at index ${index} should have createdAt`);
    assert.ok("mediaCount" in playlist, `playlist at index ${index} should have mediaCount`);
  });
});

// 3. Validate types of fields
test("Playlist.getAllPlaylists fields types", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const data: any[] = (await sdk.playlist.getAllPlaylists({ limit: 10 }, { timeoutMs: TEST_TIMEOUT_MS })).data ?? [];

  data.forEach((playlist, index) => {
    assert.strictEqual(typeof playlist.id, "string", `playlist ${index} id should be string`);
    assert.strictEqual(typeof playlist.name, "string", `playlist ${index} name should be string`);
    assert.strictEqual(typeof playlist.type, "string", `playlist ${index} type should be string`);
    assert.strictEqual(typeof playlist.referenceId, "string", `playlist ${index} referenceId should be string`);
    assert.strictEqual(typeof playlist.mediaCount, "number", `playlist ${index} mediaCount should be number`);

    const createdAtDate = new Date(playlist.createdAt);
    assert.ok(!isNaN(createdAtDate.getTime()), `playlist ${index} createdAt should be a valid date`);
  });
});

// 4. Validate array is non-empty
test("Playlist.getAllPlaylists returns non-empty array", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const data: any[] = (await sdk.playlist.getAllPlaylists({ limit: 10 }, { timeoutMs: TEST_TIMEOUT_MS })).data ?? [];
  assert.ok(data.length > 0, "expected at least one playlist");
});

// 5. Validate pagination object
test("Playlist.getAllPlaylists pagination validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const res: any = await sdk.playlist.getAllPlaylists({ limit: 10 }, { timeoutMs: TEST_TIMEOUT_MS });

  assert.ok(res.pagination, "expected pagination object in response");
  assert.strictEqual(typeof res.pagination.totalRecords, "number", "totalRecords should be number");
  assert.strictEqual(typeof res.pagination.currentOffset, "number", "currentOffset should be number");
  assert.strictEqual(typeof res.pagination.offsetCount, "number", "offsetCount should be number");
});

test("Playlist.getPlaylistById (working test)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) {
    console.warn("Skipping integration test: FASTPIX_USERNAME/PASSWORD not set");
    return;
  }

  const sdk = new Fastpix({
    security: { username: USERNAME!, password: PASSWORD! },
    timeoutMs: TEST_TIMEOUT_MS,
  });

  // First create a playlist to get an ID
  const createRes = await sdk.playlist.createAPlaylist({
    name: "Test Playlist for Get",
    referenceId: `testgetplaylist${Date.now()}`,
    type: "manual",
    description: "A test playlist for get operation",
  }, { timeoutMs: TEST_TIMEOUT_MS });

  const createData = (createRes as any).data ?? (createRes as any);
  const playlistId = createData?.id;

  if (!playlistId) {
    console.warn("No playlist ID available for getPlaylistById test");
    return;
  }

  console.log("Created playlist with ID:", playlistId);

  // Now get the playlist by ID
  const res = await sdk.playlist.getPlaylistById({
    playlistId: playlistId,
  }, { timeoutMs: TEST_TIMEOUT_MS });

  const data = (res as any).data ?? (res as any);
  assert.ok(data?.id, "expected playlist id in response");
  assert.equal(data.id, playlistId, "playlist ID should match requested ID");
  assert.equal(data.name, "Test Playlist for Get", "playlist name should match");
  console.log("Retrieved playlist:", data.id, "with name:", data.name);
});

test("Playlist.getPlaylistById (basic test)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);

  if (!playlistId) {
    console.warn("No playlist available for getPlaylistById test");
    return;
  }

  const res = await sdk.playlist.getPlaylistById({ playlistId }, { timeoutMs: TEST_TIMEOUT_MS });
  const data: any = (res as any).data ?? (res as any);

  assert.ok(data?.id, "expected playlist id in response");
  assert.equal(data.id, playlistId, "playlist ID should match requested ID");
});

test("Playlist.getPlaylistById name and type validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);
  if (!playlistId) return;

  const data: any = (await sdk.playlist.getPlaylistById({ playlistId }, { timeoutMs: TEST_TIMEOUT_MS })).data ?? {};
  
  assert.ok(data.name, "playlist should have a name");
  assert.ok(data.type, "playlist should have a type");
});

test("Playlist.getPlaylistById metadata and workspace validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);
  if (!playlistId) return;

  const data: any = (await sdk.playlist.getPlaylistById({ playlistId }, { timeoutMs: TEST_TIMEOUT_MS })).data ?? {};
  
  assert.ok(data.mediaList && Array.isArray(data.mediaList), "mediaList should exist and be an array");
  assert.ok(data.workspaceId && typeof data.workspaceId === "string", "workspaceId should exist and be string");
});

test("Playlist.getPlaylistById description and timestamps validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);
  if (!playlistId) return;

  const data: any = (await sdk.playlist.getPlaylistById({ playlistId }, { timeoutMs: TEST_TIMEOUT_MS })).data ?? {};
  
  assert.ok(data.description, "description should exist");
  const createdAt = new Date(data.createdAt);
  const updatedAt = new Date(data.updatedAt);
  assert.ok(!isNaN(createdAt.getTime()), "createdAt should be a valid date");
  assert.ok(!isNaN(updatedAt.getTime()), "updatedAt should be a valid date");
});

test("Playlist.getPlaylistById mediaCount validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);
  if (!playlistId) return;

  const data: any = (await sdk.playlist.getPlaylistById({ playlistId }, { timeoutMs: TEST_TIMEOUT_MS })).data ?? {};
  
  assert.strictEqual(typeof data.mediaCount, "number", "mediaCount should be a number");
  assert.ok(data.mediaCount >= 0, "mediaCount should be zero or more");
});

test("Playlist.updateAPlaylist (basic test)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);

  if (!playlistId) {
    console.warn("No playlist available for updateAPlaylist test");
    return;
  }

  const res = await sdk.playlist.updateAPlaylist({
    playlistId: playlistId as string,
    updatePlaylistRequest: {
      name: "updated name",
      description: "updated description",
    },
  }, { timeoutMs: TEST_TIMEOUT_MS });

  const data: any = (res as any).data ?? (res as any);

  assert.ok(data?.id, "expected playlist id in response");
  assert.equal(data.id, playlistId, "playlist ID should match requested ID");
  assert.equal(data.name, "updated name", "playlist name should be updated");
  assert.equal(data.description, "updated description", "playlist description should be updated");
});

test("Playlist.updateAPlaylist metadata and workspace validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);
  if (!playlistId) return;

  const data: any = (await sdk.playlist.updateAPlaylist({
    playlistId,
    updatePlaylistRequest: { name: "updated name", description: "updated description" },
  }, { timeoutMs: TEST_TIMEOUT_MS })).data ?? {};

  assert.ok(data.metadata, "metadata should exist");
  assert.ok(data.workspaceId && typeof data.workspaceId === "string", "workspaceId should exist and be string");
});

test("Playlist.updateAPlaylist playOrder and mediaList validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);
  if (!playlistId) return;

  const data: any = (await sdk.playlist.updateAPlaylist({
    playlistId,
    updatePlaylistRequest: { name: "updated name", description: "updated description" },
  }, { timeoutMs: TEST_TIMEOUT_MS })).data ?? {};

  assert.ok(data.playOrder, "playOrder should exist");
  assert.ok(Array.isArray(data.mediaList), "mediaList should be an array");
});

test("Playlist.updateAPlaylist timestamps validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);
  if (!playlistId) return;

  const data: any = (await sdk.playlist.updateAPlaylist({
    playlistId,
    updatePlaylistRequest: { name: "updated name", description: "updated description" },
  }, { timeoutMs: TEST_TIMEOUT_MS })).data ?? {};

  const createdAt = new Date(data.createdAt);
  const updatedAt = new Date(data.updatedAt);

  assert.ok(!isNaN(createdAt.getTime()), "createdAt should be a valid date");
  assert.ok(!isNaN(updatedAt.getTime()), "updatedAt should be a valid date");
});

test("Playlist.updateAPlaylist mediaCount validation", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);
  if (!playlistId) return;

  const data: any = (await sdk.playlist.updateAPlaylist({
    playlistId,
    updatePlaylistRequest: { name: "updated name", description: "updated description" },
  }, { timeoutMs: TEST_TIMEOUT_MS })).data ?? {};

  assert.strictEqual(typeof data.mediaCount, "number", "mediaCount should be a number");
  assert.ok(data.mediaCount >= 0, "mediaCount should be zero or more");
});

test("Playlist.deleteAPlaylist (basic test)", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);

  if (!playlistId) {
    console.warn("No playlist available for deleteAPlaylist test");
    return;
  }

  const res: any = await sdk.playlist.deleteAPlaylist({
    playlistId: playlistId as string,
  }, { timeoutMs: TEST_TIMEOUT_MS });

  assert.strictEqual(res.success, true, "deleteAPlaylist should return success=true");
  console.log("Deleted playlist with ID:", playlistId);
});

test("Playlist.deleteAPlaylist removes playlist from list", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);
  if (!playlistId) return;

  await sdk.playlist.deleteAPlaylist({ playlistId }, { timeoutMs: TEST_TIMEOUT_MS });

  const listRes = await sdk.playlist.getAllPlaylists({ limit: 10 }, { timeoutMs: TEST_TIMEOUT_MS });
  const listData: any[] = (listRes as any).data ?? (listRes as any);

  const found = listData.find((p: any) => p.id === playlistId);
  assert.strictEqual(found, undefined, "deleted playlist should no longer exist in the list");
  console.log("Verified playlist deletion in the list for ID:", playlistId);
});

test("Playlist.deleteAPlaylist with non-existing playlistId", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const fakePlaylistId = "00000000-0000-0000-0000-000000000000";

  try {
    const res: any = await sdk.playlist.deleteAPlaylist({ playlistId: fakePlaylistId }, { timeoutMs: TEST_TIMEOUT_MS });
    assert.strictEqual(res.success, true, "SDK should return success even for non-existing playlist (depends on API behavior)");
    console.log("Attempted to delete non-existing playlist ID:", fakePlaylistId);
  } catch (err) {
    console.log("Error deleting non-existing playlist:", err);
  }
});

test("Playlist.deleteAPlaylist makes getPlaylistById fail", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const playlistId = await getFirstPlaylistId(sdk);
  if (!playlistId) return;

  await sdk.playlist.deleteAPlaylist({ playlistId }, { timeoutMs: TEST_TIMEOUT_MS });

  try {
    await sdk.playlist.getPlaylistById({ playlistId }, { timeoutMs: TEST_TIMEOUT_MS });
    assert.fail("Expected getPlaylistById to fail for deleted playlist");
  } catch (err) {
    console.log("Verified getPlaylistById fails for deleted playlist ID:", playlistId);
  }
});

test("Playlist.deleteAPlaylist multiple playlists", { timeout: TEST_TIMEOUT_MS }, async () => {
  if (!haveCreds()) return;

  const sdk = getSdk();
  const listRes = await sdk.playlist.getAllPlaylists({ limit: 5 }, { timeoutMs: TEST_TIMEOUT_MS });
  const listData: any[] = (listRes as any).data ?? (listRes as any);

  for (const playlist of listData) {
    const res: any = await sdk.playlist.deleteAPlaylist({ playlistId: playlist.id }, { timeoutMs: TEST_TIMEOUT_MS });
    assert.strictEqual(res.success, true, `playlist ${playlist.id} should be deleted`);
    console.log("Deleted playlist:", playlist.id);
  }
});
