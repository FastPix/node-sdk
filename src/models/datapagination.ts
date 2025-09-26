import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Pagination organizes content into pages for better readability and navigation.
 */
export type DataPagination = {
  /**
   * The total number of records retrieved within the timeframe.
   *
   * @remarks
   */
  totalRecords?: number | undefined;
  /**
   * The current offset value.
   *
   * @remarks
   *
   * Default: 1
   */
  currentOffset?: number | undefined;
  /**
   * The total number of offsets based on limit.
   *
   * @remarks
   */
  offsetCount?: number | undefined;
};

/** @internal */
export const DataPagination$inboundSchema: z.ZodType<
  DataPagination,
  z.ZodTypeDef,
  unknown
> = z.object({
  totalRecords: z.number().int().optional(),
  currentOffset: z.number().int().optional(),
  offsetCount: z.number().int().optional(),
});

/** @internal */
export type DataPagination$Outbound = {
  totalRecords?: number | undefined;
  currentOffset?: number | undefined;
  offsetCount?: number | undefined;
};

/** @internal */
export const DataPagination$outboundSchema: z.ZodType<
  DataPagination$Outbound,
  z.ZodTypeDef,
  DataPagination
> = z.object({
  totalRecords: z.number().int().optional(),
  currentOffset: z.number().int().optional(),
  offsetCount: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataPagination$ {
  /** @deprecated use `DataPagination$inboundSchema` instead. */
  export const inboundSchema = DataPagination$inboundSchema;
  /** @deprecated use `DataPagination$outboundSchema` instead. */
  export const outboundSchema = DataPagination$outboundSchema;
  /** @deprecated use `DataPagination$Outbound` instead. */
  export type Outbound = DataPagination$Outbound;
}

export function dataPaginationToJSON(dataPagination: DataPagination): string {
  return JSON.stringify(DataPagination$outboundSchema.parse(dataPagination));
}

export function dataPaginationFromJSON(
  jsonString: string,
): SafeParseResult<DataPagination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataPagination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataPagination' from JSON`,
  );
}
