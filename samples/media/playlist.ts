/**
 * Playlist API Samples
 * 
 * This file demonstrates how to use the Playlist API to:
 * - Create playlists
 * - List playlists
 * - Get playlist by ID
 * - Update playlists
 * - Add/remove/reorder media in playlists
 * - Delete playlists
 * 
 * Run this sample:
 * npx tsx media/playlist.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { config, logResponse } from "../common/config.js";

let createdPlaylistId: string | undefined;
let mediaIds: string[] = [];

async function createPlaylist() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.playlist.createAPlaylist({
    requestBody: {
      name: config.samplePlaylistName,
      description: config.samplePlaylistDescription,
      metadata: {
        category: "sample",
        created_by: "sdk",
      },
    },
  });

  if (result.createAPlaylistSuccessResponse?.data?.id) {
    createdPlaylistId = result.createAPlaylistSuccessResponse.data.id;
  }

  logResponse("Create Playlist", result);
  return result;
}

async function listPlaylists() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.playlist.getAllPlaylists({
    limit: 10,
    offset: 0,
  });

  logResponse("List Playlists", result);
  return result;
}

async function getPlaylistById() {
  if (!createdPlaylistId) {
    console.log("⚠️  No playlist ID available. Run createPlaylist first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.playlist.getPlaylistById({
    playlistId: createdPlaylistId,
  });

  logResponse("Get Playlist by ID", result);
  return result;
}

async function updatePlaylist() {
  if (!createdPlaylistId) {
    console.log("⚠️  No playlist ID available. Run createPlaylist first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.playlist.updateAPlaylist({
    playlistId: createdPlaylistId,
    requestBody: {
      name: "Updated Sample Playlist",
      description: "This playlist has been updated via SDK",
      metadata: {
        category: "updated-sample",
        updated_by: "sdk",
      },
    },
  });

  logResponse("Update Playlist", result);
  return result;
}

async function addMediaToPlaylist() {
  if (!createdPlaylistId) {
    console.log("⚠️  No playlist ID available. Run createPlaylist first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  // First, get some media to add to the playlist
  const mediaList = await fastpix.manageVideos.listMedia({ limit: 2 });
  const mediaItems = mediaList.listMediaSuccessResponse?.data?.media || [];
  
  if (mediaItems.length === 0) {
    console.log("⚠️  No media found. Please create some media first.");
    return;
  }

  // Add first media item to playlist
  const mediaId = mediaItems[0].id;
  mediaIds.push(mediaId);

  const result = await fastpix.playlist.addMediaToPlaylist({
    playlistId: createdPlaylistId,
    requestBody: {
      mediaId: mediaId,
    },
  });

  logResponse("Add Media to Playlist", result);
  return result;
}

async function changeMediaOrder() {
  if (!createdPlaylistId || mediaIds.length === 0) {
    console.log("⚠️  No playlist or media available. Run createPlaylist and addMediaToPlaylist first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.playlist.changeMediaOrderInPlaylist({
    playlistId: createdPlaylistId,
    requestBody: {
      mediaId: mediaIds[0],
      order: 1,
    },
  });

  logResponse("Change Media Order", result);
  return result;
}

async function deleteMediaFromPlaylist() {
  if (!createdPlaylistId || mediaIds.length === 0) {
    console.log("⚠️  No playlist or media available. Run createPlaylist and addMediaToPlaylist first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.playlist.deleteMediaFromPlaylist({
    playlistId: createdPlaylistId,
    requestBody: {
      mediaId: mediaIds[0],
    },
  });

  logResponse("Delete Media from Playlist", result);
  mediaIds = []; // Reset media IDs
  return result;
}

async function deletePlaylist() {
  if (!createdPlaylistId) {
    console.log("⚠️  No playlist ID available. Run createPlaylist first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.playlist.deleteAPlaylist({
    playlistId: createdPlaylistId,
  });

  logResponse("Delete Playlist", result);
  createdPlaylistId = undefined; // Reset the ID since playlist is deleted
  return result;
}

async function main() {
  console.log("📋 Playlist API Samples");
  console.log("=======================");
  
  await runSample("Create Playlist", createPlaylist);
  await runSample("List Playlists", listPlaylists);
  await runSample("Get Playlist by ID", getPlaylistById);
  await runSample("Update Playlist", updatePlaylist);
  await runSample("Add Media to Playlist", addMediaToPlaylist);
  await runSample("Change Media Order", changeMediaOrder);
  await runSample("Delete Media from Playlist", deleteMediaFromPlaylist);
  
  // Uncomment to delete the playlist (be careful!)
  // await runSample("Delete Playlist", deletePlaylist);
}

main().catch(console.error);
