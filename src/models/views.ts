import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * The unix epoch timestamp when the event was captured.
 *
 * @remarks
 */
export type EventTime = string | number;

export type Details = {
  /**
   * The player_source_bitrate represents the bitrate of the video stream that is being played, measured in bits per second (bps). This value indicates the quality of the video being streamed, with higher bitrates typically corresponding to better video quality but requiring more bandwidth.
   *
   * @remarks
   */
  playerSourceBitrate?: number | null | undefined;
  /**
   * The player_source_codec represents the video or audio codec being used to decode and play the media. A codec is a technology used to compress and decompress digital media files, enabling efficient transmission and storage while maintaining quality.
   *
   * @remarks
   */
  playerSourceCodec?: string | null | undefined;
  /**
   * The player_source_height refers to the vertical resolution of the video being played, measured in pixels. This value represents the height dimension of the video frame and is part of the overall resolution of the video (e.g., 1920x1080, where the height is 1080 pixels).
   *
   * @remarks
   */
  playerSourceHeight?: number | null | undefined;
  /**
   * The player_source_width refers to the horizontal resolution of the video being played, measured in pixels. This value represents the width dimension of the video frame and is part of the overall video resolution (e.g., 1920x1080, where the width is 1920 pixels).
   *
   * @remarks
   */
  playerSourceWidth?: number | null | undefined;
};

export type Event = {
  /**
   * Name of the event.
   *
   * @remarks
   */
  eventName?: string | null | undefined;
  /**
   * The unix epoch timestamp when the event was captured.
   *
   * @remarks
   */
  eventTime?: string | number | null | undefined;
  /**
   * The unix epoch timestamp which represents the actual time the event has occured.
   *
   * @remarks
   */
  viewerTime?: number | null | undefined;
  /**
   * The player_playhead_time represents the current position of the playhead (the point in the video that is being watched) on the video seekbar, measured in milliseconds. This value indicates how far into the video playback has progressed at any given moment.
   *
   * @remarks
   */
  playerPlayheadTime?: number | null | undefined;
  details?: Details | undefined;
};

/**
 * Player Height refers to the vertical dimension, measured in pixels, of the video player as it appears on the webpage.
 *
 * @remarks
 */
export type PlayerHeight = string | number;

/**
 * Player Width refers to the width of the player displayed within the webpage, measured in pixels.
 *
 * @remarks
 */
export type PlayerWidth = string | number;

/**
 * Displays the result of the request.
 */
