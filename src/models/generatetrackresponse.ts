import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * The type of track generated ("subtitle").
 */
export const GenerateTrackResponseType = {
  Subtitle: "subtitle",
} as const;
/**
 * The type of track generated ("subtitle").
 */
export type GenerateTrackResponseType = ClosedEnum<
  typeof GenerateTrackResponseType
>;

/**
 * The BCP 47 language code representing the language of the generated track.
 *
 * @remarks
 */
export const GenerateTrackResponseLanguageCode = {
  ArSA: "ar-SA",
  BnBD: "bn-BD",
  BnIN: "bn-IN",
  CaES: "ca-ES",
  CsCZ: "cs-CZ",
  DaDK: "da-DK",
  DeAT: "de-AT",
  DeCH: "de-CH",
  DEDE: "de-DE",
  ElGR: "el-GR",
  EnAU: "en-AU",
  EnCA: "en-CA",
  EnGB: "en-GB",
  EnIE: "en-IE",
  EnIN: "en-IN",
  EnNZ: "en-NZ",
  EnUS: "en-US",
  EnZA: "en-ZA",
  EsAR: "es-AR",
  EsCL: "es-CL",
  EsCO: "es-CO",
  ESES: "es-ES",
  EsMX: "es-MX",
  EsUS: "es-US",
  FIFI: "fi-FI",
  FrBE: "fr-BE",
  FrCA: "fr-CA",
  FrCH: "fr-CH",
  FRFR: "fr-FR",
  HeIL: "he-IL",
  HiIN: "hi-IN",
  HRHR: "hr-HR",
  HUHU: "hu-HU",
  IDID: "id-ID",
  ItCH: "it-CH",
  ITIT: "it-IT",
  JaJP: "ja-JP",
  KoKR: "ko-KR",
  NlBE: "nl-BE",
  NLNL: "nl-NL",
  NONO: "no-NO",
  PLPL: "pl-PL",
  PtBR: "pt-BR",
  PTPT: "pt-PT",
  RORO: "ro-RO",
  RURU: "ru-RU",
  SKSK: "sk-SK",
  SvSE: "sv-SE",
  TaIN: "ta-IN",
  TaLK: "ta-LK",
  THTH: "th-TH",
  TRTR: "tr-TR",
  UkUA: "uk-UA",
  BGBG: "bg-BG",
  ZhCN: "zh-CN",
  ZhHK: "zh-HK",
  ZhTW: "zh-TW",
} as const;
/**
 * The BCP 47 language code representing the language of the generated track.
 *
 * @remarks
 */
export type GenerateTrackResponseLanguageCode = ClosedEnum<
  typeof GenerateTrackResponseLanguageCode
>;

/**
 * Represents the response for a successfully generated subtitle track.
 */
export type GenerateTrackResponse = {
  /**
   * A unique identifier for the generated track.
   */
  id?: string | undefined;
  /**
   * The type of track generated ("subtitle").
   */
  type?: GenerateTrackResponseType | undefined;
  /**
   * The BCP 47 language code representing the language of the generated track.
   *
   * @remarks
   */
  languageCode?: GenerateTrackResponseLanguageCode | undefined;
  /**
   * The full name of the language for the generated track.
   */
  languageName?: string | undefined;
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key" : "value" pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const GenerateTrackResponseType$inboundSchema: z.ZodNativeEnum<
  typeof GenerateTrackResponseType
> = z.nativeEnum(GenerateTrackResponseType);

/** @internal */
export const GenerateTrackResponseType$outboundSchema: z.ZodNativeEnum<
  typeof GenerateTrackResponseType
> = GenerateTrackResponseType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateTrackResponseType$ {
  /** @deprecated use `GenerateTrackResponseType$inboundSchema` instead. */
  export const inboundSchema = GenerateTrackResponseType$inboundSchema;
  /** @deprecated use `GenerateTrackResponseType$outboundSchema` instead. */
  export const outboundSchema = GenerateTrackResponseType$outboundSchema;
}

/** @internal */
export const GenerateTrackResponseLanguageCode$inboundSchema: z.ZodNativeEnum<
  typeof GenerateTrackResponseLanguageCode
> = z.nativeEnum(GenerateTrackResponseLanguageCode);

/** @internal */
export const GenerateTrackResponseLanguageCode$outboundSchema: z.ZodNativeEnum<
  typeof GenerateTrackResponseLanguageCode
> = GenerateTrackResponseLanguageCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateTrackResponseLanguageCode$ {
  /** @deprecated use `GenerateTrackResponseLanguageCode$inboundSchema` instead. */
  export const inboundSchema = GenerateTrackResponseLanguageCode$inboundSchema;
  /** @deprecated use `GenerateTrackResponseLanguageCode$outboundSchema` instead. */
  export const outboundSchema =
    GenerateTrackResponseLanguageCode$outboundSchema;
}

/** @internal */
export const GenerateTrackResponse$inboundSchema: z.ZodType<
  GenerateTrackResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  type: GenerateTrackResponseType$inboundSchema.optional(),
  languageCode: GenerateTrackResponseLanguageCode$inboundSchema.optional(),
  languageName: z.string().optional(),
  metadata: z.record(z.string()).optional(),
});

/** @internal */
export type GenerateTrackResponse$Outbound = {
  id?: string | undefined;
  type?: string | undefined;
  languageCode?: string | undefined;
  languageName?: string | undefined;
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const GenerateTrackResponse$outboundSchema: z.ZodType<
  GenerateTrackResponse$Outbound,
  z.ZodTypeDef,
  GenerateTrackResponse
> = z.object({
  id: z.string().optional(),
  type: GenerateTrackResponseType$outboundSchema.optional(),
  languageCode: GenerateTrackResponseLanguageCode$outboundSchema.optional(),
  languageName: z.string().optional(),
  metadata: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateTrackResponse$ {
  /** @deprecated use `GenerateTrackResponse$inboundSchema` instead. */
  export const inboundSchema = GenerateTrackResponse$inboundSchema;
  /** @deprecated use `GenerateTrackResponse$outboundSchema` instead. */
  export const outboundSchema = GenerateTrackResponse$outboundSchema;
  /** @deprecated use `GenerateTrackResponse$Outbound` instead. */
  export type Outbound = GenerateTrackResponse$Outbound;
}

export function generateTrackResponseToJSON(
  generateTrackResponse: GenerateTrackResponse,
): string {
  return JSON.stringify(
    GenerateTrackResponse$outboundSchema.parse(generateTrackResponse),
  );
}

export function generateTrackResponseFromJSON(
  jsonString: string,
): SafeParseResult<GenerateTrackResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GenerateTrackResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GenerateTrackResponse' from JSON`,
  );
}
