import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type Item = {
  /**
   * The specific metric value calculated based on the applied filters.
   */
  value?: number | undefined;
  /**
   * value can be score that ranges from 0 to 100
   */
  type?: string | undefined;
  /**
   * value can be score that ranges from 0 to 100
   */
  name?: string | undefined;
  /**
   * The metric field represents the name of the Key Performance Indicator (KPI) being tracked or analyzed. It identifies a specific measurable aspect of the video playback experience, such as buffering time, video start failure rate, or playback quality.
   *
   * @remarks
   */
  metric?: string | undefined;
  /**
   * value can be avg, sum, count or 95th
   */
  measurement?: string | undefined;
};

export type MetricsComparisonDetails = {
  /**
   * The specific metric value calculated based on the applied filters.
   */
  value?: number | undefined;
  /**
   * value can be score that ranges from 0 to 100
   */
  type?: string | undefined;
  /**
   * value can be score that ranges from 0 to 100
   */
  name?: string | undefined;
  /**
   * The metric field represents the name of the Key Performance Indicator (KPI) being tracked or analyzed. It identifies a specific measurable aspect of the video playback experience, such as buffering time, video start failure rate, or playback quality.
   *
   * @remarks
   */
  metric?: string | undefined;
  items?: Array<Item> | undefined;
};

/** @internal */
export const Item$inboundSchema: z.ZodType<Item, z.ZodTypeDef, unknown> = z
  .object({
    value: z.number().int().optional(),
    type: z.string().optional(),
    name: z.string().optional(),
    metric: z.string().optional(),
    measurement: z.string().optional(),
  });

/** @internal */
export type Item$Outbound = {
  value?: number | undefined;
  type?: string | undefined;
  name?: string | undefined;
  metric?: string | undefined;
  measurement?: string | undefined;
};

/** @internal */
export const Item$outboundSchema: z.ZodType<Item$Outbound, z.ZodTypeDef, Item> =
  z.object({
    value: z.number().int().optional(),
    type: z.string().optional(),
    name: z.string().optional(),
    metric: z.string().optional(),
    measurement: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Item$ {
  /** @deprecated use `Item$inboundSchema` instead. */
  export const inboundSchema = Item$inboundSchema;
  /** @deprecated use `Item$outboundSchema` instead. */
  export const outboundSchema = Item$outboundSchema;
  /** @deprecated use `Item$Outbound` instead. */
  export type Outbound = Item$Outbound;
}

export function itemToJSON(item: Item): string {
  return JSON.stringify(Item$outboundSchema.parse(item));
}

export function itemFromJSON(
  jsonString: string,
): SafeParseResult<Item, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Item$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Item' from JSON`,
  );
}

/** @internal */
export const MetricsComparisonDetails$inboundSchema: z.ZodType<
  MetricsComparisonDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.number().int().optional(),
  type: z.string().optional(),
  name: z.string().optional(),
  metric: z.string().optional(),
  items: z.array(z.lazy(() => Item$inboundSchema)).optional(),
});

/** @internal */
export type MetricsComparisonDetails$Outbound = {
  value?: number | undefined;
  type?: string | undefined;
  name?: string | undefined;
  metric?: string | undefined;
  items?: Array<Item$Outbound> | undefined;
};

/** @internal */
export const MetricsComparisonDetails$outboundSchema: z.ZodType<
  MetricsComparisonDetails$Outbound,
  z.ZodTypeDef,
  MetricsComparisonDetails
> = z.object({
  value: z.number().int().optional(),
  type: z.string().optional(),
  name: z.string().optional(),
  metric: z.string().optional(),
  items: z.array(z.lazy(() => Item$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsComparisonDetails$ {
  /** @deprecated use `MetricsComparisonDetails$inboundSchema` instead. */
  export const inboundSchema = MetricsComparisonDetails$inboundSchema;
  /** @deprecated use `MetricsComparisonDetails$outboundSchema` instead. */
  export const outboundSchema = MetricsComparisonDetails$outboundSchema;
  /** @deprecated use `MetricsComparisonDetails$Outbound` instead. */
  export type Outbound = MetricsComparisonDetails$Outbound;
}

export function metricsComparisonDetailsToJSON(
  metricsComparisonDetails: MetricsComparisonDetails,
): string {
  return JSON.stringify(
    MetricsComparisonDetails$outboundSchema.parse(metricsComparisonDetails),
  );
}

export function metricsComparisonDetailsFromJSON(
  jsonString: string,
): SafeParseResult<MetricsComparisonDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricsComparisonDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricsComparisonDetails' from JSON`,
  );
}
