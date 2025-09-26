

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type ForbiddenResponseErrorData = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.ForbiddenResponseError | undefined;
};

export class ForbiddenResponseError extends FastpixError {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.ForbiddenResponseError | undefined;

  /** The original data that was passed to this error instance. */
  data$: ForbiddenResponseErrorData;

  constructor(
    err: ForbiddenResponseErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "ForbiddenResponseError";
  }
}

/** @internal */
export const ForbiddenResponseError$inboundSchema: z.ZodType<
  ForbiddenResponseError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.ForbiddenResponseError$inboundSchema).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new ForbiddenResponseError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type ForbiddenResponseError$Outbound = {
  success?: boolean | undefined;
  error?: models.ForbiddenResponseError$Outbound | undefined;
};

/** @internal */
export const ForbiddenResponseError$outboundSchema: z.ZodType<
  ForbiddenResponseError$Outbound,
  z.ZodTypeDef,
  ForbiddenResponseError
> = z.instanceof(ForbiddenResponseError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.ForbiddenResponseError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForbiddenResponseError$ {
  /** @deprecated use `ForbiddenResponseError$inboundSchema` instead. */
  export const inboundSchema = ForbiddenResponseError$inboundSchema;
  /** @deprecated use `ForbiddenResponseError$outboundSchema` instead. */
  export const outboundSchema = ForbiddenResponseError$outboundSchema;
  /** @deprecated use `ForbiddenResponseError$Outbound` instead. */
  export type Outbound = ForbiddenResponseError$Outbound;
}
