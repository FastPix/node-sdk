import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

/**
 * Language code for content localization
 */
export const LanguageCode = {
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
  MsMY: "ms-MY",
  NbNO: "nb-NO",
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
  TeIN: "te-IN",
  THTH: "th-TH",
  TRTR: "tr-TR",
  UkUA: "uk-UA",
  ViVN: "vi-VN",
  BGBG: "bg-BG",
  ZhCN: "zh-CN",
  ZhHK: "zh-HK",
  ZhTW: "zh-TW",
} as const;
/**
 * Language code for content localization
 */
export type LanguageCode = ClosedEnum<typeof LanguageCode>;

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
