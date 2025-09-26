import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The list of value can be order in two ways DESC (Descending) or ASC (Ascending). In case not specified, by default it will be DESC.
 */
export const OrderBy = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The list of value can be order in two ways DESC (Descending) or ASC (Ascending). In case not specified, by default it will be DESC.
 */
export type OrderBy = ClosedEnum<typeof OrderBy>;

export type GetAllStreamsRequest = {
  /**
   * Limit specifies the maximum number of items to display per page.
   */
  limit?: number | undefined;
  /**
   * Offset determines the starting point for data retrieval within a paginated list.
   */
  offset?: number | undefined;
  /**
   * The list of value can be order in two ways DESC (Descending) or ASC (Ascending). In case not specified, by default it will be DESC.
   */
  orderBy?: OrderBy | undefined;
};

/** @internal */
export const OrderBy$inboundSchema: z.ZodNativeEnum<typeof OrderBy> = z
  .nativeEnum(OrderBy);

/** @internal */
export const OrderBy$outboundSchema: z.ZodNativeEnum<typeof OrderBy> =
  OrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderBy$ {
  /** @deprecated use `OrderBy$inboundSchema` instead. */
  export const inboundSchema = OrderBy$inboundSchema;
  /** @deprecated use `OrderBy$outboundSchema` instead. */
  export const outboundSchema = OrderBy$outboundSchema;
}

/** @internal */
export const GetAllStreamsRequest$inboundSchema: z.ZodType<
  GetAllStreamsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(10),
  offset: z.number().int().default(1),
  orderBy: OrderBy$inboundSchema.default("desc"),
});

/** @internal */
export type GetAllStreamsRequest$Outbound = {
  limit: number;
  offset: number;
  orderBy: string;
};

/** @internal */
export const GetAllStreamsRequest$outboundSchema: z.ZodType<
  GetAllStreamsRequest$Outbound,
  z.ZodTypeDef,
  GetAllStreamsRequest
> = z.object({
  limit: z.number().int().default(10),
  offset: z.number().int().default(1),
  orderBy: OrderBy$outboundSchema.default("desc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllStreamsRequest$ {
  /** @deprecated use `GetAllStreamsRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllStreamsRequest$inboundSchema;
  /** @deprecated use `GetAllStreamsRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllStreamsRequest$outboundSchema;
  /** @deprecated use `GetAllStreamsRequest$Outbound` instead. */
  export type Outbound = GetAllStreamsRequest$Outbound;
}

export function getAllStreamsRequestToJSON(
  getAllStreamsRequest: GetAllStreamsRequest,
): string {
  return JSON.stringify(
    GetAllStreamsRequest$outboundSchema.parse(getAllStreamsRequest),
  );
}

export function getAllStreamsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAllStreamsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllStreamsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllStreamsRequest' from JSON`,
  );
}
