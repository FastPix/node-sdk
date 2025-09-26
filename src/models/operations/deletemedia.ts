import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteMediaRequest = {
  /**
   * When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  mediaId: string;
};

/**
 * Delete a video media
 */
export type DeleteMediaResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
};

/** @internal */
export const DeleteMediaRequest$inboundSchema: z.ZodType<
  DeleteMediaRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
});

/** @internal */
export type DeleteMediaRequest$Outbound = {
  mediaId: string;
};

/** @internal */
export const DeleteMediaRequest$outboundSchema: z.ZodType<
  DeleteMediaRequest$Outbound,
  z.ZodTypeDef,
  DeleteMediaRequest
> = z.object({
  mediaId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMediaRequest$ {
  /** @deprecated use `DeleteMediaRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteMediaRequest$inboundSchema;
  /** @deprecated use `DeleteMediaRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteMediaRequest$outboundSchema;
  /** @deprecated use `DeleteMediaRequest$Outbound` instead. */
  export type Outbound = DeleteMediaRequest$Outbound;
}

export function deleteMediaRequestToJSON(
  deleteMediaRequest: DeleteMediaRequest,
): string {
  return JSON.stringify(
    DeleteMediaRequest$outboundSchema.parse(deleteMediaRequest),
  );
}

export function deleteMediaRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteMediaRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteMediaRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteMediaRequest' from JSON`,
  );
}

/** @internal */
export const DeleteMediaResponse$inboundSchema: z.ZodType<
  DeleteMediaResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
});

/** @internal */
export type DeleteMediaResponse$Outbound = {
  success?: boolean | undefined;
};

/** @internal */
export const DeleteMediaResponse$outboundSchema: z.ZodType<
  DeleteMediaResponse$Outbound,
  z.ZodTypeDef,
  DeleteMediaResponse
> = z.object({
  success: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMediaResponse$ {
  /** @deprecated use `DeleteMediaResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteMediaResponse$inboundSchema;
  /** @deprecated use `DeleteMediaResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteMediaResponse$outboundSchema;
  /** @deprecated use `DeleteMediaResponse$Outbound` instead. */
  export type Outbound = DeleteMediaResponse$Outbound;
}

export function deleteMediaResponseToJSON(
  deleteMediaResponse: DeleteMediaResponse,
): string {
  return JSON.stringify(
    DeleteMediaResponse$outboundSchema.parse(deleteMediaResponse),
  );
}

export function deleteMediaResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteMediaResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteMediaResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteMediaResponse' from JSON`,
  );
}
