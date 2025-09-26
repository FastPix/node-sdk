import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type ViewsList = {
  /**
   * The unique identifier for the viewing session of the user.
   *
   * @remarks
   */
  viewId: string;
  /**
   * Operating System signifies the software platform utilized by the viewer
   *
   * @remarks
   */
  operatingSystem: string | null;
  /**
   * The browser name of the viewer.
   *
   * @remarks
   */
  application: string | null;
  /**
   * The start timestamp of the video view.
   *
   * @remarks
   */
  viewStartTime: string | null;
  /**
   * The end timestamp of the video view.
   *
   * @remarks
   */
  viewEndTime: string | null;
  /**
   * The title of the Video.
   *
   * @remarks
   */
  videoTitle: string | null;
  /**
   * The code which represents specific issues or failures that occur during playback. These can be implementation specific.
   *
   * @remarks
   */
  errorCode?: string | null | undefined;
  /**
   * The notifications or messages that inform users or developers about issues or failures that have occurred during the playback representing error codes.
   *
   * @remarks
   */
  errorMessage?: string | null | undefined;
  /**
   * The unique identifier which identifies each type of error that occurs.
   *
   * @remarks
   */
  errorId?: number | null | undefined;
  /**
   * Country of the viewer.
   *
   * @remarks
   */
  country: string | null;
  /**
   * The watch time represents the time spent watching the video including staruptime, playback time ,buffering time.
   *
   * @remarks
   */
  viewWatchTime?: number | null | undefined;
  /**
   * The viewer experience encapsulated in the form of score while watching the video.
   *
   * @remarks
   */
  qoeScore?: number | null | undefined;
};

/** @internal */
export const ViewsList$inboundSchema: z.ZodType<
  ViewsList,
  z.ZodTypeDef,
  unknown
> = z.object({
  viewId: z.string(),
  operatingSystem: z.nullable(z.string()),
  application: z.nullable(z.string()),
  viewStartTime: z.nullable(z.string()),
  viewEndTime: z.nullable(z.string()),
  videoTitle: z.nullable(z.string()),
  errorCode: z.nullable(z.string()).optional(),
  errorMessage: z.nullable(z.string()).optional(),
  errorId: z.nullable(z.number().int()).optional(),
  country: z.nullable(z.string()),
  viewWatchTime: z.nullable(z.number()).optional(),
  QoeScore: z.nullable(z.number()).optional(),
}).transform((v) => {
  return remap$(v, {
    "QoeScore": "qoeScore",
  });
});

/** @internal */
export type ViewsList$Outbound = {
  viewId: string;
  operatingSystem: string | null;
  application: string | null;
  viewStartTime: string | null;
  viewEndTime: string | null;
  videoTitle: string | null;
  errorCode?: string | null | undefined;
  errorMessage?: string | null | undefined;
  errorId?: number | null | undefined;
  country: string | null;
  viewWatchTime?: number | null | undefined;
  QoeScore?: number | null | undefined;
};

/** @internal */
export const ViewsList$outboundSchema: z.ZodType<
  ViewsList$Outbound,
  z.ZodTypeDef,
  ViewsList
> = z.object({
  viewId: z.string(),
  operatingSystem: z.nullable(z.string()),
  application: z.nullable(z.string()),
  viewStartTime: z.nullable(z.string()),
  viewEndTime: z.nullable(z.string()),
  videoTitle: z.nullable(z.string()),
  errorCode: z.nullable(z.string()).optional(),
  errorMessage: z.nullable(z.string()).optional(),
  errorId: z.nullable(z.number().int()).optional(),
  country: z.nullable(z.string()),
  viewWatchTime: z.nullable(z.number()).optional(),
  qoeScore: z.nullable(z.number()).optional(),
}).transform((v) => {
  return remap$(v, {
    qoeScore: "QoeScore",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ViewsList$ {
  /** @deprecated use `ViewsList$inboundSchema` instead. */
  export const inboundSchema = ViewsList$inboundSchema;
  /** @deprecated use `ViewsList$outboundSchema` instead. */
  export const outboundSchema = ViewsList$outboundSchema;
  /** @deprecated use `ViewsList$Outbound` instead. */
  export type Outbound = ViewsList$Outbound;
}

export function viewsListToJSON(viewsList: ViewsList): string {
  return JSON.stringify(ViewsList$outboundSchema.parse(viewsList));
}

export function viewsListFromJSON(
  jsonString: string,
): SafeParseResult<ViewsList, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ViewsList$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ViewsList' from JSON`,
  );
}
