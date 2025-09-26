import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetSpecificSimulcastOfStreamRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
  /**
   * When you create the new simulcast, FastPix assign a universal unique identifier which can contain a maximum of 255 characters.
   */
  simulcastId: string;
};

/** @internal */
export const GetSpecificSimulcastOfStreamRequest$inboundSchema: z.ZodType<
  GetSpecificSimulcastOfStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
  simulcastId: z.string(),
});

/** @internal */
export type GetSpecificSimulcastOfStreamRequest$Outbound = {
  streamId: string;
  simulcastId: string;
};

/** @internal */
export const GetSpecificSimulcastOfStreamRequest$outboundSchema: z.ZodType<
  GetSpecificSimulcastOfStreamRequest$Outbound,
  z.ZodTypeDef,
  GetSpecificSimulcastOfStreamRequest
> = z.object({
  streamId: z.string(),
  simulcastId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSpecificSimulcastOfStreamRequest$ {
  /** @deprecated use `GetSpecificSimulcastOfStreamRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetSpecificSimulcastOfStreamRequest$inboundSchema;
  /** @deprecated use `GetSpecificSimulcastOfStreamRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetSpecificSimulcastOfStreamRequest$outboundSchema;
  /** @deprecated use `GetSpecificSimulcastOfStreamRequest$Outbound` instead. */
  export type Outbound = GetSpecificSimulcastOfStreamRequest$Outbound;
}

export function getSpecificSimulcastOfStreamRequestToJSON(
  getSpecificSimulcastOfStreamRequest: GetSpecificSimulcastOfStreamRequest,
): string {
  return JSON.stringify(
    GetSpecificSimulcastOfStreamRequest$outboundSchema.parse(
      getSpecificSimulcastOfStreamRequest,
    ),
  );
}

export function getSpecificSimulcastOfStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetSpecificSimulcastOfStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetSpecificSimulcastOfStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSpecificSimulcastOfStreamRequest' from JSON`,
  );
}
