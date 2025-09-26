import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type NamedEntitiesResponse = {
  mediaId?: string | undefined;
  isGeneratedNamedEntities?: boolean | undefined;
};

/** @internal */
export const NamedEntitiesResponse$inboundSchema: z.ZodType<
  NamedEntitiesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string().optional(),
  isGeneratedNamedEntities: z.boolean().optional(),
});

/** @internal */
export type NamedEntitiesResponse$Outbound = {
  mediaId?: string | undefined;
  isGeneratedNamedEntities?: boolean | undefined;
};

/** @internal */
export const NamedEntitiesResponse$outboundSchema: z.ZodType<
  NamedEntitiesResponse$Outbound,
  z.ZodTypeDef,
  NamedEntitiesResponse
> = z.object({
  mediaId: z.string().optional(),
  isGeneratedNamedEntities: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NamedEntitiesResponse$ {
  /** @deprecated use `NamedEntitiesResponse$inboundSchema` instead. */
  export const inboundSchema = NamedEntitiesResponse$inboundSchema;
  /** @deprecated use `NamedEntitiesResponse$outboundSchema` instead. */
  export const outboundSchema = NamedEntitiesResponse$outboundSchema;
  /** @deprecated use `NamedEntitiesResponse$Outbound` instead. */
  export type Outbound = NamedEntitiesResponse$Outbound;
}

export function namedEntitiesResponseToJSON(
  namedEntitiesResponse: NamedEntitiesResponse,
): string {
  return JSON.stringify(
    NamedEntitiesResponse$outboundSchema.parse(namedEntitiesResponse),
  );
}

export function namedEntitiesResponseFromJSON(
  jsonString: string,
): SafeParseResult<NamedEntitiesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NamedEntitiesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NamedEntitiesResponse' from JSON`,
  );
}
