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
export type PatchResponseData = {
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
  playbackIds?: Array<PlaybackIdResponse> | undefined;
  /**
   * This object contains the livestream playback response details for SRT Protocol
   */
  srtPlaybackResponse?: SrtPlaybackResponse | undefined;
};

/** @internal */
export const PatchResponseData$inboundSchema: z.ZodType<
  PatchResponseData,
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
  reconnectWindow: z.number().int().optional(),
  enableRecording: z.boolean().optional(),
  mediaPolicy: z.string().optional(),
  metadata: z.record(z.string()).optional(),
  playbackIds: z.array(PlaybackIdResponse$inboundSchema).optional(),
  srtPlaybackResponse: SrtPlaybackResponse$inboundSchema.optional(),
});

/** @internal */
export type PatchResponseData$Outbound = {
  streamId?: string | undefined;
  streamKey?: string | undefined;
  srtSecret?: string | undefined;
  trial?: boolean | undefined;
  status?: string | undefined;
  maxResolution?: string | undefined;
  maxDuration?: number | undefined;
  createdAt?: string | undefined;
  reconnectWindow?: number | undefined;
  enableRecording?: boolean | undefined;
  mediaPolicy?: string | undefined;
  metadata?: { [k: string]: string } | undefined;
  playbackIds?: Array<PlaybackIdResponse$Outbound> | undefined;
  srtPlaybackResponse?: SrtPlaybackResponse$Outbound | undefined;
};

/** @internal */
export const PatchResponseData$outboundSchema: z.ZodType<
  PatchResponseData$Outbound,
  z.ZodTypeDef,
  PatchResponseData
> = z.object({
  streamId: z.string().optional(),
  streamKey: z.string().optional(),
  srtSecret: z.string().optional(),
  trial: z.boolean().optional(),
  status: z.string().optional(),
  maxResolution: z.string().optional(),
  maxDuration: z.number().int().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  reconnectWindow: z.number().int().optional(),
  enableRecording: z.boolean().optional(),
  mediaPolicy: z.string().optional(),
  metadata: z.record(z.string()).optional(),
  playbackIds: z.array(PlaybackIdResponse$outboundSchema).optional(),
  srtPlaybackResponse: SrtPlaybackResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchResponseData$ {
  /** @deprecated use `PatchResponseData$inboundSchema` instead. */
  export const inboundSchema = PatchResponseData$inboundSchema;
  /** @deprecated use `PatchResponseData$outboundSchema` instead. */
  export const outboundSchema = PatchResponseData$outboundSchema;
  /** @deprecated use `PatchResponseData$Outbound` instead. */
  export type Outbound = PatchResponseData$Outbound;
}

export function patchResponseDataToJSON(
  patchResponseData: PatchResponseData,
): string {
  return JSON.stringify(
    PatchResponseData$outboundSchema.parse(patchResponseData),
  );
}

export function patchResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<PatchResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchResponseData' from JSON`,
  );
}
