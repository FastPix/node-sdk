import { FastpixCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
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
 * Generate video chapters
 *
 * @remarks
 * This endpoint enables you to generate chapters for an existing media file.
 *
 * #### How it works
 * 1. Make a `PATCH` request to this endpoint, replacing `<mediaId>` with the ID of the media for which you want to generate chapters.
 * 2. Include the `chapters` parameter in the request body to enable.
 * 3. The response will contain the updated media data, confirming the changes made.
 *
 * You can use the <a href="https://docs.fastpix.io/docs/ai-events#videomediaaichaptersready">video.mediaAI.chapters.ready</a> webhook event to track and notify about the chapters generation.
 *
 * **Use case:** This is particularly useful when a user uploads a video and later decides to enable chapters without re-uploading the entire video.
 *
 * Related guide: <a href="https://docs.fastpix.io/reference/update-media-chapters">Video chapters</a>
 */
export function inVideoAIFeaturesUpdateMediaChapters(
  client: FastpixCore,
  request: operations.UpdateMediaChaptersRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.UpdateMediaChaptersResponse,
    | errors.InvalidPermissionError
    | errors.ForbiddenError
    | errors.MediaNotFoundError
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
  request: operations.UpdateMediaChaptersRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.UpdateMediaChaptersResponse,
      | errors.InvalidPermissionError
      | errors.ForbiddenError
      | errors.MediaNotFoundError
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
      operations.UpdateMediaChaptersRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    mediaId: encodeSimple("mediaId", payload.mediaId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/on-demand/{mediaId}/chapters")(pathParams);

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "update-media-chapters",
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
    method: "PATCH",
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
    operations.UpdateMediaChaptersResponse,
    | errors.InvalidPermissionError
    | errors.ForbiddenError
    | errors.MediaNotFoundError
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
    M.json(200, operations.UpdateMediaChaptersResponse$inboundSchema),
    M.jsonErr(401, errors.InvalidPermissionError$inboundSchema),
    M.jsonErr(403, errors.ForbiddenError$inboundSchema),
    M.jsonErr(404, errors.MediaNotFoundError$inboundSchema),
    M.jsonErr(422, errors.ValidationErrorResponse$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
