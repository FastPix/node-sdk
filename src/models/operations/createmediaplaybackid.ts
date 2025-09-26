import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type CreateMediaPlaybackIdAccessRestrictions = {
  /**
   * Restrictions based on the originating domain of a request
   */
  domains?: models.DomainRestrictions | undefined;
  /**
   * Restrictions based on the user agent
   */
  userAgents?: models.UserAgentRestrictions | undefined;
};

/**
 * The maximum resolution for the playback ID.
 */
export const Resolution = {
  FourHundredAndEightyp: "480p",
  SevenHundredAndTwentyp: "720p",
  OneThousandAndEightyp: "1080p",
  OneThousandFourHundredAndFortyp: "1440p",
  TwoThousandOneHundredAndSixtyp: "2160p",
} as const;
/**
 * The maximum resolution for the playback ID.
 */
export type Resolution = ClosedEnum<typeof Resolution>;

/**
 * Request body for creating playback id for an media
 */
export type CreateMediaPlaybackIdRequestBody = {
  /**
   * Access policy for media content
   */
  accessPolicy: models.AccessPolicy;
  accessRestrictions?: CreateMediaPlaybackIdAccessRestrictions | undefined;
  /**
   * DRM configuration ID (required if accessPolicy is 'drm')
   */
  drmConfigurationId?: string | undefined;
  /**
   * The maximum resolution for the playback ID.
   */
  resolution?: Resolution | undefined;
};

export type CreateMediaPlaybackIdRequest = {
  /**
   * When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  mediaId: string;
  /**
   * Request body for creating playback id for an media
   */
  requestBody?: CreateMediaPlaybackIdRequestBody | undefined;
};

/**
 * Displays the result of the request.
 */
export type CreateMediaPlaybackIdData = {
  /**
   * A collection of Playback ID objects utilized for crafting HLS playback URLs.
   */
  playbackIds?: Array<models.PlaybackId> | undefined;
};

/**
 * Playback id for an media
 */
export type CreateMediaPlaybackIdResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: CreateMediaPlaybackIdData | undefined;
};

/** @internal */
export const CreateMediaPlaybackIdAccessRestrictions$inboundSchema: z.ZodType<
  CreateMediaPlaybackIdAccessRestrictions,
  z.ZodTypeDef,
  unknown
> = z.object({
  domains: models.DomainRestrictions$inboundSchema.optional(),
  userAgents: models.UserAgentRestrictions$inboundSchema.optional(),
});

/** @internal */
export type CreateMediaPlaybackIdAccessRestrictions$Outbound = {
  domains?: models.DomainRestrictions$Outbound | undefined;
  userAgents?: models.UserAgentRestrictions$Outbound | undefined;
};

/** @internal */
export const CreateMediaPlaybackIdAccessRestrictions$outboundSchema: z.ZodType<
  CreateMediaPlaybackIdAccessRestrictions$Outbound,
  z.ZodTypeDef,
  CreateMediaPlaybackIdAccessRestrictions
> = z.object({
  domains: models.DomainRestrictions$outboundSchema.optional(),
  userAgents: models.UserAgentRestrictions$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaPlaybackIdAccessRestrictions$ {
  /** @deprecated use `CreateMediaPlaybackIdAccessRestrictions$inboundSchema` instead. */
  export const inboundSchema =
    CreateMediaPlaybackIdAccessRestrictions$inboundSchema;
  /** @deprecated use `CreateMediaPlaybackIdAccessRestrictions$outboundSchema` instead. */
  export const outboundSchema =
    CreateMediaPlaybackIdAccessRestrictions$outboundSchema;
  /** @deprecated use `CreateMediaPlaybackIdAccessRestrictions$Outbound` instead. */
  export type Outbound = CreateMediaPlaybackIdAccessRestrictions$Outbound;
}

export function createMediaPlaybackIdAccessRestrictionsToJSON(
  createMediaPlaybackIdAccessRestrictions:
    CreateMediaPlaybackIdAccessRestrictions,
): string {
  return JSON.stringify(
    CreateMediaPlaybackIdAccessRestrictions$outboundSchema.parse(
      createMediaPlaybackIdAccessRestrictions,
    ),
  );
}

export function createMediaPlaybackIdAccessRestrictionsFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateMediaPlaybackIdAccessRestrictions,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateMediaPlaybackIdAccessRestrictions$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateMediaPlaybackIdAccessRestrictions' from JSON`,
  );
}

