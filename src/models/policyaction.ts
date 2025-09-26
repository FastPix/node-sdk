import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

/**
 * Policy action type
 */
export const PolicyAction = {
  Allow: "allow",
  Deny: "deny",
} as const;
/**
 * Policy action type
 */
export type PolicyAction = ClosedEnum<typeof PolicyAction>;

/** @internal */
export const PolicyAction$inboundSchema: z.ZodNativeEnum<typeof PolicyAction> =
  z.nativeEnum(PolicyAction);

/** @internal */
export const PolicyAction$outboundSchema: z.ZodNativeEnum<typeof PolicyAction> =
  PolicyAction$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PolicyAction$ {
  /** @deprecated use `PolicyAction$inboundSchema` instead. */
  export const inboundSchema = PolicyAction$inboundSchema;
  /** @deprecated use `PolicyAction$outboundSchema` instead. */
  export const outboundSchema = PolicyAction$outboundSchema;
}
