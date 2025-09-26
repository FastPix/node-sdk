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
 * Restrictions based on the user agent
 */
export type UserAgentRestrictions = {
  /**
   * Policy action type
   */
  defaultPolicy?: PolicyAction | undefined;
  /**
   * A list of user agents that are explicitly allowed access
   */
  allow?: Array<string> | undefined;
  /**
   * A list of user agents that are explicitly denied access
   */
  deny?: Array<string> | undefined;
};

/** @internal */
export const UserAgentRestrictions$inboundSchema: z.ZodType<
  UserAgentRestrictions,
  z.ZodTypeDef,
  unknown
> = z.object({
  defaultPolicy: PolicyAction$inboundSchema.optional(),
  allow: z.array(z.string()).optional(),
  deny: z.array(z.string()).optional(),
});

/** @internal */
export type UserAgentRestrictions$Outbound = {
  defaultPolicy?: string | undefined;
  allow?: Array<string> | undefined;
  deny?: Array<string> | undefined;
};

/** @internal */
export const UserAgentRestrictions$outboundSchema: z.ZodType<
  UserAgentRestrictions$Outbound,
  z.ZodTypeDef,
  UserAgentRestrictions
> = z.object({
  defaultPolicy: PolicyAction$outboundSchema.optional(),
  allow: z.array(z.string()).optional(),
  deny: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserAgentRestrictions$ {
  /** @deprecated use `UserAgentRestrictions$inboundSchema` instead. */
  export const inboundSchema = UserAgentRestrictions$inboundSchema;
  /** @deprecated use `UserAgentRestrictions$outboundSchema` instead. */
  export const outboundSchema = UserAgentRestrictions$outboundSchema;
  /** @deprecated use `UserAgentRestrictions$Outbound` instead. */
  export type Outbound = UserAgentRestrictions$Outbound;
}

export function userAgentRestrictionsToJSON(
  userAgentRestrictions: UserAgentRestrictions,
): string {
  return JSON.stringify(
    UserAgentRestrictions$outboundSchema.parse(userAgentRestrictions),
  );
}

export function userAgentRestrictionsFromJSON(
  jsonString: string,
): SafeParseResult<UserAgentRestrictions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserAgentRestrictions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserAgentRestrictions' from JSON`,
  );
}
