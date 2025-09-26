import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type ListMediaRequest = {
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
export type ListMediaResponse = {
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
export const ListMediaRequest$inboundSchema: z.ZodType<
  ListMediaRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(10),
  offset: z.number().int().default(1),
  orderBy: models.SortOrder$inboundSchema.default("desc"),
});

/** @internal */
export type ListMediaRequest$Outbound = {
  limit: number;
  offset: number;
  orderBy: string;
};

/** @internal */
export const ListMediaRequest$outboundSchema: z.ZodType<
  ListMediaRequest$Outbound,
  z.ZodTypeDef,
  ListMediaRequest
> = z.object({
  limit: z.number().int().default(10),
  offset: z.number().int().default(1),
  orderBy: models.SortOrder$outboundSchema.default("desc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMediaRequest$ {
  /** @deprecated use `ListMediaRequest$inboundSchema` instead. */
  export const inboundSchema = ListMediaRequest$inboundSchema;
  /** @deprecated use `ListMediaRequest$outboundSchema` instead. */
  export const outboundSchema = ListMediaRequest$outboundSchema;
  /** @deprecated use `ListMediaRequest$Outbound` instead. */
  export type Outbound = ListMediaRequest$Outbound;
}

export function listMediaRequestToJSON(
  listMediaRequest: ListMediaRequest,
): string {
  return JSON.stringify(
    ListMediaRequest$outboundSchema.parse(listMediaRequest),
  );
}

export function listMediaRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListMediaRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMediaRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMediaRequest' from JSON`,
  );
}

/** @internal */
export const ListMediaResponse$inboundSchema: z.ZodType<
  ListMediaResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.array(models.Media$inboundSchema).optional(),
  pagination: models.Pagination$inboundSchema.optional(),
});

/** @internal */
export type ListMediaResponse$Outbound = {
  success?: boolean | undefined;
  data?: Array<models.Media$Outbound> | undefined;
  pagination?: models.Pagination$Outbound | undefined;
};

/** @internal */
export const ListMediaResponse$outboundSchema: z.ZodType<
  ListMediaResponse$Outbound,
  z.ZodTypeDef,
  ListMediaResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.array(models.Media$outboundSchema).optional(),
  pagination: models.Pagination$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMediaResponse$ {
  /** @deprecated use `ListMediaResponse$inboundSchema` instead. */
  export const inboundSchema = ListMediaResponse$inboundSchema;
  /** @deprecated use `ListMediaResponse$outboundSchema` instead. */
  export const outboundSchema = ListMediaResponse$outboundSchema;
  /** @deprecated use `ListMediaResponse$Outbound` instead. */
  export type Outbound = ListMediaResponse$Outbound;
}

export function listMediaResponseToJSON(
  listMediaResponse: ListMediaResponse,
): string {
  return JSON.stringify(
    ListMediaResponse$outboundSchema.parse(listMediaResponse),
  );
}

export function listMediaResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListMediaResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMediaResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMediaResponse' from JSON`,
  );
}
