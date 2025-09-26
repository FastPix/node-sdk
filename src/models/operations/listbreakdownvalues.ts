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
export const ListBreakdownValuesMetricId = {
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
export type ListBreakdownValuesMetricId = ClosedEnum<
  typeof ListBreakdownValuesMetricId
>;

/**
 * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
 *
 * @remarks
 */
export const ListBreakdownValuesTimespan = {
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
export type ListBreakdownValuesTimespan = ClosedEnum<
  typeof ListBreakdownValuesTimespan
>;

/**
 * The order direction to sort the metrics list by.
 *
 * @remarks
 */
export const ListBreakdownValuesSortOrder = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The order direction to sort the metrics list by.
 *
 * @remarks
 */
export type ListBreakdownValuesSortOrder = ClosedEnum<
  typeof ListBreakdownValuesSortOrder
>;

export type ListBreakdownValuesRequest = {
  /**
   * Pass metric Id
   *
   * @remarks
   */
  metricId: ListBreakdownValuesMetricId;
  /**
   * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
   *
   * @remarks
   */
  timespan: ListBreakdownValuesTimespan;
  /**
   * Pass the dimensions and their corresponding values you want to filter the views by. For excluding the values in the filter we can pass '!' before the filter value. The list of filters can be obtained from list of dimensions endpoint.
   *
   * @remarks
   * Example Values : [ browser_name:Chrome , os_name:macOS , device_name:Galaxy ]
   */
  filterby?: string | undefined;
  /**
   * Pass the limit to display only the rows specified by the value.
   *
   * @remarks
   */
  limit?: number | undefined;
  /**
   * Pass the offset value to indicate the page number.
   *
   * @remarks
   */
  offset?: number | undefined;
  /**
   * Pass this value to group the metrics list by.
   *
   * @remarks
   * Possible Values : ["browser_name", "browser_version", "os_name","os_version" , "device_name", "device_model", "device_type", "device_manufacturer", "player_remote_played",player_name", "player_version", "player_software_name", "player_software_version", "player_resolution", "fp_sdk","fp_sdk_version", "player_autoplay_on", "player_preload_on","video_title",  "video_id", "video_series" ,  "fp_playback_id","fp_live_stream_id", "media_id","video_source_stream_type", "video_source_type", "video_encoding_variant", "experiment_name", "sub_property_id", "drm_type","asn_name", "cdn", "video_source_hostname", "connection_type", "view_session_id","continent","country", "region","viewer_id", "error_code", "exit_before_video_start", "view_has_ad", "video_startup_failed" , "page_context", "playback_failed".]
   */
  groupBy?: string | undefined;
  /**
   * Pass this value to order the metrics list by.
   *
   * @remarks
   */
  orderBy?: string | undefined;
  /**
   * The order direction to sort the metrics list by.
   *
   * @remarks
   */
  sortOrder?: ListBreakdownValuesSortOrder | undefined;
  /**
   * The measurement for the given metrics.
   *
   * @remarks
   */
  measurement?: string | undefined;
};

/**
 * Get filter/ dimension value details by dimension name.
 */
export type ListBreakdownValuesResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Retrieves breakdown values for a specified metric and timespan
   */
  metaData?: models.MetricsTimeseriesMetaDataDetails | undefined;
  /**
   * Retrieves breakdown values for a specified metric and timespan
   */
  data?: Array<models.MetricsBreakdownDetails> | undefined;
  /**
   * The timeframe from and to details displayed in the form of unix epoch timestamps.
   *
   * @remarks
   */
  timespan?: Array<number> | undefined;
};

/** @internal */
export const ListBreakdownValuesMetricId$inboundSchema: z.ZodNativeEnum<
  typeof ListBreakdownValuesMetricId
> = z.nativeEnum(ListBreakdownValuesMetricId);

/** @internal */
export const ListBreakdownValuesMetricId$outboundSchema: z.ZodNativeEnum<
  typeof ListBreakdownValuesMetricId
> = ListBreakdownValuesMetricId$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBreakdownValuesMetricId$ {
  /** @deprecated use `ListBreakdownValuesMetricId$inboundSchema` instead. */
  export const inboundSchema = ListBreakdownValuesMetricId$inboundSchema;
  /** @deprecated use `ListBreakdownValuesMetricId$outboundSchema` instead. */
  export const outboundSchema = ListBreakdownValuesMetricId$outboundSchema;
}

/** @internal */
export const ListBreakdownValuesTimespan$inboundSchema: z.ZodNativeEnum<
  typeof ListBreakdownValuesTimespan
> = z.nativeEnum(ListBreakdownValuesTimespan);

/** @internal */
export const ListBreakdownValuesTimespan$outboundSchema: z.ZodNativeEnum<
  typeof ListBreakdownValuesTimespan
> = ListBreakdownValuesTimespan$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBreakdownValuesTimespan$ {
  /** @deprecated use `ListBreakdownValuesTimespan$inboundSchema` instead. */
  export const inboundSchema = ListBreakdownValuesTimespan$inboundSchema;
  /** @deprecated use `ListBreakdownValuesTimespan$outboundSchema` instead. */
  export const outboundSchema = ListBreakdownValuesTimespan$outboundSchema;
}

/** @internal */
export const ListBreakdownValuesSortOrder$inboundSchema: z.ZodNativeEnum<
  typeof ListBreakdownValuesSortOrder
> = z.nativeEnum(ListBreakdownValuesSortOrder);

/** @internal */
export const ListBreakdownValuesSortOrder$outboundSchema: z.ZodNativeEnum<
  typeof ListBreakdownValuesSortOrder
> = ListBreakdownValuesSortOrder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBreakdownValuesSortOrder$ {
  /** @deprecated use `ListBreakdownValuesSortOrder$inboundSchema` instead. */
  export const inboundSchema = ListBreakdownValuesSortOrder$inboundSchema;
  /** @deprecated use `ListBreakdownValuesSortOrder$outboundSchema` instead. */
  export const outboundSchema = ListBreakdownValuesSortOrder$outboundSchema;
}

/** @internal */
export const ListBreakdownValuesRequest$inboundSchema: z.ZodType<
  ListBreakdownValuesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  metricId: ListBreakdownValuesMetricId$inboundSchema,
  "timespan[]": ListBreakdownValuesTimespan$inboundSchema,
  "filterby[]": z.string().optional(),
  limit: z.number().int().default(10),
  offset: z.number().int().default(1),
  groupBy: z.string().optional(),
  orderBy: z.string().default("views"),
  sortOrder: ListBreakdownValuesSortOrder$inboundSchema.default("asc"),
  measurement: z.string().default("avg"),
}).transform((v) => {
  return remap$(v, {
    "timespan[]": "timespan",
    "filterby[]": "filterby",
  });
});

