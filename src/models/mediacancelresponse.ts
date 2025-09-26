import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Response returned when an upload is cancelled.
 */
export type MediaCancelResponse = {
  /**
   * The unique identifier of the cancelled upload.
   */
  uploadId?: string | undefined;
  /**
   * Indicates if the upload was a trial.
   */
  trial?: boolean | undefined;
  /**
   * The status of the upload after cancellation.
   */
  status?: string | undefined;
  /**
   * The upload URL (if available) after cancellation.
   */
  url?: string | undefined;
  /**
   * The timeout value for the upload.
   */
  timeout?: number | undefined;
  /**
   * CORS origin allowed for the upload.
   */
  corsOrigin?: string | undefined;
  /**
   * The maximum resolution allowed for the upload.
   */
  maxResolution?: string | undefined;
  /**
   * The access policy for the upload.
   */
  accessPolicy?: string | undefined;
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key" : "value" pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const MediaCancelResponse$inboundSchema: z.ZodType<
  MediaCancelResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  uploadId: z.string().optional(),
  trial: z.boolean().optional(),
  status: z.string().optional(),
  url: z.string().optional(),
  timeout: z.number().int().optional(),
  corsOrigin: z.string().optional(),
  maxResolution: z.string().optional(),
  accessPolicy: z.string().optional(),
  metadata: z.record(z.string()).optional(),
});

/** @internal */
export type MediaCancelResponse$Outbound = {
  uploadId?: string | undefined;
  trial?: boolean | undefined;
  status?: string | undefined;
  url?: string | undefined;
  timeout?: number | undefined;
  corsOrigin?: string | undefined;
  maxResolution?: string | undefined;
  accessPolicy?: string | undefined;
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const MediaCancelResponse$outboundSchema: z.ZodType<
  MediaCancelResponse$Outbound,
  z.ZodTypeDef,
  MediaCancelResponse
> = z.object({
  uploadId: z.string().optional(),
  trial: z.boolean().optional(),
  status: z.string().optional(),
  url: z.string().optional(),
  timeout: z.number().int().optional(),
  corsOrigin: z.string().optional(),
  maxResolution: z.string().optional(),
  accessPolicy: z.string().optional(),
  metadata: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaCancelResponse$ {
  /** @deprecated use `MediaCancelResponse$inboundSchema` instead. */
  export const inboundSchema = MediaCancelResponse$inboundSchema;
  /** @deprecated use `MediaCancelResponse$outboundSchema` instead. */
  export const outboundSchema = MediaCancelResponse$outboundSchema;
  /** @deprecated use `MediaCancelResponse$Outbound` instead. */
  export type Outbound = MediaCancelResponse$Outbound;
}

export function mediaCancelResponseToJSON(
  mediaCancelResponse: MediaCancelResponse,
): string {
  return JSON.stringify(
    MediaCancelResponse$outboundSchema.parse(mediaCancelResponse),
  );
}

export function mediaCancelResponseFromJSON(
  jsonString: string,
): SafeParseResult<MediaCancelResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaCancelResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaCancelResponse' from JSON`,
  );
}
