import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type Segment2 = {
  /**
   * URL of the segment to be added.
   */
  url: string;
  /**
   * Flag indicating the segment should be inserted at the end.
   */
  insertAtEnd: boolean;
};

export type Segment1 = {
  /**
   * URL of the segment to be added.
   */
  url: string;
  /**
   * The timestamp at which the segment should be inserted.
   */
  insertAt: number;
};

export type SegmentUnion = Segment1 | Segment2;

export type VideoInput = {
  /**
   * Defines the type of input.
   *
   * @remarks
   */
  type: string;
  /**
   * The url hosts the media file for FastPix, which needs to be downloaded to use further. It supports formats like MP3, MP4, MOV, MKV, or TS, and includes text tracks for subtitles/CC (SRT file/VTT file). While FastPix can handle various audio and video formats and codecs, using standard inputs can help with optimal processing speed.
   *
   * @remarks
   */
  url: string;
  /**
   * Start time indicates where encoding should begin within the video file. For example, if you want to encode a segment from 3 minutes (180 seconds) to 6 minutes (360 seconds) in a 10-minute (600 seconds) video, the start time is 3 minutes (180 seconds). Note: Start time is always mentioned in seconds.
   *
   * @remarks
   */
  startTime?: number | undefined;
  /**
   * End time indicates where encoding should end within the video file. For example, if you want to encode a segment from 3 minutes (180 seconds) to 6 minutes (360 seconds) in a 10-minute (600 seconds) video, the end time is 6 minutes (360 seconds). Note: End time is always mentioned in seconds.
   *
   * @remarks
   */
  endTime?: number | undefined;
  /**
   * The url of the intro video which is to be added at the start of the video.
   *
   * @remarks
   */
  introUrl?: string | undefined;
  /**
   * The url of the outro video which is to be added at the end of the video.
   *
   * @remarks
   */
  outroUrl?: string | undefined;
  /**
   * The list of the startTime-endTime of the segments to be removed from the actual video.
   *
   * @remarks
   */
  expungeSegments?: Array<string> | undefined;
  /**
   * A list of media segments to be added or processed. Each segment includes details such as the URL of the media file and instructions on where it should be inserted in the final media composition. A segment can either specify an exact timestamp  (`insertAt`) or indicate that it should be added at the end (`insertAtEnd`).
   */
  segments?: Array<Segment1 | Segment2> | undefined;
};

/** @internal */
export const Segment2$inboundSchema: z.ZodType<
  Segment2,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  insertAtEnd: z.boolean(),
});

/** @internal */
export type Segment2$Outbound = {
  url: string;
  insertAtEnd: boolean;
};

/** @internal */
export const Segment2$outboundSchema: z.ZodType<
  Segment2$Outbound,
  z.ZodTypeDef,
  Segment2
> = z.object({
  url: z.string(),
  insertAtEnd: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Segment2$ {
  /** @deprecated use `Segment2$inboundSchema` instead. */
  export const inboundSchema = Segment2$inboundSchema;
  /** @deprecated use `Segment2$outboundSchema` instead. */
  export const outboundSchema = Segment2$outboundSchema;
  /** @deprecated use `Segment2$Outbound` instead. */
  export type Outbound = Segment2$Outbound;
}

export function segment2ToJSON(segment2: Segment2): string {
  return JSON.stringify(Segment2$outboundSchema.parse(segment2));
}

export function segment2FromJSON(
  jsonString: string,
): SafeParseResult<Segment2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Segment2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Segment2' from JSON`,
  );
}

/** @internal */
export const Segment1$inboundSchema: z.ZodType<
  Segment1,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  insertAt: z.number().int(),
});

/** @internal */
export type Segment1$Outbound = {
  url: string;
  insertAt: number;
};

/** @internal */
export const Segment1$outboundSchema: z.ZodType<
  Segment1$Outbound,
  z.ZodTypeDef,
  Segment1
