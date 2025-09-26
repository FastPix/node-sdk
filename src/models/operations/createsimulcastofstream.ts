import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type CreateSimulcastOfStreamRequest = {
  /**
   * Upon creating a new live stream, FastPix assigns a unique identifier to the stream.
   */
  streamId: string;
  simulcastRequest: models.SimulcastRequest;
};

/** @internal */
export const CreateSimulcastOfStreamRequest$inboundSchema: z.ZodType<
  CreateSimulcastOfStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
  simulcastRequest: models.SimulcastRequest$inboundSchema,
});

/** @internal */
export type CreateSimulcastOfStreamRequest$Outbound = {
  streamId: string;
  simulcastRequest: models.SimulcastRequest$Outbound;
};

/** @internal */
export const CreateSimulcastOfStreamRequest$outboundSchema: z.ZodType<
  CreateSimulcastOfStreamRequest$Outbound,
  z.ZodTypeDef,
  CreateSimulcastOfStreamRequest
> = z.object({
  streamId: z.string(),
  simulcastRequest: models.SimulcastRequest$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSimulcastOfStreamRequest$ {
  /** @deprecated use `CreateSimulcastOfStreamRequest$inboundSchema` instead. */
  export const inboundSchema = CreateSimulcastOfStreamRequest$inboundSchema;
  /** @deprecated use `CreateSimulcastOfStreamRequest$outboundSchema` instead. */
  export const outboundSchema = CreateSimulcastOfStreamRequest$outboundSchema;
  /** @deprecated use `CreateSimulcastOfStreamRequest$Outbound` instead. */
  export type Outbound = CreateSimulcastOfStreamRequest$Outbound;
}

export function createSimulcastOfStreamRequestToJSON(
  createSimulcastOfStreamRequest: CreateSimulcastOfStreamRequest,
): string {
  return JSON.stringify(
    CreateSimulcastOfStreamRequest$outboundSchema.parse(
      createSimulcastOfStreamRequest,
    ),
  );
}

export function createSimulcastOfStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateSimulcastOfStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSimulcastOfStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSimulcastOfStreamRequest' from JSON`,
  );
}
