import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

/**
 * Basic access policy for media content
 */
export const BasicAccessPolicy = {
  Public: "public",
  Private: "private",
} as const;
/**
 * Basic access policy for media content
 */
export type BasicAccessPolicy = ClosedEnum<typeof BasicAccessPolicy>;

/** @internal */
export const BasicAccessPolicy$inboundSchema: z.ZodNativeEnum<
  typeof BasicAccessPolicy
> = z.nativeEnum(BasicAccessPolicy);

/** @internal */
export const BasicAccessPolicy$outboundSchema: z.ZodNativeEnum<
  typeof BasicAccessPolicy
> = BasicAccessPolicy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BasicAccessPolicy$ {
  /** @deprecated use `BasicAccessPolicy$inboundSchema` instead. */
  export const inboundSchema = BasicAccessPolicy$inboundSchema;
  /** @deprecated use `BasicAccessPolicy$outboundSchema` instead. */
  export const outboundSchema = BasicAccessPolicy$outboundSchema;
}
