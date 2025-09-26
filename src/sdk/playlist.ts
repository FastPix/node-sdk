import { playlistAddMediaToPlaylist } from "../funcs/playlistAddMediaToPlaylist.js";
import { playlistChangeMediaOrderInPlaylist } from "../funcs/playlistChangeMediaOrderInPlaylist.js";
import { playlistCreateAPlaylist } from "../funcs/playlistCreateAPlaylist.js";
import { playlistDeleteAPlaylist } from "../funcs/playlistDeleteAPlaylist.js";
import { playlistDeleteMediaFromPlaylist } from "../funcs/playlistDeleteMediaFromPlaylist.js";
import { playlistGetAllPlaylists } from "../funcs/playlistGetAllPlaylists.js";
import { playlistGetPlaylistById } from "../funcs/playlistGetPlaylistById.js";
import { playlistUpdateAPlaylist } from "../funcs/playlistUpdateAPlaylist.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Playlist extends ClientSDK {
  /**
   * Create a new playlist
   *
   * @remarks
   * This endpoint creates a new playlist within a specified workspace. A playlist acts as a container for organizing media items either manually or based on filters and metadata. <br> <br>
   * ### Playlists can be created in two modes
   * - **Manual:** An empty playlist is created without any initial media items. It's intended for manual curation, where items can be added later in a user-defined sequence.
   * - **Smart:** The playlist is auto-populated at creation time based on filters (video creation date range) criteria provided in the request.
   *
   * #### How it works
   *
   *  - When a user sends a POST request to this endpoint, FastPix creates a playlist and returns a playlist ID, using which items can be added later in a user-defined sequence.
   *  - For a smart playlist, the playlist will be auto-populated based on metadata in the request body.
   *
   * #### Example
   * An e-learning platform creates a new playlist titled "Beginner Python Series" via the API. The response includes a unique playlist ID. The platform then uses this ID to add a series of video tutorials to the playlist in a defined order. The playlist is presented to learners on the frontend as a structured learning path.
   */
  async createAPlaylist(
    request: models.CreatePlaylistRequest,
    options?: RequestOptions,
  ): Promise<models.PlaylistCreatedResponse> {
    return unwrapAsync(playlistCreateAPlaylist(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all playlists
   *
   * @remarks
   * This endpoint retrieves all playlists present within a specified workspace. It allows users to view the collection of playlists that have been created, whether manual or smart, along with their associated metadata.
   * #### How it works
   *
   *  - When a user sends a GET request to this endpoint, FastPix returns a list of all playlists in the workspace, including details such as playlist IDs, titles, creation mode (manual or smart), and other relevant metadata.
   *
   * #### Example
   *
   *   An e-learning platform requests all playlists within a workspace to display an overview of available learning paths. The response includes multiple playlists like "Beginner Python Series" and "Advanced Java Tutorials," enabling the platform to show users a catalog of curated content collections.
   */
  async getAllPlaylists(
    request?: operations.GetAllPlaylistsRequest | undefined,
    options?: RequestOptions,
  ): Promise<models.GetAllPlaylistsResponse> {
    return unwrapAsync(playlistGetAllPlaylists(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a playlist by ID
   *
   * @remarks
   * This endpoint retrieves detailed information about a specific playlist using its unique `playlistId`. It provides comprehensive metadata about the playlist, including its title, creation mode (manual or smart), media items along with the metadata of each media in the playlist.
   *
   * #### Example
   * An e-learning platform requests details for the playlist "Beginner Python Series" by providing its unique `playlistId`. The response includes the playlist's title, creation mode, and the ordered list of video tutorials contained within, enabling the platform to present the full learning path to users.
   */
  async getPlaylistById(
    request: operations.GetPlaylistByIdRequest,
    options?: RequestOptions,
  ): Promise<models.PlaylistByIdResponse> {
    return unwrapAsync(playlistGetPlaylistById(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a playlist by ID
   *
   * @remarks
   * This endpoint allows you to update the name and description of an existing playlist. It enables modifications to the playlist's metadata without altering the media items or playlist structure.
   * #### How it works
   *
   *  - When a user sends a PUT request to this endpoint with the `playlistId` and updated name and description in the request body, FastPix updates the playlist metadata accordingly and returns the updated playlist details.
   *
   * #### Example
   * An e-learning platform updates the playlist titled "Beginner Python Series" to rename it as "Python Basics" and add a more detailed description. The updated metadata is reflected when retrieving the playlist, helping users better understand the playlist content.
   */
  async updateAPlaylist(
    request: operations.UpdateAPlaylistRequest,
    options?: RequestOptions,
  ): Promise<models.PlaylistCreatedResponse> {
    return unwrapAsync(playlistUpdateAPlaylist(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a playlist by ID
   *
   * @remarks
   * This endpoint allows you to delete an existing playlist from the workspace. Once deleted, the playlist and its metadata are permanently removed and cannot be recovered.
   * #### How it works
   *  - When a user sends a DELETE request to this endpoint with the `playlistId`, FastPix removes the specified playlist from the workspace and returns a confirmation of successful deletion.
   *
   * #### Example
   * An e-learning platform deletes an outdated playlist titled "Old Python Tutorials" by providing its unique playlist ID. The platform receives confirmation that the playlist has been removed, ensuring learners no longer see the obsolete content.
   */
  async deleteAPlaylist(
    request: operations.DeleteAPlaylistRequest,
    options?: RequestOptions,
  ): Promise<models.SuccessResponse> {
    return unwrapAsync(playlistDeleteAPlaylist(
      this,
      request,
      options,
    ));
  }

  /**
   * Add media to a playlist by ID
   *
   * @remarks
   * This endpoint allows you to add one or more media items to an existing playlist. By passing the media ID(s) in the request, the specified media items are appended to the playlist in the order provided.
   * #### How it works
   *
   *  - When a user sends a PATCH request to this endpoint with the `playlistId` as path parameter and a list of media ID(s) in the request body, FastPix adds the specified media items to the playlist and returns the updated playlist details.
   *
   * #### Example
   * An e-learning platform adds new video tutorials to the "Beginner Python Series" playlist by sending their media IDs in the request. The playlist is updated with the new content, ensuring learners have access to the latest tutorials in sequence.
   */
  async addMediaToPlaylist(
    request: operations.AddMediaToPlaylistRequest,
    options?: RequestOptions,
  ): Promise<models.PlaylistByIdResponse> {
    return unwrapAsync(playlistAddMediaToPlaylist(
      this,
      request,
      options,
    ));
  }

  /**
   * Change media order in a playlist by ID
   *
   * @remarks
   * This endpoint allows you to change the order of media items within a playlist. By passing the complete list of media IDs in the desired sequence, the playlist's play order is updated accordingly.
   * #### How it works
   *
   *  - When a user sends a PUT request to this endpoint with the `playlistId` as path parameter and the reordered list of all media IDs in the request body, FastPix updates the playlist to reflect the new media sequence and returns the updated playlist details.
   *
   * #### Example
   * An e-learning platform rearranges the "Beginner Python Series" playlist by submitting a reordered list of media IDs. The playlist now follows the new sequence, providing learners with a better structured learning path.
   */
  async changeMediaOrderInPlaylist(
    request: operations.ChangeMediaOrderInPlaylistRequest,
    options?: RequestOptions,
  ): Promise<models.PlaylistByIdResponse> {
    return unwrapAsync(playlistChangeMediaOrderInPlaylist(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete media in a playlist by ID
   *
   * @remarks
   * This endpoint allows you to delete one or more media items from an existing playlist. By passing the media ID(s) in the request, the specified media items are removed from the playlist.
   * #### How it works
   *
   *  - When a user sends a DELETE request to this endpoint with the playlist ID as the path parameter and the media ID(s) to be removed in the request body, FastPix deletes the specified media items from the playlist and returns the updated playlist details.
   *
   * #### Example
   * An e-learning platform removes outdated video tutorials from the "Beginner Python Series" playlist by specifying their media IDs in the request. The playlist is updated to exclude these items, ensuring learners only access relevant content.
   */
  async deleteMediaFromPlaylist(
    request: operations.DeleteMediaFromPlaylistRequest,
    options?: RequestOptions,
  ): Promise<models.PlaylistByIdResponse> {
    return unwrapAsync(playlistDeleteMediaFromPlaylist(
      this,
      request,
      options,
    ));
  }
}
