

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type MediaNotFoundErrorData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.MediaNotFoundError | undefined;
};

export class MediaNotFoundError extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.MediaNotFoundError | undefined;

  /** The original data that was passed to this error instance. */
  data$: MediaNotFoundErrorData;

  constructor(
    err: MediaNotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "MediaNotFoundError";
  }
}

/** @internal */
export const MediaNotFoundError$inboundSchema: z.ZodType<
  MediaNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.MediaNotFoundError$inboundSchema).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new MediaNotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type MediaNotFoundError$Outbound = {
  success?: boolean | undefined;
  error?: models.MediaNotFoundError$Outbound | undefined;
};

/** @internal */
export const MediaNotFoundError$outboundSchema: z.ZodType<
  MediaNotFoundError$Outbound,
  z.ZodTypeDef,
  MediaNotFoundError
> = z.instanceof(MediaNotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.MediaNotFoundError$outboundSchema).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaNotFoundError$ {
  /** @deprecated use `MediaNotFoundError$inboundSchema` instead. */
  export const inboundSchema = MediaNotFoundError$inboundSchema;
  /** @deprecated use `MediaNotFoundError$outboundSchema` instead. */
  export const outboundSchema = MediaNotFoundError$outboundSchema;
  /** @deprecated use `MediaNotFoundError$Outbound` instead. */
  export type Outbound = MediaNotFoundError$Outbound;
}
