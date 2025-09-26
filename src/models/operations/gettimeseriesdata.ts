import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

/**
 * Pass metric Id
 *
 * @remarks
 */
export const GetTimeseriesDataMetricId = {
  Views: "views",
  UniqueViewers: "unique_viewers",
  PlayingTime: "playing_time",
  QualityOfExperienceScore: "quality_of_experience_score",
  PlaybackScore: "playback_score",
  PlaybackFailurePercentage: "playback_failure_percentage",
  ExitBeforeVideoStart: "exit_before_video_start",
  VideoStartupFailurePercentage: "video_startup_failure_percentage",
  StartupScore: "startup_score",
  VideoStartupTime: "video_startup_time",
  PlayerStartupTime: "player_startup_time",
  PageLoadTime: "page_load_time",
  TotalStartupTime: "total_startup_time",
  LiveStreamLatency: "live_stream_latency",
  AverageBitrate: "average_bitrate",
  BufferCount: "buffer_count",
  RenderQualityScore: "render_quality_score",
  AvgUpscaling: "avg_upscaling",
  AvgDownscaling: "avg_downscaling",
  MaxUpscaling: "max_upscaling",
  MaxDownscaling: "max_downscaling",
  JumpLatency: "jump_latency",
  StabilityScore: "stability_score",
  BufferRatio: "buffer_ratio",
  BufferFrequency: "buffer_frequency",
  BufferFill: "buffer_fill",
} as const;
/**
 * Pass metric Id
 *
 * @remarks
 */
export type GetTimeseriesDataMetricId = ClosedEnum<
  typeof GetTimeseriesDataMetricId
>;

/**
 * Pass this value to group the metrics list by.
 *
 * @remarks
 */
export const GroupBy = {
  Minute: "minute",
  TenMinutes: "ten_minutes",
  Hour: "hour",
  Day: "day",
} as const;
/**
 * Pass this value to group the metrics list by.
 *
 * @remarks
 */
export type GroupBy = ClosedEnum<typeof GroupBy>;

/**
 * The order direction to sort the metrics list by.
 *
 * @remarks
 */
export const GetTimeseriesDataSortOrder = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The order direction to sort the metrics list by.
 *
 * @remarks
 */
export type GetTimeseriesDataSortOrder = ClosedEnum<
  typeof GetTimeseriesDataSortOrder
>;

/**
 * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
 *
 * @remarks
 */
export const GetTimeseriesDataTimespan = {
  Sixtyminutes: "60:minutes",
  Sixhours: "6:hours",
  TwentyFourhours: "24:hours",
  Threedays: "3:days",
  Sevendays: "7:days",
  Thirtydays: "30:days",
} as const;
/**
 * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
 *
 * @remarks
 */
export type GetTimeseriesDataTimespan = ClosedEnum<
  typeof GetTimeseriesDataTimespan
>;

export type GetTimeseriesDataRequest = {
  /**
   * Pass metric Id
   *
   * @remarks
   */
  metricId: GetTimeseriesDataMetricId;
  /**
   * Pass this value to group the metrics list by.
   *
   * @remarks
   */
  groupBy?: GroupBy | undefined;
  /**
   * The order direction to sort the metrics list by.
   *
   * @remarks
   */
  sortOrder?: GetTimeseriesDataSortOrder | undefined;
  /**
   * The measurement for the given metrics.
   *
   * @remarks
   * Possible Values : [95th, median, avg, count or sum]
   */
  measurement?: string | undefined;
  /**
   * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
   *
   * @remarks
   */
  timespan: GetTimeseriesDataTimespan;
  /**
   * Pass the dimensions and their corresponding values you want to filter the views by. For excluding the values in the filter we can pass '!' before the filter value. The list of filters can be obtained from list of dimensions endpoint.
   *
   * @remarks
   * Example Values : [ browser_name:Chrome , os_name:macOS , device_name:Galaxy ]
   */
  filterby?: string | undefined;
};

/**
 * Get filter/ dimension value details by dimension name.
 */
