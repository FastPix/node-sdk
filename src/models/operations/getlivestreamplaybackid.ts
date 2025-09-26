import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetLiveStreamPlaybackIdRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
  /**
   * Upon creating a new playbackId, FastPix assigns a unique identifier to the playback.
   */
  playbackId: string;
};

/** @internal */
export const GetLiveStreamPlaybackIdRequest$inboundSchema: z.ZodType<
  GetLiveStreamPlaybackIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
  playbackId: z.string(),
});

/** @internal */
export type GetLiveStreamPlaybackIdRequest$Outbound = {
  streamId: string;
  playbackId: string;
};

/** @internal */
export const GetLiveStreamPlaybackIdRequest$outboundSchema: z.ZodType<
  GetLiveStreamPlaybackIdRequest$Outbound,
  z.ZodTypeDef,
  GetLiveStreamPlaybackIdRequest
> = z.object({
  streamId: z.string(),
  playbackId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLiveStreamPlaybackIdRequest$ {
  /** @deprecated use `GetLiveStreamPlaybackIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetLiveStreamPlaybackIdRequest$inboundSchema;
  /** @deprecated use `GetLiveStreamPlaybackIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetLiveStreamPlaybackIdRequest$outboundSchema;
  /** @deprecated use `GetLiveStreamPlaybackIdRequest$Outbound` instead. */
  export type Outbound = GetLiveStreamPlaybackIdRequest$Outbound;
}

export function getLiveStreamPlaybackIdRequestToJSON(
  getLiveStreamPlaybackIdRequest: GetLiveStreamPlaybackIdRequest,
): string {
  return JSON.stringify(
    GetLiveStreamPlaybackIdRequest$outboundSchema.parse(
      getLiveStreamPlaybackIdRequest,
    ),
  );
}

export function getLiveStreamPlaybackIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetLiveStreamPlaybackIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLiveStreamPlaybackIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLiveStreamPlaybackIdRequest' from JSON`,
  );
}
