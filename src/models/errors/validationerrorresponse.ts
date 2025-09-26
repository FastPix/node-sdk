

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type ValidationErrorResponseData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.ValidationErrorResponseError | undefined;
};

export class ValidationErrorResponse extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.ValidationErrorResponseError | undefined;

  /** The original data that was passed to this error instance. */
  data$: ValidationErrorResponseData;

  constructor(
    err: ValidationErrorResponseData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "ValidationErrorResponse";
  }
}

/** @internal */
export const ValidationErrorResponse$inboundSchema: z.ZodType<
  ValidationErrorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.ValidationErrorResponseError$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new ValidationErrorResponse(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type ValidationErrorResponse$Outbound = {
  success?: boolean | undefined;
  error?: models.ValidationErrorResponseError$Outbound | undefined;
};

/** @internal */
export const ValidationErrorResponse$outboundSchema: z.ZodType<
  ValidationErrorResponse$Outbound,
  z.ZodTypeDef,
  ValidationErrorResponse
> = z.instanceof(ValidationErrorResponse)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.ValidationErrorResponseError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ValidationErrorResponse$ {
  /** @deprecated use `ValidationErrorResponse$inboundSchema` instead. */
  export const inboundSchema = ValidationErrorResponse$inboundSchema;
  /** @deprecated use `ValidationErrorResponse$outboundSchema` instead. */
  export const outboundSchema = ValidationErrorResponse$outboundSchema;
  /** @deprecated use `ValidationErrorResponse$Outbound` instead. */
  export type Outbound = ValidationErrorResponse$Outbound;
}