export type GetTimeseriesDataResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Retrieves breakdown values for a specified metric and timespan
   */
  metaData?: models.MetricsTimeseriesMetaDataDetails | undefined;
  /**
   * Displays the result of the request.
   */
  data?: Array<models.MetricsTimeseriesDataDetails> | undefined;
  /**
   * The timeframe from and to details displayed in the form of unix epoch timestamps.
   *
   * @remarks
   */
  timespan?: Array<number> | undefined;
};

/** @internal */
export const GetTimeseriesDataMetricId$inboundSchema: z.ZodNativeEnum<
  typeof GetTimeseriesDataMetricId
> = z.nativeEnum(GetTimeseriesDataMetricId);

/** @internal */
export const GetTimeseriesDataMetricId$outboundSchema: z.ZodNativeEnum<
  typeof GetTimeseriesDataMetricId
> = GetTimeseriesDataMetricId$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTimeseriesDataMetricId$ {
  /** @deprecated use `GetTimeseriesDataMetricId$inboundSchema` instead. */
  export const inboundSchema = GetTimeseriesDataMetricId$inboundSchema;
  /** @deprecated use `GetTimeseriesDataMetricId$outboundSchema` instead. */
  export const outboundSchema = GetTimeseriesDataMetricId$outboundSchema;
}

/** @internal */
export const GroupBy$inboundSchema: z.ZodNativeEnum<typeof GroupBy> = z
  .nativeEnum(GroupBy);

/** @internal */
export const GroupBy$outboundSchema: z.ZodNativeEnum<typeof GroupBy> =
  GroupBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GroupBy$ {
  /** @deprecated use `GroupBy$inboundSchema` instead. */
  export const inboundSchema = GroupBy$inboundSchema;
  /** @deprecated use `GroupBy$outboundSchema` instead. */
  export const outboundSchema = GroupBy$outboundSchema;
}

/** @internal */
export const GetTimeseriesDataSortOrder$inboundSchema: z.ZodNativeEnum<
  typeof GetTimeseriesDataSortOrder
> = z.nativeEnum(GetTimeseriesDataSortOrder);

/** @internal */
export const GetTimeseriesDataSortOrder$outboundSchema: z.ZodNativeEnum<
  typeof GetTimeseriesDataSortOrder
> = GetTimeseriesDataSortOrder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTimeseriesDataSortOrder$ {
  /** @deprecated use `GetTimeseriesDataSortOrder$inboundSchema` instead. */
  export const inboundSchema = GetTimeseriesDataSortOrder$inboundSchema;
  /** @deprecated use `GetTimeseriesDataSortOrder$outboundSchema` instead. */
  export const outboundSchema = GetTimeseriesDataSortOrder$outboundSchema;
}

/** @internal */
export const GetTimeseriesDataTimespan$inboundSchema: z.ZodNativeEnum<
  typeof GetTimeseriesDataTimespan
> = z.nativeEnum(GetTimeseriesDataTimespan);

/** @internal */
export const GetTimeseriesDataTimespan$outboundSchema: z.ZodNativeEnum<
  typeof GetTimeseriesDataTimespan
> = GetTimeseriesDataTimespan$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTimeseriesDataTimespan$ {
  /** @deprecated use `GetTimeseriesDataTimespan$inboundSchema` instead. */
  export const inboundSchema = GetTimeseriesDataTimespan$inboundSchema;
  /** @deprecated use `GetTimeseriesDataTimespan$outboundSchema` instead. */
  export const outboundSchema = GetTimeseriesDataTimespan$outboundSchema;
}

/** @internal */
export const GetTimeseriesDataRequest$inboundSchema: z.ZodType<
  GetTimeseriesDataRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  metricId: GetTimeseriesDataMetricId$inboundSchema,
  groupBy: GroupBy$inboundSchema.default("minute"),
  sortOrder: GetTimeseriesDataSortOrder$inboundSchema.default("asc"),
  measurement: z.string().default("avg"),
  "timespan[]": GetTimeseriesDataTimespan$inboundSchema,
  "filterby[]": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "timespan[]": "timespan",
    "filterby[]": "filterby",
  });
});