> = z.object({
  url: z.string(),
  insertAt: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Segment1$ {
  /** @deprecated use `Segment1$inboundSchema` instead. */
  export const inboundSchema = Segment1$inboundSchema;
  /** @deprecated use `Segment1$outboundSchema` instead. */
  export const outboundSchema = Segment1$outboundSchema;
  /** @deprecated use `Segment1$Outbound` instead. */
  export type Outbound = Segment1$Outbound;
}

export function segment1ToJSON(segment1: Segment1): string {
  return JSON.stringify(Segment1$outboundSchema.parse(segment1));
}

export function segment1FromJSON(
  jsonString: string,
): SafeParseResult<Segment1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Segment1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Segment1' from JSON`,
  );
}

/** @internal */
export const SegmentUnion$inboundSchema: z.ZodType<
  SegmentUnion,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Segment1$inboundSchema),
  z.lazy(() => Segment2$inboundSchema),
]);

/** @internal */
export type SegmentUnion$Outbound = Segment1$Outbound | Segment2$Outbound;

/** @internal */
export const SegmentUnion$outboundSchema: z.ZodType<
  SegmentUnion$Outbound,
  z.ZodTypeDef,
  SegmentUnion
> = z.union([
  z.lazy(() => Segment1$outboundSchema),
  z.lazy(() => Segment2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SegmentUnion$ {
  /** @deprecated use `SegmentUnion$inboundSchema` instead. */
  export const inboundSchema = SegmentUnion$inboundSchema;
  /** @deprecated use `SegmentUnion$outboundSchema` instead. */
  export const outboundSchema = SegmentUnion$outboundSchema;
  /** @deprecated use `SegmentUnion$Outbound` instead. */
  export type Outbound = SegmentUnion$Outbound;
}

export function segmentUnionToJSON(segmentUnion: SegmentUnion): string {
  return JSON.stringify(SegmentUnion$outboundSchema.parse(segmentUnion));
}

export function segmentUnionFromJSON(
  jsonString: string,
): SafeParseResult<SegmentUnion, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SegmentUnion$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SegmentUnion' from JSON`,
  );
}

/** @internal */
export const VideoInput$inboundSchema: z.ZodType<
  VideoInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string(),
  url: z.string(),
  startTime: z.number().optional(),
  endTime: z.number().optional(),
  introUrl: z.string().optional(),
  outroUrl: z.string().optional(),
  expungeSegments: z.array(z.string()).optional(),
  segments: z.array(
    z.union([
      z.lazy(() => Segment1$inboundSchema),
      z.lazy(() => Segment2$inboundSchema),
    ]),
  ).optional(),
});

/** @internal */
export type VideoInput$Outbound = {
  type: string;
  url: string;
  startTime?: number | undefined;
  endTime?: number | undefined;
  introUrl?: string | undefined;
  outroUrl?: string | undefined;
  expungeSegments?: Array<string> | undefined;
  segments?: Array<Segment1$Outbound | Segment2$Outbound> | undefined;
};

/** @internal */
export const VideoInput$outboundSchema: z.ZodType<
  VideoInput$Outbound,
  z.ZodTypeDef,
  VideoInput
> = z.object({
  type: z.string(),
  url: z.string(),
  startTime: z.number().optional(),
  endTime: z.number().optional(),
  introUrl: z.string().optional(),
  outroUrl: z.string().optional(),
  expungeSegments: z.array(z.string()).optional(),
  segments: z.array(
    z.union([
      z.lazy(() => Segment1$outboundSchema),
      z.lazy(() => Segment2$outboundSchema),
    ]),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VideoInput$ {
  /** @deprecated use `VideoInput$inboundSchema` instead. */
  export const inboundSchema = VideoInput$inboundSchema;
  /** @deprecated use `VideoInput$outboundSchema` instead. */
  export const outboundSchema = VideoInput$outboundSchema;
  /** @deprecated use `VideoInput$Outbound` instead. */
  export type Outbound = VideoInput$Outbound;
}

export function videoInputToJSON(videoInput: VideoInput): string {
  return JSON.stringify(VideoInput$outboundSchema.parse(videoInput));
}

export function videoInputFromJSON(
  jsonString: string,
): SafeParseResult<VideoInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VideoInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VideoInput' from JSON`,
  );
}
