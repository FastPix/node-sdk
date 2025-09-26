

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type UnAuthorizedResponseErrorData = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.UnAuthorizedResponseError | undefined;
};

export class UnAuthorizedResponseError extends FastpixError {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.UnAuthorizedResponseError | undefined;

  /** The original data that was passed to this error instance. */
  data$: UnAuthorizedResponseErrorData;

  constructor(
    err: UnAuthorizedResponseErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "UnAuthorizedResponseError";
  }
}

/** @internal */
export const UnAuthorizedResponseError$inboundSchema: z.ZodType<
  UnAuthorizedResponseError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.UnAuthorizedResponseError$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new UnAuthorizedResponseError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type UnAuthorizedResponseError$Outbound = {
  success?: boolean | undefined;
  error?: models.UnAuthorizedResponseError$Outbound | undefined;
};

/** @internal */
export const UnAuthorizedResponseError$outboundSchema: z.ZodType<
  UnAuthorizedResponseError$Outbound,
  z.ZodTypeDef,
  UnAuthorizedResponseError
> = z.instanceof(UnAuthorizedResponseError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.UnAuthorizedResponseError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnAuthorizedResponseError$ {
  /** @deprecated use `UnAuthorizedResponseError$inboundSchema` instead. */
  export const inboundSchema = UnAuthorizedResponseError$inboundSchema;
  /** @deprecated use `UnAuthorizedResponseError$outboundSchema` instead. */
  export const outboundSchema = UnAuthorizedResponseError$outboundSchema;
  /** @deprecated use `UnAuthorizedResponseError$Outbound` instead. */
  export type Outbound = UnAuthorizedResponseError$Outbound;
}
