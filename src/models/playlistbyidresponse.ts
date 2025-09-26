import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * type of the playlist, when it was created
 */
export const PlaylistByIdResponseType = {
  Manual: "manual",
  Smart: "smart",
} as const;
/**
 * type of the playlist, when it was created
 */
export type PlaylistByIdResponseType = ClosedEnum<
  typeof PlaylistByIdResponseType
>;

export type PlaylistByIdResponseMediaList = {
  /**
   * Timestamp of media creation in the workspace.
   */
  createdAt?: Date | undefined;
  /**
   * Duration of the media in hh:mm:ss format.
   */
  duration?: string | undefined;
  /**
   * unique id of the particular media.
   */
  id?: string | undefined;
  /**
   * source resolution of the media.
   */
  sourceResolution?: string | undefined;
  /**
   * status of the media, only media with ready status will be added to playlist.
   */
  status?: string | undefined;
  /**
   * thumbnail for the particular media.
   */
  thumbnail?: string | undefined;
};

export type PlaylistByIdResponseData = {
  /**
   * The unique id of the playlist
   */
  id?: string | undefined;
  /**
   * The name of the playlist set by the user
   */
  name?: string | undefined;
  /**
   * Unique string value assigned by user to the playlist.
   */
  referenceId?: string | undefined;
  /**
   * type of the playlist, when it was created
   */
  type?: PlaylistByIdResponseType | undefined;
  /**
   * Description of the playlist set by the user.
   */
  description?: string | undefined;
  mediaList?: Array<PlaylistByIdResponseMediaList> | undefined;
  /**
   * The unique id of the workspace in which the playlist is present.
   */
  workspaceId?: string | undefined;
  /**
   * Timestamp of playlist creation.
   */
  createdAt?: Date | undefined;
  /**
   * Playlist's most recent update timestamp.
   */
  updatedAt?: Date | undefined;
  /**
   * No. of media present in the playlist
   */
  mediaCount?: number | undefined;
};

export type PlaylistByIdResponse = {
  success?: boolean | undefined;
  data?: PlaylistByIdResponseData | undefined;
};

/** @internal */
export const PlaylistByIdResponseType$inboundSchema: z.ZodNativeEnum<
  typeof PlaylistByIdResponseType
> = z.nativeEnum(PlaylistByIdResponseType);

/** @internal */
export const PlaylistByIdResponseType$outboundSchema: z.ZodNativeEnum<
  typeof PlaylistByIdResponseType
> = PlaylistByIdResponseType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaylistByIdResponseType$ {
  /** @deprecated use `PlaylistByIdResponseType$inboundSchema` instead. */
  export const inboundSchema = PlaylistByIdResponseType$inboundSchema;
  /** @deprecated use `PlaylistByIdResponseType$outboundSchema` instead. */
  export const outboundSchema = PlaylistByIdResponseType$outboundSchema;
}

/** @internal */
export const PlaylistByIdResponseMediaList$inboundSchema: z.ZodType<
  PlaylistByIdResponseMediaList,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  duration: z.string().optional(),
  id: z.string().optional(),
  sourceResolution: z.string().optional(),
  status: z.string().optional(),
  thumbnail: z.string().optional(),
});

/** @internal */
export type PlaylistByIdResponseMediaList$Outbound = {
  createdAt?: string | undefined;
  duration?: string | undefined;
  id?: string | undefined;
  sourceResolution?: string | undefined;
  status?: string | undefined;
  thumbnail?: string | undefined;
};

/** @internal */
export const PlaylistByIdResponseMediaList$outboundSchema: z.ZodType<
  PlaylistByIdResponseMediaList$Outbound,
  z.ZodTypeDef,
  PlaylistByIdResponseMediaList
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  duration: z.string().optional(),
  id: z.string().optional(),
  sourceResolution: z.string().optional(),
  status: z.string().optional(),
  thumbnail: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaylistByIdResponseMediaList$ {
  /** @deprecated use `PlaylistByIdResponseMediaList$inboundSchema` instead. */
  export const inboundSchema = PlaylistByIdResponseMediaList$inboundSchema;
  /** @deprecated use `PlaylistByIdResponseMediaList$outboundSchema` instead. */
  export const outboundSchema = PlaylistByIdResponseMediaList$outboundSchema;
  /** @deprecated use `PlaylistByIdResponseMediaList$Outbound` instead. */
  export type Outbound = PlaylistByIdResponseMediaList$Outbound;
}

