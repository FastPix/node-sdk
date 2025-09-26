

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type StreamAlreadyDisabledErrorData = {
  /**
   * Indicates whether the request was successful or not.
   */
  success?: boolean | undefined;
  /**
   * Contains details explaining why the request failed.
   */
  error?: models.StreamAlreadyDisabledErrorError | undefined;
};

export class StreamAlreadyDisabledError extends FastpixError {
  /**
   * Indicates whether the request was successful or not.
   */
  success?: boolean | undefined;
  /**
   * Contains details explaining why the request failed.
   */
  error?: models.StreamAlreadyDisabledErrorError | undefined;

  /** The original data that was passed to this error instance. */
  data$: StreamAlreadyDisabledErrorData;

  constructor(
    err: StreamAlreadyDisabledErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "StreamAlreadyDisabledError";
  }
}

/** @internal */
export const StreamAlreadyDisabledError$inboundSchema: z.ZodType<
  StreamAlreadyDisabledError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.StreamAlreadyDisabledErrorError$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new StreamAlreadyDisabledError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type StreamAlreadyDisabledError$Outbound = {
  success?: boolean | undefined;
  error?: models.StreamAlreadyDisabledErrorError$Outbound | undefined;
};

/** @internal */
export const StreamAlreadyDisabledError$outboundSchema: z.ZodType<
  StreamAlreadyDisabledError$Outbound,
  z.ZodTypeDef,
  StreamAlreadyDisabledError
> = z.instanceof(StreamAlreadyDisabledError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.StreamAlreadyDisabledErrorError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StreamAlreadyDisabledError$ {
  /** @deprecated use `StreamAlreadyDisabledError$inboundSchema` instead. */
  export const inboundSchema = StreamAlreadyDisabledError$inboundSchema;
  /** @deprecated use `StreamAlreadyDisabledError$outboundSchema` instead. */
  export const outboundSchema = StreamAlreadyDisabledError$outboundSchema;
  /** @deprecated use `StreamAlreadyDisabledError$Outbound` instead. */
  export type Outbound = StreamAlreadyDisabledError$Outbound;
}
