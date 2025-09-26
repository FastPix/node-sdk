import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays the result of the request.
 */
export type SimulcastUpdateResponseData = {
  /**
   * When you create the new simulcast, FastPix assign a universal unique identifier which can contain a maximum of 255 characters.
   */
  simulcastId?: string | undefined;
  /**
   * The RTMP hostname, combined with the application name, is crucial for connecting to third-party live streaming services and transmitting the live stream.
   */
  url?: string | undefined;
  /**
   * A unique stream key is generated for streaming, allowing the user to start streaming on any third-party platform using this key.
   */
  streamKey?: string | undefined;
  /**
   * When the value is set to false, the simulcast will be disabled for the given stream
   */
  isEnabled?: boolean | undefined;
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key":"value"s pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
};

/**
 * Displays the result of the request.
 */
export type SimulcastUpdateResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: SimulcastUpdateResponseData | undefined;
};

/** @internal */
export const SimulcastUpdateResponseData$inboundSchema: z.ZodType<
  SimulcastUpdateResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  simulcastId: z.string().optional(),
  url: z.string().optional(),
  streamKey: z.string().optional(),
  isEnabled: z.boolean().optional(),
  metadata: z.record(z.string()).optional(),
});

/** @internal */
export type SimulcastUpdateResponseData$Outbound = {
  simulcastId?: string | undefined;
  url?: string | undefined;
  streamKey?: string | undefined;
  isEnabled?: boolean | undefined;
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const SimulcastUpdateResponseData$outboundSchema: z.ZodType<
  SimulcastUpdateResponseData$Outbound,
  z.ZodTypeDef,
  SimulcastUpdateResponseData
> = z.object({
  simulcastId: z.string().optional(),
  url: z.string().optional(),
  streamKey: z.string().optional(),
  isEnabled: z.boolean().optional(),
  metadata: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SimulcastUpdateResponseData$ {
  /** @deprecated use `SimulcastUpdateResponseData$inboundSchema` instead. */
  export const inboundSchema = SimulcastUpdateResponseData$inboundSchema;
  /** @deprecated use `SimulcastUpdateResponseData$outboundSchema` instead. */
  export const outboundSchema = SimulcastUpdateResponseData$outboundSchema;
  /** @deprecated use `SimulcastUpdateResponseData$Outbound` instead. */
  export type Outbound = SimulcastUpdateResponseData$Outbound;
}

export function simulcastUpdateResponseDataToJSON(
  simulcastUpdateResponseData: SimulcastUpdateResponseData,
): string {
  return JSON.stringify(
    SimulcastUpdateResponseData$outboundSchema.parse(
      simulcastUpdateResponseData,
    ),
  );
}

export function simulcastUpdateResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<SimulcastUpdateResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SimulcastUpdateResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SimulcastUpdateResponseData' from JSON`,
  );
}

/** @internal */
export const SimulcastUpdateResponse$inboundSchema: z.ZodType<
  SimulcastUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => SimulcastUpdateResponseData$inboundSchema).optional(),
});

/** @internal */
export type SimulcastUpdateResponse$Outbound = {
  success?: boolean | undefined;
  data?: SimulcastUpdateResponseData$Outbound | undefined;
};

/** @internal */
export const SimulcastUpdateResponse$outboundSchema: z.ZodType<
  SimulcastUpdateResponse$Outbound,
  z.ZodTypeDef,
  SimulcastUpdateResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => SimulcastUpdateResponseData$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SimulcastUpdateResponse$ {
  /** @deprecated use `SimulcastUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = SimulcastUpdateResponse$inboundSchema;
  /** @deprecated use `SimulcastUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = SimulcastUpdateResponse$outboundSchema;
  /** @deprecated use `SimulcastUpdateResponse$Outbound` instead. */
  export type Outbound = SimulcastUpdateResponse$Outbound;
}

export function simulcastUpdateResponseToJSON(
  simulcastUpdateResponse: SimulcastUpdateResponse,
): string {
  return JSON.stringify(
    SimulcastUpdateResponse$outboundSchema.parse(simulcastUpdateResponse),
  );
}

export function simulcastUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<SimulcastUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SimulcastUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SimulcastUpdateResponse' from JSON`,
  );
}
