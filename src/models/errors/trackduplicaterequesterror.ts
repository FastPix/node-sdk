

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type TrackDuplicateRequestErrorData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.TrackDuplicateRequestError | undefined;
};

export class TrackDuplicateRequestError extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.TrackDuplicateRequestError | undefined;

  /** The original data that was passed to this error instance. */
  data$: TrackDuplicateRequestErrorData;

  constructor(
    err: TrackDuplicateRequestErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "TrackDuplicateRequestError";
  }
}

/** @internal */
export const TrackDuplicateRequestError$inboundSchema: z.ZodType<
  TrackDuplicateRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.TrackDuplicateRequestError$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new TrackDuplicateRequestError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type TrackDuplicateRequestError$Outbound = {
  success?: boolean | undefined;
  error?: models.TrackDuplicateRequestError$Outbound | undefined;
};

/** @internal */
export const TrackDuplicateRequestError$outboundSchema: z.ZodType<
  TrackDuplicateRequestError$Outbound,
  z.ZodTypeDef,
  TrackDuplicateRequestError
> = z.instanceof(TrackDuplicateRequestError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.TrackDuplicateRequestError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackDuplicateRequestError$ {
  /** @deprecated use `TrackDuplicateRequestError$inboundSchema` instead. */
  export const inboundSchema = TrackDuplicateRequestError$inboundSchema;
  /** @deprecated use `TrackDuplicateRequestError$outboundSchema` instead. */
  export const outboundSchema = TrackDuplicateRequestError$outboundSchema;
  /** @deprecated use `TrackDuplicateRequestError$Outbound` instead. */
  export type Outbound = TrackDuplicateRequestError$Outbound;
}
