import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdateMediaNamedEntitiesRequestBody = {
  /**
   * Enable or disable named entity extraction. Set to `true` to enable or `false` to disable.
   *
   * @remarks
   */
  namedEntities: boolean;
};

export type UpdateMediaNamedEntitiesRequest = {
  /**
   * The unique identifier assigned to the media when created. The value should be a valid UUID.
   *
   * @remarks
   */
  mediaId: string;
  requestBody: UpdateMediaNamedEntitiesRequestBody;
};

/**
 * Media details updated successfully with the named entity extraction feature enabled or disabled
 */
export type UpdateMediaNamedEntitiesResponse = {
  /**
   * Indicates if the request was successful or not.
   */
  success?: boolean | undefined;
  data?: models.NamedEntitiesResponse | undefined;
};

/** @internal */
export const UpdateMediaNamedEntitiesRequestBody$inboundSchema: z.ZodType<
  UpdateMediaNamedEntitiesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  namedEntities: z.boolean(),
});

/** @internal */
export type UpdateMediaNamedEntitiesRequestBody$Outbound = {
  namedEntities: boolean;
};

/** @internal */
export const UpdateMediaNamedEntitiesRequestBody$outboundSchema: z.ZodType<
  UpdateMediaNamedEntitiesRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateMediaNamedEntitiesRequestBody
> = z.object({
  namedEntities: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaNamedEntitiesRequestBody$ {
  /** @deprecated use `UpdateMediaNamedEntitiesRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    UpdateMediaNamedEntitiesRequestBody$inboundSchema;
  /** @deprecated use `UpdateMediaNamedEntitiesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    UpdateMediaNamedEntitiesRequestBody$outboundSchema;
  /** @deprecated use `UpdateMediaNamedEntitiesRequestBody$Outbound` instead. */
  export type Outbound = UpdateMediaNamedEntitiesRequestBody$Outbound;
}

export function updateMediaNamedEntitiesRequestBodyToJSON(
  updateMediaNamedEntitiesRequestBody: UpdateMediaNamedEntitiesRequestBody,
): string {
  return JSON.stringify(
    UpdateMediaNamedEntitiesRequestBody$outboundSchema.parse(
      updateMediaNamedEntitiesRequestBody,
    ),
  );
}

export function updateMediaNamedEntitiesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaNamedEntitiesRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateMediaNamedEntitiesRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaNamedEntitiesRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateMediaNamedEntitiesRequest$inboundSchema: z.ZodType<
  UpdateMediaNamedEntitiesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  RequestBody: z.lazy(() => UpdateMediaNamedEntitiesRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateMediaNamedEntitiesRequest$Outbound = {
  mediaId: string;
  RequestBody: UpdateMediaNamedEntitiesRequestBody$Outbound;
};

/** @internal */
export const UpdateMediaNamedEntitiesRequest$outboundSchema: z.ZodType<
  UpdateMediaNamedEntitiesRequest$Outbound,
  z.ZodTypeDef,
  UpdateMediaNamedEntitiesRequest
> = z.object({
  mediaId: z.string(),
  requestBody: z.lazy(() => UpdateMediaNamedEntitiesRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaNamedEntitiesRequest$ {
  /** @deprecated use `UpdateMediaNamedEntitiesRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaNamedEntitiesRequest$inboundSchema;
  /** @deprecated use `UpdateMediaNamedEntitiesRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaNamedEntitiesRequest$outboundSchema;
  /** @deprecated use `UpdateMediaNamedEntitiesRequest$Outbound` instead. */
  export type Outbound = UpdateMediaNamedEntitiesRequest$Outbound;
}

export function updateMediaNamedEntitiesRequestToJSON(
  updateMediaNamedEntitiesRequest: UpdateMediaNamedEntitiesRequest,
): string {
  return JSON.stringify(
    UpdateMediaNamedEntitiesRequest$outboundSchema.parse(
      updateMediaNamedEntitiesRequest,
    ),
  );
}

export function updateMediaNamedEntitiesRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaNamedEntitiesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaNamedEntitiesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaNamedEntitiesRequest' from JSON`,
  );
}

/** @internal */
export const UpdateMediaNamedEntitiesResponse$inboundSchema: z.ZodType<
  UpdateMediaNamedEntitiesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.NamedEntitiesResponse$inboundSchema.optional(),
});

/** @internal */
export type UpdateMediaNamedEntitiesResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.NamedEntitiesResponse$Outbound | undefined;
};

/** @internal */
export const UpdateMediaNamedEntitiesResponse$outboundSchema: z.ZodType<
  UpdateMediaNamedEntitiesResponse$Outbound,
  z.ZodTypeDef,
  UpdateMediaNamedEntitiesResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.NamedEntitiesResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaNamedEntitiesResponse$ {
  /** @deprecated use `UpdateMediaNamedEntitiesResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaNamedEntitiesResponse$inboundSchema;
  /** @deprecated use `UpdateMediaNamedEntitiesResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaNamedEntitiesResponse$outboundSchema;
  /** @deprecated use `UpdateMediaNamedEntitiesResponse$Outbound` instead. */
  export type Outbound = UpdateMediaNamedEntitiesResponse$Outbound;
}

export function updateMediaNamedEntitiesResponseToJSON(
  updateMediaNamedEntitiesResponse: UpdateMediaNamedEntitiesResponse,
): string {
  return JSON.stringify(
    UpdateMediaNamedEntitiesResponse$outboundSchema.parse(
      updateMediaNamedEntitiesResponse,
    ),
  );
}

export function updateMediaNamedEntitiesResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaNamedEntitiesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaNamedEntitiesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaNamedEntitiesResponse' from JSON`,
  );
}
