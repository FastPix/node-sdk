import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * views affected by the specific errors.
 */
export type TopErrorDetailsPercentage = number | number;

/**
 * percentage of unique viewers affected by the specific error.
 */
export type UniqueViewersEffectedPercentage = number | number;

export type TopErrorDetails = {
  /**
   * views affected by the specific errors.
   */
  percentage?: number | number | null | undefined;
  /**
   * percentage of unique viewers affected by the specific error.
   */
  uniqueViewersEffectedPercentage?: number | number | null | undefined;
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
export const TopErrorDetailsPercentage$inboundSchema: z.ZodType<
  TopErrorDetailsPercentage,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type TopErrorDetailsPercentage$Outbound = number | number;

/** @internal */
export const TopErrorDetailsPercentage$outboundSchema: z.ZodType<
  TopErrorDetailsPercentage$Outbound,
  z.ZodTypeDef,
  TopErrorDetailsPercentage
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TopErrorDetailsPercentage$ {
  /** @deprecated use `TopErrorDetailsPercentage$inboundSchema` instead. */
  export const inboundSchema = TopErrorDetailsPercentage$inboundSchema;
  /** @deprecated use `TopErrorDetailsPercentage$outboundSchema` instead. */
  export const outboundSchema = TopErrorDetailsPercentage$outboundSchema;
  /** @deprecated use `TopErrorDetailsPercentage$Outbound` instead. */
  export type Outbound = TopErrorDetailsPercentage$Outbound;
}

export function topErrorDetailsPercentageToJSON(
  topErrorDetailsPercentage: TopErrorDetailsPercentage,
): string {
  return JSON.stringify(
    TopErrorDetailsPercentage$outboundSchema.parse(topErrorDetailsPercentage),
  );
}

export function topErrorDetailsPercentageFromJSON(
  jsonString: string,
): SafeParseResult<TopErrorDetailsPercentage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TopErrorDetailsPercentage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TopErrorDetailsPercentage' from JSON`,
  );
}

/** @internal */
export const UniqueViewersEffectedPercentage$inboundSchema: z.ZodType<
  UniqueViewersEffectedPercentage,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type UniqueViewersEffectedPercentage$Outbound = number | number;

/** @internal */
export const UniqueViewersEffectedPercentage$outboundSchema: z.ZodType<
  UniqueViewersEffectedPercentage$Outbound,
  z.ZodTypeDef,
  UniqueViewersEffectedPercentage
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UniqueViewersEffectedPercentage$ {
  /** @deprecated use `UniqueViewersEffectedPercentage$inboundSchema` instead. */
  export const inboundSchema = UniqueViewersEffectedPercentage$inboundSchema;
  /** @deprecated use `UniqueViewersEffectedPercentage$outboundSchema` instead. */
  export const outboundSchema = UniqueViewersEffectedPercentage$outboundSchema;
  /** @deprecated use `UniqueViewersEffectedPercentage$Outbound` instead. */
  export type Outbound = UniqueViewersEffectedPercentage$Outbound;
}

export function uniqueViewersEffectedPercentageToJSON(
  uniqueViewersEffectedPercentage: UniqueViewersEffectedPercentage,
): string {
  return JSON.stringify(
    UniqueViewersEffectedPercentage$outboundSchema.parse(
      uniqueViewersEffectedPercentage,
    ),
  );
}

export function uniqueViewersEffectedPercentageFromJSON(
  jsonString: string,
): SafeParseResult<UniqueViewersEffectedPercentage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UniqueViewersEffectedPercentage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UniqueViewersEffectedPercentage' from JSON`,
  );
}

/** @internal */
export const TopErrorDetails$inboundSchema: z.ZodType<
  TopErrorDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  percentage: z.nullable(z.union([z.number().int(), z.number()])).optional(),
  uniqueViewersEffectedPercentage: z.nullable(
    z.union([z.number().int(), z.number()]),
  ).optional(),
  notes: z.nullable(z.string()).optional(),
  message: z.nullable(z.string()).optional(),
  lastSeen: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  count: z.nullable(z.number().int()).optional(),
  code: z.nullable(z.string()).optional(),
});

/** @internal */
export type TopErrorDetails$Outbound = {
  percentage?: number | number | null | undefined;
  uniqueViewersEffectedPercentage?: number | number | null | undefined;
  notes?: string | null | undefined;
  message?: string | null | undefined;
  lastSeen?: string | null | undefined;
  id?: string | null | undefined;
  description?: string | null | undefined;
  count?: number | null | undefined;
  code?: string | null | undefined;
};

/** @internal */
export const TopErrorDetails$outboundSchema: z.ZodType<
  TopErrorDetails$Outbound,
  z.ZodTypeDef,
  TopErrorDetails
> = z.object({
  percentage: z.nullable(z.union([z.number().int(), z.number()])).optional(),
  uniqueViewersEffectedPercentage: z.nullable(
    z.union([z.number().int(), z.number()]),
  ).optional(),
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
export namespace TopErrorDetails$ {
  /** @deprecated use `TopErrorDetails$inboundSchema` instead. */
  export const inboundSchema = TopErrorDetails$inboundSchema;
  /** @deprecated use `TopErrorDetails$outboundSchema` instead. */
  export const outboundSchema = TopErrorDetails$outboundSchema;
  /** @deprecated use `TopErrorDetails$Outbound` instead. */
  export type Outbound = TopErrorDetails$Outbound;
}

export function topErrorDetailsToJSON(
  topErrorDetails: TopErrorDetails,
): string {
  return JSON.stringify(TopErrorDetails$outboundSchema.parse(topErrorDetails));
}

export function topErrorDetailsFromJSON(
  jsonString: string,
): SafeParseResult<TopErrorDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TopErrorDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TopErrorDetails' from JSON`,
  );
}
