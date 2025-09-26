import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteSigningKeyRequest = {
  /**
   * When creating the signing key, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  signingKeyId: string;
};

/** @internal */
export const DeleteSigningKeyRequest$inboundSchema: z.ZodType<
  DeleteSigningKeyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  signingKeyId: z.string(),
});

/** @internal */
export type DeleteSigningKeyRequest$Outbound = {
  signingKeyId: string;
};

/** @internal */
export const DeleteSigningKeyRequest$outboundSchema: z.ZodType<
  DeleteSigningKeyRequest$Outbound,
  z.ZodTypeDef,
  DeleteSigningKeyRequest
> = z.object({
  signingKeyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteSigningKeyRequest$ {
  /** @deprecated use `DeleteSigningKeyRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteSigningKeyRequest$inboundSchema;
  /** @deprecated use `DeleteSigningKeyRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteSigningKeyRequest$outboundSchema;
  /** @deprecated use `DeleteSigningKeyRequest$Outbound` instead. */
  export type Outbound = DeleteSigningKeyRequest$Outbound;
}

export function deleteSigningKeyRequestToJSON(
  deleteSigningKeyRequest: DeleteSigningKeyRequest,
): string {
  return JSON.stringify(
    DeleteSigningKeyRequest$outboundSchema.parse(deleteSigningKeyRequest),
  );
}

export function deleteSigningKeyRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteSigningKeyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteSigningKeyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteSigningKeyRequest' from JSON`,
  );
}
