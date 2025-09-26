

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import {
  StreamAlreadyEnabledError,
  StreamAlreadyEnabledError$inboundSchema,
  StreamAlreadyEnabledError$Outbound,
  StreamAlreadyEnabledError$outboundSchema,
} from "./streamalreadyenablederror.js";
import {
  TrialPlanRestrictionError,
  TrialPlanRestrictionError$inboundSchema,
  TrialPlanRestrictionError$Outbound,
  TrialPlanRestrictionError$outboundSchema,
} from "./trialplanrestrictionerror.js";

/**
 * Bad Request – Stream is either already enabled or cannot be enabled on trial plan.
 */
export type BadRequest = TrialPlanRestrictionError | StreamAlreadyEnabledError;

/** @internal */
export const BadRequest$inboundSchema: z.ZodType<
  BadRequest,
  z.ZodTypeDef,
  unknown
> = z.union([
  TrialPlanRestrictionError$inboundSchema,
  StreamAlreadyEnabledError$inboundSchema,
]);

/** @internal */
export type BadRequest$Outbound =
  | TrialPlanRestrictionError$Outbound
  | StreamAlreadyEnabledError$Outbound;

/** @internal */
export const BadRequest$outboundSchema: z.ZodType<
  BadRequest$Outbound,
  z.ZodTypeDef,
  BadRequest
> = z.union([
  TrialPlanRestrictionError$outboundSchema,
  StreamAlreadyEnabledError$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequest$ {
  /** @deprecated use `BadRequest$inboundSchema` instead. */
  export const inboundSchema = BadRequest$inboundSchema;
  /** @deprecated use `BadRequest$outboundSchema` instead. */
  export const outboundSchema = BadRequest$outboundSchema;
  /** @deprecated use `BadRequest$Outbound` instead. */
  export type Outbound = BadRequest$Outbound;
}

export function badRequestToJSON(badRequest: BadRequest): string {
  return JSON.stringify(BadRequest$outboundSchema.parse(badRequest));
}

export function badRequestFromJSON(
  jsonString: string,
): SafeParseResult<BadRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BadRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BadRequest' from JSON`,
  );
}
