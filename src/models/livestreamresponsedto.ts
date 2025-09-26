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
export type LiveStreamResponseDTO = {
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
export const LiveStreamResponseDTO$inboundSchema: z.ZodType<
  LiveStreamResponseDTO,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: GetCreateLiveStreamResponseDTO$inboundSchema.optional(),
});

/** @internal */
export type LiveStreamResponseDTO$Outbound = {
  success?: boolean | undefined;
  data?: GetCreateLiveStreamResponseDTO$Outbound | undefined;
};

/** @internal */
export const LiveStreamResponseDTO$outboundSchema: z.ZodType<
  LiveStreamResponseDTO$Outbound,
  z.ZodTypeDef,
  LiveStreamResponseDTO
> = z.object({
  success: z.boolean().optional(),
  data: GetCreateLiveStreamResponseDTO$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiveStreamResponseDTO$ {
  /** @deprecated use `LiveStreamResponseDTO$inboundSchema` instead. */
  export const inboundSchema = LiveStreamResponseDTO$inboundSchema;
  /** @deprecated use `LiveStreamResponseDTO$outboundSchema` instead. */
  export const outboundSchema = LiveStreamResponseDTO$outboundSchema;
  /** @deprecated use `LiveStreamResponseDTO$Outbound` instead. */
  export type Outbound = LiveStreamResponseDTO$Outbound;
}

export function liveStreamResponseDTOToJSON(
  liveStreamResponseDTO: LiveStreamResponseDTO,
): string {
  return JSON.stringify(
    LiveStreamResponseDTO$outboundSchema.parse(liveStreamResponseDTO),
  );
}

export function liveStreamResponseDTOFromJSON(
  jsonString: string,
): SafeParseResult<LiveStreamResponseDTO, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LiveStreamResponseDTO$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LiveStreamResponseDTO' from JSON`,
  );
}
