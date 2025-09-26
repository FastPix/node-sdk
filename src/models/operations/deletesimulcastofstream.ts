import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteSimulcastOfStreamRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
  /**
   * When you create the new simulcast, FastPix assign a universal unique identifier which can contain a maximum of 255 characters.
   */
  simulcastId: string;
};

/** @internal */
export const DeleteSimulcastOfStreamRequest$inboundSchema: z.ZodType<
  DeleteSimulcastOfStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
  simulcastId: z.string(),
});

/** @internal */
export type DeleteSimulcastOfStreamRequest$Outbound = {
  streamId: string;
  simulcastId: string;
};

/** @internal */
export const DeleteSimulcastOfStreamRequest$outboundSchema: z.ZodType<
  DeleteSimulcastOfStreamRequest$Outbound,
  z.ZodTypeDef,
  DeleteSimulcastOfStreamRequest
> = z.object({
  streamId: z.string(),
  simulcastId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteSimulcastOfStreamRequest$ {
  /** @deprecated use `DeleteSimulcastOfStreamRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteSimulcastOfStreamRequest$inboundSchema;
  /** @deprecated use `DeleteSimulcastOfStreamRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteSimulcastOfStreamRequest$outboundSchema;
  /** @deprecated use `DeleteSimulcastOfStreamRequest$Outbound` instead. */
  export type Outbound = DeleteSimulcastOfStreamRequest$Outbound;
}

export function deleteSimulcastOfStreamRequestToJSON(
  deleteSimulcastOfStreamRequest: DeleteSimulcastOfStreamRequest,
): string {
  return JSON.stringify(
    DeleteSimulcastOfStreamRequest$outboundSchema.parse(
      deleteSimulcastOfStreamRequest,
    ),
  );
}

export function deleteSimulcastOfStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteSimulcastOfStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteSimulcastOfStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteSimulcastOfStreamRequest' from JSON`,
  );
}
