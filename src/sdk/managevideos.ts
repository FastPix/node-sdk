import { manageVideosAddMediaTrack } from "../funcs/manageVideosAddMediaTrack.js";
import { manageVideosCancelUpload } from "../funcs/manageVideosCancelUpload.js";
import { manageVideosDeleteMedia } from "../funcs/manageVideosDeleteMedia.js";
import { manageVideosDeleteMediaTrack } from "../funcs/manageVideosDeleteMediaTrack.js";
import { manageVideosGenerateSubtitleTrack } from "../funcs/manageVideosGenerateSubtitleTrack.js";
import { manageVideosGetMedia } from "../funcs/manageVideosGetMedia.js";
import { manageVideosGetMediaClips } from "../funcs/manageVideosGetMediaClips.js";
import { manageVideosListLiveClips } from "../funcs/manageVideosListLiveClips.js";
import { manageVideosListMedia } from "../funcs/manageVideosListMedia.js";
import { manageVideosListUploads } from "../funcs/manageVideosListUploads.js";
import { manageVideosRetrieveMediaInputInfo } from "../funcs/manageVideosRetrieveMediaInputInfo.js";
import { manageVideosUpdatedMedia } from "../funcs/manageVideosUpdatedMedia.js";
import { manageVideosUpdatedMp4Support } from "../funcs/manageVideosUpdatedMp4Support.js";
import { manageVideosUpdatedSourceAccess } from "../funcs/manageVideosUpdatedSourceAccess.js";
import { manageVideosUpdateMediaTrack } from "../funcs/manageVideosUpdateMediaTrack.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ManageVideos extends ClientSDK {
  /**
   * Get list of all media
   *
   * @remarks
   * This endpoint returns a list of all media files uploaded to FastPix within a specific workspace. Each media entry contains data such as the media `id`, `createdAt`, `status`, `type` and more. It allows you to retrieve an overview of your media assets, making it easier to manage and review them.
   *
   * #### How it works
   *
   * Use the access token and secret key related to the workspace in the request header. When called, the API provides a paginated response containing all the media items in that specific workspace. This is helpful for retrieving a large volume of media and managing content in bulk.
   *
   * #### Example
   * You're managing a video platform and need to check all the uploaded media in your library to ensure no outdated or low-quality content is being served. Using this endpoint, you can retrieve a complete list of media, allowing you to filter, sort, or update items as needed.
   */
  async listMedia(
    request?: operations.ListMediaRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.ListMediaResponse> {
    return unwrapAsync(manageVideosListMedia(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all clips of a live stream
   *
   * @remarks
   * Retrieves a list of all media clips generated from a specific livestream. Each media entry includes metadata such as the clip media IDs, and other relevant details. A media clip is a segmented portion of an original media file (source live stream). Clips are often created for various purposes such as previews, highlights, or customized edits.
   * #### How it works
   * To use this endpoint, provide the `livestreamId` as a parameter. The API then returns a paginated list of clipped media items created from that livestream. Pagination ensures optimal performance and usability when dealing with a large number of media files, making it easier to organize and manage content in bulk.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/instant-live-clipping">Instant live clipping</a>
   */
  async listLiveClips(
    request: operations.ListLiveClipsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListLiveClipsResponse> {
    return unwrapAsync(manageVideosListLiveClips(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a media by ID
   *
   * @remarks
   * By calling this endpoint, you can retrieve detailed information about a specific media item, including its current `status` and a `playbackId`. This is particularly useful for retrieving specific media details when managing large content libraries.
   *
   * #### How it works
   *
   * 1. Make a GET request to this endpoint, using the `<mediaId>` received after uploading the media file.
   *
   * 2. Receive a response that includes details about the media:
   *
   * * `status` Indicates whether the media is still `preparing` or has transitioned to `ready`.
   *
   * * The `playbackId` is a unique identifier that allows you to stream the media once it is `ready`. You can construct the stream URL in this format: `https://stream.fastpix.io/<playbackId>.m3u8`
   *
   * #### Example
   *
   * Suppose your platform provides users with an interface where they can manage their uploaded content. A user requests detailed information about a specific video to see if it has been fully processed and is available for playback. Using the media ID, you can fetch the information from FastPix and display it in the user's dashboard.
   */
  async getMedia(
    request: operations.GetMediaRequest,
    options?: RequestOptions,
  ): Promise<operations.GetMediaResponse> {
    return unwrapAsync(manageVideosGetMedia(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a media by ID
   *
   * @remarks
   * This endpoint allows you to update specific parameters of an existing media file. You can modify the key-value pairs of the metadata that were provided in the payload during the creation of media from a URL or when uploading the media directly from device.
   *
   * #### How it works
   *
   * 1. Make a PATCH request to this endpoint, replacing `<mediaId>` with the unique ID (`uploadId` or `id`) of the media received after uploading to FastPix.
   *
   * 2. Include the updated parameters in the request body.
   *
   * 3. Receive a response containing the updated media data, confirming the changes made.
   *
   * Once you have made the update request, you can also look for the webhook event <a href="https://docs.fastpix.io/docs/media-events#videomediaupdated">video.media.updated</a> to notify your system about update status.
   *
   * #### Example
   * Imagine a scenario where a user uploads a video and later realizes they need to change the title, add a new description or tags. You can use this endpoint to update the media metadata without having to re-upload the entire video.
   */
  async updatedMedia(
    request: operations.UpdatedMediaRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdatedMediaResponse> {
    return unwrapAsync(manageVideosUpdatedMedia(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a media by ID
   *
   * @remarks
   * This endpoint allows you to permanently delete a a specific video or audio media file along with all associated data. If you wish to remove a media from FastPix storage, use this endpoint with the `mediaId` (either `uploadId` or `id`) received during the media's creation or upload.
   *
   * #### How it works
   *
   * 1. Make a DELETE request to this endpoint, replacing `<mediaId>` with the `uploadId` or the `id` of the media you want to delete.
   *
   * 2. Since this action is irreversible, ensure that you no longer need the media before proceeding. Once deleted, the media cannot be retrieved or played back.
   *
   * 3. Webhook event to look for: <a href="https://docs.fastpix.io/docs/media-events#videomediadeleted">video.media.deleted</a>
   *
   * #### Example
   * A user on a video-sharing platform decides to remove an old video from their profile, or suppose you're running a content moderation system, and one of the videos uploaded by a user violates your platform's policies. Using this endpoint, the media is permanently deleted from your library, ensuring it's no longer accessible or viewable by other users.
   */
  async deleteMedia(
    request: operations.DeleteMediaRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteMediaResponse> {
    return unwrapAsync(manageVideosDeleteMedia(
      this,
      request,
      options,
    ));
  }

  /**
   * Add audio / subtitle track
   *
   * @remarks
   * This endpoint allows you to add an audio or subtitle track to an existing media file using its `mediaId`. You need to provide the track `url` along with its `type` (audio or subtitle), `languageName` and `languageCode` in the request payload.
   *
   * #### How it works
   *
   * 1. Send a POST request to this endpoint, replacing `{mediaId}` with the media ID (`uploadId` or `id`).
   *
   * 2. Provide the necessary details in the request body.
   *
   * 3. Receive a response containing a unique track ID and the details of the newly added track.
   *
   * #### Webhook events
   *
   * 1. After successfully adding a track, your system will receive the webhook event <a href="https://docs.fastpix.io/docs/transform-media-events#videomediatrackcreated">video.media.track.created</a>.
   *
   * 2. Once the track is processed and ready, you will receive the webhook event <a href="https://docs.fastpix.io/docs/transform-media-events#videomediatrackready">video.media.track.ready</a>.
   *
   * 3. Finally, an update event <a href="https://docs.fastpix.io/docs/media-events#videomediaupdated">video.media.updated</a> will notify your system about the media's updated status.
   *
   * #### Example
   * Suppose you have a video uploaded to the FastPix platform, and you want to add an Italian audio track to it. By calling this API, you can attach an external audio file (https://static.fastpix.io/music-1.mp3) to the media file. Similarly, if you need to add subtitles in different languages, you can specify type: `subtitle` with the corresponding subtitle `url`, `languageCode` and `languageName`.
   *
   * Related guides: <a href="https://docs.fastpix.io/docs/manage-subtitle-tracks">Add own subtitle tracks</a>, <a href="https://docs.fastpix.io/docs/manage-audio-tracks">Add own audio tracks</a>
   */
  async addMediaTrack(
    request: operations.AddMediaTrackRequest,
    options?: RequestOptions,
  ): Promise<operations.AddMediaTrackResponse> {
    return unwrapAsync(manageVideosAddMediaTrack(
      this,
      request,
      options,
    ));
  }

  /**
   * Cancel ongoing upload
   *
   * @remarks
   * This endpoint allows you to cancel ongoing upload by its `uploadId`. Once cancelled, the upload will be marked as cancelled. Use this if a user aborts an upload or if you want to programmatically stop an in-progress upload.
   *
   * #### How it works
   *
   * 1. Make a PUT request to this endpoint, replacing `{uploadId}` with the unique upload ID received after starting the upload.
   * 2. The response will confirm the cancellation and provide the status of the upload.
   *
   * #### Webhook Events
   *
   * Once the upload is cancelled, you will receive the webhook event <a href="https://docs.fastpix.io/docs/media-events#videomediauploadcancelled-event">video.media.upload.cancelled</a>.
   *
   * #### Example
   *
   * Suppose a user starts uploading a large video file but decides to cancel before completion. By calling this API, you can immediately stop the upload and free up resources.
   */
  async cancelUpload(
    request: operations.CancelUploadRequest,
    options?: RequestOptions,
  ): Promise<operations.CancelUploadResponse> {
    return unwrapAsync(manageVideosCancelUpload(
      this,
      request,
      options,
    ));
  }

  /**
   * Update audio / subtitle track
   *
   * @remarks
   * This endpoint allows you to update an existing audio or subtitle track associated with a media file. When updating a track, you must provide the new track `url`, `languageName`, and `languageCode`, ensuring all three parameters are included in the request.
   *
   * #### How it works
   *
   * 1. Send a PATCH request to this endpoint, replacing `{mediaId}` with the media ID, and `{trackId}` with the ID of the track you want to update.
   *
   * 2. Provide the necessary details in the request body.
   *
   * 3. Receive a response confirming the track update.
   *
   * #### Webhook Events
   *
   * After updating a track, your system will receive webhook notifications:
   *
   * 1. After successfully updating a track, your system will receive the webhook event <a href="https://docs.fastpix.io/docs/transform-media-events#videomediatrackupdated">video.media.track.updated</a>.
   *
   * 2. Once the new track is processed and ready, you will receive the webhook event <a href="https://docs.fastpix.io/docs/transform-media-events#videomediatrackready">video.media.track.ready</a>.
   *
   * 3. Once the media file is updated with the new track details, a <a href="https://docs.fastpix.io/docs/media-events#videomediaupdated">video.media.updated</a> event will be triggered.
   *
   * #### Example
   * Suppose you previously added a French subtitle track to a video but now need to update it with a different file. By calling this API, you can replace the existing subtitle file (.vtt) with a new one while keeping the same track ID. This is useful when:
   *
   *   - The original track file has errors and needs correction.
   *   - You want to improve subtitle translations or replace an audio track with a better-quality version.
   *
   * Related guides: <a href="https://docs.fastpix.io/docs/manage-subtitle-tracks">Add own subtitle tracks</a>, <a href="https://docs.fastpix.io/docs/manage-audio-tracks">Add own audio tracks</a>
   */
  async updateMediaTrack(
    request: operations.UpdateMediaTrackRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateMediaTrackResponse> {
    return unwrapAsync(manageVideosUpdateMediaTrack(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete audio / subtitle track
   *
   * @remarks
   * This endpoint allows you to delete an existing audio or subtitle track from a media file. Once deleted, the track will no longer be available for playback.
   *
   * #### How it works
   *
   * 1. Send a DELETE request to this endpoint, replacing `{mediaId}` with the media ID, and `{trackId}` with the ID of the track you want to remove.
   *
   * 2. The track will be deleted from the media file, and you will receive a confirmation response.
   *
   * #### Webhook events
   *
   * 1. After successfully deleting a track, your system will receive the webhook event **video.media.track.deleted**.
   *
   * 2. Once the media file is updated to reflect the track removal, a <a href="https://docs.fastpix.io/docs/media-events#videomediaupdated">video.media.updated</a> event will be triggered.
   *
   * #### Example
   * Suppose you uploaded an audio track in Italian for a video but later realize it's incorrect or no longer needed. By calling this API, you can remove the specific track while keeping the rest of the media file unchanged. This is useful when:
   *
   *   - A track was mistakenly added and needs to be removed.
   *   - The content owner requests the removal of a specific subtitle or audio track.
   *   - A new version of the track will be uploaded to replace the existing one.
   *
   * Related guides: <a href="https://docs.fastpix.io/docs/manage-subtitle-tracks">Add own subtitle tracks</a>, <a href="https://docs.fastpix.io/docs/manage-audio-tracks">Add own audio tracks</a>
   */
  async deleteMediaTrack(
    request: operations.DeleteMediaTrackRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteMediaTrackResponse> {
    return unwrapAsync(manageVideosDeleteMediaTrack(
      this,
      request,
      options,
    ));
  }

  /**
   * Generate track subtitle
   *
   * @remarks
   * This endpoint allows you to generate subtitles for an existing audio track in a media file. By calling this API, you can generate subtitles automatically using speech recognition
   *
   * #### How it works
   *
   * 1. Send a `POST` request to this endpoint, replacing `{mediaId}` with the media ID and `{trackId}` with the track ID.
   *
   * 2. Provide the necessary details in the request body, including the languageName and languageCode.
   *
   * 3. Receive a response containing a unique subtitle track ID and its details.
   *
   * #### Webhook Events
   *
   * 1. Once the subtitle track is generated and ready, you will receive the webhook event <a href="https://docs.fastpix.io/docs/transform-media-events#videomediasubtitlegeneratedready">video.media.subtitle.generated.ready</a>.
   *
   * 2. Finally, an update event <a href="https://docs.fastpix.io/docs/media-events#videomediaupdated">video.media.updated</a> will notify your system about the media's updated status.
   *
   * </br> Related guide: <a href="https://docs.fastpix.io/docs/add-auto-generated-subtitles-to-videos">Add auto-generated subtitles</a>
   */
  async generateSubtitleTrack(
    request: operations.GenerateSubtitleTrackRequest,
    options?: RequestOptions,
  ): Promise<operations.GenerateSubtitleTrackResponse> {
    return unwrapAsync(manageVideosGenerateSubtitleTrack(
      this,
      request,
      options,
    ));
  }

  /**
   * Update the source access of a media by ID
   *
   * @remarks
   * This endpoint allows you to update the `sourceAccess` setting of an existing media file. The `sourceAccess` parameter determines whether the original media file is accessible or restricted. Setting this to `true` enables access to the media source, while setting it to `false` restricts access.
   *
   * #### How it works
   *
   * 1. Make a `PATCH` request to this endpoint, replacing `{mediaId}` with the ID of the media you want to update.
   *
   * 2. Include the updated `sourceAccess` parameter in the request body.
   *
   * 3. Receive a response confirming the update to the media's source access status.
   * 4. Webhook events: <a href="https://docs.fastpix.io/docs/transform-media-events#videomediasourceready">video.media.source.ready</a>, <a href="https://docs.fastpix.io/docs/transform-media-events#videomediasourcedeleted">video.media.source.deleted</a>
   */
  async updatedSourceAccess(
    request: operations.UpdatedSourceAccessRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdatedSourceAccessResponse> {
    return unwrapAsync(manageVideosUpdatedSourceAccess(
      this,
      request,
      options,
    ));
  }

  /**
   * Update the mp4Support of a media by ID
   *
   * @remarks
   * This endpoint allows you to update the `mp4Support` setting of an existing media file using its media ID. You can specify the MP4 support level, such as `none`, `capped_4k`, `audioOnly`, or a combination of `audioOnly`, `capped_4k`, in the request payload.
   *
   * #### How it works
   *
   * 1. Send a PATCH request to this endpoint, replacing `{mediaId}` with the media ID.
   *
   * 2. Provide the desired `mp4Support` value in the request body.
   *
   * 3. Receive a response confirming the update, including the media's updated MP4 support status.
   *
   * #### MP4 Support Options
   *
   * - `none` – MP4 support is disabled for this media.
   *
   * - `capped_4k` – The media will have mp4 renditions up to 4K resolution.
   *
   * - `audioOnly` – The media will generate an m4a file containing only the audio track.
   *
   * - `audioOnly,capped_4k` – The media will have both an audio-only m4a file and mp4 renditions up to 4K resolution.
   *
   * #### Webhook events
   *
   * - <a href="https://docs.fastpix.io/docs/transform-media-events#videomediamp4supportready">video.media.mp4Support.ready</a> – Triggered when the MP4 support setting is successfully updated.
   *
   * #### Example
   * Suppose you have a video uploaded to the FastPix platform, and you want to allow users to download the video in MP4 format. By setting "mp4Support": "capped_4k", the system will generate an MP4 rendition of the video up to 4K resolution, making it available for download via the stream URL(`https://stream.fastpix.io/{playbackId}/{capped-4k.mp4 | audio.m4a}`).
   * If you want users to stream only the audio from the media file, you can set "mp4Support": "audioOnly". This will provide an audio-only stream URL that allows users to listen to the media without video.
   * By setting "mp4Support": "audioOnly,capped_4k", both options will be enabled. Users will be able to download the MP4 video and also stream just the audio version of the media.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/mp4-support-for-offline-viewing">Use MP4 support for offline viewing</a>
   */
  async updatedMp4Support(
    request: operations.UpdatedMp4SupportRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdatedMp4SupportResponse> {
    return unwrapAsync(manageVideosUpdatedMp4Support(
      this,
      request,
      options,
    ));
  }

  /**
   * Get info of media inputs
   *
   * @remarks
   * Allows you to retrieve detailed information about the media inputs associated with a specific media item. You can use this endpoint to verify the media file's input URL, track creation status, and container format. The `mediaId` (either `uploadId` or `id`) must be provided to fetch the information.
   *
   * #### How it works
   *
   * Upon making a `GET` request with the mediaId, FastPix returns a response with:
   *
   * * The public storage input `url` of the uploaded media file.
   *
   * * Information about the `tracks` associated with the media, including both video and audio tracks, indicating whether they have been successfully created.
   *
   * * The format of the uploaded media file container (e.g., MP4, MKV).
   *
   * This endpoint is particularly useful for ensuring that all necessary tracks (video and audio) have been correctly associated with the media during the upload or media creation process.
   */
  async retrieveMediaInputInfo(
    request: operations.RetrieveMediaInputInfoRequest,
    options?: RequestOptions,
  ): Promise<operations.RetrieveMediaInputInfoResponse> {
    return unwrapAsync(manageVideosRetrieveMediaInputInfo(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all unused upload URLs
   *
   * @remarks
   * This endpoint retrieves a paginated list of all unused upload signed URLs within your organization. It provides comprehensive metadata including upload IDs, creation dates, status, and URLs, helping you manage your media resources efficiently.
   *
   * An unused upload URL is a signed URL that gets generated when an user initiates upload but never completed the upload process. This can happen due to reasons like network issues, manual cancellation of upload, browser/app crashes or session timeouts.These URLs remain in the system as "unused" since they were created but never resulted in a successful media file upload.
   *
   * #### How it works
   *
   *  - The endpoint returns metadata for all unused upload URLs in your organization's library.
   *  - Results are paginated to manage large datasets effectively.
   *  - Signed URLs expire after 24 hours from creation.
   *  - Each entry includes full metadata about the unused upload.
   *
   * #### Example
   *
   * A video management team for a media organization regularly uploads content to their system but often forgets to delete or utilize unused uploads. These unused uploads, which have signed URLs that expire after 24 hours, need to be managed efficiently. By using this API, they can retrieve metadata for all unused uploads, identify expired signed URLs, and decide whether to regenerate URLs, reuse the uploads, or delete them.
   */
  async listUploads(
    request?: operations.ListUploadsRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.ListUploadsResponse> {
    return unwrapAsync(manageVideosListUploads(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all clips of a media
   *
   * @remarks
   * This endpoint retrieves a list of all media clips associated with a given source media ID. It helps in organizing and managing media's efficiently by providing metadata, including clip media IDs and other relevant details.
   *
   * A media clip is a segmented portion of an original media file (source media). Clips are often created for various purposes such as previews, highlights, or customized edits. This API allows you to fetch all such clips linked to a specific source media, making it easier to track and manage clips.
   *
   * #### How it works
   *
   * - The endpoint returns metadata for all media clips associated with the given `sourceMediaId`.
   * - Results are paginated to efficiently handle large datasets.
   * - Each entry includes detailed metadata such as media `id`, `duration`, and `status`.
   * - Helps in organizing clips effectively by providing structured information.
   *
   * #### Example
   *
   * Imagine you're managing a video editing platform where users upload full-length videos and create short clips for social media sharing. To keep track of all clips linked to a particular video, you call this API with the sourceMediaId. The response provides a list of all associated clips, allowing you to manage, edit, or repurpose them as needed.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/create-clips-from-existing-media">Create clips from existing media</a>
   */
  async getMediaClips(
    request: operations.GetMediaClipsRequest,
    options?: RequestOptions,
  ): Promise<models.MediaClipResponse> {
    return unwrapAsync(manageVideosGetMediaClips(
      this,
      request,
      options,
    ));
  }
}
