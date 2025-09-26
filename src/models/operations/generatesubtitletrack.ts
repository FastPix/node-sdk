import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type GenerateSubtitleTrackRequest = {
  /**
   * A universally unique identifier (UUID) assigned to the media by FastPix.
   */
  mediaId: string;
  /**
   * A universally unique identifier (UUID) assigned to the specific track for which subtitles should be generated.
   */
  trackId: string;
  trackSubtitlesGenerateRequest: models.TrackSubtitlesGenerateRequest;
};

/**
 * Media details updated successfully
 */
export type GenerateSubtitleTrackResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Represents the response for a successfully generated subtitle track.
   */
  data?: models.GenerateTrackResponse | undefined;
};

/** @internal */
export const GenerateSubtitleTrackRequest$inboundSchema: z.ZodType<
  GenerateSubtitleTrackRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  trackId: z.string(),
  TrackSubtitlesGenerateRequest:
    models.TrackSubtitlesGenerateRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "TrackSubtitlesGenerateRequest": "trackSubtitlesGenerateRequest",
  });
});

/** @internal */
export type GenerateSubtitleTrackRequest$Outbound = {
  mediaId: string;
  trackId: string;
  TrackSubtitlesGenerateRequest: models.TrackSubtitlesGenerateRequest$Outbound;
};

/** @internal */
export const GenerateSubtitleTrackRequest$outboundSchema: z.ZodType<
  GenerateSubtitleTrackRequest$Outbound,
  z.ZodTypeDef,
  GenerateSubtitleTrackRequest
> = z.object({
  mediaId: z.string(),
  trackId: z.string(),
  trackSubtitlesGenerateRequest:
    models.TrackSubtitlesGenerateRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    trackSubtitlesGenerateRequest: "TrackSubtitlesGenerateRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateSubtitleTrackRequest$ {
  /** @deprecated use `GenerateSubtitleTrackRequest$inboundSchema` instead. */
  export const inboundSchema = GenerateSubtitleTrackRequest$inboundSchema;
  /** @deprecated use `GenerateSubtitleTrackRequest$outboundSchema` instead. */
  export const outboundSchema = GenerateSubtitleTrackRequest$outboundSchema;
  /** @deprecated use `GenerateSubtitleTrackRequest$Outbound` instead. */
  export type Outbound = GenerateSubtitleTrackRequest$Outbound;
}

export function generateSubtitleTrackRequestToJSON(
  generateSubtitleTrackRequest: GenerateSubtitleTrackRequest,
): string {
  return JSON.stringify(
    GenerateSubtitleTrackRequest$outboundSchema.parse(
      generateSubtitleTrackRequest,
    ),
  );
}

export function generateSubtitleTrackRequestFromJSON(
  jsonString: string,
): SafeParseResult<GenerateSubtitleTrackRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GenerateSubtitleTrackRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GenerateSubtitleTrackRequest' from JSON`,
  );
}

/** @internal */
export const GenerateSubtitleTrackResponse$inboundSchema: z.ZodType<
  GenerateSubtitleTrackResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.GenerateTrackResponse$inboundSchema.optional(),
});

/** @internal */
export type GenerateSubtitleTrackResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.GenerateTrackResponse$Outbound | undefined;
};

/** @internal */
export const GenerateSubtitleTrackResponse$outboundSchema: z.ZodType<
  GenerateSubtitleTrackResponse$Outbound,
  z.ZodTypeDef,
  GenerateSubtitleTrackResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.GenerateTrackResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateSubtitleTrackResponse$ {
  /** @deprecated use `GenerateSubtitleTrackResponse$inboundSchema` instead. */
  export const inboundSchema = GenerateSubtitleTrackResponse$inboundSchema;
  /** @deprecated use `GenerateSubtitleTrackResponse$outboundSchema` instead. */
  export const outboundSchema = GenerateSubtitleTrackResponse$outboundSchema;
  /** @deprecated use `GenerateSubtitleTrackResponse$Outbound` instead. */
  export type Outbound = GenerateSubtitleTrackResponse$Outbound;
}

export function generateSubtitleTrackResponseToJSON(
  generateSubtitleTrackResponse: GenerateSubtitleTrackResponse,
): string {
  return JSON.stringify(
    GenerateSubtitleTrackResponse$outboundSchema.parse(
      generateSubtitleTrackResponse,
    ),
  );
}

export function generateSubtitleTrackResponseFromJSON(
  jsonString: string,
): SafeParseResult<GenerateSubtitleTrackResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GenerateSubtitleTrackResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GenerateSubtitleTrackResponse' from JSON`,
  );
}
