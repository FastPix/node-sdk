import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * The value of the specified metric at the given interval.
 */
export type MetricValue = number | number;

/**
 * The metric's value at specific time intervals.
 */
export type MetricsTimeseriesDataDetails = {
  /**
   * The timestamp for the data point indicating when the metric value was recorded.
   */
  intervalTime?: Date | undefined;
  /**
   * The value of the specified metric at the given interval.
   */
  metricValue?: number | number | null | undefined;
  /**
   * The total number of views recorded during that interval.
   */
  numberOfViews?: number | null | undefined;
};

/** @internal */
export const MetricValue$inboundSchema: z.ZodType<
  MetricValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type MetricValue$Outbound = number | number;

/** @internal */
export const MetricValue$outboundSchema: z.ZodType<
  MetricValue$Outbound,
  z.ZodTypeDef,
  MetricValue
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricValue$ {
  /** @deprecated use `MetricValue$inboundSchema` instead. */
  export const inboundSchema = MetricValue$inboundSchema;
  /** @deprecated use `MetricValue$outboundSchema` instead. */
  export const outboundSchema = MetricValue$outboundSchema;
  /** @deprecated use `MetricValue$Outbound` instead. */
  export type Outbound = MetricValue$Outbound;
}

export function metricValueToJSON(metricValue: MetricValue): string {
  return JSON.stringify(MetricValue$outboundSchema.parse(metricValue));
}

export function metricValueFromJSON(
  jsonString: string,
): SafeParseResult<MetricValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricValue' from JSON`,
  );
}

/** @internal */
export const MetricsTimeseriesDataDetails$inboundSchema: z.ZodType<
  MetricsTimeseriesDataDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  intervalTime: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  metricValue: z.nullable(z.union([z.number().int(), z.number()])).optional(),
  numberOfViews: z.nullable(z.number().int()).optional(),
});

/** @internal */
export type MetricsTimeseriesDataDetails$Outbound = {
  intervalTime?: string | undefined;
  metricValue?: number | number | null | undefined;
  numberOfViews?: number | null | undefined;
};

/** @internal */
export const MetricsTimeseriesDataDetails$outboundSchema: z.ZodType<
  MetricsTimeseriesDataDetails$Outbound,
  z.ZodTypeDef,
  MetricsTimeseriesDataDetails
> = z.object({
  intervalTime: z.date().transform(v => v.toISOString()).optional(),
  metricValue: z.nullable(z.union([z.number().int(), z.number()])).optional(),
  numberOfViews: z.nullable(z.number().int()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsTimeseriesDataDetails$ {
  /** @deprecated use `MetricsTimeseriesDataDetails$inboundSchema` instead. */
  export const inboundSchema = MetricsTimeseriesDataDetails$inboundSchema;
  /** @deprecated use `MetricsTimeseriesDataDetails$outboundSchema` instead. */
  export const outboundSchema = MetricsTimeseriesDataDetails$outboundSchema;
  /** @deprecated use `MetricsTimeseriesDataDetails$Outbound` instead. */
  export type Outbound = MetricsTimeseriesDataDetails$Outbound;
}

export function metricsTimeseriesDataDetailsToJSON(
  metricsTimeseriesDataDetails: MetricsTimeseriesDataDetails,
): string {
  return JSON.stringify(
    MetricsTimeseriesDataDetails$outboundSchema.parse(
      metricsTimeseriesDataDetails,
    ),
  );
}

export function metricsTimeseriesDataDetailsFromJSON(
  jsonString: string,
): SafeParseResult<MetricsTimeseriesDataDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricsTimeseriesDataDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricsTimeseriesDataDetails' from JSON`,
  );
}
