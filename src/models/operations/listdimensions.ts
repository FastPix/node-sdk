import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Get the list of Views
 */
export type ListDimensionsResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: Array<string> | undefined;
};

/** @internal */
export const ListDimensionsResponse$inboundSchema: z.ZodType<
  ListDimensionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.array(z.string()).optional(),
});

/** @internal */
export type ListDimensionsResponse$Outbound = {
  success?: boolean | undefined;
  data?: Array<string> | undefined;
};

/** @internal */
export const ListDimensionsResponse$outboundSchema: z.ZodType<
  ListDimensionsResponse$Outbound,
  z.ZodTypeDef,
  ListDimensionsResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDimensionsResponse$ {
  /** @deprecated use `ListDimensionsResponse$inboundSchema` instead. */
  export const inboundSchema = ListDimensionsResponse$inboundSchema;
  /** @deprecated use `ListDimensionsResponse$outboundSchema` instead. */
  export const outboundSchema = ListDimensionsResponse$outboundSchema;
  /** @deprecated use `ListDimensionsResponse$Outbound` instead. */
  export type Outbound = ListDimensionsResponse$Outbound;
}

export function listDimensionsResponseToJSON(
  listDimensionsResponse: ListDimensionsResponse,
): string {
  return JSON.stringify(
    ListDimensionsResponse$outboundSchema.parse(listDimensionsResponse),
  );
}

export function listDimensionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListDimensionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDimensionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDimensionsResponse' from JSON`,
  );
}
