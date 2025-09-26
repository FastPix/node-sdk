import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * The maximum resolution specified for the media.
 */
export const MediaClipResponseMaxResolution = {
  TwoThousandOneHundredAndSixtyp: "2160p",
  OneThousandFourHundredAndFortyp: "1440p",
  OneThousandAndEightyp: "1080p",
  SevenHundredAndTwentyp: "720p",
  FourHundredAndEightyp: "480p",
  ThreeHundredAndSixtyp: "360p",
} as const;
/**
 * The maximum resolution specified for the media.
 */
export type MediaClipResponseMaxResolution = ClosedEnum<
  typeof MediaClipResponseMaxResolution
>;

/**
 * The actual resolution of the uploaded media.
 */
export const MediaClipResponseSourceResolution = {
  TwoThousandOneHundredAndSixtyp: "2160p",
  OneThousandFourHundredAndFortyp: "1440p",
  OneThousandAndEightyp: "1080p",
  SevenHundredAndTwentyp: "720p",
  FourHundredAndEightyp: "480p",
  ThreeHundredAndSixtyp: "360p",
} as const;
/**
 * The actual resolution of the uploaded media.
 */
export type MediaClipResponseSourceResolution = ClosedEnum<
  typeof MediaClipResponseSourceResolution
>;

/**
 * The current processing status of the media.
 */
export const Status = {
  Preparing: "preparing",
  Ready: "ready",
  Failed: "failed",
  Created: "created",
} as const;
/**
 * The current processing status of the media.
 */
export type Status = ClosedEnum<typeof Status>;

export type MediaClipResponseDomains = {
  defaultPolicy?: string | undefined;
  allow?: Array<string> | undefined;
  deny?: Array<string> | undefined;
};

export type MediaClipResponseUserAgents = {
  defaultPolicy?: string | undefined;
  allow?: Array<string> | undefined;
  deny?: Array<string> | undefined;
};

export type MediaClipResponseAccessRestrictions = {
  domains?: MediaClipResponseDomains | undefined;
  userAgents?: MediaClipResponseUserAgents | undefined;
};

export type MediaClipResponsePlaybackId = {
  /**
   * The unique identifier for playback.
   */
  id?: string | undefined;
  /**
   * The access policy of the playback.
   */
  accessPolicy?: string | undefined;
  accessRestrictions?: MediaClipResponseAccessRestrictions | undefined;
};

/**
 * The type of media track.
 */
export const MediaClipResponseType = {
  Video: "video",
  Audio: "audio",
  Subtitle: "subtitle",
} as const;
/**
 * The type of media track.
 */
export type MediaClipResponseType = ClosedEnum<typeof MediaClipResponseType>;

export type MediaClipResponseTrack = {
  /**
   * The unique identifier for the media track.
   */
  id?: string | undefined;
  /**
   * The type of media track.
   */
  type?: MediaClipResponseType | undefined;
  /**
   * The width of the video track (applicable to video only).
   */
  width?: number | undefined;
  /**
   * The height of the video track (applicable to video only).
   */
  height?: number | undefined;
  /**
   * The current processing status of the track.
   */
  status?: string | undefined;
  /**
   * The language code of the audio or subtitle track.
   */
  languageCode?: string | undefined;
  /**
   * The language name of the audio or subtitle track.
   */
  languageName?: string | undefined;
};

export type GeneratedSubtitle = {};

export type MediaClipResponseData = {
  /**
   * A video thumbnail that acts as a preview image for the video.
   */
  thumbnail?: string | undefined;
  /**
   * The unique identifier assigned to the media by FastPix.
   */
  id?: string | undefined;
  /**
   * The ID of the original source media.
   */
  sourceMediaId?: string | undefined;
  /**
   * The unique identifier for the workspace associated with the media.
   */
  workspaceId?: string | undefined;
  /**
   * Tag a video in "key" : "value" pairs for searchable metadata. Maximum 10 entries, 255 characters each.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * The maximum resolution specified for the media.
   */
  maxResolution?: MediaClipResponseMaxResolution | undefined;
  /**
   * The actual resolution of the uploaded media.
   */
  sourceResolution?: MediaClipResponseSourceResolution | undefined;
  /**
   * The current processing status of the media.
   */
  status?: Status | undefined;
  /**
   * Indicates whether the original media file is accessible.
   */
  sourceAccess?: boolean | undefined;
  playbackIds?: Array<MediaClipResponsePlaybackId> | undefined;
  tracks?: Array<MediaClipResponseTrack> | undefined;
  /**
   * Generated subtitle tracks associated with the media.
   */
  generatedSubtitles?: Array<GeneratedSubtitle> | undefined;
  /**
   * Indicates whether the media contains only audio.
   */
  isAudioOnly?: boolean | undefined;
  /**
   * Indicates whether subtitles are available for the media.
   */
  subtitleAvailable?: boolean | undefined;
  /**
   * The total duration of the media.
   */
  duration?: string | undefined;
  /**
   * The aspect ratio of the media.
   */
  aspectRatio?: string | undefined;
  /**
   * Timestamp of when the media was created.
   */
  createdAt?: Date | undefined;
  /**
   * Timestamp of when the media was last updated.
   */
  updatedAt?: Date | undefined;
};

