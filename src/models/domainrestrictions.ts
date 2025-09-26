import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  PolicyAction,
  PolicyAction$inboundSchema,
  PolicyAction$outboundSchema,
} from "./policyaction.js";

/**
 * Restrictions based on the originating domain of a request
 */
export type DomainRestrictions = {
  /**
   * Policy action type
   */
  defaultPolicy?: PolicyAction | undefined;
  /**
   * A list of domain names or patterns that are explicitly allowed access
   */
  allow?: Array<string> | undefined;
  /**
   * A list of domain names or patterns that are explicitly denied access
   */
  deny?: Array<string> | undefined;
};

/** @internal */
export const DomainRestrictions$inboundSchema: z.ZodType<
  DomainRestrictions,
  z.ZodTypeDef,
  unknown
> = z.object({
  defaultPolicy: PolicyAction$inboundSchema.optional(),
  allow: z.array(z.string()).optional(),
  deny: z.array(z.string()).optional(),
});

/** @internal */
export type DomainRestrictions$Outbound = {
  defaultPolicy?: string | undefined;
  allow?: Array<string> | undefined;
  deny?: Array<string> | undefined;
};

/** @internal */
export const DomainRestrictions$outboundSchema: z.ZodType<
  DomainRestrictions$Outbound,
  z.ZodTypeDef,
  DomainRestrictions
> = z.object({
  defaultPolicy: PolicyAction$outboundSchema.optional(),
  allow: z.array(z.string()).optional(),
  deny: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DomainRestrictions$ {
  /** @deprecated use `DomainRestrictions$inboundSchema` instead. */
  export const inboundSchema = DomainRestrictions$inboundSchema;
  /** @deprecated use `DomainRestrictions$outboundSchema` instead. */
  export const outboundSchema = DomainRestrictions$outboundSchema;
  /** @deprecated use `DomainRestrictions$Outbound` instead. */
  export type Outbound = DomainRestrictions$Outbound;
}

export function domainRestrictionsToJSON(
  domainRestrictions: DomainRestrictions,
): string {
  return JSON.stringify(
    DomainRestrictions$outboundSchema.parse(domainRestrictions),
  );
}

export function domainRestrictionsFromJSON(
  jsonString: string,
): SafeParseResult<DomainRestrictions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DomainRestrictions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DomainRestrictions' from JSON`,
  );
}
