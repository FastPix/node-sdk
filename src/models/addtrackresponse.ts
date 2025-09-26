import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Specifies the type of track (audio or subtitle).
 */
export const AddTrackResponseType = {
  Audio: "audio",
  Subtitle: "subtitle",
} as const;
/**
 * Specifies the type of track (audio or subtitle).
 */
export type AddTrackResponseType = ClosedEnum<typeof AddTrackResponseType>;

/**
 * Contains details about the track that was added or updated.
 */
export type AddTrackResponse = {
  /**
   * The unique identifier of the track.
   */
  id?: string | undefined;
  /**
   * Specifies the type of track (audio or subtitle).
   */
  type?: AddTrackResponseType | undefined;
  /**
   * The direct URL of the track file.
   */
  url?: string | undefined;
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
export const AddTrackResponseType$inboundSchema: z.ZodNativeEnum<
  typeof AddTrackResponseType
> = z.nativeEnum(AddTrackResponseType);

/** @internal */
export const AddTrackResponseType$outboundSchema: z.ZodNativeEnum<
  typeof AddTrackResponseType
> = AddTrackResponseType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddTrackResponseType$ {
  /** @deprecated use `AddTrackResponseType$inboundSchema` instead. */
  export const inboundSchema = AddTrackResponseType$inboundSchema;
  /** @deprecated use `AddTrackResponseType$outboundSchema` instead. */
  export const outboundSchema = AddTrackResponseType$outboundSchema;
}

/** @internal */
export const AddTrackResponse$inboundSchema: z.ZodType<
  AddTrackResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  type: AddTrackResponseType$inboundSchema.optional(),
  url: z.string().optional(),
  languageCode: z.string().optional(),
  languageName: z.string().optional(),
});

/** @internal */
export type AddTrackResponse$Outbound = {
  id?: string | undefined;
  type?: string | undefined;
  url?: string | undefined;
  languageCode?: string | undefined;
  languageName?: string | undefined;
};

/** @internal */
export const AddTrackResponse$outboundSchema: z.ZodType<
  AddTrackResponse$Outbound,
  z.ZodTypeDef,
  AddTrackResponse
> = z.object({
  id: z.string().optional(),
  type: AddTrackResponseType$outboundSchema.optional(),
  url: z.string().optional(),
  languageCode: z.string().optional(),
  languageName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddTrackResponse$ {
  /** @deprecated use `AddTrackResponse$inboundSchema` instead. */
  export const inboundSchema = AddTrackResponse$inboundSchema;
  /** @deprecated use `AddTrackResponse$outboundSchema` instead. */
  export const outboundSchema = AddTrackResponse$outboundSchema;
  /** @deprecated use `AddTrackResponse$Outbound` instead. */
  export type Outbound = AddTrackResponse$Outbound;
}

export function addTrackResponseToJSON(
  addTrackResponse: AddTrackResponse,
): string {
  return JSON.stringify(
    AddTrackResponse$outboundSchema.parse(addTrackResponse),
  );
}

export function addTrackResponseFromJSON(
  jsonString: string,
): SafeParseResult<AddTrackResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddTrackResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddTrackResponse' from JSON`,
  );
}
