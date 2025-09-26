import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type Input =
  | models.SubtitleInput
  | models.VideoInput
  | models.WatermarkInput
  | models.AudioInput;

/**
 * Language codes (BCP 47 compliant) used for text files.
 *
 * @remarks
 */
export const LanguageCode = {
  En: "en",
  It: "it",
  Pl: "pl",
  Es: "es",
  Fr: "fr",
  Ru: "ru",
  Nl: "nl",
} as const;
/**
 * Language codes (BCP 47 compliant) used for text files.
 *
 * @remarks
 */
export type LanguageCode = ClosedEnum<typeof LanguageCode>;

/**
 * Generates subtitle files for audio/video files.
 *
 * @remarks
 */
export type Subtitles = {
  /**
   * Name of the language for the subtitles.
   */
  languageName?: string | undefined;
  /**
   * Tag a video in "key" : "value" pairs for searchable metadata. Maximum 10 entries, 255 characters each.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * Language codes (BCP 47 compliant) used for text files.
   *
   * @remarks
   */
  languageCode?: LanguageCode | undefined;
};

/**
 * Determines the highest quality resolution available.
 *
 * @remarks
 */
export const MaxResolution = {
  TwoThousandOneHundredAndSixtyp: "2160p",
  OneThousandFourHundredAndFortyp: "1440p",
  OneThousandAndEightyp: "1080p",
  SevenHundredAndTwentyp: "720p",
  FourHundredAndEightyp: "480p",
  ThreeHundredAndSixtyp: "360p",
} as const;
/**
 * Determines the highest quality resolution available.
 *
 * @remarks
 */
export type MaxResolution = ClosedEnum<typeof MaxResolution>;

/**
 * Generates MP4 video up to 4K ("capped_4k"), m4a audio only ("audioOnly"), or both for offline viewing.
 *
 * @remarks
 */
export const DirectUploadVideoMediaMp4Support = {
  Capped4k: "capped_4k",
  AudioOnly: "audioOnly",
  AudioOnlyCapped4k: "audioOnly,capped_4k",
} as const;
/**
 * Generates MP4 video up to 4K ("capped_4k"), m4a audio only ("audioOnly"), or both for offline viewing.
 *
 * @remarks
 */
export type DirectUploadVideoMediaMp4Support = ClosedEnum<
  typeof DirectUploadVideoMediaMp4Support
>;

export type Summary = {
  /**
   * Enable or disable the summary feature for the media. Set to true to enable summary or false to disable.
   *
   * @remarks
   */
  generate?: boolean | undefined;
  /**
   * Specifies the desired word count for the generated summary.
   *
   * @remarks
   * - The value must be between **30** and **250** words.
   */
  summaryLength?: number | undefined;
};

export type DirectUploadVideoMediaModeration = {
  /**
   * Type of media content
   */
  type?: models.MediaType | undefined;
};

