import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type GetVideoViewDetailsRequest = {
  /**
   * Pass View id
   */
  viewId: string;
};

/**
 * Get a video view by id
 */
export type GetVideoViewDetailsResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: models.Views | undefined;
};

/** @internal */
export const GetVideoViewDetailsRequest$inboundSchema: z.ZodType<
  GetVideoViewDetailsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  viewId: z.string(),
});

/** @internal */
export type GetVideoViewDetailsRequest$Outbound = {
  viewId: string;
};

/** @internal */
export const GetVideoViewDetailsRequest$outboundSchema: z.ZodType<
  GetVideoViewDetailsRequest$Outbound,
  z.ZodTypeDef,
  GetVideoViewDetailsRequest
> = z.object({
  viewId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVideoViewDetailsRequest$ {
  /** @deprecated use `GetVideoViewDetailsRequest$inboundSchema` instead. */
  export const inboundSchema = GetVideoViewDetailsRequest$inboundSchema;
  /** @deprecated use `GetVideoViewDetailsRequest$outboundSchema` instead. */
  export const outboundSchema = GetVideoViewDetailsRequest$outboundSchema;
  /** @deprecated use `GetVideoViewDetailsRequest$Outbound` instead. */
  export type Outbound = GetVideoViewDetailsRequest$Outbound;
}

export function getVideoViewDetailsRequestToJSON(
  getVideoViewDetailsRequest: GetVideoViewDetailsRequest,
): string {
  return JSON.stringify(
    GetVideoViewDetailsRequest$outboundSchema.parse(getVideoViewDetailsRequest),
  );
}

export function getVideoViewDetailsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetVideoViewDetailsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetVideoViewDetailsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetVideoViewDetailsRequest' from JSON`,
  );
}

/** @internal */
export const GetVideoViewDetailsResponse$inboundSchema: z.ZodType<
  GetVideoViewDetailsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.Views$inboundSchema.optional(),
});

/** @internal */
export type GetVideoViewDetailsResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.Views$Outbound | undefined;
};

/** @internal */
export const GetVideoViewDetailsResponse$outboundSchema: z.ZodType<
  GetVideoViewDetailsResponse$Outbound,
  z.ZodTypeDef,
  GetVideoViewDetailsResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.Views$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVideoViewDetailsResponse$ {
  /** @deprecated use `GetVideoViewDetailsResponse$inboundSchema` instead. */
  export const inboundSchema = GetVideoViewDetailsResponse$inboundSchema;
  /** @deprecated use `GetVideoViewDetailsResponse$outboundSchema` instead. */
  export const outboundSchema = GetVideoViewDetailsResponse$outboundSchema;
  /** @deprecated use `GetVideoViewDetailsResponse$Outbound` instead. */
  export type Outbound = GetVideoViewDetailsResponse$Outbound;
}

export function getVideoViewDetailsResponseToJSON(
  getVideoViewDetailsResponse: GetVideoViewDetailsResponse,
): string {
  return JSON.stringify(
    GetVideoViewDetailsResponse$outboundSchema.parse(
      getVideoViewDetailsResponse,
    ),
  );
}

export function getVideoViewDetailsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetVideoViewDetailsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetVideoViewDetailsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetVideoViewDetailsResponse' from JSON`,
  );
}
