import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdateSpecificSimulcastOfStreamRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
  /**
   * When you create the new simulcast, FastPix assign a universal unique identifier which can contain a maximum of 255 characters.
   */
  simulcastId: string;
  simulcastUpdateRequest: models.SimulcastUpdateRequest;
};

/** @internal */
export const UpdateSpecificSimulcastOfStreamRequest$inboundSchema: z.ZodType<
  UpdateSpecificSimulcastOfStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
  simulcastId: z.string(),
  simulcastUpdateRequest: models.SimulcastUpdateRequest$inboundSchema,
});

/** @internal */
export type UpdateSpecificSimulcastOfStreamRequest$Outbound = {
  streamId: string;
  simulcastId: string;
  simulcastUpdateRequest: models.SimulcastUpdateRequest$Outbound;
};

/** @internal */
export const UpdateSpecificSimulcastOfStreamRequest$outboundSchema: z.ZodType<
  UpdateSpecificSimulcastOfStreamRequest$Outbound,
  z.ZodTypeDef,
  UpdateSpecificSimulcastOfStreamRequest
> = z.object({
  streamId: z.string(),
  simulcastId: z.string(),
  simulcastUpdateRequest: models.SimulcastUpdateRequest$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSpecificSimulcastOfStreamRequest$ {
  /** @deprecated use `UpdateSpecificSimulcastOfStreamRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateSpecificSimulcastOfStreamRequest$inboundSchema;
  /** @deprecated use `UpdateSpecificSimulcastOfStreamRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateSpecificSimulcastOfStreamRequest$outboundSchema;
  /** @deprecated use `UpdateSpecificSimulcastOfStreamRequest$Outbound` instead. */
  export type Outbound = UpdateSpecificSimulcastOfStreamRequest$Outbound;
}

export function updateSpecificSimulcastOfStreamRequestToJSON(
  updateSpecificSimulcastOfStreamRequest:
    UpdateSpecificSimulcastOfStreamRequest,
): string {
  return JSON.stringify(
    UpdateSpecificSimulcastOfStreamRequest$outboundSchema.parse(
      updateSpecificSimulcastOfStreamRequest,
    ),
  );
}

export function updateSpecificSimulcastOfStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSpecificSimulcastOfStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateSpecificSimulcastOfStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSpecificSimulcastOfStreamRequest' from JSON`,
  );
}
