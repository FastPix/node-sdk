import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

/**
 * Determines the type of MP4 support for the media.   - **none**: Disables MP4 support.   - **capped_4k**: Enables MP4 downloads with resolutions up to 4K.   - **audioOnly**: Provides an MP4 stream containing only the audio.   - **audioOnly,capped_4k**: Enables both MP4 video downloads (up to 4K) and an audio-only stream.
 */
export const UpdatedMp4SupportMp4Support = {
  None: "none",
  Capped4k: "capped_4k",
  AudioOnly: "audioOnly",
  AudioOnlyCapped4k: "audioOnly,capped_4k",
} as const;
/**
 * Determines the type of MP4 support for the media.   - **none**: Disables MP4 support.   - **capped_4k**: Enables MP4 downloads with resolutions up to 4K.   - **audioOnly**: Provides an MP4 stream containing only the audio.   - **audioOnly,capped_4k**: Enables both MP4 video downloads (up to 4K) and an audio-only stream.
 */
export type UpdatedMp4SupportMp4Support = ClosedEnum<
  typeof UpdatedMp4SupportMp4Support
>;

export type UpdatedMp4SupportRequestBody = {
  /**
   * Determines the type of MP4 support for the media.   - **none**: Disables MP4 support.   - **capped_4k**: Enables MP4 downloads with resolutions up to 4K.   - **audioOnly**: Provides an MP4 stream containing only the audio.   - **audioOnly,capped_4k**: Enables both MP4 video downloads (up to 4K) and an audio-only stream.
   */
  mp4Support?: UpdatedMp4SupportMp4Support | undefined;
};

export type UpdatedMp4SupportRequest = {
  /**
   * When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   *
   * @remarks
   */
  mediaId: string;
  requestBody: UpdatedMp4SupportRequestBody;
};

/**
 * Media details updated successfully
 */
export type UpdatedMp4SupportResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  data?: models.Media | undefined;
};

/** @internal */
export const UpdatedMp4SupportMp4Support$inboundSchema: z.ZodNativeEnum<
  typeof UpdatedMp4SupportMp4Support
> = z.nativeEnum(UpdatedMp4SupportMp4Support);

/** @internal */
export const UpdatedMp4SupportMp4Support$outboundSchema: z.ZodNativeEnum<
  typeof UpdatedMp4SupportMp4Support
> = UpdatedMp4SupportMp4Support$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatedMp4SupportMp4Support$ {
  /** @deprecated use `UpdatedMp4SupportMp4Support$inboundSchema` instead. */
  export const inboundSchema = UpdatedMp4SupportMp4Support$inboundSchema;
  /** @deprecated use `UpdatedMp4SupportMp4Support$outboundSchema` instead. */
  export const outboundSchema = UpdatedMp4SupportMp4Support$outboundSchema;
}

/** @internal */
export const UpdatedMp4SupportRequestBody$inboundSchema: z.ZodType<
  UpdatedMp4SupportRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  mp4Support: UpdatedMp4SupportMp4Support$inboundSchema.optional(),
});

/** @internal */
export type UpdatedMp4SupportRequestBody$Outbound = {
  mp4Support?: string | undefined;
};

/** @internal */
export const UpdatedMp4SupportRequestBody$outboundSchema: z.ZodType<
  UpdatedMp4SupportRequestBody$Outbound,
  z.ZodTypeDef,
  UpdatedMp4SupportRequestBody
> = z.object({
  mp4Support: UpdatedMp4SupportMp4Support$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatedMp4SupportRequestBody$ {
  /** @deprecated use `UpdatedMp4SupportRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdatedMp4SupportRequestBody$inboundSchema;
  /** @deprecated use `UpdatedMp4SupportRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdatedMp4SupportRequestBody$outboundSchema;
  /** @deprecated use `UpdatedMp4SupportRequestBody$Outbound` instead. */
  export type Outbound = UpdatedMp4SupportRequestBody$Outbound;
}

export function updatedMp4SupportRequestBodyToJSON(
  updatedMp4SupportRequestBody: UpdatedMp4SupportRequestBody,
): string {
  return JSON.stringify(
    UpdatedMp4SupportRequestBody$outboundSchema.parse(
      updatedMp4SupportRequestBody,
    ),
  );
}

export function updatedMp4SupportRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdatedMp4SupportRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatedMp4SupportRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatedMp4SupportRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdatedMp4SupportRequest$inboundSchema: z.ZodType<
  UpdatedMp4SupportRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  RequestBody: z.lazy(() => UpdatedMp4SupportRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdatedMp4SupportRequest$Outbound = {
  mediaId: string;
  RequestBody: UpdatedMp4SupportRequestBody$Outbound;
};

/** @internal */
export const UpdatedMp4SupportRequest$outboundSchema: z.ZodType<
  UpdatedMp4SupportRequest$Outbound,
  z.ZodTypeDef,
  UpdatedMp4SupportRequest
> = z.object({
  mediaId: z.string(),
  requestBody: z.lazy(() => UpdatedMp4SupportRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatedMp4SupportRequest$ {
  /** @deprecated use `UpdatedMp4SupportRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatedMp4SupportRequest$inboundSchema;
  /** @deprecated use `UpdatedMp4SupportRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatedMp4SupportRequest$outboundSchema;
  /** @deprecated use `UpdatedMp4SupportRequest$Outbound` instead. */
  export type Outbound = UpdatedMp4SupportRequest$Outbound;
}

export function updatedMp4SupportRequestToJSON(
  updatedMp4SupportRequest: UpdatedMp4SupportRequest,
): string {
  return JSON.stringify(
    UpdatedMp4SupportRequest$outboundSchema.parse(updatedMp4SupportRequest),
  );
}

export function updatedMp4SupportRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdatedMp4SupportRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatedMp4SupportRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatedMp4SupportRequest' from JSON`,
  );
}

/** @internal */
export const UpdatedMp4SupportResponse$inboundSchema: z.ZodType<
  UpdatedMp4SupportResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.Media$inboundSchema.optional(),
});

/** @internal */
export type UpdatedMp4SupportResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.Media$Outbound | undefined;
};

/** @internal */
export const UpdatedMp4SupportResponse$outboundSchema: z.ZodType<
  UpdatedMp4SupportResponse$Outbound,
  z.ZodTypeDef,
  UpdatedMp4SupportResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.Media$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatedMp4SupportResponse$ {
  /** @deprecated use `UpdatedMp4SupportResponse$inboundSchema` instead. */
  export const inboundSchema = UpdatedMp4SupportResponse$inboundSchema;
  /** @deprecated use `UpdatedMp4SupportResponse$outboundSchema` instead. */
  export const outboundSchema = UpdatedMp4SupportResponse$outboundSchema;
  /** @deprecated use `UpdatedMp4SupportResponse$Outbound` instead. */
  export type Outbound = UpdatedMp4SupportResponse$Outbound;
}

export function updatedMp4SupportResponseToJSON(
  updatedMp4SupportResponse: UpdatedMp4SupportResponse,
): string {
  return JSON.stringify(
    UpdatedMp4SupportResponse$outboundSchema.parse(updatedMp4SupportResponse),
  );
}

export function updatedMp4SupportResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdatedMp4SupportResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatedMp4SupportResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatedMp4SupportResponse' from JSON`,
  );
}
