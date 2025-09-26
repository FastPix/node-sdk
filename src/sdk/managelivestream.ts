import { manageLiveStreamCompleteLiveStream } from "../funcs/manageLiveStreamCompleteLiveStream.js";
import { manageLiveStreamDeleteLiveStream } from "../funcs/manageLiveStreamDeleteLiveStream.js";
import { manageLiveStreamDisableLiveStream } from "../funcs/manageLiveStreamDisableLiveStream.js";
import { manageLiveStreamEnableLiveStream } from "../funcs/manageLiveStreamEnableLiveStream.js";
import { manageLiveStreamGetAllStreams } from "../funcs/manageLiveStreamGetAllStreams.js";
import { manageLiveStreamGetLiveStreamById } from "../funcs/manageLiveStreamGetLiveStreamById.js";
import { manageLiveStreamGetLiveStreamViewerCountById } from "../funcs/manageLiveStreamGetLiveStreamViewerCountById.js";
import { manageLiveStreamUpdateLiveStream } from "../funcs/manageLiveStreamUpdateLiveStream.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ManageLiveStream extends ClientSDK {
  /**
   * Get all live streams
   *
   * @remarks
   * Retrieves a list of all live streams associated with the current workspace. It provides an overview of both current and past live streams, including details like `streamId`, `metadata`, `status`, `createdAt` and more.
   *
   * #### How it works
   *
   * Use the access token and secret key related to the workspace in the request header. When called, the API provides a paginated response containing all the live streams in that specific workspace. This is helpful for retrieving a large volume of streams and managing content in bulk.
   */
  async getAllStreams(
    request?: operations.GetAllStreamsRequest | undefined,
    options?: RequestOptions,
  ): Promise<models.GetStreamsResponse> {
    return unwrapAsync(manageLiveStreamGetAllStreams(
      this,
      request,
      options,
    ));
  }

  /**
   * Get stream views by ID
   *
   * @remarks
   * This endpoint retrieves the current number of viewers watching a specific live stream, identified by its unique `streamId`.
   *
   * The viewer count is an **approximate value**, optimized for performance. It provides a near-real-time estimate of how many clients are actively watching the stream. This approach ensures high efficiency, especially when the stream is being watched at large scale across multiple devices or platforms.
   *
   * #### Example
   *
   * Suppose a content creator is hosting a live concert and wants to display the number of live viewers on their dashboard. This endpoint can be queried to show up-to-date viewer statistics.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>
   */
  async getLiveStreamViewerCountById(
    request: operations.GetLiveStreamViewerCountByIdRequest,
    options?: RequestOptions,
  ): Promise<models.ViewsCountResponse> {
    return unwrapAsync(manageLiveStreamGetLiveStreamViewerCountById(
      this,
      request,
      options,
    ));
  }

  /**
   * Get stream by ID
   *
   * @remarks
   * This endpoint retrieves details about a specific live stream by its unique `streamId`. It includes data such as the stream’s `status` (idle, preparing, active, disabled), `metadata` (title, description), and more.
   * #### Example
   *
   *   Suppose a news agency is broadcasting a live event and wants to track the configurations set for the live stream while also checking the stream's status.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>
   */
  async getLiveStreamById(
    request: operations.GetLiveStreamByIdRequest,
    options?: RequestOptions,
  ): Promise<models.LivestreamgetResponse> {
    return unwrapAsync(manageLiveStreamGetLiveStreamById(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a stream
   *
   * @remarks
   * Permanently removes a specified live stream from the workspace. If the stream is still active, the encoder will be disconnected, and the ingestion will stop. This action cannot be undone, and any future playback attempts will fail.
   *
   *   By providing the `streamId`, the API will terminate any active connections to the stream and remove it from the list of available live streams. You can further look for <a href="https://docs.fastpix.io/docs/live-events#videolive_streamdeleted">video.live_stream.deleted</a> webhook to notify your system about the status.
   *
   *   #### Example
   *
   *   For an online concert platform, a trial stream was mistakenly made public. The event manager deletes the stream before the concert begins to avoid confusion among viewers.
   *
   *   Related guide: <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>
   */
  async deleteLiveStream(
    request: operations.DeleteLiveStreamRequest,
    options?: RequestOptions,
  ): Promise<models.LiveStreamDeleteResponse> {
    return unwrapAsync(manageLiveStreamDeleteLiveStream(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a stream
   *
   * @remarks
   * This endpoint allows you to modify the parameters of an existing live stream, such as its `metadata` (title, description) or the `reconnectWindow`. It’s useful for making changes to a stream that has already been created but not yet ended. Once the live stream is disabled, you cannot update a stream.
   *
   *   The updated stream parameters and the `streamId` needs to be shared in the request, and FastPix will return the updated stream details. Once updated, <a href="https://docs.fastpix.io/docs/live-events#videolive_streamupdated">video.live_stream.updated</a> webhook event notifies your system.
   *
   *  #### Example
   *
   *  A host realizes they need to extend the reconnect window for their live stream in case they lose connection temporarily during the event. Or suppose during a multi-day online conference, the event organizers need to update the stream title to reflect the next day's session while keeping the same stream ID for continuity.
   *
   *   Related guide: <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>
   */
  async updateLiveStream(
    request: operations.UpdateLiveStreamRequest,
    options?: RequestOptions,
  ): Promise<models.PatchResponseDTO> {
    return unwrapAsync(manageLiveStreamUpdateLiveStream(
      this,
      request,
      options,
    ));
  }

  /**
   * Enable a stream
   *
   * @remarks
   * This endpoint allows you to enable a livestream by transitioning its status from `disabled` to `idle`. Once enabled, the stream becomes available and ready to accept an incoming broadcast from a streaming tool.
   *
   * Streams on the trial plan cannot be re-enabled if they are in the `disabled` state.
   *
   * The `livestreamId` must be provided in the path, and the stream must not already be in an enabled state (`idle`, `preparing`, or `active`).
   *
   * #### Example
   *
   * A creator disables a livestream to pause it temporarily. Later, they decide to continue the session. By calling this endpoint with the stream's ID, they can re-enable and restart the same livestream.
   *
   * Related guide <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>
   */
  async enableLiveStream(
    request: operations.EnableLiveStreamRequest,
    options?: RequestOptions,
  ): Promise<models.LiveStreamDeleteResponse> {
    return unwrapAsync(manageLiveStreamEnableLiveStream(
      this,
      request,
      options,
    ));
  }

  /**
   * Disable a stream
   *
   * @remarks
   * This endpoint disables a livestream by setting its status to `disabled`. Use this to stop a livestream when it's no longer needed or should be taken offline intentionally.
   *
   * A disabled stream can later be re-enabled using the enable endpoint — however, if you're on a trial plan, re-enabling is not allowed once the stream is disabled.
   *
   * #### Example
   *
   * A speaker finishes their live session and wants to prevent the stream from being mistakenly started again. By calling this endpoint, the stream is transitioned to a `disabled` state, ensuring it's permanently stopped (unless re-enabled on a paid plan).
   *
   * Related guide <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>
   */
  async disableLiveStream(
    request: operations.DisableLiveStreamRequest,
    options?: RequestOptions,
  ): Promise<models.LiveStreamDeleteResponse> {
    return unwrapAsync(manageLiveStreamDisableLiveStream(
      this,
      request,
      options,
    ));
  }

  /**
   * Complete a stream
   *
   * @remarks
   * This endpoint marks a livestream as completed by stopping the active stream and transitioning its status to `idle`. It is typically used after a livestream session has ended.
   *
   * This operation only works when the stream is in the `active` state.
   *
   * Completing a stream can help finalize the session and trigger post-processing events like VOD generation.
   *
   * #### Example
   *
   * A virtual event ends, and the system or host needs to close the livestream to prevent further streaming. This endpoint ensures the livestream status is changed from `active` to `idle`, indicating it's officially completed.
   *
   * Related guide <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>
   */
  async completeLiveStream(
    request: operations.CompleteLiveStreamRequest,
    options?: RequestOptions,
  ): Promise<models.LiveStreamDeleteResponse> {
    return unwrapAsync(manageLiveStreamCompleteLiveStream(
      this,
      request,
      options,
    ));
  }
}
