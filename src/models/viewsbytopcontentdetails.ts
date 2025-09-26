import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * Retrieves a list of the top video views
 */
export type ViewsByTopContentDetails = {
  /**
   * Title of the video
   */
  videoTitle?: string | undefined;
  /**
   * Total count of view sessions for a paricular video content.
   */
  views?: number | undefined;
  /**
   * Total count of unique video viewers for particular video content.
   */
  uniqueViews?: number | undefined;
};

/** @internal */
export const ViewsByTopContentDetails$inboundSchema: z.ZodType<
  ViewsByTopContentDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  videoTitle: z.string().optional(),
  views: z.number().int().optional(),
  uniqueViews: z.number().int().optional(),
});

/** @internal */
export type ViewsByTopContentDetails$Outbound = {
  videoTitle?: string | undefined;
  views?: number | undefined;
  uniqueViews?: number | undefined;
};

/** @internal */
export const ViewsByTopContentDetails$outboundSchema: z.ZodType<
  ViewsByTopContentDetails$Outbound,
  z.ZodTypeDef,
  ViewsByTopContentDetails
> = z.object({
  videoTitle: z.string().optional(),
  views: z.number().int().optional(),
  uniqueViews: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ViewsByTopContentDetails$ {
  /** @deprecated use `ViewsByTopContentDetails$inboundSchema` instead. */
  export const inboundSchema = ViewsByTopContentDetails$inboundSchema;
  /** @deprecated use `ViewsByTopContentDetails$outboundSchema` instead. */
  export const outboundSchema = ViewsByTopContentDetails$outboundSchema;
  /** @deprecated use `ViewsByTopContentDetails$Outbound` instead. */
  export type Outbound = ViewsByTopContentDetails$Outbound;
}

export function viewsByTopContentDetailsToJSON(
  viewsByTopContentDetails: ViewsByTopContentDetails,
): string {
  return JSON.stringify(
    ViewsByTopContentDetails$outboundSchema.parse(viewsByTopContentDetails),
  );
}

export function viewsByTopContentDetailsFromJSON(
  jsonString: string,
): SafeParseResult<ViewsByTopContentDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ViewsByTopContentDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ViewsByTopContentDetails' from JSON`,
  );
}
