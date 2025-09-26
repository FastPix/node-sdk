import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveMediaInputInfoRequest = {
  /**
   * Pass the list of the input objects used to create the media, along with applied settings.
   */
  mediaId: string;
};

/**
 * Displays the result of the request.
 */
export type RetrieveMediaInputInfoData = {};

/**
 * Get video media input information
 */
export type RetrieveMediaInputInfoResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: RetrieveMediaInputInfoData | undefined;
};

/** @internal */
export const RetrieveMediaInputInfoRequest$inboundSchema: z.ZodType<
  RetrieveMediaInputInfoRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
});

/** @internal */
export type RetrieveMediaInputInfoRequest$Outbound = {
  mediaId: string;
};

/** @internal */
export const RetrieveMediaInputInfoRequest$outboundSchema: z.ZodType<
  RetrieveMediaInputInfoRequest$Outbound,
  z.ZodTypeDef,
  RetrieveMediaInputInfoRequest
> = z.object({
  mediaId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveMediaInputInfoRequest$ {
  /** @deprecated use `RetrieveMediaInputInfoRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveMediaInputInfoRequest$inboundSchema;
  /** @deprecated use `RetrieveMediaInputInfoRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveMediaInputInfoRequest$outboundSchema;
  /** @deprecated use `RetrieveMediaInputInfoRequest$Outbound` instead. */
  export type Outbound = RetrieveMediaInputInfoRequest$Outbound;
}

export function retrieveMediaInputInfoRequestToJSON(
  retrieveMediaInputInfoRequest: RetrieveMediaInputInfoRequest,
): string {
  return JSON.stringify(
    RetrieveMediaInputInfoRequest$outboundSchema.parse(
      retrieveMediaInputInfoRequest,
    ),
  );
}

export function retrieveMediaInputInfoRequestFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveMediaInputInfoRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveMediaInputInfoRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveMediaInputInfoRequest' from JSON`,
  );
}

/** @internal */
export const RetrieveMediaInputInfoData$inboundSchema: z.ZodType<
  RetrieveMediaInputInfoData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type RetrieveMediaInputInfoData$Outbound = {};

/** @internal */
export const RetrieveMediaInputInfoData$outboundSchema: z.ZodType<
  RetrieveMediaInputInfoData$Outbound,
  z.ZodTypeDef,
  RetrieveMediaInputInfoData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveMediaInputInfoData$ {
  /** @deprecated use `RetrieveMediaInputInfoData$inboundSchema` instead. */
  export const inboundSchema = RetrieveMediaInputInfoData$inboundSchema;
  /** @deprecated use `RetrieveMediaInputInfoData$outboundSchema` instead. */
  export const outboundSchema = RetrieveMediaInputInfoData$outboundSchema;
  /** @deprecated use `RetrieveMediaInputInfoData$Outbound` instead. */
  export type Outbound = RetrieveMediaInputInfoData$Outbound;
}

export function retrieveMediaInputInfoDataToJSON(
  retrieveMediaInputInfoData: RetrieveMediaInputInfoData,
): string {
  return JSON.stringify(
    RetrieveMediaInputInfoData$outboundSchema.parse(retrieveMediaInputInfoData),
  );
}

export function retrieveMediaInputInfoDataFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveMediaInputInfoData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveMediaInputInfoData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveMediaInputInfoData' from JSON`,
  );
}

/** @internal */
export const RetrieveMediaInputInfoResponse$inboundSchema: z.ZodType<
  RetrieveMediaInputInfoResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => RetrieveMediaInputInfoData$inboundSchema).optional(),
});

/** @internal */
export type RetrieveMediaInputInfoResponse$Outbound = {
  success?: boolean | undefined;
  data?: RetrieveMediaInputInfoData$Outbound | undefined;
};

/** @internal */
export const RetrieveMediaInputInfoResponse$outboundSchema: z.ZodType<
  RetrieveMediaInputInfoResponse$Outbound,
  z.ZodTypeDef,
  RetrieveMediaInputInfoResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => RetrieveMediaInputInfoData$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveMediaInputInfoResponse$ {
  /** @deprecated use `RetrieveMediaInputInfoResponse$inboundSchema` instead. */
  export const inboundSchema = RetrieveMediaInputInfoResponse$inboundSchema;
  /** @deprecated use `RetrieveMediaInputInfoResponse$outboundSchema` instead. */
  export const outboundSchema = RetrieveMediaInputInfoResponse$outboundSchema;
  /** @deprecated use `RetrieveMediaInputInfoResponse$Outbound` instead. */
  export type Outbound = RetrieveMediaInputInfoResponse$Outbound;
}

export function retrieveMediaInputInfoResponseToJSON(
  retrieveMediaInputInfoResponse: RetrieveMediaInputInfoResponse,
): string {
  return JSON.stringify(
    RetrieveMediaInputInfoResponse$outboundSchema.parse(
      retrieveMediaInputInfoResponse,
    ),
  );
}

export function retrieveMediaInputInfoResponseFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveMediaInputInfoResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveMediaInputInfoResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveMediaInputInfoResponse' from JSON`,
  );
}
