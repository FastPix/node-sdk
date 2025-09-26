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
 * Delete a signing key
 *
 * @remarks
 * This endpoint allows you to delete an existing signing key, and the action is permanent. Once a key is deleted, any signatures or tokens generated using that key will immediately become invalid. This means you can no longer use the key to sign JSON Web Tokens (JWTs) or authenticate API requests.
 * <h4>Usage</h4>
 * To delete a signing key, you will need to provide the unique key id that was obtained when creating the signing key. This key id serves as the identifier for the specific signing key you want to remove from your account.
 *
 * <h4>How it works</h4>
 *
 * By specifying the key id, the API removes the signing key from the system. After the key is deleted, any API requests or tokens that rely on it will fail. This action is useful when a key is compromised or when rotating keys as part of security policies.
 *
 * <h4>Use case scenario</h4>
 *
 * **Use case:** A key used by an outdated application version has been compromised, or a developer accidentally leaked it. To prevent unauthorized access, the developer deletes the signing key, revoking its ability to sign requests immediately.
 *
 * **Detailed example:**  Let’s say you have a signing key used for a specific version of your mobile app, and you discover that this key has been compromised due to a security breach. To mitigate the issue, you delete the key to invalidate any tokens generated using it. As soon as the key is deleted, users on the compromised version of the app can no longer make valid requests, thus preventing further exploitation.
 */
export function signingKeysDeleteSigningKey(
  client: FastpixCore,
  request: operations.DeleteSigningKeyRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    models.DeleteSigningKeyResponse,
    | errors.UnAuthorizedResponseError
    | errors.ForbiddenResponseError
    | errors.SigningKeyNotFoundError
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
  request: operations.DeleteSigningKeyRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      models.DeleteSigningKeyResponse,
      | errors.UnAuthorizedResponseError
      | errors.ForbiddenResponseError
      | errors.SigningKeyNotFoundError
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
    (value) => operations.DeleteSigningKeyRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    signingKeyId: encodeSimple("signingKeyId", payload.signingKeyId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/iam/signing-keys/{signingKeyId}")(pathParams);

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "delete_signing_key",
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
    method: "DELETE",
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
    models.DeleteSigningKeyResponse,
    | errors.UnAuthorizedResponseError
    | errors.ForbiddenResponseError
    | errors.SigningKeyNotFoundError
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
    M.json(200, models.DeleteSigningKeyResponse$inboundSchema),
    M.jsonErr(401, errors.UnAuthorizedResponseError$inboundSchema),
    M.jsonErr(403, errors.ForbiddenResponseError$inboundSchema),
    M.jsonErr(404, errors.SigningKeyNotFoundError$inboundSchema),
    M.jsonErr(422, errors.ValidationErrorResponse$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
