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

/**
 * Displays the result of the request.
 */
export type LivestreamgetResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: GetCreateLiveStreamResponseDTO | undefined;
};

/** @internal */
export const LivestreamgetResponse$inboundSchema: z.ZodType<
  LivestreamgetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: GetCreateLiveStreamResponseDTO$inboundSchema.optional(),
});

/** @internal */
export type LivestreamgetResponse$Outbound = {
  success?: boolean | undefined;
  data?: GetCreateLiveStreamResponseDTO$Outbound | undefined;
};

/** @internal */
export const LivestreamgetResponse$outboundSchema: z.ZodType<
  LivestreamgetResponse$Outbound,
  z.ZodTypeDef,
  LivestreamgetResponse
> = z.object({
  success: z.boolean().optional(),
  data: GetCreateLiveStreamResponseDTO$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LivestreamgetResponse$ {
  /** @deprecated use `LivestreamgetResponse$inboundSchema` instead. */
  export const inboundSchema = LivestreamgetResponse$inboundSchema;
  /** @deprecated use `LivestreamgetResponse$outboundSchema` instead. */
  export const outboundSchema = LivestreamgetResponse$outboundSchema;
  /** @deprecated use `LivestreamgetResponse$Outbound` instead. */
  export type Outbound = LivestreamgetResponse$Outbound;
}

export function livestreamgetResponseToJSON(
  livestreamgetResponse: LivestreamgetResponse,
): string {
  return JSON.stringify(
    LivestreamgetResponse$outboundSchema.parse(livestreamgetResponse),
  );
}

export function livestreamgetResponseFromJSON(
  jsonString: string,
): SafeParseResult<LivestreamgetResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LivestreamgetResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LivestreamgetResponse' from JSON`,
  );
}
