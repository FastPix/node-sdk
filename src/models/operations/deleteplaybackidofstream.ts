import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeletePlaybackIdOfStreamRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
  /**
   * Unique identifier for the playbackId
   */
  playbackId: string;
};

/** @internal */
export const DeletePlaybackIdOfStreamRequest$inboundSchema: z.ZodType<
  DeletePlaybackIdOfStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
  playbackId: z.string(),
});

/** @internal */
export type DeletePlaybackIdOfStreamRequest$Outbound = {
  streamId: string;
  playbackId: string;
};

/** @internal */
export const DeletePlaybackIdOfStreamRequest$outboundSchema: z.ZodType<
  DeletePlaybackIdOfStreamRequest$Outbound,
  z.ZodTypeDef,
  DeletePlaybackIdOfStreamRequest
> = z.object({
  streamId: z.string(),
  playbackId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeletePlaybackIdOfStreamRequest$ {
  /** @deprecated use `DeletePlaybackIdOfStreamRequest$inboundSchema` instead. */
  export const inboundSchema = DeletePlaybackIdOfStreamRequest$inboundSchema;
  /** @deprecated use `DeletePlaybackIdOfStreamRequest$outboundSchema` instead. */
  export const outboundSchema = DeletePlaybackIdOfStreamRequest$outboundSchema;
  /** @deprecated use `DeletePlaybackIdOfStreamRequest$Outbound` instead. */
  export type Outbound = DeletePlaybackIdOfStreamRequest$Outbound;
}

export function deletePlaybackIdOfStreamRequestToJSON(
  deletePlaybackIdOfStreamRequest: DeletePlaybackIdOfStreamRequest,
): string {
  return JSON.stringify(
    DeletePlaybackIdOfStreamRequest$outboundSchema.parse(
      deletePlaybackIdOfStreamRequest,
    ),
  );
}

export function deletePlaybackIdOfStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeletePlaybackIdOfStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeletePlaybackIdOfStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeletePlaybackIdOfStreamRequest' from JSON`,
  );
}
