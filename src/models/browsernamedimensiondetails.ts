import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type BrowserNameDimensiondetails = {
  /**
   * The specific metric value calculated based on the applied filters.
   */
  value: string;
  /**
   * The count of unique viewers who interacted with the content.
   */
  uniqueCount?: number | undefined;
  /**
   * The count of viewers.
   */
  count: number;
};

/** @internal */
export const BrowserNameDimensiondetails$inboundSchema: z.ZodType<
  BrowserNameDimensiondetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string(),
  uniqueCount: z.number().int().optional(),
  count: z.number().int(),
});

/** @internal */
export type BrowserNameDimensiondetails$Outbound = {
  value: string;
  uniqueCount?: number | undefined;
  count: number;
};

/** @internal */
export const BrowserNameDimensiondetails$outboundSchema: z.ZodType<
  BrowserNameDimensiondetails$Outbound,
  z.ZodTypeDef,
  BrowserNameDimensiondetails
> = z.object({
  value: z.string(),
  uniqueCount: z.number().int().optional(),
  count: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BrowserNameDimensiondetails$ {
  /** @deprecated use `BrowserNameDimensiondetails$inboundSchema` instead. */
  export const inboundSchema = BrowserNameDimensiondetails$inboundSchema;
  /** @deprecated use `BrowserNameDimensiondetails$outboundSchema` instead. */
  export const outboundSchema = BrowserNameDimensiondetails$outboundSchema;
  /** @deprecated use `BrowserNameDimensiondetails$Outbound` instead. */
  export type Outbound = BrowserNameDimensiondetails$Outbound;
}

export function browserNameDimensiondetailsToJSON(
  browserNameDimensiondetails: BrowserNameDimensiondetails,
): string {
  return JSON.stringify(
    BrowserNameDimensiondetails$outboundSchema.parse(
      browserNameDimensiondetails,
    ),
  );
}

export function browserNameDimensiondetailsFromJSON(
  jsonString: string,
): SafeParseResult<BrowserNameDimensiondetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BrowserNameDimensiondetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BrowserNameDimensiondetails' from JSON`,
  );
}
