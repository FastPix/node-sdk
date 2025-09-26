import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type MediaNotFoundError = {
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
export const MediaNotFoundError$inboundSchema: z.ZodType<
  MediaNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type MediaNotFoundError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const MediaNotFoundError$outboundSchema: z.ZodType<
  MediaNotFoundError$Outbound,
  z.ZodTypeDef,
  MediaNotFoundError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaNotFoundError$ {
  /** @deprecated use `MediaNotFoundError$inboundSchema` instead. */
  export const inboundSchema = MediaNotFoundError$inboundSchema;
  /** @deprecated use `MediaNotFoundError$outboundSchema` instead. */
  export const outboundSchema = MediaNotFoundError$outboundSchema;
  /** @deprecated use `MediaNotFoundError$Outbound` instead. */
  export type Outbound = MediaNotFoundError$Outbound;
}

export function mediaNotFoundErrorToJSON(
  mediaNotFoundError: MediaNotFoundError,
): string {
  return JSON.stringify(
    MediaNotFoundError$outboundSchema.parse(mediaNotFoundError),
  );
}

export function mediaNotFoundErrorFromJSON(
  jsonString: string,
): SafeParseResult<MediaNotFoundError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaNotFoundError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaNotFoundError' from JSON`,
  );
}
