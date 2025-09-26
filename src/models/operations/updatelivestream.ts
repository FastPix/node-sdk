import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdateLiveStreamRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
  patchLiveStreamRequest: models.PatchLiveStreamRequest;
};

/** @internal */
export const UpdateLiveStreamRequest$inboundSchema: z.ZodType<
  UpdateLiveStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
  patchLiveStreamRequest: models.PatchLiveStreamRequest$inboundSchema,
});

/** @internal */
export type UpdateLiveStreamRequest$Outbound = {
  streamId: string;
  patchLiveStreamRequest: models.PatchLiveStreamRequest$Outbound;
};

/** @internal */
export const UpdateLiveStreamRequest$outboundSchema: z.ZodType<
  UpdateLiveStreamRequest$Outbound,
  z.ZodTypeDef,
  UpdateLiveStreamRequest
> = z.object({
  streamId: z.string(),
  patchLiveStreamRequest: models.PatchLiveStreamRequest$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateLiveStreamRequest$ {
  /** @deprecated use `UpdateLiveStreamRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateLiveStreamRequest$inboundSchema;
  /** @deprecated use `UpdateLiveStreamRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateLiveStreamRequest$outboundSchema;
  /** @deprecated use `UpdateLiveStreamRequest$Outbound` instead. */
  export type Outbound = UpdateLiveStreamRequest$Outbound;
}

export function updateLiveStreamRequestToJSON(
  updateLiveStreamRequest: UpdateLiveStreamRequest,
): string {
  return JSON.stringify(
    UpdateLiveStreamRequest$outboundSchema.parse(updateLiveStreamRequest),
  );
}

export function updateLiveStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateLiveStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateLiveStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateLiveStreamRequest' from JSON`,
  );
}
