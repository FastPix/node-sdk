

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type MediaClipNotFoundErrorData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.MediaClipNotFoundError | undefined;
};

export class MediaClipNotFoundError extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.MediaClipNotFoundError | undefined;

  /** The original data that was passed to this error instance. */
  data$: MediaClipNotFoundErrorData;

  constructor(
    err: MediaClipNotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "MediaClipNotFoundError";
  }
}

/** @internal */
export const MediaClipNotFoundError$inboundSchema: z.ZodType<
  MediaClipNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.MediaClipNotFoundError$inboundSchema).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new MediaClipNotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type MediaClipNotFoundError$Outbound = {
  success?: boolean | undefined;
  error?: models.MediaClipNotFoundError$Outbound | undefined;
};

/** @internal */
export const MediaClipNotFoundError$outboundSchema: z.ZodType<
  MediaClipNotFoundError$Outbound,
  z.ZodTypeDef,
  MediaClipNotFoundError
> = z.instanceof(MediaClipNotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.MediaClipNotFoundError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaClipNotFoundError$ {
  /** @deprecated use `MediaClipNotFoundError$inboundSchema` instead. */
  export const inboundSchema = MediaClipNotFoundError$inboundSchema;
  /** @deprecated use `MediaClipNotFoundError$outboundSchema` instead. */
  export const outboundSchema = MediaClipNotFoundError$outboundSchema;
  /** @deprecated use `MediaClipNotFoundError$Outbound` instead. */
  export type Outbound = MediaClipNotFoundError$Outbound;
}
