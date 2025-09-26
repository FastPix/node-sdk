import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

/**
 * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
 *
 * @remarks
 */
export const ListErrorsTimespan = {
  Sixtyminutes: "60:minutes",
  Sixhours: "6:hours",
  TwentyFourhours: "24:hours",
  Threedays: "3:days",
  Sevendays: "7:days",
  Thirtydays: "30:days",
} as const;
/**
 * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
 *
 * @remarks
 */
export type ListErrorsTimespan = ClosedEnum<typeof ListErrorsTimespan>;

export type ListErrorsRequest = {
  /**
   * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
   *
   * @remarks
   */
  timespan: ListErrorsTimespan;
  /**
   * Pass the dimensions and their corresponding values you want to filter the views by. For excluding the values in the filter we can pass '!' before the filter value. The list of filters can be obtained from list of dimensions endpoint.
   *
   * @remarks
   * Example Values : [ browser_name:Chrome , os_name:macOS , device_name:Galaxy ]
   */
  filterby?: string | undefined;
  /**
   * Pass the limit to display only the rows specified by the value for top errors.
   *
   * @remarks
   */
  limit?: number | undefined;
};

/**
 * Displays the result of the request.
 */
export type ListErrorsData = {
  /**
   * Retrieves a list of errors that have occurred in the system.
   */
  errors?: Array<models.ErrorDetails> | undefined;
  /**
   * Retrieves a list of errors that have occurred most frequently in the system, ranked by their count of occurrences.
   */
  topErrors?: Array<models.TopErrorDetails> | undefined;
};

/**
 * Get filter/ dimension value details by dimension name.
 */
export type ListErrorsResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: ListErrorsData | undefined;
  /**
   * The timeframe from and to details displayed in the form of unix epoch timestamps.
   *
   * @remarks
   */
  timespan?: Array<number> | undefined;
};

/** @internal */
export const ListErrorsTimespan$inboundSchema: z.ZodNativeEnum<
  typeof ListErrorsTimespan
> = z.nativeEnum(ListErrorsTimespan);

/** @internal */
export const ListErrorsTimespan$outboundSchema: z.ZodNativeEnum<
  typeof ListErrorsTimespan
> = ListErrorsTimespan$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListErrorsTimespan$ {
  /** @deprecated use `ListErrorsTimespan$inboundSchema` instead. */
  export const inboundSchema = ListErrorsTimespan$inboundSchema;
  /** @deprecated use `ListErrorsTimespan$outboundSchema` instead. */
  export const outboundSchema = ListErrorsTimespan$outboundSchema;
}

/** @internal */
export const ListErrorsRequest$inboundSchema: z.ZodType<
  ListErrorsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "timespan[]": ListErrorsTimespan$inboundSchema,
  "filterby[]": z.string().optional(),
  limit: z.number().int().default(1),
}).transform((v) => {
  return remap$(v, {
    "timespan[]": "timespan",
    "filterby[]": "filterby",
  });
});

/** @internal */
export type ListErrorsRequest$Outbound = {
  "timespan[]": string;
  "filterby[]"?: string | undefined;
  limit: number;
};

/** @internal */
export const ListErrorsRequest$outboundSchema: z.ZodType<
  ListErrorsRequest$Outbound,
  z.ZodTypeDef,
  ListErrorsRequest
> = z.object({
  timespan: ListErrorsTimespan$outboundSchema,
  filterby: z.string().optional(),
  limit: z.number().int().default(1),
}).transform((v) => {
  return remap$(v, {
    timespan: "timespan[]",
    filterby: "filterby[]",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListErrorsRequest$ {
  /** @deprecated use `ListErrorsRequest$inboundSchema` instead. */
  export const inboundSchema = ListErrorsRequest$inboundSchema;
  /** @deprecated use `ListErrorsRequest$outboundSchema` instead. */
  export const outboundSchema = ListErrorsRequest$outboundSchema;
  /** @deprecated use `ListErrorsRequest$Outbound` instead. */
  export type Outbound = ListErrorsRequest$Outbound;
}

export function listErrorsRequestToJSON(
  listErrorsRequest: ListErrorsRequest,
): string {
  return JSON.stringify(
    ListErrorsRequest$outboundSchema.parse(listErrorsRequest),
  );
}

export function listErrorsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListErrorsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListErrorsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListErrorsRequest' from JSON`,
  );
}

/** @internal */
export const ListErrorsData$inboundSchema: z.ZodType<
  ListErrorsData,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(models.ErrorDetails$inboundSchema).optional(),
  topErrors: z.array(models.TopErrorDetails$inboundSchema).optional(),
});

/** @internal */
export type ListErrorsData$Outbound = {
  errors?: Array<models.ErrorDetails$Outbound> | undefined;
  topErrors?: Array<models.TopErrorDetails$Outbound> | undefined;
};

/** @internal */
export const ListErrorsData$outboundSchema: z.ZodType<
  ListErrorsData$Outbound,
  z.ZodTypeDef,
  ListErrorsData
> = z.object({
  errors: z.array(models.ErrorDetails$outboundSchema).optional(),
  topErrors: z.array(models.TopErrorDetails$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListErrorsData$ {
  /** @deprecated use `ListErrorsData$inboundSchema` instead. */
  export const inboundSchema = ListErrorsData$inboundSchema;
  /** @deprecated use `ListErrorsData$outboundSchema` instead. */
  export const outboundSchema = ListErrorsData$outboundSchema;
  /** @deprecated use `ListErrorsData$Outbound` instead. */
  export type Outbound = ListErrorsData$Outbound;
}

export function listErrorsDataToJSON(listErrorsData: ListErrorsData): string {
  return JSON.stringify(ListErrorsData$outboundSchema.parse(listErrorsData));
}

export function listErrorsDataFromJSON(
  jsonString: string,
): SafeParseResult<ListErrorsData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListErrorsData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListErrorsData' from JSON`,
  );
}

/** @internal */
export const ListErrorsResponse$inboundSchema: z.ZodType<
  ListErrorsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => ListErrorsData$inboundSchema).optional(),
  timespan: z.array(z.number().int()).optional(),
});

/** @internal */
export type ListErrorsResponse$Outbound = {
  success?: boolean | undefined;
  data?: ListErrorsData$Outbound | undefined;
  timespan?: Array<number> | undefined;
};

/** @internal */
export const ListErrorsResponse$outboundSchema: z.ZodType<
  ListErrorsResponse$Outbound,
  z.ZodTypeDef,
  ListErrorsResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => ListErrorsData$outboundSchema).optional(),
  timespan: z.array(z.number().int()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListErrorsResponse$ {
  /** @deprecated use `ListErrorsResponse$inboundSchema` instead. */
  export const inboundSchema = ListErrorsResponse$inboundSchema;
  /** @deprecated use `ListErrorsResponse$outboundSchema` instead. */
  export const outboundSchema = ListErrorsResponse$outboundSchema;
  /** @deprecated use `ListErrorsResponse$Outbound` instead. */
  export type Outbound = ListErrorsResponse$Outbound;
}

export function listErrorsResponseToJSON(
  listErrorsResponse: ListErrorsResponse,
): string {
  return JSON.stringify(
    ListErrorsResponse$outboundSchema.parse(listErrorsResponse),
  );
}

export function listErrorsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListErrorsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListErrorsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListErrorsResponse' from JSON`,
  );
}
