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
export const ListOverallValuesMetricId = {
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
export type ListOverallValuesMetricId = ClosedEnum<
  typeof ListOverallValuesMetricId
>;

/**
 * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
 *
 * @remarks
 */
export const ListOverallValuesTimespan = {
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
export type ListOverallValuesTimespan = ClosedEnum<
  typeof ListOverallValuesTimespan
>;

export type ListOverallValuesRequest = {
  /**
   * Pass metric Id
   *
   * @remarks
   */
  metricId: ListOverallValuesMetricId;
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
  timespan: ListOverallValuesTimespan;
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
export type ListOverallValuesResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Metadata that has to be paased for metric calculations.
   */
  metaData?: models.MetricsOverallMetaDataDetails | undefined;
  /**
   * Retrieves overall values for a specified metric
   */
  data?: models.MetricsOverallDataDetails | undefined;
  /**
   * The timeframe from and to details displayed in the form of unix epoch timestamps.
   *
   * @remarks
   */
  timespan?: Array<number> | undefined;
};

/** @internal */
export const ListOverallValuesMetricId$inboundSchema: z.ZodNativeEnum<
  typeof ListOverallValuesMetricId
> = z.nativeEnum(ListOverallValuesMetricId);

/** @internal */
export const ListOverallValuesMetricId$outboundSchema: z.ZodNativeEnum<
  typeof ListOverallValuesMetricId
> = ListOverallValuesMetricId$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOverallValuesMetricId$ {
  /** @deprecated use `ListOverallValuesMetricId$inboundSchema` instead. */
  export const inboundSchema = ListOverallValuesMetricId$inboundSchema;
  /** @deprecated use `ListOverallValuesMetricId$outboundSchema` instead. */
  export const outboundSchema = ListOverallValuesMetricId$outboundSchema;
}

/** @internal */
export const ListOverallValuesTimespan$inboundSchema: z.ZodNativeEnum<
  typeof ListOverallValuesTimespan
> = z.nativeEnum(ListOverallValuesTimespan);

/** @internal */
export const ListOverallValuesTimespan$outboundSchema: z.ZodNativeEnum<
  typeof ListOverallValuesTimespan
> = ListOverallValuesTimespan$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOverallValuesTimespan$ {
  /** @deprecated use `ListOverallValuesTimespan$inboundSchema` instead. */
  export const inboundSchema = ListOverallValuesTimespan$inboundSchema;
  /** @deprecated use `ListOverallValuesTimespan$outboundSchema` instead. */
  export const outboundSchema = ListOverallValuesTimespan$outboundSchema;
}

/** @internal */
export const ListOverallValuesRequest$inboundSchema: z.ZodType<
  ListOverallValuesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  metricId: ListOverallValuesMetricId$inboundSchema,
  measurement: z.string().default("avg"),
  "timespan[]": ListOverallValuesTimespan$inboundSchema,
  "filterby[]": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "timespan[]": "timespan",
    "filterby[]": "filterby",
  });
});

/** @internal */
export type ListOverallValuesRequest$Outbound = {
  metricId: string;
  measurement: string;
  "timespan[]": string;
  "filterby[]"?: string | undefined;
};

/** @internal */
export const ListOverallValuesRequest$outboundSchema: z.ZodType<
  ListOverallValuesRequest$Outbound,
  z.ZodTypeDef,
  ListOverallValuesRequest
> = z.object({
  metricId: ListOverallValuesMetricId$outboundSchema,
  measurement: z.string().default("avg"),
  timespan: ListOverallValuesTimespan$outboundSchema,
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
export namespace ListOverallValuesRequest$ {
  /** @deprecated use `ListOverallValuesRequest$inboundSchema` instead. */
  export const inboundSchema = ListOverallValuesRequest$inboundSchema;
  /** @deprecated use `ListOverallValuesRequest$outboundSchema` instead. */
  export const outboundSchema = ListOverallValuesRequest$outboundSchema;
  /** @deprecated use `ListOverallValuesRequest$Outbound` instead. */
  export type Outbound = ListOverallValuesRequest$Outbound;
}

export function listOverallValuesRequestToJSON(
  listOverallValuesRequest: ListOverallValuesRequest,
): string {
  return JSON.stringify(
    ListOverallValuesRequest$outboundSchema.parse(listOverallValuesRequest),
  );
}

export function listOverallValuesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListOverallValuesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListOverallValuesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListOverallValuesRequest' from JSON`,
  );
}

/** @internal */
export const ListOverallValuesResponse$inboundSchema: z.ZodType<
  ListOverallValuesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  metaData: models.MetricsOverallMetaDataDetails$inboundSchema.optional(),
  data: models.MetricsOverallDataDetails$inboundSchema.optional(),
  timespan: z.array(z.number().int()).optional(),
});

/** @internal */
export type ListOverallValuesResponse$Outbound = {
  success?: boolean | undefined;
  metaData?: models.MetricsOverallMetaDataDetails$Outbound | undefined;
  data?: models.MetricsOverallDataDetails$Outbound | undefined;
  timespan?: Array<number> | undefined;
};

/** @internal */
export const ListOverallValuesResponse$outboundSchema: z.ZodType<
  ListOverallValuesResponse$Outbound,
  z.ZodTypeDef,
  ListOverallValuesResponse
> = z.object({
  success: z.boolean().optional(),
  metaData: models.MetricsOverallMetaDataDetails$outboundSchema.optional(),
  data: models.MetricsOverallDataDetails$outboundSchema.optional(),
  timespan: z.array(z.number().int()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOverallValuesResponse$ {
  /** @deprecated use `ListOverallValuesResponse$inboundSchema` instead. */
  export const inboundSchema = ListOverallValuesResponse$inboundSchema;
  /** @deprecated use `ListOverallValuesResponse$outboundSchema` instead. */
  export const outboundSchema = ListOverallValuesResponse$outboundSchema;
  /** @deprecated use `ListOverallValuesResponse$Outbound` instead. */
  export type Outbound = ListOverallValuesResponse$Outbound;
}

export function listOverallValuesResponseToJSON(
  listOverallValuesResponse: ListOverallValuesResponse,
): string {
  return JSON.stringify(
    ListOverallValuesResponse$outboundSchema.parse(listOverallValuesResponse),
  );
}

export function listOverallValuesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListOverallValuesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListOverallValuesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListOverallValuesResponse' from JSON`,
  );
}
