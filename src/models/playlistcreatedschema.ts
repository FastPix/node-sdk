import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  DateRange,
  DateRange$inboundSchema,
  DateRange$Outbound,
  DateRange$outboundSchema,
} from "./daterange.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  PlaylistOrder,
  PlaylistOrder$inboundSchema,
  PlaylistOrder$outboundSchema,
} from "./playlistorder.js";

/**
 * Type will be either smart or manual, as sent in the request body.
 */
export const PlaylistCreatedSchemaType = {
  Smart: "smart",
  Manual: "manual",
} as const;
/**
 * Type will be either smart or manual, as sent in the request body.
 */
export type PlaylistCreatedSchemaType = ClosedEnum<
  typeof PlaylistCreatedSchemaType
>;

/**
 * date range filter used when creating the smart playlist
 */
export type PlaylistCreatedSchemaMetadata = {
  /**
   * Date range with start and end dates.
   */
  createdDate?: DateRange | undefined;
  /**
   * Date range with start and end dates.
   */
  updatedDate?: DateRange | undefined;
};

export type PlaylistCreatedSchemaMediaList = {
  /**
   * timestamp of media creation in the workspace
   */
  createdAt?: Date | undefined;
  /**
   * duration of the media in hh:mm:ss format
   */
  duration?: string | undefined;
  /**
   * unique identifier of the media
   */
  id?: string | undefined;
  /**
   * The source resolution of the media
   */
  sourceResolution?: string | undefined;
  /**
   * The status of the video in the workspace. Only media which are in ready status are added into the playlist
   */
  status?: string | undefined;
  /**
   * Thumbnail to the particular media
   */
  thumbnail?: string | undefined;
};

/**
 * Displays the result of the request.
 */
export type PlaylistCreatedSchema = {
  /**
   * Upon creating a new play,ist, FastPix assigns a unique identifier to the playlist.
   */
  id?: string | undefined;
  /**
   * The name to the playlist set by the user.
   */
  name?: string | undefined;
  /**
   * Unique string value assigned by user to the playlist.
   */
  referenceId?: string | undefined;
  /**
   * Type will be either smart or manual, as sent in the request body.
   */
  type?: PlaylistCreatedSchemaType | undefined;
  /**
   * The description to the playlist set by the user.
   */
  description?: string | undefined;
  /**
   * Determines the insertion order of media into playlist.
   */
  playOrder?: PlaylistOrder | undefined;
  /**
   * date range filter used when creating the smart playlist
   */
  metadata?: PlaylistCreatedSchemaMetadata | undefined;
  mediaList?: Array<PlaylistCreatedSchemaMediaList> | undefined;
  /**
   * Id of the workspace
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

/** @internal */
export const PlaylistCreatedSchemaType$inboundSchema: z.ZodNativeEnum<
  typeof PlaylistCreatedSchemaType
> = z.nativeEnum(PlaylistCreatedSchemaType);

/** @internal */
export const PlaylistCreatedSchemaType$outboundSchema: z.ZodNativeEnum<
  typeof PlaylistCreatedSchemaType
> = PlaylistCreatedSchemaType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaylistCreatedSchemaType$ {
  /** @deprecated use `PlaylistCreatedSchemaType$inboundSchema` instead. */
  export const inboundSchema = PlaylistCreatedSchemaType$inboundSchema;
  /** @deprecated use `PlaylistCreatedSchemaType$outboundSchema` instead. */
  export const outboundSchema = PlaylistCreatedSchemaType$outboundSchema;
}

/** @internal */
export const PlaylistCreatedSchemaMetadata$inboundSchema: z.ZodType<
  PlaylistCreatedSchemaMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdDate: DateRange$inboundSchema.optional(),
  updatedDate: DateRange$inboundSchema.optional(),
});

/** @internal */
export type PlaylistCreatedSchemaMetadata$Outbound = {
  createdDate?: DateRange$Outbound | undefined;
  updatedDate?: DateRange$Outbound | undefined;
};

/** @internal */
export const PlaylistCreatedSchemaMetadata$outboundSchema: z.ZodType<
  PlaylistCreatedSchemaMetadata$Outbound,
  z.ZodTypeDef,
  PlaylistCreatedSchemaMetadata
> = z.object({
  createdDate: DateRange$outboundSchema.optional(),
  updatedDate: DateRange$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaylistCreatedSchemaMetadata$ {
  /** @deprecated use `PlaylistCreatedSchemaMetadata$inboundSchema` instead. */
  export const inboundSchema = PlaylistCreatedSchemaMetadata$inboundSchema;
  /** @deprecated use `PlaylistCreatedSchemaMetadata$outboundSchema` instead. */
  export const outboundSchema = PlaylistCreatedSchemaMetadata$outboundSchema;
  /** @deprecated use `PlaylistCreatedSchemaMetadata$Outbound` instead. */
  export type Outbound = PlaylistCreatedSchemaMetadata$Outbound;
}

export function playlistCreatedSchemaMetadataToJSON(
  playlistCreatedSchemaMetadata: PlaylistCreatedSchemaMetadata,
): string {
  return JSON.stringify(
    PlaylistCreatedSchemaMetadata$outboundSchema.parse(
      playlistCreatedSchemaMetadata,
    ),
  );
}

export function playlistCreatedSchemaMetadataFromJSON(
  jsonString: string,
): SafeParseResult<PlaylistCreatedSchemaMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaylistCreatedSchemaMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaylistCreatedSchemaMetadata' from JSON`,
  );
}

