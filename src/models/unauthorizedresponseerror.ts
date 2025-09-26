import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type UnAuthorizedResponseError = {
  /**
   * UnAuthorized response
   */
  code?: number | undefined;
  /**
   * A descriptive message providing more details for the error.
   */
  message?: string | undefined;
};

/** @internal */
export const UnAuthorizedResponseError$inboundSchema: z.ZodType<
  UnAuthorizedResponseError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
});

/** @internal */
export type UnAuthorizedResponseError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
};

/** @internal */
export const UnAuthorizedResponseError$outboundSchema: z.ZodType<
  UnAuthorizedResponseError$Outbound,
  z.ZodTypeDef,
  UnAuthorizedResponseError
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnAuthorizedResponseError$ {
  /** @deprecated use `UnAuthorizedResponseError$inboundSchema` instead. */
  export const inboundSchema = UnAuthorizedResponseError$inboundSchema;
  /** @deprecated use `UnAuthorizedResponseError$outboundSchema` instead. */
  export const outboundSchema = UnAuthorizedResponseError$outboundSchema;
  /** @deprecated use `UnAuthorizedResponseError$Outbound` instead. */
  export type Outbound = UnAuthorizedResponseError$Outbound;
}

export function unAuthorizedResponseErrorToJSON(
  unAuthorizedResponseError: UnAuthorizedResponseError,
): string {
  return JSON.stringify(
    UnAuthorizedResponseError$outboundSchema.parse(unAuthorizedResponseError),
  );
}

export function unAuthorizedResponseErrorFromJSON(
  jsonString: string,
): SafeParseResult<UnAuthorizedResponseError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnAuthorizedResponseError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnAuthorizedResponseError' from JSON`,
  );
}