export type DirectUploadVideoMediaAccessRestrictions = {
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
 * Configuration settings for media upload.
 */
export type PushMediaSettings = {
  /**
   * Basic access policy for media content
   */
  accessPolicy: models.BasicAccessPolicy;
  /**
   * Start time indicates where encoding should begin within the video file, in seconds.
   */
  startTime?: number | undefined;
  /**
   * End time indicates where encoding should end within the video file, in seconds.
   */
  endTime?: number | undefined;
  inputs?:
    | Array<
      | models.SubtitleInput
      | models.VideoInput
      | models.WatermarkInput
      | models.AudioInput
    >
    | undefined;
  /**
   * Tag a video in "key" : "value" pairs for searchable metadata. Maximum 10 entries, 255 characters each.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * Generates subtitle files for audio/video files.
   *
   * @remarks
   */
  subtitles?: Subtitles | undefined;
  /**
   * Enhance the quality and volume of the audio track. This is available for pre-recorded content only.
   *
   * @remarks
   */
  optimizeAudio?: boolean | undefined;
  /**
   * Determines the highest quality resolution available.
   *
   * @remarks
   */
  maxResolution?: MaxResolution | undefined;
  /**
   * The sourceAccess parameter determines whether the original media file is accessible. Set to true to enable access or false to restrict it
   */
  sourceAccess?: boolean | undefined;
  /**
   * Generates MP4 video up to 4K ("capped_4k"), m4a audio only ("audioOnly"), or both for offline viewing.
   *
   * @remarks
   */
  mp4Support?: DirectUploadVideoMediaMp4Support | undefined;
  summary?: Summary | undefined;
  /**
   * Enable or disable the chapters feature for the media. Set to `true` to enable chapters or `false` to disable.
   *
   * @remarks
   */
  chapters?: boolean | undefined;
  /**
   * Enable or disable named entity extraction. Set to `true` to enable or `false` to disable.
   *
   * @remarks
   */
  namedEntities?: boolean | undefined;
  moderation?: DirectUploadVideoMediaModeration | undefined;
  accessRestrictions?: DirectUploadVideoMediaAccessRestrictions | undefined;
};

/**
 * Request body for direct upload
 */
export type DirectUploadVideoMediaRequest = {
  /**
   * Upload media directly from a device using the URL name or enter '*' to allow all.
   */
  corsOrigin: string;
  /**
   * Configuration settings for media upload.
   */
  pushMediaSettings?: PushMediaSettings | undefined;
};

/**
 * Direct upload created successfully
 */
export type DirectUploadVideoMediaResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: models.DirectUpload | undefined;
};

/** @internal */
export const Input$inboundSchema: z.ZodType<Input, z.ZodTypeDef, unknown> = z
  .union([
    models.SubtitleInput$inboundSchema,
    models.VideoInput$inboundSchema,
    models.WatermarkInput$inboundSchema,
    models.AudioInput$inboundSchema,
  ]);

/** @internal */
export type Input$Outbound =
  | models.SubtitleInput$Outbound
  | models.VideoInput$Outbound
  | models.WatermarkInput$Outbound
  | models.AudioInput$Outbound;

/** @internal */
export const Input$outboundSchema: z.ZodType<
  Input$Outbound,
  z.ZodTypeDef,
  Input
> = z.union([
  models.SubtitleInput$outboundSchema,
  models.VideoInput$outboundSchema,
  models.WatermarkInput$outboundSchema,
  models.AudioInput$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Input$ {
  /** @deprecated use `Input$inboundSchema` instead. */
  export const inboundSchema = Input$inboundSchema;
  /** @deprecated use `Input$outboundSchema` instead. */
  export const outboundSchema = Input$outboundSchema;
  /** @deprecated use `Input$Outbound` instead. */
  export type Outbound = Input$Outbound;
}

export function inputToJSON(input: Input): string {
  return JSON.stringify(Input$outboundSchema.parse(input));
}

export function inputFromJSON(
  jsonString: string,
): SafeParseResult<Input, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Input$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Input' from JSON`,
  );
}

/** @internal */
export const LanguageCode$inboundSchema: z.ZodNativeEnum<typeof LanguageCode> =
  z.nativeEnum(LanguageCode);

/** @internal */
export const LanguageCode$outboundSchema: z.ZodNativeEnum<typeof LanguageCode> =
  LanguageCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LanguageCode$ {
  /** @deprecated use `LanguageCode$inboundSchema` instead. */
  export const inboundSchema = LanguageCode$inboundSchema;
  /** @deprecated use `LanguageCode$outboundSchema` instead. */
  export const outboundSchema = LanguageCode$outboundSchema;
}

/** @internal */
export const Subtitles$inboundSchema: z.ZodType<
  Subtitles,
  z.ZodTypeDef,
  unknown
> = z.object({
  languageName: z.string().optional(),
  metadata: z.record(z.string()).optional(),
  languageCode: LanguageCode$inboundSchema.optional(),
});

/** @internal */
export type Subtitles$Outbound = {
  languageName?: string | undefined;
  metadata?: { [k: string]: string } | undefined;
  languageCode?: string | undefined;
};

