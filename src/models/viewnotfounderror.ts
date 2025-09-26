import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Returns the problem that has occured
 */
export type ViewNotFoundError = {
  /**
   * An error code indicating the type of the error.
   */
  code?: number | undefined;
  /**
   * A descriptive message providing more details for the error.
   */
  message?: string | undefined;
};

/** @internal */
export const ViewNotFoundError$inboundSchema: z.ZodType<
  ViewNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
});

/** @internal */
export type ViewNotFoundError$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
};

/** @internal */
export const ViewNotFoundError$outboundSchema: z.ZodType<
  ViewNotFoundError$Outbound,
  z.ZodTypeDef,
  ViewNotFoundError
> = z.object({
  code: z.number().optional(),
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ViewNotFoundError$ {
  /** @deprecated use `ViewNotFoundError$inboundSchema` instead. */
  export const inboundSchema = ViewNotFoundError$inboundSchema;
  /** @deprecated use `ViewNotFoundError$outboundSchema` instead. */
  export const outboundSchema = ViewNotFoundError$outboundSchema;
  /** @deprecated use `ViewNotFoundError$Outbound` instead. */
  export type Outbound = ViewNotFoundError$Outbound;
}

export function viewNotFoundErrorToJSON(
  viewNotFoundError: ViewNotFoundError,
): string {
  return JSON.stringify(
    ViewNotFoundError$outboundSchema.parse(viewNotFoundError),
  );
}

export function viewNotFoundErrorFromJSON(
  jsonString: string,
): SafeParseResult<ViewNotFoundError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ViewNotFoundError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ViewNotFoundError' from JSON`,
  );
}
