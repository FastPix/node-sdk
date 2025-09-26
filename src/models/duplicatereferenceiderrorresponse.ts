import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type DuplicateReferenceIdErrorResponseError = {
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
export const DuplicateReferenceIdErrorResponseError$inboundSchema: z.ZodType<
  DuplicateReferenceIdErrorResponseError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type DuplicateReferenceIdErrorResponseError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const DuplicateReferenceIdErrorResponseError$outboundSchema: z.ZodType<
  DuplicateReferenceIdErrorResponseError$Outbound,
  z.ZodTypeDef,
  DuplicateReferenceIdErrorResponseError
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DuplicateReferenceIdErrorResponseError$ {
  /** @deprecated use `DuplicateReferenceIdErrorResponseError$inboundSchema` instead. */
  export const inboundSchema =
    DuplicateReferenceIdErrorResponseError$inboundSchema;
  /** @deprecated use `DuplicateReferenceIdErrorResponseError$outboundSchema` instead. */
  export const outboundSchema =
    DuplicateReferenceIdErrorResponseError$outboundSchema;
  /** @deprecated use `DuplicateReferenceIdErrorResponseError$Outbound` instead. */
  export type Outbound = DuplicateReferenceIdErrorResponseError$Outbound;
}

export function duplicateReferenceIdErrorResponseErrorToJSON(
  duplicateReferenceIdErrorResponseError:
    DuplicateReferenceIdErrorResponseError,
): string {
  return JSON.stringify(
    DuplicateReferenceIdErrorResponseError$outboundSchema.parse(
      duplicateReferenceIdErrorResponseError,
    ),
  );
}

export function duplicateReferenceIdErrorResponseErrorFromJSON(
  jsonString: string,
): SafeParseResult<DuplicateReferenceIdErrorResponseError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DuplicateReferenceIdErrorResponseError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DuplicateReferenceIdErrorResponseError' from JSON`,
  );
}
