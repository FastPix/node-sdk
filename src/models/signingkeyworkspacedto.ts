import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type SigningKeyWorkspaceDTO = {
  /**
   * FastPix generates a unique identifier for each workspace.
   */
  id?: string | undefined;
  /**
   * Designated title for the workspace.
   */
  name?: string | undefined;
  /**
   * Describes the type of a workspace.  Possible value: QA, staging, production, or development.
   */
  workspaceType?: string | undefined;
};

/** @internal */
export const SigningKeyWorkspaceDTO$inboundSchema: z.ZodType<
  SigningKeyWorkspaceDTO,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  workspaceType: z.string().optional(),
});

/** @internal */
export type SigningKeyWorkspaceDTO$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  workspaceType?: string | undefined;
};

/** @internal */
export const SigningKeyWorkspaceDTO$outboundSchema: z.ZodType<
  SigningKeyWorkspaceDTO$Outbound,
  z.ZodTypeDef,
  SigningKeyWorkspaceDTO
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  workspaceType: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SigningKeyWorkspaceDTO$ {
  /** @deprecated use `SigningKeyWorkspaceDTO$inboundSchema` instead. */
  export const inboundSchema = SigningKeyWorkspaceDTO$inboundSchema;
  /** @deprecated use `SigningKeyWorkspaceDTO$outboundSchema` instead. */
  export const outboundSchema = SigningKeyWorkspaceDTO$outboundSchema;
  /** @deprecated use `SigningKeyWorkspaceDTO$Outbound` instead. */
  export type Outbound = SigningKeyWorkspaceDTO$Outbound;
}

export function signingKeyWorkspaceDTOToJSON(
  signingKeyWorkspaceDTO: SigningKeyWorkspaceDTO,
): string {
  return JSON.stringify(
    SigningKeyWorkspaceDTO$outboundSchema.parse(signingKeyWorkspaceDTO),
  );
}

export function signingKeyWorkspaceDTOFromJSON(
  jsonString: string,
): SafeParseResult<SigningKeyWorkspaceDTO, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SigningKeyWorkspaceDTO$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SigningKeyWorkspaceDTO' from JSON`,
  );
}
