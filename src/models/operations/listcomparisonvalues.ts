import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

/**
 * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
 *
 * @remarks
 */
export const ListComparisonValuesTimespan = {
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
export type ListComparisonValuesTimespan = ClosedEnum<
  typeof ListComparisonValuesTimespan
>;

/**
 * The dimension id in which the views are watched.
 *
 * @remarks
 */
export const ListComparisonValuesDimension = {
  BrowserName: "browser_name",
  BrowserVersion: "browser_version",
  OsName: "os_name",
  OsVersion: "os_version",
  DeviceName: "device_name",
  DeviceModel: "device_model",
  DeviceType: "device_type",
  DeviceManufacturer: "device_manufacturer",
  PlayerRemotePlayed: "player_remote_played",
  PlayerName: "player_name",
  PlayerVersion: "player_version",
  PlayerSoftwareName: "player_software_name",
  PlayerSoftwareVersion: "player_software_version",
  PlayerResolution: "player_resolution",
  FpSDK: "fp_sdk",
  FpSDKVersion: "fp_sdk_version",
  PlayerAutoplayOn: "player_autoplay_on",
  PlayerPreloadOn: "player_preload_on",
  VideoTitle: "video_title",
  VideoId: "video_id",
  VideoSeries: "video_series",
  FpPlaybackId: "fp_playback_id",
  FpLiveStreamId: "fp_live_stream_id",
  MediaId: "media_id",
  VideoSourceStreamType: "video_source_stream_type",
  VideoSourceType: "video_source_type",
  VideoEncodingVariant: "video_encoding_variant",
  ExperimentName: "experiment_name",
  SubPropertyId: "sub_property_id",
  DrmType: "drm_type",
  AsnName: "asn_name",
  Cdn: "cdn",
  VideoSourceHostname: "video_source_hostname",
  ConnectionType: "connection_type",
  ViewSessionId: "view_session_id",
  Continent: "continent",
  Country: "country",
  Region: "region",
  ViewerId: "viewer_id",
  ErrorCode: "error_code",
  ExitBeforeVideoStart: "exit_before_video_start",
  ViewHasAd: "view_has_ad",
  VideoStartupFailed: "video_startup_failed",
  PageContext: "page_context",
  PlaybackFailed: "playback_failed",
  Custom1: "custom_1",
  Custom2: "custom_2",
  Custom3: "custom_3",
  Custom4: "custom_4",
  Custom5: "custom_5",
  Custom6: "custom_6",
  Custom7: "custom_7",
  Custom8: "custom_8",
  Custom9: "custom_9",
  Custom10: "custom_10",
} as const;
/**
 * The dimension id in which the views are watched.
 *
 * @remarks
 */
export type ListComparisonValuesDimension = ClosedEnum<
  typeof ListComparisonValuesDimension
>;

export type ListComparisonValuesRequest = {
  /**
   * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
   *
   * @remarks
   */
  timespan: ListComparisonValuesTimespan;
  /**
   * Pass the dimensions and their corresponding values you want to filter the views by. For excluding the values in the filter we can pass '!' before the filter value. The list of filters can be obtained from list of dimensions endpoint.
   *
   * @remarks
   * Example Values : [ browser_name:Chrome , os_name:macOS , device_name:Galaxy ]
   */
  filterby?: string | undefined;
  /**
   * The dimension id in which the views are watched.
   *
   * @remarks
   */
  dimension?: ListComparisonValuesDimension | undefined;
  /**
   * The value for the selected dimension.
   *
   * @remarks
   * For example:
   *  If `dimension` is `browser_name`, the value could be  `Chrome` `,` `Firefox` `etc` .
   *  If `dimension` is `os_name`, the value could be `macOS` `,` `Windows` `etc` .
   */
  value?: string | undefined;
};

/**
 * Get filter/ dimension value details by dimension name.
 */
export type ListComparisonValuesResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   *
   * @remarks
   */
  data?: Array<Array<models.MetricsComparisonDetails>> | undefined;
  /**
   * The timeframe from and to details displayed in the form of unix epoch timestamps.
   *
   * @remarks
   */
  timespan?: Array<number> | undefined;
};

/** @internal */
export const ListComparisonValuesTimespan$inboundSchema: z.ZodNativeEnum<
  typeof ListComparisonValuesTimespan
> = z.nativeEnum(ListComparisonValuesTimespan);

/** @internal */
export const ListComparisonValuesTimespan$outboundSchema: z.ZodNativeEnum<
  typeof ListComparisonValuesTimespan
