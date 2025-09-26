

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

/**
 * Displays the result of the request.
 */
export type DuplicateReferenceIdErrorResponseData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.DuplicateReferenceIdErrorResponseError | undefined;
};

/**
 * Displays the result of the request.
 */
export class DuplicateReferenceIdErrorResponse extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.DuplicateReferenceIdErrorResponseError | undefined;

  /** The original data that was passed to this error instance. */
  data$: DuplicateReferenceIdErrorResponseData;

  constructor(
    err: DuplicateReferenceIdErrorResponseData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "DuplicateReferenceIdErrorResponse";
  }
}

/** @internal */
export const DuplicateReferenceIdErrorResponse$inboundSchema: z.ZodType<
  DuplicateReferenceIdErrorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() =>
    models.DuplicateReferenceIdErrorResponseError$inboundSchema
  ).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new DuplicateReferenceIdErrorResponse(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type DuplicateReferenceIdErrorResponse$Outbound = {
  success?: boolean | undefined;
  error?: models.DuplicateReferenceIdErrorResponseError$Outbound | undefined;
};

/** @internal */
export const DuplicateReferenceIdErrorResponse$outboundSchema: z.ZodType<
  DuplicateReferenceIdErrorResponse$Outbound,
  z.ZodTypeDef,
  DuplicateReferenceIdErrorResponse
> = z.instanceof(DuplicateReferenceIdErrorResponse)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() =>
      models.DuplicateReferenceIdErrorResponseError$outboundSchema
    ).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DuplicateReferenceIdErrorResponse$ {
  /** @deprecated use `DuplicateReferenceIdErrorResponse$inboundSchema` instead. */
  export const inboundSchema = DuplicateReferenceIdErrorResponse$inboundSchema;
  /** @deprecated use `DuplicateReferenceIdErrorResponse$outboundSchema` instead. */
  export const outboundSchema =
    DuplicateReferenceIdErrorResponse$outboundSchema;
  /** @deprecated use `DuplicateReferenceIdErrorResponse$Outbound` instead. */
  export type Outbound = DuplicateReferenceIdErrorResponse$Outbound;
}
