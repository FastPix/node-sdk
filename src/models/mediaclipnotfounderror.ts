import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type MediaClipNotFoundError = {
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
export const MediaClipNotFoundError$inboundSchema: z.ZodType<
  MediaClipNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type MediaClipNotFoundError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const MediaClipNotFoundError$outboundSchema: z.ZodType<
  MediaClipNotFoundError$Outbound,
  z.ZodTypeDef,
  MediaClipNotFoundError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipNotFoundError$ {
  /** @deprecated use `MediaClipNotFoundError$inboundSchema` instead. */
  export const inboundSchema = MediaClipNotFoundError$inboundSchema;
  /** @deprecated use `MediaClipNotFoundError$outboundSchema` instead. */
  export const outboundSchema = MediaClipNotFoundError$outboundSchema;
  /** @deprecated use `MediaClipNotFoundError$Outbound` instead. */
  export type Outbound = MediaClipNotFoundError$Outbound;
}

export function mediaClipNotFoundErrorToJSON(
  mediaClipNotFoundError: MediaClipNotFoundError,
): string {
  return JSON.stringify(
    MediaClipNotFoundError$outboundSchema.parse(mediaClipNotFoundError),
  );
}

export function mediaClipNotFoundErrorFromJSON(
  jsonString: string,
): SafeParseResult<MediaClipNotFoundError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaClipNotFoundError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaClipNotFoundError' from JSON`,
  );
}
