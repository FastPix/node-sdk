import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  PlaybackIdResponse,
  PlaybackIdResponse$inboundSchema,
  PlaybackIdResponse$Outbound,
  PlaybackIdResponse$outboundSchema,
} from "./playbackidresponse.js";
import {
  SrtPlaybackResponse,
  SrtPlaybackResponse$inboundSchema,
  SrtPlaybackResponse$Outbound,
  SrtPlaybackResponse$outboundSchema,
} from "./srtplaybackresponse.js";

/**
 * Displays the result of the request.
 */
export type GetCreateLiveStreamResponseDTO = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId?: string | undefined;
  /**
   * A unique stream key is generated for streaming, allowing the user to start streaming on any third-party platform using this key.
   */
  streamKey?: string | undefined;
  /**
   * A secret used for securing the SRT stream. This ensures that only authorized users can access the stream.
   */
  srtSecret?: string | undefined;
  /**
   * FastPix allows for a to trial the live stream for free. The duration of trial streams is five minutes. After five minutes of activity, the trial stream is turned off, and the recorded asset is removed after a day.
   */
  trial?: boolean | undefined;
  /**
   * The current live stream status can be one of four values:Idle, Preparing, Active or Disabled.The Idle status signifies that there isn't a broadcast in progress.The preparing status indicates that the stream is getting prepared. while, the Active status indicates that a broadcast is currently in progress. The Disabled status means that no more RTMPS streams can be published.
   */
  status?: string | undefined;
  /**
   * Max resolution can be used to control the maximum resolution your media is encoded, stored, and streamed at.
   */
  maxResolution?: string | undefined;
  /**
   * The maximum duration in seconds that a live stream can have before it ends the stream.
   */
  maxDuration?: number | undefined;
  /**
   * It is the moment when the stream was created Time the media was generated, defined as a localDateTime (UTC Time).
   */
  createdAt?: Date | undefined;
  /**
   * In case the software streaming the live, gets disrupted for any reason and gets disconnected from FastPix, the reconnect window specifies the time span FastPix will wait before ending the stream. Before starting the stream, you can set the reconnect window time which is up to 1800 seconds.
   */
  reconnectWindow?: number | undefined;
  /**
   * When set to true, the livestream will be recorded and stored for later viewing purposes. If set to false, the livestream will not be recorded.
   */
  enableRecording?: boolean | undefined;
  /**
   * Determines whether the recorded stream should be publicly accessible or private in Live to VOD (Video on Demand).
   */
  mediaPolicy?: string | undefined;
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key":"value"s pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * Enables DVR (Digital Video Recorder) functionality for the live stream. When set to true, viewers can pause, rewind, and resume playback during the live broadcast. This allows time-shifted viewing of the stream while it is still ongoing.
   */
  enableDvrMode?: boolean | undefined;
  /**
   * A collection of Playback ID objects utilized for crafting HLS playback urls.
   */
  playbackIds?: Array<PlaybackIdResponse> | undefined;
  /**
   * A set of media IDs created after the livestream ends. (live to VOD)
   */
  mediaIds?: Array<string> | undefined;
  /**
   * This object contains the livestream playback response details for SRT Protocol
   */
  srtPlaybackResponse?: SrtPlaybackResponse | undefined;
};

/** @internal */
export const GetCreateLiveStreamResponseDTO$inboundSchema: z.ZodType<
  GetCreateLiveStreamResponseDTO,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string().optional(),
  streamKey: z.string().optional(),
  srtSecret: z.string().optional(),
  trial: z.boolean().optional(),
  status: z.string().optional(),
  maxResolution: z.string().optional(),
  maxDuration: z.number().int().optional(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  reconnectWindow: z.number().int().default(60),
  enableRecording: z.boolean().optional(),
  mediaPolicy: z.string().optional(),
  metadata: z.record(z.string()).optional(),
  enableDvrMode: z.boolean().optional(),
  playbackIds: z.array(PlaybackIdResponse$inboundSchema).optional(),
  mediaIds: z.array(z.string()).optional(),
  srtPlaybackResponse: SrtPlaybackResponse$inboundSchema.optional(),
});

/** @internal */
export type GetCreateLiveStreamResponseDTO$Outbound = {
  streamId?: string | undefined;
  streamKey?: string | undefined;
  srtSecret?: string | undefined;
  trial?: boolean | undefined;
  status?: string | undefined;
  maxResolution?: string | undefined;
  maxDuration?: number | undefined;
  createdAt?: string | undefined;
  reconnectWindow: number;
  enableRecording?: boolean | undefined;
  mediaPolicy?: string | undefined;
  metadata?: { [k: string]: string } | undefined;
  enableDvrMode?: boolean | undefined;
  playbackIds?: Array<PlaybackIdResponse$Outbound> | undefined;
  mediaIds?: Array<string> | undefined;
  srtPlaybackResponse?: SrtPlaybackResponse$Outbound | undefined;
};

/** @internal */
export const GetCreateLiveStreamResponseDTO$outboundSchema: z.ZodType<
  GetCreateLiveStreamResponseDTO$Outbound,
  z.ZodTypeDef,
  GetCreateLiveStreamResponseDTO
> = z.object({
  streamId: z.string().optional(),
  streamKey: z.string().optional(),
  srtSecret: z.string().optional(),
  trial: z.boolean().optional(),
  status: z.string().optional(),
  maxResolution: z.string().optional(),
  maxDuration: z.number().int().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  reconnectWindow: z.number().int().default(60),
  enableRecording: z.boolean().optional(),
  mediaPolicy: z.string().optional(),
  metadata: z.record(z.string()).optional(),
  enableDvrMode: z.boolean().optional(),
  playbackIds: z.array(PlaybackIdResponse$outboundSchema).optional(),
  mediaIds: z.array(z.string()).optional(),
  srtPlaybackResponse: SrtPlaybackResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCreateLiveStreamResponseDTO$ {
  /** @deprecated use `GetCreateLiveStreamResponseDTO$inboundSchema` instead. */
  export const inboundSchema = GetCreateLiveStreamResponseDTO$inboundSchema;
  /** @deprecated use `GetCreateLiveStreamResponseDTO$outboundSchema` instead. */
  export const outboundSchema = GetCreateLiveStreamResponseDTO$outboundSchema;
  /** @deprecated use `GetCreateLiveStreamResponseDTO$Outbound` instead. */
  export type Outbound = GetCreateLiveStreamResponseDTO$Outbound;
}

export function getCreateLiveStreamResponseDTOToJSON(
  getCreateLiveStreamResponseDTO: GetCreateLiveStreamResponseDTO,
): string {
  return JSON.stringify(
    GetCreateLiveStreamResponseDTO$outboundSchema.parse(
      getCreateLiveStreamResponseDTO,
    ),
  );
}

export function getCreateLiveStreamResponseDTOFromJSON(
  jsonString: string,
): SafeParseResult<GetCreateLiveStreamResponseDTO, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCreateLiveStreamResponseDTO$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCreateLiveStreamResponseDTO' from JSON`,
  );
}
