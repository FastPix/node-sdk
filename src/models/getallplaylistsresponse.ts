import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";
import {
  PlaylistItem,
  PlaylistItem$inboundSchema,
  PlaylistItem$Outbound,
  PlaylistItem$outboundSchema,
} from "./playlistitem.js";

export type GetAllPlaylistsResponse = {
  success?: boolean | undefined;
  data?: Array<PlaylistItem> | undefined;
  /**
   * Pagination organizes content into pages for better readability and navigation.
   */
  pagination?: Pagination | undefined;
};

/** @internal */
export const GetAllPlaylistsResponse$inboundSchema: z.ZodType<
  GetAllPlaylistsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.array(PlaylistItem$inboundSchema).optional(),
  pagination: Pagination$inboundSchema.optional(),
});

/** @internal */
export type GetAllPlaylistsResponse$Outbound = {
  success?: boolean | undefined;
  data?: Array<PlaylistItem$Outbound> | undefined;
  pagination?: Pagination$Outbound | undefined;
};

/** @internal */
export const GetAllPlaylistsResponse$outboundSchema: z.ZodType<
  GetAllPlaylistsResponse$Outbound,
  z.ZodTypeDef,
  GetAllPlaylistsResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.array(PlaylistItem$outboundSchema).optional(),
  pagination: Pagination$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllPlaylistsResponse$ {
  /** @deprecated use `GetAllPlaylistsResponse$inboundSchema` instead. */
  export const inboundSchema = GetAllPlaylistsResponse$inboundSchema;
  /** @deprecated use `GetAllPlaylistsResponse$outboundSchema` instead. */
  export const outboundSchema = GetAllPlaylistsResponse$outboundSchema;
  /** @deprecated use `GetAllPlaylistsResponse$Outbound` instead. */
  export type Outbound = GetAllPlaylistsResponse$Outbound;
}

export function getAllPlaylistsResponseToJSON(
  getAllPlaylistsResponse: GetAllPlaylistsResponse,
): string {
  return JSON.stringify(
    GetAllPlaylistsResponse$outboundSchema.parse(getAllPlaylistsResponse),
  );
}

export function getAllPlaylistsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAllPlaylistsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllPlaylistsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllPlaylistsResponse' from JSON`,
  );
}
