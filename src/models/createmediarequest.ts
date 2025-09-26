import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  AudioInput,
  AudioInput$inboundSchema,
  AudioInput$Outbound,
  AudioInput$outboundSchema,
} from "./audioinput.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  MediaType,
  MediaType$inboundSchema,
  MediaType$outboundSchema,
} from "./mediatype.js";
import {
  PolicyAction,
  PolicyAction$inboundSchema,
  PolicyAction$outboundSchema,
} from "./policyaction.js";
import {
  SubtitleInput,
  SubtitleInput$inboundSchema,
  SubtitleInput$Outbound,
  SubtitleInput$outboundSchema,
} from "./subtitleinput.js";
import {
  VideoInput,
  VideoInput$inboundSchema,
  VideoInput$Outbound,
  VideoInput$outboundSchema,
} from "./videoinput.js";
import {
  WatermarkInput,
  WatermarkInput$inboundSchema,
  WatermarkInput$Outbound,
  WatermarkInput$outboundSchema,
} from "./watermarkinput.js";

export type Input = SubtitleInput | VideoInput | WatermarkInput | AudioInput;

/**
 * Language codes are concise, standardized symbols that denote languages, utilizing either two or three characters for identification. The language code must be compliant with the BCP 47 standard to ensure compatibility. (for text only).
 *
 * @remarks
 */
export const CreateMediaRequestLanguageCode = {
  En: "en",
  It: "it",
  Pl: "pl",
  Es: "es",
  Fr: "fr",
  Ru: "ru",
  Nl: "nl",
} as const;
/**
 * Language codes are concise, standardized symbols that denote languages, utilizing either two or three characters for identification. The language code must be compliant with the BCP 47 standard to ensure compatibility. (for text only).
 *
 * @remarks
 */
export type CreateMediaRequestLanguageCode = ClosedEnum<
  typeof CreateMediaRequestLanguageCode
>;

/**
 * Generates subtitle files for audio/video files.
 *
 * @remarks
 */
export type Subtitles = {
  /**
   * Name of the language in which the subtitles will be generated.
   *
   * @remarks
   */
  languageName?: string | undefined;
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key" : "value" pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * Language codes are concise, standardized symbols that denote languages, utilizing either two or three characters for identification. The language code must be compliant with the BCP 47 standard to ensure compatibility. (for text only).
   *
   * @remarks
   */
  languageCode?: CreateMediaRequestLanguageCode | undefined;
};

/**
 * Determines whether access to the streamed content is kept private or available to all.
 *
 * @remarks
 */
export const CreateMediaRequestAccessPolicy = {
  Public: "public",
  Private: "private",
  Drm: "drm",
} as const;
/**
 * Determines whether access to the streamed content is kept private or available to all.
 *
 * @remarks
 */
export type CreateMediaRequestAccessPolicy = ClosedEnum<
  typeof CreateMediaRequestAccessPolicy
>;

/**
 * "capped_4k": Generates an mp4 video file up to 4k resolution "audioOnly": Generates an m4a audio file of the media file "audioOnly,capped_4k": Generates both video and audio media files for offline viewing
 *
 * @remarks
 */
export const CreateMediaRequestMp4Support = {
  Capped4k: "capped_4k",
  AudioOnly: "audioOnly",
  AudioOnlyCapped4k: "audioOnly,capped_4k",
} as const;
/**
 * "capped_4k": Generates an mp4 video file up to 4k resolution "audioOnly": Generates an m4a audio file of the media file "audioOnly,capped_4k": Generates both video and audio media files for offline viewing
 *
 * @remarks
 */
export type CreateMediaRequestMp4Support = ClosedEnum<
  typeof CreateMediaRequestMp4Support
>;

/**
 * The maximum resolution tier determines the highest quality your media will be available in.
 *
 * @remarks
 */
