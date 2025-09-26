import { inVideoAIFeaturesUpdateMediaChapters } from "../funcs/inVideoAIFeaturesUpdateMediaChapters.js";
import { inVideoAIFeaturesUpdateMediaModeration } from "../funcs/inVideoAIFeaturesUpdateMediaModeration.js";
import { inVideoAIFeaturesUpdateMediaNamedEntities } from "../funcs/inVideoAIFeaturesUpdateMediaNamedEntities.js";
import { inVideoAIFeaturesUpdateMediaSummary } from "../funcs/inVideoAIFeaturesUpdateMediaSummary.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class InVideoAIFeatures extends ClientSDK {
  /**
   * Generate video summary
   *
   * @remarks
   * This endpoint allows you to generate the summary for an existing media.
   *
   * #### How it works
   * 1. Send a PATCH request to this endpoint, replacing `<mediaId>` with the unique ID of the media for which you wish to generate a summary.
   * 2. Include the `generate` parameter in the request body.
   * 3. Include the `summaryLength` parameter, specify the desired length of the summary in words (e.g., 120 words), this determines how concise or detailed the summary will be. If no specific summary length is provided, the default length will be 100 words.
   * 4. The response will include the updated media data and confirmation of the changes applied.
   *
   * You can use the <a href="https://docs.fastpix.io/docs/ai-events#videomediaaisummaryready">video.mediaAI.summary.ready</a> webhook event to track and notify about the summary generation.
   *
   * **Use case**: This is particularly useful when a user uploads a video and later chooses to generate a summary without needing to re-upload the video.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/generate-video-summary">Video summary</a>
   */
  async updateMediaSummary(
    request: operations.UpdateMediaSummaryRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateMediaSummaryResponse> {
    return unwrapAsync(inVideoAIFeaturesUpdateMediaSummary(
      this,
      request,
      options,
    ));
  }

  /**
   * Generate video chapters
   *
   * @remarks
   * This endpoint enables you to generate chapters for an existing media file.
   *
   * #### How it works
   * 1. Make a `PATCH` request to this endpoint, replacing `<mediaId>` with the ID of the media for which you want to generate chapters.
   * 2. Include the `chapters` parameter in the request body to enable.
   * 3. The response will contain the updated media data, confirming the changes made.
   *
   * You can use the <a href="https://docs.fastpix.io/docs/ai-events#videomediaaichaptersready">video.mediaAI.chapters.ready</a> webhook event to track and notify about the chapters generation.
   *
   * **Use case:** This is particularly useful when a user uploads a video and later decides to enable chapters without re-uploading the entire video.
   *
   * Related guide: <a href="https://docs.fastpix.io/reference/update-media-chapters">Video chapters</a>
   */
  async updateMediaChapters(
    request: operations.UpdateMediaChaptersRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateMediaChaptersResponse> {
    return unwrapAsync(inVideoAIFeaturesUpdateMediaChapters(
      this,
      request,
      options,
    ));
  }

  /**
   * Generate named entities
   *
   * @remarks
   * This endpoint allows you to extract named entities from an existing media.
   * Named Entity Recognition (NER) is a fundamental natural language processing (NLP) technique that identifies and classifies key information (entities) in text into predefined categories. For instance:
   *
   *   - Organizations (e.g., "Microsoft", "United Nations")
   *   - Locations (e.g., "Paris", "Mount Everest")
   *   - Product names (e.g., "iPhone", "Coca-Cola")
   *
   * #### How it works
   * 1. Make a PATCH request to this endpoint, replacing `<mediaId>` with the ID of the media you want to extract named-entities.
   * 2. Include the `namedEntities` parameter in the request body to enable.
   * 3. Receive a response containing the updated media data, confirming the changes made.
   *
   * You can use the <a href="https://docs.fastpix.io/docs/ai-events#videomediaainamedentitiesready">video.mediaAI.named-entities.ready</a> webhook event to track and notify about the named entities extraction.
   *
   * **Use case:** If a user uploads a video and later decides to enable named entity extraction without re-uploading the entire video.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/generate-named-entities">Named entities</a>
   */
  async updateMediaNamedEntities(
    request: operations.UpdateMediaNamedEntitiesRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateMediaNamedEntitiesResponse> {
    return unwrapAsync(inVideoAIFeaturesUpdateMediaNamedEntities(
      this,
      request,
      options,
    ));
  }

  /**
   * Enable video moderation
   *
   * @remarks
   * This endpoint enables moderation features, such as NSFW and profanity filtering, to detect inappropriate content in existing media.
   *
   * #### How it works
   * 1. Make a PATCH request to this endpoint, replacing `<mediaId>` with the ID of the media you want to update.
   * 2. Include the `moderation` object and provide the requried `type` parameter in the request body to specify the media type (e.g., video/audio/av).
   * 4. The response will contain the updated media data, confirming the changes made.
   *
   * You can use the <a href="https://docs.fastpix.io/docs/ai-events#videomediaaimoderationready">video.mediaAI.moderation.ready</a> webhook event to track and notify about the detected moderation results.
   *
   * **Use case:** This is particularly useful when a user uploads a video and later decides to enable moderation detection without the need to re-upload it.
   *
   * Related guide: <a href="https://docs.fastpix.io/docs/using-nsfw-and-profanity-filter-for-video-moderation">Moderate NSFW & Profanity</a>
   */
  async updateMediaModeration(
    request: operations.UpdateMediaModerationRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateMediaModerationResponse> {
    return unwrapAsync(inVideoAIFeaturesUpdateMediaModeration(
      this,
      request,
      options,
    ));
  }
}
