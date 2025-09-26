import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdateMediaSummaryRequestBody = {
  /**
   * Enable or disable the summary feature for the media. Set to true to enable summary or false to disable.
   *
   * @remarks
   */
  generate: boolean;
  /**
   * Specifies the desired word count for the generated summary.
   *
   * @remarks
   * - The value must be between **30** and **250** words.
   */
  summaryLength?: number | undefined;
};

export type UpdateMediaSummaryRequest = {
  /**
   * The unique identifier assigned to the media when created. The value should be a valid UUID.
   *
   * @remarks
   */
  mediaId: string;
  requestBody: UpdateMediaSummaryRequestBody;
};

/**
 * Media details updated successfully with the generated summary
 */
export type UpdateMediaSummaryResponse = {
  /**
   * Indicates if the request was successful or not.
   */
  success?: boolean | undefined;
  data?: models.SummaryResponse | undefined;
};

/** @internal */
export const UpdateMediaSummaryRequestBody$inboundSchema: z.ZodType<
  UpdateMediaSummaryRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  generate: z.boolean(),
  summaryLength: z.number().int().default(100),
});

/** @internal */
export type UpdateMediaSummaryRequestBody$Outbound = {
  generate: boolean;
  summaryLength: number;
};

/** @internal */
export const UpdateMediaSummaryRequestBody$outboundSchema: z.ZodType<
  UpdateMediaSummaryRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateMediaSummaryRequestBody
> = z.object({
  generate: z.boolean(),
  summaryLength: z.number().int().default(100),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaSummaryRequestBody$ {
  /** @deprecated use `UpdateMediaSummaryRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaSummaryRequestBody$inboundSchema;
  /** @deprecated use `UpdateMediaSummaryRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaSummaryRequestBody$outboundSchema;
  /** @deprecated use `UpdateMediaSummaryRequestBody$Outbound` instead. */
  export type Outbound = UpdateMediaSummaryRequestBody$Outbound;
}

export function updateMediaSummaryRequestBodyToJSON(
  updateMediaSummaryRequestBody: UpdateMediaSummaryRequestBody,
): string {
  return JSON.stringify(
    UpdateMediaSummaryRequestBody$outboundSchema.parse(
      updateMediaSummaryRequestBody,
    ),
  );
}

export function updateMediaSummaryRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaSummaryRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaSummaryRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaSummaryRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateMediaSummaryRequest$inboundSchema: z.ZodType<
  UpdateMediaSummaryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  RequestBody: z.lazy(() => UpdateMediaSummaryRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateMediaSummaryRequest$Outbound = {
  mediaId: string;
  RequestBody: UpdateMediaSummaryRequestBody$Outbound;
};

/** @internal */
export const UpdateMediaSummaryRequest$outboundSchema: z.ZodType<
  UpdateMediaSummaryRequest$Outbound,
  z.ZodTypeDef,
  UpdateMediaSummaryRequest
> = z.object({
  mediaId: z.string(),
  requestBody: z.lazy(() => UpdateMediaSummaryRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaSummaryRequest$ {
  /** @deprecated use `UpdateMediaSummaryRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaSummaryRequest$inboundSchema;
  /** @deprecated use `UpdateMediaSummaryRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaSummaryRequest$outboundSchema;
  /** @deprecated use `UpdateMediaSummaryRequest$Outbound` instead. */
  export type Outbound = UpdateMediaSummaryRequest$Outbound;
}

export function updateMediaSummaryRequestToJSON(
  updateMediaSummaryRequest: UpdateMediaSummaryRequest,
): string {
  return JSON.stringify(
    UpdateMediaSummaryRequest$outboundSchema.parse(updateMediaSummaryRequest),
  );
}

export function updateMediaSummaryRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaSummaryRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaSummaryRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaSummaryRequest' from JSON`,
  );
}

/** @internal */
export const UpdateMediaSummaryResponse$inboundSchema: z.ZodType<
  UpdateMediaSummaryResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.SummaryResponse$inboundSchema.optional(),
});

/** @internal */
export type UpdateMediaSummaryResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.SummaryResponse$Outbound | undefined;
};

/** @internal */
export const UpdateMediaSummaryResponse$outboundSchema: z.ZodType<
  UpdateMediaSummaryResponse$Outbound,
  z.ZodTypeDef,
  UpdateMediaSummaryResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.SummaryResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaSummaryResponse$ {
  /** @deprecated use `UpdateMediaSummaryResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaSummaryResponse$inboundSchema;
  /** @deprecated use `UpdateMediaSummaryResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaSummaryResponse$outboundSchema;
  /** @deprecated use `UpdateMediaSummaryResponse$Outbound` instead. */
  export type Outbound = UpdateMediaSummaryResponse$Outbound;
}

export function updateMediaSummaryResponseToJSON(
  updateMediaSummaryResponse: UpdateMediaSummaryResponse,
): string {
  return JSON.stringify(
    UpdateMediaSummaryResponse$outboundSchema.parse(updateMediaSummaryResponse),
  );
}

export function updateMediaSummaryResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaSummaryResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaSummaryResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaSummaryResponse' from JSON`,
  );
}
