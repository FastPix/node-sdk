

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type SimulcastUnavailableErrorData = {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Returns the problem that has occured.
   *
   * @remarks
   */
  error?: models.SimulcastUnavailableError | undefined;
};

export class SimulcastUnavailableError extends FastpixError {
  /**
   * It demonstrates whether the request is successful or not.
   */
  success?: boolean | undefined;
  /**
   * Returns the problem that has occured.
   *
   * @remarks
   */
  error?: models.SimulcastUnavailableError | undefined;

  /** The original data that was passed to this error instance. */
  data$: SimulcastUnavailableErrorData;

  constructor(
    err: SimulcastUnavailableErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "SimulcastUnavailableError";
  }
}

/** @internal */
export const SimulcastUnavailableError$inboundSchema: z.ZodType<
  SimulcastUnavailableError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.SimulcastUnavailableError$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new SimulcastUnavailableError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type SimulcastUnavailableError$Outbound = {
  success?: boolean | undefined;
  error?: models.SimulcastUnavailableError$Outbound | undefined;
};

/** @internal */
export const SimulcastUnavailableError$outboundSchema: z.ZodType<
  SimulcastUnavailableError$Outbound,
  z.ZodTypeDef,
  SimulcastUnavailableError
> = z.instanceof(SimulcastUnavailableError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.SimulcastUnavailableError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SimulcastUnavailableError$ {
  /** @deprecated use `SimulcastUnavailableError$inboundSchema` instead. */
  export const inboundSchema = SimulcastUnavailableError$inboundSchema;
  /** @deprecated use `SimulcastUnavailableError$outboundSchema` instead. */
  export const outboundSchema = SimulcastUnavailableError$outboundSchema;
  /** @deprecated use `SimulcastUnavailableError$Outbound` instead. */
  export type Outbound = SimulcastUnavailableError$Outbound;
}
