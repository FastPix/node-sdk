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
 * Generates subtitle files for audio/video files.
 */
export type SubtitleInput = {
  /**
   * Defines the type of input.
   *
   * @remarks
   */
  type: string;
  /**
   * The direct URL of the subtitle file.
   */
  url: string;
  /**
   * Name of the language in which the subtitles will be generated.
   */
  languageName: string;
  /**
   * Language code for content localization
   */
  languageCode: LanguageCode;
};

/** @internal */
export const SubtitleInput$inboundSchema: z.ZodType<
  SubtitleInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string(),
  url: z.string(),
  languageName: z.string(),
  languageCode: LanguageCode$inboundSchema,
});

/** @internal */
export type SubtitleInput$Outbound = {
  type: string;
  url: string;
  languageName: string;
  languageCode: string;
};

/** @internal */
export const SubtitleInput$outboundSchema: z.ZodType<
  SubtitleInput$Outbound,
  z.ZodTypeDef,
  SubtitleInput
> = z.object({
  type: z.string(),
  url: z.string(),
  languageName: z.string(),
  languageCode: LanguageCode$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubtitleInput$ {
  /** @deprecated use `SubtitleInput$inboundSchema` instead. */
  export const inboundSchema = SubtitleInput$inboundSchema;
  /** @deprecated use `SubtitleInput$outboundSchema` instead. */
  export const outboundSchema = SubtitleInput$outboundSchema;
  /** @deprecated use `SubtitleInput$Outbound` instead. */
  export type Outbound = SubtitleInput$Outbound;
}

export function subtitleInputToJSON(subtitleInput: SubtitleInput): string {
  return JSON.stringify(SubtitleInput$outboundSchema.parse(subtitleInput));
}

export function subtitleInputFromJSON(
  jsonString: string,
): SafeParseResult<SubtitleInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubtitleInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubtitleInput' from JSON`,
  );
}
