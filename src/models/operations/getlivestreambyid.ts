import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetLiveStreamByIdRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
};

/** @internal */
export const GetLiveStreamByIdRequest$inboundSchema: z.ZodType<
  GetLiveStreamByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
});

/** @internal */
export type GetLiveStreamByIdRequest$Outbound = {
  streamId: string;
};

/** @internal */
export const GetLiveStreamByIdRequest$outboundSchema: z.ZodType<
  GetLiveStreamByIdRequest$Outbound,
  z.ZodTypeDef,
  GetLiveStreamByIdRequest
> = z.object({
  streamId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLiveStreamByIdRequest$ {
  /** @deprecated use `GetLiveStreamByIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetLiveStreamByIdRequest$inboundSchema;
  /** @deprecated use `GetLiveStreamByIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetLiveStreamByIdRequest$outboundSchema;
  /** @deprecated use `GetLiveStreamByIdRequest$Outbound` instead. */
  export type Outbound = GetLiveStreamByIdRequest$Outbound;
}

export function getLiveStreamByIdRequestToJSON(
  getLiveStreamByIdRequest: GetLiveStreamByIdRequest,
): string {
  return JSON.stringify(
    GetLiveStreamByIdRequest$outboundSchema.parse(getLiveStreamByIdRequest),
  );
}

export function getLiveStreamByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetLiveStreamByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLiveStreamByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLiveStreamByIdRequest' from JSON`,
  );
}
