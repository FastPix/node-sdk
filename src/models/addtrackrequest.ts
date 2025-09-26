import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Specifies the type of track being added. It can be either `audio` or `subtitle`.
 */
export const AddTrackRequestType = {
  Audio: "audio",
  Subtitle: "subtitle",
} as const;
/**
 * Specifies the type of track being added. It can be either `audio` or `subtitle`.
 */
export type AddTrackRequestType = ClosedEnum<typeof AddTrackRequestType>;

/**
 * Contains details about the track being added to the media file.
 */
export type AddTrackRequest = {
  /**
   * The direct URL of the track file. It should point to a valid audio or subtitle file.
   */
  url?: string | undefined;
  /**
   * Specifies the type of track being added. It can be either `audio` or `subtitle`.
   */
  type?: AddTrackRequestType | undefined;
  /**
   * The BCP 47 language code representing the track's language.
   */
  languageCode?: string | undefined;
  /**
   * The full name of the language corresponding to the `languageCode`.
   */
  languageName?: string | undefined;
};

/** @internal */
export const AddTrackRequestType$inboundSchema: z.ZodNativeEnum<
  typeof AddTrackRequestType
> = z.nativeEnum(AddTrackRequestType);

/** @internal */
export const AddTrackRequestType$outboundSchema: z.ZodNativeEnum<
  typeof AddTrackRequestType
> = AddTrackRequestType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddTrackRequestType$ {
  /** @deprecated use `AddTrackRequestType$inboundSchema` instead. */
  export const inboundSchema = AddTrackRequestType$inboundSchema;
  /** @deprecated use `AddTrackRequestType$outboundSchema` instead. */
  export const outboundSchema = AddTrackRequestType$outboundSchema;
}

/** @internal */
export const AddTrackRequest$inboundSchema: z.ZodType<
  AddTrackRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string().optional(),
  type: AddTrackRequestType$inboundSchema.optional(),
  languageCode: z.string().optional(),
  languageName: z.string().optional(),
});

/** @internal */
export type AddTrackRequest$Outbound = {
  url?: string | undefined;
  type?: string | undefined;
  languageCode?: string | undefined;
  languageName?: string | undefined;
};

/** @internal */
export const AddTrackRequest$outboundSchema: z.ZodType<
  AddTrackRequest$Outbound,
  z.ZodTypeDef,
  AddTrackRequest
> = z.object({
  url: z.string().optional(),
  type: AddTrackRequestType$outboundSchema.optional(),
  languageCode: z.string().optional(),
  languageName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddTrackRequest$ {
  /** @deprecated use `AddTrackRequest$inboundSchema` instead. */
  export const inboundSchema = AddTrackRequest$inboundSchema;
  /** @deprecated use `AddTrackRequest$outboundSchema` instead. */
  export const outboundSchema = AddTrackRequest$outboundSchema;
  /** @deprecated use `AddTrackRequest$Outbound` instead. */
  export type Outbound = AddTrackRequest$Outbound;
}

export function addTrackRequestToJSON(
  addTrackRequest: AddTrackRequest,
): string {
  return JSON.stringify(AddTrackRequest$outboundSchema.parse(addTrackRequest));
}

export function addTrackRequestFromJSON(
  jsonString: string,
): SafeParseResult<AddTrackRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddTrackRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddTrackRequest' from JSON`,
  );
}
