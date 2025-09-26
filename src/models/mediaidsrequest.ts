import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * The list of mediaId(s) you want to perform the operation on.rds by limit.
 */
export type MediaIdsRequest = {
  mediaIds: Array<string>;
};

/** @internal */
export const MediaIdsRequest$inboundSchema: z.ZodType<
  MediaIdsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaIds: z.array(z.string()),
});

/** @internal */
export type MediaIdsRequest$Outbound = {
  mediaIds: Array<string>;
};

/** @internal */
export const MediaIdsRequest$outboundSchema: z.ZodType<
  MediaIdsRequest$Outbound,
  z.ZodTypeDef,
  MediaIdsRequest
> = z.object({
  mediaIds: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaIdsRequest$ {
  /** @deprecated use `MediaIdsRequest$inboundSchema` instead. */
  export const inboundSchema = MediaIdsRequest$inboundSchema;
  /** @deprecated use `MediaIdsRequest$outboundSchema` instead. */
  export const outboundSchema = MediaIdsRequest$outboundSchema;
  /** @deprecated use `MediaIdsRequest$Outbound` instead. */
  export type Outbound = MediaIdsRequest$Outbound;
}

export function mediaIdsRequestToJSON(
  mediaIdsRequest: MediaIdsRequest,
): string {
  return JSON.stringify(MediaIdsRequest$outboundSchema.parse(mediaIdsRequest));
}

export function mediaIdsRequestFromJSON(
  jsonString: string,
): SafeParseResult<MediaIdsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaIdsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaIdsRequest' from JSON`,
  );
}
