import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * metric value calculated based on the applied filters.
 */
export type MetricsOverallDataDetailsValue = number | number;

/**
 * A global metric value that reflects the overall performance of the specified metric across the entire dataset for the given timespan.
 */
export type GlobalValue = number | number;

/**
 * Retrieves overall values for a specified metric
 */
export type MetricsOverallDataDetails = {
  /**
   * metric value calculated based on the applied filters.
   */
  value?: number | number | null | undefined;
  /**
   * Total time watched across all views, represented in milliseconds.
   */
  totalWatchTime?: number | null | undefined;
  /**
   * The count of unique viewers who interacted with the content.
   */
  uniqueViews?: number | null | undefined;
  /**
   * The total number of views recorded.
   */
  totalViews?: number | null | undefined;
  /**
   * Total time spent playing the video, represented in milliseconds.
   */
  totalPlayTime?: number | null | undefined;
  /**
   * A global metric value that reflects the overall performance of the specified metric across the entire dataset for the given timespan.
   */
  globalValue?: number | number | null | undefined;
};

/** @internal */
export const MetricsOverallDataDetailsValue$inboundSchema: z.ZodType<
  MetricsOverallDataDetailsValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type MetricsOverallDataDetailsValue$Outbound = number | number;

/** @internal */
export const MetricsOverallDataDetailsValue$outboundSchema: z.ZodType<
  MetricsOverallDataDetailsValue$Outbound,
  z.ZodTypeDef,
  MetricsOverallDataDetailsValue
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsOverallDataDetailsValue$ {
  /** @deprecated use `MetricsOverallDataDetailsValue$inboundSchema` instead. */
  export const inboundSchema = MetricsOverallDataDetailsValue$inboundSchema;
  /** @deprecated use `MetricsOverallDataDetailsValue$outboundSchema` instead. */
  export const outboundSchema = MetricsOverallDataDetailsValue$outboundSchema;
  /** @deprecated use `MetricsOverallDataDetailsValue$Outbound` instead. */
  export type Outbound = MetricsOverallDataDetailsValue$Outbound;
}

export function metricsOverallDataDetailsValueToJSON(
  metricsOverallDataDetailsValue: MetricsOverallDataDetailsValue,
): string {
  return JSON.stringify(
    MetricsOverallDataDetailsValue$outboundSchema.parse(
      metricsOverallDataDetailsValue,
    ),
  );
}

export function metricsOverallDataDetailsValueFromJSON(
  jsonString: string,
): SafeParseResult<MetricsOverallDataDetailsValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricsOverallDataDetailsValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricsOverallDataDetailsValue' from JSON`,
  );
}

/** @internal */
export const GlobalValue$inboundSchema: z.ZodType<
  GlobalValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type GlobalValue$Outbound = number | number;

/** @internal */
export const GlobalValue$outboundSchema: z.ZodType<
  GlobalValue$Outbound,
  z.ZodTypeDef,
  GlobalValue
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GlobalValue$ {
  /** @deprecated use `GlobalValue$inboundSchema` instead. */
  export const inboundSchema = GlobalValue$inboundSchema;
  /** @deprecated use `GlobalValue$outboundSchema` instead. */
  export const outboundSchema = GlobalValue$outboundSchema;
  /** @deprecated use `GlobalValue$Outbound` instead. */
  export type Outbound = GlobalValue$Outbound;
}

export function globalValueToJSON(globalValue: GlobalValue): string {
  return JSON.stringify(GlobalValue$outboundSchema.parse(globalValue));
}

export function globalValueFromJSON(
  jsonString: string,
): SafeParseResult<GlobalValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GlobalValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GlobalValue' from JSON`,
  );
}

/** @internal */
export const MetricsOverallDataDetails$inboundSchema: z.ZodType<
  MetricsOverallDataDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.nullable(z.union([z.number().int(), z.number()])).optional(),
  totalWatchTime: z.nullable(z.number().int()).optional(),
  uniqueViews: z.nullable(z.number().int()).optional(),
  totalViews: z.nullable(z.number().int()).optional(),
  totalPlayTime: z.nullable(z.number().int()).optional(),
  globalValue: z.nullable(z.union([z.number().int(), z.number()])).optional(),
});

/** @internal */
export type MetricsOverallDataDetails$Outbound = {
  value?: number | number | null | undefined;
  totalWatchTime?: number | null | undefined;
  uniqueViews?: number | null | undefined;
  totalViews?: number | null | undefined;
  totalPlayTime?: number | null | undefined;
  globalValue?: number | number | null | undefined;
};

/** @internal */
export const MetricsOverallDataDetails$outboundSchema: z.ZodType<
  MetricsOverallDataDetails$Outbound,
  z.ZodTypeDef,
  MetricsOverallDataDetails
> = z.object({
  value: z.nullable(z.union([z.number().int(), z.number()])).optional(),
  totalWatchTime: z.nullable(z.number().int()).optional(),
  uniqueViews: z.nullable(z.number().int()).optional(),
  totalViews: z.nullable(z.number().int()).optional(),
  totalPlayTime: z.nullable(z.number().int()).optional(),
  globalValue: z.nullable(z.union([z.number().int(), z.number()])).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsOverallDataDetails$ {
  /** @deprecated use `MetricsOverallDataDetails$inboundSchema` instead. */
  export const inboundSchema = MetricsOverallDataDetails$inboundSchema;
  /** @deprecated use `MetricsOverallDataDetails$outboundSchema` instead. */
  export const outboundSchema = MetricsOverallDataDetails$outboundSchema;
  /** @deprecated use `MetricsOverallDataDetails$Outbound` instead. */
  export type Outbound = MetricsOverallDataDetails$Outbound;
}

export function metricsOverallDataDetailsToJSON(
  metricsOverallDataDetails: MetricsOverallDataDetails,
): string {
  return JSON.stringify(
    MetricsOverallDataDetails$outboundSchema.parse(metricsOverallDataDetails),
  );
}

export function metricsOverallDataDetailsFromJSON(
  jsonString: string,
): SafeParseResult<MetricsOverallDataDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricsOverallDataDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricsOverallDataDetails' from JSON`,
  );
}
