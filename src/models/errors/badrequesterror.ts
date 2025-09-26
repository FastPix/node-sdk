

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type BadRequestErrorData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.BadRequestError | undefined;
};

export class BadRequestError extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.BadRequestError | undefined;

  /** The original data that was passed to this error instance. */
  data$: BadRequestErrorData;

  constructor(
    err: BadRequestErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "BadRequestError";
  }
}

/** @internal */
export const BadRequestError$inboundSchema: z.ZodType<
  BadRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.BadRequestError$inboundSchema).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new BadRequestError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type BadRequestError$Outbound = {
  success?: boolean | undefined;
  error?: models.BadRequestError$Outbound | undefined;
};

/** @internal */
export const BadRequestError$outboundSchema: z.ZodType<
  BadRequestError$Outbound,
  z.ZodTypeDef,
  BadRequestError
> = z.instanceof(BadRequestError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.BadRequestError$outboundSchema).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestError$ {
  /** @deprecated use `BadRequestError$inboundSchema` instead. */
  export const inboundSchema = BadRequestError$inboundSchema;
  /** @deprecated use `BadRequestError$outboundSchema` instead. */
  export const outboundSchema = BadRequestError$outboundSchema;
  /** @deprecated use `BadRequestError$Outbound` instead. */
  export type Outbound = BadRequestError$Outbound;
}
