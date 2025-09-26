

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type NotFoundErrorSimulcastData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.NotFoundErrorSimulcastError | undefined;
};

export class NotFoundErrorSimulcast extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.NotFoundErrorSimulcastError | undefined;

  /** The original data that was passed to this error instance. */
  data$: NotFoundErrorSimulcastData;

  constructor(
    err: NotFoundErrorSimulcastData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "NotFoundErrorSimulcast";
  }
}

/** @internal */
export const NotFoundErrorSimulcast$inboundSchema: z.ZodType<
  NotFoundErrorSimulcast,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.NotFoundErrorSimulcastError$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new NotFoundErrorSimulcast(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type NotFoundErrorSimulcast$Outbound = {
  success?: boolean | undefined;
  error?: models.NotFoundErrorSimulcastError$Outbound | undefined;
};

/** @internal */
export const NotFoundErrorSimulcast$outboundSchema: z.ZodType<
  NotFoundErrorSimulcast$Outbound,
  z.ZodTypeDef,
  NotFoundErrorSimulcast
> = z.instanceof(NotFoundErrorSimulcast)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.NotFoundErrorSimulcastError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFoundErrorSimulcast$ {
  /** @deprecated use `NotFoundErrorSimulcast$inboundSchema` instead. */
  export const inboundSchema = NotFoundErrorSimulcast$inboundSchema;
  /** @deprecated use `NotFoundErrorSimulcast$outboundSchema` instead. */
  export const outboundSchema = NotFoundErrorSimulcast$outboundSchema;
  /** @deprecated use `NotFoundErrorSimulcast$Outbound` instead. */
  export type Outbound = NotFoundErrorSimulcast$Outbound;
}
