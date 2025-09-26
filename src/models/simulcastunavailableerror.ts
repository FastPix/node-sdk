import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Returns the problem that has occured.
 *
 * @remarks
 */
export type SimulcastUnavailableError = {
  /**
   * An error code indicating the type of the error.
   *
   * @remarks
   */
  code?: number | undefined;
  /**
   * A descriptive message providing more details for the error
   *
   * @remarks
   */
  message?: string | undefined;
  /**
   * A detailed explanation of the possible causes for the error.
   *
   * @remarks
   */
  description?: string | undefined;
};

/** @internal */
export const SimulcastUnavailableError$inboundSchema: z.ZodType<
  SimulcastUnavailableError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type SimulcastUnavailableError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const SimulcastUnavailableError$outboundSchema: z.ZodType<
  SimulcastUnavailableError$Outbound,
  z.ZodTypeDef,
  SimulcastUnavailableError
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SimulcastUnavailableError$ {
  /** @deprecated use `SimulcastUnavailableError$inboundSchema` instead. */
  export const inboundSchema = SimulcastUnavailableError$inboundSchema;
  /** @deprecated use `SimulcastUnavailableError$outboundSchema` instead. */
  export const outboundSchema = SimulcastUnavailableError$outboundSchema;
  /** @deprecated use `SimulcastUnavailableError$Outbound` instead. */
  export type Outbound = SimulcastUnavailableError$Outbound;
}

export function simulcastUnavailableErrorToJSON(
  simulcastUnavailableError: SimulcastUnavailableError,
): string {
  return JSON.stringify(
    SimulcastUnavailableError$outboundSchema.parse(simulcastUnavailableError),
  );
}

export function simulcastUnavailableErrorFromJSON(
  jsonString: string,
): SafeParseResult<SimulcastUnavailableError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SimulcastUnavailableError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SimulcastUnavailableError' from JSON`,
  );
}
