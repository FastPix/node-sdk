import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAllPlaylistsRequest = {
  /**
   * The number of playlists to return (default is 10, max is 50).
   */
  limit?: number | undefined;
  /**
   * The page number to retrieve, starting from 1. Used for paginating the playlist results.
   */
  offset?: number | undefined;
};

/** @internal */
export const GetAllPlaylistsRequest$inboundSchema: z.ZodType<
  GetAllPlaylistsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(10),
  offset: z.number().int().default(1),
});

/** @internal */
export type GetAllPlaylistsRequest$Outbound = {
  limit: number;
  offset: number;
};

/** @internal */
export const GetAllPlaylistsRequest$outboundSchema: z.ZodType<
  GetAllPlaylistsRequest$Outbound,
  z.ZodTypeDef,
  GetAllPlaylistsRequest
> = z.object({
  limit: z.number().int().default(10),
  offset: z.number().int().default(1),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllPlaylistsRequest$ {
  /** @deprecated use `GetAllPlaylistsRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllPlaylistsRequest$inboundSchema;
  /** @deprecated use `GetAllPlaylistsRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllPlaylistsRequest$outboundSchema;
  /** @deprecated use `GetAllPlaylistsRequest$Outbound` instead. */
  export type Outbound = GetAllPlaylistsRequest$Outbound;
}

export function getAllPlaylistsRequestToJSON(
  getAllPlaylistsRequest: GetAllPlaylistsRequest,
): string {
  return JSON.stringify(
    GetAllPlaylistsRequest$outboundSchema.parse(getAllPlaylistsRequest),
  );
}

export function getAllPlaylistsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAllPlaylistsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllPlaylistsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllPlaylistsRequest' from JSON`,
  );
}
