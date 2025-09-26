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
export const ListByTopContentTimespan = {
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
export type ListByTopContentTimespan = ClosedEnum<
  typeof ListByTopContentTimespan
>;

export type ListByTopContentRequest = {
  /**
   * This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.
   *
   * @remarks
   */
  timespan: ListByTopContentTimespan;
  /**
   * Pass the dimensions and their corresponding values you want to filter the views by. For excluding the values in the filter we can pass '!' before the filter value. The list of filters can be obtained from list of dimensions endpoint.
   *
   * @remarks
   * Example Values : [ browser_name:Chrome , os_name:macOS , device_name:Galaxy ]
   */
  filterby?: string | undefined;
  /**
   * Pass the limit to display only the rows specified by the value.
   *
   * @remarks
   */
  limit?: number | undefined;
};

/**
 * Get the list of Views
 */
export type ListByTopContentResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: Array<models.ViewsByTopContentDetails> | undefined;
};

/** @internal */
export const ListByTopContentTimespan$inboundSchema: z.ZodNativeEnum<
  typeof ListByTopContentTimespan
> = z.nativeEnum(ListByTopContentTimespan);

/** @internal */
export const ListByTopContentTimespan$outboundSchema: z.ZodNativeEnum<
  typeof ListByTopContentTimespan
> = ListByTopContentTimespan$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListByTopContentTimespan$ {
  /** @deprecated use `ListByTopContentTimespan$inboundSchema` instead. */
  export const inboundSchema = ListByTopContentTimespan$inboundSchema;
  /** @deprecated use `ListByTopContentTimespan$outboundSchema` instead. */
  export const outboundSchema = ListByTopContentTimespan$outboundSchema;
}

/** @internal */
export const ListByTopContentRequest$inboundSchema: z.ZodType<
  ListByTopContentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "timespan[]": ListByTopContentTimespan$inboundSchema,
  "filterby[]": z.string().optional(),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    "timespan[]": "timespan",
    "filterby[]": "filterby",
  });
});

/** @internal */
export type ListByTopContentRequest$Outbound = {
  "timespan[]": string;
  "filterby[]"?: string | undefined;
  limit: number;
};

/** @internal */
export const ListByTopContentRequest$outboundSchema: z.ZodType<
  ListByTopContentRequest$Outbound,
  z.ZodTypeDef,
  ListByTopContentRequest
> = z.object({
  timespan: ListByTopContentTimespan$outboundSchema,
  filterby: z.string().optional(),
  limit: z.number().int().default(10),
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
export namespace ListByTopContentRequest$ {
  /** @deprecated use `ListByTopContentRequest$inboundSchema` instead. */
  export const inboundSchema = ListByTopContentRequest$inboundSchema;
  /** @deprecated use `ListByTopContentRequest$outboundSchema` instead. */
  export const outboundSchema = ListByTopContentRequest$outboundSchema;
  /** @deprecated use `ListByTopContentRequest$Outbound` instead. */
  export type Outbound = ListByTopContentRequest$Outbound;
}

export function listByTopContentRequestToJSON(
  listByTopContentRequest: ListByTopContentRequest,
): string {
  return JSON.stringify(
    ListByTopContentRequest$outboundSchema.parse(listByTopContentRequest),
  );
}

export function listByTopContentRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListByTopContentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListByTopContentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListByTopContentRequest' from JSON`,
  );
}

/** @internal */
export const ListByTopContentResponse$inboundSchema: z.ZodType<
  ListByTopContentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.array(models.ViewsByTopContentDetails$inboundSchema).optional(),
});

/** @internal */
export type ListByTopContentResponse$Outbound = {
  success?: boolean | undefined;
  data?: Array<models.ViewsByTopContentDetails$Outbound> | undefined;
};

/** @internal */
export const ListByTopContentResponse$outboundSchema: z.ZodType<
  ListByTopContentResponse$Outbound,
  z.ZodTypeDef,
  ListByTopContentResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.array(models.ViewsByTopContentDetails$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListByTopContentResponse$ {
  /** @deprecated use `ListByTopContentResponse$inboundSchema` instead. */
  export const inboundSchema = ListByTopContentResponse$inboundSchema;
  /** @deprecated use `ListByTopContentResponse$outboundSchema` instead. */
  export const outboundSchema = ListByTopContentResponse$outboundSchema;
  /** @deprecated use `ListByTopContentResponse$Outbound` instead. */
  export type Outbound = ListByTopContentResponse$Outbound;
}

export function listByTopContentResponseToJSON(
  listByTopContentResponse: ListByTopContentResponse,
): string {
  return JSON.stringify(
    ListByTopContentResponse$outboundSchema.parse(listByTopContentResponse),
  );
}

export function listByTopContentResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListByTopContentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListByTopContentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListByTopContentResponse' from JSON`,
  );
}
