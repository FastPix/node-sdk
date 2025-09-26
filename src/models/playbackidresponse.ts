import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * A collection of Playback ID objects utilized for crafting HLS playback urls.
 */
export type PlaybackIdResponse = {
  /**
   * Unique identifier for the playbackId
   */
  id?: string | undefined;
  /**
   * Determines if access to the streamed content is kept private or available to all.
   */
  accessPolicy?: string | undefined;
};

/** @internal */
export const PlaybackIdResponse$inboundSchema: z.ZodType<
  PlaybackIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  accessPolicy: z.string().optional(),
});

/** @internal */
export type PlaybackIdResponse$Outbound = {
  id?: string | undefined;
  accessPolicy?: string | undefined;
};

/** @internal */
export const PlaybackIdResponse$outboundSchema: z.ZodType<
  PlaybackIdResponse$Outbound,
  z.ZodTypeDef,
  PlaybackIdResponse
> = z.object({
  id: z.string().optional(),
  accessPolicy: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaybackIdResponse$ {
  /** @deprecated use `PlaybackIdResponse$inboundSchema` instead. */
  export const inboundSchema = PlaybackIdResponse$inboundSchema;
  /** @deprecated use `PlaybackIdResponse$outboundSchema` instead. */
  export const outboundSchema = PlaybackIdResponse$outboundSchema;
  /** @deprecated use `PlaybackIdResponse$Outbound` instead. */
  export type Outbound = PlaybackIdResponse$Outbound;
}

export function playbackIdResponseToJSON(
  playbackIdResponse: PlaybackIdResponse,
): string {
  return JSON.stringify(
    PlaybackIdResponse$outboundSchema.parse(playbackIdResponse),
  );
}

export function playbackIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<PlaybackIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaybackIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaybackIdResponse' from JSON`,
  );
}
