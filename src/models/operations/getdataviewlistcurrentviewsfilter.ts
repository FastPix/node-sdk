import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The dimension to group and breakdown the concurrent viewers data by.
 *
 * @remarks
 * This determines how the results will be categorized and aggregated.
 * Choose from geographic, content, technical, or behavioral dimensions.
 */
export const GetDataViewlistCurrentViewsFilterDimension = {
  Country: "country",
  Region: "region",
  AsnId: "asn_id",
  Cdn: "cdn",
  VideoTitle: "video_title",
  VideoSeries: "video_series",
  VideoId: "video_id",
  SubPropertyId: "sub_property_id",
  VideoSourceStreamType: "video_source_stream_type",
  OsName: "os_name",
  PlayerName: "player_name",
  MediaId: "media_id",
  FpPlaybackId: "fp_playback_id",
  ViewId: "view_id",
} as const;
/**
 * The dimension to group and breakdown the concurrent viewers data by.
 *
 * @remarks
 * This determines how the results will be categorized and aggregated.
 * Choose from geographic, content, technical, or behavioral dimensions.
 */
export type GetDataViewlistCurrentViewsFilterDimension = ClosedEnum<
  typeof GetDataViewlistCurrentViewsFilterDimension
>;

export type GetDataViewlistCurrentViewsFilterRequest = {
  /**
   * The dimension to group and breakdown the concurrent viewers data by.
   *
   * @remarks
   * This determines how the results will be categorized and aggregated.
   * Choose from geographic, content, technical, or behavioral dimensions.
   */
  dimension?: GetDataViewlistCurrentViewsFilterDimension | undefined;
  /**
   * Maximum number of results to return. Controls the number of dimension values
   *
   * @remarks
   * that will be included in the response. Useful for pagination and performance.
   * Higher limits provide more detailed breakdowns but may impact response time.
   */
  limit?: number | undefined;
};

export type GetDataViewlistCurrentViewsFilterData = {
  /**
   * Number of concurrent viewers for this dimension value.
   */
  concurrentViewers?: number | undefined;
  /**
   * Name of the dimension (e.g., country, device type, etc.).
   */
  dimensionName?: string | undefined;
  /**
   * Additional metric value for this dimension (if applicable).
   */
  metricValue?: number | undefined;
};

/**
 * Successfully retrieved concurrent viewers breakdown by the specified dimension.
 */
export type GetDataViewlistCurrentViewsFilterResponse = {
  /**
   * Indicates if the request was successful.
   */
  success?: boolean | undefined;
  /**
   * Breakdown of concurrent viewers by the specified dimension.
   */
  data?: Array<GetDataViewlistCurrentViewsFilterData> | undefined;
  /**
   * Start and end epoch timestamps (milliseconds) for the timespan window.
   */
  timespan?: Array<number> | undefined;
};

/** @internal */
export const GetDataViewlistCurrentViewsFilterDimension$inboundSchema:
  z.ZodNativeEnum<typeof GetDataViewlistCurrentViewsFilterDimension> = z
    .nativeEnum(GetDataViewlistCurrentViewsFilterDimension);

/** @internal */
export const GetDataViewlistCurrentViewsFilterDimension$outboundSchema:
  z.ZodNativeEnum<typeof GetDataViewlistCurrentViewsFilterDimension> =
    GetDataViewlistCurrentViewsFilterDimension$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDataViewlistCurrentViewsFilterDimension$ {
  /** @deprecated use `GetDataViewlistCurrentViewsFilterDimension$inboundSchema` instead. */
  export const inboundSchema =
    GetDataViewlistCurrentViewsFilterDimension$inboundSchema;
  /** @deprecated use `GetDataViewlistCurrentViewsFilterDimension$outboundSchema` instead. */
  export const outboundSchema =
    GetDataViewlistCurrentViewsFilterDimension$outboundSchema;
}

/** @internal */
export const GetDataViewlistCurrentViewsFilterRequest$inboundSchema: z.ZodType<
  GetDataViewlistCurrentViewsFilterRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  dimension: GetDataViewlistCurrentViewsFilterDimension$inboundSchema
    .optional(),
  limit: z.number().int().default(10),
});

/** @internal */
export type GetDataViewlistCurrentViewsFilterRequest$Outbound = {
  dimension?: string | undefined;
  limit: number;
};

/** @internal */
export const GetDataViewlistCurrentViewsFilterRequest$outboundSchema: z.ZodType<
  GetDataViewlistCurrentViewsFilterRequest$Outbound,
  z.ZodTypeDef,
  GetDataViewlistCurrentViewsFilterRequest
> = z.object({
  dimension: GetDataViewlistCurrentViewsFilterDimension$outboundSchema
    .optional(),
  limit: z.number().int().default(10),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDataViewlistCurrentViewsFilterRequest$ {
  /** @deprecated use `GetDataViewlistCurrentViewsFilterRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetDataViewlistCurrentViewsFilterRequest$inboundSchema;
  /** @deprecated use `GetDataViewlistCurrentViewsFilterRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetDataViewlistCurrentViewsFilterRequest$outboundSchema;
  /** @deprecated use `GetDataViewlistCurrentViewsFilterRequest$Outbound` instead. */
  export type Outbound = GetDataViewlistCurrentViewsFilterRequest$Outbound;
}

export function getDataViewlistCurrentViewsFilterRequestToJSON(
  getDataViewlistCurrentViewsFilterRequest:
    GetDataViewlistCurrentViewsFilterRequest,
): string {
  return JSON.stringify(
    GetDataViewlistCurrentViewsFilterRequest$outboundSchema.parse(
      getDataViewlistCurrentViewsFilterRequest,
    ),
  );
}

export function getDataViewlistCurrentViewsFilterRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetDataViewlistCurrentViewsFilterRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetDataViewlistCurrentViewsFilterRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetDataViewlistCurrentViewsFilterRequest' from JSON`,
  );
}

