import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type ChangeMediaOrderInPlaylistRequest = {
  /**
   * The unique id of the playlist you want to perform the operation on.
   */
  playlistId: string;
  mediaIdsRequest: models.MediaIdsRequest;
};

/** @internal */
export const ChangeMediaOrderInPlaylistRequest$inboundSchema: z.ZodType<
  ChangeMediaOrderInPlaylistRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  playlistId: z.string(),
  MediaIdsRequest: models.MediaIdsRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "MediaIdsRequest": "mediaIdsRequest",
  });
});

/** @internal */
export type ChangeMediaOrderInPlaylistRequest$Outbound = {
  playlistId: string;
  MediaIdsRequest: models.MediaIdsRequest$Outbound;
};

/** @internal */
export const ChangeMediaOrderInPlaylistRequest$outboundSchema: z.ZodType<
  ChangeMediaOrderInPlaylistRequest$Outbound,
  z.ZodTypeDef,
  ChangeMediaOrderInPlaylistRequest
> = z.object({
  playlistId: z.string(),
  mediaIdsRequest: models.MediaIdsRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    mediaIdsRequest: "MediaIdsRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChangeMediaOrderInPlaylistRequest$ {
  /** @deprecated use `ChangeMediaOrderInPlaylistRequest$inboundSchema` instead. */
  export const inboundSchema = ChangeMediaOrderInPlaylistRequest$inboundSchema;
  /** @deprecated use `ChangeMediaOrderInPlaylistRequest$outboundSchema` instead. */
  export const outboundSchema =
    ChangeMediaOrderInPlaylistRequest$outboundSchema;
  /** @deprecated use `ChangeMediaOrderInPlaylistRequest$Outbound` instead. */
  export type Outbound = ChangeMediaOrderInPlaylistRequest$Outbound;
}

export function changeMediaOrderInPlaylistRequestToJSON(
  changeMediaOrderInPlaylistRequest: ChangeMediaOrderInPlaylistRequest,
): string {
  return JSON.stringify(
    ChangeMediaOrderInPlaylistRequest$outboundSchema.parse(
      changeMediaOrderInPlaylistRequest,
    ),
  );
}

export function changeMediaOrderInPlaylistRequestFromJSON(
  jsonString: string,
): SafeParseResult<ChangeMediaOrderInPlaylistRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChangeMediaOrderInPlaylistRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChangeMediaOrderInPlaylistRequest' from JSON`,
  );
}
