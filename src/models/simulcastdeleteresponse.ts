import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type SimulcastdeleteResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
};

/** @internal */
export const SimulcastdeleteResponse$inboundSchema: z.ZodType<
  SimulcastdeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
});

/** @internal */
export type SimulcastdeleteResponse$Outbound = {
  success?: boolean | undefined;
};

/** @internal */
export const SimulcastdeleteResponse$outboundSchema: z.ZodType<
  SimulcastdeleteResponse$Outbound,
  z.ZodTypeDef,
  SimulcastdeleteResponse
> = z.object({
  success: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SimulcastdeleteResponse$ {
  /** @deprecated use `SimulcastdeleteResponse$inboundSchema` instead. */
  export const inboundSchema = SimulcastdeleteResponse$inboundSchema;
  /** @deprecated use `SimulcastdeleteResponse$outboundSchema` instead. */
  export const outboundSchema = SimulcastdeleteResponse$outboundSchema;
  /** @deprecated use `SimulcastdeleteResponse$Outbound` instead. */
  export type Outbound = SimulcastdeleteResponse$Outbound;
}

export function simulcastdeleteResponseToJSON(
  simulcastdeleteResponse: SimulcastdeleteResponse,
): string {
  return JSON.stringify(
    SimulcastdeleteResponse$outboundSchema.parse(simulcastdeleteResponse),
  );
}

export function simulcastdeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<SimulcastdeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SimulcastdeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SimulcastdeleteResponse' from JSON`,
  );
}
