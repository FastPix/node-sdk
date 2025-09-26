import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type CancelUploadRequest = {
  /**
   * When uploading the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  uploadId: string;
};

/**
 * Upload cancelled successfully
 */
export type CancelUploadResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Response returned when an upload is cancelled.
   */
  data?: models.MediaCancelResponse | undefined;
};

/** @internal */
export const CancelUploadRequest$inboundSchema: z.ZodType<
  CancelUploadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uploadId: z.string(),
});

/** @internal */
export type CancelUploadRequest$Outbound = {
  uploadId: string;
};

/** @internal */
export const CancelUploadRequest$outboundSchema: z.ZodType<
  CancelUploadRequest$Outbound,
  z.ZodTypeDef,
  CancelUploadRequest
> = z.object({
  uploadId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelUploadRequest$ {
  /** @deprecated use `CancelUploadRequest$inboundSchema` instead. */
  export const inboundSchema = CancelUploadRequest$inboundSchema;
  /** @deprecated use `CancelUploadRequest$outboundSchema` instead. */
  export const outboundSchema = CancelUploadRequest$outboundSchema;
  /** @deprecated use `CancelUploadRequest$Outbound` instead. */
  export type Outbound = CancelUploadRequest$Outbound;
}

export function cancelUploadRequestToJSON(
  cancelUploadRequest: CancelUploadRequest,
): string {
  return JSON.stringify(
    CancelUploadRequest$outboundSchema.parse(cancelUploadRequest),
  );
}

export function cancelUploadRequestFromJSON(
  jsonString: string,
): SafeParseResult<CancelUploadRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CancelUploadRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CancelUploadRequest' from JSON`,
  );
}

/** @internal */
export const CancelUploadResponse$inboundSchema: z.ZodType<
  CancelUploadResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.MediaCancelResponse$inboundSchema.optional(),
});

/** @internal */
export type CancelUploadResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.MediaCancelResponse$Outbound | undefined;
};

/** @internal */
export const CancelUploadResponse$outboundSchema: z.ZodType<
  CancelUploadResponse$Outbound,
  z.ZodTypeDef,
  CancelUploadResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.MediaCancelResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelUploadResponse$ {
  /** @deprecated use `CancelUploadResponse$inboundSchema` instead. */
  export const inboundSchema = CancelUploadResponse$inboundSchema;
  /** @deprecated use `CancelUploadResponse$outboundSchema` instead. */
  export const outboundSchema = CancelUploadResponse$outboundSchema;
  /** @deprecated use `CancelUploadResponse$Outbound` instead. */
  export type Outbound = CancelUploadResponse$Outbound;
}

export function cancelUploadResponseToJSON(
  cancelUploadResponse: CancelUploadResponse,
): string {
  return JSON.stringify(
    CancelUploadResponse$outboundSchema.parse(cancelUploadResponse),
  );
}

export function cancelUploadResponseFromJSON(
  jsonString: string,
): SafeParseResult<CancelUploadResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CancelUploadResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CancelUploadResponse' from JSON`,
  );
}