export type MediaClipResponsePagination = {
  /**
   * Total number of records available.
   */
  totalRecords?: number | undefined;
  /**
   * The starting offset of the current result set.
   */
  currentOffset?: number | undefined;
  /**
   * The number of items returned in the current response.
   */
  offsetCount?: number | undefined;
};

export type MediaClipResponse = {
  success: boolean;
  data: Array<MediaClipResponseData>;
  pagination: MediaClipResponsePagination;
};

/** @internal */
export const MediaClipResponseMaxResolution$inboundSchema: z.ZodNativeEnum<
  typeof MediaClipResponseMaxResolution
> = z.nativeEnum(MediaClipResponseMaxResolution);

/** @internal */
export const MediaClipResponseMaxResolution$outboundSchema: z.ZodNativeEnum<
  typeof MediaClipResponseMaxResolution
> = MediaClipResponseMaxResolution$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipResponseMaxResolution$ {
  /** @deprecated use `MediaClipResponseMaxResolution$inboundSchema` instead. */
  export const inboundSchema = MediaClipResponseMaxResolution$inboundSchema;
  /** @deprecated use `MediaClipResponseMaxResolution$outboundSchema` instead. */
  export const outboundSchema = MediaClipResponseMaxResolution$outboundSchema;
}

/** @internal */
export const MediaClipResponseSourceResolution$inboundSchema: z.ZodNativeEnum<
  typeof MediaClipResponseSourceResolution
> = z.nativeEnum(MediaClipResponseSourceResolution);

/** @internal */
export const MediaClipResponseSourceResolution$outboundSchema: z.ZodNativeEnum<
  typeof MediaClipResponseSourceResolution
> = MediaClipResponseSourceResolution$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipResponseSourceResolution$ {
  /** @deprecated use `MediaClipResponseSourceResolution$inboundSchema` instead. */
  export const inboundSchema = MediaClipResponseSourceResolution$inboundSchema;
  /** @deprecated use `MediaClipResponseSourceResolution$outboundSchema` instead. */
  export const outboundSchema =
    MediaClipResponseSourceResolution$outboundSchema;
}

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z
  .nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> =
  Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const MediaClipResponseDomains$inboundSchema: z.ZodType<
  MediaClipResponseDomains,
  z.ZodTypeDef,
  unknown
> = z.object({
  defaultPolicy: z.string().optional(),
  allow: z.array(z.string()).optional(),
  deny: z.array(z.string()).optional(),
});

/** @internal */
export type MediaClipResponseDomains$Outbound = {
  defaultPolicy?: string | undefined;
  allow?: Array<string> | undefined;
  deny?: Array<string> | undefined;
};

/** @internal */
export const MediaClipResponseDomains$outboundSchema: z.ZodType<
  MediaClipResponseDomains$Outbound,
  z.ZodTypeDef,
  MediaClipResponseDomains
> = z.object({
  defaultPolicy: z.string().optional(),
  allow: z.array(z.string()).optional(),
  deny: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipResponseDomains$ {
  /** @deprecated use `MediaClipResponseDomains$inboundSchema` instead. */
  export const inboundSchema = MediaClipResponseDomains$inboundSchema;
  /** @deprecated use `MediaClipResponseDomains$outboundSchema` instead. */
  export const outboundSchema = MediaClipResponseDomains$outboundSchema;
  /** @deprecated use `MediaClipResponseDomains$Outbound` instead. */
  export type Outbound = MediaClipResponseDomains$Outbound;
}

export function mediaClipResponseDomainsToJSON(
  mediaClipResponseDomains: MediaClipResponseDomains,
): string {
  return JSON.stringify(
    MediaClipResponseDomains$outboundSchema.parse(mediaClipResponseDomains),
  );
}

export function mediaClipResponseDomainsFromJSON(
  jsonString: string,
): SafeParseResult<MediaClipResponseDomains, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaClipResponseDomains$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaClipResponseDomains' from JSON`,
  );
}

