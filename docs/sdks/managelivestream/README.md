# ManageLiveStream
(*manageLiveStream*)

## Overview

### Available Operations

* [getAllStreams](#getallstreams) - Get all live streams
* [getLiveStreamViewerCountById](#getlivestreamviewercountbyid) - Get stream views by ID
* [getLiveStreamById](#getlivestreambyid) - Get stream by ID
* [deleteLiveStream](#deletelivestream) - Delete a stream
* [updateLiveStream](#updatelivestream) - Update a stream
* [enableLiveStream](#enablelivestream) - Enable a stream
* [disableLiveStream](#disablelivestream) - Disable a stream
* [completeLiveStream](#completelivestream) - Complete a stream

## getAllStreams

Retrieves a list of all live streams associated with the current workspace. It provides an overview of both current and past live streams, including details like `streamId`, `metadata`, `status`, `createdAt` and more.


#### How it works

Use the access token and secret key related to the workspace in the request header. When called, the API provides a paginated response containing all the live streams in that specific workspace. This is helpful for retrieving a large volume of streams and managing content in bulk.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-all-streams" method="get" path="/live/streams" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  try {
    console.log('Starting FastPix Server...');
    
    // Get all streams first (safer operation)
    console.log('Getting all streams...');
    const streams = await fastpix.manageLiveStream.getAllStreams({
      limit: 20,
    });
    console.log('Available streams:', JSON.stringify(streams, null, 2));
    
    // Create a playback ID instead of completing the stream
    console.log('Creating playback ID...');
    const playbackResult = await fastpix.livePlayback.createPlaybackIdOfStream({
      streamId: "your-stream-id",
      playbackIdRequest: {
        accessPolicy: "public",
      },
    });
    console.log('Playback ID created:', JSON.stringify(playbackResult, null, 2));
    
    console.log('Server operations completed successfully!');
  } catch (error) {
    console.error('Server error:', error.message);
    console.error('Error details:', error);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageLiveStreamGetAllStreams } from "@fastpix/fastpix-node/funcs/manageLiveStreamGetAllStreams.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await manageLiveStreamGetAllStreams(fastpix, {
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageLiveStreamGetAllStreams failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllStreamsRequest](../../models/operations/getallstreamsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetStreamsResponse](../../models/getstreamsresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UnauthorizedError       | 401                            | application/json               |
| errors.InvalidPermissionError  | 403                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## getLiveStreamViewerCountById

This endpoint retrieves the current number of viewers watching a specific live stream, identified by its unique `streamId`.

The viewer count is an **approximate value**, optimized for performance. It provides a near-real-time estimate of how many clients are actively watching the stream. This approach ensures high efficiency, especially when the stream is being watched at large scale across multiple devices or platforms.

#### Example

Suppose a content creator is hosting a live concert and wants to display the number of live viewers on their dashboard. This endpoint can be queried to show up-to-date viewer statistics.

Related guide: <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-live-stream-viewer-count-by-id" method="get" path="/live/streams/{streamId}/viewer-count" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.manageLiveStream.getLiveStreamViewerCountById({
    streamId: "your-stream-id",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageLiveStreamGetLiveStreamViewerCountById } from "@fastpix/fastpix-node/funcs/manageLiveStreamGetLiveStreamViewerCountById.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
  },
});

async function run() {
  const res = await manageLiveStreamGetLiveStreamViewerCountById(fastpix, {
    streamId: "your-stream-id",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageLiveStreamGetLiveStreamViewerCountById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLiveStreamViewerCountByIdRequest](../../models/operations/getlivestreamviewercountbyidrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ViewsCountResponse](../../models/viewscountresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UnauthorizedError       | 401                            | application/json               |
| errors.InvalidPermissionError  | 403                            | application/json               |
| errors.LiveNotFoundError       | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## getLiveStreamById

This endpoint retrieves details about a specific live stream by its unique `streamId`. It includes data such as the stream’s `status` (idle, preparing, active, disabled), `metadata` (title, description), and more. 
#### Example

  Suppose a news agency is broadcasting a live event and wants to track the configurations set for the live stream while also checking the stream's status.


Related guide: <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-live-stream-by-id" method="get" path="/live/streams/{streamId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageLiveStream.getLiveStreamById({
    streamId: "61a264dcc447b63da6fb79ef925cd76d",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageLiveStreamGetLiveStreamById } from "@fastpix/fastpix-node/funcs/manageLiveStreamGetLiveStreamById.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await manageLiveStreamGetLiveStreamById(fastpix, {
    streamId: "your-stream-id",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageLiveStreamGetLiveStreamById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLiveStreamByIdRequest](../../models/operations/getlivestreambyidrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LivestreamgetResponse](../../models/livestreamgetresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UnauthorizedError       | 401                            | application/json               |
| errors.InvalidPermissionError  | 403                            | application/json               |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## deleteLiveStream

Permanently removes a specified live stream from the workspace. If the stream is still active, the encoder will be disconnected, and the ingestion will stop. This action cannot be undone, and any future playback attempts will fail. 

  By providing the `streamId`, the API will terminate any active connections to the stream and remove it from the list of available live streams. You can further look for <a href="https://docs.fastpix.io/docs/live-events#videolive_streamdeleted">video.live_stream.deleted</a> webhook to notify your system about the status. 

  #### Example

  For an online concert platform, a trial stream was mistakenly made public. The event manager deletes the stream before the concert begins to avoid confusion among viewers. 


  Related guide: <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-live-stream" method="delete" path="/live/streams/{streamId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.manageLiveStream.deleteLiveStream({
    streamId: "your-stream-id",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageLiveStreamDeleteLiveStream } from "@fastpix/fastpix-node/funcs/manageLiveStreamDeleteLiveStream.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
   security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await manageLiveStreamDeleteLiveStream(fastpix, {
    streamId: "your-stream-id",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageLiveStreamDeleteLiveStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteLiveStreamRequest](../../models/operations/deletelivestreamrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
| errors.LiveNotFoundError       | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## updateLiveStream

This endpoint allows you to modify the parameters of an existing live stream, such as its `metadata` (title, description) or the `reconnectWindow`. It’s useful for making changes to a stream that has already been created but not yet ended. Once the live stream is disabled, you cannot update a stream. 


  The updated stream parameters and the `streamId` needs to be shared in the request, and FastPix will return the updated stream details. Once updated, <a href="https://docs.fastpix.io/docs/live-events#videolive_streamupdated">video.live_stream.updated</a> webhook event notifies your system. 

 #### Example

 A host realizes they need to extend the reconnect window for their live stream in case they lose connection temporarily during the event. Or suppose during a multi-day online conference, the event organizers need to update the stream title to reflect the next day's session while keeping the same stream ID for continuity. 



  Related guide: <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update-live-stream" method="patch" path="/live/streams/{streamId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
   security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.manageLiveStream.updateLiveStream({
    streamId: "your-stream-id",
    patchLiveStreamRequest: {
      metadata: {
        "livestream_name": "Gaming_stream",
      },
      reconnectWindow: 100,
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
import { manageLiveStreamUpdateLiveStream } from "@fastpix/fastpix-node/funcs/manageLiveStreamUpdateLiveStream.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
   security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await manageLiveStreamUpdateLiveStream(fastpix, {
    streamId: "your-stream-key",
    patchLiveStreamRequest: {
      metadata: {
        "livestream_name": "Gaming_stream",
      },
      reconnectWindow: 100,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageLiveStreamUpdateLiveStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLiveStreamRequest](../../models/operations/updatelivestreamrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PatchResponseDTO](../../models/patchresponsedto.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UnauthorizedError       | 401                            | application/json               |
| errors.InvalidPermissionError  | 403                            | application/json               |
| errors.LiveNotFoundError       | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## enableLiveStream

This endpoint allows you to enable a livestream by transitioning its status from `disabled` to `idle`. Once enabled, the stream becomes available and ready to accept an incoming broadcast from a streaming tool.

Streams on the trial plan cannot be re-enabled if they are in the `disabled` state.

The `livestreamId` must be provided in the path, and the stream must not already be in an enabled state (`idle`, `preparing`, or `active`).

#### Example

A creator disables a livestream to pause it temporarily. Later, they decide to continue the session. By calling this endpoint with the stream's ID, they can re-enable and restart the same livestream.

Related guide <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="enable-live-stream" method="put" path="/live/streams/{streamId}/live-enable" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.manageLiveStream.enableLiveStream({
    streamId: "your-stream-id",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageLiveStreamEnableLiveStream } from "@fastpix/fastpix-node/funcs/manageLiveStreamEnableLiveStream.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
   security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await manageLiveStreamEnableLiveStream(fastpix, {
    streamId: "your-stream-id",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageLiveStreamEnableLiveStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnableLiveStreamRequest](../../models/operations/enablelivestreamrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LiveStreamDeleteResponse](../../models/livestreamdeleteresponse.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.TrialPlanRestrictionError | 400                              | application/json                 |
| errors.StreamAlreadyEnabledError | 400                              | application/json                 |
| errors.UnauthorizedError         | 401                              | application/json                 |
| errors.InvalidPermissionError    | 403                              | application/json                 |
| errors.NotFoundError             | 404                              | application/json                 |
| errors.ValidationErrorResponse   | 422                              | application/json                 |
| errors.FastpixDefaultError       | 4XX, 5XX                         | \*/\*                            |

## disableLiveStream

This endpoint disables a livestream by setting its status to `disabled`. Use this to stop a livestream when it's no longer needed or should be taken offline intentionally.

A disabled stream can later be re-enabled using the enable endpoint — however, if you're on a trial plan, re-enabling is not allowed once the stream is disabled.

#### Example

A speaker finishes their live session and wants to prevent the stream from being mistakenly started again. By calling this endpoint, the stream is transitioned to a `disabled` state, ensuring it's permanently stopped (unless re-enabled on a paid plan).

Related guide <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="disable-live-stream" method="put" path="/live/streams/{streamId}/live-disable" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
   security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.manageLiveStream.disableLiveStream({
    streamId: "your-stream-id",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageLiveStreamDisableLiveStream } from "@fastpix/fastpix-node/funcs/manageLiveStreamDisableLiveStream.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
   security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await manageLiveStreamDisableLiveStream(fastpix, {
    streamId: "your-stream-id",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageLiveStreamDisableLiveStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DisableLiveStreamRequest](../../models/operations/disablelivestreamrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LiveStreamDeleteResponse](../../models/livestreamdeleteresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.StreamAlreadyDisabledError | 400                               | application/json                  |
| errors.UnauthorizedError          | 401                               | application/json                  |
| errors.InvalidPermissionError     | 403                               | application/json                  |
| errors.LiveNotFoundError          | 404                               | application/json                  |
| errors.ValidationErrorResponse    | 422                               | application/json                  |
| errors.FastpixDefaultError        | 4XX, 5XX                          | \*/\*                             |

## completeLiveStream

This endpoint marks a livestream as completed by stopping the active stream and transitioning its status to `idle`. It is typically used after a livestream session has ended.

This operation only works when the stream is in the `active` state.

Completing a stream can help finalize the session and trigger post-processing events like VOD generation.

#### Example

A virtual event ends, and the system or host needs to close the livestream to prevent further streaming. This endpoint ensures the livestream status is changed from `active` to `idle`, indicating it's officially completed.

Related guide <a href="https://docs.fastpix.io/docs/manage-streams">Manage streams</a>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="complete-live-stream" method="put" path="/live/streams/{streamId}/finish" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
   security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.manageLiveStream.completeLiveStream({
    streamId: "your-stream-id",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageLiveStreamCompleteLiveStream } from "@fastpix/fastpix-node/funcs/manageLiveStreamCompleteLiveStream.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
   security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await manageLiveStreamCompleteLiveStream(fastpix, {
    streamId: "your-stream-id",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageLiveStreamCompleteLiveStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CompleteLiveStreamRequest](../../models/operations/completelivestreamrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LiveStreamDeleteResponse](../../models/livestreamdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UnauthorizedError       | 400, 401                       | application/json               |
| errors.InvalidPermissionError  | 403                            | application/json               |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |
