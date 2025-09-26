import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type ChaptersResponse = {
  mediaId?: string | undefined;
  isGeneratedChapters?: boolean | undefined;
};

/** @internal */
export const ChaptersResponse$inboundSchema: z.ZodType<
  ChaptersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string().optional(),
  isGeneratedChapters: z.boolean().optional(),
});

/** @internal */
export type ChaptersResponse$Outbound = {
  mediaId?: string | undefined;
  isGeneratedChapters?: boolean | undefined;
};

/** @internal */
export const ChaptersResponse$outboundSchema: z.ZodType<
  ChaptersResponse$Outbound,
  z.ZodTypeDef,
  ChaptersResponse
> = z.object({
  mediaId: z.string().optional(),
  isGeneratedChapters: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChaptersResponse$ {
  /** @deprecated use `ChaptersResponse$inboundSchema` instead. */
  export const inboundSchema = ChaptersResponse$inboundSchema;
  /** @deprecated use `ChaptersResponse$outboundSchema` instead. */
  export const outboundSchema = ChaptersResponse$outboundSchema;
  /** @deprecated use `ChaptersResponse$Outbound` instead. */
  export type Outbound = ChaptersResponse$Outbound;
}

export function chaptersResponseToJSON(
  chaptersResponse: ChaptersResponse,
): string {
  return JSON.stringify(
    ChaptersResponse$outboundSchema.parse(chaptersResponse),
  );
}

export function chaptersResponseFromJSON(
  jsonString: string,
): SafeParseResult<ChaptersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChaptersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChaptersResponse' from JSON`,
  );
}
