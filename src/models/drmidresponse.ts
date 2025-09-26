import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type DrmIdResponse = {
  /**
   * The unique identifier of the DRM configuration.
   */
  id?: string | undefined;
};

/** @internal */
export const DrmIdResponse$inboundSchema: z.ZodType<
  DrmIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
});

/** @internal */
export type DrmIdResponse$Outbound = {
  id?: string | undefined;
};

/** @internal */
export const DrmIdResponse$outboundSchema: z.ZodType<
  DrmIdResponse$Outbound,
  z.ZodTypeDef,
  DrmIdResponse
> = z.object({
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DrmIdResponse$ {
  /** @deprecated use `DrmIdResponse$inboundSchema` instead. */
  export const inboundSchema = DrmIdResponse$inboundSchema;
  /** @deprecated use `DrmIdResponse$outboundSchema` instead. */
  export const outboundSchema = DrmIdResponse$outboundSchema;
  /** @deprecated use `DrmIdResponse$Outbound` instead. */
  export type Outbound = DrmIdResponse$Outbound;
}

export function drmIdResponseToJSON(drmIdResponse: DrmIdResponse): string {
  return JSON.stringify(DrmIdResponse$outboundSchema.parse(drmIdResponse));
}

export function drmIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<DrmIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DrmIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DrmIdResponse' from JSON`,
  );
}
