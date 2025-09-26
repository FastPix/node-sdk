import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Contains details explaining why the request failed.
 */
export type StreamAlreadyDisabledErrorError = {
  /**
   * HTTP status code indicating the nature of the error.
   */
  code?: number | undefined;
  /**
   * A short message summarizing the error.
   */
  message?: string | undefined;
  /**
   * A detailed explanation indicating that the stream is already in a disabled state and cannot be disabled again.
   *
   * @remarks
   */
  description?: string | undefined;
};

/** @internal */
export const StreamAlreadyDisabledErrorError$inboundSchema: z.ZodType<
  StreamAlreadyDisabledErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type StreamAlreadyDisabledErrorError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const StreamAlreadyDisabledErrorError$outboundSchema: z.ZodType<
  StreamAlreadyDisabledErrorError$Outbound,
  z.ZodTypeDef,
  StreamAlreadyDisabledErrorError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StreamAlreadyDisabledErrorError$ {
  /** @deprecated use `StreamAlreadyDisabledErrorError$inboundSchema` instead. */
  export const inboundSchema = StreamAlreadyDisabledErrorError$inboundSchema;
  /** @deprecated use `StreamAlreadyDisabledErrorError$outboundSchema` instead. */
  export const outboundSchema = StreamAlreadyDisabledErrorError$outboundSchema;
  /** @deprecated use `StreamAlreadyDisabledErrorError$Outbound` instead. */
  export type Outbound = StreamAlreadyDisabledErrorError$Outbound;
}

export function streamAlreadyDisabledErrorErrorToJSON(
  streamAlreadyDisabledErrorError: StreamAlreadyDisabledErrorError,
): string {
  return JSON.stringify(
    StreamAlreadyDisabledErrorError$outboundSchema.parse(
      streamAlreadyDisabledErrorError,
    ),
  );
}

export function streamAlreadyDisabledErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<StreamAlreadyDisabledErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StreamAlreadyDisabledErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StreamAlreadyDisabledErrorError' from JSON`,
  );
}
