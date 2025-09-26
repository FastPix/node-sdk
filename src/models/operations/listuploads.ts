import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type ListUploadsRequest = {
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
export type ListUploadsResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: Array<models.DirectUpload> | undefined;
  /**
   * Pagination organizes content into pages for better readability and navigation.
   */
  pagination?: models.Pagination | undefined;
};

/** @internal */
export const ListUploadsRequest$inboundSchema: z.ZodType<
  ListUploadsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(10),
  offset: z.number().int().default(1),
  orderBy: models.SortOrder$inboundSchema.default("desc"),
});

/** @internal */
export type ListUploadsRequest$Outbound = {
  limit: number;
  offset: number;
  orderBy: string;
};

/** @internal */
export const ListUploadsRequest$outboundSchema: z.ZodType<
  ListUploadsRequest$Outbound,
  z.ZodTypeDef,
  ListUploadsRequest
> = z.object({
  limit: z.number().int().default(10),
  offset: z.number().int().default(1),
  orderBy: models.SortOrder$outboundSchema.default("desc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListUploadsRequest$ {
  /** @deprecated use `ListUploadsRequest$inboundSchema` instead. */
  export const inboundSchema = ListUploadsRequest$inboundSchema;
  /** @deprecated use `ListUploadsRequest$outboundSchema` instead. */
  export const outboundSchema = ListUploadsRequest$outboundSchema;
  /** @deprecated use `ListUploadsRequest$Outbound` instead. */
  export type Outbound = ListUploadsRequest$Outbound;
}

export function listUploadsRequestToJSON(
  listUploadsRequest: ListUploadsRequest,
): string {
  return JSON.stringify(
    ListUploadsRequest$outboundSchema.parse(listUploadsRequest),
  );
}

export function listUploadsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListUploadsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListUploadsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListUploadsRequest' from JSON`,
  );
}

/** @internal */
export const ListUploadsResponse$inboundSchema: z.ZodType<
  ListUploadsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.array(models.DirectUpload$inboundSchema).optional(),
  pagination: models.Pagination$inboundSchema.optional(),
});

/** @internal */
export type ListUploadsResponse$Outbound = {
  success?: boolean | undefined;
  data?: Array<models.DirectUpload$Outbound> | undefined;
  pagination?: models.Pagination$Outbound | undefined;
};

/** @internal */
export const ListUploadsResponse$outboundSchema: z.ZodType<
  ListUploadsResponse$Outbound,
  z.ZodTypeDef,
  ListUploadsResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.array(models.DirectUpload$outboundSchema).optional(),
  pagination: models.Pagination$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListUploadsResponse$ {
  /** @deprecated use `ListUploadsResponse$inboundSchema` instead. */
  export const inboundSchema = ListUploadsResponse$inboundSchema;
  /** @deprecated use `ListUploadsResponse$outboundSchema` instead. */
  export const outboundSchema = ListUploadsResponse$outboundSchema;
  /** @deprecated use `ListUploadsResponse$Outbound` instead. */
  export type Outbound = ListUploadsResponse$Outbound;
}

export function listUploadsResponseToJSON(
  listUploadsResponse: ListUploadsResponse,
): string {
  return JSON.stringify(
    ListUploadsResponse$outboundSchema.parse(listUploadsResponse),
  );
}

export function listUploadsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListUploadsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListUploadsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListUploadsResponse' from JSON`,
  );
}