export type Views = {
  /**
   * The Name associated with the asnId.
   *
   * @remarks
   */
  asnName?: string | null | undefined;
  /**
   * The unique identifier assigned to an Autonomous System (AS) on the Internet. The ASN is used to identify and exchange routing information between different networks.
   *
   * @remarks
   */
  asnId?: number | null | undefined;
  /**
   * The media Id value if the video asset is internal to FastPix.
   *
   * @remarks
   */
  mediaId?: string | null | undefined;
  /**
   * Buffer Count represents the number of rebuffering events occurring during the video view.
   *
   * @remarks
   */
  bufferCount?: number | null | undefined;
  /**
   * Buffer Fill indicates the total time, in milliseconds, that viewers wait for rebuffering per video view.
   *
   * @remarks
   */
  bufferFill?: number | null | undefined;
  /**
   * Buffer Frequency measures the rate at which rebuffering events occur, expressed as events per millisecond.
   *
   * @remarks
   */
  bufferFrequency?: number | null | undefined;
  /**
   * Content Delivery Network (CDN) refers to the network infrastructure responsible for delivering the video content to the viewer.
   *
   * @remarks
   */
  cdn?: string | null | undefined;
  /**
   * City indicates the geographical location of the viewer accessing the video content.
   *
   * @remarks
   */
  city?: string | null | undefined;
  /**
   * Continent represents the continent name of the viewer accessing the video content.
   *
   * @remarks
   */
  continent?: string | null | undefined;
  /**
   * Country Code denotes the two-letter ISO code representing the country of origin for the viewer accessing the video content.
   *
   * @remarks
   */
  countryCode?: string | null | undefined;
  /**
   * Country represents the coded text that represents the country name of viewer accessing the video content.
   *
   * @remarks
   */
  country?: string | null | undefined;
  /**
   * User defined metadata. Only accessible once it is enabled in the organization settings.
   *
   * @remarks
   */
  custom1?: string | null | undefined;
  /**
   * User defined metadata. Only accessible once it is enabled in the organization settings.
   *
   * @remarks
   */
  custom2?: string | null | undefined;
  /**
   * User defined metadata. Only accessible once it is enabled in the organization settings.
   *
   * @remarks
   */
  custom3?: string | null | undefined;
  /**
   * User defined metadata. Only accessible once it is enabled in the organization settings.
   *
   * @remarks
   */
  custom4?: string | null | undefined;
  /**
   * User defined metadata. Only accessible once it is enabled in the organization settings.
   *
   * @remarks
   */
  custom5?: string | null | undefined;
  /**
   * User defined metadata. Only accessible once it is enabled in the organization settings.
   *
   * @remarks
   */
  custom6?: string | null | undefined;
  /**
   * User defined metadata. Only accessible once it is enabled in the organization settings.
   *
   * @remarks
   */
  custom7?: string | null | undefined;
  /**
   * User defined metadata. Only accessible once it is enabled in the organization settings.
   *
   * @remarks
   */
  custom8?: string | null | undefined;
  /**
   * User defined metadata. Only accessible once it is enabled in the organization settings.
   *
   * @remarks
   */
  custom9?: string | null | undefined;
  /**
   * User defined metadata. Only accessible once it is enabled in the organization settings.
   *
   * @remarks
   */
  custom10?: string | null | undefined;
  /**
   * It is a unique identifier associated with a specific workspace within the FastPix platform.
   *
   * @remarks
   */
  workspaceId?: string | undefined;
  /**
   * Events specifies the order of events journey of the video playback
   *
   * @remarks
   */
  events?: Array<Event> | undefined;
  /**
   * Exit Before Video Start indicates whether a viewer abandoned the video before it started playing, typically due to long loading times.
   *
   * @remarks
   */
  exitBeforeVideoStart?: boolean | undefined;
  /**
   * Experiment Name is used in A/B testing scenarios to categorize video views into different experiments.
   *
   * @remarks
   */
  experimentName?: string | undefined;
  /**
   * Insert Timestamp refers to the time instance when the view is started.
   *
   * @remarks
   */
  insertTimestamp?: string | undefined;
  /**
   * Latitude refers to the geographical coordinate representing the north-south position of the viewer's location, truncated to one decimal place.
   *
   * @remarks
   */
  latitude?: string | null | undefined;
  /**
   * FastPix Live Stream ID is the unique identifier associated with a live stream video media within the FastPix Video platform.
   *
   * @remarks
   */
  fpLiveStreamId?: string | null | undefined;
  /**
   * Live Stream Latency measures the average time taken from the point of ingest to the point of display for live stream video views.
   *
   * @remarks
   */
  liveStreamLatency?: number | null | undefined;
  /**
   * Longitude denotes the geographical coordinate representing the east-west position of the viewer's location, truncated to one decimal place.
   *
   * @remarks
   */
  longitude?: string | null | undefined;
  /**
   * Page Load Time measures the time from when the user initiates loading the page to when all resources are loaded on the page.
   *
   * @remarks
   */
  pageLoadTime?: number | null | undefined;
  /**
   * Page Context provides contextual information about the type of page being accessed.
   *
   * @remarks
   */
  pageContext?: string | null | undefined;
  /**
   * View Page URL denotes the URL address of the web page where the video content is being accessed.
   *
   * @remarks
   */
  viewPageUrl?: string | null | undefined;
  /**
   * FastPix Playback ID refers to the unique identifier associated with the playback instance of a video, particularly used in FastPix Video platform.
   *
   * @remarks
   */
  fpPlaybackId?: string | null | undefined;
  /**
   * Playback Success Score represents a numerical value indicating the success or quality of the video playback experience.
   *
   * @remarks
   */
  playbackScore?: number | null | undefined;
  /**
   * Player Autoplay On indicates whether the video player automatically initiated playback of the video content.
   *
   * @remarks
   */
  playerAutoplayOn?: boolean | undefined;
  /**
   * Error Code is an identifier representing a specific type of error that occurred during video playback, potentially leading to playback failure.
   *
   * @remarks
   */
  errorCode?: string | null | undefined;
  /**
   * Error Message is a descriptive message generated by the video player when an error occurs during playback, associated with an error code.
   *
   * @remarks
   */
  errorMessage?: string | null | undefined;
  /**
   * Player Height refers to the vertical dimension, measured in pixels, of the video player as it appears on the webpage.
   *
   * @remarks
   */
  playerHeight?: string | number | null | undefined;
  /**
   * Player Instance ID is a unique identifier that distinguishes each instance of the Player class created when initializing a video.
   *
   * @remarks
   */
  playerInstanceId?: string | null | undefined;
  /**
   * Player Language indicates the language used for text elements within the video player interface.
   *
   * @remarks
   */
  playerLanguage?: string | null | undefined;
  /**
   * FastPix SDK Name identifies the name of the FastPix Player SDK utilized within the player workspace.
   *
   * @remarks
   */
  fpSDK?: string | null | undefined;
  /**
   * FastPix SDK Version specifies the version of the FastPix Player SDK integrated into the player.
   *
   * @remarks
   */
  fpSDKVersion?: string | null | undefined;
  /**
   * Player Name serves to differentiate various configurations or types of players used across the website or application.
   *
   * @remarks
   */
  playerName?: string | null | undefined;
  /**
   * Player Poster refers to the image displayed as a preview before the video playback begins.
   *
   * @remarks
   */
  playerPoster?: string | null | undefined;
  /**
   * Player Preload On indicates whether the player is configured to preload the video content upon page load.
   *
   * @remarks
   */
  playerPreloadOn?: boolean | undefined;
  /**
   * Player Remote Played specifies if the video is being remotely played to devices such as AirPlay or Chromecast, obtained from the SDK.
   *
   * @remarks
   */
  playerRemotePlayed?: boolean | undefined;
  /**
   * Player Software Version indicates the version number of the player software installed.
   *
   * @remarks
   */
  playerSoftwareVersion?: string | null | undefined;
  /**
   * Player Software Name denotes the software utilized for video playback within the player workspace.
   *
   * @remarks
   */
  playerSoftwareName?: string | null | undefined;
  /**
   * Video Source Domain identifies the domain from which the video source originates.
   *
   * @remarks
   */
  videoSourceDomain?: string | null | undefined;
  /**
   * Video Source Duration represents the duration of the video source content, measured in milliseconds.
   *
   * @remarks
   */
  videoSourceDuration?: number | null | undefined;
  /**
   * Player Source Height denotes the vertical dimension, measured in pixels, of the source video content being transmitted to the player.
   *
   * @remarks
   */
  playerSourceHeight?: number | null | undefined;
  /**
   * Video Source Hostname represents the hostname of the video
   *
   * @remarks
   */
  videoSourceHostname?: string | null | undefined;
  /**
   * Video Source Stream Type denotes the type of stream used by the player, although it is currently unused.
   *
   * @remarks
   */
  videoSourceStreamType?: string | null | undefined;
  /**
   * Video Source Type denotes the format of the video source as determined by the player, including formats
   *
   * @remarks
   */
  videoSourceType?: string | null | undefined;
  /**
   * Player Source URL refers to the URL of the video source accessed by the player.
   *
   * @remarks
   */
  videoSourceUrl?: string | null | undefined;
  /**
   * Source Width represents the width of the source video as perceived by the player, typically measured in pixels.
   *
   * @remarks
   */
  playerSourceWidth?: number | null | undefined;
  /**
   * Player Initialisation Time measures the duration, in milliseconds, from the initialization of the player within the webpage to its readiness to receive further instructions.
   *
   * @remarks
   */
  playerInitializationTime?: number | null | undefined;
  /**
   * Player Version indicates the version of the player used to render the video content. It is often utilized for performance comparison between different player versions.
   *
   * @remarks
   */
  playerVersion?: string | null | undefined;
  /**
   * Player Width refers to the width of the player displayed within the webpage, measured in pixels.
   *
   * @remarks
   */
  playerWidth?: string | number | null | undefined;
  /**
   * Render Quality Score is a decimal value representing the score indicating the perceived quality of the video.
   *
   * @remarks
   */
  renderQualityScore?: number | null | undefined;
  /**
   * Buffer Ratio refers to the percentage of time during video playback where the viewer experiences buffering or rebuffering events.
   *
   * @remarks
   */
  bufferRatio?: number | null | undefined;
  /**
   * Stability Score quantifies the smoothness of video playback, typically represented as a decimal value.
   *
   * @remarks
   */
  stabilityScore?: number | null | undefined;
  /**
   * Region denotes the geographical region of the viewer accessing the video content.
   *
   * @remarks
   */
  region?: string | null | undefined;
  /**
   * Session ID refers to the unique identifier tracking a viewer's session within the FastPix platform.
   *
   * @remarks
   */
  sessionId?: string | null | undefined;
  /**
   * Startup Time Score evaluates the startup performance of the player, usually represented as a decimal value
   *
   * @remarks
   */
  startupScore?: number | null | undefined;
  /**
   * Sub Property ID denotes the unique identifier assigned to FastPix properties, previously linked with a specific workspace.
   *
   * @remarks
   */
  subPropertyId?: string | null | undefined;
  /**
   * Video Startup Time measures the duration, in milliseconds, from the initialization of the player within the webpage to its readiness to receive further instructions.
   *
   * @remarks
   */
  videoStartupTime?: number | null | undefined;
  /**
   * Updated Timestamp refers to when the record is updated to a particular Video.
   *
   * @remarks
   */
  updatedTimestamp?: string | null | undefined;
  /**
   * Used Fullscreen denotes whether the viewer utilized the full-screen mode while watching the video.
   *
   * @remarks
   */
  usedFullScreen?: boolean | undefined;
  /**
   * Video Content Type specifies the classification of the video content.
   *
   * @remarks
   */
  videoContentType?: string | null | undefined;
  /**
   * Video Duration represents the length of the video, provided in milliseconds, typically supplied to FastPix via custom metadata.
   *
   * @remarks
   */
  videoDuration?: number | null | undefined;
  /**
   * Video ID refers to an internal identifier assigned by the user or system to uniquely identify a particular video.
   *
   * @remarks
   */
  videoId?: string | null | undefined;
  /**
   * Video Language denotes the primary audio language of the video content, assuming it remains unchanged after playback initiation.
   *
   * @remarks
   */
  videoLanguage?: string | null | undefined;
  /**
   * Video Series denotes the name of a series to which the video content belongs.
   *
   * @remarks
   */
  videoSeries?: string | null | undefined;
  /**
   * Video Startup Failure is a boolean metric indicating whether a viewer encountered an error before the first frame of the video commenced playback.
   *
   * @remarks
   */
  videoStartupFailed?: boolean | undefined;
  /**
   * Video Title refers to the title of the video content being viewed.
   *
   * @remarks
   */
  videoTitle?: string | null | undefined;
  /**
   * Average Request Latency average time it takes for a request to be made and processed during video playback
   *
   * @remarks
   */
  avgRequestLatency?: number | null | undefined;
  /**
   * Average Request Throughput refers to the average throughput or data transfer rate of HTTP requests made during video playback
   *
   * @remarks
   */
  avgRequestThroughput?: number | null | undefined;
  /**
   * DRM Type indicates the type of Digital Rights Management (DRM) utilized during video playback
   *
   * @remarks
   */
  drmType?: string | null | undefined;
  /**
   * Dropped Frame Count represents the number of frames dropped by the video player during playback.
   *
   * @remarks
   */
  droppedFrameCount?: number | null | undefined;
  /**
   * View End refers to the date and time, in Coordinated Universal Time (UTC), when the video viewing session concluded.
   *
   * @remarks
   */
  viewEnd?: string | null | undefined;
  /**
   * View Has Ad is a boolean metric indicating whether an advertisement played or attempted to play during the video view.
   *
   * @remarks
   */
  viewHasAd?: boolean | undefined;
  /**
   * View ID is a unique identifier assigned to each individual video viewing session.
   *
   * @remarks
   */
  viewId?: string | undefined;
  /**
   * Maximum Downscale Percentage represents the highest percentage of downscaling applied to the video during the view.
   *
   * @remarks
   */
  maxDownscaling?: number | null | undefined;
  /**
   * View Max Playhead Position represents the furthest point reached by the playhead during the video view, measured in milliseconds.
   *
   * @remarks
   */
  viewMaxPlayheadPosition?: number | null | undefined;
  /**
   * Max request Latency refers to the maximum rate of data transfer (throughput) during requests made by the playback.
   *
   * @remarks
   */
  maxRequestLatency?: number | null | undefined;
  /**
   * Maximum Upscale Percentage represents the highest percentage of upscaling applied to the video during the view.
   *
   * @remarks
   */
  maxUpscaling?: number | null | undefined;
  /**
   * Playing Time denotes the total duration of time the video content was actively playing during the view, excluding time spent buffering, seeking, or joining.
   *
   * @remarks
   */
  viewPlayingTime?: number | null | undefined;
  /**
   * View Seeked Count signifies the number of times the viewer attempted to seek to a new location within the video.
   *
   * @remarks
   */
  viewSeekedCount?: number | null | undefined;
  /**
   * View Seeked Duration indicates the total duration of time spent waiting for playback to resume after the viewer seeks to a new location. Seek Latency metric in the Dashboard is derived by dividing this value by the view_seek_count.
   *
   * @remarks
   */
  viewSeekedDuration?: number | null | undefined;
  /**
   * View Start refers to the date and time, in Coordinated Universal Time (UTC), when the video viewing session commenced.
   *
   * @remarks
   */
  viewStart?: string | null | undefined;
  /**
   * View Total content Playback Time represents the cumulative duration of video content watched by the viewer, measured in milliseconds. This metric is internally utilized to calculate upscale and downscale percentages.
   *
   * @remarks
   */
  viewTotalContentPlaybackTime?: number | null | undefined;
  /**
   * Average Downscaling refers to the average reduction in video resolution or quality during the playback of video content.
   *
   * @remarks
   */
  avgDownscaling?: number | null | undefined;
  /**
   * Average Upscaling refers to the average resolution of the video source is lower than the resolution of the playback device or screen.
   *
   * @remarks
   */
  avgUpscaling?: number | null | undefined;
  /**
   * Browser denotes the software application utilized by the viewer to access and watch the video content
   *
   * @remarks
   */
  browserName?: string | null | undefined;
  /**
   * Browser version signifies the specific version of the browser software employed by the viewer
   *
   * @remarks
   */
  browserVersion?: string | null | undefined;
  /**
   * Connection Type signifies the type of network connection utilized by the viewer's device
   *
   * @remarks
   */
  connectiontype?: string | null | undefined;
  /**
   * Device Type denotes the classification of the device used by the viewer
   *
   * @remarks
   */
  deviceType?: string | null | undefined;
  /**
   * Device Manufacturer indicates the brand or manufacturer of the device used by the viewer.
   *
   * @remarks
   */
  deviceManufacturer?: string | null | undefined;
  /**
   * Device Model represents the specific model of the device used by the viewer.
   *
   * @remarks
   */
  deviceModel?: string | null | undefined;
  /**
   * Device Name refers to the name or label assigned to the device used by the viewer.
   *
   * @remarks
   */
  deviceName?: string | null | undefined;
  /**
   * Quality Of Experience Score quantifies the overall viewer experience based on various metrics, providing a decimal score to assess the quality of the viewing experience.
   *
   * @remarks
   */
  qualityOfExperienceScore?: number | null | undefined;
  /**
   * Operating System signifies the name of software platform utilized by the viewer.
   *
   * @remarks
   */
  osName?: string | null | undefined;
  /**
   * Operating System Version specifies the specific version of the operating system being used by the viewer
   *
   * @remarks
   */
  osVersion?: string | undefined;
  /**
   * User Agent represents the user agent string transmitted by the viewer's device to identify itself to the server, typically including information about the device and browser.
   *
   * @remarks
   */
  userAgent?: string | null | undefined;
  /**
   * Viewer ID refers to a customer-defined identifier representing the viewer who is watching the video stream. It should be anonymized and not contain any personally identifiable information.
   *
   * @remarks
   */
  viewerId?: string | null | undefined;
  /**
   * Total Watch Time denotes the total duration of video content watched by the viewer, encompassing startup time, playing time, and potential rebuffering time, measured in milliseconds.
   *
   * @remarks
   */
  totalWatchTime?: number | null | undefined;
  /**
   * Average Bitrate represents the average bitrate of the video content watched by the viewer, expressed in bits per second (bps). This metric provides insight into the quality of the video stream.
   *
   * @remarks
   */
  averageBitrate?: number | null | undefined;
  /**
   * Jump Latency refers to the delay or latency experienced when there is a jump or seek action performed by the viewer while watching a video.
   *
   * @remarks
   */
  jumpLatency?: number | null | undefined;
  /**
   * Player Resolution refers to the resolution of the video player window or viewport where the video content is being displayed.
   *
   * @remarks
   */
  playerResolution?: string | null | undefined;
  /**
   * videoResolution refers to the resolution of the video being played.
   *
   * @remarks
   */
  videoResolution?: string | null | undefined;
};

