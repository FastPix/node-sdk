import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

/**
 * The values in the list can be arranged in two ways: DESC (Descending) or ASC (Ascending).
 */
export const SortOrder = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The values in the list can be arranged in two ways: DESC (Descending) or ASC (Ascending).
 */
export type SortOrder = ClosedEnum<typeof SortOrder>;

/** @internal */
export const SortOrder$inboundSchema: z.ZodNativeEnum<typeof SortOrder> = z
  .nativeEnum(SortOrder);

/** @internal */
export const SortOrder$outboundSchema: z.ZodNativeEnum<typeof SortOrder> =
  SortOrder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SortOrder$ {
  /** @deprecated use `SortOrder$inboundSchema` instead. */
  export const inboundSchema = SortOrder$inboundSchema;
  /** @deprecated use `SortOrder$outboundSchema` instead. */
  export const outboundSchema = SortOrder$outboundSchema;
}
