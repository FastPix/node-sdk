import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type GetDrmConfigurationByIdRequest = {
  /**
   * The unique identifier of the DRM configuration.
   */
  drmConfigurationId: string;
};

/**
 * DRM configuration retrieved successfully
 */
export type GetDrmConfigurationByIdResponse = {
  success?: boolean | undefined;
  data?: models.DrmIdResponse | undefined;
};

/** @internal */
export const GetDrmConfigurationByIdRequest$inboundSchema: z.ZodType<
  GetDrmConfigurationByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  drmConfigurationId: z.string(),
});

/** @internal */
export type GetDrmConfigurationByIdRequest$Outbound = {
  drmConfigurationId: string;
};

/** @internal */
export const GetDrmConfigurationByIdRequest$outboundSchema: z.ZodType<
  GetDrmConfigurationByIdRequest$Outbound,
  z.ZodTypeDef,
  GetDrmConfigurationByIdRequest
> = z.object({
  drmConfigurationId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDrmConfigurationByIdRequest$ {
  /** @deprecated use `GetDrmConfigurationByIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetDrmConfigurationByIdRequest$inboundSchema;
  /** @deprecated use `GetDrmConfigurationByIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetDrmConfigurationByIdRequest$outboundSchema;
  /** @deprecated use `GetDrmConfigurationByIdRequest$Outbound` instead. */
  export type Outbound = GetDrmConfigurationByIdRequest$Outbound;
}

export function getDrmConfigurationByIdRequestToJSON(
  getDrmConfigurationByIdRequest: GetDrmConfigurationByIdRequest,
): string {
  return JSON.stringify(
    GetDrmConfigurationByIdRequest$outboundSchema.parse(
      getDrmConfigurationByIdRequest,
    ),
  );
}

export function getDrmConfigurationByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDrmConfigurationByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDrmConfigurationByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDrmConfigurationByIdRequest' from JSON`,
  );
}

/** @internal */
export const GetDrmConfigurationByIdResponse$inboundSchema: z.ZodType<
  GetDrmConfigurationByIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.DrmIdResponse$inboundSchema.optional(),
});

/** @internal */
export type GetDrmConfigurationByIdResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.DrmIdResponse$Outbound | undefined;
};

/** @internal */
export const GetDrmConfigurationByIdResponse$outboundSchema: z.ZodType<
  GetDrmConfigurationByIdResponse$Outbound,
  z.ZodTypeDef,
  GetDrmConfigurationByIdResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.DrmIdResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDrmConfigurationByIdResponse$ {
  /** @deprecated use `GetDrmConfigurationByIdResponse$inboundSchema` instead. */
  export const inboundSchema = GetDrmConfigurationByIdResponse$inboundSchema;
  /** @deprecated use `GetDrmConfigurationByIdResponse$outboundSchema` instead. */
  export const outboundSchema = GetDrmConfigurationByIdResponse$outboundSchema;
  /** @deprecated use `GetDrmConfigurationByIdResponse$Outbound` instead. */
  export type Outbound = GetDrmConfigurationByIdResponse$Outbound;
}

export function getDrmConfigurationByIdResponseToJSON(
  getDrmConfigurationByIdResponse: GetDrmConfigurationByIdResponse,
): string {
  return JSON.stringify(
    GetDrmConfigurationByIdResponse$outboundSchema.parse(
      getDrmConfigurationByIdResponse,
    ),
  );
}

export function getDrmConfigurationByIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetDrmConfigurationByIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDrmConfigurationByIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDrmConfigurationByIdResponse' from JSON`,
  );
}
