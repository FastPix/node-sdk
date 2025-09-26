import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type TrackDuplicateRequestError = {
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
export const TrackDuplicateRequestError$inboundSchema: z.ZodType<
  TrackDuplicateRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type TrackDuplicateRequestError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const TrackDuplicateRequestError$outboundSchema: z.ZodType<
  TrackDuplicateRequestError$Outbound,
  z.ZodTypeDef,
  TrackDuplicateRequestError
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackDuplicateRequestError$ {
  /** @deprecated use `TrackDuplicateRequestError$inboundSchema` instead. */
  export const inboundSchema = TrackDuplicateRequestError$inboundSchema;
  /** @deprecated use `TrackDuplicateRequestError$outboundSchema` instead. */
  export const outboundSchema = TrackDuplicateRequestError$outboundSchema;
  /** @deprecated use `TrackDuplicateRequestError$Outbound` instead. */
  export type Outbound = TrackDuplicateRequestError$Outbound;
}

export function trackDuplicateRequestErrorToJSON(
  trackDuplicateRequestError: TrackDuplicateRequestError,
): string {
  return JSON.stringify(
    TrackDuplicateRequestError$outboundSchema.parse(trackDuplicateRequestError),
  );
}

export function trackDuplicateRequestErrorFromJSON(
  jsonString: string,
): SafeParseResult<TrackDuplicateRequestError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackDuplicateRequestError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackDuplicateRequestError' from JSON`,
  );
}
