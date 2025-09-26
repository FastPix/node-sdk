import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  FieldError,
  FieldError$inboundSchema,
  FieldError$Outbound,
  FieldError$outboundSchema,
} from "./fielderror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type InvalidPlaylistIdResponseError = {
  /**
   * Displays the error code indicating the type of the error.
   */
  code?: number | undefined;
  /**
   * A descriptive message providing more details for the error.
   */
  message?: string | undefined;
  /**
   * It is an collection of objects, where each object contains information about a specific field and a corresponding error message.
   */
  fields?: Array<FieldError> | undefined;
};

/** @internal */
export const InvalidPlaylistIdResponseError$inboundSchema: z.ZodType<
  InvalidPlaylistIdResponseError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  fields: z.array(FieldError$inboundSchema).optional(),
});

/** @internal */
export type InvalidPlaylistIdResponseError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  fields?: Array<FieldError$Outbound> | undefined;
};

/** @internal */
export const InvalidPlaylistIdResponseError$outboundSchema: z.ZodType<
  InvalidPlaylistIdResponseError$Outbound,
  z.ZodTypeDef,
  InvalidPlaylistIdResponseError
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  fields: z.array(FieldError$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvalidPlaylistIdResponseError$ {
  /** @deprecated use `InvalidPlaylistIdResponseError$inboundSchema` instead. */
  export const inboundSchema = InvalidPlaylistIdResponseError$inboundSchema;
  /** @deprecated use `InvalidPlaylistIdResponseError$outboundSchema` instead. */
  export const outboundSchema = InvalidPlaylistIdResponseError$outboundSchema;
  /** @deprecated use `InvalidPlaylistIdResponseError$Outbound` instead. */
  export type Outbound = InvalidPlaylistIdResponseError$Outbound;
}

export function invalidPlaylistIdResponseErrorToJSON(
  invalidPlaylistIdResponseError: InvalidPlaylistIdResponseError,
): string {
  return JSON.stringify(
    InvalidPlaylistIdResponseError$outboundSchema.parse(
      invalidPlaylistIdResponseError,
    ),
  );
}

export function invalidPlaylistIdResponseErrorFromJSON(
  jsonString: string,
): SafeParseResult<InvalidPlaylistIdResponseError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvalidPlaylistIdResponseError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvalidPlaylistIdResponseError' from JSON`,
  );
}
