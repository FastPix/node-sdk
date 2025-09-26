import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type DuplicateMp4SupportError = {
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
export const DuplicateMp4SupportError$inboundSchema: z.ZodType<
  DuplicateMp4SupportError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type DuplicateMp4SupportError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const DuplicateMp4SupportError$outboundSchema: z.ZodType<
  DuplicateMp4SupportError$Outbound,
  z.ZodTypeDef,
  DuplicateMp4SupportError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DuplicateMp4SupportError$ {
  /** @deprecated use `DuplicateMp4SupportError$inboundSchema` instead. */
  export const inboundSchema = DuplicateMp4SupportError$inboundSchema;
  /** @deprecated use `DuplicateMp4SupportError$outboundSchema` instead. */
  export const outboundSchema = DuplicateMp4SupportError$outboundSchema;
  /** @deprecated use `DuplicateMp4SupportError$Outbound` instead. */
  export type Outbound = DuplicateMp4SupportError$Outbound;
}

export function duplicateMp4SupportErrorToJSON(
  duplicateMp4SupportError: DuplicateMp4SupportError,
): string {
  return JSON.stringify(
    DuplicateMp4SupportError$outboundSchema.parse(duplicateMp4SupportError),
  );
}

export function duplicateMp4SupportErrorFromJSON(
  jsonString: string,
): SafeParseResult<DuplicateMp4SupportError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DuplicateMp4SupportError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DuplicateMp4SupportError' from JSON`,
  );
}