/** @internal */
export const EventTime$inboundSchema: z.ZodType<
  EventTime,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int()]);

/** @internal */
export type EventTime$Outbound = string | number;

/** @internal */
export const EventTime$outboundSchema: z.ZodType<
  EventTime$Outbound,
  z.ZodTypeDef,
  EventTime
> = z.union([z.string(), z.number().int()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventTime$ {
  /** @deprecated use `EventTime$inboundSchema` instead. */
  export const inboundSchema = EventTime$inboundSchema;
  /** @deprecated use `EventTime$outboundSchema` instead. */
  export const outboundSchema = EventTime$outboundSchema;
  /** @deprecated use `EventTime$Outbound` instead. */
  export type Outbound = EventTime$Outbound;
}

export function eventTimeToJSON(eventTime: EventTime): string {
  return JSON.stringify(EventTime$outboundSchema.parse(eventTime));
}

export function eventTimeFromJSON(
  jsonString: string,
): SafeParseResult<EventTime, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EventTime$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EventTime' from JSON`,
  );
}

/** @internal */
export const Details$inboundSchema: z.ZodType<Details, z.ZodTypeDef, unknown> =
  z.object({
    player_source_bitrate: z.nullable(z.number().int()).optional(),
    player_source_codec: z.nullable(z.string()).optional(),
    playerSourceHeight: z.nullable(z.number().int()).optional(),
    playerSourceWidth: z.nullable(z.number().int()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "player_source_bitrate": "playerSourceBitrate",
      "player_source_codec": "playerSourceCodec",
    });
  });

