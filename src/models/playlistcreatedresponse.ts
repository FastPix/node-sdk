import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  PlaylistCreatedSchema,
  PlaylistCreatedSchema$inboundSchema,
  PlaylistCreatedSchema$Outbound,
  PlaylistCreatedSchema$outboundSchema,
} from "./playlistcreatedschema.js";

/**
 * Displays the result of the request.
 */
export type PlaylistCreatedResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: PlaylistCreatedSchema | undefined;
};

/** @internal */
export const PlaylistCreatedResponse$inboundSchema: z.ZodType<
  PlaylistCreatedResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: PlaylistCreatedSchema$inboundSchema.optional(),
});

/** @internal */
export type PlaylistCreatedResponse$Outbound = {
  success?: boolean | undefined;
  data?: PlaylistCreatedSchema$Outbound | undefined;
};

/** @internal */
export const PlaylistCreatedResponse$outboundSchema: z.ZodType<
  PlaylistCreatedResponse$Outbound,
  z.ZodTypeDef,
  PlaylistCreatedResponse
> = z.object({
  success: z.boolean().optional(),
  data: PlaylistCreatedSchema$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlaylistCreatedResponse$ {
  /** @deprecated use `PlaylistCreatedResponse$inboundSchema` instead. */
  export const inboundSchema = PlaylistCreatedResponse$inboundSchema;
  /** @deprecated use `PlaylistCreatedResponse$outboundSchema` instead. */
  export const outboundSchema = PlaylistCreatedResponse$outboundSchema;
  /** @deprecated use `PlaylistCreatedResponse$Outbound` instead. */
  export type Outbound = PlaylistCreatedResponse$Outbound;
}

export function playlistCreatedResponseToJSON(
  playlistCreatedResponse: PlaylistCreatedResponse,
): string {
  return JSON.stringify(
    PlaylistCreatedResponse$outboundSchema.parse(playlistCreatedResponse),
  );
}

export function playlistCreatedResponseFromJSON(
  jsonString: string,
): SafeParseResult<PlaylistCreatedResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlaylistCreatedResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlaylistCreatedResponse' from JSON`,
  );
}
