import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdateMediaModerationModeration = {
  /**
   * Type of media content
   */
  type?: models.MediaType | undefined;
};

export type UpdateMediaModerationRequestBody = {
  moderation?: UpdateMediaModerationModeration | undefined;
};

export type UpdateMediaModerationRequest = {
  /**
   * The unique identifier assigned to the media when created. The value should be a valid UUID.
   *
   * @remarks
   */
  mediaId: string;
  requestBody: UpdateMediaModerationRequestBody;
};

/**
 * Media details updated successfully with the named entity extraction feature enabled or disabled
 */
export type UpdateMediaModerationResponse = {
  /**
   * Indicates if the request was successful or not.
   */
  success?: boolean | undefined;
  data?: models.ModerationResponse | undefined;
};

/** @internal */
export const UpdateMediaModerationModeration$inboundSchema: z.ZodType<
  UpdateMediaModerationModeration,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: models.MediaType$inboundSchema.optional(),
});

/** @internal */
export type UpdateMediaModerationModeration$Outbound = {
  type?: string | undefined;
};

/** @internal */
export const UpdateMediaModerationModeration$outboundSchema: z.ZodType<
  UpdateMediaModerationModeration$Outbound,
  z.ZodTypeDef,
  UpdateMediaModerationModeration
> = z.object({
  type: models.MediaType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaModerationModeration$ {
  /** @deprecated use `UpdateMediaModerationModeration$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaModerationModeration$inboundSchema;
  /** @deprecated use `UpdateMediaModerationModeration$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaModerationModeration$outboundSchema;
  /** @deprecated use `UpdateMediaModerationModeration$Outbound` instead. */
  export type Outbound = UpdateMediaModerationModeration$Outbound;
}

export function updateMediaModerationModerationToJSON(
  updateMediaModerationModeration: UpdateMediaModerationModeration,
): string {
  return JSON.stringify(
    UpdateMediaModerationModeration$outboundSchema.parse(
      updateMediaModerationModeration,
    ),
  );
}

export function updateMediaModerationModerationFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaModerationModeration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaModerationModeration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaModerationModeration' from JSON`,
  );
}

/** @internal */
export const UpdateMediaModerationRequestBody$inboundSchema: z.ZodType<
  UpdateMediaModerationRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  moderation: z.lazy(() => UpdateMediaModerationModeration$inboundSchema)
    .optional(),
});

/** @internal */
export type UpdateMediaModerationRequestBody$Outbound = {
  moderation?: UpdateMediaModerationModeration$Outbound | undefined;
};

/** @internal */
export const UpdateMediaModerationRequestBody$outboundSchema: z.ZodType<
  UpdateMediaModerationRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateMediaModerationRequestBody
> = z.object({
  moderation: z.lazy(() => UpdateMediaModerationModeration$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaModerationRequestBody$ {
  /** @deprecated use `UpdateMediaModerationRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaModerationRequestBody$inboundSchema;
  /** @deprecated use `UpdateMediaModerationRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaModerationRequestBody$outboundSchema;
  /** @deprecated use `UpdateMediaModerationRequestBody$Outbound` instead. */
  export type Outbound = UpdateMediaModerationRequestBody$Outbound;
}

export function updateMediaModerationRequestBodyToJSON(
  updateMediaModerationRequestBody: UpdateMediaModerationRequestBody,
): string {
  return JSON.stringify(
    UpdateMediaModerationRequestBody$outboundSchema.parse(
      updateMediaModerationRequestBody,
    ),
  );
}

export function updateMediaModerationRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaModerationRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaModerationRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaModerationRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateMediaModerationRequest$inboundSchema: z.ZodType<
  UpdateMediaModerationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  RequestBody: z.lazy(() => UpdateMediaModerationRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateMediaModerationRequest$Outbound = {
  mediaId: string;
  RequestBody: UpdateMediaModerationRequestBody$Outbound;
};

/** @internal */
export const UpdateMediaModerationRequest$outboundSchema: z.ZodType<
  UpdateMediaModerationRequest$Outbound,
  z.ZodTypeDef,
  UpdateMediaModerationRequest
> = z.object({
  mediaId: z.string(),
  requestBody: z.lazy(() => UpdateMediaModerationRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaModerationRequest$ {
  /** @deprecated use `UpdateMediaModerationRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaModerationRequest$inboundSchema;
  /** @deprecated use `UpdateMediaModerationRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaModerationRequest$outboundSchema;
  /** @deprecated use `UpdateMediaModerationRequest$Outbound` instead. */
  export type Outbound = UpdateMediaModerationRequest$Outbound;
}

export function updateMediaModerationRequestToJSON(
  updateMediaModerationRequest: UpdateMediaModerationRequest,
): string {
  return JSON.stringify(
    UpdateMediaModerationRequest$outboundSchema.parse(
      updateMediaModerationRequest,
    ),
  );
}

export function updateMediaModerationRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaModerationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaModerationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaModerationRequest' from JSON`,
  );
}

/** @internal */
export const UpdateMediaModerationResponse$inboundSchema: z.ZodType<
  UpdateMediaModerationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.ModerationResponse$inboundSchema.optional(),
});

/** @internal */
export type UpdateMediaModerationResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.ModerationResponse$Outbound | undefined;
};

/** @internal */
export const UpdateMediaModerationResponse$outboundSchema: z.ZodType<
  UpdateMediaModerationResponse$Outbound,
  z.ZodTypeDef,
  UpdateMediaModerationResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.ModerationResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaModerationResponse$ {
  /** @deprecated use `UpdateMediaModerationResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaModerationResponse$inboundSchema;
  /** @deprecated use `UpdateMediaModerationResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaModerationResponse$outboundSchema;
  /** @deprecated use `UpdateMediaModerationResponse$Outbound` instead. */
  export type Outbound = UpdateMediaModerationResponse$Outbound;
}

export function updateMediaModerationResponseToJSON(
  updateMediaModerationResponse: UpdateMediaModerationResponse,
): string {
  return JSON.stringify(
    UpdateMediaModerationResponse$outboundSchema.parse(
      updateMediaModerationResponse,
    ),
  );
}

export function updateMediaModerationResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaModerationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaModerationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaModerationResponse' from JSON`,
  );
}
