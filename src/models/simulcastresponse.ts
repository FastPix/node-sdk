import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays the result of the request.
 */
export type SimulcastResponseData = {
  /**
   * When you create the new simulcast, FastPix assign a universal unique identifier which can contain a maximum of 255 characters.
   */
  simulcastId?: string | undefined;
  /**
   * The RTMPS hostname, combined with the application name, is crucial for connecting to third-party live streaming services and transmitting the live stream.
   */
  url?: string | undefined;
  /**
   * A unique stream key is generated for streaming, allowing the user to start streaming on any third-party platform using this key.
   */
  streamKey?: string | undefined;
  /**
   * When the value is true, the simulcast will be enabled for the given stream
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
export type SimulcastResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: SimulcastResponseData | undefined;
};

/** @internal */
export const SimulcastResponseData$inboundSchema: z.ZodType<
  SimulcastResponseData,
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
export type SimulcastResponseData$Outbound = {
  simulcastId?: string | undefined;
  url?: string | undefined;
  streamKey?: string | undefined;
  isEnabled?: boolean | undefined;
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const SimulcastResponseData$outboundSchema: z.ZodType<
  SimulcastResponseData$Outbound,
  z.ZodTypeDef,
  SimulcastResponseData
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
export namespace SimulcastResponseData$ {
  /** @deprecated use `SimulcastResponseData$inboundSchema` instead. */
  export const inboundSchema = SimulcastResponseData$inboundSchema;
  /** @deprecated use `SimulcastResponseData$outboundSchema` instead. */
  export const outboundSchema = SimulcastResponseData$outboundSchema;
  /** @deprecated use `SimulcastResponseData$Outbound` instead. */
  export type Outbound = SimulcastResponseData$Outbound;
}

export function simulcastResponseDataToJSON(
  simulcastResponseData: SimulcastResponseData,
): string {
  return JSON.stringify(
    SimulcastResponseData$outboundSchema.parse(simulcastResponseData),
  );
}

export function simulcastResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<SimulcastResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SimulcastResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SimulcastResponseData' from JSON`,
  );
}

/** @internal */
export const SimulcastResponse$inboundSchema: z.ZodType<
  SimulcastResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => SimulcastResponseData$inboundSchema).optional(),
});

/** @internal */
export type SimulcastResponse$Outbound = {
  success?: boolean | undefined;
  data?: SimulcastResponseData$Outbound | undefined;
};

/** @internal */
export const SimulcastResponse$outboundSchema: z.ZodType<
  SimulcastResponse$Outbound,
  z.ZodTypeDef,
  SimulcastResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => SimulcastResponseData$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SimulcastResponse$ {
  /** @deprecated use `SimulcastResponse$inboundSchema` instead. */
  export const inboundSchema = SimulcastResponse$inboundSchema;
  /** @deprecated use `SimulcastResponse$outboundSchema` instead. */
  export const outboundSchema = SimulcastResponse$outboundSchema;
  /** @deprecated use `SimulcastResponse$Outbound` instead. */
  export type Outbound = SimulcastResponse$Outbound;
}

export function simulcastResponseToJSON(
  simulcastResponse: SimulcastResponse,
): string {
  return JSON.stringify(
    SimulcastResponse$outboundSchema.parse(simulcastResponse),
  );
}

export function simulcastResponseFromJSON(
  jsonString: string,
): SafeParseResult<SimulcastResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SimulcastResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SimulcastResponse' from JSON`,
  );
}
