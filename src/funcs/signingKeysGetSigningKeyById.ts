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
 * Get signing key by ID
 *
 * @remarks
 * This endpoint allows you to retrieve detailed information about a specific signing key using its unique key id. While the private key is not returned for security reasons, you'll be able to see the key's creation date, status, and other associated metadata. This endpoint also returns the workspaceId and publicKey in the response.
 *
 * <h4>Usage: Generating a JWT token</h4>
 *
 * In the response, you will receive the workspaceId and publicKey associated with the signing key. With the publicKey and the privateKey obtained from the "Create a Signing Key" endpoint, you can generate a JSON Web Token (JWT) using the RS256 algorithm. This token can be utilized for accessing private media assets, GIFs, thumbnails, and spritesheets.
 *
 * <h4>Payload:</h4>
 *
 * ```
 * {
 *   "kid": "359302ee-2446-4afe-9348-8b4656b9ddb1",
 *   "aud": "media:6cee6f85-9334-4a51-9ce3-e0241d94ceef",
 *   "iss": "fastpix.io",
 *   "sub": "",
 *   "iat": 1706703204,
 *   "exp": 1735626783
 *
 * }
 * ```
 *
 * * **kid:** The key ID of the signing key.
 * * **aud:** The audience for which the token is intended.
 * * **iss:** The issuer of the token (e.g., "fastpix.io").
 * * **sub:** The subject of the token, typically representing the user or entity the token is issued for. In this case, use the workspaceId fetched from the "Get Signing Key by ID" endpoint.
 * * **groups:** An array of groups the subject belongs to (e.g., ["user"]).
 * * **iat:** The issued-at timestamp, indicating when the token was created.
 * * **exp:** The expiration timestamp, indicating when the token will no longer be valid.
 *
 * <h4>Use case scenario</h4>
 *
 * **Use case:** A developer is unsure about the status of a signing key they created months ago and wants to verify whether it's still in use or has expired.
 *
 * **Detailed example:**  You’re working on a streaming platform and realize you haven’t checked the status of a signing key that was used for playback access several months ago. By fetching the key details using its ID, you can confirm whether it’s still active, when it was created, and if it’s nearing expiration. This allows you to plan a rotation or deactivation if needed.
 */
export function signingKeysGetSigningKeyById(
  client: FastpixCore,
  request: operations.GetSigningKeyByIdRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    models.GetPublicPemUsingSigningKeyIdResponseDTO,
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
  request: operations.GetSigningKeyByIdRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      models.GetPublicPemUsingSigningKeyIdResponseDTO,
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
    (value) => operations.GetSigningKeyByIdRequest$outboundSchema.parse(value),
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
    operationID: "get-signing_key_by_id",
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
    models.GetPublicPemUsingSigningKeyIdResponseDTO,
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
    M.json(200, models.GetPublicPemUsingSigningKeyIdResponseDTO$inboundSchema),
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
