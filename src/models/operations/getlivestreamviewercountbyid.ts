import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetLiveStreamViewerCountByIdRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
};

/** @internal */
export const GetLiveStreamViewerCountByIdRequest$inboundSchema: z.ZodType<
  GetLiveStreamViewerCountByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
});

/** @internal */
export type GetLiveStreamViewerCountByIdRequest$Outbound = {
  streamId: string;
};

/** @internal */
export const GetLiveStreamViewerCountByIdRequest$outboundSchema: z.ZodType<
  GetLiveStreamViewerCountByIdRequest$Outbound,
  z.ZodTypeDef,
  GetLiveStreamViewerCountByIdRequest
> = z.object({
  streamId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLiveStreamViewerCountByIdRequest$ {
  /** @deprecated use `GetLiveStreamViewerCountByIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetLiveStreamViewerCountByIdRequest$inboundSchema;
  /** @deprecated use `GetLiveStreamViewerCountByIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetLiveStreamViewerCountByIdRequest$outboundSchema;
  /** @deprecated use `GetLiveStreamViewerCountByIdRequest$Outbound` instead. */
  export type Outbound = GetLiveStreamViewerCountByIdRequest$Outbound;
}

export function getLiveStreamViewerCountByIdRequestToJSON(
  getLiveStreamViewerCountByIdRequest: GetLiveStreamViewerCountByIdRequest,
): string {
  return JSON.stringify(
    GetLiveStreamViewerCountByIdRequest$outboundSchema.parse(
      getLiveStreamViewerCountByIdRequest,
    ),
  );
}

export function getLiveStreamViewerCountByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetLiveStreamViewerCountByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetLiveStreamViewerCountByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLiveStreamViewerCountByIdRequest' from JSON`,
  );
}
