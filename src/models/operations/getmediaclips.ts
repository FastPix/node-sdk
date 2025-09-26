import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type GetMediaClipsRequest = {
  /**
   * The unique identifier of the source media.
   */
  sourceMediaId: string;
  /**
   * Offset determines the starting point for data retrieval within a paginated list.
   */
  offset?: number | undefined;
  /**
   * The number of media clips to retrieve per request.
   */
  limit?: number | undefined;
  /**
   * The values in the list can be arranged in two ways DESC (Descending) or ASC (Ascending).
   */
  orderBy?: models.SortOrder | undefined;
};

/** @internal */
export const GetMediaClipsRequest$inboundSchema: z.ZodType<
  GetMediaClipsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourceMediaId: z.string(),
  offset: z.number().int().default(1),
  limit: z.number().int().default(10),
  orderBy: models.SortOrder$inboundSchema.default("desc"),
});

/** @internal */
export type GetMediaClipsRequest$Outbound = {
  sourceMediaId: string;
  offset: number;
  limit: number;
  orderBy: string;
};

/** @internal */
export const GetMediaClipsRequest$outboundSchema: z.ZodType<
  GetMediaClipsRequest$Outbound,
  z.ZodTypeDef,
  GetMediaClipsRequest
> = z.object({
  sourceMediaId: z.string(),
  offset: z.number().int().default(1),
  limit: z.number().int().default(10),
  orderBy: models.SortOrder$outboundSchema.default("desc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMediaClipsRequest$ {
  /** @deprecated use `GetMediaClipsRequest$inboundSchema` instead. */
  export const inboundSchema = GetMediaClipsRequest$inboundSchema;
  /** @deprecated use `GetMediaClipsRequest$outboundSchema` instead. */
  export const outboundSchema = GetMediaClipsRequest$outboundSchema;
  /** @deprecated use `GetMediaClipsRequest$Outbound` instead. */
  export type Outbound = GetMediaClipsRequest$Outbound;
}

export function getMediaClipsRequestToJSON(
  getMediaClipsRequest: GetMediaClipsRequest,
): string {
  return JSON.stringify(
    GetMediaClipsRequest$outboundSchema.parse(getMediaClipsRequest),
  );
}

export function getMediaClipsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMediaClipsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMediaClipsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMediaClipsRequest' from JSON`,
  );
}
