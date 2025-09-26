import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * A media consists of different media tracks, like video, audio, and subtitle, all combined.
 */
export type Track = {
  /**
   * FastPix generates a unique identifier for each track.
   */
  id?: string | undefined;
  /**
   * Defines the type of input. This option is mandatory.
   */
  type: string;
  /**
   * Track width denotes the range of widths applicable to a specific track. Currently, this setting can be modified only for video tracks
   */
  width?: number | undefined;
  /**
   * Track height denotes the range of height applicable to a specific track. Currently, this setting can be modified only for video tracks.
   */
  height?: number | undefined;
  /**
   * Frame rate quantifies the speed at which frames are displayed per second. It represents the range of frames available for a specific track. If the frame rate of the input file is indeterminable, it will be indicated by a value of -1.
   */
  frameRate?: string | undefined;
  /**
   * Indicates if the track contains closed captions.
   */
  closedCaptions?: boolean | undefined;
};

/** @internal */
export const Track$inboundSchema: z.ZodType<Track, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string().optional(),
    type: z.string(),
    width: z.number().optional(),
    height: z.number().optional(),
    frameRate: z.string().optional(),
    closedCaptions: z.boolean().optional(),
  });

/** @internal */
export type Track$Outbound = {
  id?: string | undefined;
  type: string;
  width?: number | undefined;
  height?: number | undefined;
  frameRate?: string | undefined;
  closedCaptions?: boolean | undefined;
};

/** @internal */
export const Track$outboundSchema: z.ZodType<
  Track$Outbound,
  z.ZodTypeDef,
  Track
> = z.object({
  id: z.string().optional(),
  type: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  frameRate: z.string().optional(),
  closedCaptions: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Track$ {
  /** @deprecated use `Track$inboundSchema` instead. */
  export const inboundSchema = Track$inboundSchema;
  /** @deprecated use `Track$outboundSchema` instead. */
  export const outboundSchema = Track$outboundSchema;
  /** @deprecated use `Track$Outbound` instead. */
  export type Outbound = Track$Outbound;
}

export function trackToJSON(track: Track): string {
  return JSON.stringify(Track$outboundSchema.parse(track));
}

export function trackFromJSON(
  jsonString: string,
): SafeParseResult<Track, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Track$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Track' from JSON`,
  );
}
