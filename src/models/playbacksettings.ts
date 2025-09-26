import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  BasicAccessPolicy,
  BasicAccessPolicy$inboundSchema,
  BasicAccessPolicy$outboundSchema,
} from "./basicaccesspolicy.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays the result of the playback settings.
 */
export type PlaybackSettings = {
  /**
   * Basic access policy for media content
   */
  accessPolicy?: BasicAccessPolicy | undefined;
};

/** @internal */
export const PlaybackSettings$inboundSchema: z.ZodType<
  PlaybackSettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessPolicy: BasicAccessPolicy$inboundSchema.optional(),
});

/** @internal */
export type PlaybackSettings$Outbound = {
  accessPolicy?: string | undefined;
};

/** @internal */
export const PlaybackSettings$outboundSchema: z.ZodType<
  PlaybackSettings$Outbound,
  z.ZodTypeDef,
  PlaybackSettings
> = z.object({
  accessPolicy: BasicAccessPolicy$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaybackSettings$ {
  /** @deprecated use `PlaybackSettings$inboundSchema` instead. */
  export const inboundSchema = PlaybackSettings$inboundSchema;
  /** @deprecated use `PlaybackSettings$outboundSchema` instead. */
  export const outboundSchema = PlaybackSettings$outboundSchema;
  /** @deprecated use `PlaybackSettings$Outbound` instead. */
  export type Outbound = PlaybackSettings$Outbound;
}

export function playbackSettingsToJSON(
  playbackSettings: PlaybackSettings,
): string {
  return JSON.stringify(
    PlaybackSettings$outboundSchema.parse(playbackSettings),
  );
}

export function playbackSettingsFromJSON(
  jsonString: string,
): SafeParseResult<PlaybackSettings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaybackSettings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaybackSettings' from JSON`,
  );
}
