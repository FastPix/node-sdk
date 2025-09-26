import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type SigningKeyNotFoundErrorError = {
  /**
   * An error code indicating the type of the error.
   */
  code?: number | undefined;
  /**
   * A descriptive message providing more details for the error.
   */
  message?: string | undefined;
};

/** @internal */
export const SigningKeyNotFoundErrorError$inboundSchema: z.ZodType<
  SigningKeyNotFoundErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
});

/** @internal */
export type SigningKeyNotFoundErrorError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
};

/** @internal */
export const SigningKeyNotFoundErrorError$outboundSchema: z.ZodType<
  SigningKeyNotFoundErrorError$Outbound,
  z.ZodTypeDef,
  SigningKeyNotFoundErrorError
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SigningKeyNotFoundErrorError$ {
  /** @deprecated use `SigningKeyNotFoundErrorError$inboundSchema` instead. */
  export const inboundSchema = SigningKeyNotFoundErrorError$inboundSchema;
  /** @deprecated use `SigningKeyNotFoundErrorError$outboundSchema` instead. */
  export const outboundSchema = SigningKeyNotFoundErrorError$outboundSchema;
  /** @deprecated use `SigningKeyNotFoundErrorError$Outbound` instead. */
  export type Outbound = SigningKeyNotFoundErrorError$Outbound;
}

export function signingKeyNotFoundErrorErrorToJSON(
  signingKeyNotFoundErrorError: SigningKeyNotFoundErrorError,
): string {
  return JSON.stringify(
    SigningKeyNotFoundErrorError$outboundSchema.parse(
      signingKeyNotFoundErrorError,
    ),
  );
}

export function signingKeyNotFoundErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<SigningKeyNotFoundErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SigningKeyNotFoundErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SigningKeyNotFoundErrorError' from JSON`,
  );
}
