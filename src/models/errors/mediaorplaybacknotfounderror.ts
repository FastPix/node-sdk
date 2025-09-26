

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type MediaOrPlaybackNotFoundErrorData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.MediaOrPlaybackNotFoundError | undefined;
};

export class MediaOrPlaybackNotFoundError extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.MediaOrPlaybackNotFoundError | undefined;

  /** The original data that was passed to this error instance. */
  data$: MediaOrPlaybackNotFoundErrorData;

  constructor(
    err: MediaOrPlaybackNotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "MediaOrPlaybackNotFoundError";
  }
}

/** @internal */
export const MediaOrPlaybackNotFoundError$inboundSchema: z.ZodType<
  MediaOrPlaybackNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.MediaOrPlaybackNotFoundError$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new MediaOrPlaybackNotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type MediaOrPlaybackNotFoundError$Outbound = {
  success?: boolean | undefined;
  error?: models.MediaOrPlaybackNotFoundError$Outbound | undefined;
};

/** @internal */
export const MediaOrPlaybackNotFoundError$outboundSchema: z.ZodType<
  MediaOrPlaybackNotFoundError$Outbound,
  z.ZodTypeDef,
  MediaOrPlaybackNotFoundError
> = z.instanceof(MediaOrPlaybackNotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.MediaOrPlaybackNotFoundError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaOrPlaybackNotFoundError$ {
  /** @deprecated use `MediaOrPlaybackNotFoundError$inboundSchema` instead. */
  export const inboundSchema = MediaOrPlaybackNotFoundError$inboundSchema;
  /** @deprecated use `MediaOrPlaybackNotFoundError$outboundSchema` instead. */
  export const outboundSchema = MediaOrPlaybackNotFoundError$outboundSchema;
  /** @deprecated use `MediaOrPlaybackNotFoundError$Outbound` instead. */
  export type Outbound = MediaOrPlaybackNotFoundError$Outbound;
}
