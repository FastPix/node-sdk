import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * The specific metric value calculated based on the applied filters.
 */
export type MetricsBreakdownDetailsValue = number | number;

export type MetricsBreakdownDetails = {
  /**
   * Total count of view sessions for a paricular video content.
   */
  views?: number | null | undefined;
  /**
   * The specific metric value calculated based on the applied filters.
   */
  value: number | number | null;
  /**
   * Total time watched across all views, represented in milliseconds.
   */
  totalWatchTime?: number | null | undefined;
  /**
   * Total time spent playing the video, represented in milliseconds.
   */
  totalPlayingTime?: number | null | undefined;
  /**
   * the value of dimension or filter value on which the aggregation is to be applied.
   */
  field?: string | null | undefined;
};

/** @internal */
export const MetricsBreakdownDetailsValue$inboundSchema: z.ZodType<
  MetricsBreakdownDetailsValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type MetricsBreakdownDetailsValue$Outbound = number | number;

/** @internal */
export const MetricsBreakdownDetailsValue$outboundSchema: z.ZodType<
  MetricsBreakdownDetailsValue$Outbound,
  z.ZodTypeDef,
  MetricsBreakdownDetailsValue
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsBreakdownDetailsValue$ {
  /** @deprecated use `MetricsBreakdownDetailsValue$inboundSchema` instead. */
  export const inboundSchema = MetricsBreakdownDetailsValue$inboundSchema;
  /** @deprecated use `MetricsBreakdownDetailsValue$outboundSchema` instead. */
  export const outboundSchema = MetricsBreakdownDetailsValue$outboundSchema;
  /** @deprecated use `MetricsBreakdownDetailsValue$Outbound` instead. */
  export type Outbound = MetricsBreakdownDetailsValue$Outbound;
}

export function metricsBreakdownDetailsValueToJSON(
  metricsBreakdownDetailsValue: MetricsBreakdownDetailsValue,
): string {
  return JSON.stringify(
    MetricsBreakdownDetailsValue$outboundSchema.parse(
      metricsBreakdownDetailsValue,
    ),
  );
}

export function metricsBreakdownDetailsValueFromJSON(
  jsonString: string,
): SafeParseResult<MetricsBreakdownDetailsValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricsBreakdownDetailsValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricsBreakdownDetailsValue' from JSON`,
  );
}

/** @internal */
export const MetricsBreakdownDetails$inboundSchema: z.ZodType<
  MetricsBreakdownDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  views: z.nullable(z.number().int()).optional(),
  value: z.nullable(z.union([z.number().int(), z.number()])),
  totalWatchTime: z.nullable(z.number().int()).optional(),
  totalPlayingTime: z.nullable(z.number().int()).optional(),
  field: z.nullable(z.string()).optional(),
});

/** @internal */
export type MetricsBreakdownDetails$Outbound = {
  views?: number | null | undefined;
  value: number | number | null;
  totalWatchTime?: number | null | undefined;
  totalPlayingTime?: number | null | undefined;
  field?: string | null | undefined;
};

/** @internal */
export const MetricsBreakdownDetails$outboundSchema: z.ZodType<
  MetricsBreakdownDetails$Outbound,
  z.ZodTypeDef,
  MetricsBreakdownDetails
> = z.object({
  views: z.nullable(z.number().int()).optional(),
  value: z.nullable(z.union([z.number().int(), z.number()])),
  totalWatchTime: z.nullable(z.number().int()).optional(),
  totalPlayingTime: z.nullable(z.number().int()).optional(),
  field: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsBreakdownDetails$ {
  /** @deprecated use `MetricsBreakdownDetails$inboundSchema` instead. */
  export const inboundSchema = MetricsBreakdownDetails$inboundSchema;
  /** @deprecated use `MetricsBreakdownDetails$outboundSchema` instead. */
  export const outboundSchema = MetricsBreakdownDetails$outboundSchema;
  /** @deprecated use `MetricsBreakdownDetails$Outbound` instead. */
  export type Outbound = MetricsBreakdownDetails$Outbound;
}

export function metricsBreakdownDetailsToJSON(
  metricsBreakdownDetails: MetricsBreakdownDetails,
): string {
  return JSON.stringify(
    MetricsBreakdownDetails$outboundSchema.parse(metricsBreakdownDetails),
  );
}

export function metricsBreakdownDetailsFromJSON(
  jsonString: string,
): SafeParseResult<MetricsBreakdownDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricsBreakdownDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricsBreakdownDetails' from JSON`,
  );
}
