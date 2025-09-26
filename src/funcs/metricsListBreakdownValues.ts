import { FastpixCore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { FastpixError } from "../models/errors/fastpixerror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * List breakdown values
 *
 * @remarks
 * Retrieves breakdown values for a specified metric and timespan, allowing you to analyze the performance of your content based on various dimensions. It provides insights into how different factors contribute to the overall metrics.
 *
 * #### How it works
 *
 *   1. Before using this endpoint, you can call the <a href="https://docs.fastpix.io/reference/list_dimensions">List Dimensions</a> endpoint to retrieve all available dimensions that can be used in your query.
 *
 *   2. Make a `GET` request to this endpoint with the required `metricId` and other query parameters.
 *
 *   3. Receive a response containing the breakdown values for the specified metric, grouped and filtered according to your parameters.
 *
 *   4. Upon successful retrieval, the response will include the breakdown values based on the specified parameters. Note that the time values ( `totalWatchTime` and `totalPlayingTime` ) are in milliseconds.
 *
 * #### Example
 *
 * A developer wants to analyze how watch time varies across different device types. By calling this endpoint for the `playing_time` metric and filtering by `device_type`, they can understand how engagement differs between mobile, desktop, and tablet users. This data will guide optimization efforts for different platforms.
 *
 * Related guide: <a href="https://docs.fastpix.io/docs/metrics-overview">Understand data definitions</a>
 */
export function metricsListBreakdownValues(
  client: FastpixCore,
  request: operations.ListBreakdownValuesRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.ListBreakdownValuesResponse,
    | errors.InvalidPermissionError
    | errors.ViewNotFoundError
    | errors.ValidationErrorResponse
    | FastpixError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: FastpixCore,
  request: operations.ListBreakdownValuesRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.ListBreakdownValuesResponse,
      | errors.InvalidPermissionError
      | errors.ViewNotFoundError
      | errors.ValidationErrorResponse
      | FastpixError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.ListBreakdownValuesRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    metricId: encodeSimple("metricId", payload.metricId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/data/metrics/{metricId}/breakdown")(pathParams);

  const query = encodeFormQuery({
    "filterby[]": payload["filterby[]"],
    "groupBy": payload.groupBy,
    "limit": payload.limit,
    "measurement": payload.measurement,
    "offset": payload.offset,
    "orderBy": payload.orderBy,
    "sortOrder": payload.sortOrder,
    "timespan[]": payload["timespan[]"],
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "list_breakdown_values",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 1000,
          maxInterval: 10000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes
      || ["408", "429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["401", "404", "422", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.ListBreakdownValuesResponse,
    | errors.InvalidPermissionError
    | errors.ViewNotFoundError
    | errors.ValidationErrorResponse
    | FastpixError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(200, operations.ListBreakdownValuesResponse$inboundSchema),
    M.jsonErr(401, errors.InvalidPermissionError$inboundSchema),
    M.jsonErr(404, errors.ViewNotFoundError$inboundSchema),
    M.jsonErr(422, errors.ValidationErrorResponse$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