> = ListComparisonValuesTimespan$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListComparisonValuesTimespan$ {
  /** @deprecated use `ListComparisonValuesTimespan$inboundSchema` instead. */
  export const inboundSchema = ListComparisonValuesTimespan$inboundSchema;
  /** @deprecated use `ListComparisonValuesTimespan$outboundSchema` instead. */
  export const outboundSchema = ListComparisonValuesTimespan$outboundSchema;
}

/** @internal */
export const ListComparisonValuesDimension$inboundSchema: z.ZodNativeEnum<
  typeof ListComparisonValuesDimension
> = z.nativeEnum(ListComparisonValuesDimension);

/** @internal */
export const ListComparisonValuesDimension$outboundSchema: z.ZodNativeEnum<
  typeof ListComparisonValuesDimension
> = ListComparisonValuesDimension$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListComparisonValuesDimension$ {
  /** @deprecated use `ListComparisonValuesDimension$inboundSchema` instead. */
  export const inboundSchema = ListComparisonValuesDimension$inboundSchema;
  /** @deprecated use `ListComparisonValuesDimension$outboundSchema` instead. */
  export const outboundSchema = ListComparisonValuesDimension$outboundSchema;
}

/** @internal */
export const ListComparisonValuesRequest$inboundSchema: z.ZodType<
  ListComparisonValuesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "timespan[]": ListComparisonValuesTimespan$inboundSchema,
  "filterby[]": z.string().optional(),
  dimension: ListComparisonValuesDimension$inboundSchema.optional(),
  value: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "timespan[]": "timespan",
    "filterby[]": "filterby",
  });
});

/** @internal */
export type ListComparisonValuesRequest$Outbound = {
  "timespan[]": string;
  "filterby[]"?: string | undefined;
  dimension?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const ListComparisonValuesRequest$outboundSchema: z.ZodType<
  ListComparisonValuesRequest$Outbound,
  z.ZodTypeDef,
  ListComparisonValuesRequest
> = z.object({
  timespan: ListComparisonValuesTimespan$outboundSchema,
  filterby: z.string().optional(),
  dimension: ListComparisonValuesDimension$outboundSchema.optional(),
  value: z.string().optional(),
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
export namespace ListComparisonValuesRequest$ {
  /** @deprecated use `ListComparisonValuesRequest$inboundSchema` instead. */
  export const inboundSchema = ListComparisonValuesRequest$inboundSchema;
  /** @deprecated use `ListComparisonValuesRequest$outboundSchema` instead. */
  export const outboundSchema = ListComparisonValuesRequest$outboundSchema;
  /** @deprecated use `ListComparisonValuesRequest$Outbound` instead. */
  export type Outbound = ListComparisonValuesRequest$Outbound;
}

export function listComparisonValuesRequestToJSON(
  listComparisonValuesRequest: ListComparisonValuesRequest,
): string {
  return JSON.stringify(
    ListComparisonValuesRequest$outboundSchema.parse(
      listComparisonValuesRequest,
    ),
  );
}

export function listComparisonValuesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListComparisonValuesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListComparisonValuesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListComparisonValuesRequest' from JSON`,
  );
}

/** @internal */
export const ListComparisonValuesResponse$inboundSchema: z.ZodType<
  ListComparisonValuesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.array(z.array(models.MetricsComparisonDetails$inboundSchema))
    .optional(),
  timespan: z.array(z.number().int()).optional(),
});

/** @internal */
export type ListComparisonValuesResponse$Outbound = {
  success?: boolean | undefined;
  data?: Array<Array<models.MetricsComparisonDetails$Outbound>> | undefined;
  timespan?: Array<number> | undefined;
};

/** @internal */
export const ListComparisonValuesResponse$outboundSchema: z.ZodType<
  ListComparisonValuesResponse$Outbound,
  z.ZodTypeDef,
  ListComparisonValuesResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.array(z.array(models.MetricsComparisonDetails$outboundSchema))
    .optional(),
  timespan: z.array(z.number().int()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListComparisonValuesResponse$ {
  /** @deprecated use `ListComparisonValuesResponse$inboundSchema` instead. */
  export const inboundSchema = ListComparisonValuesResponse$inboundSchema;
  /** @deprecated use `ListComparisonValuesResponse$outboundSchema` instead. */
  export const outboundSchema = ListComparisonValuesResponse$outboundSchema;
  /** @deprecated use `ListComparisonValuesResponse$Outbound` instead. */
  export type Outbound = ListComparisonValuesResponse$Outbound;
}

export function listComparisonValuesResponseToJSON(
  listComparisonValuesResponse: ListComparisonValuesResponse,
): string {
  return JSON.stringify(
    ListComparisonValuesResponse$outboundSchema.parse(
      listComparisonValuesResponse,
    ),
  );
}

export function listComparisonValuesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListComparisonValuesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListComparisonValuesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListComparisonValuesResponse' from JSON`,
  );
}
