import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  DateRange,
  DateRange$inboundSchema,
  DateRange$Outbound,
  DateRange$outboundSchema,
} from "./daterange.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  PlaylistOrder,
  PlaylistOrder$inboundSchema,
  PlaylistOrder$outboundSchema,
} from "./playlistorder.js";

/**
 * For a smart playlist metadata is required.
 */
export const CreatePlaylistRequestType = {
  Smart: "smart",
  Manual: "manual",
} as const;
/**
 * For a smart playlist metadata is required.
 */
export type CreatePlaylistRequestType = ClosedEnum<
  typeof CreatePlaylistRequestType
>;

/**
 * Required when playlist type is smart - media created between startDate and endDate of createdDate will be add, similarily updatedDate (Optional)
 */
export type CreatePlaylistRequestMetadata = {
  /**
   * Date range with start and end dates.
   */
  createdDate?: DateRange | undefined;
  /**
   * Date range with start and end dates.
   */
  updatedDate?: DateRange | undefined;
};

export type CreatePlaylistRequest = {
  /**
   * Name of the playlist.
   */
  name: string;
  /**
   * Unique string value assigned by user to the playlist.
   */
  referenceId: string;
  /**
   * For a smart playlist metadata is required.
   */
  type: CreatePlaylistRequestType;
  /**
   * Description for a playlist (Optional).
   */
  description?: string | undefined;
  /**
   * Determines the insertion order of media into playlist.
   */
  playOrder?: PlaylistOrder | undefined;
  /**
   * Optional parameter to limit no. of media in a playlist.
   */
  limit?: number | undefined;
  /**
   * Required when playlist type is smart - media created between startDate and endDate of createdDate will be add, similarily updatedDate (Optional)
   */
  metadata?: CreatePlaylistRequestMetadata | undefined;
};

/** @internal */
export const CreatePlaylistRequestType$inboundSchema: z.ZodNativeEnum<
  typeof CreatePlaylistRequestType
> = z.nativeEnum(CreatePlaylistRequestType);

/** @internal */
export const CreatePlaylistRequestType$outboundSchema: z.ZodNativeEnum<
  typeof CreatePlaylistRequestType
> = CreatePlaylistRequestType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePlaylistRequestType$ {
  /** @deprecated use `CreatePlaylistRequestType$inboundSchema` instead. */
  export const inboundSchema = CreatePlaylistRequestType$inboundSchema;
  /** @deprecated use `CreatePlaylistRequestType$outboundSchema` instead. */
  export const outboundSchema = CreatePlaylistRequestType$outboundSchema;
}

/** @internal */
export const CreatePlaylistRequestMetadata$inboundSchema: z.ZodType<
  CreatePlaylistRequestMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdDate: DateRange$inboundSchema.optional(),
  updatedDate: DateRange$inboundSchema.optional(),
});

/** @internal */
export type CreatePlaylistRequestMetadata$Outbound = {
  createdDate?: DateRange$Outbound | undefined;
  updatedDate?: DateRange$Outbound | undefined;
};

/** @internal */
export const CreatePlaylistRequestMetadata$outboundSchema: z.ZodType<
  CreatePlaylistRequestMetadata$Outbound,
  z.ZodTypeDef,
  CreatePlaylistRequestMetadata
> = z.object({
  createdDate: DateRange$outboundSchema.optional(),
  updatedDate: DateRange$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePlaylistRequestMetadata$ {
  /** @deprecated use `CreatePlaylistRequestMetadata$inboundSchema` instead. */
  export const inboundSchema = CreatePlaylistRequestMetadata$inboundSchema;
  /** @deprecated use `CreatePlaylistRequestMetadata$outboundSchema` instead. */
  export const outboundSchema = CreatePlaylistRequestMetadata$outboundSchema;
  /** @deprecated use `CreatePlaylistRequestMetadata$Outbound` instead. */
  export type Outbound = CreatePlaylistRequestMetadata$Outbound;
}

export function createPlaylistRequestMetadataToJSON(
  createPlaylistRequestMetadata: CreatePlaylistRequestMetadata,
): string {
  return JSON.stringify(
    CreatePlaylistRequestMetadata$outboundSchema.parse(
      createPlaylistRequestMetadata,
    ),
  );
}

export function createPlaylistRequestMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CreatePlaylistRequestMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePlaylistRequestMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePlaylistRequestMetadata' from JSON`,
  );
}

/** @internal */
export const CreatePlaylistRequest$inboundSchema: z.ZodType<
  CreatePlaylistRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  referenceId: z.string(),
  type: CreatePlaylistRequestType$inboundSchema,
  description: z.string().optional(),
  playOrder: PlaylistOrder$inboundSchema.optional(),
  limit: z.number().int().default(1000),
  metadata: z.lazy(() => CreatePlaylistRequestMetadata$inboundSchema)
    .optional(),
});

/** @internal */
export type CreatePlaylistRequest$Outbound = {
  name: string;
  referenceId: string;
  type: string;
  description?: string | undefined;
  playOrder?: string | undefined;
  limit: number;
  metadata?: CreatePlaylistRequestMetadata$Outbound | undefined;
};

/** @internal */
export const CreatePlaylistRequest$outboundSchema: z.ZodType<
  CreatePlaylistRequest$Outbound,
  z.ZodTypeDef,
  CreatePlaylistRequest
> = z.object({
  name: z.string(),
  referenceId: z.string(),
  type: CreatePlaylistRequestType$outboundSchema,
  description: z.string().optional(),
  playOrder: PlaylistOrder$outboundSchema.optional(),
  limit: z.number().int().default(1000),
  metadata: z.lazy(() => CreatePlaylistRequestMetadata$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePlaylistRequest$ {
  /** @deprecated use `CreatePlaylistRequest$inboundSchema` instead. */
  export const inboundSchema = CreatePlaylistRequest$inboundSchema;
  /** @deprecated use `CreatePlaylistRequest$outboundSchema` instead. */
  export const outboundSchema = CreatePlaylistRequest$outboundSchema;
  /** @deprecated use `CreatePlaylistRequest$Outbound` instead. */
  export type Outbound = CreatePlaylistRequest$Outbound;
}

export function createPlaylistRequestToJSON(
  createPlaylistRequest: CreatePlaylistRequest,
): string {
  return JSON.stringify(
    CreatePlaylistRequest$outboundSchema.parse(createPlaylistRequest),
  );
}

export function createPlaylistRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreatePlaylistRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePlaylistRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePlaylistRequest' from JSON`,
  );
}
