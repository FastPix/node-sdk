import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Contains the view count details.
 */
export type ViewsCountResponseData = {
  /**
   * Number of views for the stream or resource.
   */
  views?: number | undefined;
};

export type ViewsCountResponse = {
  /**
   * Indicates whether the request was successful or not.
   */
  success?: boolean | undefined;
  /**
   * Contains the view count details.
   */
  data?: ViewsCountResponseData | undefined;
};

/** @internal */
export const ViewsCountResponseData$inboundSchema: z.ZodType<
  ViewsCountResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  views: z.number().int().optional(),
});

/** @internal */
export type ViewsCountResponseData$Outbound = {
  views?: number | undefined;
};

/** @internal */
export const ViewsCountResponseData$outboundSchema: z.ZodType<
  ViewsCountResponseData$Outbound,
  z.ZodTypeDef,
  ViewsCountResponseData
> = z.object({
  views: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ViewsCountResponseData$ {
  /** @deprecated use `ViewsCountResponseData$inboundSchema` instead. */
  export const inboundSchema = ViewsCountResponseData$inboundSchema;
  /** @deprecated use `ViewsCountResponseData$outboundSchema` instead. */
  export const outboundSchema = ViewsCountResponseData$outboundSchema;
  /** @deprecated use `ViewsCountResponseData$Outbound` instead. */
  export type Outbound = ViewsCountResponseData$Outbound;
}

export function viewsCountResponseDataToJSON(
  viewsCountResponseData: ViewsCountResponseData,
): string {
  return JSON.stringify(
    ViewsCountResponseData$outboundSchema.parse(viewsCountResponseData),
  );
}

export function viewsCountResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<ViewsCountResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ViewsCountResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ViewsCountResponseData' from JSON`,
  );
}

/** @internal */
export const ViewsCountResponse$inboundSchema: z.ZodType<
  ViewsCountResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => ViewsCountResponseData$inboundSchema).optional(),
});

/** @internal */
export type ViewsCountResponse$Outbound = {
  success?: boolean | undefined;
  data?: ViewsCountResponseData$Outbound | undefined;
};

/** @internal */
export const ViewsCountResponse$outboundSchema: z.ZodType<
  ViewsCountResponse$Outbound,
  z.ZodTypeDef,
  ViewsCountResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => ViewsCountResponseData$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ViewsCountResponse$ {
  /** @deprecated use `ViewsCountResponse$inboundSchema` instead. */
  export const inboundSchema = ViewsCountResponse$inboundSchema;
  /** @deprecated use `ViewsCountResponse$outboundSchema` instead. */
  export const outboundSchema = ViewsCountResponse$outboundSchema;
  /** @deprecated use `ViewsCountResponse$Outbound` instead. */
  export type Outbound = ViewsCountResponse$Outbound;
}

export function viewsCountResponseToJSON(
  viewsCountResponse: ViewsCountResponse,
): string {
  return JSON.stringify(
    ViewsCountResponse$outboundSchema.parse(viewsCountResponse),
  );
}

export function viewsCountResponseFromJSON(
  jsonString: string,
): SafeParseResult<ViewsCountResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ViewsCountResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ViewsCountResponse' from JSON`,
  );
}