/** @internal */
export type ListBreakdownValuesRequest$Outbound = {
  metricId: string;
  "timespan[]": string;
  "filterby[]"?: string | undefined;
  limit: number;
  offset: number;
  groupBy?: string | undefined;
  orderBy: string;
  sortOrder: string;
  measurement: string;
};

/** @internal */
export const ListBreakdownValuesRequest$outboundSchema: z.ZodType<
  ListBreakdownValuesRequest$Outbound,
  z.ZodTypeDef,
  ListBreakdownValuesRequest
> = z.object({
  metricId: ListBreakdownValuesMetricId$outboundSchema,
  timespan: ListBreakdownValuesTimespan$outboundSchema,
  filterby: z.string().optional(),
  limit: z.number().int().default(10),
  offset: z.number().int().default(1),
  groupBy: z.string().optional(),
  orderBy: z.string().default("views"),
  sortOrder: ListBreakdownValuesSortOrder$outboundSchema.default("asc"),
  measurement: z.string().default("avg"),
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
export namespace ListBreakdownValuesRequest$ {
  /** @deprecated use `ListBreakdownValuesRequest$inboundSchema` instead. */
  export const inboundSchema = ListBreakdownValuesRequest$inboundSchema;
  /** @deprecated use `ListBreakdownValuesRequest$outboundSchema` instead. */
  export const outboundSchema = ListBreakdownValuesRequest$outboundSchema;
  /** @deprecated use `ListBreakdownValuesRequest$Outbound` instead. */
  export type Outbound = ListBreakdownValuesRequest$Outbound;
}

export function listBreakdownValuesRequestToJSON(
  listBreakdownValuesRequest: ListBreakdownValuesRequest,
): string {
  return JSON.stringify(
    ListBreakdownValuesRequest$outboundSchema.parse(listBreakdownValuesRequest),
  );
}

export function listBreakdownValuesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListBreakdownValuesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListBreakdownValuesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListBreakdownValuesRequest' from JSON`,
  );
}

/** @internal */
export const ListBreakdownValuesResponse$inboundSchema: z.ZodType<
  ListBreakdownValuesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  metaData: models.MetricsTimeseriesMetaDataDetails$inboundSchema.optional(),
  data: z.array(models.MetricsBreakdownDetails$inboundSchema).optional(),
  timespan: z.array(z.number().int()).optional(),
});

/** @internal */
export type ListBreakdownValuesResponse$Outbound = {
  success?: boolean | undefined;
  metaData?: models.MetricsTimeseriesMetaDataDetails$Outbound | undefined;
  data?: Array<models.MetricsBreakdownDetails$Outbound> | undefined;
  timespan?: Array<number> | undefined;
};

/** @internal */
export const ListBreakdownValuesResponse$outboundSchema: z.ZodType<
  ListBreakdownValuesResponse$Outbound,
  z.ZodTypeDef,
  ListBreakdownValuesResponse
> = z.object({
  success: z.boolean().optional(),
  metaData: models.MetricsTimeseriesMetaDataDetails$outboundSchema.optional(),
  data: z.array(models.MetricsBreakdownDetails$outboundSchema).optional(),
  timespan: z.array(z.number().int()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBreakdownValuesResponse$ {
  /** @deprecated use `ListBreakdownValuesResponse$inboundSchema` instead. */
  export const inboundSchema = ListBreakdownValuesResponse$inboundSchema;
  /** @deprecated use `ListBreakdownValuesResponse$outboundSchema` instead. */
  export const outboundSchema = ListBreakdownValuesResponse$outboundSchema;
  /** @deprecated use `ListBreakdownValuesResponse$Outbound` instead. */
  export type Outbound = ListBreakdownValuesResponse$Outbound;
}

export function listBreakdownValuesResponseToJSON(
  listBreakdownValuesResponse: ListBreakdownValuesResponse,
): string {
  return JSON.stringify(
    ListBreakdownValuesResponse$outboundSchema.parse(
      listBreakdownValuesResponse,
    ),
  );
}

export function listBreakdownValuesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListBreakdownValuesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListBreakdownValuesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListBreakdownValuesResponse' from JSON`,
  );
}
