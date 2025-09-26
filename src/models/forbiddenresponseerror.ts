import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type ForbiddenResponseError = {
  /**
   * Forbidden response
   */
  code?: number | undefined;
  /**
   * A descriptive message providing more details for the error.
   */
  message?: string | undefined;
};

/** @internal */
export const ForbiddenResponseError$inboundSchema: z.ZodType<
  ForbiddenResponseError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
});

/** @internal */
export type ForbiddenResponseError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
};

/** @internal */
export const ForbiddenResponseError$outboundSchema: z.ZodType<
  ForbiddenResponseError$Outbound,
  z.ZodTypeDef,
  ForbiddenResponseError
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForbiddenResponseError$ {
  /** @deprecated use `ForbiddenResponseError$inboundSchema` instead. */
  export const inboundSchema = ForbiddenResponseError$inboundSchema;
  /** @deprecated use `ForbiddenResponseError$outboundSchema` instead. */
  export const outboundSchema = ForbiddenResponseError$outboundSchema;
  /** @deprecated use `ForbiddenResponseError$Outbound` instead. */
  export type Outbound = ForbiddenResponseError$Outbound;
}

export function forbiddenResponseErrorToJSON(
  forbiddenResponseError: ForbiddenResponseError,
): string {
  return JSON.stringify(
    ForbiddenResponseError$outboundSchema.parse(forbiddenResponseError),
  );
}

export function forbiddenResponseErrorFromJSON(
  jsonString: string,
): SafeParseResult<ForbiddenResponseError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ForbiddenResponseError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ForbiddenResponseError' from JSON`,
  );
}
