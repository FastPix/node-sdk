

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type InvalidPermissionErrorData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.InvalidPermissionError | undefined;
};

export class InvalidPermissionError extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.InvalidPermissionError | undefined;

  /** The original data that was passed to this error instance. */
  data$: InvalidPermissionErrorData;

  constructor(
    err: InvalidPermissionErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "InvalidPermissionError";
  }
}

/** @internal */
export const InvalidPermissionError$inboundSchema: z.ZodType<
  InvalidPermissionError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.InvalidPermissionError$inboundSchema).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new InvalidPermissionError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type InvalidPermissionError$Outbound = {
  success?: boolean | undefined;
  error?: models.InvalidPermissionError$Outbound | undefined;
};

/** @internal */
export const InvalidPermissionError$outboundSchema: z.ZodType<
  InvalidPermissionError$Outbound,
  z.ZodTypeDef,
  InvalidPermissionError
> = z.instanceof(InvalidPermissionError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.InvalidPermissionError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvalidPermissionError$ {
  /** @deprecated use `InvalidPermissionError$inboundSchema` instead. */
  export const inboundSchema = InvalidPermissionError$inboundSchema;
  /** @deprecated use `InvalidPermissionError$outboundSchema` instead. */
  export const outboundSchema = InvalidPermissionError$outboundSchema;
  /** @deprecated use `InvalidPermissionError$Outbound` instead. */
  export type Outbound = InvalidPermissionError$Outbound;
}
