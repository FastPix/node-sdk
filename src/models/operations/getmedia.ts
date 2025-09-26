import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type GetMediaRequest = {
  /**
   * The Media Id is assigned a universal unique identifier, which can contain a maximum of 255 characters.
   */
  mediaId: string;
};

/**
 * Get a video media by id
 */
export type GetMediaResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  data?: models.Media | undefined;
};

/** @internal */
export const GetMediaRequest$inboundSchema: z.ZodType<
  GetMediaRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
});

/** @internal */
export type GetMediaRequest$Outbound = {
  mediaId: string;
};

/** @internal */
export const GetMediaRequest$outboundSchema: z.ZodType<
  GetMediaRequest$Outbound,
  z.ZodTypeDef,
  GetMediaRequest
> = z.object({
  mediaId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMediaRequest$ {
  /** @deprecated use `GetMediaRequest$inboundSchema` instead. */
  export const inboundSchema = GetMediaRequest$inboundSchema;
  /** @deprecated use `GetMediaRequest$outboundSchema` instead. */
  export const outboundSchema = GetMediaRequest$outboundSchema;
  /** @deprecated use `GetMediaRequest$Outbound` instead. */
  export type Outbound = GetMediaRequest$Outbound;
}

export function getMediaRequestToJSON(
  getMediaRequest: GetMediaRequest,
): string {
  return JSON.stringify(GetMediaRequest$outboundSchema.parse(getMediaRequest));
}

export function getMediaRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMediaRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMediaRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMediaRequest' from JSON`,
  );
}

/** @internal */
export const GetMediaResponse$inboundSchema: z.ZodType<
  GetMediaResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.Media$inboundSchema.optional(),
});

/** @internal */
export type GetMediaResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.Media$Outbound | undefined;
};

/** @internal */
export const GetMediaResponse$outboundSchema: z.ZodType<
  GetMediaResponse$Outbound,
  z.ZodTypeDef,
  GetMediaResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.Media$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMediaResponse$ {
  /** @deprecated use `GetMediaResponse$inboundSchema` instead. */
  export const inboundSchema = GetMediaResponse$inboundSchema;
  /** @deprecated use `GetMediaResponse$outboundSchema` instead. */
  export const outboundSchema = GetMediaResponse$outboundSchema;
  /** @deprecated use `GetMediaResponse$Outbound` instead. */
  export type Outbound = GetMediaResponse$Outbound;
}

export function getMediaResponseToJSON(
  getMediaResponse: GetMediaResponse,
): string {
  return JSON.stringify(
    GetMediaResponse$outboundSchema.parse(getMediaResponse),
  );
}

export function getMediaResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetMediaResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMediaResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMediaResponse' from JSON`,
  );
}
