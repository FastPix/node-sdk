import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Type of overlay (currently only supports 'audio').
 */
export const AudioInputType = {
  Audio: "audio",
} as const;
/**
 * Type of overlay (currently only supports 'audio').
 */
export type AudioInputType = ClosedEnum<typeof AudioInputType>;

export type ImposeTrack = {
  /**
   * URL of the audio track to impose on the video.
   */
  url?: string | undefined;
  /**
   * Start time (in seconds) of the imposed audio in the video.
   */
  startTime?: number | undefined;
  /**
   * End time (in seconds) of the imposed audio in the video.
   */
  endTime?: number | undefined;
  /**
   * Level of fade-in effect (in seconds) at the start of the imposed audio.
   */
  fadeInLevel?: number | undefined;
  /**
   * Level of fade-out effect (in seconds) at the end of the imposed audio.
   */
  fadeOutLevel?: number | undefined;
};

export type AudioInput = {
  /**
   * Type of overlay (currently only supports 'audio').
   */
  type?: AudioInputType | undefined;
  /**
   * URL of the audio track to replace the existing audio in the video.
   */
  swapTrackUrl?: string | undefined;
  /**
   * List of additional audio tracks to overlay on the video.
   */
  imposeTracks?: Array<ImposeTrack> | undefined;
};

/** @internal */
export const AudioInputType$inboundSchema: z.ZodNativeEnum<
  typeof AudioInputType
> = z.nativeEnum(AudioInputType);

/** @internal */
export const AudioInputType$outboundSchema: z.ZodNativeEnum<
  typeof AudioInputType
> = AudioInputType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AudioInputType$ {
  /** @deprecated use `AudioInputType$inboundSchema` instead. */
  export const inboundSchema = AudioInputType$inboundSchema;
  /** @deprecated use `AudioInputType$outboundSchema` instead. */
  export const outboundSchema = AudioInputType$outboundSchema;
}

/** @internal */
export const ImposeTrack$inboundSchema: z.ZodType<
  ImposeTrack,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string().optional(),
  startTime: z.number().int().optional(),
  endTime: z.number().int().optional(),
  fadeInLevel: z.number().int().optional(),
  fadeOutLevel: z.number().int().optional(),
});

/** @internal */
export type ImposeTrack$Outbound = {
  url?: string | undefined;
  startTime?: number | undefined;
  endTime?: number | undefined;
  fadeInLevel?: number | undefined;
  fadeOutLevel?: number | undefined;
};

/** @internal */
export const ImposeTrack$outboundSchema: z.ZodType<
  ImposeTrack$Outbound,
  z.ZodTypeDef,
  ImposeTrack
> = z.object({
  url: z.string().optional(),
  startTime: z.number().int().optional(),
  endTime: z.number().int().optional(),
  fadeInLevel: z.number().int().optional(),
  fadeOutLevel: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImposeTrack$ {
  /** @deprecated use `ImposeTrack$inboundSchema` instead. */
  export const inboundSchema = ImposeTrack$inboundSchema;
  /** @deprecated use `ImposeTrack$outboundSchema` instead. */
  export const outboundSchema = ImposeTrack$outboundSchema;
  /** @deprecated use `ImposeTrack$Outbound` instead. */
  export type Outbound = ImposeTrack$Outbound;
}

export function imposeTrackToJSON(imposeTrack: ImposeTrack): string {
  return JSON.stringify(ImposeTrack$outboundSchema.parse(imposeTrack));
}

export function imposeTrackFromJSON(
  jsonString: string,
): SafeParseResult<ImposeTrack, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ImposeTrack$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ImposeTrack' from JSON`,
  );
}

/** @internal */
export const AudioInput$inboundSchema: z.ZodType<
  AudioInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: AudioInputType$inboundSchema.optional(),
  swapTrackUrl: z.string().optional(),
  imposeTracks: z.array(z.lazy(() => ImposeTrack$inboundSchema)).optional(),
});

/** @internal */
export type AudioInput$Outbound = {
  type?: string | undefined;
  swapTrackUrl?: string | undefined;
  imposeTracks?: Array<ImposeTrack$Outbound> | undefined;
};

/** @internal */
export const AudioInput$outboundSchema: z.ZodType<
  AudioInput$Outbound,
  z.ZodTypeDef,
  AudioInput
> = z.object({
  type: AudioInputType$outboundSchema.optional(),
  swapTrackUrl: z.string().optional(),
  imposeTracks: z.array(z.lazy(() => ImposeTrack$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AudioInput$ {
  /** @deprecated use `AudioInput$inboundSchema` instead. */
  export const inboundSchema = AudioInput$inboundSchema;
  /** @deprecated use `AudioInput$outboundSchema` instead. */
  export const outboundSchema = AudioInput$outboundSchema;
  /** @deprecated use `AudioInput$Outbound` instead. */
  export type Outbound = AudioInput$Outbound;
}

export function audioInputToJSON(audioInput: AudioInput): string {
  return JSON.stringify(AudioInput$outboundSchema.parse(audioInput));
}

export function audioInputFromJSON(
  jsonString: string,
): SafeParseResult<AudioInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AudioInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AudioInput' from JSON`,
  );
}
