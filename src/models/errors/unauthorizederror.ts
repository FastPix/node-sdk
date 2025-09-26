

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type UnauthorizedErrorData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.UnauthorizedError | undefined;
};

export class UnauthorizedError extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.UnauthorizedError | undefined;

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedErrorData;

  constructor(
    err: UnauthorizedErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "UnauthorizedError";
  }
}

/** @internal */
export const UnauthorizedError$inboundSchema: z.ZodType<
  UnauthorizedError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.UnauthorizedError$inboundSchema).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new UnauthorizedError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type UnauthorizedError$Outbound = {
  success?: boolean | undefined;
  error?: models.UnauthorizedError$Outbound | undefined;
};

/** @internal */
export const UnauthorizedError$outboundSchema: z.ZodType<
  UnauthorizedError$Outbound,
  z.ZodTypeDef,
  UnauthorizedError
> = z.instanceof(UnauthorizedError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.UnauthorizedError$outboundSchema).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedError$ {
  /** @deprecated use `UnauthorizedError$inboundSchema` instead. */
  export const inboundSchema = UnauthorizedError$inboundSchema;
  /** @deprecated use `UnauthorizedError$outboundSchema` instead. */
  export const outboundSchema = UnauthorizedError$outboundSchema;
  /** @deprecated use `UnauthorizedError$Outbound` instead. */
  export type Outbound = UnauthorizedError$Outbound;
}
