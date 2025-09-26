import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type NotFoundErrorError = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const NotFoundErrorError$inboundSchema: z.ZodType<
  NotFoundErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type NotFoundErrorError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const NotFoundErrorError$outboundSchema: z.ZodType<
  NotFoundErrorError$Outbound,
  z.ZodTypeDef,
  NotFoundErrorError
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFoundErrorError$ {
  /** @deprecated use `NotFoundErrorError$inboundSchema` instead. */
  export const inboundSchema = NotFoundErrorError$inboundSchema;
  /** @deprecated use `NotFoundErrorError$outboundSchema` instead. */
  export const outboundSchema = NotFoundErrorError$outboundSchema;
  /** @deprecated use `NotFoundErrorError$Outbound` instead. */
  export type Outbound = NotFoundErrorError$Outbound;
}

export function notFoundErrorErrorToJSON(
  notFoundErrorError: NotFoundErrorError,
): string {
  return JSON.stringify(
    NotFoundErrorError$outboundSchema.parse(notFoundErrorError),
  );
}

export function notFoundErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<NotFoundErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotFoundErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotFoundErrorError' from JSON`,
  );
}