/** @internal */
export type GetTimeseriesDataRequest$Outbound = {
  metricId: string;
  groupBy: string;
  sortOrder: string;
  measurement: string;
  "timespan[]": string;
  "filterby[]"?: string | undefined;
};

/** @internal */
export const GetTimeseriesDataRequest$outboundSchema: z.ZodType<
  GetTimeseriesDataRequest$Outbound,
  z.ZodTypeDef,
  GetTimeseriesDataRequest
> = z.object({
  metricId: GetTimeseriesDataMetricId$outboundSchema,
  groupBy: GroupBy$outboundSchema.default("minute"),
  sortOrder: GetTimeseriesDataSortOrder$outboundSchema.default("asc"),
  measurement: z.string().default("avg"),
  timespan: GetTimeseriesDataTimespan$outboundSchema,
  filterby: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    timespan: "timespan[]",
    filterby: "filterby[]",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTimeseriesDataRequest$ {
  /** @deprecated use `GetTimeseriesDataRequest$inboundSchema` instead. */
  export const inboundSchema = GetTimeseriesDataRequest$inboundSchema;
  /** @deprecated use `GetTimeseriesDataRequest$outboundSchema` instead. */
  export const outboundSchema = GetTimeseriesDataRequest$outboundSchema;
  /** @deprecated use `GetTimeseriesDataRequest$Outbound` instead. */
  export type Outbound = GetTimeseriesDataRequest$Outbound;
}

export function getTimeseriesDataRequestToJSON(
  getTimeseriesDataRequest: GetTimeseriesDataRequest,
): string {
  return JSON.stringify(
    GetTimeseriesDataRequest$outboundSchema.parse(getTimeseriesDataRequest),
  );
}

export function getTimeseriesDataRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTimeseriesDataRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTimeseriesDataRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTimeseriesDataRequest' from JSON`,
  );
}

/** @internal */
export const GetTimeseriesDataResponse$inboundSchema: z.ZodType<
  GetTimeseriesDataResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  metaData: models.MetricsTimeseriesMetaDataDetails$inboundSchema.optional(),
  data: z.array(models.MetricsTimeseriesDataDetails$inboundSchema).optional(),
  timespan: z.array(z.number().int()).optional(),
});

/** @internal */
export type GetTimeseriesDataResponse$Outbound = {
  success?: boolean | undefined;
  metaData?: models.MetricsTimeseriesMetaDataDetails$Outbound | undefined;
  data?: Array<models.MetricsTimeseriesDataDetails$Outbound> | undefined;
  timespan?: Array<number> | undefined;
};

/** @internal */
export const GetTimeseriesDataResponse$outboundSchema: z.ZodType<
  GetTimeseriesDataResponse$Outbound,
  z.ZodTypeDef,
  GetTimeseriesDataResponse
> = z.object({
  success: z.boolean().optional(),
  metaData: models.MetricsTimeseriesMetaDataDetails$outboundSchema.optional(),
  data: z.array(models.MetricsTimeseriesDataDetails$outboundSchema).optional(),
  timespan: z.array(z.number().int()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTimeseriesDataResponse$ {
  /** @deprecated use `GetTimeseriesDataResponse$inboundSchema` instead. */
  export const inboundSchema = GetTimeseriesDataResponse$inboundSchema;
  /** @deprecated use `GetTimeseriesDataResponse$outboundSchema` instead. */
  export const outboundSchema = GetTimeseriesDataResponse$outboundSchema;
  /** @deprecated use `GetTimeseriesDataResponse$Outbound` instead. */
  export type Outbound = GetTimeseriesDataResponse$Outbound;
}

export function getTimeseriesDataResponseToJSON(
  getTimeseriesDataResponse: GetTimeseriesDataResponse,
): string {
  return JSON.stringify(
    GetTimeseriesDataResponse$outboundSchema.parse(getTimeseriesDataResponse),
  );
}

export function getTimeseriesDataResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetTimeseriesDataResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTimeseriesDataResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTimeseriesDataResponse' from JSON`,
  );
}
