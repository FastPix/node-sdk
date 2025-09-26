import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Pagination organizes content into pages for better readability and navigation.
 */
export type SingingKeysPagination = {
  /**
   * It gives the total number of media assets that are accessible overall.
   */
  totalRecords?: number | undefined;
  /**
   * Determines the current point for data retrieval within a paginated list.
   */
  currentOffset?: number | undefined;
  /**
   * The offset count is expressed as total records by limit.
   */
  offsetCount?: number | undefined;
};

/** @internal */
export const SingingKeysPagination$inboundSchema: z.ZodType<
  SingingKeysPagination,
  z.ZodTypeDef,
  unknown
> = z.object({
  totalRecords: z.number().int().optional(),
  currentOffset: z.number().int().optional(),
  offsetCount: z.number().int().optional(),
});

/** @internal */
export type SingingKeysPagination$Outbound = {
  totalRecords?: number | undefined;
  currentOffset?: number | undefined;
  offsetCount?: number | undefined;
};

/** @internal */
export const SingingKeysPagination$outboundSchema: z.ZodType<
  SingingKeysPagination$Outbound,
  z.ZodTypeDef,
  SingingKeysPagination
> = z.object({
  totalRecords: z.number().int().optional(),
  currentOffset: z.number().int().optional(),
  offsetCount: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SingingKeysPagination$ {
  /** @deprecated use `SingingKeysPagination$inboundSchema` instead. */
  export const inboundSchema = SingingKeysPagination$inboundSchema;
  /** @deprecated use `SingingKeysPagination$outboundSchema` instead. */
  export const outboundSchema = SingingKeysPagination$outboundSchema;
  /** @deprecated use `SingingKeysPagination$Outbound` instead. */
  export type Outbound = SingingKeysPagination$Outbound;
}

export function singingKeysPaginationToJSON(
  singingKeysPagination: SingingKeysPagination,
): string {
  return JSON.stringify(
    SingingKeysPagination$outboundSchema.parse(singingKeysPagination),
  );
}

export function singingKeysPaginationFromJSON(
  jsonString: string,
): SafeParseResult<SingingKeysPagination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SingingKeysPagination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SingingKeysPagination' from JSON`,
  );
}
