import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Contains details about the track being added to the media file.
 */
export type UpdateTrackRequest = {
  /**
   * The direct URL of the track file. It should point to a valid audio or subtitle file.
   */
  url?: string | undefined;
  /**
   * The BCP 47 language code representing the track's language.
   */
  languageCode?: string | undefined;
  /**
   * The full name of the language corresponding to the `languageCode`.
   */
  languageName?: string | undefined;
};

/** @internal */
export const UpdateTrackRequest$inboundSchema: z.ZodType<
  UpdateTrackRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string().optional(),
  languageCode: z.string().optional(),
  languageName: z.string().optional(),
});

/** @internal */
export type UpdateTrackRequest$Outbound = {
  url?: string | undefined;
  languageCode?: string | undefined;
  languageName?: string | undefined;
};

/** @internal */
export const UpdateTrackRequest$outboundSchema: z.ZodType<
  UpdateTrackRequest$Outbound,
  z.ZodTypeDef,
  UpdateTrackRequest
> = z.object({
  url: z.string().optional(),
  languageCode: z.string().optional(),
  languageName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTrackRequest$ {
  /** @deprecated use `UpdateTrackRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateTrackRequest$inboundSchema;
  /** @deprecated use `UpdateTrackRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateTrackRequest$outboundSchema;
  /** @deprecated use `UpdateTrackRequest$Outbound` instead. */
  export type Outbound = UpdateTrackRequest$Outbound;
}

export function updateTrackRequestToJSON(
  updateTrackRequest: UpdateTrackRequest,
): string {
  return JSON.stringify(
    UpdateTrackRequest$outboundSchema.parse(updateTrackRequest),
  );
}

export function updateTrackRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTrackRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateTrackRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTrackRequest' from JSON`,
  );
}
