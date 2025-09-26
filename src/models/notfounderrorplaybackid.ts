import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type NotFoundErrorPlaybackIdError = {
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
export const NotFoundErrorPlaybackIdError$inboundSchema: z.ZodType<
  NotFoundErrorPlaybackIdError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type NotFoundErrorPlaybackIdError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const NotFoundErrorPlaybackIdError$outboundSchema: z.ZodType<
  NotFoundErrorPlaybackIdError$Outbound,
  z.ZodTypeDef,
  NotFoundErrorPlaybackIdError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFoundErrorPlaybackIdError$ {
  /** @deprecated use `NotFoundErrorPlaybackIdError$inboundSchema` instead. */
  export const inboundSchema = NotFoundErrorPlaybackIdError$inboundSchema;
  /** @deprecated use `NotFoundErrorPlaybackIdError$outboundSchema` instead. */
  export const outboundSchema = NotFoundErrorPlaybackIdError$outboundSchema;
  /** @deprecated use `NotFoundErrorPlaybackIdError$Outbound` instead. */
  export type Outbound = NotFoundErrorPlaybackIdError$Outbound;
}

export function notFoundErrorPlaybackIdErrorToJSON(
  notFoundErrorPlaybackIdError: NotFoundErrorPlaybackIdError,
): string {
  return JSON.stringify(
    NotFoundErrorPlaybackIdError$outboundSchema.parse(
      notFoundErrorPlaybackIdError,
    ),
  );
}

export function notFoundErrorPlaybackIdErrorFromJSON(
  jsonString: string,
): SafeParseResult<NotFoundErrorPlaybackIdError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotFoundErrorPlaybackIdError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotFoundErrorPlaybackIdError' from JSON`,
  );
}