/** @internal */
export const MediaClipResponseUserAgents$inboundSchema: z.ZodType<
  MediaClipResponseUserAgents,
  z.ZodTypeDef,
  unknown
> = z.object({
  defaultPolicy: z.string().optional(),
  allow: z.array(z.string()).optional(),
  deny: z.array(z.string()).optional(),
});

/** @internal */
export type MediaClipResponseUserAgents$Outbound = {
  defaultPolicy?: string | undefined;
  allow?: Array<string> | undefined;
  deny?: Array<string> | undefined;
};

/** @internal */
export const MediaClipResponseUserAgents$outboundSchema: z.ZodType<
  MediaClipResponseUserAgents$Outbound,
  z.ZodTypeDef,
  MediaClipResponseUserAgents
> = z.object({
  defaultPolicy: z.string().optional(),
  allow: z.array(z.string()).optional(),
  deny: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipResponseUserAgents$ {
  /** @deprecated use `MediaClipResponseUserAgents$inboundSchema` instead. */
  export const inboundSchema = MediaClipResponseUserAgents$inboundSchema;
  /** @deprecated use `MediaClipResponseUserAgents$outboundSchema` instead. */
  export const outboundSchema = MediaClipResponseUserAgents$outboundSchema;
  /** @deprecated use `MediaClipResponseUserAgents$Outbound` instead. */
  export type Outbound = MediaClipResponseUserAgents$Outbound;
}

export function mediaClipResponseUserAgentsToJSON(
  mediaClipResponseUserAgents: MediaClipResponseUserAgents,
): string {
  return JSON.stringify(
    MediaClipResponseUserAgents$outboundSchema.parse(
      mediaClipResponseUserAgents,
    ),
  );
}

export function mediaClipResponseUserAgentsFromJSON(
  jsonString: string,
): SafeParseResult<MediaClipResponseUserAgents, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaClipResponseUserAgents$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaClipResponseUserAgents' from JSON`,
  );
}

/** @internal */
export const MediaClipResponseAccessRestrictions$inboundSchema: z.ZodType<
  MediaClipResponseAccessRestrictions,
  z.ZodTypeDef,
  unknown
> = z.object({
  domains: z.lazy(() => MediaClipResponseDomains$inboundSchema).optional(),
  userAgents: z.lazy(() => MediaClipResponseUserAgents$inboundSchema)
    .optional(),
});

/** @internal */
export type MediaClipResponseAccessRestrictions$Outbound = {
  domains?: MediaClipResponseDomains$Outbound | undefined;
  userAgents?: MediaClipResponseUserAgents$Outbound | undefined;
};

/** @internal */
export const MediaClipResponseAccessRestrictions$outboundSchema: z.ZodType<
  MediaClipResponseAccessRestrictions$Outbound,
  z.ZodTypeDef,
  MediaClipResponseAccessRestrictions
> = z.object({
  domains: z.lazy(() => MediaClipResponseDomains$outboundSchema).optional(),
  userAgents: z.lazy(() => MediaClipResponseUserAgents$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipResponseAccessRestrictions$ {
  /** @deprecated use `MediaClipResponseAccessRestrictions$inboundSchema` instead. */
  export const inboundSchema =
    MediaClipResponseAccessRestrictions$inboundSchema;
  /** @deprecated use `MediaClipResponseAccessRestrictions$outboundSchema` instead. */
  export const outboundSchema =
    MediaClipResponseAccessRestrictions$outboundSchema;
  /** @deprecated use `MediaClipResponseAccessRestrictions$Outbound` instead. */
  export type Outbound = MediaClipResponseAccessRestrictions$Outbound;
}

export function mediaClipResponseAccessRestrictionsToJSON(
  mediaClipResponseAccessRestrictions: MediaClipResponseAccessRestrictions,
): string {
  return JSON.stringify(
    MediaClipResponseAccessRestrictions$outboundSchema.parse(
      mediaClipResponseAccessRestrictions,
    ),
  );
}

export function mediaClipResponseAccessRestrictionsFromJSON(
  jsonString: string,
): SafeParseResult<MediaClipResponseAccessRestrictions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      MediaClipResponseAccessRestrictions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaClipResponseAccessRestrictions' from JSON`,
  );
}

/** @internal */
export const MediaClipResponsePlaybackId$inboundSchema: z.ZodType<
  MediaClipResponsePlaybackId,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  accessPolicy: z.string().optional(),
  accessRestrictions: z.lazy(() =>
    MediaClipResponseAccessRestrictions$inboundSchema
  ).optional(),
});

