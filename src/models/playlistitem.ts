import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export const PlaylistItemType = {
  Manual: "manual",
  Smart: "smart",
} as const;
export type PlaylistItemType = ClosedEnum<typeof PlaylistItemType>;

export type PlaylistItem = {
  id?: string | undefined;
  name?: string | undefined;
  type?: PlaylistItemType | undefined;
  referenceId?: string | undefined;
  createdAt?: Date | undefined;
  mediaCount?: number | undefined;
};

/** @internal */
export const PlaylistItemType$inboundSchema: z.ZodNativeEnum<
  typeof PlaylistItemType
> = z.nativeEnum(PlaylistItemType);

/** @internal */
export const PlaylistItemType$outboundSchema: z.ZodNativeEnum<
  typeof PlaylistItemType
> = PlaylistItemType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaylistItemType$ {
  /** @deprecated use `PlaylistItemType$inboundSchema` instead. */
  export const inboundSchema = PlaylistItemType$inboundSchema;
  /** @deprecated use `PlaylistItemType$outboundSchema` instead. */
  export const outboundSchema = PlaylistItemType$outboundSchema;
}

/** @internal */
export const PlaylistItem$inboundSchema: z.ZodType<
  PlaylistItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  type: PlaylistItemType$inboundSchema.optional(),
  referenceId: z.string().optional(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  mediaCount: z.number().int().optional(),
});

/** @internal */
export type PlaylistItem$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  type?: string | undefined;
  referenceId?: string | undefined;
  createdAt?: string | undefined;
  mediaCount?: number | undefined;
};

/** @internal */
export const PlaylistItem$outboundSchema: z.ZodType<
  PlaylistItem$Outbound,
  z.ZodTypeDef,
  PlaylistItem
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  type: PlaylistItemType$outboundSchema.optional(),
  referenceId: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  mediaCount: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaylistItem$ {
  /** @deprecated use `PlaylistItem$inboundSchema` instead. */
  export const inboundSchema = PlaylistItem$inboundSchema;
  /** @deprecated use `PlaylistItem$outboundSchema` instead. */
  export const outboundSchema = PlaylistItem$outboundSchema;
  /** @deprecated use `PlaylistItem$Outbound` instead. */
  export type Outbound = PlaylistItem$Outbound;
}

export function playlistItemToJSON(playlistItem: PlaylistItem): string {
  return JSON.stringify(PlaylistItem$outboundSchema.parse(playlistItem));
}

export function playlistItemFromJSON(
  jsonString: string,
): SafeParseResult<PlaylistItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaylistItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaylistItem' from JSON`,
  );
}
