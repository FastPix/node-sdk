

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type LiveNotFoundErrorData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.LiveNotFoundErrorError | undefined;
};

export class LiveNotFoundError extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.LiveNotFoundErrorError | undefined;

  /** The original data that was passed to this error instance. */
  data$: LiveNotFoundErrorData;

  constructor(
    err: LiveNotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "LiveNotFoundError";
  }
}

/** @internal */
export const LiveNotFoundError$inboundSchema: z.ZodType<
  LiveNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.LiveNotFoundErrorError$inboundSchema).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new LiveNotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type LiveNotFoundError$Outbound = {
  success?: boolean | undefined;
  error?: models.LiveNotFoundErrorError$Outbound | undefined;
};

/** @internal */
export const LiveNotFoundError$outboundSchema: z.ZodType<
  LiveNotFoundError$Outbound,
  z.ZodTypeDef,
  LiveNotFoundError
> = z.instanceof(LiveNotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.LiveNotFoundErrorError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiveNotFoundError$ {
  /** @deprecated use `LiveNotFoundError$inboundSchema` instead. */
  export const inboundSchema = LiveNotFoundError$inboundSchema;
  /** @deprecated use `LiveNotFoundError$outboundSchema` instead. */
  export const outboundSchema = LiveNotFoundError$outboundSchema;
  /** @deprecated use `LiveNotFoundError$Outbound` instead. */
  export type Outbound = LiveNotFoundError$Outbound;
}
