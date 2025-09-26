import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type MediaOrPlaybackNotFoundError = {
  /**
   * Displays the error code indicating the type of the error.
   */
  code?: number | undefined;
  /**
   * A descriptive message providing more details for the error.
   */
  message?: string | undefined;
  /**
   * A detailed explanation of the possible causes for the error.
   *
   * @remarks
   */
  description?: string | undefined;
};

/** @internal */
export const MediaOrPlaybackNotFoundError$inboundSchema: z.ZodType<
  MediaOrPlaybackNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type MediaOrPlaybackNotFoundError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const MediaOrPlaybackNotFoundError$outboundSchema: z.ZodType<
  MediaOrPlaybackNotFoundError$Outbound,
  z.ZodTypeDef,
  MediaOrPlaybackNotFoundError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaOrPlaybackNotFoundError$ {
  /** @deprecated use `MediaOrPlaybackNotFoundError$inboundSchema` instead. */
  export const inboundSchema = MediaOrPlaybackNotFoundError$inboundSchema;
  /** @deprecated use `MediaOrPlaybackNotFoundError$outboundSchema` instead. */
  export const outboundSchema = MediaOrPlaybackNotFoundError$outboundSchema;
  /** @deprecated use `MediaOrPlaybackNotFoundError$Outbound` instead. */
  export type Outbound = MediaOrPlaybackNotFoundError$Outbound;
}

export function mediaOrPlaybackNotFoundErrorToJSON(
  mediaOrPlaybackNotFoundError: MediaOrPlaybackNotFoundError,
): string {
  return JSON.stringify(
    MediaOrPlaybackNotFoundError$outboundSchema.parse(
      mediaOrPlaybackNotFoundError,
    ),
  );
}

export function mediaOrPlaybackNotFoundErrorFromJSON(
  jsonString: string,
): SafeParseResult<MediaOrPlaybackNotFoundError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaOrPlaybackNotFoundError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaOrPlaybackNotFoundError' from JSON`,
  );
}
