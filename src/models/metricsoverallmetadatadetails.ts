import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Metadata that has to be paased for metric calculations.
 */
export type MetricsOverallMetaDataDetails = {
  /**
   * defines the field or dimension on which the aggregation is to be   applied.
   */
  aggregation?: string | undefined;
};

/** @internal */
export const MetricsOverallMetaDataDetails$inboundSchema: z.ZodType<
  MetricsOverallMetaDataDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  aggregation: z.string().optional(),
});

/** @internal */
export type MetricsOverallMetaDataDetails$Outbound = {
  aggregation?: string | undefined;
};

/** @internal */
export const MetricsOverallMetaDataDetails$outboundSchema: z.ZodType<
  MetricsOverallMetaDataDetails$Outbound,
  z.ZodTypeDef,
  MetricsOverallMetaDataDetails
> = z.object({
  aggregation: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsOverallMetaDataDetails$ {
  /** @deprecated use `MetricsOverallMetaDataDetails$inboundSchema` instead. */
  export const inboundSchema = MetricsOverallMetaDataDetails$inboundSchema;
  /** @deprecated use `MetricsOverallMetaDataDetails$outboundSchema` instead. */
  export const outboundSchema = MetricsOverallMetaDataDetails$outboundSchema;
  /** @deprecated use `MetricsOverallMetaDataDetails$Outbound` instead. */
  export type Outbound = MetricsOverallMetaDataDetails$Outbound;
}

export function metricsOverallMetaDataDetailsToJSON(
  metricsOverallMetaDataDetails: MetricsOverallMetaDataDetails,
): string {
  return JSON.stringify(
    MetricsOverallMetaDataDetails$outboundSchema.parse(
      metricsOverallMetaDataDetails,
    ),
  );
}

export function metricsOverallMetaDataDetailsFromJSON(
  jsonString: string,
): SafeParseResult<MetricsOverallMetaDataDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricsOverallMetaDataDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricsOverallMetaDataDetails' from JSON`,
  );
}
