import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  PatchResponseData,
  PatchResponseData$inboundSchema,
  PatchResponseData$Outbound,
  PatchResponseData$outboundSchema,
} from "./patchresponsedata.js";

/**
 * Displays the result of the request.
 */
export type PatchResponseDTO = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays the result of the request.
   */
  data?: PatchResponseData | undefined;
};

/** @internal */
export const PatchResponseDTO$inboundSchema: z.ZodType<
  PatchResponseDTO,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  data: PatchResponseData$inboundSchema.optional(),
});

/** @internal */
export type PatchResponseDTO$Outbound = {
  success?: boolean | undefined;
  data?: PatchResponseData$Outbound | undefined;
};

/** @internal */
export const PatchResponseDTO$outboundSchema: z.ZodType<
  PatchResponseDTO$Outbound,
  z.ZodTypeDef,
  PatchResponseDTO
> = z.object({
  success: z.boolean().optional(),
  data: PatchResponseData$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchResponseDTO$ {
  /** @deprecated use `PatchResponseDTO$inboundSchema` instead. */
  export const inboundSchema = PatchResponseDTO$inboundSchema;
  /** @deprecated use `PatchResponseDTO$outboundSchema` instead. */
  export const outboundSchema = PatchResponseDTO$outboundSchema;
  /** @deprecated use `PatchResponseDTO$Outbound` instead. */
  export type Outbound = PatchResponseDTO$Outbound;
}

export function patchResponseDTOToJSON(
  patchResponseDTO: PatchResponseDTO,
): string {
  return JSON.stringify(
    PatchResponseDTO$outboundSchema.parse(patchResponseDTO),
  );
}

export function patchResponseDTOFromJSON(
  jsonString: string,
): SafeParseResult<PatchResponseDTO, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchResponseDTO$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchResponseDTO' from JSON`,
  );
}
