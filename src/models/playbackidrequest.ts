import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  BasicAccessPolicy,
  BasicAccessPolicy$inboundSchema,
  BasicAccessPolicy$outboundSchema,
} from "./basicaccesspolicy.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type PlaybackIdRequest = {
  /**
   * Basic access policy for media content
   */
  accessPolicy?: BasicAccessPolicy | undefined;
};

/** @internal */
export const PlaybackIdRequest$inboundSchema: z.ZodType<
  PlaybackIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessPolicy: BasicAccessPolicy$inboundSchema.optional(),
});

/** @internal */
export type PlaybackIdRequest$Outbound = {
  accessPolicy?: string | undefined;
};

/** @internal */
export const PlaybackIdRequest$outboundSchema: z.ZodType<
  PlaybackIdRequest$Outbound,
  z.ZodTypeDef,
  PlaybackIdRequest
> = z.object({
  accessPolicy: BasicAccessPolicy$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaybackIdRequest$ {
  /** @deprecated use `PlaybackIdRequest$inboundSchema` instead. */
  export const inboundSchema = PlaybackIdRequest$inboundSchema;
  /** @deprecated use `PlaybackIdRequest$outboundSchema` instead. */
  export const outboundSchema = PlaybackIdRequest$outboundSchema;
  /** @deprecated use `PlaybackIdRequest$Outbound` instead. */
  export type Outbound = PlaybackIdRequest$Outbound;
}

export function playbackIdRequestToJSON(
  playbackIdRequest: PlaybackIdRequest,
): string {
  return JSON.stringify(
    PlaybackIdRequest$outboundSchema.parse(playbackIdRequest),
  );
}

export function playbackIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<PlaybackIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaybackIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaybackIdRequest' from JSON`,
  );
}