/** @internal */
export const Subtitles$outboundSchema: z.ZodType<
  Subtitles$Outbound,
  z.ZodTypeDef,
  Subtitles
> = z.object({
  languageName: z.string().optional(),
  metadata: z.record(z.string()).optional(),
  languageCode: LanguageCode$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Subtitles$ {
  /** @deprecated use `Subtitles$inboundSchema` instead. */
  export const inboundSchema = Subtitles$inboundSchema;
  /** @deprecated use `Subtitles$outboundSchema` instead. */
  export const outboundSchema = Subtitles$outboundSchema;
  /** @deprecated use `Subtitles$Outbound` instead. */
  export type Outbound = Subtitles$Outbound;
}

export function subtitlesToJSON(subtitles: Subtitles): string {
  return JSON.stringify(Subtitles$outboundSchema.parse(subtitles));
}

export function subtitlesFromJSON(
  jsonString: string,
): SafeParseResult<Subtitles, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Subtitles$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Subtitles' from JSON`,
  );
}

/** @internal */
export const MaxResolution$inboundSchema: z.ZodNativeEnum<
  typeof MaxResolution
> = z.nativeEnum(MaxResolution);

/** @internal */
export const MaxResolution$outboundSchema: z.ZodNativeEnum<
  typeof MaxResolution
> = MaxResolution$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MaxResolution$ {
  /** @deprecated use `MaxResolution$inboundSchema` instead. */
  export const inboundSchema = MaxResolution$inboundSchema;
  /** @deprecated use `MaxResolution$outboundSchema` instead. */
  export const outboundSchema = MaxResolution$outboundSchema;
}

/** @internal */
export const DirectUploadVideoMediaMp4Support$inboundSchema: z.ZodNativeEnum<
  typeof DirectUploadVideoMediaMp4Support
> = z.nativeEnum(DirectUploadVideoMediaMp4Support);

/** @internal */
export const DirectUploadVideoMediaMp4Support$outboundSchema: z.ZodNativeEnum<
  typeof DirectUploadVideoMediaMp4Support
> = DirectUploadVideoMediaMp4Support$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DirectUploadVideoMediaMp4Support$ {
  /** @deprecated use `DirectUploadVideoMediaMp4Support$inboundSchema` instead. */
  export const inboundSchema = DirectUploadVideoMediaMp4Support$inboundSchema;
  /** @deprecated use `DirectUploadVideoMediaMp4Support$outboundSchema` instead. */
  export const outboundSchema = DirectUploadVideoMediaMp4Support$outboundSchema;
}

/** @internal */
export const Summary$inboundSchema: z.ZodType<Summary, z.ZodTypeDef, unknown> =
  z.object({
    generate: z.boolean().optional(),
    summaryLength: z.number().int().default(100),
  });

/** @internal */
export type Summary$Outbound = {
  generate?: boolean | undefined;
  summaryLength: number;
};

/** @internal */
export const Summary$outboundSchema: z.ZodType<
  Summary$Outbound,
  z.ZodTypeDef,
  Summary
> = z.object({
  generate: z.boolean().optional(),
  summaryLength: z.number().int().default(100),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Summary$ {
  /** @deprecated use `Summary$inboundSchema` instead. */
  export const inboundSchema = Summary$inboundSchema;
  /** @deprecated use `Summary$outboundSchema` instead. */
  export const outboundSchema = Summary$outboundSchema;
  /** @deprecated use `Summary$Outbound` instead. */
  export type Outbound = Summary$Outbound;
}

export function summaryToJSON(summary: Summary): string {
  return JSON.stringify(Summary$outboundSchema.parse(summary));
}

export function summaryFromJSON(
  jsonString: string,
): SafeParseResult<Summary, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Summary$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Summary' from JSON`,
  );
}

/** @internal */
export const DirectUploadVideoMediaModeration$inboundSchema: z.ZodType<
  DirectUploadVideoMediaModeration,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: models.MediaType$inboundSchema.optional(),
});

/** @internal */
export type DirectUploadVideoMediaModeration$Outbound = {
  type?: string | undefined;
};