export const CreateMediaRequestMaxResolution = {
  TwoThousandOneHundredAndSixtyp: "2160p",
  OneThousandFourHundredAndFortyp: "1440p",
  OneThousandAndEightyp: "1080p",
  SevenHundredAndTwentyp: "720p",
  FourHundredAndEightyp: "480p",
  ThreeHundredAndSixtyp: "360p",
} as const;
/**
 * The maximum resolution tier determines the highest quality your media will be available in.
 *
 * @remarks
 */
export type CreateMediaRequestMaxResolution = ClosedEnum<
  typeof CreateMediaRequestMaxResolution
>;

export type Summary = {
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

export type Moderation = {
  /**
   * Type of media content
   */
  type: MediaType;
};

export type CreateMediaRequestDomains = {
  /**
   * Policy action type
   */
  defaultPolicy?: PolicyAction | undefined;
  /**
   * A list of domain names or patterns that are explicitly allowed access.
   *
   * @remarks
   * This list is only effective when the `defaultPolicy` is set to `deny`.
   */
  allow?: Array<string> | undefined;
  /**
   * A list of domain names or patterns that are explicitly denied access.
   *
   * @remarks
   * This list is only effective when the `defaultPolicy` is set to `allow`.
   */
  deny?: Array<string> | undefined;
};

export type CreateMediaRequestUserAgents = {
  /**
   * Policy action type
   */
  defaultPolicy?: PolicyAction | undefined;
  /**
   * A list of user agents (identified by string names or patterns) that are explicitly allowed access.
   *
   * @remarks
   * This list is only effective when the `defaultPolicy` is set to `deny`.
   */
  allow?: Array<string> | undefined;
  /**
   * A list of user agents (identified by string names or patterns) that are explicitly denied access.
   *
   * @remarks
   * This list is only effective when the `defaultPolicy` is set to `allow`.
   */
  deny?: Array<string> | undefined;
};

export type CreateMediaRequestAccessRestrictions = {
  domains?: CreateMediaRequestDomains | undefined;
  userAgents?: CreateMediaRequestUserAgents | undefined;
};

export type CreateMediaRequest = {
  inputs: Array<SubtitleInput | VideoInput | WatermarkInput | AudioInput>;
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key" : "value" pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * Generates subtitle files for audio/video files.
   *
   * @remarks
   */
  subtitles?: Subtitles | undefined;
  /**
   * Determines whether access to the streamed content is kept private or available to all.
   *
   * @remarks
   */
  accessPolicy: CreateMediaRequestAccessPolicy;
  /**
   * "capped_4k": Generates an mp4 video file up to 4k resolution "audioOnly": Generates an m4a audio file of the media file "audioOnly,capped_4k": Generates both video and audio media files for offline viewing
   *
   * @remarks
   */
  mp4Support?: CreateMediaRequestMp4Support | undefined;
  /**
   * The sourceAccess parameter determines whether the original media file is accessible. Set to true to enable access or false to restrict it
   */
  sourceAccess?: boolean | undefined;
  /**
   * normalize volume of the audio track. This is available for pre-recorded content only.
   *
   * @remarks
   */
  optimizeAudio?: boolean | undefined;
  /**
   * The maximum resolution tier determines the highest quality your media will be available in.
   *
   * @remarks
   */
  maxResolution?: CreateMediaRequestMaxResolution | undefined;
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
  moderation?: Moderation | undefined;
  accessRestrictions?: CreateMediaRequestAccessRestrictions | undefined;
};

/** @internal */
export const Input$inboundSchema: z.ZodType<Input, z.ZodTypeDef, unknown> = z
  .union([
    SubtitleInput$inboundSchema,
    VideoInput$inboundSchema,
    WatermarkInput$inboundSchema,
    AudioInput$inboundSchema,
  ]);

/** @internal */
export type Input$Outbound =
  | SubtitleInput$Outbound
  | VideoInput$Outbound
  | WatermarkInput$Outbound
  | AudioInput$Outbound;

/** @internal */
export const Input$outboundSchema: z.ZodType<
  Input$Outbound,
  z.ZodTypeDef,
  Input
> = z.union([
  SubtitleInput$outboundSchema,
  VideoInput$outboundSchema,
  WatermarkInput$outboundSchema,
  AudioInput$outboundSchema,
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
export const CreateMediaRequestLanguageCode$inboundSchema: z.ZodNativeEnum<
  typeof CreateMediaRequestLanguageCode
> = z.nativeEnum(CreateMediaRequestLanguageCode);

/** @internal */
export const CreateMediaRequestLanguageCode$outboundSchema: z.ZodNativeEnum<
  typeof CreateMediaRequestLanguageCode
> = CreateMediaRequestLanguageCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaRequestLanguageCode$ {
  /** @deprecated use `CreateMediaRequestLanguageCode$inboundSchema` instead. */
  export const inboundSchema = CreateMediaRequestLanguageCode$inboundSchema;
  /** @deprecated use `CreateMediaRequestLanguageCode$outboundSchema` instead. */
  export const outboundSchema = CreateMediaRequestLanguageCode$outboundSchema;
}

/** @internal */
export const Subtitles$inboundSchema: z.ZodType<
  Subtitles,
  z.ZodTypeDef,
  unknown
> = z.object({
  languageName: z.string().optional(),
  metadata: z.record(z.string()).optional(),
  languageCode: CreateMediaRequestLanguageCode$inboundSchema.optional(),
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
  languageCode: CreateMediaRequestLanguageCode$outboundSchema.optional(),
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
export const CreateMediaRequestAccessPolicy$inboundSchema: z.ZodNativeEnum<
  typeof CreateMediaRequestAccessPolicy
> = z.nativeEnum(CreateMediaRequestAccessPolicy);

/** @internal */
export const CreateMediaRequestAccessPolicy$outboundSchema: z.ZodNativeEnum<
  typeof CreateMediaRequestAccessPolicy
> = CreateMediaRequestAccessPolicy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaRequestAccessPolicy$ {
  /** @deprecated use `CreateMediaRequestAccessPolicy$inboundSchema` instead. */
  export const inboundSchema = CreateMediaRequestAccessPolicy$inboundSchema;
  /** @deprecated use `CreateMediaRequestAccessPolicy$outboundSchema` instead. */
  export const outboundSchema = CreateMediaRequestAccessPolicy$outboundSchema;
}

/** @internal */
export const CreateMediaRequestMp4Support$inboundSchema: z.ZodNativeEnum<
  typeof CreateMediaRequestMp4Support
> = z.nativeEnum(CreateMediaRequestMp4Support);

/** @internal */
export const CreateMediaRequestMp4Support$outboundSchema: z.ZodNativeEnum<
  typeof CreateMediaRequestMp4Support
> = CreateMediaRequestMp4Support$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaRequestMp4Support$ {
  /** @deprecated use `CreateMediaRequestMp4Support$inboundSchema` instead. */
  export const inboundSchema = CreateMediaRequestMp4Support$inboundSchema;
  /** @deprecated use `CreateMediaRequestMp4Support$outboundSchema` instead. */
  export const outboundSchema = CreateMediaRequestMp4Support$outboundSchema;
}

/** @internal */
export const CreateMediaRequestMaxResolution$inboundSchema: z.ZodNativeEnum<
  typeof CreateMediaRequestMaxResolution
> = z.nativeEnum(CreateMediaRequestMaxResolution);

/** @internal */
export const CreateMediaRequestMaxResolution$outboundSchema: z.ZodNativeEnum<
  typeof CreateMediaRequestMaxResolution
> = CreateMediaRequestMaxResolution$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaRequestMaxResolution$ {
  /** @deprecated use `CreateMediaRequestMaxResolution$inboundSchema` instead. */
  export const inboundSchema = CreateMediaRequestMaxResolution$inboundSchema;
  /** @deprecated use `CreateMediaRequestMaxResolution$outboundSchema` instead. */
  export const outboundSchema = CreateMediaRequestMaxResolution$outboundSchema;
}

/** @internal */
export const Summary$inboundSchema: z.ZodType<Summary, z.ZodTypeDef, unknown> =
  z.object({
    generate: z.boolean(),
    summaryLength: z.number().int().default(100),
  });

/** @internal */
export type Summary$Outbound = {
  generate: boolean;
  summaryLength: number;
};

/** @internal */
export const Summary$outboundSchema: z.ZodType<
  Summary$Outbound,
  z.ZodTypeDef,
  Summary
> = z.object({
  generate: z.boolean(),
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
export const Moderation$inboundSchema: z.ZodType<
  Moderation,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: MediaType$inboundSchema,
});

/** @internal */
export type Moderation$Outbound = {
  type: string;
};

/** @internal */
export const Moderation$outboundSchema: z.ZodType<
  Moderation$Outbound,
  z.ZodTypeDef,
  Moderation
> = z.object({
  type: MediaType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Moderation$ {
  /** @deprecated use `Moderation$inboundSchema` instead. */
  export const inboundSchema = Moderation$inboundSchema;
  /** @deprecated use `Moderation$outboundSchema` instead. */
  export const outboundSchema = Moderation$outboundSchema;
  /** @deprecated use `Moderation$Outbound` instead. */
  export type Outbound = Moderation$Outbound;
}

export function moderationToJSON(moderation: Moderation): string {
  return JSON.stringify(Moderation$outboundSchema.parse(moderation));
}

export function moderationFromJSON(
  jsonString: string,
): SafeParseResult<Moderation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Moderation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Moderation' from JSON`,
  );
}

/** @internal */
export const CreateMediaRequestDomains$inboundSchema: z.ZodType<
  CreateMediaRequestDomains,
  z.ZodTypeDef,
  unknown
> = z.object({
  defaultPolicy: PolicyAction$inboundSchema.optional(),
  allow: z.array(z.string()).optional(),
  deny: z.array(z.string()).optional(),
});

/** @internal */
export type CreateMediaRequestDomains$Outbound = {
  defaultPolicy?: string | undefined;
  allow?: Array<string> | undefined;
  deny?: Array<string> | undefined;
};

/** @internal */
export const CreateMediaRequestDomains$outboundSchema: z.ZodType<
  CreateMediaRequestDomains$Outbound,
  z.ZodTypeDef,
  CreateMediaRequestDomains
> = z.object({
  defaultPolicy: PolicyAction$outboundSchema.optional(),
  allow: z.array(z.string()).optional(),
  deny: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaRequestDomains$ {
  /** @deprecated use `CreateMediaRequestDomains$inboundSchema` instead. */
  export const inboundSchema = CreateMediaRequestDomains$inboundSchema;
  /** @deprecated use `CreateMediaRequestDomains$outboundSchema` instead. */
  export const outboundSchema = CreateMediaRequestDomains$outboundSchema;
  /** @deprecated use `CreateMediaRequestDomains$Outbound` instead. */
  export type Outbound = CreateMediaRequestDomains$Outbound;
}

export function createMediaRequestDomainsToJSON(
  createMediaRequestDomains: CreateMediaRequestDomains,
): string {
  return JSON.stringify(
    CreateMediaRequestDomains$outboundSchema.parse(createMediaRequestDomains),
  );
}

export function createMediaRequestDomainsFromJSON(
  jsonString: string,
): SafeParseResult<CreateMediaRequestDomains, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMediaRequestDomains$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMediaRequestDomains' from JSON`,
  );
}

/** @internal */
export const CreateMediaRequestUserAgents$inboundSchema: z.ZodType<
  CreateMediaRequestUserAgents,
  z.ZodTypeDef,
  unknown
> = z.object({
  defaultPolicy: PolicyAction$inboundSchema.optional(),
  allow: z.array(z.string()).optional(),
  deny: z.array(z.string()).optional(),
});

/** @internal */
export type CreateMediaRequestUserAgents$Outbound = {
  defaultPolicy?: string | undefined;
  allow?: Array<string> | undefined;
  deny?: Array<string> | undefined;
};

/** @internal */
export const CreateMediaRequestUserAgents$outboundSchema: z.ZodType<
  CreateMediaRequestUserAgents$Outbound,
  z.ZodTypeDef,
  CreateMediaRequestUserAgents
> = z.object({
  defaultPolicy: PolicyAction$outboundSchema.optional(),
  allow: z.array(z.string()).optional(),
  deny: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaRequestUserAgents$ {
  /** @deprecated use `CreateMediaRequestUserAgents$inboundSchema` instead. */
  export const inboundSchema = CreateMediaRequestUserAgents$inboundSchema;
  /** @deprecated use `CreateMediaRequestUserAgents$outboundSchema` instead. */
  export const outboundSchema = CreateMediaRequestUserAgents$outboundSchema;
  /** @deprecated use `CreateMediaRequestUserAgents$Outbound` instead. */
  export type Outbound = CreateMediaRequestUserAgents$Outbound;
}

export function createMediaRequestUserAgentsToJSON(
  createMediaRequestUserAgents: CreateMediaRequestUserAgents,
): string {
  return JSON.stringify(
    CreateMediaRequestUserAgents$outboundSchema.parse(
      createMediaRequestUserAgents,
    ),
  );
}

export function createMediaRequestUserAgentsFromJSON(
  jsonString: string,
): SafeParseResult<CreateMediaRequestUserAgents, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMediaRequestUserAgents$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMediaRequestUserAgents' from JSON`,
  );
}

/** @internal */
export const CreateMediaRequestAccessRestrictions$inboundSchema: z.ZodType<
  CreateMediaRequestAccessRestrictions,
  z.ZodTypeDef,
  unknown
> = z.object({
  domains: z.lazy(() => CreateMediaRequestDomains$inboundSchema).optional(),
  userAgents: z.lazy(() => CreateMediaRequestUserAgents$inboundSchema)
    .optional(),
});

/** @internal */
export type CreateMediaRequestAccessRestrictions$Outbound = {
  domains?: CreateMediaRequestDomains$Outbound | undefined;
  userAgents?: CreateMediaRequestUserAgents$Outbound | undefined;
};

/** @internal */
export const CreateMediaRequestAccessRestrictions$outboundSchema: z.ZodType<
  CreateMediaRequestAccessRestrictions$Outbound,
  z.ZodTypeDef,
  CreateMediaRequestAccessRestrictions
> = z.object({
  domains: z.lazy(() => CreateMediaRequestDomains$outboundSchema).optional(),
  userAgents: z.lazy(() => CreateMediaRequestUserAgents$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaRequestAccessRestrictions$ {
  /** @deprecated use `CreateMediaRequestAccessRestrictions$inboundSchema` instead. */
  export const inboundSchema =
    CreateMediaRequestAccessRestrictions$inboundSchema;
  /** @deprecated use `CreateMediaRequestAccessRestrictions$outboundSchema` instead. */
  export const outboundSchema =
    CreateMediaRequestAccessRestrictions$outboundSchema;
  /** @deprecated use `CreateMediaRequestAccessRestrictions$Outbound` instead. */
  export type Outbound = CreateMediaRequestAccessRestrictions$Outbound;
}

export function createMediaRequestAccessRestrictionsToJSON(
  createMediaRequestAccessRestrictions: CreateMediaRequestAccessRestrictions,
): string {
  return JSON.stringify(
    CreateMediaRequestAccessRestrictions$outboundSchema.parse(
      createMediaRequestAccessRestrictions,
    ),
  );
}

export function createMediaRequestAccessRestrictionsFromJSON(
  jsonString: string,
): SafeParseResult<CreateMediaRequestAccessRestrictions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateMediaRequestAccessRestrictions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMediaRequestAccessRestrictions' from JSON`,
  );
}

/** @internal */
export const CreateMediaRequest$inboundSchema: z.ZodType<
  CreateMediaRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  inputs: z.array(
    z.union([
      SubtitleInput$inboundSchema,
      VideoInput$inboundSchema,
      WatermarkInput$inboundSchema,
      AudioInput$inboundSchema,
    ]),
  ),
  metadata: z.record(z.string()).optional(),
  subtitles: z.lazy(() => Subtitles$inboundSchema).optional(),
  accessPolicy: CreateMediaRequestAccessPolicy$inboundSchema,
  mp4Support: CreateMediaRequestMp4Support$inboundSchema.optional(),
  sourceAccess: z.boolean().optional(),
  optimizeAudio: z.boolean().default(false),
  maxResolution: CreateMediaRequestMaxResolution$inboundSchema.default("1080p"),
  summary: z.lazy(() => Summary$inboundSchema).optional(),
  chapters: z.boolean().optional(),
  namedEntities: z.boolean().optional(),
  moderation: z.lazy(() => Moderation$inboundSchema).optional(),
  accessRestrictions: z.lazy(() =>
    CreateMediaRequestAccessRestrictions$inboundSchema
  ).optional(),
});

/** @internal */
export type CreateMediaRequest$Outbound = {
  inputs: Array<
    | SubtitleInput$Outbound
    | VideoInput$Outbound
    | WatermarkInput$Outbound
    | AudioInput$Outbound
  >;
  metadata?: { [k: string]: string } | undefined;
  subtitles?: Subtitles$Outbound | undefined;
  accessPolicy: string;
  mp4Support?: string | undefined;
  sourceAccess?: boolean | undefined;
  optimizeAudio: boolean;
  maxResolution: string;
  summary?: Summary$Outbound | undefined;
  chapters?: boolean | undefined;
  namedEntities?: boolean | undefined;
  moderation?: Moderation$Outbound | undefined;
  accessRestrictions?:
    | CreateMediaRequestAccessRestrictions$Outbound
    | undefined;
};

/** @internal */
export const CreateMediaRequest$outboundSchema: z.ZodType<
  CreateMediaRequest$Outbound,
  z.ZodTypeDef,
  CreateMediaRequest
> = z.object({
  inputs: z.array(
    z.union([
      SubtitleInput$outboundSchema,
      VideoInput$outboundSchema,
      WatermarkInput$outboundSchema,
      AudioInput$outboundSchema,
    ]),
  ),
  metadata: z.record(z.string()).optional(),
  subtitles: z.lazy(() => Subtitles$outboundSchema).optional(),
  accessPolicy: CreateMediaRequestAccessPolicy$outboundSchema,
  mp4Support: CreateMediaRequestMp4Support$outboundSchema.optional(),
  sourceAccess: z.boolean().optional(),
  optimizeAudio: z.boolean().default(false),
  maxResolution: CreateMediaRequestMaxResolution$outboundSchema.default(
    "1080p",
  ),
  summary: z.lazy(() => Summary$outboundSchema).optional(),
  chapters: z.boolean().optional(),
  namedEntities: z.boolean().optional(),
  moderation: z.lazy(() => Moderation$outboundSchema).optional(),
  accessRestrictions: z.lazy(() =>
    CreateMediaRequestAccessRestrictions$outboundSchema
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaRequest$ {
  /** @deprecated use `CreateMediaRequest$inboundSchema` instead. */
  export const inboundSchema = CreateMediaRequest$inboundSchema;
  /** @deprecated use `CreateMediaRequest$outboundSchema` instead. */
  export const outboundSchema = CreateMediaRequest$outboundSchema;
  /** @deprecated use `CreateMediaRequest$Outbound` instead. */
  export type Outbound = CreateMediaRequest$Outbound;
}

export function createMediaRequestToJSON(
  createMediaRequest: CreateMediaRequest,
): string {
  return JSON.stringify(
    CreateMediaRequest$outboundSchema.parse(createMediaRequest),
  );
}

export function createMediaRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateMediaRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMediaRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMediaRequest' from JSON`,
  );
}
