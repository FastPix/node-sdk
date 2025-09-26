import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Date range with start and end dates.
 */
export type DateRange = {
  startDate?: string | undefined;
  endDate?: string | undefined;
};

/** @internal */
export const DateRange$inboundSchema: z.ZodType<
  DateRange,
  z.ZodTypeDef,
  unknown
> = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

/** @internal */
export type DateRange$Outbound = {
  startDate?: string | undefined;
  endDate?: string | undefined;
};

/** @internal */
export const DateRange$outboundSchema: z.ZodType<
  DateRange$Outbound,
  z.ZodTypeDef,
  DateRange
> = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DateRange$ {
  /** @deprecated use `DateRange$inboundSchema` instead. */
  export const inboundSchema = DateRange$inboundSchema;
  /** @deprecated use `DateRange$outboundSchema` instead. */
  export const outboundSchema = DateRange$outboundSchema;
  /** @deprecated use `DateRange$Outbound` instead. */
  export type Outbound = DateRange$Outbound;
}

export function dateRangeToJSON(dateRange: DateRange): string {
  return JSON.stringify(DateRange$outboundSchema.parse(dateRange));
}

export function dateRangeFromJSON(
  jsonString: string,
): SafeParseResult<DateRange, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DateRange$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DateRange' from JSON`,
  );
}
