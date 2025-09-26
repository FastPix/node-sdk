import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DisableLiveStreamRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
};

/** @internal */
export const DisableLiveStreamRequest$inboundSchema: z.ZodType<
  DisableLiveStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
});

/** @internal */
export type DisableLiveStreamRequest$Outbound = {
  streamId: string;
};

/** @internal */
export const DisableLiveStreamRequest$outboundSchema: z.ZodType<
  DisableLiveStreamRequest$Outbound,
  z.ZodTypeDef,
  DisableLiveStreamRequest
> = z.object({
  streamId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DisableLiveStreamRequest$ {
  /** @deprecated use `DisableLiveStreamRequest$inboundSchema` instead. */
  export const inboundSchema = DisableLiveStreamRequest$inboundSchema;
  /** @deprecated use `DisableLiveStreamRequest$outboundSchema` instead. */
  export const outboundSchema = DisableLiveStreamRequest$outboundSchema;
  /** @deprecated use `DisableLiveStreamRequest$Outbound` instead. */
  export type Outbound = DisableLiveStreamRequest$Outbound;
}

export function disableLiveStreamRequestToJSON(
  disableLiveStreamRequest: DisableLiveStreamRequest,
): string {
  return JSON.stringify(
    DisableLiveStreamRequest$outboundSchema.parse(disableLiveStreamRequest),
  );
}

export function disableLiveStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<DisableLiveStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DisableLiveStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DisableLiveStreamRequest' from JSON`,
  );
}
