import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type SimulcastRequest = {
  /**
   * The RTMPS hostname, combined with the application name, is crucial for connecting to third-party live streaming services and transmitting the live stream.
   */
  url?: string | undefined;
  /**
   * A unique stream key is generated for streaming, allowing the user to start streaming on any third-party platform using this key.
   */
  streamKey?: string | undefined;
  /**
   * You can search for videos with specific key value pairs using metadata, when you tag a video in "key":"value"s pairs. Dynamic Metadata allows you to define a key that allows any value pair. You can have maximum of 255 characters and upto 10 entries are allowed.
   */
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const SimulcastRequest$inboundSchema: z.ZodType<
  SimulcastRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string().optional(),
  streamKey: z.string().optional(),
  metadata: z.record(z.string()).optional(),
});

/** @internal */
export type SimulcastRequest$Outbound = {
  url?: string | undefined;
  streamKey?: string | undefined;
  metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export const SimulcastRequest$outboundSchema: z.ZodType<
  SimulcastRequest$Outbound,
  z.ZodTypeDef,
  SimulcastRequest
> = z.object({
  url: z.string().optional(),
  streamKey: z.string().optional(),
  metadata: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SimulcastRequest$ {
  /** @deprecated use `SimulcastRequest$inboundSchema` instead. */
  export const inboundSchema = SimulcastRequest$inboundSchema;
  /** @deprecated use `SimulcastRequest$outboundSchema` instead. */
  export const outboundSchema = SimulcastRequest$outboundSchema;
  /** @deprecated use `SimulcastRequest$Outbound` instead. */
  export type Outbound = SimulcastRequest$Outbound;
}

export function simulcastRequestToJSON(
  simulcastRequest: SimulcastRequest,
): string {
  return JSON.stringify(
    SimulcastRequest$outboundSchema.parse(simulcastRequest),
  );
}

export function simulcastRequestFromJSON(
  jsonString: string,
): SafeParseResult<SimulcastRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SimulcastRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SimulcastRequest' from JSON`,
  );
}
