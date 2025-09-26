import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

/**
 * Determines the insertion order of media into playlist.
 */
export const PlaylistOrder = {
  CreatedDateASC: "createdDate ASC",
  CreatedDateDESC: "createdDate DESC",
} as const;
/**
 * Determines the insertion order of media into playlist.
 */
export type PlaylistOrder = ClosedEnum<typeof PlaylistOrder>;

/** @internal */
export const PlaylistOrder$inboundSchema: z.ZodNativeEnum<
  typeof PlaylistOrder
> = z.nativeEnum(PlaylistOrder);

/** @internal */
export const PlaylistOrder$outboundSchema: z.ZodNativeEnum<
  typeof PlaylistOrder
> = PlaylistOrder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaylistOrder$ {
  /** @deprecated use `PlaylistOrder$inboundSchema` instead. */
  export const inboundSchema = PlaylistOrder$inboundSchema;
  /** @deprecated use `PlaylistOrder$outboundSchema` instead. */
  export const outboundSchema = PlaylistOrder$outboundSchema;
}
