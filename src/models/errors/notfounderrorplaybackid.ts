

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type NotFoundErrorPlaybackIdData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.NotFoundErrorPlaybackIdError | undefined;
};

export class NotFoundErrorPlaybackId extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.NotFoundErrorPlaybackIdError | undefined;

  /** The original data that was passed to this error instance. */
  data$: NotFoundErrorPlaybackIdData;

  constructor(
    err: NotFoundErrorPlaybackIdData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "NotFoundErrorPlaybackId";
  }
}

/** @internal */
export const NotFoundErrorPlaybackId$inboundSchema: z.ZodType<
  NotFoundErrorPlaybackId,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.NotFoundErrorPlaybackIdError$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new NotFoundErrorPlaybackId(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type NotFoundErrorPlaybackId$Outbound = {
  success?: boolean | undefined;
  error?: models.NotFoundErrorPlaybackIdError$Outbound | undefined;
};

/** @internal */
export const NotFoundErrorPlaybackId$outboundSchema: z.ZodType<
  NotFoundErrorPlaybackId$Outbound,
  z.ZodTypeDef,
  NotFoundErrorPlaybackId
> = z.instanceof(NotFoundErrorPlaybackId)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.NotFoundErrorPlaybackIdError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFoundErrorPlaybackId$ {
  /** @deprecated use `NotFoundErrorPlaybackId$inboundSchema` instead. */
  export const inboundSchema = NotFoundErrorPlaybackId$inboundSchema;
  /** @deprecated use `NotFoundErrorPlaybackId$outboundSchema` instead. */
  export const outboundSchema = NotFoundErrorPlaybackId$outboundSchema;
  /** @deprecated use `NotFoundErrorPlaybackId$Outbound` instead. */
  export type Outbound = NotFoundErrorPlaybackId$Outbound;
}
