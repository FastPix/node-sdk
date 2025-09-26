import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  LanguageCode,
  LanguageCode$inboundSchema,
  LanguageCode$outboundSchema,
} from "./languagecode.js";

/**
 * Contains details for generating subtitle tracks for a media file.
 */
export type TrackSubtitlesGenerateRequest = {
  /**
   * The full name of the language in which subtitles will be generated.
   */
  languageName: string;
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key" : "value" pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * Language code for content localization
   */
  languageCode: LanguageCode;
};

/** @internal */
export const TrackSubtitlesGenerateRequest$inboundSchema: z.ZodType<
  TrackSubtitlesGenerateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  languageName: z.string(),
  metadata: z.record(z.string()).optional(),
  languageCode: LanguageCode$inboundSchema,
});

/** @internal */
export type TrackSubtitlesGenerateRequest$Outbound = {
  languageName: string;
  metadata?: { [k: string]: string } | undefined;
  languageCode: string;
};

/** @internal */
export const TrackSubtitlesGenerateRequest$outboundSchema: z.ZodType<
  TrackSubtitlesGenerateRequest$Outbound,
  z.ZodTypeDef,
  TrackSubtitlesGenerateRequest
> = z.object({
  languageName: z.string(),
  metadata: z.record(z.string()).optional(),
  languageCode: LanguageCode$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackSubtitlesGenerateRequest$ {
  /** @deprecated use `TrackSubtitlesGenerateRequest$inboundSchema` instead. */
  export const inboundSchema = TrackSubtitlesGenerateRequest$inboundSchema;
  /** @deprecated use `TrackSubtitlesGenerateRequest$outboundSchema` instead. */
  export const outboundSchema = TrackSubtitlesGenerateRequest$outboundSchema;
  /** @deprecated use `TrackSubtitlesGenerateRequest$Outbound` instead. */
  export type Outbound = TrackSubtitlesGenerateRequest$Outbound;
}

export function trackSubtitlesGenerateRequestToJSON(
  trackSubtitlesGenerateRequest: TrackSubtitlesGenerateRequest,
): string {
  return JSON.stringify(
    TrackSubtitlesGenerateRequest$outboundSchema.parse(
      trackSubtitlesGenerateRequest,
    ),
  );
}

export function trackSubtitlesGenerateRequestFromJSON(
  jsonString: string,
): SafeParseResult<TrackSubtitlesGenerateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackSubtitlesGenerateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackSubtitlesGenerateRequest' from JSON`,
  );
}
