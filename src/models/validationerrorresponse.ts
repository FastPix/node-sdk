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
export type ValidationErrorResponseError = {
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
export const ValidationErrorResponseError$inboundSchema: z.ZodType<
  ValidationErrorResponseError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  fields: z.array(FieldError$inboundSchema).optional(),
});

/** @internal */
export type ValidationErrorResponseError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  fields?: Array<FieldError$Outbound> | undefined;
};

/** @internal */
export const ValidationErrorResponseError$outboundSchema: z.ZodType<
  ValidationErrorResponseError$Outbound,
  z.ZodTypeDef,
  ValidationErrorResponseError
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  fields: z.array(FieldError$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ValidationErrorResponseError$ {
  /** @deprecated use `ValidationErrorResponseError$inboundSchema` instead. */
  export const inboundSchema = ValidationErrorResponseError$inboundSchema;
  /** @deprecated use `ValidationErrorResponseError$outboundSchema` instead. */
  export const outboundSchema = ValidationErrorResponseError$outboundSchema;
  /** @deprecated use `ValidationErrorResponseError$Outbound` instead. */
  export type Outbound = ValidationErrorResponseError$Outbound;
}

export function validationErrorResponseErrorToJSON(
  validationErrorResponseError: ValidationErrorResponseError,
): string {
  return JSON.stringify(
    ValidationErrorResponseError$outboundSchema.parse(
      validationErrorResponseError,
    ),
  );
}

export function validationErrorResponseErrorFromJSON(
  jsonString: string,
): SafeParseResult<ValidationErrorResponseError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ValidationErrorResponseError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ValidationErrorResponseError' from JSON`,
  );
}
