import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type LiveStreamDeleteResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
};

/** @internal */
export const LiveStreamDeleteResponse$inboundSchema: z.ZodType<
  LiveStreamDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
});

/** @internal */
export type LiveStreamDeleteResponse$Outbound = {
  success?: boolean | undefined;
};

/** @internal */
export const LiveStreamDeleteResponse$outboundSchema: z.ZodType<
  LiveStreamDeleteResponse$Outbound,
  z.ZodTypeDef,
  LiveStreamDeleteResponse
> = z.object({
  success: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiveStreamDeleteResponse$ {
  /** @deprecated use `LiveStreamDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = LiveStreamDeleteResponse$inboundSchema;
  /** @deprecated use `LiveStreamDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = LiveStreamDeleteResponse$outboundSchema;
  /** @deprecated use `LiveStreamDeleteResponse$Outbound` instead. */
  export type Outbound = LiveStreamDeleteResponse$Outbound;
}

export function liveStreamDeleteResponseToJSON(
  liveStreamDeleteResponse: LiveStreamDeleteResponse,
): string {
  return JSON.stringify(
    LiveStreamDeleteResponse$outboundSchema.parse(liveStreamDeleteResponse),
  );
}

export function liveStreamDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<LiveStreamDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LiveStreamDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LiveStreamDeleteResponse' from JSON`,
  );
}