/** @internal */
export const DirectUploadVideoMediaModeration$outboundSchema: z.ZodType<
  DirectUploadVideoMediaModeration$Outbound,
  z.ZodTypeDef,
  DirectUploadVideoMediaModeration
> = z.object({
  type: models.MediaType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DirectUploadVideoMediaModeration$ {
  /** @deprecated use `DirectUploadVideoMediaModeration$inboundSchema` instead. */
  export const inboundSchema = DirectUploadVideoMediaModeration$inboundSchema;
  /** @deprecated use `DirectUploadVideoMediaModeration$outboundSchema` instead. */
  export const outboundSchema = DirectUploadVideoMediaModeration$outboundSchema;
  /** @deprecated use `DirectUploadVideoMediaModeration$Outbound` instead. */
  export type Outbound = DirectUploadVideoMediaModeration$Outbound;
}

export function directUploadVideoMediaModerationToJSON(
  directUploadVideoMediaModeration: DirectUploadVideoMediaModeration,
): string {
  return JSON.stringify(
    DirectUploadVideoMediaModeration$outboundSchema.parse(
      directUploadVideoMediaModeration,
    ),
  );
}

export function directUploadVideoMediaModerationFromJSON(
  jsonString: string,
): SafeParseResult<DirectUploadVideoMediaModeration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DirectUploadVideoMediaModeration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DirectUploadVideoMediaModeration' from JSON`,
  );
}

/** @internal */
export const DirectUploadVideoMediaAccessRestrictions$inboundSchema: z.ZodType<
  DirectUploadVideoMediaAccessRestrictions,
  z.ZodTypeDef,
  unknown
> = z.object({
  domains: models.DomainRestrictions$inboundSchema.optional(),
  userAgents: models.UserAgentRestrictions$inboundSchema.optional(),
});

/** @internal */
export type DirectUploadVideoMediaAccessRestrictions$Outbound = {
  domains?: models.DomainRestrictions$Outbound | undefined;
  userAgents?: models.UserAgentRestrictions$Outbound | undefined;
};

/** @internal */
export const DirectUploadVideoMediaAccessRestrictions$outboundSchema: z.ZodType<
  DirectUploadVideoMediaAccessRestrictions$Outbound,
  z.ZodTypeDef,
  DirectUploadVideoMediaAccessRestrictions
> = z.object({
  domains: models.DomainRestrictions$outboundSchema.optional(),
  userAgents: models.UserAgentRestrictions$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DirectUploadVideoMediaAccessRestrictions$ {
  /** @deprecated use `DirectUploadVideoMediaAccessRestrictions$inboundSchema` instead. */
  export const inboundSchema =
    DirectUploadVideoMediaAccessRestrictions$inboundSchema;
  /** @deprecated use `DirectUploadVideoMediaAccessRestrictions$outboundSchema` instead. */
  export const outboundSchema =
    DirectUploadVideoMediaAccessRestrictions$outboundSchema;
  /** @deprecated use `DirectUploadVideoMediaAccessRestrictions$Outbound` instead. */
  export type Outbound = DirectUploadVideoMediaAccessRestrictions$Outbound;
}

export function directUploadVideoMediaAccessRestrictionsToJSON(
  directUploadVideoMediaAccessRestrictions:
    DirectUploadVideoMediaAccessRestrictions,
): string {
  return JSON.stringify(
    DirectUploadVideoMediaAccessRestrictions$outboundSchema.parse(
      directUploadVideoMediaAccessRestrictions,
    ),
  );
}

export function directUploadVideoMediaAccessRestrictionsFromJSON(
  jsonString: string,
): SafeParseResult<
  DirectUploadVideoMediaAccessRestrictions,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DirectUploadVideoMediaAccessRestrictions$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DirectUploadVideoMediaAccessRestrictions' from JSON`,
  );
}

