import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type UpdatePlaylistRequest = {
  /**
   * New name to the playlist.
   */
  name: string;
  /**
   * Updated description to the playlist.
   */
  description: string;
};

/** @internal */
export const UpdatePlaylistRequest$inboundSchema: z.ZodType<
  UpdatePlaylistRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.string(),
});

/** @internal */
export type UpdatePlaylistRequest$Outbound = {
  name: string;
  description: string;
};

/** @internal */
export const UpdatePlaylistRequest$outboundSchema: z.ZodType<
  UpdatePlaylistRequest$Outbound,
  z.ZodTypeDef,
  UpdatePlaylistRequest
> = z.object({
  name: z.string(),
  description: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePlaylistRequest$ {
  /** @deprecated use `UpdatePlaylistRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatePlaylistRequest$inboundSchema;
  /** @deprecated use `UpdatePlaylistRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatePlaylistRequest$outboundSchema;
  /** @deprecated use `UpdatePlaylistRequest$Outbound` instead. */
  export type Outbound = UpdatePlaylistRequest$Outbound;
}

export function updatePlaylistRequestToJSON(
  updatePlaylistRequest: UpdatePlaylistRequest,
): string {
  return JSON.stringify(
    UpdatePlaylistRequest$outboundSchema.parse(updatePlaylistRequest),
  );
}

export function updatePlaylistRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdatePlaylistRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatePlaylistRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatePlaylistRequest' from JSON`,
  );
}
