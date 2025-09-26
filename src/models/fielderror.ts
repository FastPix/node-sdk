import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type FieldError = {
  /**
   * Displays the specific field associated with the error.
   */
  field: string;
  /**
   * Error message for the field
   */
  message: string;
};

/** @internal */
export const FieldError$inboundSchema: z.ZodType<
  FieldError,
  z.ZodTypeDef,
  unknown
> = z.object({
  field: z.string(),
  message: z.string(),
});

/** @internal */
export type FieldError$Outbound = {
  field: string;
  message: string;
};

/** @internal */
export const FieldError$outboundSchema: z.ZodType<
  FieldError$Outbound,
  z.ZodTypeDef,
  FieldError
> = z.object({
  field: z.string(),
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldError$ {
  /** @deprecated use `FieldError$inboundSchema` instead. */
  export const inboundSchema = FieldError$inboundSchema;
  /** @deprecated use `FieldError$outboundSchema` instead. */
  export const outboundSchema = FieldError$outboundSchema;
  /** @deprecated use `FieldError$Outbound` instead. */
  export type Outbound = FieldError$Outbound;
}

export function fieldErrorToJSON(fieldError: FieldError): string {
  return JSON.stringify(FieldError$outboundSchema.parse(fieldError));
}

export function fieldErrorFromJSON(
  jsonString: string,
): SafeParseResult<FieldError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FieldError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FieldError' from JSON`,
  );
}
