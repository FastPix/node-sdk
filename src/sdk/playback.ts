import { playbackCreateMediaPlaybackId } from "../funcs/playbackCreateMediaPlaybackId.js";
import { playbackDeleteMediaPlaybackId } from "../funcs/playbackDeleteMediaPlaybackId.js";
import { playbackGetPlaybackId } from "../funcs/playbackGetPlaybackId.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Playback extends ClientSDK {
  /**
   * Create a playback ID
   *
   * @remarks
   * You can create a new playback ID for a specific media asset. If you have already retrieved an existing `playbackId` using the <a href="https://docs.fastpix.io/reference/get-media">Get Media by ID</a> endpoint for a media asset, you can use this endpoint to generate a new playback ID with a specified access policy.
   *
   * If you want to create a private playback ID for a media asset that already has a public playback ID, this endpoint also allows you to do so by specifying the desired access policy.
   *
   * #### How it works
   *
   * 1. Make a `POST` request to this endpoint, replacing `<mediaId>` with the `uploadId` or `id` of the media asset.
   *
   * 2. Include the `accessPolicy` in the request body with `private` or `public` as the value.
   *
   * 3. Receive a response containing the newly created playback ID with the requested access level.
   *
   * #### Example
   * A video streaming service generates playback IDs for each media file when users request to view specific content. The playback ID is then used by the video player to stream the video.
   */
  async createMediaPlaybackId(
    request: operations.CreateMediaPlaybackIdRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateMediaPlaybackIdResponse> {
    return unwrapAsync(playbackCreateMediaPlaybackId(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a playback ID
   *
   * @remarks
   * This endpoint allows you to remove a specific playback ID associated with a media asset. Deleting a `playbackId` will revoke access to the media content linked to that ID.
   *
   * #### How it works
   *
   * 1. Make a `DELETE` request to this endpoint, replacing `<mediaId>` with the unique ID of the media asset from which you want to delete the playback ID.
   *
   * 2. Specify the `playbackId` you wish to delete in the request body.
   *
   * #### Example
   *
   * Your platform offers limited-time access to premium content. When the subscription expires, you can revoke access to the content by deleting the associated playback ID, preventing users from streaming the video further.
   */
  async deleteMediaPlaybackId(
    request: operations.DeleteMediaPlaybackIdRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteMediaPlaybackIdResponse> {
    return unwrapAsync(playbackDeleteMediaPlaybackId(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a playback ID
   *
   * @remarks
   * This endpoint retrieves details about a specific playback ID associated with a media asset. This endpoint is commonly used to check the access policy (e.g., public or private) with the specific playback ID.
   *
   * **How it works:**
   * 1. Make a GET request to the endpoint, replacing `{mediaId}` with the `id` of the media, and `{playbackId}` with the specific playback ID.
   * 2. Useful for auditing or validation before granting playback access in your application.
   *
   * **Example:**
   * A media platform might use this endpoint to verify if a playback ID is public or private before embedding the video in a frontend player or allowing access to a restricted group.
   */
  async getPlaybackId(
    request: operations.GetPlaybackIdRequest,
    options?: RequestOptions,
  ): Promise<operations.GetPlaybackIdResponse> {
    return unwrapAsync(playbackGetPlaybackId(
      this,
      request,
      options,
    ));
  }
}
