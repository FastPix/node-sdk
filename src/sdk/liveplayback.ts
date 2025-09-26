import { livePlaybackCreatePlaybackIdOfStream } from "../funcs/livePlaybackCreatePlaybackIdOfStream.js";
import { livePlaybackDeletePlaybackIdOfStream } from "../funcs/livePlaybackDeletePlaybackIdOfStream.js";
import { livePlaybackGetLiveStreamPlaybackId } from "../funcs/livePlaybackGetLiveStreamPlaybackId.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class LivePlayback extends ClientSDK {
  /**
   * Create a playbackId
   *
   * @remarks
   * Generates a new playback ID for the live stream, allowing viewers to access the stream through this ID. The playback ID can be shared with viewers for direct access to the live broadcast.
   *
   *   By calling this endpoint with the `streamId`, FastPix returns a unique `playbackId`, which can be used to stream the live content.
   *
   *   #### Example
   *
   *   A media platform needs to distribute a unique playback ID to users for an exclusive live concert. The platform can also embed the stream on various partner websites.
   */
  async createPlaybackIdOfStream(
    request: operations.CreatePlaybackIdOfStreamRequest,
    options?: RequestOptions,
  ): Promise<models.PlaybackIdSuccessResponse> {
    return unwrapAsync(livePlaybackCreatePlaybackIdOfStream(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a playbackId
   *
   * @remarks
   * Deletes a previously created playback ID for a live stream. This will prevent any new viewers from accessing the stream through the playback ID, though current viewers will be able to continue watching for a limited time before being disconnected. By providing the `playbackId`, FastPix deletes the ID and ensures new playback requests will fail.
   *
   * #### Example
   * A streaming service wants to prevent new users from joining a live stream that is nearing its end. The host can delete the playback ID to ensure no one can join the stream or replay it once it ends.
   */
  async deletePlaybackIdOfStream(
    request: operations.DeletePlaybackIdOfStreamRequest,
    options?: RequestOptions,
  ): Promise<models.LiveStreamDeleteResponse> {
    return unwrapAsync(livePlaybackDeletePlaybackIdOfStream(
      this,
      request,
      options,
    ));
  }

  /**
   * Get playbackId details
   *
   * @remarks
   * Retrieves details about a previously created playback ID. If you provide the distinct `playbackId` that was given back to you in the previous stream or <a href="https://docs.fastpix.io/reference/create-playbackid-of-stream">create playbackId</a> request, FastPix will provide the relevant playback details such as the access policy.
   *
   * #### Example
   * A developer needs to confirm the access policy of the playback ID to ensure whether the stream is public or private for viewers.
   */
  async getLiveStreamPlaybackId(
    request: operations.GetLiveStreamPlaybackIdRequest,
    options?: RequestOptions,
  ): Promise<models.PlaybackIdSuccessResponse> {
    return unwrapAsync(livePlaybackGetLiveStreamPlaybackId(
      this,
      request,
      options,
    ));
  }
}
