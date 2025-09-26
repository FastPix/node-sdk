import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EnableLiveStreamRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
};

/** @internal */
export const EnableLiveStreamRequest$inboundSchema: z.ZodType<
  EnableLiveStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
});

/** @internal */
export type EnableLiveStreamRequest$Outbound = {
  streamId: string;
};

/** @internal */
export const EnableLiveStreamRequest$outboundSchema: z.ZodType<
  EnableLiveStreamRequest$Outbound,
  z.ZodTypeDef,
  EnableLiveStreamRequest
> = z.object({
  streamId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableLiveStreamRequest$ {
  /** @deprecated use `EnableLiveStreamRequest$inboundSchema` instead. */
  export const inboundSchema = EnableLiveStreamRequest$inboundSchema;
  /** @deprecated use `EnableLiveStreamRequest$outboundSchema` instead. */
  export const outboundSchema = EnableLiveStreamRequest$outboundSchema;
  /** @deprecated use `EnableLiveStreamRequest$Outbound` instead. */
  export type Outbound = EnableLiveStreamRequest$Outbound;
}

export function enableLiveStreamRequestToJSON(
  enableLiveStreamRequest: EnableLiveStreamRequest,
): string {
  return JSON.stringify(
    EnableLiveStreamRequest$outboundSchema.parse(enableLiveStreamRequest),
  );
}

export function enableLiveStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<EnableLiveStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EnableLiveStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EnableLiveStreamRequest' from JSON`,
  );
}
