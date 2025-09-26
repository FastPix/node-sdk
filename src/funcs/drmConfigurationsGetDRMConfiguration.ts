import { FastpixCore } from "../core.js";
import { encodeFormQuery } from "../lib/encodings.js";
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
 * Get list of DRM configuration IDs
 *
 * @remarks
 *
 * This endpoint retrieves the DRM configuration (DRM ID) associated with a workspace. It returns a list of DRM configurations, identified by a unique DRM ID, which is used for creating DRM encrypted asset.
 *
 * **How it works:**
 * 1. Make a GET request to this endpoint.
 * 2. Optionally use the `offset` and `limit` query parameters to paginate through the list of DRM configurations.
 * 3. The response includes a list of DRM IDs and pagination metadata.
 *
 * **Example:**
 * A media service provider may retrieve DRM configuration for a workspace to create DRM content.
 *
 * Related guide: <a href="https://docs.fastpix.io/docs/secure-playback-with-drm">Manage DRM configuration</a>
 */
export function drmConfigurationsGetDRMConfiguration(
  client: FastpixCore,
  request?: operations.GetDrmConfigurationRequest | undefined,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.GetDrmConfigurationResponse,
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
  request?: operations.GetDrmConfigurationRequest | undefined,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.GetDrmConfigurationResponse,
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
      operations.GetDrmConfigurationRequest$outboundSchema.optional().parse(
        value,
      ),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/on-demand/drm-configurations")();

  const query = encodeFormQuery({
    "limit": payload?.limit,
    "offset": payload?.offset,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "getDrmConfiguration",
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
    operations.GetDrmConfigurationResponse,
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
    M.json(200, operations.GetDrmConfigurationResponse$inboundSchema),
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
