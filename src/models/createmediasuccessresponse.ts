import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  CreateMediaResponse,
  CreateMediaResponse$inboundSchema,
  CreateMediaResponse$Outbound,
  CreateMediaResponse$outboundSchema,
} from "./createmediaresponse.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type CreateMediaSuccessResponse = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success: boolean;
  data: CreateMediaResponse;
};

/** @internal */
export const CreateMediaSuccessResponse$inboundSchema: z.ZodType<
  CreateMediaSuccessResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean(),
  data: CreateMediaResponse$inboundSchema,
});

/** @internal */
export type CreateMediaSuccessResponse$Outbound = {
  success: boolean;
  data: CreateMediaResponse$Outbound;
};

/** @internal */
export const CreateMediaSuccessResponse$outboundSchema: z.ZodType<
  CreateMediaSuccessResponse$Outbound,
  z.ZodTypeDef,
  CreateMediaSuccessResponse
> = z.object({
  success: z.boolean(),
  data: CreateMediaResponse$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMediaSuccessResponse$ {
  /** @deprecated use `CreateMediaSuccessResponse$inboundSchema` instead. */
  export const inboundSchema = CreateMediaSuccessResponse$inboundSchema;
  /** @deprecated use `CreateMediaSuccessResponse$outboundSchema` instead. */
  export const outboundSchema = CreateMediaSuccessResponse$outboundSchema;
  /** @deprecated use `CreateMediaSuccessResponse$Outbound` instead. */
  export type Outbound = CreateMediaSuccessResponse$Outbound;
}

export function createMediaSuccessResponseToJSON(
  createMediaSuccessResponse: CreateMediaSuccessResponse,
): string {
  return JSON.stringify(
    CreateMediaSuccessResponse$outboundSchema.parse(createMediaSuccessResponse),
  );
}

export function createMediaSuccessResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateMediaSuccessResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMediaSuccessResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMediaSuccessResponse' from JSON`,
  );
}
