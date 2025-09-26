import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

/**
 * Pass Dimensions id
 *
 * @remarks
 */
export const DimensionsId = {
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
 * Pass Dimensions id
 *
 * @remarks
 */
export type DimensionsId = ClosedEnum<typeof DimensionsId>;

/**
 * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
 *
 * @remarks
 */
export const ListFilterValuesForDimensionTimespan = {
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
export type ListFilterValuesForDimensionTimespan = ClosedEnum<
  typeof ListFilterValuesForDimensionTimespan
>;

export type ListFilterValuesForDimensionRequest = {
  /**
   * Pass Dimensions id
   *
   * @remarks
   */
  dimensionsId: DimensionsId;
  /**
   * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
   *
   * @remarks
   */
  timespan: ListFilterValuesForDimensionTimespan;
  /**
   * Pass the dimensions and their corresponding values you want to filter the views by. For excluding the values in the filter we can pass '!' before the filter value. The list of filters can be obtained from list of dimensions endpoint.
   *
   * @remarks
   * Example Values : [ browser_name:Chrome , os_name:macOS , device_name:Galaxy ]
   */
  filterby?: string | undefined;
};

/**
 * Get filter / dimension value details by dimension name.
 */
export type ListFilterValuesForDimensionResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * filter values associated with a specific dimension
   */
  data?: Array<models.BrowserNameDimensiondetails> | undefined;
  /**
   * The timeframe from and to details displayed in the form of unix epoch timestamps.
   *
   * @remarks
   */
  timespan?: Array<number> | undefined;
};

/** @internal */
export const DimensionsId$inboundSchema: z.ZodNativeEnum<typeof DimensionsId> =
  z.nativeEnum(DimensionsId);

/** @internal */
export const DimensionsId$outboundSchema: z.ZodNativeEnum<typeof DimensionsId> =
  DimensionsId$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DimensionsId$ {
  /** @deprecated use `DimensionsId$inboundSchema` instead. */
  export const inboundSchema = DimensionsId$inboundSchema;
  /** @deprecated use `DimensionsId$outboundSchema` instead. */
  export const outboundSchema = DimensionsId$outboundSchema;
}

/** @internal */
export const ListFilterValuesForDimensionTimespan$inboundSchema:
  z.ZodNativeEnum<typeof ListFilterValuesForDimensionTimespan> = z.nativeEnum(
    ListFilterValuesForDimensionTimespan,
  );

/** @internal */
export const ListFilterValuesForDimensionTimespan$outboundSchema:
  z.ZodNativeEnum<typeof ListFilterValuesForDimensionTimespan> =
    ListFilterValuesForDimensionTimespan$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFilterValuesForDimensionTimespan$ {
  /** @deprecated use `ListFilterValuesForDimensionTimespan$inboundSchema` instead. */
  export const inboundSchema =
    ListFilterValuesForDimensionTimespan$inboundSchema;
  /** @deprecated use `ListFilterValuesForDimensionTimespan$outboundSchema` instead. */
  export const outboundSchema =
    ListFilterValuesForDimensionTimespan$outboundSchema;
}

/** @internal */
export const ListFilterValuesForDimensionRequest$inboundSchema: z.ZodType<
  ListFilterValuesForDimensionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  dimensionsId: DimensionsId$inboundSchema,
  "timespan[]": ListFilterValuesForDimensionTimespan$inboundSchema,
  "filterby[]": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "timespan[]": "timespan",
    "filterby[]": "filterby",
  });
});

/** @internal */
export type ListFilterValuesForDimensionRequest$Outbound = {
  dimensionsId: string;
  "timespan[]": string;
  "filterby[]"?: string | undefined;
};

/** @internal */
export const ListFilterValuesForDimensionRequest$outboundSchema: z.ZodType<
  ListFilterValuesForDimensionRequest$Outbound,
  z.ZodTypeDef,
  ListFilterValuesForDimensionRequest
> = z.object({
  dimensionsId: DimensionsId$outboundSchema,
  timespan: ListFilterValuesForDimensionTimespan$outboundSchema,
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
export namespace ListFilterValuesForDimensionRequest$ {
  /** @deprecated use `ListFilterValuesForDimensionRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListFilterValuesForDimensionRequest$inboundSchema;
  /** @deprecated use `ListFilterValuesForDimensionRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListFilterValuesForDimensionRequest$outboundSchema;
  /** @deprecated use `ListFilterValuesForDimensionRequest$Outbound` instead. */
  export type Outbound = ListFilterValuesForDimensionRequest$Outbound;
}

export function listFilterValuesForDimensionRequestToJSON(
  listFilterValuesForDimensionRequest: ListFilterValuesForDimensionRequest,
): string {
  return JSON.stringify(
    ListFilterValuesForDimensionRequest$outboundSchema.parse(
      listFilterValuesForDimensionRequest,
    ),
  );
}

export function listFilterValuesForDimensionRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListFilterValuesForDimensionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListFilterValuesForDimensionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListFilterValuesForDimensionRequest' from JSON`,
  );
}

/** @internal */
export const ListFilterValuesForDimensionResponse$inboundSchema: z.ZodType<
  ListFilterValuesForDimensionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.array(models.BrowserNameDimensiondetails$inboundSchema).optional(),
  timespan: z.array(z.number().int()).optional(),
});

/** @internal */
export type ListFilterValuesForDimensionResponse$Outbound = {
  success?: boolean | undefined;
  data?: Array<models.BrowserNameDimensiondetails$Outbound> | undefined;
  timespan?: Array<number> | undefined;
};

/** @internal */
export const ListFilterValuesForDimensionResponse$outboundSchema: z.ZodType<
  ListFilterValuesForDimensionResponse$Outbound,
  z.ZodTypeDef,
  ListFilterValuesForDimensionResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.array(models.BrowserNameDimensiondetails$outboundSchema).optional(),
  timespan: z.array(z.number().int()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFilterValuesForDimensionResponse$ {
  /** @deprecated use `ListFilterValuesForDimensionResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListFilterValuesForDimensionResponse$inboundSchema;
  /** @deprecated use `ListFilterValuesForDimensionResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListFilterValuesForDimensionResponse$outboundSchema;
  /** @deprecated use `ListFilterValuesForDimensionResponse$Outbound` instead. */
  export type Outbound = ListFilterValuesForDimensionResponse$Outbound;
}

export function listFilterValuesForDimensionResponseToJSON(
  listFilterValuesForDimensionResponse: ListFilterValuesForDimensionResponse,
): string {
  return JSON.stringify(
    ListFilterValuesForDimensionResponse$outboundSchema.parse(
      listFilterValuesForDimensionResponse,
    ),
  );
}

export function listFilterValuesForDimensionResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListFilterValuesForDimensionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListFilterValuesForDimensionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListFilterValuesForDimensionResponse' from JSON`,
  );
}
