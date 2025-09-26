import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type GetPlaybackIdRequest = {
  mediaId: string;
  playbackId: string;
};

export type GetPlaybackIdData = {
  /**
   * The unique identifier for the playback ID.
   */
  id?: string | undefined;
  /**
   * Access policy for media content
   */
  accessPolicy?: models.AccessPolicy | undefined;
};

/**
 * Successfully retrieved playback ID details
 */
export type GetPlaybackIdResponse = {
  /**
   * Indicates if the request was successful or not.
   */
  success?: boolean | undefined;
  data?: GetPlaybackIdData | undefined;
};

/** @internal */
export const GetPlaybackIdRequest$inboundSchema: z.ZodType<
  GetPlaybackIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  playbackId: z.string(),
});

/** @internal */
export type GetPlaybackIdRequest$Outbound = {
  mediaId: string;
  playbackId: string;
};

/** @internal */
export const GetPlaybackIdRequest$outboundSchema: z.ZodType<
  GetPlaybackIdRequest$Outbound,
  z.ZodTypeDef,
  GetPlaybackIdRequest
> = z.object({
  mediaId: z.string(),
  playbackId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPlaybackIdRequest$ {
  /** @deprecated use `GetPlaybackIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetPlaybackIdRequest$inboundSchema;
  /** @deprecated use `GetPlaybackIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetPlaybackIdRequest$outboundSchema;
  /** @deprecated use `GetPlaybackIdRequest$Outbound` instead. */
  export type Outbound = GetPlaybackIdRequest$Outbound;
}

export function getPlaybackIdRequestToJSON(
  getPlaybackIdRequest: GetPlaybackIdRequest,
): string {
  return JSON.stringify(
    GetPlaybackIdRequest$outboundSchema.parse(getPlaybackIdRequest),
  );
}

export function getPlaybackIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetPlaybackIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPlaybackIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPlaybackIdRequest' from JSON`,
  );
}

/** @internal */
export const GetPlaybackIdData$inboundSchema: z.ZodType<
  GetPlaybackIdData,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  accessPolicy: models.AccessPolicy$inboundSchema.optional(),
});

/** @internal */
export type GetPlaybackIdData$Outbound = {
  id?: string | undefined;
  accessPolicy?: string | undefined;
};

/** @internal */
export const GetPlaybackIdData$outboundSchema: z.ZodType<
  GetPlaybackIdData$Outbound,
  z.ZodTypeDef,
  GetPlaybackIdData
> = z.object({
  id: z.string().optional(),
  accessPolicy: models.AccessPolicy$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPlaybackIdData$ {
  /** @deprecated use `GetPlaybackIdData$inboundSchema` instead. */
  export const inboundSchema = GetPlaybackIdData$inboundSchema;
  /** @deprecated use `GetPlaybackIdData$outboundSchema` instead. */
  export const outboundSchema = GetPlaybackIdData$outboundSchema;
  /** @deprecated use `GetPlaybackIdData$Outbound` instead. */
  export type Outbound = GetPlaybackIdData$Outbound;
}

export function getPlaybackIdDataToJSON(
  getPlaybackIdData: GetPlaybackIdData,
): string {
  return JSON.stringify(
    GetPlaybackIdData$outboundSchema.parse(getPlaybackIdData),
  );
}

export function getPlaybackIdDataFromJSON(
  jsonString: string,
): SafeParseResult<GetPlaybackIdData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPlaybackIdData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPlaybackIdData' from JSON`,
  );
}

/** @internal */
export const GetPlaybackIdResponse$inboundSchema: z.ZodType<
  GetPlaybackIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => GetPlaybackIdData$inboundSchema).optional(),
});

/** @internal */
export type GetPlaybackIdResponse$Outbound = {
  success?: boolean | undefined;
  data?: GetPlaybackIdData$Outbound | undefined;
};

/** @internal */
export const GetPlaybackIdResponse$outboundSchema: z.ZodType<
  GetPlaybackIdResponse$Outbound,
  z.ZodTypeDef,
  GetPlaybackIdResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => GetPlaybackIdData$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPlaybackIdResponse$ {
  /** @deprecated use `GetPlaybackIdResponse$inboundSchema` instead. */
  export const inboundSchema = GetPlaybackIdResponse$inboundSchema;
  /** @deprecated use `GetPlaybackIdResponse$outboundSchema` instead. */
  export const outboundSchema = GetPlaybackIdResponse$outboundSchema;
  /** @deprecated use `GetPlaybackIdResponse$Outbound` instead. */
  export type Outbound = GetPlaybackIdResponse$Outbound;
}

export function getPlaybackIdResponseToJSON(
  getPlaybackIdResponse: GetPlaybackIdResponse,
): string {
  return JSON.stringify(
    GetPlaybackIdResponse$outboundSchema.parse(getPlaybackIdResponse),
  );
}

export function getPlaybackIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetPlaybackIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPlaybackIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPlaybackIdResponse' from JSON`,
  );
}
