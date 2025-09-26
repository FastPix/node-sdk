

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type DuplicateMp4SupportErrorData = {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.DuplicateMp4SupportError | undefined;
};

export class DuplicateMp4SupportError extends FastpixError {
  /**
   * Demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Displays details about the reasons behind the request's failure.
   */
  error?: models.DuplicateMp4SupportError | undefined;

  /** The original data that was passed to this error instance. */
  data$: DuplicateMp4SupportErrorData;

  constructor(
    err: DuplicateMp4SupportErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "DuplicateMp4SupportError";
  }
}

/** @internal */
export const DuplicateMp4SupportError$inboundSchema: z.ZodType<
  DuplicateMp4SupportError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.DuplicateMp4SupportError$inboundSchema).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new DuplicateMp4SupportError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type DuplicateMp4SupportError$Outbound = {
  success?: boolean | undefined;
  error?: models.DuplicateMp4SupportError$Outbound | undefined;
};

/** @internal */
export const DuplicateMp4SupportError$outboundSchema: z.ZodType<
  DuplicateMp4SupportError$Outbound,
  z.ZodTypeDef,
  DuplicateMp4SupportError
> = z.instanceof(DuplicateMp4SupportError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.DuplicateMp4SupportError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DuplicateMp4SupportError$ {
  /** @deprecated use `DuplicateMp4SupportError$inboundSchema` instead. */
  export const inboundSchema = DuplicateMp4SupportError$inboundSchema;
  /** @deprecated use `DuplicateMp4SupportError$outboundSchema` instead. */
  export const outboundSchema = DuplicateMp4SupportError$outboundSchema;
  /** @deprecated use `DuplicateMp4SupportError$Outbound` instead. */
  export type Outbound = DuplicateMp4SupportError$Outbound;
}
