import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type InvalidPermissionError = {
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
export const InvalidPermissionError$inboundSchema: z.ZodType<
  InvalidPermissionError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type InvalidPermissionError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const InvalidPermissionError$outboundSchema: z.ZodType<
  InvalidPermissionError$Outbound,
  z.ZodTypeDef,
  InvalidPermissionError
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvalidPermissionError$ {
  /** @deprecated use `InvalidPermissionError$inboundSchema` instead. */
  export const inboundSchema = InvalidPermissionError$inboundSchema;
  /** @deprecated use `InvalidPermissionError$outboundSchema` instead. */
  export const outboundSchema = InvalidPermissionError$outboundSchema;
  /** @deprecated use `InvalidPermissionError$Outbound` instead. */
  export type Outbound = InvalidPermissionError$Outbound;
}

export function invalidPermissionErrorToJSON(
  invalidPermissionError: InvalidPermissionError,
): string {
  return JSON.stringify(
    InvalidPermissionError$outboundSchema.parse(invalidPermissionError),
  );
}

export function invalidPermissionErrorFromJSON(
  jsonString: string,
): SafeParseResult<InvalidPermissionError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvalidPermissionError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvalidPermissionError' from JSON`,
  );
}
