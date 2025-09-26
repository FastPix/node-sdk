import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Contains details explaining why the request failed.
 */
export type TrialPlanRestrictionErrorError = {
  /**
   * HTTP status code indicating the nature of the error.
   */
  code?: number | undefined;
  /**
   * A short message summarizing the error.
   */
  message?: string | undefined;
  /**
   * A detailed explanation of the error indicating that the operation is restricted under the trial plan. This typically occurs when certain features are gated for paid users only.
   *
   * @remarks
   */
  description?: string | undefined;
};

/** @internal */
export const TrialPlanRestrictionErrorError$inboundSchema: z.ZodType<
  TrialPlanRestrictionErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type TrialPlanRestrictionErrorError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const TrialPlanRestrictionErrorError$outboundSchema: z.ZodType<
  TrialPlanRestrictionErrorError$Outbound,
  z.ZodTypeDef,
  TrialPlanRestrictionErrorError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrialPlanRestrictionErrorError$ {
  /** @deprecated use `TrialPlanRestrictionErrorError$inboundSchema` instead. */
  export const inboundSchema = TrialPlanRestrictionErrorError$inboundSchema;
  /** @deprecated use `TrialPlanRestrictionErrorError$outboundSchema` instead. */
  export const outboundSchema = TrialPlanRestrictionErrorError$outboundSchema;
  /** @deprecated use `TrialPlanRestrictionErrorError$Outbound` instead. */
  export type Outbound = TrialPlanRestrictionErrorError$Outbound;
}

export function trialPlanRestrictionErrorErrorToJSON(
  trialPlanRestrictionErrorError: TrialPlanRestrictionErrorError,
): string {
  return JSON.stringify(
    TrialPlanRestrictionErrorError$outboundSchema.parse(
      trialPlanRestrictionErrorError,
    ),
  );
}

export function trialPlanRestrictionErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<TrialPlanRestrictionErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrialPlanRestrictionErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrialPlanRestrictionErrorError' from JSON`,
  );
}
