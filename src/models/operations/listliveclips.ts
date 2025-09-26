import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type ListLiveClipsRequest = {
  /**
   * The stream Id is unique identifier assigned to the live stream.
   */
  livestreamId: string;
  /**
   * Limit specifies the maximum number of items to display per page.
   */
  limit?: number | undefined;
  /**
   * Offset determines the starting point for data retrieval within a paginated list.
   */
  offset?: number | undefined;
  /**
   * The values in the list can be arranged in two ways: DESC (Descending) or ASC (Ascending).
   */
  orderBy?: models.SortOrder | undefined;
};

/**
 * List of video media
 */
export type ListLiveClipsResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: Array<models.Media> | undefined;
  /**
   * Pagination organizes content into pages for better readability and navigation.
   */
  pagination?: models.Pagination | undefined;
};

/** @internal */
export const ListLiveClipsRequest$inboundSchema: z.ZodType<
  ListLiveClipsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  livestreamId: z.string(),
  limit: z.number().int().default(10),
  offset: z.number().int().default(1),
  orderBy: models.SortOrder$inboundSchema.default("desc"),
});

/** @internal */
export type ListLiveClipsRequest$Outbound = {
  livestreamId: string;
  limit: number;
  offset: number;
  orderBy: string;
};

/** @internal */
export const ListLiveClipsRequest$outboundSchema: z.ZodType<
  ListLiveClipsRequest$Outbound,
  z.ZodTypeDef,
  ListLiveClipsRequest
> = z.object({
  livestreamId: z.string(),
  limit: z.number().int().default(10),
  offset: z.number().int().default(1),
  orderBy: models.SortOrder$outboundSchema.default("desc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListLiveClipsRequest$ {
  /** @deprecated use `ListLiveClipsRequest$inboundSchema` instead. */
  export const inboundSchema = ListLiveClipsRequest$inboundSchema;
  /** @deprecated use `ListLiveClipsRequest$outboundSchema` instead. */
  export const outboundSchema = ListLiveClipsRequest$outboundSchema;
  /** @deprecated use `ListLiveClipsRequest$Outbound` instead. */
  export type Outbound = ListLiveClipsRequest$Outbound;
}

export function listLiveClipsRequestToJSON(
  listLiveClipsRequest: ListLiveClipsRequest,
): string {
  return JSON.stringify(
    ListLiveClipsRequest$outboundSchema.parse(listLiveClipsRequest),
  );
}

export function listLiveClipsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListLiveClipsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListLiveClipsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListLiveClipsRequest' from JSON`,
  );
}

/** @internal */
export const ListLiveClipsResponse$inboundSchema: z.ZodType<
  ListLiveClipsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.array(models.Media$inboundSchema).optional(),
  pagination: models.Pagination$inboundSchema.optional(),
});

/** @internal */
export type ListLiveClipsResponse$Outbound = {
  success?: boolean | undefined;
  data?: Array<models.Media$Outbound> | undefined;
  pagination?: models.Pagination$Outbound | undefined;
};

/** @internal */
export const ListLiveClipsResponse$outboundSchema: z.ZodType<
  ListLiveClipsResponse$Outbound,
  z.ZodTypeDef,
  ListLiveClipsResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.array(models.Media$outboundSchema).optional(),
  pagination: models.Pagination$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListLiveClipsResponse$ {
  /** @deprecated use `ListLiveClipsResponse$inboundSchema` instead. */
  export const inboundSchema = ListLiveClipsResponse$inboundSchema;
  /** @deprecated use `ListLiveClipsResponse$outboundSchema` instead. */
  export const outboundSchema = ListLiveClipsResponse$outboundSchema;
  /** @deprecated use `ListLiveClipsResponse$Outbound` instead. */
  export type Outbound = ListLiveClipsResponse$Outbound;
}

export function listLiveClipsResponseToJSON(
  listLiveClipsResponse: ListLiveClipsResponse,
): string {
  return JSON.stringify(
    ListLiveClipsResponse$outboundSchema.parse(listLiveClipsResponse),
  );
}

export function listLiveClipsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListLiveClipsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListLiveClipsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListLiveClipsResponse' from JSON`,
  );
}
