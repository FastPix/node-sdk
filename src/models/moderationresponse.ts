import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type ModerationResponse = {
  mediaId?: string | undefined;
  isModerationEnabled?: boolean | undefined;
};

/** @internal */
export const ModerationResponse$inboundSchema: z.ZodType<
  ModerationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  mediaId: z.string().optional(),
  isModerationEnabled: z.boolean().optional(),
});

/** @internal */
export type ModerationResponse$Outbound = {
  mediaId?: string | undefined;
  isModerationEnabled?: boolean | undefined;
};

/** @internal */
export const ModerationResponse$outboundSchema: z.ZodType<
  ModerationResponse$Outbound,
  z.ZodTypeDef,
  ModerationResponse
> = z.object({
  mediaId: z.string().optional(),
  isModerationEnabled: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModerationResponse$ {
  /** @deprecated use `ModerationResponse$inboundSchema` instead. */
  export const inboundSchema = ModerationResponse$inboundSchema;
  /** @deprecated use `ModerationResponse$outboundSchema` instead. */
  export const outboundSchema = ModerationResponse$outboundSchema;
  /** @deprecated use `ModerationResponse$Outbound` instead. */
  export type Outbound = ModerationResponse$Outbound;
}

export function moderationResponseToJSON(
  moderationResponse: ModerationResponse,
): string {
  return JSON.stringify(
    ModerationResponse$outboundSchema.parse(moderationResponse),
  );
}

export function moderationResponseFromJSON(
  jsonString: string,
): SafeParseResult<ModerationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ModerationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ModerationResponse' from JSON`,
  );
}
