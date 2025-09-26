import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type SummaryResponse = {
  mediaId?: string | undefined;
  isGeneratedSummary?: boolean | undefined;
};

/** @internal */
export const SummaryResponse$inboundSchema: z.ZodType<
  SummaryResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string().optional(),
  isGeneratedSummary: z.boolean().optional(),
});

/** @internal */
export type SummaryResponse$Outbound = {
  mediaId?: string | undefined;
  isGeneratedSummary?: boolean | undefined;
};

/** @internal */
export const SummaryResponse$outboundSchema: z.ZodType<
  SummaryResponse$Outbound,
  z.ZodTypeDef,
  SummaryResponse
> = z.object({
  mediaId: z.string().optional(),
  isGeneratedSummary: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SummaryResponse$ {
  /** @deprecated use `SummaryResponse$inboundSchema` instead. */
  export const inboundSchema = SummaryResponse$inboundSchema;
  /** @deprecated use `SummaryResponse$outboundSchema` instead. */
  export const outboundSchema = SummaryResponse$outboundSchema;
  /** @deprecated use `SummaryResponse$Outbound` instead. */
  export type Outbound = SummaryResponse$Outbound;
}

export function summaryResponseToJSON(
  summaryResponse: SummaryResponse,
): string {
  return JSON.stringify(SummaryResponse$outboundSchema.parse(summaryResponse));
}

export function summaryResponseFromJSON(
  jsonString: string,
): SafeParseResult<SummaryResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SummaryResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SummaryResponse' from JSON`,
  );
}
