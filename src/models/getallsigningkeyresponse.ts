import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  GetAllSigningKeyResponseDTO,
  GetAllSigningKeyResponseDTO$inboundSchema,
  GetAllSigningKeyResponseDTO$Outbound,
  GetAllSigningKeyResponseDTO$outboundSchema,
} from "./getallsigningkeyresponsedto.js";

export type GetAllSigningKeyResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: Array<GetAllSigningKeyResponseDTO> | undefined;
};

/** @internal */
export const GetAllSigningKeyResponse$inboundSchema: z.ZodType<
  GetAllSigningKeyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.array(GetAllSigningKeyResponseDTO$inboundSchema).optional(),
});

/** @internal */
export type GetAllSigningKeyResponse$Outbound = {
  success?: boolean | undefined;
  data?: Array<GetAllSigningKeyResponseDTO$Outbound> | undefined;
};

/** @internal */
export const GetAllSigningKeyResponse$outboundSchema: z.ZodType<
  GetAllSigningKeyResponse$Outbound,
  z.ZodTypeDef,
  GetAllSigningKeyResponse
> = z.object({
  success: z.boolean().optional(),
  data: z.array(GetAllSigningKeyResponseDTO$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllSigningKeyResponse$ {
  /** @deprecated use `GetAllSigningKeyResponse$inboundSchema` instead. */
  export const inboundSchema = GetAllSigningKeyResponse$inboundSchema;
  /** @deprecated use `GetAllSigningKeyResponse$outboundSchema` instead. */
  export const outboundSchema = GetAllSigningKeyResponse$outboundSchema;
  /** @deprecated use `GetAllSigningKeyResponse$Outbound` instead. */
  export type Outbound = GetAllSigningKeyResponse$Outbound;
}

export function getAllSigningKeyResponseToJSON(
  getAllSigningKeyResponse: GetAllSigningKeyResponse,
): string {
  return JSON.stringify(
    GetAllSigningKeyResponse$outboundSchema.parse(getAllSigningKeyResponse),
  );
}

export function getAllSigningKeyResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAllSigningKeyResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllSigningKeyResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllSigningKeyResponse' from JSON`,
  );
}
