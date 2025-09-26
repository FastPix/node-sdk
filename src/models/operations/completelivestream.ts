import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CompleteLiveStreamRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
};

/** @internal */
export const CompleteLiveStreamRequest$inboundSchema: z.ZodType<
  CompleteLiveStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
});

/** @internal */
export type CompleteLiveStreamRequest$Outbound = {
  streamId: string;
};

/** @internal */
export const CompleteLiveStreamRequest$outboundSchema: z.ZodType<
  CompleteLiveStreamRequest$Outbound,
  z.ZodTypeDef,
  CompleteLiveStreamRequest
> = z.object({
  streamId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompleteLiveStreamRequest$ {
  /** @deprecated use `CompleteLiveStreamRequest$inboundSchema` instead. */
  export const inboundSchema = CompleteLiveStreamRequest$inboundSchema;
  /** @deprecated use `CompleteLiveStreamRequest$outboundSchema` instead. */
  export const outboundSchema = CompleteLiveStreamRequest$outboundSchema;
  /** @deprecated use `CompleteLiveStreamRequest$Outbound` instead. */
  export type Outbound = CompleteLiveStreamRequest$Outbound;
}

export function completeLiveStreamRequestToJSON(
  completeLiveStreamRequest: CompleteLiveStreamRequest,
): string {
  return JSON.stringify(
    CompleteLiveStreamRequest$outboundSchema.parse(completeLiveStreamRequest),
  );
}

export function completeLiveStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<CompleteLiveStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompleteLiveStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompleteLiveStreamRequest' from JSON`,
  );
}
