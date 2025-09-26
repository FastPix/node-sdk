import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type DeleteMediaFromPlaylistRequest = {
  /**
   * The unique id of the playlist you want to perform the operation on.
   */
  playlistId: string;
  mediaIdsRequest?: models.MediaIdsRequest | undefined;
};

/** @internal */
export const DeleteMediaFromPlaylistRequest$inboundSchema: z.ZodType<
  DeleteMediaFromPlaylistRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  playlistId: z.string(),
  MediaIdsRequest: models.MediaIdsRequest$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaIdsRequest": "mediaIdsRequest",
  });
});

/** @internal */
export type DeleteMediaFromPlaylistRequest$Outbound = {
  playlistId: string;
  MediaIdsRequest?: models.MediaIdsRequest$Outbound | undefined;
};

/** @internal */
export const DeleteMediaFromPlaylistRequest$outboundSchema: z.ZodType<
  DeleteMediaFromPlaylistRequest$Outbound,
  z.ZodTypeDef,
  DeleteMediaFromPlaylistRequest
> = z.object({
  playlistId: z.string(),
  mediaIdsRequest: models.MediaIdsRequest$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    mediaIdsRequest: "MediaIdsRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMediaFromPlaylistRequest$ {
  /** @deprecated use `DeleteMediaFromPlaylistRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteMediaFromPlaylistRequest$inboundSchema;
  /** @deprecated use `DeleteMediaFromPlaylistRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteMediaFromPlaylistRequest$outboundSchema;
  /** @deprecated use `DeleteMediaFromPlaylistRequest$Outbound` instead. */
  export type Outbound = DeleteMediaFromPlaylistRequest$Outbound;
}

export function deleteMediaFromPlaylistRequestToJSON(
  deleteMediaFromPlaylistRequest: DeleteMediaFromPlaylistRequest,
): string {
  return JSON.stringify(
    DeleteMediaFromPlaylistRequest$outboundSchema.parse(
      deleteMediaFromPlaylistRequest,
    ),
  );
}

export function deleteMediaFromPlaylistRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteMediaFromPlaylistRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteMediaFromPlaylistRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteMediaFromPlaylistRequest' from JSON`,
  );
}
