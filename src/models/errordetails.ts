import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * views affected by the specific errors.
 */
export type ErrorDetailsPercentage = number | number;

export type ErrorDetails = {
  /**
   * views affected by the specific errors.
   */
  percentage?: number | number | null | undefined;
  /**
   * Information about the specific error.
   */
  notes?: string | null | undefined;
  /**
   * error message or description.
   */
  message?: string | null | undefined;
  /**
   * The timestamp of when the error was last observed.
   */
  lastSeen?: string | null | undefined;
  /**
   * unique identifier for the specific error.
   */
  id?: string | null | undefined;
  /**
   * description of the specific error.
   */
  description?: string | null | undefined;
  /**
   * Number of occurrences of the specific error.
   */
  count?: number | null | undefined;
  /**
   * Error code associated with the specific error.
   */
  code?: string | null | undefined;
};

/** @internal */
export const ErrorDetailsPercentage$inboundSchema: z.ZodType<
  ErrorDetailsPercentage,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type ErrorDetailsPercentage$Outbound = number | number;

/** @internal */
export const ErrorDetailsPercentage$outboundSchema: z.ZodType<
  ErrorDetailsPercentage$Outbound,
  z.ZodTypeDef,
  ErrorDetailsPercentage
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorDetailsPercentage$ {
  /** @deprecated use `ErrorDetailsPercentage$inboundSchema` instead. */
  export const inboundSchema = ErrorDetailsPercentage$inboundSchema;
  /** @deprecated use `ErrorDetailsPercentage$outboundSchema` instead. */
  export const outboundSchema = ErrorDetailsPercentage$outboundSchema;
  /** @deprecated use `ErrorDetailsPercentage$Outbound` instead. */
  export type Outbound = ErrorDetailsPercentage$Outbound;
}

export function errorDetailsPercentageToJSON(
  errorDetailsPercentage: ErrorDetailsPercentage,
): string {
  return JSON.stringify(
    ErrorDetailsPercentage$outboundSchema.parse(errorDetailsPercentage),
  );
}

export function errorDetailsPercentageFromJSON(
  jsonString: string,
): SafeParseResult<ErrorDetailsPercentage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorDetailsPercentage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorDetailsPercentage' from JSON`,
  );
}

/** @internal */
export const ErrorDetails$inboundSchema: z.ZodType<
  ErrorDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  percentage: z.nullable(z.union([z.number().int(), z.number()])).optional(),
  notes: z.nullable(z.string()).optional(),
  message: z.nullable(z.string()).optional(),
  lastSeen: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  count: z.nullable(z.number().int()).optional(),
  code: z.nullable(z.string()).optional(),
});

/** @internal */
export type ErrorDetails$Outbound = {
  percentage?: number | number | null | undefined;
  notes?: string | null | undefined;
  message?: string | null | undefined;
  lastSeen?: string | null | undefined;
  id?: string | null | undefined;
  description?: string | null | undefined;
  count?: number | null | undefined;
  code?: string | null | undefined;
};

/** @internal */
export const ErrorDetails$outboundSchema: z.ZodType<
  ErrorDetails$Outbound,
  z.ZodTypeDef,
  ErrorDetails
> = z.object({
  percentage: z.nullable(z.union([z.number().int(), z.number()])).optional(),
  notes: z.nullable(z.string()).optional(),
  message: z.nullable(z.string()).optional(),
  lastSeen: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  count: z.nullable(z.number().int()).optional(),
  code: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorDetails$ {
  /** @deprecated use `ErrorDetails$inboundSchema` instead. */
  export const inboundSchema = ErrorDetails$inboundSchema;
  /** @deprecated use `ErrorDetails$outboundSchema` instead. */
  export const outboundSchema = ErrorDetails$outboundSchema;
  /** @deprecated use `ErrorDetails$Outbound` instead. */
  export type Outbound = ErrorDetails$Outbound;
}

export function errorDetailsToJSON(errorDetails: ErrorDetails): string {
  return JSON.stringify(ErrorDetails$outboundSchema.parse(errorDetails));
}

export function errorDetailsFromJSON(
  jsonString: string,
): SafeParseResult<ErrorDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorDetails' from JSON`,
  );
}
