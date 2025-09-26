import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdateAPlaylistRequest = {
  /**
   * The unique id of the playlist you want to retrieve.
   */
  playlistId: string;
  updatePlaylistRequest: models.UpdatePlaylistRequest;
};

/** @internal */
export const UpdateAPlaylistRequest$inboundSchema: z.ZodType<
  UpdateAPlaylistRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  playlistId: z.string(),
  UpdatePlaylistRequest: models.UpdatePlaylistRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "UpdatePlaylistRequest": "updatePlaylistRequest",
  });
});

/** @internal */
export type UpdateAPlaylistRequest$Outbound = {
  playlistId: string;
  UpdatePlaylistRequest: models.UpdatePlaylistRequest$Outbound;
};

/** @internal */
export const UpdateAPlaylistRequest$outboundSchema: z.ZodType<
  UpdateAPlaylistRequest$Outbound,
  z.ZodTypeDef,
  UpdateAPlaylistRequest
> = z.object({
  playlistId: z.string(),
  updatePlaylistRequest: models.UpdatePlaylistRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    updatePlaylistRequest: "UpdatePlaylistRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAPlaylistRequest$ {
  /** @deprecated use `UpdateAPlaylistRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAPlaylistRequest$inboundSchema;
  /** @deprecated use `UpdateAPlaylistRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAPlaylistRequest$outboundSchema;
  /** @deprecated use `UpdateAPlaylistRequest$Outbound` instead. */
  export type Outbound = UpdateAPlaylistRequest$Outbound;
}

export function updateAPlaylistRequestToJSON(
  updateAPlaylistRequest: UpdateAPlaylistRequest,
): string {
  return JSON.stringify(
    UpdateAPlaylistRequest$outboundSchema.parse(updateAPlaylistRequest),
  );
}

export function updateAPlaylistRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAPlaylistRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAPlaylistRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAPlaylistRequest' from JSON`,
  );
}
