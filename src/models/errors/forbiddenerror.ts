

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type ForbiddenErrorData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.ForbiddenError | undefined;
};

export class ForbiddenError extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.ForbiddenError | undefined;

  /** The original data that was passed to this error instance. */
  data$: ForbiddenErrorData;

  constructor(
    err: ForbiddenErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "ForbiddenError";
  }
}

/** @internal */
export const ForbiddenError$inboundSchema: z.ZodType<
  ForbiddenError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.ForbiddenError$inboundSchema).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new ForbiddenError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type ForbiddenError$Outbound = {
  success?: boolean | undefined;
  error?: models.ForbiddenError$Outbound | undefined;
};

/** @internal */
export const ForbiddenError$outboundSchema: z.ZodType<
  ForbiddenError$Outbound,
  z.ZodTypeDef,
  ForbiddenError
> = z.instanceof(ForbiddenError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.ForbiddenError$outboundSchema).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForbiddenError$ {
  /** @deprecated use `ForbiddenError$inboundSchema` instead. */
  export const inboundSchema = ForbiddenError$inboundSchema;
  /** @deprecated use `ForbiddenError$outboundSchema` instead. */
  export const outboundSchema = ForbiddenError$outboundSchema;
  /** @deprecated use `ForbiddenError$Outbound` instead. */
  export type Outbound = ForbiddenError$Outbound;
}
