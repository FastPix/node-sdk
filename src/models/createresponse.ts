import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  CreateSigningKeyResponseDTO,
  CreateSigningKeyResponseDTO$inboundSchema,
  CreateSigningKeyResponseDTO$Outbound,
  CreateSigningKeyResponseDTO$outboundSchema,
} from "./createsigningkeyresponsedto.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type CreateResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: CreateSigningKeyResponseDTO | undefined;
};

/** @internal */
export const CreateResponse$inboundSchema: z.ZodType<
  CreateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: CreateSigningKeyResponseDTO$inboundSchema.optional(),
});

/** @internal */
export type CreateResponse$Outbound = {
  success?: boolean | undefined;
  data?: CreateSigningKeyResponseDTO$Outbound | undefined;
};

/** @internal */
export const CreateResponse$outboundSchema: z.ZodType<
  CreateResponse$Outbound,
  z.ZodTypeDef,
  CreateResponse
> = z.object({
  success: z.boolean().optional(),
  data: CreateSigningKeyResponseDTO$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateResponse$ {
  /** @deprecated use `CreateResponse$inboundSchema` instead. */
  export const inboundSchema = CreateResponse$inboundSchema;
  /** @deprecated use `CreateResponse$outboundSchema` instead. */
  export const outboundSchema = CreateResponse$outboundSchema;
  /** @deprecated use `CreateResponse$Outbound` instead. */
  export type Outbound = CreateResponse$Outbound;
}

export function createResponseToJSON(createResponse: CreateResponse): string {
  return JSON.stringify(CreateResponse$outboundSchema.parse(createResponse));
}

export function createResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateResponse' from JSON`,
  );
}
