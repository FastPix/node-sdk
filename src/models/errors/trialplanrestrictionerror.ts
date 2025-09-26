

import * as z from "zod";
import * as models from "../index.js";
import { FastpixError } from "./fastpixerror.js";

export type TrialPlanRestrictionErrorData = {
  /**
   * Indicates whether the request was successful or not.
   */
  success?: boolean | undefined;
  /**
   * Contains details explaining why the request failed.
   */
  error?: models.TrialPlanRestrictionErrorError | undefined;
};

export class TrialPlanRestrictionError extends FastpixError {
  /**
   * Indicates whether the request was successful or not.
   */
  success?: boolean | undefined;
  /**
   * Contains details explaining why the request failed.
   */
  error?: models.TrialPlanRestrictionErrorError | undefined;

  /** The original data that was passed to this error instance. */
  data$: TrialPlanRestrictionErrorData;

  constructor(
    err: TrialPlanRestrictionErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.success != null) this.success = err.success;
    if (err.error != null) this.error = err.error;

    this.name = "TrialPlanRestrictionError";
  }
}

/** @internal */
export const TrialPlanRestrictionError$inboundSchema: z.ZodType<
  TrialPlanRestrictionError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  error: z.lazy(() => models.TrialPlanRestrictionErrorError$inboundSchema)
    .optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new TrialPlanRestrictionError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type TrialPlanRestrictionError$Outbound = {
  success?: boolean | undefined;
  error?: models.TrialPlanRestrictionErrorError$Outbound | undefined;
};

/** @internal */
export const TrialPlanRestrictionError$outboundSchema: z.ZodType<
  TrialPlanRestrictionError$Outbound,
  z.ZodTypeDef,
  TrialPlanRestrictionError
> = z.instanceof(TrialPlanRestrictionError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.boolean().optional(),
    error: z.lazy(() => models.TrialPlanRestrictionErrorError$outboundSchema)
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrialPlanRestrictionError$ {
  /** @deprecated use `TrialPlanRestrictionError$inboundSchema` instead. */
  export const inboundSchema = TrialPlanRestrictionError$inboundSchema;
  /** @deprecated use `TrialPlanRestrictionError$outboundSchema` instead. */
  export const outboundSchema = TrialPlanRestrictionError$outboundSchema;
  /** @deprecated use `TrialPlanRestrictionError$Outbound` instead. */
  export type Outbound = TrialPlanRestrictionError$Outbound;
}
