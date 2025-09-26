import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteLiveStreamRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
};

/** @internal */
export const DeleteLiveStreamRequest$inboundSchema: z.ZodType<
  DeleteLiveStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
});

/** @internal */
export type DeleteLiveStreamRequest$Outbound = {
  streamId: string;
};

/** @internal */
export const DeleteLiveStreamRequest$outboundSchema: z.ZodType<
  DeleteLiveStreamRequest$Outbound,
  z.ZodTypeDef,
  DeleteLiveStreamRequest
> = z.object({
  streamId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteLiveStreamRequest$ {
  /** @deprecated use `DeleteLiveStreamRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteLiveStreamRequest$inboundSchema;
  /** @deprecated use `DeleteLiveStreamRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteLiveStreamRequest$outboundSchema;
  /** @deprecated use `DeleteLiveStreamRequest$Outbound` instead. */
  export type Outbound = DeleteLiveStreamRequest$Outbound;
}

export function deleteLiveStreamRequestToJSON(
  deleteLiveStreamRequest: DeleteLiveStreamRequest,
): string {
  return JSON.stringify(
    DeleteLiveStreamRequest$outboundSchema.parse(deleteLiveStreamRequest),
  );
}

export function deleteLiveStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteLiveStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteLiveStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteLiveStreamRequest' from JSON`,
  );
}
