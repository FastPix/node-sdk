import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type UnauthorizedError = {
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
export const UnauthorizedError$inboundSchema: z.ZodType<
  UnauthorizedError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type UnauthorizedError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const UnauthorizedError$outboundSchema: z.ZodType<
  UnauthorizedError$Outbound,
  z.ZodTypeDef,
  UnauthorizedError
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedError$ {
  /** @deprecated use `UnauthorizedError$inboundSchema` instead. */
  export const inboundSchema = UnauthorizedError$inboundSchema;
  /** @deprecated use `UnauthorizedError$outboundSchema` instead. */
  export const outboundSchema = UnauthorizedError$outboundSchema;
  /** @deprecated use `UnauthorizedError$Outbound` instead. */
  export type Outbound = UnauthorizedError$Outbound;
}

export function unauthorizedErrorToJSON(
  unauthorizedError: UnauthorizedError,
): string {
  return JSON.stringify(
    UnauthorizedError$outboundSchema.parse(unauthorizedError),
  );
}

export function unauthorizedErrorFromJSON(
  jsonString: string,
): SafeParseResult<UnauthorizedError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnauthorizedError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnauthorizedError' from JSON`,
  );
}
