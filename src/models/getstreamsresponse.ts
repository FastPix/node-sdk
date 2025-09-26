import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  GetCreateLiveStreamResponseDTO,
  GetCreateLiveStreamResponseDTO$inboundSchema,
  GetCreateLiveStreamResponseDTO$Outbound,
  GetCreateLiveStreamResponseDTO$outboundSchema,
} from "./getcreatelivestreamresponsedto.js";
import {
  LiveStreamPagination,
  LiveStreamPagination$inboundSchema,
  LiveStreamPagination$Outbound,
  LiveStreamPagination$outboundSchema,
} from "./livestreampagination.js";

/**
 * Displays the result of the request.
 */
export type GetStreamsResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: Array<GetCreateLiveStreamResponseDTO> | undefined;
  /**
   * Pagination organizes content into pages for better readability and navigation.
   */
  pagination?: LiveStreamPagination | undefined;
};

/** @internal */
export const GetStreamsResponse$inboundSchema: z.ZodType<
  GetStreamsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.array(GetCreateLiveStreamResponseDTO$inboundSchema).optional(),
  pagination: LiveStreamPagination$inboundSchema.optional(),
});

/** @internal */
export type GetStreamsResponse$Outbound = {
  success?: boolean | undefined;
  data?: Array<GetCreateLiveStreamResponseDTO$Outbound> | undefined;
  pagination?: LiveStreamPagination$Outbound | undefined;
};

/** @internal */
export const GetStreamsResponse$outboundSchema: z.ZodType<
  GetStreamsResponse$Outbound,
  z.ZodTypeDef,
  GetStreamsResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.array(GetCreateLiveStreamResponseDTO$outboundSchema).optional(),
  pagination: LiveStreamPagination$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStreamsResponse$ {
  /** @deprecated use `GetStreamsResponse$inboundSchema` instead. */
  export const inboundSchema = GetStreamsResponse$inboundSchema;
  /** @deprecated use `GetStreamsResponse$outboundSchema` instead. */
  export const outboundSchema = GetStreamsResponse$outboundSchema;
  /** @deprecated use `GetStreamsResponse$Outbound` instead. */
  export type Outbound = GetStreamsResponse$Outbound;
}

export function getStreamsResponseToJSON(
  getStreamsResponse: GetStreamsResponse,
): string {
  return JSON.stringify(
    GetStreamsResponse$outboundSchema.parse(getStreamsResponse),
  );
}

export function getStreamsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetStreamsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStreamsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStreamsResponse' from JSON`,
  );
}
