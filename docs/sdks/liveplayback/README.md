# LivePlayback
(*livePlayback*)

## Overview

### Available Operations

* [createPlaybackIdOfStream](#createplaybackidofstream) - Create a playbackId
* [deletePlaybackIdOfStream](#deleteplaybackidofstream) - Delete a playbackId
* [getLiveStreamPlaybackId](#getlivestreamplaybackid) - Get playbackId details

## createPlaybackIdOfStream

Generates a new playback ID for the live stream, allowing viewers to access the stream through this ID. The playback ID can be shared with viewers for direct access to the live broadcast. 

  By calling this endpoint with the `streamId`, FastPix returns a unique `playbackId`, which can be used to stream the live content. 

  #### Example

  A media platform needs to distribute a unique playback ID to users for an exclusive live concert. The platform can also embed the stream on various partner websites.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-playbackId-of-stream" method="post" path="/live/streams/{streamId}/playback-ids" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
   security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.livePlayback.createPlaybackIdOfStream({
    streamId: "live-stream-id",
    playbackIdRequest: {
      accessPolicy: "public",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { livePlaybackCreatePlaybackIdOfStream } from "@fastpix/fastpix-node/funcs/livePlaybackCreatePlaybackIdOfStream.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
   security: {
    username: "your-access-token",
    password: "your-secret-key",
  },  
});

async function run() {
  const res = await livePlaybackCreatePlaybackIdOfStream(fastpix, {
    streamId: "8717422d89288ad5958d4a86e9afe2a2",
    playbackIdRequest: {
      accessPolicy: "public",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("livePlaybackCreatePlaybackIdOfStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePlaybackIdOfStreamRequest](../../models/operations/createplaybackidofstreamrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PlaybackIdSuccessResponse](../../models/playbackidsuccessresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UnauthorizedError       | 401                            | application/json               |
| errors.InvalidPermissionError  | 403                            | application/json               |
| errors.LiveNotFoundError       | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## deletePlaybackIdOfStream

Deletes a previously created playback ID for a live stream. This will prevent any new viewers from accessing the stream through the playback ID, though current viewers will be able to continue watching for a limited time before being disconnected. By providing the `playbackId`, FastPix deletes the ID and ensures new playback requests will fail. 

#### Example
A streaming service wants to prevent new users from joining a live stream that is nearing its end. The host can delete the playback ID to ensure no one can join the stream or replay it once it ends.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-playbackId-of-stream" method="delete" path="/live/streams/{streamId}/playback-ids" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
   security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.livePlayback.deletePlaybackIdOfStream({
    streamId: "your-live-stream-id",
    playbackId: "your-playback-id",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { livePlaybackDeletePlaybackIdOfStream } from "@fastpix/fastpix-node/funcs/livePlaybackDeletePlaybackIdOfStream.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
 security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await livePlaybackDeletePlaybackIdOfStream(fastpix, {
    streamId: "your-live-stream-id",
    playbackId: "your-playback-id",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("livePlaybackDeletePlaybackIdOfStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePlaybackIdOfStreamRequest](../../models/operations/deleteplaybackidofstreamrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LiveStreamDeleteResponse](../../models/livestreamdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UnauthorizedError       | 401                            | application/json               |
| errors.InvalidPermissionError  | 403                            | application/json               |
| errors.NotFoundErrorPlaybackId | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## getLiveStreamPlaybackId

Retrieves details about a previously created playback ID. If you provide the distinct `playbackId` that was given back to you in the previous stream or <a href="https://docs.fastpix.io/reference/create-playbackid-of-stream">create playbackId</a> request, FastPix will provide the relevant playback details such as the access policy. 

#### Example
A developer needs to confirm the access policy of the playback ID to ensure whether the stream is public or private for viewers.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-live-stream-playback-id" method="get" path="/live/streams/{streamId}/playback-ids/{playbackId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
 security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.livePlayback.getLiveStreamPlaybackId({
    streamId: "your-live-stream-id",
    playbackId: "your-playback-id",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { livePlaybackGetLiveStreamPlaybackId } from "@fastpix/fastpix-node/funcs/livePlaybackGetLiveStreamPlaybackId.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
 security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await livePlaybackGetLiveStreamPlaybackId(fastpix, {
    streamId: "your-live-stream-id",
    playbackId: "your-playback-id",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("livePlaybackGetLiveStreamPlaybackId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLiveStreamPlaybackIdRequest](../../models/operations/getlivestreamplaybackidrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PlaybackIdSuccessResponse](../../models/playbackidsuccessresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UnauthorizedError       | 401                            | application/json               |
| errors.InvalidPermissionError  | 403                            | application/json               |
| errors.NotFoundErrorPlaybackId | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |
