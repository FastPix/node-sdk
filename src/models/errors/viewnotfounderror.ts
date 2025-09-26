

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type ViewNotFoundErrorData = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Returns the problem that has occured
   */
  error?: models.ViewNotFoundError | undefined;
};

export class ViewNotFoundError extends FastpixError {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Returns the problem that has occured
   */
  error?: models.ViewNotFoundError | undefined;

  /** The original data that was passed to this error instance. */
  data$: ViewNotFoundErrorData;

  constructor(
    err: ViewNotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "ViewNotFoundError";
  }
}

/** @internal */
export const ViewNotFoundError$inboundSchema: z.ZodType<
  ViewNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.ViewNotFoundError$inboundSchema).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new ViewNotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type ViewNotFoundError$Outbound = {
  success?: boolean | undefined;
  error?: models.ViewNotFoundError$Outbound | undefined;
};

/** @internal */
export const ViewNotFoundError$outboundSchema: z.ZodType<
  ViewNotFoundError$Outbound,
  z.ZodTypeDef,
  ViewNotFoundError
> = z.instanceof(ViewNotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.ViewNotFoundError$outboundSchema).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ViewNotFoundError$ {
  /** @deprecated use `ViewNotFoundError$inboundSchema` instead. */
  export const inboundSchema = ViewNotFoundError$inboundSchema;
  /** @deprecated use `ViewNotFoundError$outboundSchema` instead. */
  export const outboundSchema = ViewNotFoundError$outboundSchema;
  /** @deprecated use `ViewNotFoundError$Outbound` instead. */
  export type Outbound = ViewNotFoundError$Outbound;
}
