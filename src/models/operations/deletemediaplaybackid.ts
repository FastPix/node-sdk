import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteMediaPlaybackIdRequest = {
  /**
   * Return the universal unique identifier for media which can contain a maximum of 255 characters.
   */
  mediaId: string;
  /**
   * Return the universal unique identifier for playbacks  which can contain a maximum of 255 characters.
   */
  playbackId: string;
};

/**
 * Deleted a Playback Id successfully
 */
export type DeleteMediaPlaybackIdResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
};

/** @internal */
export const DeleteMediaPlaybackIdRequest$inboundSchema: z.ZodType<
  DeleteMediaPlaybackIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  playbackId: z.string(),
});

/** @internal */
export type DeleteMediaPlaybackIdRequest$Outbound = {
  mediaId: string;
  playbackId: string;
};

/** @internal */
export const DeleteMediaPlaybackIdRequest$outboundSchema: z.ZodType<
  DeleteMediaPlaybackIdRequest$Outbound,
  z.ZodTypeDef,
  DeleteMediaPlaybackIdRequest
> = z.object({
  mediaId: z.string(),
  playbackId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMediaPlaybackIdRequest$ {
  /** @deprecated use `DeleteMediaPlaybackIdRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteMediaPlaybackIdRequest$inboundSchema;
  /** @deprecated use `DeleteMediaPlaybackIdRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteMediaPlaybackIdRequest$outboundSchema;
  /** @deprecated use `DeleteMediaPlaybackIdRequest$Outbound` instead. */
  export type Outbound = DeleteMediaPlaybackIdRequest$Outbound;
}

export function deleteMediaPlaybackIdRequestToJSON(
  deleteMediaPlaybackIdRequest: DeleteMediaPlaybackIdRequest,
): string {
  return JSON.stringify(
    DeleteMediaPlaybackIdRequest$outboundSchema.parse(
      deleteMediaPlaybackIdRequest,
    ),
  );
}

export function deleteMediaPlaybackIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteMediaPlaybackIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteMediaPlaybackIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteMediaPlaybackIdRequest' from JSON`,
  );
}

/** @internal */
export const DeleteMediaPlaybackIdResponse$inboundSchema: z.ZodType<
  DeleteMediaPlaybackIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
});

/** @internal */
export type DeleteMediaPlaybackIdResponse$Outbound = {
  success?: boolean | undefined;
};

/** @internal */
export const DeleteMediaPlaybackIdResponse$outboundSchema: z.ZodType<
  DeleteMediaPlaybackIdResponse$Outbound,
  z.ZodTypeDef,
  DeleteMediaPlaybackIdResponse
> = z.object({
  success: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMediaPlaybackIdResponse$ {
  /** @deprecated use `DeleteMediaPlaybackIdResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteMediaPlaybackIdResponse$inboundSchema;
  /** @deprecated use `DeleteMediaPlaybackIdResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteMediaPlaybackIdResponse$outboundSchema;
  /** @deprecated use `DeleteMediaPlaybackIdResponse$Outbound` instead. */
  export type Outbound = DeleteMediaPlaybackIdResponse$Outbound;
}

export function deleteMediaPlaybackIdResponseToJSON(
  deleteMediaPlaybackIdResponse: DeleteMediaPlaybackIdResponse,
): string {
  return JSON.stringify(
    DeleteMediaPlaybackIdResponse$outboundSchema.parse(
      deleteMediaPlaybackIdResponse,
    ),
  );
}

export function deleteMediaPlaybackIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteMediaPlaybackIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteMediaPlaybackIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteMediaPlaybackIdResponse' from JSON`,
  );
}
