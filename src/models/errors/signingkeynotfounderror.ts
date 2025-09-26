

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type SigningKeyNotFoundErrorData = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.SigningKeyNotFoundErrorError | undefined;
};

export class SigningKeyNotFoundError extends FastpixError {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.SigningKeyNotFoundErrorError | undefined;

  /** The original data that was passed to this error instance. */
  data$: SigningKeyNotFoundErrorData;

  constructor(
    err: SigningKeyNotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "SigningKeyNotFoundError";
  }
}

/** @internal */
export const SigningKeyNotFoundError$inboundSchema: z.ZodType<
  SigningKeyNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.SigningKeyNotFoundErrorError$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new SigningKeyNotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type SigningKeyNotFoundError$Outbound = {
  success?: boolean | undefined;
  error?: models.SigningKeyNotFoundErrorError$Outbound | undefined;
};

/** @internal */
export const SigningKeyNotFoundError$outboundSchema: z.ZodType<
  SigningKeyNotFoundError$Outbound,
  z.ZodTypeDef,
  SigningKeyNotFoundError
> = z.instanceof(SigningKeyNotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.SigningKeyNotFoundErrorError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SigningKeyNotFoundError$ {
  /** @deprecated use `SigningKeyNotFoundError$inboundSchema` instead. */
  export const inboundSchema = SigningKeyNotFoundError$inboundSchema;
  /** @deprecated use `SigningKeyNotFoundError$outboundSchema` instead. */
  export const outboundSchema = SigningKeyNotFoundError$outboundSchema;
  /** @deprecated use `SigningKeyNotFoundError$Outbound` instead. */
  export type Outbound = SigningKeyNotFoundError$Outbound;
}
