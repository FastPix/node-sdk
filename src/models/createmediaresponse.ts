import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  PlaybackId,
  PlaybackId$inboundSchema,
  PlaybackId$Outbound,
  PlaybackId$outboundSchema,
} from "./playbackid.js";

/**
 * The maximum resolution tier determines the highest quality your media will be available in.
 */
export const CreateMediaResponseMaxResolution = {
  TwoThousandOneHundredAndSixtyp: "2160p",
  OneThousandFourHundredAndFortyp: "1440p",
  OneThousandAndEightyp: "1080p",
  SevenHundredAndTwentyp: "720p",
  FourHundredAndEightyp: "480p",
  ThreeHundredAndSixtyp: "360p",
} as const;
/**
 * The maximum resolution tier determines the highest quality your media will be available in.
 */
export type CreateMediaResponseMaxResolution = ClosedEnum<
  typeof CreateMediaResponseMaxResolution
>;

export type CreateMediaResponse = {
  /**
   * The Media is assigned a universal unique identifier, which can contain a maximum of 255 characters.
   */
  id?: string | undefined;
  /**
   * FastPix allows for a free trial. Create as many media files as you like during the trial period. Remember, each clip can only be 10 seconds long and will be deleted after 24 hours. Also, all trial content will have the FastPix logo watermark.
   *
   * @remarks
   */
  trial?: boolean | undefined;
  /**
   * Determines the media's status, which can be one of the possible values.
   */
  status?: string | undefined;
  /**
   * Time the media was created, defined as a localDateTime (UTC Time).
   */
  createdAt?: Date | undefined;
  /**
   * Time the media was updated, defined as a localDateTime (UTC Time).
   */
  updatedAt?: Date | undefined;
  /**
   * A collection of Playback ID objects utilized for crafting HLS playback URLs.
   */
  playbackIds?: Array<PlaybackId> | undefined;
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key" : "value" pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * The maximum resolution tier determines the highest quality your media will be available in.
   */
  maxResolution?: CreateMediaResponseMaxResolution | undefined;
};

/** @internal */
export const CreateMediaResponseMaxResolution$inboundSchema: z.ZodNativeEnum<
  typeof CreateMediaResponseMaxResolution
> = z.nativeEnum(CreateMediaResponseMaxResolution);

/** @internal */
export const CreateMediaResponseMaxResolution$outboundSchema: z.ZodNativeEnum<
  typeof CreateMediaResponseMaxResolution
> = CreateMediaResponseMaxResolution$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaResponseMaxResolution$ {
  /** @deprecated use `CreateMediaResponseMaxResolution$inboundSchema` instead. */
  export const inboundSchema = CreateMediaResponseMaxResolution$inboundSchema;
  /** @deprecated use `CreateMediaResponseMaxResolution$outboundSchema` instead. */
  export const outboundSchema = CreateMediaResponseMaxResolution$outboundSchema;
}

/** @internal */
export const CreateMediaResponse$inboundSchema: z.ZodType<
  CreateMediaResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  trial: z.boolean().default(true),
  status: z.string().optional(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  playbackIds: z.array(PlaybackId$inboundSchema).optional(),
  metadata: z.record(z.string()).optional(),
  maxResolution: CreateMediaResponseMaxResolution$inboundSchema.default(
    "1080p",
  ),
});

/** @internal */
export type CreateMediaResponse$Outbound = {
  id?: string | undefined;
  trial: boolean;
  status?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  playbackIds?: Array<PlaybackId$Outbound> | undefined;
  metadata?: { [k: string]: string } | undefined;
  maxResolution: string;
};

/** @internal */
export const CreateMediaResponse$outboundSchema: z.ZodType<
  CreateMediaResponse$Outbound,
  z.ZodTypeDef,
  CreateMediaResponse
> = z.object({
  id: z.string().optional(),
  trial: z.boolean().default(true),
  status: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  playbackIds: z.array(PlaybackId$outboundSchema).optional(),
  metadata: z.record(z.string()).optional(),
  maxResolution: CreateMediaResponseMaxResolution$outboundSchema.default(
    "1080p",
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaResponse$ {
  /** @deprecated use `CreateMediaResponse$inboundSchema` instead. */
  export const inboundSchema = CreateMediaResponse$inboundSchema;
  /** @deprecated use `CreateMediaResponse$outboundSchema` instead. */
  export const outboundSchema = CreateMediaResponse$outboundSchema;
  /** @deprecated use `CreateMediaResponse$Outbound` instead. */
  export type Outbound = CreateMediaResponse$Outbound;
}

export function createMediaResponseToJSON(
  createMediaResponse: CreateMediaResponse,
): string {
  return JSON.stringify(
    CreateMediaResponse$outboundSchema.parse(createMediaResponse),
  );
}

export function createMediaResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateMediaResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMediaResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMediaResponse' from JSON`,
  );
}
