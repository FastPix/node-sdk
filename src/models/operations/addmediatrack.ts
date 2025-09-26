import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type AddMediaTrackRequestBody = {
  /**
   * Contains details about the track being added to the media file.
   */
  tracks?: models.AddTrackRequest | undefined;
};

export type AddMediaTrackRequest = {
  /**
   * When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  mediaId: string;
  requestBody: AddMediaTrackRequestBody;
};

/**
 * Media details updated successfully
 */
export type AddMediaTrackResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Contains details about the track that was added or updated.
   */
  data?: models.AddTrackResponse | undefined;
};

/** @internal */
export const AddMediaTrackRequestBody$inboundSchema: z.ZodType<
  AddMediaTrackRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  tracks: models.AddTrackRequest$inboundSchema.optional(),
});

/** @internal */
export type AddMediaTrackRequestBody$Outbound = {
  tracks?: models.AddTrackRequest$Outbound | undefined;
};

/** @internal */
export const AddMediaTrackRequestBody$outboundSchema: z.ZodType<
  AddMediaTrackRequestBody$Outbound,
  z.ZodTypeDef,
  AddMediaTrackRequestBody
> = z.object({
  tracks: models.AddTrackRequest$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddMediaTrackRequestBody$ {
  /** @deprecated use `AddMediaTrackRequestBody$inboundSchema` instead. */
  export const inboundSchema = AddMediaTrackRequestBody$inboundSchema;
  /** @deprecated use `AddMediaTrackRequestBody$outboundSchema` instead. */
  export const outboundSchema = AddMediaTrackRequestBody$outboundSchema;
  /** @deprecated use `AddMediaTrackRequestBody$Outbound` instead. */
  export type Outbound = AddMediaTrackRequestBody$Outbound;
}

export function addMediaTrackRequestBodyToJSON(
  addMediaTrackRequestBody: AddMediaTrackRequestBody,
): string {
  return JSON.stringify(
    AddMediaTrackRequestBody$outboundSchema.parse(addMediaTrackRequestBody),
  );
}

export function addMediaTrackRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AddMediaTrackRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddMediaTrackRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddMediaTrackRequestBody' from JSON`,
  );
}

/** @internal */
export const AddMediaTrackRequest$inboundSchema: z.ZodType<
  AddMediaTrackRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  RequestBody: z.lazy(() => AddMediaTrackRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type AddMediaTrackRequest$Outbound = {
  mediaId: string;
  RequestBody: AddMediaTrackRequestBody$Outbound;
};

/** @internal */
export const AddMediaTrackRequest$outboundSchema: z.ZodType<
  AddMediaTrackRequest$Outbound,
  z.ZodTypeDef,
  AddMediaTrackRequest
> = z.object({
  mediaId: z.string(),
  requestBody: z.lazy(() => AddMediaTrackRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddMediaTrackRequest$ {
  /** @deprecated use `AddMediaTrackRequest$inboundSchema` instead. */
  export const inboundSchema = AddMediaTrackRequest$inboundSchema;
  /** @deprecated use `AddMediaTrackRequest$outboundSchema` instead. */
  export const outboundSchema = AddMediaTrackRequest$outboundSchema;
  /** @deprecated use `AddMediaTrackRequest$Outbound` instead. */
  export type Outbound = AddMediaTrackRequest$Outbound;
}

export function addMediaTrackRequestToJSON(
  addMediaTrackRequest: AddMediaTrackRequest,
): string {
  return JSON.stringify(
    AddMediaTrackRequest$outboundSchema.parse(addMediaTrackRequest),
  );
}

export function addMediaTrackRequestFromJSON(
  jsonString: string,
): SafeParseResult<AddMediaTrackRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddMediaTrackRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddMediaTrackRequest' from JSON`,
  );
}

/** @internal */
export const AddMediaTrackResponse$inboundSchema: z.ZodType<
  AddMediaTrackResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.AddTrackResponse$inboundSchema.optional(),
});

/** @internal */
export type AddMediaTrackResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.AddTrackResponse$Outbound | undefined;
};

/** @internal */
export const AddMediaTrackResponse$outboundSchema: z.ZodType<
  AddMediaTrackResponse$Outbound,
  z.ZodTypeDef,
  AddMediaTrackResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.AddTrackResponse$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddMediaTrackResponse$ {
  /** @deprecated use `AddMediaTrackResponse$inboundSchema` instead. */
  export const inboundSchema = AddMediaTrackResponse$inboundSchema;
  /** @deprecated use `AddMediaTrackResponse$outboundSchema` instead. */
  export const outboundSchema = AddMediaTrackResponse$outboundSchema;
  /** @deprecated use `AddMediaTrackResponse$Outbound` instead. */
  export type Outbound = AddMediaTrackResponse$Outbound;
}

export function addMediaTrackResponseToJSON(
  addMediaTrackResponse: AddMediaTrackResponse,
): string {
  return JSON.stringify(
    AddMediaTrackResponse$outboundSchema.parse(addMediaTrackResponse),
  );
}

export function addMediaTrackResponseFromJSON(
  jsonString: string,
): SafeParseResult<AddMediaTrackResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddMediaTrackResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddMediaTrackResponse' from JSON`,
  );
}