/** @internal */
export type MediaClipResponsePlaybackId$Outbound = {
  id?: string | undefined;
  accessPolicy?: string | undefined;
  accessRestrictions?: MediaClipResponseAccessRestrictions$Outbound | undefined;
};

/** @internal */
export const MediaClipResponsePlaybackId$outboundSchema: z.ZodType<
  MediaClipResponsePlaybackId$Outbound,
  z.ZodTypeDef,
  MediaClipResponsePlaybackId
> = z.object({
  id: z.string().optional(),
  accessPolicy: z.string().optional(),
  accessRestrictions: z.lazy(() =>
    MediaClipResponseAccessRestrictions$outboundSchema
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipResponsePlaybackId$ {
  /** @deprecated use `MediaClipResponsePlaybackId$inboundSchema` instead. */
  export const inboundSchema = MediaClipResponsePlaybackId$inboundSchema;
  /** @deprecated use `MediaClipResponsePlaybackId$outboundSchema` instead. */
  export const outboundSchema = MediaClipResponsePlaybackId$outboundSchema;
  /** @deprecated use `MediaClipResponsePlaybackId$Outbound` instead. */
  export type Outbound = MediaClipResponsePlaybackId$Outbound;
}

export function mediaClipResponsePlaybackIdToJSON(
  mediaClipResponsePlaybackId: MediaClipResponsePlaybackId,
): string {
  return JSON.stringify(
    MediaClipResponsePlaybackId$outboundSchema.parse(
      mediaClipResponsePlaybackId,
    ),
  );
}

export function mediaClipResponsePlaybackIdFromJSON(
  jsonString: string,
): SafeParseResult<MediaClipResponsePlaybackId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaClipResponsePlaybackId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaClipResponsePlaybackId' from JSON`,
  );
}

/** @internal */
export const MediaClipResponseType$inboundSchema: z.ZodNativeEnum<
  typeof MediaClipResponseType
> = z.nativeEnum(MediaClipResponseType);

/** @internal */
export const MediaClipResponseType$outboundSchema: z.ZodNativeEnum<
  typeof MediaClipResponseType
> = MediaClipResponseType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipResponseType$ {
  /** @deprecated use `MediaClipResponseType$inboundSchema` instead. */
  export const inboundSchema = MediaClipResponseType$inboundSchema;
  /** @deprecated use `MediaClipResponseType$outboundSchema` instead. */
  export const outboundSchema = MediaClipResponseType$outboundSchema;
}

/** @internal */
export const MediaClipResponseTrack$inboundSchema: z.ZodType<
  MediaClipResponseTrack,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  type: MediaClipResponseType$inboundSchema.optional(),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  status: z.string().optional(),
  languageCode: z.string().optional(),
  languageName: z.string().optional(),
});

/** @internal */
export type MediaClipResponseTrack$Outbound = {
  id?: string | undefined;
  type?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  status?: string | undefined;
  languageCode?: string | undefined;
  languageName?: string | undefined;
};

/** @internal */
export const MediaClipResponseTrack$outboundSchema: z.ZodType<
  MediaClipResponseTrack$Outbound,
  z.ZodTypeDef,
  MediaClipResponseTrack
> = z.object({
  id: z.string().optional(),
  type: MediaClipResponseType$outboundSchema.optional(),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  status: z.string().optional(),
  languageCode: z.string().optional(),
  languageName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipResponseTrack$ {
  /** @deprecated use `MediaClipResponseTrack$inboundSchema` instead. */
  export const inboundSchema = MediaClipResponseTrack$inboundSchema;
  /** @deprecated use `MediaClipResponseTrack$outboundSchema` instead. */
  export const outboundSchema = MediaClipResponseTrack$outboundSchema;
  /** @deprecated use `MediaClipResponseTrack$Outbound` instead. */
  export type Outbound = MediaClipResponseTrack$Outbound;
}

export function mediaClipResponseTrackToJSON(
  mediaClipResponseTrack: MediaClipResponseTrack,
): string {
  return JSON.stringify(
    MediaClipResponseTrack$outboundSchema.parse(mediaClipResponseTrack),
  );
}

export function mediaClipResponseTrackFromJSON(
  jsonString: string,
): SafeParseResult<MediaClipResponseTrack, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaClipResponseTrack$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaClipResponseTrack' from JSON`,
  );
}

