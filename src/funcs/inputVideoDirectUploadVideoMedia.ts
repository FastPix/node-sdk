import { FastpixCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
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
 * Upload media from device
 *
 * @remarks
 * This endpoint enables accelerated uploads of large media files directly from your local device to FastPix for processing and storage.
 *
 * > **PLEASE NOTE**
 * >
 * > This version now supports uploads with no file size limitations and offers faster uploads. The previous endpoint (which had a 500MB size limit) is now deprecated. You can find details in the [changelog](https://docs.fastpix.io/changelog/api-update-direct-upload-media-from-device).
 *
 * #### How it works
 *
 * 1. Send a POST request to this endpoint with optional media settings.
 *
 * 2. The response includes an `uploadId` and a signed `url` for direct video file upload.
 *
 * 3. Upload your video file to the provided `url` by making `PUT` request. The API accepts the media file from the device and uploads it to the FastPix platform.
 *
 * 4. Once uploaded, the media undergoes processing and is assigned a unique ID for tracking. Retain this `uploadId` for any future operations related to this upload.
 *
 * After uploading, you can use the <a href="https://docs.fastpix.io/reference/get-media">Get Media by ID</a> endpoint to check the status of the uploaded media asset and see if it has transitioned to a `ready` status for playback.
 *
 * To notify your application about the status of this API request check for the webhooks for <a href="https://docs.fastpix.io/docs/webhooks-collection#media-related-events">media related events</a>.
 *
 * #### Example
 *
 * A social media platform allows users to upload video content directly from their phones or computers. This endpoint facilitates the upload process. For example, if you are developing a video-sharing app where users can upload short clips from their mobile devices, this endpoint enables them to select a video, upload it to the platform.
 *
 * Related guide: <a href="https://docs.fastpix.io/docs/upload-videos-directly">Upload videos directly</a>
 */
export function inputVideoDirectUploadVideoMedia(
  client: FastpixCore,
  request?: operations.DirectUploadVideoMediaRequest | undefined,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.DirectUploadVideoMediaResponse,
    | errors.BadRequestError
    | errors.InvalidPermissionError
    | errors.ForbiddenError
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
  request?: operations.DirectUploadVideoMediaRequest | undefined,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.DirectUploadVideoMediaResponse,
      | errors.BadRequestError
      | errors.InvalidPermissionError
      | errors.ForbiddenError
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
      operations.DirectUploadVideoMediaRequest$outboundSchema.optional().parse(
        value,
      ),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = payload === undefined
    ? null
    : encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/on-demand/upload")();

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "direct-upload-video-media",
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
    method: "POST",
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
    errorCodes: ["400", "401", "403", "422", "4XX", "5XX"],
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
    operations.DirectUploadVideoMediaResponse,
    | errors.BadRequestError
    | errors.InvalidPermissionError
    | errors.ForbiddenError
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
    M.json(201, operations.DirectUploadVideoMediaResponse$inboundSchema),
    M.jsonErr(400, errors.BadRequestError$inboundSchema),
    M.jsonErr(401, errors.InvalidPermissionError$inboundSchema),
    M.jsonErr(403, errors.ForbiddenError$inboundSchema),
    M.jsonErr(422, errors.ValidationErrorResponse$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
