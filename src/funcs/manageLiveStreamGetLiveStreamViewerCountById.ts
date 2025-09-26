import { FastpixCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
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
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Get stream views by ID
 *
 * @remarks
 * This endpoint retrieves the current number of viewers watching a specific live stream, identified by its unique `streamId`.
 *
 * The viewer count is an **approximate value**, optimized for performance. It provides a near-real-time estimate of how many clients are actively watching the stream. This approach ensures high efficiency, especially when the stream is being watched at large scale across multiple devices or platforms.
 *
 * #### Example
 *
 * Suppose a content creator is hosting a live concert and wants to display the number of live viewers on their dashboard. This endpoint can be queried to show up-to-date viewer statistics.
 *
 * Related guide: <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>
 */
export function manageLiveStreamGetLiveStreamViewerCountById(
  client: FastpixCore,
  request: operations.GetLiveStreamViewerCountByIdRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    models.ViewsCountResponse,
    | errors.UnauthorizedError
    | errors.InvalidPermissionError
    | errors.LiveNotFoundError
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
  request: operations.GetLiveStreamViewerCountByIdRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      models.ViewsCountResponse,
      | errors.UnauthorizedError
      | errors.InvalidPermissionError
      | errors.LiveNotFoundError
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
      operations.GetLiveStreamViewerCountByIdRequest$outboundSchema.parse(
        value,
      ),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    streamId: encodeSimple("streamId", payload.streamId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/live/streams/{streamId}/viewer-count")(pathParams);

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "get-live-stream-viewer-count-by-id",
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
    errorCodes: ["401", "403", "404", "422", "4XX", "5XX"],
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
    models.ViewsCountResponse,
    | errors.UnauthorizedError
    | errors.InvalidPermissionError
    | errors.LiveNotFoundError
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
    M.json(200, models.ViewsCountResponse$inboundSchema),
    M.jsonErr(401, errors.UnauthorizedError$inboundSchema),
    M.jsonErr(403, errors.InvalidPermissionError$inboundSchema),
    M.jsonErr(404, errors.LiveNotFoundError$inboundSchema),
    M.jsonErr(422, errors.ValidationErrorResponse$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