/** @internal */
export const GeneratedSubtitle$inboundSchema: z.ZodType<
  GeneratedSubtitle,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type GeneratedSubtitle$Outbound = {};

/** @internal */
export const GeneratedSubtitle$outboundSchema: z.ZodType<
  GeneratedSubtitle$Outbound,
  z.ZodTypeDef,
  GeneratedSubtitle
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneratedSubtitle$ {
  /** @deprecated use `GeneratedSubtitle$inboundSchema` instead. */
  export const inboundSchema = GeneratedSubtitle$inboundSchema;
  /** @deprecated use `GeneratedSubtitle$outboundSchema` instead. */
  export const outboundSchema = GeneratedSubtitle$outboundSchema;
  /** @deprecated use `GeneratedSubtitle$Outbound` instead. */
  export type Outbound = GeneratedSubtitle$Outbound;
}

export function generatedSubtitleToJSON(
  generatedSubtitle: GeneratedSubtitle,
): string {
  return JSON.stringify(
    GeneratedSubtitle$outboundSchema.parse(generatedSubtitle),
  );
}

export function generatedSubtitleFromJSON(
  jsonString: string,
): SafeParseResult<GeneratedSubtitle, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GeneratedSubtitle$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GeneratedSubtitle' from JSON`,
  );
}

