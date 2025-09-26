import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  PlaybackId,
  PlaybackId$inboundSchema,
  PlaybackId$Outbound,
  PlaybackId$outboundSchema,
} from "./playbackid.js";

export type DirectUploadResponse = {
  playbackIds?: Array<PlaybackId> | undefined;
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key" : "value" pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const DirectUploadResponse$inboundSchema: z.ZodType<
  DirectUploadResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  playbackIds: z.array(PlaybackId$inboundSchema).optional(),
  metadata: z.record(z.string()).optional(),
});

/** @internal */
export type DirectUploadResponse$Outbound = {
  playbackIds?: Array<PlaybackId$Outbound> | undefined;
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const DirectUploadResponse$outboundSchema: z.ZodType<
  DirectUploadResponse$Outbound,
  z.ZodTypeDef,
  DirectUploadResponse
> = z.object({
  playbackIds: z.array(PlaybackId$outboundSchema).optional(),
  metadata: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DirectUploadResponse$ {
  /** @deprecated use `DirectUploadResponse$inboundSchema` instead. */
  export const inboundSchema = DirectUploadResponse$inboundSchema;
  /** @deprecated use `DirectUploadResponse$outboundSchema` instead. */
  export const outboundSchema = DirectUploadResponse$outboundSchema;
  /** @deprecated use `DirectUploadResponse$Outbound` instead. */
  export type Outbound = DirectUploadResponse$Outbound;
}

export function directUploadResponseToJSON(
  directUploadResponse: DirectUploadResponse,
): string {
  return JSON.stringify(
    DirectUploadResponse$outboundSchema.parse(directUploadResponse),
  );
}

export function directUploadResponseFromJSON(
  jsonString: string,
): SafeParseResult<DirectUploadResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DirectUploadResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DirectUploadResponse' from JSON`,
  );
}
