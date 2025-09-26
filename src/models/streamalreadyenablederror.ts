import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Contains details explaining why the request failed.
 */
export type StreamAlreadyEnabledErrorError = {
  /**
   * HTTP status code indicating the nature of the error.
   */
  code?: number | undefined;
  /**
   * A short message summarizing the error.
   */
  message?: string | undefined;
  /**
   * A detailed explanation indicating that the stream is already active, idle, or preparing, and therefore cannot be enabled again.
   *
   * @remarks
   */
  description?: string | undefined;
};

/** @internal */
export const StreamAlreadyEnabledErrorError$inboundSchema: z.ZodType<
  StreamAlreadyEnabledErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type StreamAlreadyEnabledErrorError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const StreamAlreadyEnabledErrorError$outboundSchema: z.ZodType<
  StreamAlreadyEnabledErrorError$Outbound,
  z.ZodTypeDef,
  StreamAlreadyEnabledErrorError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StreamAlreadyEnabledErrorError$ {
  /** @deprecated use `StreamAlreadyEnabledErrorError$inboundSchema` instead. */
  export const inboundSchema = StreamAlreadyEnabledErrorError$inboundSchema;
  /** @deprecated use `StreamAlreadyEnabledErrorError$outboundSchema` instead. */
  export const outboundSchema = StreamAlreadyEnabledErrorError$outboundSchema;
  /** @deprecated use `StreamAlreadyEnabledErrorError$Outbound` instead. */
  export type Outbound = StreamAlreadyEnabledErrorError$Outbound;
}

export function streamAlreadyEnabledErrorErrorToJSON(
  streamAlreadyEnabledErrorError: StreamAlreadyEnabledErrorError,
): string {
  return JSON.stringify(
    StreamAlreadyEnabledErrorError$outboundSchema.parse(
      streamAlreadyEnabledErrorError,
    ),
  );
}

export function streamAlreadyEnabledErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<StreamAlreadyEnabledErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StreamAlreadyEnabledErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StreamAlreadyEnabledErrorError' from JSON`,
  );
}