/** @internal */
export const PlaylistCreatedSchemaMediaList$inboundSchema: z.ZodType<
  PlaylistCreatedSchemaMediaList,
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
export type PlaylistCreatedSchemaMediaList$Outbound = {
  createdAt?: string | undefined;
  duration?: string | undefined;
  id?: string | undefined;
  sourceResolution?: string | undefined;
  status?: string | undefined;
  thumbnail?: string | undefined;
};

/** @internal */
export const PlaylistCreatedSchemaMediaList$outboundSchema: z.ZodType<
  PlaylistCreatedSchemaMediaList$Outbound,
  z.ZodTypeDef,
  PlaylistCreatedSchemaMediaList
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
export namespace PlaylistCreatedSchemaMediaList$ {
  /** @deprecated use `PlaylistCreatedSchemaMediaList$inboundSchema` instead. */
  export const inboundSchema = PlaylistCreatedSchemaMediaList$inboundSchema;
  /** @deprecated use `PlaylistCreatedSchemaMediaList$outboundSchema` instead. */
  export const outboundSchema = PlaylistCreatedSchemaMediaList$outboundSchema;
  /** @deprecated use `PlaylistCreatedSchemaMediaList$Outbound` instead. */
  export type Outbound = PlaylistCreatedSchemaMediaList$Outbound;
}

export function playlistCreatedSchemaMediaListToJSON(
  playlistCreatedSchemaMediaList: PlaylistCreatedSchemaMediaList,
): string {
  return JSON.stringify(
    PlaylistCreatedSchemaMediaList$outboundSchema.parse(
      playlistCreatedSchemaMediaList,
    ),
  );
}

export function playlistCreatedSchemaMediaListFromJSON(
  jsonString: string,
): SafeParseResult<PlaylistCreatedSchemaMediaList, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaylistCreatedSchemaMediaList$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaylistCreatedSchemaMediaList' from JSON`,
  );
}

/** @internal */
export const PlaylistCreatedSchema$inboundSchema: z.ZodType<
  PlaylistCreatedSchema,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  referenceId: z.string().optional(),
  type: PlaylistCreatedSchemaType$inboundSchema.optional(),
  description: z.string().optional(),
  playOrder: PlaylistOrder$inboundSchema.optional(),
  metadata: z.lazy(() => PlaylistCreatedSchemaMetadata$inboundSchema)
    .optional(),
  mediaList: z.array(z.lazy(() => PlaylistCreatedSchemaMediaList$inboundSchema))
    .optional(),
  workspaceId: z.string().optional(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  mediaCount: z.number().int().optional(),
});

/** @internal */
export type PlaylistCreatedSchema$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  referenceId?: string | undefined;
  type?: string | undefined;
  description?: string | undefined;
  playOrder?: string | undefined;
  metadata?: PlaylistCreatedSchemaMetadata$Outbound | undefined;
  mediaList?: Array<PlaylistCreatedSchemaMediaList$Outbound> | undefined;
  workspaceId?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  mediaCount?: number | undefined;
};

/** @internal */
export const PlaylistCreatedSchema$outboundSchema: z.ZodType<
  PlaylistCreatedSchema$Outbound,
  z.ZodTypeDef,
  PlaylistCreatedSchema
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  referenceId: z.string().optional(),
  type: PlaylistCreatedSchemaType$outboundSchema.optional(),
  description: z.string().optional(),
  playOrder: PlaylistOrder$outboundSchema.optional(),
  metadata: z.lazy(() => PlaylistCreatedSchemaMetadata$outboundSchema)
    .optional(),
  mediaList: z.array(
    z.lazy(() => PlaylistCreatedSchemaMediaList$outboundSchema),
  ).optional(),
  workspaceId: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  mediaCount: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaylistCreatedSchema$ {
  /** @deprecated use `PlaylistCreatedSchema$inboundSchema` instead. */
  export const inboundSchema = PlaylistCreatedSchema$inboundSchema;
  /** @deprecated use `PlaylistCreatedSchema$outboundSchema` instead. */
  export const outboundSchema = PlaylistCreatedSchema$outboundSchema;
  /** @deprecated use `PlaylistCreatedSchema$Outbound` instead. */
  export type Outbound = PlaylistCreatedSchema$Outbound;
}

export function playlistCreatedSchemaToJSON(
  playlistCreatedSchema: PlaylistCreatedSchema,
): string {
  return JSON.stringify(
    PlaylistCreatedSchema$outboundSchema.parse(playlistCreatedSchema),
  );
}

export function playlistCreatedSchemaFromJSON(
  jsonString: string,
): SafeParseResult<PlaylistCreatedSchema, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaylistCreatedSchema$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaylistCreatedSchema' from JSON`,
  );
}
