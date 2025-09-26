import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdateMediaChaptersRequestBody = {
  /**
   * Enable or disable the chapters feature for the media. Set to `true` to enable chapters or `false` to disable.
   *
   * @remarks
   */
  chapters: boolean;
};

export type UpdateMediaChaptersRequest = {
  /**
   * The unique identifier assigned to the media when created. The value should be a valid UUID.
   *
   * @remarks
   */
  mediaId: string;
  requestBody: UpdateMediaChaptersRequestBody;
};

/**
 * Media details updated successfully with the chapters feature enabled or disabled
 */
export type UpdateMediaChaptersResponse = {
  /**
   * Indicates if the request was successful or not.
   */
  success?: boolean | undefined;
  data?: models.ChaptersResponse | undefined;
};

/** @internal */
export const UpdateMediaChaptersRequestBody$inboundSchema: z.ZodType<
  UpdateMediaChaptersRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  chapters: z.boolean(),
});

/** @internal */
export type UpdateMediaChaptersRequestBody$Outbound = {
  chapters: boolean;
};

/** @internal */
export const UpdateMediaChaptersRequestBody$outboundSchema: z.ZodType<
  UpdateMediaChaptersRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateMediaChaptersRequestBody
> = z.object({
  chapters: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaChaptersRequestBody$ {
  /** @deprecated use `UpdateMediaChaptersRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaChaptersRequestBody$inboundSchema;
  /** @deprecated use `UpdateMediaChaptersRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaChaptersRequestBody$outboundSchema;
  /** @deprecated use `UpdateMediaChaptersRequestBody$Outbound` instead. */
  export type Outbound = UpdateMediaChaptersRequestBody$Outbound;
}

export function updateMediaChaptersRequestBodyToJSON(
  updateMediaChaptersRequestBody: UpdateMediaChaptersRequestBody,
): string {
  return JSON.stringify(
    UpdateMediaChaptersRequestBody$outboundSchema.parse(
      updateMediaChaptersRequestBody,
    ),
  );
}

export function updateMediaChaptersRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaChaptersRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaChaptersRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaChaptersRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateMediaChaptersRequest$inboundSchema: z.ZodType<
  UpdateMediaChaptersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  RequestBody: z.lazy(() => UpdateMediaChaptersRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateMediaChaptersRequest$Outbound = {
  mediaId: string;
  RequestBody: UpdateMediaChaptersRequestBody$Outbound;
};

/** @internal */
export const UpdateMediaChaptersRequest$outboundSchema: z.ZodType<
  UpdateMediaChaptersRequest$Outbound,
  z.ZodTypeDef,
  UpdateMediaChaptersRequest
> = z.object({
  mediaId: z.string(),
  requestBody: z.lazy(() => UpdateMediaChaptersRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaChaptersRequest$ {
  /** @deprecated use `UpdateMediaChaptersRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaChaptersRequest$inboundSchema;
  /** @deprecated use `UpdateMediaChaptersRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaChaptersRequest$outboundSchema;
  /** @deprecated use `UpdateMediaChaptersRequest$Outbound` instead. */
  export type Outbound = UpdateMediaChaptersRequest$Outbound;
}

export function updateMediaChaptersRequestToJSON(
  updateMediaChaptersRequest: UpdateMediaChaptersRequest,
): string {
  return JSON.stringify(
    UpdateMediaChaptersRequest$outboundSchema.parse(updateMediaChaptersRequest),
  );
}

export function updateMediaChaptersRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaChaptersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaChaptersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaChaptersRequest' from JSON`,
  );
}

/** @internal */
export const UpdateMediaChaptersResponse$inboundSchema: z.ZodType<
  UpdateMediaChaptersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.ChaptersResponse$inboundSchema.optional(),
});

/** @internal */
export type UpdateMediaChaptersResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.ChaptersResponse$Outbound | undefined;
};

/** @internal */
export const UpdateMediaChaptersResponse$outboundSchema: z.ZodType<
  UpdateMediaChaptersResponse$Outbound,
  z.ZodTypeDef,
  UpdateMediaChaptersResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.ChaptersResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMediaChaptersResponse$ {
  /** @deprecated use `UpdateMediaChaptersResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateMediaChaptersResponse$inboundSchema;
  /** @deprecated use `UpdateMediaChaptersResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateMediaChaptersResponse$outboundSchema;
  /** @deprecated use `UpdateMediaChaptersResponse$Outbound` instead. */
  export type Outbound = UpdateMediaChaptersResponse$Outbound;
}

export function updateMediaChaptersResponseToJSON(
  updateMediaChaptersResponse: UpdateMediaChaptersResponse,
): string {
  return JSON.stringify(
    UpdateMediaChaptersResponse$outboundSchema.parse(
      updateMediaChaptersResponse,
    ),
  );
}

export function updateMediaChaptersResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMediaChaptersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMediaChaptersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMediaChaptersResponse' from JSON`,
  );
}
