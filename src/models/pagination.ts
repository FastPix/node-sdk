import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Pagination organizes content into pages for better readability and navigation.
 */
export type Pagination = {
  /**
   * It gives the total number of media assets that are accessible overall.
   */
  totalRecords?: number | undefined;
  /**
   * Offset determines the current point for data retrieval within a paginated list.
   */
  currentOffset?: number | undefined;
  /**
   * The offset count is expressed as total records by limit
   */
  offsetCount?: number | undefined;
};

/** @internal */
export const Pagination$inboundSchema: z.ZodType<
  Pagination,
  z.ZodTypeDef,
  unknown
> = z.object({
  totalRecords: z.number().int().optional(),
  currentOffset: z.number().int().optional(),
  offsetCount: z.number().int().optional(),
});

/** @internal */
export type Pagination$Outbound = {
  totalRecords?: number | undefined;
  currentOffset?: number | undefined;
  offsetCount?: number | undefined;
};

/** @internal */
export const Pagination$outboundSchema: z.ZodType<
  Pagination$Outbound,
  z.ZodTypeDef,
  Pagination
> = z.object({
  totalRecords: z.number().int().optional(),
  currentOffset: z.number().int().optional(),
  offsetCount: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Pagination$ {
  /** @deprecated use `Pagination$inboundSchema` instead. */
  export const inboundSchema = Pagination$inboundSchema;
  /** @deprecated use `Pagination$outboundSchema` instead. */
  export const outboundSchema = Pagination$outboundSchema;
  /** @deprecated use `Pagination$Outbound` instead. */
  export type Outbound = Pagination$Outbound;
}

export function paginationToJSON(pagination: Pagination): string {
  return JSON.stringify(Pagination$outboundSchema.parse(pagination));
}

export function paginationFromJSON(
  jsonString: string,
): SafeParseResult<Pagination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Pagination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Pagination' from JSON`,
  );
}
