import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Pagination organizes content into pages for better readability and navigation.
 */
export type LiveStreamPagination = {
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
export const LiveStreamPagination$inboundSchema: z.ZodType<
  LiveStreamPagination,
  z.ZodTypeDef,
  unknown
> = z.object({
  totalRecords: z.number().int().optional(),
  currentOffset: z.number().int().optional(),
  offsetCount: z.number().int().optional(),
});

/** @internal */
export type LiveStreamPagination$Outbound = {
  totalRecords?: number | undefined;
  currentOffset?: number | undefined;
  offsetCount?: number | undefined;
};

/** @internal */
export const LiveStreamPagination$outboundSchema: z.ZodType<
  LiveStreamPagination$Outbound,
  z.ZodTypeDef,
  LiveStreamPagination
> = z.object({
  totalRecords: z.number().int().optional(),
  currentOffset: z.number().int().optional(),
  offsetCount: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiveStreamPagination$ {
  /** @deprecated use `LiveStreamPagination$inboundSchema` instead. */
  export const inboundSchema = LiveStreamPagination$inboundSchema;
  /** @deprecated use `LiveStreamPagination$outboundSchema` instead. */
  export const outboundSchema = LiveStreamPagination$outboundSchema;
  /** @deprecated use `LiveStreamPagination$Outbound` instead. */
  export type Outbound = LiveStreamPagination$Outbound;
}

export function liveStreamPaginationToJSON(
  liveStreamPagination: LiveStreamPagination,
): string {
  return JSON.stringify(
    LiveStreamPagination$outboundSchema.parse(liveStreamPagination),
  );
}

export function liveStreamPaginationFromJSON(
  jsonString: string,
): SafeParseResult<LiveStreamPagination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LiveStreamPagination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LiveStreamPagination' from JSON`,
  );
}
