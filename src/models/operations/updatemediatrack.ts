import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdateMediaTrackRequest = {
  /**
   * When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  trackId: string;
  /**
   * When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  mediaId: string;
  updateTrackRequest: models.UpdateTrackRequest;
};

/**
 * Media details updated successfully
 */
export type UpdateMediaTrackResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Contains details about the track that was added or updated.
   */
  data?: models.UpdateTrackResponse | undefined;
};

/** @internal */
export const UpdateMediaTrackRequest$inboundSchema: z.ZodType<
  UpdateMediaTrackRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  trackId: z.string(),
  mediaId: z.string(),
  UpdateTrackRequest: models.UpdateTrackRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "UpdateTrackRequest": "updateTrackRequest",
  });
});

/** @internal */
export type UpdateMediaTrackRequest$Outbound = {
  trackId: string;
  mediaId: string;
  UpdateTrackRequest: models.UpdateTrackRequest$Outbound;
};

/** @internal */
export const UpdateMediaTrackRequest$outboundSchema: z.ZodType<
  UpdateMediaTrackRequest$Outbound,
  z.ZodTypeDef,
  UpdateMediaTrackRequest
> = z.object({
  trackId: z.string(),
  mediaId: z.string(),
  updateTrackRequest: models.UpdateTrackRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    updateTrackRequest: "UpdateTrackRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaTrackRequest$ {
  /** @deprecated use `UpdateMediaTrackRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaTrackRequest$inboundSchema;
  /** @deprecated use `UpdateMediaTrackRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaTrackRequest$outboundSchema;
  /** @deprecated use `UpdateMediaTrackRequest$Outbound` instead. */
  export type Outbound = UpdateMediaTrackRequest$Outbound;
}

export function updateMediaTrackRequestToJSON(
  updateMediaTrackRequest: UpdateMediaTrackRequest,
): string {
  return JSON.stringify(
    UpdateMediaTrackRequest$outboundSchema.parse(updateMediaTrackRequest),
  );
}

export function updateMediaTrackRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaTrackRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaTrackRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaTrackRequest' from JSON`,
  );
}

/** @internal */
export const UpdateMediaTrackResponse$inboundSchema: z.ZodType<
  UpdateMediaTrackResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.UpdateTrackResponse$inboundSchema.optional(),
});

/** @internal */
export type UpdateMediaTrackResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.UpdateTrackResponse$Outbound | undefined;
};

/** @internal */
export const UpdateMediaTrackResponse$outboundSchema: z.ZodType<
  UpdateMediaTrackResponse$Outbound,
  z.ZodTypeDef,
  UpdateMediaTrackResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.UpdateTrackResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaTrackResponse$ {
  /** @deprecated use `UpdateMediaTrackResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaTrackResponse$inboundSchema;
  /** @deprecated use `UpdateMediaTrackResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaTrackResponse$outboundSchema;
  /** @deprecated use `UpdateMediaTrackResponse$Outbound` instead. */
  export type Outbound = UpdateMediaTrackResponse$Outbound;
}

export function updateMediaTrackResponseToJSON(
  updateMediaTrackResponse: UpdateMediaTrackResponse,
): string {
  return JSON.stringify(
    UpdateMediaTrackResponse$outboundSchema.parse(updateMediaTrackResponse),
  );
}

export function updateMediaTrackResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaTrackResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaTrackResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaTrackResponse' from JSON`,
  );
}
