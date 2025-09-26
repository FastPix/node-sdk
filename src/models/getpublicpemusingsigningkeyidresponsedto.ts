import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Displays the result of the request.
 */
export type GetPublicPemUsingSigningKeyIdResponseDTOData = {
  /**
   * FastPix generates a unique identifier for each workspace.
   */
  workspaceId?: string | undefined;
  signingKeyId?: string | undefined;
  /**
   * A public key is a byte encoded key used to create a signed JSON Web Token (JWT) for authentication.
   */
  publicKey?: string | undefined;
};

/**
 * Displays the result of the request.
 */
export type GetPublicPemUsingSigningKeyIdResponseDTO = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: GetPublicPemUsingSigningKeyIdResponseDTOData | undefined;
};

/** @internal */
export const GetPublicPemUsingSigningKeyIdResponseDTOData$inboundSchema:
  z.ZodType<
    GetPublicPemUsingSigningKeyIdResponseDTOData,
    z.ZodTypeDef,
    unknown
  > = z.object({
    workspaceId: z.string().optional(),
    signingKeyId: z.string().optional(),
    publicKey: z.string().optional(),
  });

/** @internal */
export type GetPublicPemUsingSigningKeyIdResponseDTOData$Outbound = {
  workspaceId?: string | undefined;
  signingKeyId?: string | undefined;
  publicKey?: string | undefined;
};

/** @internal */
export const GetPublicPemUsingSigningKeyIdResponseDTOData$outboundSchema:
  z.ZodType<
    GetPublicPemUsingSigningKeyIdResponseDTOData$Outbound,
    z.ZodTypeDef,
    GetPublicPemUsingSigningKeyIdResponseDTOData
  > = z.object({
    workspaceId: z.string().optional(),
    signingKeyId: z.string().optional(),
    publicKey: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPublicPemUsingSigningKeyIdResponseDTOData$ {
  /** @deprecated use `GetPublicPemUsingSigningKeyIdResponseDTOData$inboundSchema` instead. */
  export const inboundSchema =
    GetPublicPemUsingSigningKeyIdResponseDTOData$inboundSchema;
  /** @deprecated use `GetPublicPemUsingSigningKeyIdResponseDTOData$outboundSchema` instead. */
  export const outboundSchema =
    GetPublicPemUsingSigningKeyIdResponseDTOData$outboundSchema;
  /** @deprecated use `GetPublicPemUsingSigningKeyIdResponseDTOData$Outbound` instead. */
  export type Outbound = GetPublicPemUsingSigningKeyIdResponseDTOData$Outbound;
}

export function getPublicPemUsingSigningKeyIdResponseDTODataToJSON(
  getPublicPemUsingSigningKeyIdResponseDTOData:
    GetPublicPemUsingSigningKeyIdResponseDTOData,
): string {
  return JSON.stringify(
    GetPublicPemUsingSigningKeyIdResponseDTOData$outboundSchema.parse(
      getPublicPemUsingSigningKeyIdResponseDTOData,
    ),
  );
}

export function getPublicPemUsingSigningKeyIdResponseDTODataFromJSON(
  jsonString: string,
): SafeParseResult<
  GetPublicPemUsingSigningKeyIdResponseDTOData,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetPublicPemUsingSigningKeyIdResponseDTOData$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetPublicPemUsingSigningKeyIdResponseDTOData' from JSON`,
  );
}

/** @internal */
export const GetPublicPemUsingSigningKeyIdResponseDTO$inboundSchema: z.ZodType<
  GetPublicPemUsingSigningKeyIdResponseDTO,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() => GetPublicPemUsingSigningKeyIdResponseDTOData$inboundSchema)
    .optional(),
});

/** @internal */
export type GetPublicPemUsingSigningKeyIdResponseDTO$Outbound = {
  success?: boolean | undefined;
  data?: GetPublicPemUsingSigningKeyIdResponseDTOData$Outbound | undefined;
};

/** @internal */
export const GetPublicPemUsingSigningKeyIdResponseDTO$outboundSchema: z.ZodType<
  GetPublicPemUsingSigningKeyIdResponseDTO$Outbound,
  z.ZodTypeDef,
  GetPublicPemUsingSigningKeyIdResponseDTO
> = z.object({
  success: z.boolean().optional(),
  data: z.lazy(() =>
    GetPublicPemUsingSigningKeyIdResponseDTOData$outboundSchema
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPublicPemUsingSigningKeyIdResponseDTO$ {
  /** @deprecated use `GetPublicPemUsingSigningKeyIdResponseDTO$inboundSchema` instead. */
  export const inboundSchema =
    GetPublicPemUsingSigningKeyIdResponseDTO$inboundSchema;
  /** @deprecated use `GetPublicPemUsingSigningKeyIdResponseDTO$outboundSchema` instead. */
  export const outboundSchema =
    GetPublicPemUsingSigningKeyIdResponseDTO$outboundSchema;
  /** @deprecated use `GetPublicPemUsingSigningKeyIdResponseDTO$Outbound` instead. */
  export type Outbound = GetPublicPemUsingSigningKeyIdResponseDTO$Outbound;
}

export function getPublicPemUsingSigningKeyIdResponseDTOToJSON(
  getPublicPemUsingSigningKeyIdResponseDTO:
    GetPublicPemUsingSigningKeyIdResponseDTO,
): string {
  return JSON.stringify(
    GetPublicPemUsingSigningKeyIdResponseDTO$outboundSchema.parse(
      getPublicPemUsingSigningKeyIdResponseDTO,
    ),
  );
}

export function getPublicPemUsingSigningKeyIdResponseDTOFromJSON(
  jsonString: string,
): SafeParseResult<
  GetPublicPemUsingSigningKeyIdResponseDTO,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetPublicPemUsingSigningKeyIdResponseDTO$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetPublicPemUsingSigningKeyIdResponseDTO' from JSON`,
  );
}
