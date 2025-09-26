import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type PlaybackIdSuccessResponseData = {
  /**
   * Unique identifier for the playbackId
   */
  id?: string | undefined;
  /**
   * Determines if access to the streamed content is kept private or available to all.
   */
  accessPolicy?: string | undefined;
};

/**
 * Displays the result of the request.
 */
export type PlaybackIdSuccessResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  data?: PlaybackIdSuccessResponseData | undefined;
};

/** @internal */
export const PlaybackIdSuccessResponseData$inboundSchema: z.ZodType<
  PlaybackIdSuccessResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  accessPolicy: z.string().optional(),
});

/** @internal */
export type PlaybackIdSuccessResponseData$Outbound = {
  id?: string | undefined;
  accessPolicy?: string | undefined;
};

/** @internal */
export const PlaybackIdSuccessResponseData$outboundSchema: z.ZodType<
  PlaybackIdSuccessResponseData$Outbound,
  z.ZodTypeDef,
  PlaybackIdSuccessResponseData
> = z.object({
  id: z.string().optional(),
  accessPolicy: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaybackIdSuccessResponseData$ {
  /** @deprecated use `PlaybackIdSuccessResponseData$inboundSchema` instead. */
  export const inboundSchema = PlaybackIdSuccessResponseData$inboundSchema;
  /** @deprecated use `PlaybackIdSuccessResponseData$outboundSchema` instead. */
  export const outboundSchema = PlaybackIdSuccessResponseData$outboundSchema;
  /** @deprecated use `PlaybackIdSuccessResponseData$Outbound` instead. */
  export type Outbound = PlaybackIdSuccessResponseData$Outbound;
}

export function playbackIdSuccessResponseDataToJSON(
  playbackIdSuccessResponseData: PlaybackIdSuccessResponseData,
): string {
  return JSON.stringify(
    PlaybackIdSuccessResponseData$outboundSchema.parse(
      playbackIdSuccessResponseData,
    ),
  );
}

export function playbackIdSuccessResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<PlaybackIdSuccessResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaybackIdSuccessResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaybackIdSuccessResponseData' from JSON`,
  );
}

/** @internal */
export const PlaybackIdSuccessResponse$inboundSchema: z.ZodType<
  PlaybackIdSuccessResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => PlaybackIdSuccessResponseData$inboundSchema).optional(),
});

/** @internal */
export type PlaybackIdSuccessResponse$Outbound = {
  success?: boolean | undefined;
  data?: PlaybackIdSuccessResponseData$Outbound | undefined;
};

/** @internal */
export const PlaybackIdSuccessResponse$outboundSchema: z.ZodType<
  PlaybackIdSuccessResponse$Outbound,
  z.ZodTypeDef,
  PlaybackIdSuccessResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => PlaybackIdSuccessResponseData$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaybackIdSuccessResponse$ {
  /** @deprecated use `PlaybackIdSuccessResponse$inboundSchema` instead. */
  export const inboundSchema = PlaybackIdSuccessResponse$inboundSchema;
  /** @deprecated use `PlaybackIdSuccessResponse$outboundSchema` instead. */
  export const outboundSchema = PlaybackIdSuccessResponse$outboundSchema;
  /** @deprecated use `PlaybackIdSuccessResponse$Outbound` instead. */
  export type Outbound = PlaybackIdSuccessResponse$Outbound;
}

export function playbackIdSuccessResponseToJSON(
  playbackIdSuccessResponse: PlaybackIdSuccessResponse,
): string {
  return JSON.stringify(
    PlaybackIdSuccessResponse$outboundSchema.parse(playbackIdSuccessResponse),
  );
}

export function playbackIdSuccessResponseFromJSON(
  jsonString: string,
): SafeParseResult<PlaybackIdSuccessResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaybackIdSuccessResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaybackIdSuccessResponse' from JSON`,
  );
}