/** @internal */
export type Details$Outbound = {
  player_source_bitrate?: number | null | undefined;
  player_source_codec?: string | null | undefined;
  playerSourceHeight?: number | null | undefined;
  playerSourceWidth?: number | null | undefined;
};

/** @internal */
export const Details$outboundSchema: z.ZodType<
  Details$Outbound,
  z.ZodTypeDef,
  Details
> = z.object({
  playerSourceBitrate: z.nullable(z.number().int()).optional(),
  playerSourceCodec: z.nullable(z.string()).optional(),
  playerSourceHeight: z.nullable(z.number().int()).optional(),
  playerSourceWidth: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    playerSourceBitrate: "player_source_bitrate",
    playerSourceCodec: "player_source_codec",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Details$ {
  /** @deprecated use `Details$inboundSchema` instead. */
  export const inboundSchema = Details$inboundSchema;
  /** @deprecated use `Details$outboundSchema` instead. */
  export const outboundSchema = Details$outboundSchema;
  /** @deprecated use `Details$Outbound` instead. */
  export type Outbound = Details$Outbound;
}

export function detailsToJSON(details: Details): string {
  return JSON.stringify(Details$outboundSchema.parse(details));
}

export function detailsFromJSON(
  jsonString: string,
): SafeParseResult<Details, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Details$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Details' from JSON`,
  );
}

