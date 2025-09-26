import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetPlaylistByIdRequest = {
  /**
   * The unique id of the playlist you want to retrieve.
   */
  playlistId: string;
};

/** @internal */
export const GetPlaylistByIdRequest$inboundSchema: z.ZodType<
  GetPlaylistByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  playlistId: z.string(),
});

/** @internal */
export type GetPlaylistByIdRequest$Outbound = {
  playlistId: string;
};

/** @internal */
export const GetPlaylistByIdRequest$outboundSchema: z.ZodType<
  GetPlaylistByIdRequest$Outbound,
  z.ZodTypeDef,
  GetPlaylistByIdRequest
> = z.object({
  playlistId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPlaylistByIdRequest$ {
  /** @deprecated use `GetPlaylistByIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetPlaylistByIdRequest$inboundSchema;
  /** @deprecated use `GetPlaylistByIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetPlaylistByIdRequest$outboundSchema;
  /** @deprecated use `GetPlaylistByIdRequest$Outbound` instead. */
  export type Outbound = GetPlaylistByIdRequest$Outbound;
}

export function getPlaylistByIdRequestToJSON(
  getPlaylistByIdRequest: GetPlaylistByIdRequest,
): string {
  return JSON.stringify(
    GetPlaylistByIdRequest$outboundSchema.parse(getPlaylistByIdRequest),
  );
}

export function getPlaylistByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetPlaylistByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPlaylistByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPlaylistByIdRequest' from JSON`,
  );
}