/** @internal */
export const GetDataViewlistCurrentViewsFilterData$inboundSchema: z.ZodType<
  GetDataViewlistCurrentViewsFilterData,
  z.ZodTypeDef,
  unknown
> = z.object({
  concurrent_viewers: z.number().int().optional(),
  dimension_name: z.string().optional(),
  metricValue: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "concurrent_viewers": "concurrentViewers",
    "dimension_name": "dimensionName",
  });
});

/** @internal */
export type GetDataViewlistCurrentViewsFilterData$Outbound = {
  concurrent_viewers?: number | undefined;
  dimension_name?: string | undefined;
  metricValue?: number | undefined;
};

/** @internal */
export const GetDataViewlistCurrentViewsFilterData$outboundSchema: z.ZodType<
  GetDataViewlistCurrentViewsFilterData$Outbound,
  z.ZodTypeDef,
  GetDataViewlistCurrentViewsFilterData
> = z.object({
  concurrentViewers: z.number().int().optional(),
  dimensionName: z.string().optional(),
  metricValue: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    concurrentViewers: "concurrent_viewers",
    dimensionName: "dimension_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDataViewlistCurrentViewsFilterData$ {
  /** @deprecated use `GetDataViewlistCurrentViewsFilterData$inboundSchema` instead. */
  export const inboundSchema =
    GetDataViewlistCurrentViewsFilterData$inboundSchema;
  /** @deprecated use `GetDataViewlistCurrentViewsFilterData$outboundSchema` instead. */
  export const outboundSchema =
    GetDataViewlistCurrentViewsFilterData$outboundSchema;
  /** @deprecated use `GetDataViewlistCurrentViewsFilterData$Outbound` instead. */
  export type Outbound = GetDataViewlistCurrentViewsFilterData$Outbound;
}

export function getDataViewlistCurrentViewsFilterDataToJSON(
  getDataViewlistCurrentViewsFilterData: GetDataViewlistCurrentViewsFilterData,
): string {
  return JSON.stringify(
    GetDataViewlistCurrentViewsFilterData$outboundSchema.parse(
      getDataViewlistCurrentViewsFilterData,
    ),
  );
}

export function getDataViewlistCurrentViewsFilterDataFromJSON(
  jsonString: string,
): SafeParseResult<GetDataViewlistCurrentViewsFilterData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetDataViewlistCurrentViewsFilterData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDataViewlistCurrentViewsFilterData' from JSON`,
  );
}

/** @internal */
export const GetDataViewlistCurrentViewsFilterResponse$inboundSchema: z.ZodType<
  GetDataViewlistCurrentViewsFilterResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.array(
    z.lazy(() => GetDataViewlistCurrentViewsFilterData$inboundSchema),
  ).optional(),
  timespan: z.array(z.number().int()).optional(),
});

/** @internal */
export type GetDataViewlistCurrentViewsFilterResponse$Outbound = {
  success?: boolean | undefined;
  data?: Array<GetDataViewlistCurrentViewsFilterData$Outbound> | undefined;
  timespan?: Array<number> | undefined;
};

/** @internal */
export const GetDataViewlistCurrentViewsFilterResponse$outboundSchema:
  z.ZodType<
    GetDataViewlistCurrentViewsFilterResponse$Outbound,
    z.ZodTypeDef,
    GetDataViewlistCurrentViewsFilterResponse
  > = z.object({
    success: z.boolean().optional(),
    data: z.array(
      z.lazy(() => GetDataViewlistCurrentViewsFilterData$outboundSchema),
    ).optional(),
    timespan: z.array(z.number().int()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDataViewlistCurrentViewsFilterResponse$ {
  /** @deprecated use `GetDataViewlistCurrentViewsFilterResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetDataViewlistCurrentViewsFilterResponse$inboundSchema;
  /** @deprecated use `GetDataViewlistCurrentViewsFilterResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetDataViewlistCurrentViewsFilterResponse$outboundSchema;
  /** @deprecated use `GetDataViewlistCurrentViewsFilterResponse$Outbound` instead. */
  export type Outbound = GetDataViewlistCurrentViewsFilterResponse$Outbound;
}

export function getDataViewlistCurrentViewsFilterResponseToJSON(
  getDataViewlistCurrentViewsFilterResponse:
    GetDataViewlistCurrentViewsFilterResponse,
): string {
  return JSON.stringify(
    GetDataViewlistCurrentViewsFilterResponse$outboundSchema.parse(
      getDataViewlistCurrentViewsFilterResponse,
    ),
  );
}

export function getDataViewlistCurrentViewsFilterResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetDataViewlistCurrentViewsFilterResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetDataViewlistCurrentViewsFilterResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetDataViewlistCurrentViewsFilterResponse' from JSON`,
  );
}
