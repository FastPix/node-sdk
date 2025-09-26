import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteAPlaylistRequest = {
  /**
   * The unique id of the playlist you want to delete.
   */
  playlistId: string;
};

/** @internal */
export const DeleteAPlaylistRequest$inboundSchema: z.ZodType<
  DeleteAPlaylistRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  playlistId: z.string(),
});

/** @internal */
export type DeleteAPlaylistRequest$Outbound = {
  playlistId: string;
};

/** @internal */
export const DeleteAPlaylistRequest$outboundSchema: z.ZodType<
  DeleteAPlaylistRequest$Outbound,
  z.ZodTypeDef,
  DeleteAPlaylistRequest
> = z.object({
  playlistId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAPlaylistRequest$ {
  /** @deprecated use `DeleteAPlaylistRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteAPlaylistRequest$inboundSchema;
  /** @deprecated use `DeleteAPlaylistRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteAPlaylistRequest$outboundSchema;
  /** @deprecated use `DeleteAPlaylistRequest$Outbound` instead. */
  export type Outbound = DeleteAPlaylistRequest$Outbound;
}

export function deleteAPlaylistRequestToJSON(
  deleteAPlaylistRequest: DeleteAPlaylistRequest,
): string {
  return JSON.stringify(
    DeleteAPlaylistRequest$outboundSchema.parse(deleteAPlaylistRequest),
  );
}

export function deleteAPlaylistRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteAPlaylistRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteAPlaylistRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteAPlaylistRequest' from JSON`,
  );
}