export function playlistByIdResponseMediaListToJSON(
  playlistByIdResponseMediaList: PlaylistByIdResponseMediaList,
): string {
  return JSON.stringify(
    PlaylistByIdResponseMediaList$outboundSchema.parse(
      playlistByIdResponseMediaList,
    ),
  );
}

export function playlistByIdResponseMediaListFromJSON(
  jsonString: string,
): SafeParseResult<PlaylistByIdResponseMediaList, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaylistByIdResponseMediaList$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaylistByIdResponseMediaList' from JSON`,
  );
}

/** @internal */
export const PlaylistByIdResponseData$inboundSchema: z.ZodType<
  PlaylistByIdResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  referenceId: z.string().optional(),
  type: PlaylistByIdResponseType$inboundSchema.optional(),
  description: z.string().optional(),
  mediaList: z.array(z.lazy(() => PlaylistByIdResponseMediaList$inboundSchema))
    .optional(),
  workspaceId: z.string().optional(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  mediaCount: z.number().int().optional(),
});

/** @internal */
export type PlaylistByIdResponseData$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  referenceId?: string | undefined;
  type?: string | undefined;
  description?: string | undefined;
  mediaList?: Array<PlaylistByIdResponseMediaList$Outbound> | undefined;
  workspaceId?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  mediaCount?: number | undefined;
};

/** @internal */
export const PlaylistByIdResponseData$outboundSchema: z.ZodType<
  PlaylistByIdResponseData$Outbound,
  z.ZodTypeDef,
  PlaylistByIdResponseData
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  referenceId: z.string().optional(),
  type: PlaylistByIdResponseType$outboundSchema.optional(),
  description: z.string().optional(),
  mediaList: z.array(z.lazy(() => PlaylistByIdResponseMediaList$outboundSchema))
    .optional(),
  workspaceId: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  mediaCount: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaylistByIdResponseData$ {
  /** @deprecated use `PlaylistByIdResponseData$inboundSchema` instead. */
  export const inboundSchema = PlaylistByIdResponseData$inboundSchema;
  /** @deprecated use `PlaylistByIdResponseData$outboundSchema` instead. */
  export const outboundSchema = PlaylistByIdResponseData$outboundSchema;
  /** @deprecated use `PlaylistByIdResponseData$Outbound` instead. */
  export type Outbound = PlaylistByIdResponseData$Outbound;
}

export function playlistByIdResponseDataToJSON(
  playlistByIdResponseData: PlaylistByIdResponseData,
): string {
  return JSON.stringify(
    PlaylistByIdResponseData$outboundSchema.parse(playlistByIdResponseData),
  );
}

export function playlistByIdResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<PlaylistByIdResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaylistByIdResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaylistByIdResponseData' from JSON`,
  );
}

/** @internal */
export const PlaylistByIdResponse$inboundSchema: z.ZodType<
  PlaylistByIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => PlaylistByIdResponseData$inboundSchema).optional(),
});

/** @internal */
export type PlaylistByIdResponse$Outbound = {
  success?: boolean | undefined;
  data?: PlaylistByIdResponseData$Outbound | undefined;
};

/** @internal */
export const PlaylistByIdResponse$outboundSchema: z.ZodType<
  PlaylistByIdResponse$Outbound,
  z.ZodTypeDef,
  PlaylistByIdResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => PlaylistByIdResponseData$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaylistByIdResponse$ {
  /** @deprecated use `PlaylistByIdResponse$inboundSchema` instead. */
  export const inboundSchema = PlaylistByIdResponse$inboundSchema;
  /** @deprecated use `PlaylistByIdResponse$outboundSchema` instead. */
  export const outboundSchema = PlaylistByIdResponse$outboundSchema;
  /** @deprecated use `PlaylistByIdResponse$Outbound` instead. */
  export type Outbound = PlaylistByIdResponse$Outbound;
}

export function playlistByIdResponseToJSON(
  playlistByIdResponse: PlaylistByIdResponse,
): string {
  return JSON.stringify(
    PlaylistByIdResponse$outboundSchema.parse(playlistByIdResponse),
  );
}

export function playlistByIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<PlaylistByIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaylistByIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaylistByIdResponse' from JSON`,
  );
}
