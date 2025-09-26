

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type StreamAlreadyEnabledErrorData = {
  /**
   * Indicates whether the request was successful or not.
   */
  success?: boolean | undefined;
  /**
   * Contains details explaining why the request failed.
   */
  error?: models.StreamAlreadyEnabledErrorError | undefined;
};

export class StreamAlreadyEnabledError extends FastpixError {
  /**
   * Indicates whether the request was successful or not.
   */
  success?: boolean | undefined;
  /**
   * Contains details explaining why the request failed.
   */
  error?: models.StreamAlreadyEnabledErrorError | undefined;

  /** The original data that was passed to this error instance. */
  data$: StreamAlreadyEnabledErrorData;

  constructor(
    err: StreamAlreadyEnabledErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "StreamAlreadyEnabledError";
  }
}

/** @internal */
export const StreamAlreadyEnabledError$inboundSchema: z.ZodType<
  StreamAlreadyEnabledError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.StreamAlreadyEnabledErrorError$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new StreamAlreadyEnabledError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type StreamAlreadyEnabledError$Outbound = {
  success?: boolean | undefined;
  error?: models.StreamAlreadyEnabledErrorError$Outbound | undefined;
};

/** @internal */
export const StreamAlreadyEnabledError$outboundSchema: z.ZodType<
  StreamAlreadyEnabledError$Outbound,
  z.ZodTypeDef,
  StreamAlreadyEnabledError
> = z.instanceof(StreamAlreadyEnabledError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.StreamAlreadyEnabledErrorError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StreamAlreadyEnabledError$ {
  /** @deprecated use `StreamAlreadyEnabledError$inboundSchema` instead. */
  export const inboundSchema = StreamAlreadyEnabledError$inboundSchema;
  /** @deprecated use `StreamAlreadyEnabledError$outboundSchema` instead. */
  export const outboundSchema = StreamAlreadyEnabledError$outboundSchema;
  /** @deprecated use `StreamAlreadyEnabledError$Outbound` instead. */
  export type Outbound = StreamAlreadyEnabledError$Outbound;
}
