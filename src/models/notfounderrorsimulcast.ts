import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type NotFoundErrorSimulcastError = {
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
export const NotFoundErrorSimulcastError$inboundSchema: z.ZodType<
  NotFoundErrorSimulcastError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type NotFoundErrorSimulcastError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const NotFoundErrorSimulcastError$outboundSchema: z.ZodType<
  NotFoundErrorSimulcastError$Outbound,
  z.ZodTypeDef,
  NotFoundErrorSimulcastError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFoundErrorSimulcastError$ {
  /** @deprecated use `NotFoundErrorSimulcastError$inboundSchema` instead. */
  export const inboundSchema = NotFoundErrorSimulcastError$inboundSchema;
  /** @deprecated use `NotFoundErrorSimulcastError$outboundSchema` instead. */
  export const outboundSchema = NotFoundErrorSimulcastError$outboundSchema;
  /** @deprecated use `NotFoundErrorSimulcastError$Outbound` instead. */
  export type Outbound = NotFoundErrorSimulcastError$Outbound;
}

export function notFoundErrorSimulcastErrorToJSON(
  notFoundErrorSimulcastError: NotFoundErrorSimulcastError,
): string {
  return JSON.stringify(
    NotFoundErrorSimulcastError$outboundSchema.parse(
      notFoundErrorSimulcastError,
    ),
  );
}

export function notFoundErrorSimulcastErrorFromJSON(
  jsonString: string,
): SafeParseResult<NotFoundErrorSimulcastError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotFoundErrorSimulcastError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotFoundErrorSimulcastError' from JSON`,
  );
}
