import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetDataViewlistCurrentViewsGetTimeseriesViewsData = {
  /**
   * The timestamp for the interval (ISO 8601 format).
   */
  intervalTime?: Date | undefined;
  /**
   * Reserved for future metric values (currently null).
   */
  metricValue?: number | null | undefined;
  /**
   * Number of concurrent viewers at the given interval.
   */
  numberOfViews?: number | undefined;
};

/**
 * Successfully retrieved concurrent viewers timeseries.
 */
export type GetDataViewlistCurrentViewsGetTimeseriesViewsResponse = {
  /**
   * Indicates if the request was successful.
   */
  success?: boolean | undefined;
  /**
   * Time series data for concurrent viewers.
   */
  data?: Array<GetDataViewlistCurrentViewsGetTimeseriesViewsData> | undefined;
  /**
   * Start and end epoch timestamps (milliseconds) for the timeseries window.
   */
  timespan?: Array<number> | undefined;
};

/** @internal */
export const GetDataViewlistCurrentViewsGetTimeseriesViewsData$inboundSchema:
  z.ZodType<
    GetDataViewlistCurrentViewsGetTimeseriesViewsData,
    z.ZodTypeDef,
    unknown
  > = z.object({
    intervalTime: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    metricValue: z.nullable(z.number().int()).optional(),
    numberOfViews: z.number().int().optional(),
  });

/** @internal */
export type GetDataViewlistCurrentViewsGetTimeseriesViewsData$Outbound = {
  intervalTime?: string | undefined;
  metricValue?: number | null | undefined;
  numberOfViews?: number | undefined;
};

/** @internal */
export const GetDataViewlistCurrentViewsGetTimeseriesViewsData$outboundSchema:
  z.ZodType<
    GetDataViewlistCurrentViewsGetTimeseriesViewsData$Outbound,
    z.ZodTypeDef,
    GetDataViewlistCurrentViewsGetTimeseriesViewsData
  > = z.object({
    intervalTime: z.date().transform(v => v.toISOString()).optional(),
    metricValue: z.nullable(z.number().int()).optional(),
    numberOfViews: z.number().int().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDataViewlistCurrentViewsGetTimeseriesViewsData$ {
  /** @deprecated use `GetDataViewlistCurrentViewsGetTimeseriesViewsData$inboundSchema` instead. */
  export const inboundSchema =
    GetDataViewlistCurrentViewsGetTimeseriesViewsData$inboundSchema;
  /** @deprecated use `GetDataViewlistCurrentViewsGetTimeseriesViewsData$outboundSchema` instead. */
  export const outboundSchema =
    GetDataViewlistCurrentViewsGetTimeseriesViewsData$outboundSchema;
  /** @deprecated use `GetDataViewlistCurrentViewsGetTimeseriesViewsData$Outbound` instead. */
  export type Outbound =
    GetDataViewlistCurrentViewsGetTimeseriesViewsData$Outbound;
}

export function getDataViewlistCurrentViewsGetTimeseriesViewsDataToJSON(
  getDataViewlistCurrentViewsGetTimeseriesViewsData:
    GetDataViewlistCurrentViewsGetTimeseriesViewsData,
): string {
  return JSON.stringify(
    GetDataViewlistCurrentViewsGetTimeseriesViewsData$outboundSchema.parse(
      getDataViewlistCurrentViewsGetTimeseriesViewsData,
    ),
  );
}

export function getDataViewlistCurrentViewsGetTimeseriesViewsDataFromJSON(
  jsonString: string,
): SafeParseResult<
  GetDataViewlistCurrentViewsGetTimeseriesViewsData,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetDataViewlistCurrentViewsGetTimeseriesViewsData$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetDataViewlistCurrentViewsGetTimeseriesViewsData' from JSON`,
  );
}

/** @internal */
export const GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$inboundSchema:
  z.ZodType<
    GetDataViewlistCurrentViewsGetTimeseriesViewsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    success: z.boolean().optional(),
    data: z.array(
      z.lazy(() =>
        GetDataViewlistCurrentViewsGetTimeseriesViewsData$inboundSchema
      ),
    ).optional(),
    timespan: z.array(z.number().int()).optional(),
  });

/** @internal */
export type GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$Outbound = {
  success?: boolean | undefined;
  data?:
    | Array<GetDataViewlistCurrentViewsGetTimeseriesViewsData$Outbound>
    | undefined;
  timespan?: Array<number> | undefined;
};

/** @internal */
export const GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$outboundSchema:
  z.ZodType<
    GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$Outbound,
    z.ZodTypeDef,
    GetDataViewlistCurrentViewsGetTimeseriesViewsResponse
  > = z.object({
    success: z.boolean().optional(),
    data: z.array(
      z.lazy(() =>
        GetDataViewlistCurrentViewsGetTimeseriesViewsData$outboundSchema
      ),
    ).optional(),
    timespan: z.array(z.number().int()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$ {
  /** @deprecated use `GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$inboundSchema;
  /** @deprecated use `GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$outboundSchema;
  /** @deprecated use `GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$Outbound` instead. */
  export type Outbound =
    GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$Outbound;
}

export function getDataViewlistCurrentViewsGetTimeseriesViewsResponseToJSON(
  getDataViewlistCurrentViewsGetTimeseriesViewsResponse:
    GetDataViewlistCurrentViewsGetTimeseriesViewsResponse,
): string {
  return JSON.stringify(
    GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$outboundSchema.parse(
      getDataViewlistCurrentViewsGetTimeseriesViewsResponse,
    ),
  );
}

export function getDataViewlistCurrentViewsGetTimeseriesViewsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  GetDataViewlistCurrentViewsGetTimeseriesViewsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetDataViewlistCurrentViewsGetTimeseriesViewsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetDataViewlistCurrentViewsGetTimeseriesViewsResponse' from JSON`,
  );
}