/** @internal */
export const PushMediaSettings$inboundSchema: z.ZodType<
  PushMediaSettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessPolicy: models.BasicAccessPolicy$inboundSchema,
  startTime: z.number().optional(),
  endTime: z.number().optional(),
  inputs: z.array(
    z.union([
      models.SubtitleInput$inboundSchema,
      models.VideoInput$inboundSchema,
      models.WatermarkInput$inboundSchema,
      models.AudioInput$inboundSchema,
    ]),
  ).optional(),
  metadata: z.record(z.string()).optional(),
  subtitles: z.lazy(() => Subtitles$inboundSchema).optional(),
  optimizeAudio: z.boolean().default(true),
  maxResolution: MaxResolution$inboundSchema.default("1080p"),
  sourceAccess: z.boolean().optional(),
  mp4Support: DirectUploadVideoMediaMp4Support$inboundSchema.optional(),
  summary: z.lazy(() => Summary$inboundSchema).optional(),
  chapters: z.boolean().optional(),
  namedEntities: z.boolean().optional(),
  moderation: z.lazy(() => DirectUploadVideoMediaModeration$inboundSchema)
    .optional(),
  accessRestrictions: z.lazy(() =>
    DirectUploadVideoMediaAccessRestrictions$inboundSchema
  ).optional(),
});

/** @internal */
export type PushMediaSettings$Outbound = {
  accessPolicy: string;
  startTime?: number | undefined;
  endTime?: number | undefined;
  inputs?:
    | Array<
      | models.SubtitleInput$Outbound
      | models.VideoInput$Outbound
      | models.WatermarkInput$Outbound
      | models.AudioInput$Outbound
    >
    | undefined;
  metadata?: { [k: string]: string } | undefined;
  subtitles?: Subtitles$Outbound | undefined;
  optimizeAudio: boolean;
  maxResolution: string;
  sourceAccess?: boolean | undefined;
  mp4Support?: string | undefined;
  summary?: Summary$Outbound | undefined;
  chapters?: boolean | undefined;
  namedEntities?: boolean | undefined;
  moderation?: DirectUploadVideoMediaModeration$Outbound | undefined;
  accessRestrictions?:
    | DirectUploadVideoMediaAccessRestrictions$Outbound
    | undefined;
};

/** @internal */
export const PushMediaSettings$outboundSchema: z.ZodType<
  PushMediaSettings$Outbound,
  z.ZodTypeDef,
  PushMediaSettings
> = z.object({
  accessPolicy: models.BasicAccessPolicy$outboundSchema,
  startTime: z.number().optional(),
  endTime: z.number().optional(),
  inputs: z.array(
    z.union([
      models.SubtitleInput$outboundSchema,
      models.VideoInput$outboundSchema,
      models.WatermarkInput$outboundSchema,
      models.AudioInput$outboundSchema,
    ]),
  ).optional(),
  metadata: z.record(z.string()).optional(),
  subtitles: z.lazy(() => Subtitles$outboundSchema).optional(),
  optimizeAudio: z.boolean().default(true),
  maxResolution: MaxResolution$outboundSchema.default("1080p"),
  sourceAccess: z.boolean().optional(),
  mp4Support: DirectUploadVideoMediaMp4Support$outboundSchema.optional(),
  summary: z.lazy(() => Summary$outboundSchema).optional(),
  chapters: z.boolean().optional(),
  namedEntities: z.boolean().optional(),
  moderation: z.lazy(() => DirectUploadVideoMediaModeration$outboundSchema)
    .optional(),
  accessRestrictions: z.lazy(() =>
    DirectUploadVideoMediaAccessRestrictions$outboundSchema
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PushMediaSettings$ {
  /** @deprecated use `PushMediaSettings$inboundSchema` instead. */
  export const inboundSchema = PushMediaSettings$inboundSchema;
  /** @deprecated use `PushMediaSettings$outboundSchema` instead. */
  export const outboundSchema = PushMediaSettings$outboundSchema;
  /** @deprecated use `PushMediaSettings$Outbound` instead. */
  export type Outbound = PushMediaSettings$Outbound;
}

export function pushMediaSettingsToJSON(
  pushMediaSettings: PushMediaSettings,
): string {
  return JSON.stringify(
    PushMediaSettings$outboundSchema.parse(pushMediaSettings),
  );
}

export function pushMediaSettingsFromJSON(
  jsonString: string,
): SafeParseResult<PushMediaSettings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PushMediaSettings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PushMediaSettings' from JSON`,
  );
}

/** @internal */
export const DirectUploadVideoMediaRequest$inboundSchema: z.ZodType<
  DirectUploadVideoMediaRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  corsOrigin: z.string(),
  pushMediaSettings: z.lazy(() => PushMediaSettings$inboundSchema).optional(),
});

