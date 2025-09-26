

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type InvalidPlaylistIdResponseErrorData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.InvalidPlaylistIdResponseError | undefined;
};

export class InvalidPlaylistIdResponseError extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.InvalidPlaylistIdResponseError | undefined;

  /** The original data that was passed to this error instance. */
  data$: InvalidPlaylistIdResponseErrorData;

  constructor(
    err: InvalidPlaylistIdResponseErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "InvalidPlaylistIdResponseError";
  }
}

/** @internal */
export const InvalidPlaylistIdResponseError$inboundSchema: z.ZodType<
  InvalidPlaylistIdResponseError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.InvalidPlaylistIdResponseError$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new InvalidPlaylistIdResponseError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type InvalidPlaylistIdResponseError$Outbound = {
  success?: boolean | undefined;
  error?: models.InvalidPlaylistIdResponseError$Outbound | undefined;
};

/** @internal */
export const InvalidPlaylistIdResponseError$outboundSchema: z.ZodType<
  InvalidPlaylistIdResponseError$Outbound,
  z.ZodTypeDef,
  InvalidPlaylistIdResponseError
> = z.instanceof(InvalidPlaylistIdResponseError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.InvalidPlaylistIdResponseError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvalidPlaylistIdResponseError$ {
  /** @deprecated use `InvalidPlaylistIdResponseError$inboundSchema` instead. */
  export const inboundSchema = InvalidPlaylistIdResponseError$inboundSchema;
  /** @deprecated use `InvalidPlaylistIdResponseError$outboundSchema` instead. */
  export const outboundSchema = InvalidPlaylistIdResponseError$outboundSchema;
  /** @deprecated use `InvalidPlaylistIdResponseError$Outbound` instead. */
  export type Outbound = InvalidPlaylistIdResponseError$Outbound;
}
