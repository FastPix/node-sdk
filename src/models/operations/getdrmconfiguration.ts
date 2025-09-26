import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type GetDrmConfigurationRequest = {
  /**
   * Offset determines the starting point for data retrieval within a paginated list.
   */
  offset?: number | undefined;
  /**
   * Limit specifies the maximum number of items to display per page.
   */
  limit?: number | undefined;
};

/**
 * DRM configuration(s) retrieved successfully
 */
export type GetDrmConfigurationResponse = {
  success?: boolean | undefined;
  data?: Array<models.DrmIdResponse> | undefined;
  /**
   * Pagination organizes content into pages for better readability and navigation.
   */
  pagination?: models.Pagination | undefined;
};

/** @internal */
export const GetDrmConfigurationRequest$inboundSchema: z.ZodType<
  GetDrmConfigurationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  offset: z.number().int().default(1),
  limit: z.number().int().default(10),
});

/** @internal */
export type GetDrmConfigurationRequest$Outbound = {
  offset: number;
  limit: number;
};

/** @internal */
export const GetDrmConfigurationRequest$outboundSchema: z.ZodType<
  GetDrmConfigurationRequest$Outbound,
  z.ZodTypeDef,
  GetDrmConfigurationRequest
> = z.object({
  offset: z.number().int().default(1),
  limit: z.number().int().default(10),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDrmConfigurationRequest$ {
  /** @deprecated use `GetDrmConfigurationRequest$inboundSchema` instead. */
  export const inboundSchema = GetDrmConfigurationRequest$inboundSchema;
  /** @deprecated use `GetDrmConfigurationRequest$outboundSchema` instead. */
  export const outboundSchema = GetDrmConfigurationRequest$outboundSchema;
  /** @deprecated use `GetDrmConfigurationRequest$Outbound` instead. */
  export type Outbound = GetDrmConfigurationRequest$Outbound;
}

export function getDrmConfigurationRequestToJSON(
  getDrmConfigurationRequest: GetDrmConfigurationRequest,
): string {
  return JSON.stringify(
    GetDrmConfigurationRequest$outboundSchema.parse(getDrmConfigurationRequest),
  );
}

export function getDrmConfigurationRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDrmConfigurationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDrmConfigurationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDrmConfigurationRequest' from JSON`,
  );
}

/** @internal */
export const GetDrmConfigurationResponse$inboundSchema: z.ZodType<
  GetDrmConfigurationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.array(models.DrmIdResponse$inboundSchema).optional(),
  pagination: models.Pagination$inboundSchema.optional(),
});

/** @internal */
export type GetDrmConfigurationResponse$Outbound = {
  success?: boolean | undefined;
  data?: Array<models.DrmIdResponse$Outbound> | undefined;
  pagination?: models.Pagination$Outbound | undefined;
};

/** @internal */
export const GetDrmConfigurationResponse$outboundSchema: z.ZodType<
  GetDrmConfigurationResponse$Outbound,
  z.ZodTypeDef,
  GetDrmConfigurationResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.array(models.DrmIdResponse$outboundSchema).optional(),
  pagination: models.Pagination$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDrmConfigurationResponse$ {
  /** @deprecated use `GetDrmConfigurationResponse$inboundSchema` instead. */
  export const inboundSchema = GetDrmConfigurationResponse$inboundSchema;
  /** @deprecated use `GetDrmConfigurationResponse$outboundSchema` instead. */
  export const outboundSchema = GetDrmConfigurationResponse$outboundSchema;
  /** @deprecated use `GetDrmConfigurationResponse$Outbound` instead. */
  export type Outbound = GetDrmConfigurationResponse$Outbound;
}

export function getDrmConfigurationResponseToJSON(
  getDrmConfigurationResponse: GetDrmConfigurationResponse,
): string {
  return JSON.stringify(
    GetDrmConfigurationResponse$outboundSchema.parse(
      getDrmConfigurationResponse,
    ),
  );
}

export function getDrmConfigurationResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetDrmConfigurationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDrmConfigurationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDrmConfigurationResponse' from JSON`,
  );
}
