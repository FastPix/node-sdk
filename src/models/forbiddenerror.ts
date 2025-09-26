import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type ForbiddenError = {
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
export const ForbiddenError$inboundSchema: z.ZodType<
  ForbiddenError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type ForbiddenError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const ForbiddenError$outboundSchema: z.ZodType<
  ForbiddenError$Outbound,
  z.ZodTypeDef,
  ForbiddenError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForbiddenError$ {
  /** @deprecated use `ForbiddenError$inboundSchema` instead. */
  export const inboundSchema = ForbiddenError$inboundSchema;
  /** @deprecated use `ForbiddenError$outboundSchema` instead. */
  export const outboundSchema = ForbiddenError$outboundSchema;
  /** @deprecated use `ForbiddenError$Outbound` instead. */
  export type Outbound = ForbiddenError$Outbound;
}

export function forbiddenErrorToJSON(forbiddenError: ForbiddenError): string {
  return JSON.stringify(ForbiddenError$outboundSchema.parse(forbiddenError));
}

export function forbiddenErrorFromJSON(
  jsonString: string,
): SafeParseResult<ForbiddenError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ForbiddenError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ForbiddenError' from JSON`,
  );
}
