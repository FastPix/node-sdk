import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Specifies the type of track (audio or subtitle).
 */
export const UpdateTrackResponseType = {
  Audio: "audio",
  Subtitle: "subtitle",
} as const;
/**
 * Specifies the type of track (audio or subtitle).
 */
export type UpdateTrackResponseType = ClosedEnum<
  typeof UpdateTrackResponseType
>;

/**
 * Contains details about the track that was added or updated.
 */
export type UpdateTrackResponse = {
  /**
   * The unique identifier of the track.
   */
  id?: string | undefined;
  /**
   * Specifies the type of track (audio or subtitle).
   */
  type?: UpdateTrackResponseType | undefined;
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
export const UpdateTrackResponseType$inboundSchema: z.ZodNativeEnum<
  typeof UpdateTrackResponseType
> = z.nativeEnum(UpdateTrackResponseType);

/** @internal */
export const UpdateTrackResponseType$outboundSchema: z.ZodNativeEnum<
  typeof UpdateTrackResponseType
> = UpdateTrackResponseType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTrackResponseType$ {
  /** @deprecated use `UpdateTrackResponseType$inboundSchema` instead. */
  export const inboundSchema = UpdateTrackResponseType$inboundSchema;
  /** @deprecated use `UpdateTrackResponseType$outboundSchema` instead. */
  export const outboundSchema = UpdateTrackResponseType$outboundSchema;
}

/** @internal */
export const UpdateTrackResponse$inboundSchema: z.ZodType<
  UpdateTrackResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  type: UpdateTrackResponseType$inboundSchema.optional(),
  url: z.string().optional(),
  languageCode: z.string().optional(),
  languageName: z.string().optional(),
});

/** @internal */
export type UpdateTrackResponse$Outbound = {
  id?: string | undefined;
  type?: string | undefined;
  url?: string | undefined;
  languageCode?: string | undefined;
  languageName?: string | undefined;
};

/** @internal */
export const UpdateTrackResponse$outboundSchema: z.ZodType<
  UpdateTrackResponse$Outbound,
  z.ZodTypeDef,
  UpdateTrackResponse
> = z.object({
  id: z.string().optional(),
  type: UpdateTrackResponseType$outboundSchema.optional(),
  url: z.string().optional(),
  languageCode: z.string().optional(),
  languageName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTrackResponse$ {
  /** @deprecated use `UpdateTrackResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateTrackResponse$inboundSchema;
  /** @deprecated use `UpdateTrackResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateTrackResponse$outboundSchema;
  /** @deprecated use `UpdateTrackResponse$Outbound` instead. */
  export type Outbound = UpdateTrackResponse$Outbound;
}

export function updateTrackResponseToJSON(
  updateTrackResponse: UpdateTrackResponse,
): string {
  return JSON.stringify(
    UpdateTrackResponse$outboundSchema.parse(updateTrackResponse),
  );
}

export function updateTrackResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTrackResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateTrackResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTrackResponse' from JSON`,
  );
}
