# SigningKeys

## Overview

### Available Operations

* [create](#create) - Create a signing key
* [list](#list) - Get list of signing key
* [delete](#delete) - Delete a signing key
* [getById](#getbyid) - Get signing key by ID

## create

This endpoint allows you to create a new signing key pair for FastPix. When you call this endpoint, the API generates a 2048-bit RSA key pair. The privateKey is returned in the response, encoded in Base64 format. You also receive a unique key ID to reference the key in future operations. FastPix securely stores the public key to validate signed tokens. 


<h4>Instructions</h4> 


**Private key handling:** The privateKey you receive is encoded in Base64. To use it, decode the value using Base64 decoding. Make sure to store this private key securely, as it is required for signing tokens. 


**Key-ID:** The ID is used to reference this specific key pair in future API requests or configurations.


After the key pair is generated, the developer must securely store the private key because FastPix does not save it. The public key is used by FastPix to verify signed tokens and ensure that the client interacting with the system is legitimate.





<h4>Use case scenario</h4> 



**Use case:** A developer building a video subscription service wants to ensure that only authorized users can access premium content. By generating a signing key, the developer can issue signed JSON Web Tokens (JWTs) to authenticate and authorize users. These tokens can be validated by FastPix using the stored public key. 


**Detailed example:**  You are building a video-on-demand platform that restricts access based on user subscriptions. To ensure only subscribed users can stream content, you generate a signing key using this API. Each time a user logs in, you create a JWT signed with the private key. When the user attempts to play a video, FastPix uses the public key to verify the token and confirms that the user is authorized.<br/>
Related guide: <a href="https://docs.fastpix.io/docs/secure-playback-with-jwts">Create and use signing keys</a>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_signing_key" method="post" path="/iam/signing-keys" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.signingKeys.create();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { signingKeysCreate } from "@fastpix/fastpix-node/funcs/signingKeysCreate.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await signingKeysCreate(fastpix);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("signingKeysCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateSigningKeyResponse](../../models/operations/createsigningkeyresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.FastpixDefaultError | 4XX, 5XX                   | \*/\*                      |

## list

This endpoint returns a list of all the signing keys associated with an organization in FastPix. Each key entry in the response includes metadata such as the key id, creation date, and workspace details. This helps you manage multiple keys, track their usage, and identify which keys are valid for signing API requests. 




<h4>How it works</h4> 


The API returns the list in a paginated format, allowing you to audit and track all keys used for your application. Regularly reviewing this list is essential for ensuring that old or compromised keys are promptly revoked and that new keys are properly integrated into workflows. 




<h4>Use case scenario</h4> 



**Use case:** A security-conscious development team wants to ensure they follow a key rotation policy, rotating signing keys every few months. By retrieving the list of signing keys, they can identify which keys are still in use and which ones need to be rotated. 


**Detailed example:**  You manage a multi-region video platform where teams in different regions use their own signing keys. To comply with your organization’s security policies, you regularly review the list of signing keys to verify which ones are still active. You notice that some keys haven’t been used for several months. Based on their creation dates, you decide to rotate those keys.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_signing_keys" method="get" path="/iam/signing-keys" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.signingKeys.list({
    limit: 25,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { signingKeysList } from "@fastpix/fastpix-node/funcs/signingKeysList.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await signingKeysList(fastpix, {
    limit: 25,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("signingKeysList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSigningKeysRequest](../../models/operations/listsigningkeysrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSigningKeysResponse](../../models/operations/listsigningkeysresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.FastpixDefaultError | 4XX, 5XX                   | \*/\*                      |

## delete

This endpoint allows you to delete an existing signing key, and the action is permanent. After a key is deleted, any signatures or tokens generated with that key become invalid immediately. This means you can no longer use the key to sign JSON Web Tokens (JWTs) or authenticate API requests. 
<h4>Usage</h4> 
To delete a signing key, provide the unique key ID that you obtained when creating the key. This key id serves as the identifier for the specific signing key you want to remove from your account. 



<h4>How it works</h4> 

When you specify the keyId, the API removes the signing key from the system. After the key is deleted, any API requests or tokens that rely on it fail. This action is useful when a key is compromised or when rotating keys as part of security policies. 



<h4>Use case scenario</h4> 


**Use case:** A key used by an outdated application version has been compromised, or a developer accidentally leaked it. To prevent unauthorized access, the developer deletes the signing key, revoking its ability to sign requests immediately. 


**Detailed example:**  Suppose you have a signing key used for a specific version of your mobile app, and you discover that the key has been compromised due to a security breach. To mitigate the issue, you delete the key to invalidate any tokens generated using it. As soon as the key is deleted, users on the compromised version of the app can no longer make valid requests, thus preventing further exploitation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_signing_key" method="delete" path="/iam/signing-keys/{signingKeyId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.signingKeys.delete({
    signingKeyId: "your-signing-key-id",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { signingKeysDelete } from "@fastpix/fastpix-node/funcs/signingKeysDelete.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await signingKeysDelete(fastpix, {
    signingKeyId: "your-signing-key-id",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("signingKeysDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSigningKeyRequest](../../models/operations/deletesigningkeyrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteSigningKeyResponse](../../models/operations/deletesigningkeyresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.FastpixDefaultError | 4XX, 5XX                   | \*/\*                      |

## getById

This endpoint allows you to retrieve detailed information about a specific signing key using its unique key id. While the private key is not returned for security reasons, You can view the key’s creation date, status, and other associated metadata. This endpoint also returns the workspaceId and publicKey in the response. 


<h4>Usage: Generating a JWT token</h4> 

In the response, the API returns the workspaceId and publicKey associated with the signing key. With the publicKey and the privateKey obtained from the "Create a Signing Key" endpoint, you can generate a JSON Web Token (JWT) using the RS256 algorithm. This token can be utilized for accessing private media assets, GIFs, thumbnails, and spritesheets. 



<h4>Payload:</h4> 


```
{ 
  "kid": "your-signing-key-id", 
  "aud": "media:your-playback-id", 
  "iss": "fastpix.io", 
  "sub": "sub", 
  "iat": 1706703204, 
  "exp": 1735626783 

} 
```



* **kid:** The key ID of the signing key. 
* **aud:** The audience for which the token is intended, enter the playbackId here.
* **iss:**  The issuer of the token (for example, "fastpix.io "). 
* **sub:** The subject of the token, typically representing the user or entity the token is issued for. In this case, use the workspaceId fetched from the "Get Signing Key by ID" endpoint. 
* **groups:** An array of groups the subject belongs to (for example, ["user"]).
* **iat:** The issued-at timestamp, indicating when the token was created. 
* **exp:** The expiration timestamp, indicating when the token will no longer be valid. 





<h4>Use case scenario</h4> 



**Use case:** A developer is unsure about the status of a signing key they created months ago and wants to verify whether it's still in use or has expired. 



**Detailed example:**  You’re working on a streaming platform and realize you haven’t checked the status of a signing key that was used for playback access several months ago. By fetching the key details using its ID, you can confirm whether it’s still active, when it was created, and if it’s nearing expiration. This allows you to plan a rotation or deactivation if needed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-signing_key_by_id" method="get" path="/iam/signing-keys/{signingKeyId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.signingKeys.getById({
    signingKeyId: "your-signing-key-id",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { signingKeysGetById } from "@fastpix/fastpix-node/funcs/signingKeysGetById.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await signingKeysGetById(fastpix, {
    signingKeyId: "your-signing-key-id",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("signingKeysGetById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSigningKeyByIdRequest](../../models/operations/getsigningkeybyidrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSigningKeyByIdResponse](../../models/operations/getsigningkeybyidresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.FastpixDefaultError | 4XX, 5XX                   | \*/\*                      |