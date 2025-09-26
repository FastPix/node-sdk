import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type SimulcastUpdateRequest = {
  /**
   * When the value is set to false, the simulcast will be disabled for the given stream.
   */
  isEnabled?: boolean | undefined;
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key":"value"s pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const SimulcastUpdateRequest$inboundSchema: z.ZodType<
  SimulcastUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  isEnabled: z.boolean().optional(),
  metadata: z.record(z.string()).optional(),
});

/** @internal */
export type SimulcastUpdateRequest$Outbound = {
  isEnabled?: boolean | undefined;
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const SimulcastUpdateRequest$outboundSchema: z.ZodType<
  SimulcastUpdateRequest$Outbound,
  z.ZodTypeDef,
  SimulcastUpdateRequest
> = z.object({
  isEnabled: z.boolean().optional(),
  metadata: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SimulcastUpdateRequest$ {
  /** @deprecated use `SimulcastUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = SimulcastUpdateRequest$inboundSchema;
  /** @deprecated use `SimulcastUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = SimulcastUpdateRequest$outboundSchema;
  /** @deprecated use `SimulcastUpdateRequest$Outbound` instead. */
  export type Outbound = SimulcastUpdateRequest$Outbound;
}

export function simulcastUpdateRequestToJSON(
  simulcastUpdateRequest: SimulcastUpdateRequest,
): string {
  return JSON.stringify(
    SimulcastUpdateRequest$outboundSchema.parse(simulcastUpdateRequest),
  );
}

export function simulcastUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<SimulcastUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SimulcastUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SimulcastUpdateRequest' from JSON`,
  );
}
