import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * This object contains the livestream playback response details for SRT Protocol
 */
export type SrtPlaybackResponse = {
  /**
   * A unique identifier for the SRT playback stream. This ID is used to distinguish between different playback streams
   */
  srtPlaybackStreamId?: string | undefined;
  /**
   * A playback secret used for securing the SRT playback stream. This ensures that only authorized users can access the playback
   */
  srtPlaybackSecret?: string | undefined;
};

/** @internal */
export const SrtPlaybackResponse$inboundSchema: z.ZodType<
  SrtPlaybackResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  srtPlaybackStreamId: z.string().optional(),
  srtPlaybackSecret: z.string().optional(),
});

/** @internal */
export type SrtPlaybackResponse$Outbound = {
  srtPlaybackStreamId?: string | undefined;
  srtPlaybackSecret?: string | undefined;
};

/** @internal */
export const SrtPlaybackResponse$outboundSchema: z.ZodType<
  SrtPlaybackResponse$Outbound,
  z.ZodTypeDef,
  SrtPlaybackResponse
> = z.object({
  srtPlaybackStreamId: z.string().optional(),
  srtPlaybackSecret: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SrtPlaybackResponse$ {
  /** @deprecated use `SrtPlaybackResponse$inboundSchema` instead. */
  export const inboundSchema = SrtPlaybackResponse$inboundSchema;
  /** @deprecated use `SrtPlaybackResponse$outboundSchema` instead. */
  export const outboundSchema = SrtPlaybackResponse$outboundSchema;
  /** @deprecated use `SrtPlaybackResponse$Outbound` instead. */
  export type Outbound = SrtPlaybackResponse$Outbound;
}

export function srtPlaybackResponseToJSON(
  srtPlaybackResponse: SrtPlaybackResponse,
): string {
  return JSON.stringify(
    SrtPlaybackResponse$outboundSchema.parse(srtPlaybackResponse),
  );
}

export function srtPlaybackResponseFromJSON(
  jsonString: string,
): SafeParseResult<SrtPlaybackResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SrtPlaybackResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SrtPlaybackResponse' from JSON`,
  );
}
