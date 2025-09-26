import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type DeleteSigningKeyResponse = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
};

/** @internal */
export const DeleteSigningKeyResponse$inboundSchema: z.ZodType<
  DeleteSigningKeyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
});

/** @internal */
export type DeleteSigningKeyResponse$Outbound = {
  success?: boolean | undefined;
};

/** @internal */
export const DeleteSigningKeyResponse$outboundSchema: z.ZodType<
  DeleteSigningKeyResponse$Outbound,
  z.ZodTypeDef,
  DeleteSigningKeyResponse
> = z.object({
  success: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteSigningKeyResponse$ {
  /** @deprecated use `DeleteSigningKeyResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteSigningKeyResponse$inboundSchema;
  /** @deprecated use `DeleteSigningKeyResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteSigningKeyResponse$outboundSchema;
  /** @deprecated use `DeleteSigningKeyResponse$Outbound` instead. */
  export type Outbound = DeleteSigningKeyResponse$Outbound;
}

export function deleteSigningKeyResponseToJSON(
  deleteSigningKeyResponse: DeleteSigningKeyResponse,
): string {
  return JSON.stringify(
    DeleteSigningKeyResponse$outboundSchema.parse(deleteSigningKeyResponse),
  );
}

export function deleteSigningKeyResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteSigningKeyResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteSigningKeyResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteSigningKeyResponse' from JSON`,
  );
}
