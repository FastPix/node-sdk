

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type NotFoundErrorData = {
  success?: boolean | undefined;
  error?: models.NotFoundErrorError | undefined;
};

export class NotFoundError extends FastpixError {
  success?: boolean | undefined;
  error?: models.NotFoundErrorError | undefined;

  /** The original data that was passed to this error instance. */
  data$: NotFoundErrorData;

  constructor(
    err: NotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "NotFoundError";
  }
}

/** @internal */
export const NotFoundError$inboundSchema: z.ZodType<
  NotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.NotFoundErrorError$inboundSchema).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new NotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type NotFoundError$Outbound = {
  success?: boolean | undefined;
  error?: models.NotFoundErrorError$Outbound | undefined;
};

/** @internal */
export const NotFoundError$outboundSchema: z.ZodType<
  NotFoundError$Outbound,
  z.ZodTypeDef,
  NotFoundError
> = z.instanceof(NotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.NotFoundErrorError$outboundSchema).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFoundError$ {
  /** @deprecated use `NotFoundError$inboundSchema` instead. */
  export const inboundSchema = NotFoundError$inboundSchema;
  /** @deprecated use `NotFoundError$outboundSchema` instead. */
  export const outboundSchema = NotFoundError$outboundSchema;
  /** @deprecated use `NotFoundError$Outbound` instead. */
  export type Outbound = NotFoundError$Outbound;
}