/** @internal */
export const Event$inboundSchema: z.ZodType<Event, z.ZodTypeDef, unknown> = z
  .object({
    event_name: z.nullable(z.string()).optional(),
    event_time: z.nullable(z.union([z.string(), z.number().int()])).optional(),
    viewer_time: z.nullable(z.number().int()).optional(),
    player_playhead_time: z.nullable(z.number().int()).optional(),
    details: z.lazy(() => Details$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "event_name": "eventName",
      "event_time": "eventTime",
      "viewer_time": "viewerTime",
      "player_playhead_time": "playerPlayheadTime",
    });
  });

/** @internal */
export type Event$Outbound = {
  event_name?: string | null | undefined;
  event_time?: string | number | null | undefined;
  viewer_time?: number | null | undefined;
  player_playhead_time?: number | null | undefined;
  details?: Details$Outbound | undefined;
};

/** @internal */
export const Event$outboundSchema: z.ZodType<
  Event$Outbound,
  z.ZodTypeDef,
  Event
> = z.object({
  eventName: z.nullable(z.string()).optional(),
  eventTime: z.nullable(z.union([z.string(), z.number().int()])).optional(),
  viewerTime: z.nullable(z.number().int()).optional(),
  playerPlayheadTime: z.nullable(z.number().int()).optional(),
  details: z.lazy(() => Details$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    eventName: "event_name",
    eventTime: "event_time",
    viewerTime: "viewer_time",
    playerPlayheadTime: "player_playhead_time",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Event$ {
  /** @deprecated use `Event$inboundSchema` instead. */
  export const inboundSchema = Event$inboundSchema;
  /** @deprecated use `Event$outboundSchema` instead. */
  export const outboundSchema = Event$outboundSchema;
  /** @deprecated use `Event$Outbound` instead. */
  export type Outbound = Event$Outbound;
}

export function eventToJSON(event: Event): string {
  return JSON.stringify(Event$outboundSchema.parse(event));
}

export function eventFromJSON(
  jsonString: string,
): SafeParseResult<Event, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Event$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Event' from JSON`,
  );
}

/** @internal */
export const PlayerHeight$inboundSchema: z.ZodType<
  PlayerHeight,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type PlayerHeight$Outbound = string | number;

/** @internal */
export const PlayerHeight$outboundSchema: z.ZodType<
  PlayerHeight$Outbound,
  z.ZodTypeDef,
  PlayerHeight
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlayerHeight$ {
  /** @deprecated use `PlayerHeight$inboundSchema` instead. */
  export const inboundSchema = PlayerHeight$inboundSchema;
  /** @deprecated use `PlayerHeight$outboundSchema` instead. */
  export const outboundSchema = PlayerHeight$outboundSchema;
  /** @deprecated use `PlayerHeight$Outbound` instead. */
  export type Outbound = PlayerHeight$Outbound;
}

export function playerHeightToJSON(playerHeight: PlayerHeight): string {
  return JSON.stringify(PlayerHeight$outboundSchema.parse(playerHeight));
}

export function playerHeightFromJSON(
  jsonString: string,
): SafeParseResult<PlayerHeight, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlayerHeight$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlayerHeight' from JSON`,
  );
}

/** @internal */
export const PlayerWidth$inboundSchema: z.ZodType<
  PlayerWidth,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type PlayerWidth$Outbound = string | number;

/** @internal */
export const PlayerWidth$outboundSchema: z.ZodType<
  PlayerWidth$Outbound,
  z.ZodTypeDef,
  PlayerWidth
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlayerWidth$ {
  /** @deprecated use `PlayerWidth$inboundSchema` instead. */
  export const inboundSchema = PlayerWidth$inboundSchema;
  /** @deprecated use `PlayerWidth$outboundSchema` instead. */
  export const outboundSchema = PlayerWidth$outboundSchema;
  /** @deprecated use `PlayerWidth$Outbound` instead. */
  export type Outbound = PlayerWidth$Outbound;
}

export function playerWidthToJSON(playerWidth: PlayerWidth): string {
  return JSON.stringify(PlayerWidth$outboundSchema.parse(playerWidth));
}

export function playerWidthFromJSON(
  jsonString: string,
): SafeParseResult<PlayerWidth, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlayerWidth$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlayerWidth' from JSON`,
  );
}

