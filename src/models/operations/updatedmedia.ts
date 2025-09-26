import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdatedMediaRequestBody = {
  metadata?: { [k: string]: string } | undefined;
};

export type UpdatedMediaRequest = {
  /**
   * When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  mediaId: string;
  requestBody: UpdatedMediaRequestBody;
};

/**
 * Media details updated successfully
 */
export type UpdatedMediaResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  data?: models.Media | undefined;
};

/** @internal */
export const UpdatedMediaRequestBody$inboundSchema: z.ZodType<
  UpdatedMediaRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(z.string()).optional(),
});

/** @internal */
export type UpdatedMediaRequestBody$Outbound = {
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const UpdatedMediaRequestBody$outboundSchema: z.ZodType<
  UpdatedMediaRequestBody$Outbound,
  z.ZodTypeDef,
  UpdatedMediaRequestBody
> = z.object({
  metadata: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatedMediaRequestBody$ {
  /** @deprecated use `UpdatedMediaRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdatedMediaRequestBody$inboundSchema;
  /** @deprecated use `UpdatedMediaRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdatedMediaRequestBody$outboundSchema;
  /** @deprecated use `UpdatedMediaRequestBody$Outbound` instead. */
  export type Outbound = UpdatedMediaRequestBody$Outbound;
}

export function updatedMediaRequestBodyToJSON(
  updatedMediaRequestBody: UpdatedMediaRequestBody,
): string {
  return JSON.stringify(
    UpdatedMediaRequestBody$outboundSchema.parse(updatedMediaRequestBody),
  );
}

export function updatedMediaRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdatedMediaRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatedMediaRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatedMediaRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdatedMediaRequest$inboundSchema: z.ZodType<
  UpdatedMediaRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  RequestBody: z.lazy(() => UpdatedMediaRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdatedMediaRequest$Outbound = {
  mediaId: string;
  RequestBody: UpdatedMediaRequestBody$Outbound;
};

/** @internal */
export const UpdatedMediaRequest$outboundSchema: z.ZodType<
  UpdatedMediaRequest$Outbound,
  z.ZodTypeDef,
  UpdatedMediaRequest
> = z.object({
  mediaId: z.string(),
  requestBody: z.lazy(() => UpdatedMediaRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatedMediaRequest$ {
  /** @deprecated use `UpdatedMediaRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatedMediaRequest$inboundSchema;
  /** @deprecated use `UpdatedMediaRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatedMediaRequest$outboundSchema;
  /** @deprecated use `UpdatedMediaRequest$Outbound` instead. */
  export type Outbound = UpdatedMediaRequest$Outbound;
}

export function updatedMediaRequestToJSON(
  updatedMediaRequest: UpdatedMediaRequest,
): string {
  return JSON.stringify(
    UpdatedMediaRequest$outboundSchema.parse(updatedMediaRequest),
  );
}

export function updatedMediaRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdatedMediaRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatedMediaRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatedMediaRequest' from JSON`,
  );
}

/** @internal */
export const UpdatedMediaResponse$inboundSchema: z.ZodType<
  UpdatedMediaResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.Media$inboundSchema.optional(),
});

/** @internal */
export type UpdatedMediaResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.Media$Outbound | undefined;
};

/** @internal */
export const UpdatedMediaResponse$outboundSchema: z.ZodType<
  UpdatedMediaResponse$Outbound,
  z.ZodTypeDef,
  UpdatedMediaResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.Media$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatedMediaResponse$ {
  /** @deprecated use `UpdatedMediaResponse$inboundSchema` instead. */
  export const inboundSchema = UpdatedMediaResponse$inboundSchema;
  /** @deprecated use `UpdatedMediaResponse$outboundSchema` instead. */
  export const outboundSchema = UpdatedMediaResponse$outboundSchema;
  /** @deprecated use `UpdatedMediaResponse$Outbound` instead. */
  export type Outbound = UpdatedMediaResponse$Outbound;
}

export function updatedMediaResponseToJSON(
  updatedMediaResponse: UpdatedMediaResponse,
): string {
  return JSON.stringify(
    UpdatedMediaResponse$outboundSchema.parse(updatedMediaResponse),
  );
}

export function updatedMediaResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdatedMediaResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatedMediaResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatedMediaResponse' from JSON`,
  );
}
