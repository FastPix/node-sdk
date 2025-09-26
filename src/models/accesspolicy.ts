import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

/**
 * Access policy for media content
 */
export const AccessPolicy = {
  Public: "public",
  Private: "private",
  Drm: "drm",
} as const;
/**
 * Access policy for media content
 */
export type AccessPolicy = ClosedEnum<typeof AccessPolicy>;

/** @internal */
export const AccessPolicy$inboundSchema: z.ZodNativeEnum<typeof AccessPolicy> =
  z.nativeEnum(AccessPolicy);

/** @internal */
export const AccessPolicy$outboundSchema: z.ZodNativeEnum<typeof AccessPolicy> =
  AccessPolicy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccessPolicy$ {
  /** @deprecated use `AccessPolicy$inboundSchema` instead. */
  export const inboundSchema = AccessPolicy$inboundSchema;
  /** @deprecated use `AccessPolicy$outboundSchema` instead. */
  export const outboundSchema = AccessPolicy$outboundSchema;
}
