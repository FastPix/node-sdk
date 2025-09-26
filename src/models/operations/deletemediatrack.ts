import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteMediaTrackRequest = {
  /**
   * When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  mediaId: string;
  /**
   * When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  trackId: string;
};

/**
 * Delete a video media
 */
export type DeleteMediaTrackResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
};

/** @internal */
export const DeleteMediaTrackRequest$inboundSchema: z.ZodType<
  DeleteMediaTrackRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  trackId: z.string(),
});

/** @internal */
export type DeleteMediaTrackRequest$Outbound = {
  mediaId: string;
  trackId: string;
};

/** @internal */
export const DeleteMediaTrackRequest$outboundSchema: z.ZodType<
  DeleteMediaTrackRequest$Outbound,
  z.ZodTypeDef,
  DeleteMediaTrackRequest
> = z.object({
  mediaId: z.string(),
  trackId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMediaTrackRequest$ {
  /** @deprecated use `DeleteMediaTrackRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteMediaTrackRequest$inboundSchema;
  /** @deprecated use `DeleteMediaTrackRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteMediaTrackRequest$outboundSchema;
  /** @deprecated use `DeleteMediaTrackRequest$Outbound` instead. */
  export type Outbound = DeleteMediaTrackRequest$Outbound;
}

export function deleteMediaTrackRequestToJSON(
  deleteMediaTrackRequest: DeleteMediaTrackRequest,
): string {
  return JSON.stringify(
    DeleteMediaTrackRequest$outboundSchema.parse(deleteMediaTrackRequest),
  );
}

export function deleteMediaTrackRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteMediaTrackRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteMediaTrackRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteMediaTrackRequest' from JSON`,
  );
}

/** @internal */
export const DeleteMediaTrackResponse$inboundSchema: z.ZodType<
  DeleteMediaTrackResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
});

/** @internal */
export type DeleteMediaTrackResponse$Outbound = {
  success?: boolean | undefined;
};

/** @internal */
export const DeleteMediaTrackResponse$outboundSchema: z.ZodType<
  DeleteMediaTrackResponse$Outbound,
  z.ZodTypeDef,
  DeleteMediaTrackResponse
> = z.object({
  success: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMediaTrackResponse$ {
  /** @deprecated use `DeleteMediaTrackResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteMediaTrackResponse$inboundSchema;
  /** @deprecated use `DeleteMediaTrackResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteMediaTrackResponse$outboundSchema;
  /** @deprecated use `DeleteMediaTrackResponse$Outbound` instead. */
  export type Outbound = DeleteMediaTrackResponse$Outbound;
}

export function deleteMediaTrackResponseToJSON(
  deleteMediaTrackResponse: DeleteMediaTrackResponse,
): string {
  return JSON.stringify(
    DeleteMediaTrackResponse$outboundSchema.parse(deleteMediaTrackResponse),
  );
}

export function deleteMediaTrackResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteMediaTrackResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteMediaTrackResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteMediaTrackResponse' from JSON`,
  );
}
