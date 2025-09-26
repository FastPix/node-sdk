import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdatedSourceAccessRequestBody = {
  /**
   * The sourceAccess parameter determines whether the original media file is accessible. Set to true to enable access or false to restrict it.
   */
  sourceAccess?: boolean | undefined;
};

export type UpdatedSourceAccessRequest = {
  /**
   * When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   *
   * @remarks
   */
  mediaId: string;
  requestBody: UpdatedSourceAccessRequestBody;
};

/**
 * Media details updated successfully
 */
export type UpdatedSourceAccessResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  data?: models.Media | undefined;
};

/** @internal */
export const UpdatedSourceAccessRequestBody$inboundSchema: z.ZodType<
  UpdatedSourceAccessRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourceAccess: z.boolean().optional(),
});

/** @internal */
export type UpdatedSourceAccessRequestBody$Outbound = {
  sourceAccess?: boolean | undefined;
};

/** @internal */
export const UpdatedSourceAccessRequestBody$outboundSchema: z.ZodType<
  UpdatedSourceAccessRequestBody$Outbound,
  z.ZodTypeDef,
  UpdatedSourceAccessRequestBody
> = z.object({
  sourceAccess: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatedSourceAccessRequestBody$ {
  /** @deprecated use `UpdatedSourceAccessRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdatedSourceAccessRequestBody$inboundSchema;
  /** @deprecated use `UpdatedSourceAccessRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdatedSourceAccessRequestBody$outboundSchema;
  /** @deprecated use `UpdatedSourceAccessRequestBody$Outbound` instead. */
  export type Outbound = UpdatedSourceAccessRequestBody$Outbound;
}

export function updatedSourceAccessRequestBodyToJSON(
  updatedSourceAccessRequestBody: UpdatedSourceAccessRequestBody,
): string {
  return JSON.stringify(
    UpdatedSourceAccessRequestBody$outboundSchema.parse(
      updatedSourceAccessRequestBody,
    ),
  );
}

export function updatedSourceAccessRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdatedSourceAccessRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatedSourceAccessRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatedSourceAccessRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdatedSourceAccessRequest$inboundSchema: z.ZodType<
  UpdatedSourceAccessRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  RequestBody: z.lazy(() => UpdatedSourceAccessRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdatedSourceAccessRequest$Outbound = {
  mediaId: string;
  RequestBody: UpdatedSourceAccessRequestBody$Outbound;
};

/** @internal */
export const UpdatedSourceAccessRequest$outboundSchema: z.ZodType<
  UpdatedSourceAccessRequest$Outbound,
  z.ZodTypeDef,
  UpdatedSourceAccessRequest
> = z.object({
  mediaId: z.string(),
  requestBody: z.lazy(() => UpdatedSourceAccessRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatedSourceAccessRequest$ {
  /** @deprecated use `UpdatedSourceAccessRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatedSourceAccessRequest$inboundSchema;
  /** @deprecated use `UpdatedSourceAccessRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatedSourceAccessRequest$outboundSchema;
  /** @deprecated use `UpdatedSourceAccessRequest$Outbound` instead. */
  export type Outbound = UpdatedSourceAccessRequest$Outbound;
}

export function updatedSourceAccessRequestToJSON(
  updatedSourceAccessRequest: UpdatedSourceAccessRequest,
): string {
  return JSON.stringify(
    UpdatedSourceAccessRequest$outboundSchema.parse(updatedSourceAccessRequest),
  );
}

export function updatedSourceAccessRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdatedSourceAccessRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatedSourceAccessRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatedSourceAccessRequest' from JSON`,
  );
}

/** @internal */
export const UpdatedSourceAccessResponse$inboundSchema: z.ZodType<
  UpdatedSourceAccessResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.Media$inboundSchema.optional(),
});

/** @internal */
export type UpdatedSourceAccessResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.Media$Outbound | undefined;
};

/** @internal */
export const UpdatedSourceAccessResponse$outboundSchema: z.ZodType<
  UpdatedSourceAccessResponse$Outbound,
  z.ZodTypeDef,
  UpdatedSourceAccessResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.Media$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatedSourceAccessResponse$ {
  /** @deprecated use `UpdatedSourceAccessResponse$inboundSchema` instead. */
  export const inboundSchema = UpdatedSourceAccessResponse$inboundSchema;
  /** @deprecated use `UpdatedSourceAccessResponse$outboundSchema` instead. */
  export const outboundSchema = UpdatedSourceAccessResponse$outboundSchema;
  /** @deprecated use `UpdatedSourceAccessResponse$Outbound` instead. */
  export type Outbound = UpdatedSourceAccessResponse$Outbound;
}

export function updatedSourceAccessResponseToJSON(
  updatedSourceAccessResponse: UpdatedSourceAccessResponse,
): string {
  return JSON.stringify(
    UpdatedSourceAccessResponse$outboundSchema.parse(
      updatedSourceAccessResponse,
    ),
  );
}

export function updatedSourceAccessResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdatedSourceAccessResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatedSourceAccessResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatedSourceAccessResponse' from JSON`,
  );
}