/** @internal */
export const Views$inboundSchema: z.ZodType<Views, z.ZodTypeDef, unknown> = z
  .object({
    asnName: z.nullable(z.string()).optional(),
    asnId: z.nullable(z.number().int()).optional(),
    mediaId: z.nullable(z.string()).optional(),
    bufferCount: z.nullable(z.number().int()).optional(),
    bufferFill: z.nullable(z.number().int()).optional(),
    BufferFrequency: z.nullable(z.number()).optional(),
    cdn: z.nullable(z.string()).optional(),
    city: z.nullable(z.string()).optional(),
    continent: z.nullable(z.string()).optional(),
    countryCode: z.nullable(z.string()).optional(),
    country: z.nullable(z.string()).optional(),
    custom1: z.nullable(z.string()).optional(),
    custom2: z.nullable(z.string()).optional(),
    custom3: z.nullable(z.string()).optional(),
    custom4: z.nullable(z.string()).optional(),
    custom5: z.nullable(z.string()).optional(),
    custom6: z.nullable(z.string()).optional(),
    custom7: z.nullable(z.string()).optional(),
    custom8: z.nullable(z.string()).optional(),
    custom9: z.nullable(z.string()).optional(),
    custom10: z.nullable(z.string()).optional(),
    workspaceId: z.string().optional(),
    events: z.array(z.lazy(() => Event$inboundSchema)).optional(),
    exitBeforeVideoStart: z.boolean().optional(),
    experimentName: z.string().optional(),
    insertTimestamp: z.string().optional(),
    latitude: z.nullable(z.string()).optional(),
    fpLiveStreamId: z.nullable(z.string()).optional(),
    liveStreamLatency: z.nullable(z.number()).optional(),
    longitude: z.nullable(z.string()).optional(),
    pageLoadTime: z.nullable(z.number().int()).optional(),
    pageContext: z.nullable(z.string()).optional(),
    viewPageUrl: z.nullable(z.string()).optional(),
    fpPlaybackId: z.nullable(z.string()).optional(),
    playbackScore: z.nullable(z.number()).optional(),
    playerAutoplayOn: z.boolean().optional(),
    errorCode: z.nullable(z.string()).optional(),
    errorMessage: z.nullable(z.string()).optional(),
    playerHeight: z.nullable(z.union([z.string(), z.number()])).optional(),
    playerInstanceId: z.nullable(z.string()).optional(),
    playerLanguage: z.nullable(z.string()).optional(),
    fpSdk: z.nullable(z.string()).optional(),
    fpSdkVersion: z.nullable(z.string()).optional(),
    playerName: z.nullable(z.string()).optional(),
    playerPoster: z.nullable(z.string()).optional(),
    playerPreloadOn: z.boolean().optional(),
    playerRemotePlayed: z.boolean().optional(),
    playerSoftwareVersion: z.nullable(z.string()).optional(),
    playerSoftwareName: z.nullable(z.string()).optional(),
    videoSourceDomain: z.nullable(z.string()).optional(),
    videoSourceDuration: z.nullable(z.number().int()).optional(),
    playerSourceHeight: z.nullable(z.number().int()).optional(),
    videoSourceHostname: z.nullable(z.string()).optional(),
    videoSourceStreamType: z.nullable(z.string()).optional(),
    videoSourceType: z.nullable(z.string()).optional(),
    videoSourceUrl: z.nullable(z.string()).optional(),
    playerSourceWidth: z.nullable(z.number().int()).optional(),
    playerInitializationTime: z.nullable(z.number().int()).optional(),
    playerVersion: z.nullable(z.string()).optional(),
    playerWidth: z.nullable(z.union([z.string(), z.number()])).optional(),
    renderQualityScore: z.nullable(z.number()).optional(),
    bufferRatio: z.nullable(z.number()).optional(),
    stabilityScore: z.nullable(z.number()).optional(),
    region: z.nullable(z.string()).optional(),
    sessionId: z.nullable(z.string()).optional(),
    startupScore: z.nullable(z.number()).optional(),
    subPropertyId: z.nullable(z.string()).optional(),
    videoStartupTime: z.nullable(z.number().int()).optional(),
    updatedTimestamp: z.nullable(z.string()).optional(),
    usedFullScreen: z.boolean().optional(),
    videoContentType: z.nullable(z.string()).optional(),
    videoDuration: z.nullable(z.number().int()).optional(),
    videoId: z.nullable(z.string()).optional(),
    videoLanguage: z.nullable(z.string()).optional(),
    videoSeries: z.nullable(z.string()).optional(),
    videoStartupFailed: z.boolean().optional(),
    videoTitle: z.nullable(z.string()).optional(),
    avgRequestLatency: z.nullable(z.number()).optional(),
    avgRequestThroughput: z.nullable(z.number()).optional(),
    drmType: z.nullable(z.string()).optional(),
    droppedFrameCount: z.nullable(z.number().int()).optional(),
    viewEnd: z.nullable(z.string()).optional(),
    viewHasAd: z.boolean().optional(),
    viewId: z.string().optional(),
    maxDownscaling: z.nullable(z.number()).optional(),
    viewMaxPlayheadPosition: z.nullable(z.number().int()).optional(),
    maxRequestLatency: z.nullable(z.number()).optional(),
    maxUpscaling: z.nullable(z.number()).optional(),
    viewPlayingTime: z.nullable(z.number().int()).optional(),
    viewSeekedCount: z.nullable(z.number().int()).optional(),
    viewSeekedDuration: z.nullable(z.number().int()).optional(),
    viewStart: z.nullable(z.string()).optional(),
    viewTotalContentPlaybackTime: z.nullable(z.number().int()).optional(),
    avgDownscaling: z.nullable(z.number()).optional(),
    avgUpscaling: z.nullable(z.number()).optional(),
    browserName: z.nullable(z.string()).optional(),
    browserVersion: z.nullable(z.string()).optional(),
    connectiontype: z.nullable(z.string()).optional(),
    deviceType: z.nullable(z.string()).optional(),
    deviceManufacturer: z.nullable(z.string()).optional(),
    deviceModel: z.nullable(z.string()).optional(),
    deviceName: z.nullable(z.string()).optional(),
    qualityOfExperienceScore: z.nullable(z.number()).optional(),
    osName: z.nullable(z.string()).optional(),
    osVersion: z.string().optional(),
    userAgent: z.nullable(z.string()).optional(),
    viewerId: z.nullable(z.string()).optional(),
    totalWatchTime: z.nullable(z.number().int()).optional(),
    averageBitrate: z.nullable(z.number()).optional(),
    jumpLatency: z.nullable(z.number()).optional(),
    playerResolution: z.nullable(z.string()).optional(),
    videoResolution: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "BufferFrequency": "bufferFrequency",
      "fpSdk": "fpSDK",
      "fpSdkVersion": "fpSDKVersion",
    });
  });

