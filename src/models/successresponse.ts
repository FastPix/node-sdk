import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type SuccessResponseData = {};

export type SuccessResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success: boolean;
  /**
   * Array of response data
   */
  data: Array<SuccessResponseData>;
};

/** @internal */
export const SuccessResponseData$inboundSchema: z.ZodType<
  SuccessResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SuccessResponseData$Outbound = {};

/** @internal */
export const SuccessResponseData$outboundSchema: z.ZodType<
  SuccessResponseData$Outbound,
  z.ZodTypeDef,
  SuccessResponseData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SuccessResponseData$ {
  /** @deprecated use `SuccessResponseData$inboundSchema` instead. */
  export const inboundSchema = SuccessResponseData$inboundSchema;
  /** @deprecated use `SuccessResponseData$outboundSchema` instead. */
  export const outboundSchema = SuccessResponseData$outboundSchema;
  /** @deprecated use `SuccessResponseData$Outbound` instead. */
  export type Outbound = SuccessResponseData$Outbound;
}

export function successResponseDataToJSON(
  successResponseData: SuccessResponseData,
): string {
  return JSON.stringify(
    SuccessResponseData$outboundSchema.parse(successResponseData),
  );
}

export function successResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<SuccessResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SuccessResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SuccessResponseData' from JSON`,
  );
}

/** @internal */
export const SuccessResponse$inboundSchema: z.ZodType<
  SuccessResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean(),
  data: z.array(z.lazy(() => SuccessResponseData$inboundSchema)),
});

/** @internal */
export type SuccessResponse$Outbound = {
  success: boolean;
  data: Array<SuccessResponseData$Outbound>;
};

/** @internal */
export const SuccessResponse$outboundSchema: z.ZodType<
  SuccessResponse$Outbound,
  z.ZodTypeDef,
  SuccessResponse
> = z.object({
  success: z.boolean(),
  data: z.array(z.lazy(() => SuccessResponseData$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SuccessResponse$ {
  /** @deprecated use `SuccessResponse$inboundSchema` instead. */
  export const inboundSchema = SuccessResponse$inboundSchema;
  /** @deprecated use `SuccessResponse$outboundSchema` instead. */
  export const outboundSchema = SuccessResponse$outboundSchema;
  /** @deprecated use `SuccessResponse$Outbound` instead. */
  export type Outbound = SuccessResponse$Outbound;
}

export function successResponseToJSON(
  successResponse: SuccessResponse,
): string {
  return JSON.stringify(SuccessResponse$outboundSchema.parse(successResponse));
}

export function successResponseFromJSON(
  jsonString: string,
): SafeParseResult<SuccessResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SuccessResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SuccessResponse' from JSON`,
  );
}
