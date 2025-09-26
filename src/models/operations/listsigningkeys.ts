import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListSigningKeysRequest = {
  /**
   * Limit specifies the maximum number of items to display per page.
   */
  limit?: number | undefined;
  /**
   * It is used for pagination, indicating the starting point for fetching data.
   */
  offset?: number | undefined;
};

/** @internal */
export const ListSigningKeysRequest$inboundSchema: z.ZodType<
  ListSigningKeysRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().default(10),
  offset: z.number().default(1),
});

/** @internal */
export type ListSigningKeysRequest$Outbound = {
  limit: number;
  offset: number;
};

/** @internal */
export const ListSigningKeysRequest$outboundSchema: z.ZodType<
  ListSigningKeysRequest$Outbound,
  z.ZodTypeDef,
  ListSigningKeysRequest
> = z.object({
  limit: z.number().default(10),
  offset: z.number().default(1),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListSigningKeysRequest$ {
  /** @deprecated use `ListSigningKeysRequest$inboundSchema` instead. */
  export const inboundSchema = ListSigningKeysRequest$inboundSchema;
  /** @deprecated use `ListSigningKeysRequest$outboundSchema` instead. */
  export const outboundSchema = ListSigningKeysRequest$outboundSchema;
  /** @deprecated use `ListSigningKeysRequest$Outbound` instead. */
  export type Outbound = ListSigningKeysRequest$Outbound;
}

export function listSigningKeysRequestToJSON(
  listSigningKeysRequest: ListSigningKeysRequest,
): string {
  return JSON.stringify(
    ListSigningKeysRequest$outboundSchema.parse(listSigningKeysRequest),
  );
}

export function listSigningKeysRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListSigningKeysRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListSigningKeysRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListSigningKeysRequest' from JSON`,
  );
}
