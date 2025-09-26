import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  DirectUploadResponse,
  DirectUploadResponse$inboundSchema,
  DirectUploadResponse$Outbound,
  DirectUploadResponse$outboundSchema,
} from "./directuploadresponse.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays the result of the request.
 */
export type DirectUpload = {
  /**
   * When creating the upload, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  id?: string | undefined;
  /**
   * When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  mediaId?: string | undefined;
  /**
   * Determines the media's status, which can be one of the possible values.
   */
  status?: string | undefined;
  /**
   * The url hosts the media file for FastPix, which needs to be download to use further.  It supports formats like MP3, MP4, MOV, MKV, or TS, and includes text tracks for subtitles/CC (SRT file/VTT file). While FastPix can handle various audio and video formats and codecs, using standard inputs can help with optimal processing speed.
   */
  url?: string | undefined;
  /**
   * The duration set for the validity of the upload URL. If the upload isn't completed within this timeframe, it's marked as timed out.
   *
   * @remarks
   */
  timeout?: number | undefined;
  /**
   * Upload media directly from a device using the url name or enter '*' to allow all.
   */
  corsOrigin?: string | undefined;
  pushMediaSettings?: DirectUploadResponse | undefined;
};

/** @internal */
export const DirectUpload$inboundSchema: z.ZodType<
  DirectUpload,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  mediaId: z.string().optional(),
  status: z.string().optional(),
  url: z.string().optional(),
  timeout: z.number().default(14400),
  corsOrigin: z.string().optional(),
  pushMediaSettings: DirectUploadResponse$inboundSchema.optional(),
});

/** @internal */
export type DirectUpload$Outbound = {
  id?: string | undefined;
  mediaId?: string | undefined;
  status?: string | undefined;
  url?: string | undefined;
  timeout: number;
  corsOrigin?: string | undefined;
  pushMediaSettings?: DirectUploadResponse$Outbound | undefined;
};

/** @internal */
export const DirectUpload$outboundSchema: z.ZodType<
  DirectUpload$Outbound,
  z.ZodTypeDef,
  DirectUpload
> = z.object({
  id: z.string().optional(),
  mediaId: z.string().optional(),
  status: z.string().optional(),
  url: z.string().optional(),
  timeout: z.number().default(14400),
  corsOrigin: z.string().optional(),
  pushMediaSettings: DirectUploadResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DirectUpload$ {
  /** @deprecated use `DirectUpload$inboundSchema` instead. */
  export const inboundSchema = DirectUpload$inboundSchema;
  /** @deprecated use `DirectUpload$outboundSchema` instead. */
  export const outboundSchema = DirectUpload$outboundSchema;
  /** @deprecated use `DirectUpload$Outbound` instead. */
  export type Outbound = DirectUpload$Outbound;
}

export function directUploadToJSON(directUpload: DirectUpload): string {
  return JSON.stringify(DirectUpload$outboundSchema.parse(directUpload));
}

export function directUploadFromJSON(
  jsonString: string,
): SafeParseResult<DirectUpload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DirectUpload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DirectUpload' from JSON`,
  );
}
