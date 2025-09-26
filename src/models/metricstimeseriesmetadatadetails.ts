import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Retrieves breakdown values for a specified metric and timespan
 */
export type MetricsTimeseriesMetaDataDetails = {
  /**
   * the unit for aggregating the timeseries data.
   */
  granularity?: string | undefined;
  /**
   * defines the field or dimension on which the aggregation is to be   applied.
   */
  aggregation?: string | undefined;
};

/** @internal */
export const MetricsTimeseriesMetaDataDetails$inboundSchema: z.ZodType<
  MetricsTimeseriesMetaDataDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  granularity: z.string().optional(),
  aggregation: z.string().optional(),
});

/** @internal */
export type MetricsTimeseriesMetaDataDetails$Outbound = {
  granularity?: string | undefined;
  aggregation?: string | undefined;
};

/** @internal */
export const MetricsTimeseriesMetaDataDetails$outboundSchema: z.ZodType<
  MetricsTimeseriesMetaDataDetails$Outbound,
  z.ZodTypeDef,
  MetricsTimeseriesMetaDataDetails
> = z.object({
  granularity: z.string().optional(),
  aggregation: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsTimeseriesMetaDataDetails$ {
  /** @deprecated use `MetricsTimeseriesMetaDataDetails$inboundSchema` instead. */
  export const inboundSchema = MetricsTimeseriesMetaDataDetails$inboundSchema;
  /** @deprecated use `MetricsTimeseriesMetaDataDetails$outboundSchema` instead. */
  export const outboundSchema = MetricsTimeseriesMetaDataDetails$outboundSchema;
  /** @deprecated use `MetricsTimeseriesMetaDataDetails$Outbound` instead. */
  export type Outbound = MetricsTimeseriesMetaDataDetails$Outbound;
}

export function metricsTimeseriesMetaDataDetailsToJSON(
  metricsTimeseriesMetaDataDetails: MetricsTimeseriesMetaDataDetails,
): string {
  return JSON.stringify(
    MetricsTimeseriesMetaDataDetails$outboundSchema.parse(
      metricsTimeseriesMetaDataDetails,
    ),
  );
}

export function metricsTimeseriesMetaDataDetailsFromJSON(
  jsonString: string,
): SafeParseResult<MetricsTimeseriesMetaDataDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricsTimeseriesMetaDataDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricsTimeseriesMetaDataDetails' from JSON`,
  );
}