/** @internal */
export type DirectUploadVideoMediaRequest$Outbound = {
  corsOrigin: string;
  pushMediaSettings?: PushMediaSettings$Outbound | undefined;
};

/** @internal */
export const DirectUploadVideoMediaRequest$outboundSchema: z.ZodType<
  DirectUploadVideoMediaRequest$Outbound,
  z.ZodTypeDef,
  DirectUploadVideoMediaRequest
> = z.object({
  corsOrigin: z.string(),
  pushMediaSettings: z.lazy(() => PushMediaSettings$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DirectUploadVideoMediaRequest$ {
  /** @deprecated use `DirectUploadVideoMediaRequest$inboundSchema` instead. */
  export const inboundSchema = DirectUploadVideoMediaRequest$inboundSchema;
  /** @deprecated use `DirectUploadVideoMediaRequest$outboundSchema` instead. */
  export const outboundSchema = DirectUploadVideoMediaRequest$outboundSchema;
  /** @deprecated use `DirectUploadVideoMediaRequest$Outbound` instead. */
  export type Outbound = DirectUploadVideoMediaRequest$Outbound;
}

export function directUploadVideoMediaRequestToJSON(
  directUploadVideoMediaRequest: DirectUploadVideoMediaRequest,
): string {
  return JSON.stringify(
    DirectUploadVideoMediaRequest$outboundSchema.parse(
      directUploadVideoMediaRequest,
    ),
  );
}

export function directUploadVideoMediaRequestFromJSON(
  jsonString: string,
): SafeParseResult<DirectUploadVideoMediaRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DirectUploadVideoMediaRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DirectUploadVideoMediaRequest' from JSON`,
  );
}

/** @internal */
export const DirectUploadVideoMediaResponse$inboundSchema: z.ZodType<
  DirectUploadVideoMediaResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: models.DirectUpload$inboundSchema.optional(),
});

/** @internal */
export type DirectUploadVideoMediaResponse$Outbound = {
  success?: boolean | undefined;
  data?: models.DirectUpload$Outbound | undefined;
};

/** @internal */
export const DirectUploadVideoMediaResponse$outboundSchema: z.ZodType<
  DirectUploadVideoMediaResponse$Outbound,
  z.ZodTypeDef,
  DirectUploadVideoMediaResponse
> = z.object({
  success: z.boolean().optional(),
  data: models.DirectUpload$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DirectUploadVideoMediaResponse$ {
  /** @deprecated use `DirectUploadVideoMediaResponse$inboundSchema` instead. */
  export const inboundSchema = DirectUploadVideoMediaResponse$inboundSchema;
  /** @deprecated use `DirectUploadVideoMediaResponse$outboundSchema` instead. */
  export const outboundSchema = DirectUploadVideoMediaResponse$outboundSchema;
  /** @deprecated use `DirectUploadVideoMediaResponse$Outbound` instead. */
  export type Outbound = DirectUploadVideoMediaResponse$Outbound;
}

export function directUploadVideoMediaResponseToJSON(
  directUploadVideoMediaResponse: DirectUploadVideoMediaResponse,
): string {
  return JSON.stringify(
    DirectUploadVideoMediaResponse$outboundSchema.parse(
      directUploadVideoMediaResponse,
    ),
  );
}

export function directUploadVideoMediaResponseFromJSON(
  jsonString: string,
): SafeParseResult<DirectUploadVideoMediaResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DirectUploadVideoMediaResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DirectUploadVideoMediaResponse' from JSON`,
  );
}