/** @internal */
export type Views$Outbound = {
  asnName?: string | null | undefined;
  asnId?: number | null | undefined;
  mediaId?: string | null | undefined;
  bufferCount?: number | null | undefined;
  bufferFill?: number | null | undefined;
  BufferFrequency?: number | null | undefined;
  cdn?: string | null | undefined;
  city?: string | null | undefined;
  continent?: string | null | undefined;
  countryCode?: string | null | undefined;
  country?: string | null | undefined;
  custom1?: string | null | undefined;
  custom2?: string | null | undefined;
  custom3?: string | null | undefined;
  custom4?: string | null | undefined;
  custom5?: string | null | undefined;
  custom6?: string | null | undefined;
  custom7?: string | null | undefined;
  custom8?: string | null | undefined;
  custom9?: string | null | undefined;
  custom10?: string | null | undefined;
  workspaceId?: string | undefined;
  events?: Array<Event$Outbound> | undefined;
  exitBeforeVideoStart?: boolean | undefined;
  experimentName?: string | undefined;
  insertTimestamp?: string | undefined;
  latitude?: string | null | undefined;
  fpLiveStreamId?: string | null | undefined;
  liveStreamLatency?: number | null | undefined;
  longitude?: string | null | undefined;
  pageLoadTime?: number | null | undefined;
  pageContext?: string | null | undefined;
  viewPageUrl?: string | null | undefined;
  fpPlaybackId?: string | null | undefined;
  playbackScore?: number | null | undefined;
  playerAutoplayOn?: boolean | undefined;
  errorCode?: string | null | undefined;
  errorMessage?: string | null | undefined;
  playerHeight?: string | number | null | undefined;
  playerInstanceId?: string | null | undefined;
  playerLanguage?: string | null | undefined;
  fpSdk?: string | null | undefined;
  fpSdkVersion?: string | null | undefined;
  playerName?: string | null | undefined;
  playerPoster?: string | null | undefined;
  playerPreloadOn?: boolean | undefined;
  playerRemotePlayed?: boolean | undefined;
  playerSoftwareVersion?: string | null | undefined;
  playerSoftwareName?: string | null | undefined;
  videoSourceDomain?: string | null | undefined;
  videoSourceDuration?: number | null | undefined;
  playerSourceHeight?: number | null | undefined;
  videoSourceHostname?: string | null | undefined;
  videoSourceStreamType?: string | null | undefined;
  videoSourceType?: string | null | undefined;
  videoSourceUrl?: string | null | undefined;
  playerSourceWidth?: number | null | undefined;
  playerInitializationTime?: number | null | undefined;
  playerVersion?: string | null | undefined;
  playerWidth?: string | number | null | undefined;
  renderQualityScore?: number | null | undefined;
  bufferRatio?: number | null | undefined;
  stabilityScore?: number | null | undefined;
  region?: string | null | undefined;
  sessionId?: string | null | undefined;
  startupScore?: number | null | undefined;
  subPropertyId?: string | null | undefined;
  videoStartupTime?: number | null | undefined;
  updatedTimestamp?: string | null | undefined;
  usedFullScreen?: boolean | undefined;
  videoContentType?: string | null | undefined;
  videoDuration?: number | null | undefined;
  videoId?: string | null | undefined;
  videoLanguage?: string | null | undefined;
  videoSeries?: string | null | undefined;
  videoStartupFailed?: boolean | undefined;
  videoTitle?: string | null | undefined;
  avgRequestLatency?: number | null | undefined;
  avgRequestThroughput?: number | null | undefined;
  drmType?: string | null | undefined;
  droppedFrameCount?: number | null | undefined;
  viewEnd?: string | null | undefined;
  viewHasAd?: boolean | undefined;
  viewId?: string | undefined;
  maxDownscaling?: number | null | undefined;
  viewMaxPlayheadPosition?: number | null | undefined;
  maxRequestLatency?: number | null | undefined;
  maxUpscaling?: number | null | undefined;
  viewPlayingTime?: number | null | undefined;
  viewSeekedCount?: number | null | undefined;
  viewSeekedDuration?: number | null | undefined;
  viewStart?: string | null | undefined;
  viewTotalContentPlaybackTime?: number | null | undefined;
  avgDownscaling?: number | null | undefined;
  avgUpscaling?: number | null | undefined;
  browserName?: string | null | undefined;
  browserVersion?: string | null | undefined;
  connectiontype?: string | null | undefined;
  deviceType?: string | null | undefined;
  deviceManufacturer?: string | null | undefined;
  deviceModel?: string | null | undefined;
  deviceName?: string | null | undefined;
  qualityOfExperienceScore?: number | null | undefined;
  osName?: string | null | undefined;
  osVersion?: string | undefined;
  userAgent?: string | null | undefined;
  viewerId?: string | null | undefined;
  totalWatchTime?: number | null | undefined;
  averageBitrate?: number | null | undefined;
  jumpLatency?: number | null | undefined;
  playerResolution?: string | null | undefined;
  videoResolution?: string | null | undefined;
};

/** @internal */
export const Views$outboundSchema: z.ZodType<
  Views$Outbound,
  z.ZodTypeDef,
  Views
