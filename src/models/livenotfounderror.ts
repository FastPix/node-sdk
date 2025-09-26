import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays details about the reasons behind the request's failure.
 */
export type LiveNotFoundErrorError = {
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
export const LiveNotFoundErrorError$inboundSchema: z.ZodType<
  LiveNotFoundErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type LiveNotFoundErrorError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const LiveNotFoundErrorError$outboundSchema: z.ZodType<
  LiveNotFoundErrorError$Outbound,
  z.ZodTypeDef,
  LiveNotFoundErrorError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiveNotFoundErrorError$ {
  /** @deprecated use `LiveNotFoundErrorError$inboundSchema` instead. */
  export const inboundSchema = LiveNotFoundErrorError$inboundSchema;
  /** @deprecated use `LiveNotFoundErrorError$outboundSchema` instead. */
  export const outboundSchema = LiveNotFoundErrorError$outboundSchema;
  /** @deprecated use `LiveNotFoundErrorError$Outbound` instead. */
  export type Outbound = LiveNotFoundErrorError$Outbound;
}

export function liveNotFoundErrorErrorToJSON(
  liveNotFoundErrorError: LiveNotFoundErrorError,
): string {
  return JSON.stringify(
    LiveNotFoundErrorError$outboundSchema.parse(liveNotFoundErrorError),
  );
}

export function liveNotFoundErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<LiveNotFoundErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LiveNotFoundErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LiveNotFoundErrorError' from JSON`,
  );
}