/** @internal */
export const MediaClipResponseData$inboundSchema: z.ZodType<
  MediaClipResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  thumbnail: z.string().optional(),
  id: z.string().optional(),
  sourceMediaId: z.string().optional(),
  workspaceId: z.string().optional(),
  metadata: z.record(z.string()).optional(),
  maxResolution: MediaClipResponseMaxResolution$inboundSchema.optional(),
  sourceResolution: MediaClipResponseSourceResolution$inboundSchema.optional(),
  status: Status$inboundSchema.optional(),
  sourceAccess: z.boolean().optional(),
  playbackIds: z.array(z.lazy(() => MediaClipResponsePlaybackId$inboundSchema))
    .optional(),
  tracks: z.array(z.lazy(() => MediaClipResponseTrack$inboundSchema))
    .optional(),
  generatedSubtitles: z.array(z.lazy(() => GeneratedSubtitle$inboundSchema))
    .optional(),
  isAudioOnly: z.boolean().optional(),
  subtitleAvailable: z.boolean().optional(),
  duration: z.string().optional(),
  aspectRatio: z.string().optional(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type MediaClipResponseData$Outbound = {
  thumbnail?: string | undefined;
  id?: string | undefined;
  sourceMediaId?: string | undefined;
  workspaceId?: string | undefined;
  metadata?: { [k: string]: string } | undefined;
  maxResolution?: string | undefined;
  sourceResolution?: string | undefined;
  status?: string | undefined;
  sourceAccess?: boolean | undefined;
  playbackIds?: Array<MediaClipResponsePlaybackId$Outbound> | undefined;
  tracks?: Array<MediaClipResponseTrack$Outbound> | undefined;
  generatedSubtitles?: Array<GeneratedSubtitle$Outbound> | undefined;
  isAudioOnly?: boolean | undefined;
  subtitleAvailable?: boolean | undefined;
  duration?: string | undefined;
  aspectRatio?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
};

/** @internal */
export const MediaClipResponseData$outboundSchema: z.ZodType<
  MediaClipResponseData$Outbound,
  z.ZodTypeDef,
  MediaClipResponseData
> = z.object({
  thumbnail: z.string().optional(),
  id: z.string().optional(),
  sourceMediaId: z.string().optional(),
  workspaceId: z.string().optional(),
  metadata: z.record(z.string()).optional(),
  maxResolution: MediaClipResponseMaxResolution$outboundSchema.optional(),
  sourceResolution: MediaClipResponseSourceResolution$outboundSchema.optional(),
  status: Status$outboundSchema.optional(),
  sourceAccess: z.boolean().optional(),
  playbackIds: z.array(z.lazy(() => MediaClipResponsePlaybackId$outboundSchema))
    .optional(),
  tracks: z.array(z.lazy(() => MediaClipResponseTrack$outboundSchema))
    .optional(),
  generatedSubtitles: z.array(z.lazy(() => GeneratedSubtitle$outboundSchema))
    .optional(),
  isAudioOnly: z.boolean().optional(),
  subtitleAvailable: z.boolean().optional(),
  duration: z.string().optional(),
  aspectRatio: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipResponseData$ {
  /** @deprecated use `MediaClipResponseData$inboundSchema` instead. */
  export const inboundSchema = MediaClipResponseData$inboundSchema;
  /** @deprecated use `MediaClipResponseData$outboundSchema` instead. */
  export const outboundSchema = MediaClipResponseData$outboundSchema;
  /** @deprecated use `MediaClipResponseData$Outbound` instead. */
  export type Outbound = MediaClipResponseData$Outbound;
}

export function mediaClipResponseDataToJSON(
  mediaClipResponseData: MediaClipResponseData,
): string {
  return JSON.stringify(
    MediaClipResponseData$outboundSchema.parse(mediaClipResponseData),
  );
}

export function mediaClipResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<MediaClipResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaClipResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaClipResponseData' from JSON`,
  );
}

/** @internal */
export const MediaClipResponsePagination$inboundSchema: z.ZodType<
  MediaClipResponsePagination,
  z.ZodTypeDef,
  unknown
> = z.object({
  totalRecords: z.number().int().optional(),
  currentOffset: z.number().int().optional(),
  offsetCount: z.number().int().optional(),
});

/** @internal */
export type MediaClipResponsePagination$Outbound = {
  totalRecords?: number | undefined;
  currentOffset?: number | undefined;
  offsetCount?: number | undefined;
};

/** @internal */
export const MediaClipResponsePagination$outboundSchema: z.ZodType<
  MediaClipResponsePagination$Outbound,
  z.ZodTypeDef,
  MediaClipResponsePagination
> = z.object({
  totalRecords: z.number().int().optional(),
  currentOffset: z.number().int().optional(),
  offsetCount: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipResponsePagination$ {
  /** @deprecated use `MediaClipResponsePagination$inboundSchema` instead. */
  export const inboundSchema = MediaClipResponsePagination$inboundSchema;
  /** @deprecated use `MediaClipResponsePagination$outboundSchema` instead. */
  export const outboundSchema = MediaClipResponsePagination$outboundSchema;
  /** @deprecated use `MediaClipResponsePagination$Outbound` instead. */
  export type Outbound = MediaClipResponsePagination$Outbound;
}

export function mediaClipResponsePaginationToJSON(
  mediaClipResponsePagination: MediaClipResponsePagination,
): string {
  return JSON.stringify(
    MediaClipResponsePagination$outboundSchema.parse(
      mediaClipResponsePagination,
    ),
  );
}

export function mediaClipResponsePaginationFromJSON(
  jsonString: string,
): SafeParseResult<MediaClipResponsePagination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaClipResponsePagination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaClipResponsePagination' from JSON`,
  );
}

/** @internal */
export const MediaClipResponse$inboundSchema: z.ZodType<
  MediaClipResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean(),
  data: z.array(z.lazy(() => MediaClipResponseData$inboundSchema)),
  pagination: z.lazy(() => MediaClipResponsePagination$inboundSchema),
});

/** @internal */
export type MediaClipResponse$Outbound = {
  success: boolean;
  data: Array<MediaClipResponseData$Outbound>;
  pagination: MediaClipResponsePagination$Outbound;
};

/** @internal */
export const MediaClipResponse$outboundSchema: z.ZodType<
  MediaClipResponse$Outbound,
  z.ZodTypeDef,
  MediaClipResponse
> = z.object({
  success: z.boolean(),
  data: z.array(z.lazy(() => MediaClipResponseData$outboundSchema)),
  pagination: z.lazy(() => MediaClipResponsePagination$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipResponse$ {
  /** @deprecated use `MediaClipResponse$inboundSchema` instead. */
  export const inboundSchema = MediaClipResponse$inboundSchema;
  /** @deprecated use `MediaClipResponse$outboundSchema` instead. */
  export const outboundSchema = MediaClipResponse$outboundSchema;
  /** @deprecated use `MediaClipResponse$Outbound` instead. */
  export type Outbound = MediaClipResponse$Outbound;
}

export function mediaClipResponseToJSON(
  mediaClipResponse: MediaClipResponse,
): string {
  return JSON.stringify(
    MediaClipResponse$outboundSchema.parse(mediaClipResponse),
  );
}

export function mediaClipResponseFromJSON(
  jsonString: string,
): SafeParseResult<MediaClipResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaClipResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaClipResponse' from JSON`,
  );
}