> = z.object({
  asnName: z.nullable(z.string()).optional(),
  asnId: z.nullable(z.number().int()).optional(),
  mediaId: z.nullable(z.string()).optional(),
  bufferCount: z.nullable(z.number().int()).optional(),
  bufferFill: z.nullable(z.number().int()).optional(),
  bufferFrequency: z.nullable(z.number()).optional(),
  cdn: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  continent: z.nullable(z.string()).optional(),
  countryCode: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
  custom1: z.nullable(z.string()).optional(),
  custom2: z.nullable(z.string()).optional(),
  custom3: z.nullable(z.string()).optional(),
  custom4: z.nullable(z.string()).optional(),
  custom5: z.nullable(z.string()).optional(),
  custom6: z.nullable(z.string()).optional(),
  custom7: z.nullable(z.string()).optional(),
  custom8: z.nullable(z.string()).optional(),
  custom9: z.nullable(z.string()).optional(),
  custom10: z.nullable(z.string()).optional(),
  workspaceId: z.string().optional(),
  events: z.array(z.lazy(() => Event$outboundSchema)).optional(),
  exitBeforeVideoStart: z.boolean().optional(),
  experimentName: z.string().optional(),
  insertTimestamp: z.string().optional(),
  latitude: z.nullable(z.string()).optional(),
  fpLiveStreamId: z.nullable(z.string()).optional(),
  liveStreamLatency: z.nullable(z.number()).optional(),
  longitude: z.nullable(z.string()).optional(),
  pageLoadTime: z.nullable(z.number().int()).optional(),
  pageContext: z.nullable(z.string()).optional(),
  viewPageUrl: z.nullable(z.string()).optional(),
  fpPlaybackId: z.nullable(z.string()).optional(),
  playbackScore: z.nullable(z.number()).optional(),
  playerAutoplayOn: z.boolean().optional(),
  errorCode: z.nullable(z.string()).optional(),
  errorMessage: z.nullable(z.string()).optional(),
  playerHeight: z.nullable(z.union([z.string(), z.number()])).optional(),
  playerInstanceId: z.nullable(z.string()).optional(),
  playerLanguage: z.nullable(z.string()).optional(),
  fpSDK: z.nullable(z.string()).optional(),
  fpSDKVersion: z.nullable(z.string()).optional(),
  playerName: z.nullable(z.string()).optional(),
  playerPoster: z.nullable(z.string()).optional(),
  playerPreloadOn: z.boolean().optional(),
  playerRemotePlayed: z.boolean().optional(),
  playerSoftwareVersion: z.nullable(z.string()).optional(),
  playerSoftwareName: z.nullable(z.string()).optional(),
  videoSourceDomain: z.nullable(z.string()).optional(),
  videoSourceDuration: z.nullable(z.number().int()).optional(),
  playerSourceHeight: z.nullable(z.number().int()).optional(),
  videoSourceHostname: z.nullable(z.string()).optional(),
  videoSourceStreamType: z.nullable(z.string()).optional(),
  videoSourceType: z.nullable(z.string()).optional(),
  videoSourceUrl: z.nullable(z.string()).optional(),
  playerSourceWidth: z.nullable(z.number().int()).optional(),
  playerInitializationTime: z.nullable(z.number().int()).optional(),
  playerVersion: z.nullable(z.string()).optional(),
  playerWidth: z.nullable(z.union([z.string(), z.number()])).optional(),
  renderQualityScore: z.nullable(z.number()).optional(),
  bufferRatio: z.nullable(z.number()).optional(),
  stabilityScore: z.nullable(z.number()).optional(),
  region: z.nullable(z.string()).optional(),
  sessionId: z.nullable(z.string()).optional(),
  startupScore: z.nullable(z.number()).optional(),
  subPropertyId: z.nullable(z.string()).optional(),
  videoStartupTime: z.nullable(z.number().int()).optional(),
  updatedTimestamp: z.nullable(z.string()).optional(),
  usedFullScreen: z.boolean().optional(),
  videoContentType: z.nullable(z.string()).optional(),
  videoDuration: z.nullable(z.number().int()).optional(),
  videoId: z.nullable(z.string()).optional(),
  videoLanguage: z.nullable(z.string()).optional(),
  videoSeries: z.nullable(z.string()).optional(),
  videoStartupFailed: z.boolean().optional(),
  videoTitle: z.nullable(z.string()).optional(),
  avgRequestLatency: z.nullable(z.number()).optional(),
  avgRequestThroughput: z.nullable(z.number()).optional(),
  drmType: z.nullable(z.string()).optional(),
  droppedFrameCount: z.nullable(z.number().int()).optional(),
  viewEnd: z.nullable(z.string()).optional(),
  viewHasAd: z.boolean().optional(),
  viewId: z.string().optional(),
  maxDownscaling: z.nullable(z.number()).optional(),
  viewMaxPlayheadPosition: z.nullable(z.number().int()).optional(),
  maxRequestLatency: z.nullable(z.number()).optional(),
  maxUpscaling: z.nullable(z.number()).optional(),
  viewPlayingTime: z.nullable(z.number().int()).optional(),
  viewSeekedCount: z.nullable(z.number().int()).optional(),
  viewSeekedDuration: z.nullable(z.number().int()).optional(),
  viewStart: z.nullable(z.string()).optional(),
  viewTotalContentPlaybackTime: z.nullable(z.number().int()).optional(),
  avgDownscaling: z.nullable(z.number()).optional(),
  avgUpscaling: z.nullable(z.number()).optional(),
  browserName: z.nullable(z.string()).optional(),
  browserVersion: z.nullable(z.string()).optional(),
  connectiontype: z.nullable(z.string()).optional(),
  deviceType: z.nullable(z.string()).optional(),
  deviceManufacturer: z.nullable(z.string()).optional(),
  deviceModel: z.nullable(z.string()).optional(),
  deviceName: z.nullable(z.string()).optional(),
  qualityOfExperienceScore: z.nullable(z.number()).optional(),
  osName: z.nullable(z.string()).optional(),
  osVersion: z.string().optional(),
  userAgent: z.nullable(z.string()).optional(),
  viewerId: z.nullable(z.string()).optional(),
  totalWatchTime: z.nullable(z.number().int()).optional(),
  averageBitrate: z.nullable(z.number()).optional(),
  jumpLatency: z.nullable(z.number()).optional(),
  playerResolution: z.nullable(z.string()).optional(),
  videoResolution: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    bufferFrequency: "BufferFrequency",
    fpSDK: "fpSdk",
    fpSDKVersion: "fpSdkVersion",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Views$ {
  /** @deprecated use `Views$inboundSchema` instead. */
  export const inboundSchema = Views$inboundSchema;
  /** @deprecated use `Views$outboundSchema` instead. */
  export const outboundSchema = Views$outboundSchema;
  /** @deprecated use `Views$Outbound` instead. */
  export type Outbound = Views$Outbound;
}

export function viewsToJSON(views: Views): string {
  return JSON.stringify(Views$outboundSchema.parse(views));
}

export function viewsFromJSON(
  jsonString: string,
): SafeParseResult<Views, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Views$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Views' from JSON`,
  );
}
