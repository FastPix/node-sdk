import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

/**
 * Type of media content
 */
export const MediaType = {
  Video: "video",
  Audio: "audio",
  Av: "av",
} as const;
/**
 * Type of media content
 */
export type MediaType = ClosedEnum<typeof MediaType>;

/** @internal */
export const MediaType$inboundSchema: z.ZodNativeEnum<typeof MediaType> = z
  .nativeEnum(MediaType);

/** @internal */
export const MediaType$outboundSchema: z.ZodNativeEnum<typeof MediaType> =
  MediaType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaType$ {
  /** @deprecated use `MediaType$inboundSchema` instead. */
  export const inboundSchema = MediaType$inboundSchema;
  /** @deprecated use `MediaType$outboundSchema` instead. */
  export const outboundSchema = MediaType$outboundSchema;
}
