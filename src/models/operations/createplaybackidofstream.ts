import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type CreatePlaybackIdOfStreamRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
  playbackIdRequest: models.PlaybackIdRequest;
};

/** @internal */
export const CreatePlaybackIdOfStreamRequest$inboundSchema: z.ZodType<
  CreatePlaybackIdOfStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
  playbackIdRequest: models.PlaybackIdRequest$inboundSchema,
});

/** @internal */
export type CreatePlaybackIdOfStreamRequest$Outbound = {
  streamId: string;
  playbackIdRequest: models.PlaybackIdRequest$Outbound;
};

/** @internal */
export const CreatePlaybackIdOfStreamRequest$outboundSchema: z.ZodType<
  CreatePlaybackIdOfStreamRequest$Outbound,
  z.ZodTypeDef,
  CreatePlaybackIdOfStreamRequest
> = z.object({
  streamId: z.string(),
  playbackIdRequest: models.PlaybackIdRequest$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePlaybackIdOfStreamRequest$ {
  /** @deprecated use `CreatePlaybackIdOfStreamRequest$inboundSchema` instead. */
  export const inboundSchema = CreatePlaybackIdOfStreamRequest$inboundSchema;
  /** @deprecated use `CreatePlaybackIdOfStreamRequest$outboundSchema` instead. */
  export const outboundSchema = CreatePlaybackIdOfStreamRequest$outboundSchema;
  /** @deprecated use `CreatePlaybackIdOfStreamRequest$Outbound` instead. */
  export type Outbound = CreatePlaybackIdOfStreamRequest$Outbound;
}

export function createPlaybackIdOfStreamRequestToJSON(
  createPlaybackIdOfStreamRequest: CreatePlaybackIdOfStreamRequest,
): string {
  return JSON.stringify(
    CreatePlaybackIdOfStreamRequest$outboundSchema.parse(
      createPlaybackIdOfStreamRequest,
    ),
  );
}

export function createPlaybackIdOfStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreatePlaybackIdOfStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePlaybackIdOfStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePlaybackIdOfStreamRequest' from JSON`,
  );
}
