import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type BadRequestError = {
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
export const BadRequestError$inboundSchema: z.ZodType<
  BadRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type BadRequestError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const BadRequestError$outboundSchema: z.ZodType<
  BadRequestError$Outbound,
  z.ZodTypeDef,
  BadRequestError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestError$ {
  /** @deprecated use `BadRequestError$inboundSchema` instead. */
  export const inboundSchema = BadRequestError$inboundSchema;
  /** @deprecated use `BadRequestError$outboundSchema` instead. */
  export const outboundSchema = BadRequestError$outboundSchema;
  /** @deprecated use `BadRequestError$Outbound` instead. */
  export type Outbound = BadRequestError$Outbound;
}

export function badRequestErrorToJSON(
  badRequestError: BadRequestError,
): string {
  return JSON.stringify(BadRequestError$outboundSchema.parse(badRequestError));
}

export function badRequestErrorFromJSON(
  jsonString: string,
): SafeParseResult<BadRequestError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BadRequestError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BadRequestError' from JSON`,
  );
}
