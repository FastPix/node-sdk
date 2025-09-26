import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  BasicAccessPolicy,
  BasicAccessPolicy$inboundSchema,
  BasicAccessPolicy$outboundSchema,
} from "./basicaccesspolicy.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  PlaybackSettings,
  PlaybackSettings$inboundSchema,
  PlaybackSettings$Outbound,
  PlaybackSettings$outboundSchema,
} from "./playbacksettings.js";

/**
 * Max resolution can be used to control the maximum resolution your media is encoded, stored, and streamed at.
 */
export const CreateLiveStreamRequestMaxResolution = {
  OneThousandAndEightyp: "1080p",
  SevenHundredAndTwentyp: "720p",
  FourHundredAndEightyp: "480p",
} as const;
/**
 * Max resolution can be used to control the maximum resolution your media is encoded, stored, and streamed at.
 */
export type CreateLiveStreamRequestMaxResolution = ClosedEnum<
  typeof CreateLiveStreamRequestMaxResolution
>;

/**
 * Displays the result of the input Media settings.
 */
export type InputMediaSettings = {
  /**
   * Max resolution can be used to control the maximum resolution your media is encoded, stored, and streamed at.
   */
  maxResolution?: CreateLiveStreamRequestMaxResolution | undefined;
  /**
   * In case the software streaming the live, gets disrupted for any reason and gets disconnected from FastPix, the reconnect window specifies the time span FastPix will wait before ending the stream. Before starting the stream, you can set the reconnect window time which is up to 1800 seconds.
   */
  reconnectWindow?: number | undefined;
  /**
   * Basic access policy for media content
   */
  mediaPolicy?: BasicAccessPolicy | undefined;
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key":"value"s pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * Enables DVR (Digital Video Recorder) functionality for the live stream. When set to true, viewers can pause, rewind, and resume playback during the live broadcast. This allows time-shifted viewing of the stream while it is still ongoing.
   */
  enableDvrMode?: boolean | undefined;
};

export type CreateLiveStreamRequest = {
  /**
   * Displays the result of the playback settings.
   */
  playbackSettings: PlaybackSettings;
  /**
   * Displays the result of the input Media settings.
   */
  inputMediaSettings: InputMediaSettings;
};

/** @internal */
export const CreateLiveStreamRequestMaxResolution$inboundSchema:
  z.ZodNativeEnum<typeof CreateLiveStreamRequestMaxResolution> = z.nativeEnum(
    CreateLiveStreamRequestMaxResolution,
  );

/** @internal */
export const CreateLiveStreamRequestMaxResolution$outboundSchema:
  z.ZodNativeEnum<typeof CreateLiveStreamRequestMaxResolution> =
    CreateLiveStreamRequestMaxResolution$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLiveStreamRequestMaxResolution$ {
  /** @deprecated use `CreateLiveStreamRequestMaxResolution$inboundSchema` instead. */
  export const inboundSchema =
    CreateLiveStreamRequestMaxResolution$inboundSchema;
  /** @deprecated use `CreateLiveStreamRequestMaxResolution$outboundSchema` instead. */
  export const outboundSchema =
    CreateLiveStreamRequestMaxResolution$outboundSchema;
}

/** @internal */
export const InputMediaSettings$inboundSchema: z.ZodType<
  InputMediaSettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  maxResolution: CreateLiveStreamRequestMaxResolution$inboundSchema.default(
    "1080p",
  ),
  reconnectWindow: z.number().int().default(60),
  mediaPolicy: BasicAccessPolicy$inboundSchema.optional(),
  metadata: z.record(z.string()).optional(),
  enableDvrMode: z.boolean().optional(),
});

/** @internal */
export type InputMediaSettings$Outbound = {
  maxResolution: string;
  reconnectWindow: number;
  mediaPolicy?: string | undefined;
  metadata?: { [k: string]: string } | undefined;
  enableDvrMode?: boolean | undefined;
};

/** @internal */
export const InputMediaSettings$outboundSchema: z.ZodType<
  InputMediaSettings$Outbound,
  z.ZodTypeDef,
  InputMediaSettings
> = z.object({
  maxResolution: CreateLiveStreamRequestMaxResolution$outboundSchema.default(
    "1080p",
  ),
  reconnectWindow: z.number().int().default(60),
  mediaPolicy: BasicAccessPolicy$outboundSchema.optional(),
  metadata: z.record(z.string()).optional(),
  enableDvrMode: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputMediaSettings$ {
  /** @deprecated use `InputMediaSettings$inboundSchema` instead. */
  export const inboundSchema = InputMediaSettings$inboundSchema;
  /** @deprecated use `InputMediaSettings$outboundSchema` instead. */
  export const outboundSchema = InputMediaSettings$outboundSchema;
  /** @deprecated use `InputMediaSettings$Outbound` instead. */
  export type Outbound = InputMediaSettings$Outbound;
}

export function inputMediaSettingsToJSON(
  inputMediaSettings: InputMediaSettings,
): string {
  return JSON.stringify(
    InputMediaSettings$outboundSchema.parse(inputMediaSettings),
  );
}

export function inputMediaSettingsFromJSON(
  jsonString: string,
): SafeParseResult<InputMediaSettings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputMediaSettings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputMediaSettings' from JSON`,
  );
}

/** @internal */
export const CreateLiveStreamRequest$inboundSchema: z.ZodType<
  CreateLiveStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  playbackSettings: PlaybackSettings$inboundSchema,
  inputMediaSettings: z.lazy(() => InputMediaSettings$inboundSchema),
});

/** @internal */
export type CreateLiveStreamRequest$Outbound = {
  playbackSettings: PlaybackSettings$Outbound;
  inputMediaSettings: InputMediaSettings$Outbound;
};

/** @internal */
export const CreateLiveStreamRequest$outboundSchema: z.ZodType<
  CreateLiveStreamRequest$Outbound,
  z.ZodTypeDef,
  CreateLiveStreamRequest
> = z.object({
  playbackSettings: PlaybackSettings$outboundSchema,
  inputMediaSettings: z.lazy(() => InputMediaSettings$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLiveStreamRequest$ {
  /** @deprecated use `CreateLiveStreamRequest$inboundSchema` instead. */
  export const inboundSchema = CreateLiveStreamRequest$inboundSchema;
  /** @deprecated use `CreateLiveStreamRequest$outboundSchema` instead. */
  export const outboundSchema = CreateLiveStreamRequest$outboundSchema;
  /** @deprecated use `CreateLiveStreamRequest$Outbound` instead. */
  export type Outbound = CreateLiveStreamRequest$Outbound;
}

export function createLiveStreamRequestToJSON(
  createLiveStreamRequest: CreateLiveStreamRequest,
): string {
  return JSON.stringify(
    CreateLiveStreamRequest$outboundSchema.parse(createLiveStreamRequest),
  );
}

export function createLiveStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateLiveStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLiveStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLiveStreamRequest' from JSON`,
  );
}
