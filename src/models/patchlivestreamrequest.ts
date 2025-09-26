import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type PatchLiveStreamRequest = {
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key":"value"s pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * In case the software streaming the live, gets disrupted for any reason and gets disconnected from FastPix, the reconnect window specifies the time span FastPix will wait before ending the stream. Before starting the stream, you can set the reconnect window time which is up to 1800 seconds.
   */
  reconnectWindow?: number | undefined;
};

/** @internal */
export const PatchLiveStreamRequest$inboundSchema: z.ZodType<
  PatchLiveStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(z.string()).optional(),
  reconnectWindow: z.number().int().default(60),
});

/** @internal */
export type PatchLiveStreamRequest$Outbound = {
  metadata?: { [k: string]: string } | undefined;
  reconnectWindow: number;
};

/** @internal */
export const PatchLiveStreamRequest$outboundSchema: z.ZodType<
  PatchLiveStreamRequest$Outbound,
  z.ZodTypeDef,
  PatchLiveStreamRequest
> = z.object({
  metadata: z.record(z.string()).optional(),
  reconnectWindow: z.number().int().default(60),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchLiveStreamRequest$ {
  /** @deprecated use `PatchLiveStreamRequest$inboundSchema` instead. */
  export const inboundSchema = PatchLiveStreamRequest$inboundSchema;
  /** @deprecated use `PatchLiveStreamRequest$outboundSchema` instead. */
  export const outboundSchema = PatchLiveStreamRequest$outboundSchema;
  /** @deprecated use `PatchLiveStreamRequest$Outbound` instead. */
  export type Outbound = PatchLiveStreamRequest$Outbound;
}

export function patchLiveStreamRequestToJSON(
  patchLiveStreamRequest: PatchLiveStreamRequest,
): string {
  return JSON.stringify(
    PatchLiveStreamRequest$outboundSchema.parse(patchLiveStreamRequest),
  );
}

export function patchLiveStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchLiveStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchLiveStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchLiveStreamRequest' from JSON`,
  );
}