/** @internal */
export const Resolution$inboundSchema: z.ZodNativeEnum<typeof Resolution> = z
  .nativeEnum(Resolution);

/** @internal */
export const Resolution$outboundSchema: z.ZodNativeEnum<typeof Resolution> =
  Resolution$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Resolution$ {
  /** @deprecated use `Resolution$inboundSchema` instead. */
  export const inboundSchema = Resolution$inboundSchema;
  /** @deprecated use `Resolution$outboundSchema` instead. */
  export const outboundSchema = Resolution$outboundSchema;
}

/** @internal */
export const CreateMediaPlaybackIdRequestBody$inboundSchema: z.ZodType<
  CreateMediaPlaybackIdRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessPolicy: models.AccessPolicy$inboundSchema,
  accessRestrictions: z.lazy(() =>
    CreateMediaPlaybackIdAccessRestrictions$inboundSchema
  ).optional(),
  drmConfigurationId: z.string().optional(),
  resolution: Resolution$inboundSchema.optional(),
});

/** @internal */
export type CreateMediaPlaybackIdRequestBody$Outbound = {
  accessPolicy: string;
  accessRestrictions?:
    | CreateMediaPlaybackIdAccessRestrictions$Outbound
    | undefined;
  drmConfigurationId?: string | undefined;
  resolution?: string | undefined;
};

/** @internal */
export const CreateMediaPlaybackIdRequestBody$outboundSchema: z.ZodType<
  CreateMediaPlaybackIdRequestBody$Outbound,
  z.ZodTypeDef,
  CreateMediaPlaybackIdRequestBody
