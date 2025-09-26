import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetSigningKeyByIdRequest = {
  /**
   * When creating the signing key, FastPix assigns a universally unique identifier with a maximum length of 255 characters.
   */
  signingKeyId: string;
};

/** @internal */
export const GetSigningKeyByIdRequest$inboundSchema: z.ZodType<
  GetSigningKeyByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  signingKeyId: z.string(),
});

/** @internal */
export type GetSigningKeyByIdRequest$Outbound = {
  signingKeyId: string;
};

/** @internal */
export const GetSigningKeyByIdRequest$outboundSchema: z.ZodType<
  GetSigningKeyByIdRequest$Outbound,
  z.ZodTypeDef,
  GetSigningKeyByIdRequest
> = z.object({
  signingKeyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSigningKeyByIdRequest$ {
  /** @deprecated use `GetSigningKeyByIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetSigningKeyByIdRequest$inboundSchema;
  /** @deprecated use `GetSigningKeyByIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetSigningKeyByIdRequest$outboundSchema;
  /** @deprecated use `GetSigningKeyByIdRequest$Outbound` instead. */
  export type Outbound = GetSigningKeyByIdRequest$Outbound;
}

export function getSigningKeyByIdRequestToJSON(
  getSigningKeyByIdRequest: GetSigningKeyByIdRequest,
): string {
  return JSON.stringify(
    GetSigningKeyByIdRequest$outboundSchema.parse(getSigningKeyByIdRequest),
  );
}

export function getSigningKeyByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetSigningKeyByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSigningKeyByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSigningKeyByIdRequest' from JSON`,
  );
}