> = z.object({
  accessPolicy: models.AccessPolicy$outboundSchema,
  accessRestrictions: z.lazy(() =>
    CreateMediaPlaybackIdAccessRestrictions$outboundSchema
  ).optional(),
  drmConfigurationId: z.string().optional(),
  resolution: Resolution$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaPlaybackIdRequestBody$ {
  /** @deprecated use `CreateMediaPlaybackIdRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateMediaPlaybackIdRequestBody$inboundSchema;
  /** @deprecated use `CreateMediaPlaybackIdRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateMediaPlaybackIdRequestBody$outboundSchema;
  /** @deprecated use `CreateMediaPlaybackIdRequestBody$Outbound` instead. */
  export type Outbound = CreateMediaPlaybackIdRequestBody$Outbound;
}

export function createMediaPlaybackIdRequestBodyToJSON(
  createMediaPlaybackIdRequestBody: CreateMediaPlaybackIdRequestBody,
): string {
  return JSON.stringify(
    CreateMediaPlaybackIdRequestBody$outboundSchema.parse(
      createMediaPlaybackIdRequestBody,
    ),
  );
}

export function createMediaPlaybackIdRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateMediaPlaybackIdRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMediaPlaybackIdRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMediaPlaybackIdRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateMediaPlaybackIdRequest$inboundSchema: z.ZodType<
  CreateMediaPlaybackIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string(),
  RequestBody: z.lazy(() => CreateMediaPlaybackIdRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateMediaPlaybackIdRequest$Outbound = {
  mediaId: string;
  RequestBody?: CreateMediaPlaybackIdRequestBody$Outbound | undefined;
};

/** @internal */
export const CreateMediaPlaybackIdRequest$outboundSchema: z.ZodType<
  CreateMediaPlaybackIdRequest$Outbound,
  z.ZodTypeDef,
  CreateMediaPlaybackIdRequest
> = z.object({
  mediaId: z.string(),
  requestBody: z.lazy(() => CreateMediaPlaybackIdRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaPlaybackIdRequest$ {
  /** @deprecated use `CreateMediaPlaybackIdRequest$inboundSchema` instead. */
  export const inboundSchema = CreateMediaPlaybackIdRequest$inboundSchema;
  /** @deprecated use `CreateMediaPlaybackIdRequest$outboundSchema` instead. */
  export const outboundSchema = CreateMediaPlaybackIdRequest$outboundSchema;
  /** @deprecated use `CreateMediaPlaybackIdRequest$Outbound` instead. */
  export type Outbound = CreateMediaPlaybackIdRequest$Outbound;
}

export function createMediaPlaybackIdRequestToJSON(
  createMediaPlaybackIdRequest: CreateMediaPlaybackIdRequest,
): string {
  return JSON.stringify(
    CreateMediaPlaybackIdRequest$outboundSchema.parse(
      createMediaPlaybackIdRequest,
    ),
  );
}

export function createMediaPlaybackIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateMediaPlaybackIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMediaPlaybackIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMediaPlaybackIdRequest' from JSON`,
  );
}

/** @internal */
export const CreateMediaPlaybackIdData$inboundSchema: z.ZodType<
  CreateMediaPlaybackIdData,
  z.ZodTypeDef,
  unknown
> = z.object({
  playbackIds: z.array(models.PlaybackId$inboundSchema).optional(),
});

/** @internal */
export type CreateMediaPlaybackIdData$Outbound = {
  playbackIds?: Array<models.PlaybackId$Outbound> | undefined;
};

/** @internal */
export const CreateMediaPlaybackIdData$outboundSchema: z.ZodType<
  CreateMediaPlaybackIdData$Outbound,
  z.ZodTypeDef,
  CreateMediaPlaybackIdData
> = z.object({
  playbackIds: z.array(models.PlaybackId$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaPlaybackIdData$ {
  /** @deprecated use `CreateMediaPlaybackIdData$inboundSchema` instead. */
  export const inboundSchema = CreateMediaPlaybackIdData$inboundSchema;
  /** @deprecated use `CreateMediaPlaybackIdData$outboundSchema` instead. */
  export const outboundSchema = CreateMediaPlaybackIdData$outboundSchema;
  /** @deprecated use `CreateMediaPlaybackIdData$Outbound` instead. */
  export type Outbound = CreateMediaPlaybackIdData$Outbound;
}

export function createMediaPlaybackIdDataToJSON(
  createMediaPlaybackIdData: CreateMediaPlaybackIdData,
): string {
  return JSON.stringify(
    CreateMediaPlaybackIdData$outboundSchema.parse(createMediaPlaybackIdData),
  );
}

export function createMediaPlaybackIdDataFromJSON(
  jsonString: string,
): SafeParseResult<CreateMediaPlaybackIdData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMediaPlaybackIdData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMediaPlaybackIdData' from JSON`,
  );
}

/** @internal */
export const CreateMediaPlaybackIdResponse$inboundSchema: z.ZodType<
  CreateMediaPlaybackIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => CreateMediaPlaybackIdData$inboundSchema).optional(),
});

/** @internal */
export type CreateMediaPlaybackIdResponse$Outbound = {
  success?: boolean | undefined;
  data?: CreateMediaPlaybackIdData$Outbound | undefined;
};

/** @internal */
export const CreateMediaPlaybackIdResponse$outboundSchema: z.ZodType<
  CreateMediaPlaybackIdResponse$Outbound,
  z.ZodTypeDef,
  CreateMediaPlaybackIdResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => CreateMediaPlaybackIdData$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaPlaybackIdResponse$ {
  /** @deprecated use `CreateMediaPlaybackIdResponse$inboundSchema` instead. */
  export const inboundSchema = CreateMediaPlaybackIdResponse$inboundSchema;
  /** @deprecated use `CreateMediaPlaybackIdResponse$outboundSchema` instead. */
  export const outboundSchema = CreateMediaPlaybackIdResponse$outboundSchema;
  /** @deprecated use `CreateMediaPlaybackIdResponse$Outbound` instead. */
  export type Outbound = CreateMediaPlaybackIdResponse$Outbound;
}

export function createMediaPlaybackIdResponseToJSON(
  createMediaPlaybackIdResponse: CreateMediaPlaybackIdResponse,
): string {
  return JSON.stringify(
    CreateMediaPlaybackIdResponse$outboundSchema.parse(
      createMediaPlaybackIdResponse,
    ),
  );
}

export function createMediaPlaybackIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateMediaPlaybackIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMediaPlaybackIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMediaPlaybackIdResponse' from JSON`,
  );
}
