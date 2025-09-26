# SimulcastStream
(*simulcastStream*)

## Overview

### Available Operations

* [createSimulcastOfStream](#createsimulcastofstream) - Create a simulcast
* [deleteSimulcastOfStream](#deletesimulcastofstream) - Delete a simulcast
* [getSpecificSimulcastOfStream](#getspecificsimulcastofstream) - Get a specific simulcast
* [updateSpecificSimulcastOfStream](#updatespecificsimulcastofstream) - Update a simulcast

## createSimulcastOfStream

Lets you to create a simulcast for a parent live stream. Simulcasting enables you to broadcast the live stream to multiple social platforms simultaneously (e.g., YouTube, Facebook, or Twitch). This feature is useful for expanding your audience reach across different platforms. However, a simulcast can only be created when the parent live stream is in idle state (i.e., not currently live or disabled). Additionally, only one simulcast target can be created per API call. 
#### How it works

1. Upon calling this endpoint, you need to provide the parent `streamId` and the details of the simulcast target (platform and credentials). The system will generate a unique `simulcastId`, which can be used to manage the simulcast later. 

2. To notify your application about the status of simulcast related events check for the <a href="https://docs.fastpix.io/docs/webhooks-collection#simulcast-target-events">webhooks for simulcast</a> target events. 

#### Example
An event manager sets up a live stream for a virtual conference and wants to simulcast the stream on YouTube and Facebook Live. They first create the primary live stream in FastPix, ensuring it's in the idle state. Then, they use the API to create a simulcast target for YouTube. 

Related guide: <a href="https://docs.fastpix.io/docs/simulcast-to-3rd-party-platforms">Simulcast to 3rd party platforms</a>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-simulcast-of-stream" method="post" path="/live/streams/{streamId}/simulcast" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.simulcastStream.createSimulcastOfStream({
    streamId: "8717422d89288ad5958d4a86e9afe2a2",
    simulcastRequest: {
      url: "rtmp://hyd01.contribute.live-video.net/app/",
      streamKey: "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
      metadata: {
        "livestream_name": "Tech-Connect Summit",
      },
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
import { simulcastStreamCreateSimulcastOfStream } from "@fastpix/fastpix-node/funcs/simulcastStreamCreateSimulcastOfStream.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await simulcastStreamCreateSimulcastOfStream(fastpix, {
    streamId: "8717422d89288ad5958d4a86e9afe2a2",
    simulcastRequest: {
      url: "rtmp://hyd01.contribute.live-video.net/app/",
      streamKey: "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
      metadata: {
        "livestream_name": "Tech-Connect Summit",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("simulcastStreamCreateSimulcastOfStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateSimulcastOfStreamRequest](../../models/operations/createsimulcastofstreamrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SimulcastResponse](../../models/simulcastresponse.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.SimulcastUnavailableError | 400                              | application/json                 |
| errors.UnauthorizedError         | 401                              | application/json                 |
| errors.InvalidPermissionError    | 403                              | application/json                 |
| errors.LiveNotFoundError         | 404                              | application/json                 |
| errors.ValidationErrorResponse   | 422                              | application/json                 |
| errors.FastpixDefaultError       | 4XX, 5XX                         | \*/\*                            |

## deleteSimulcastOfStream

Allows you to delete a simulcast using its unique `simulcastId`, which was returned during the simulcast creation process. Deleting a simulcast stops the broadcast to the associated platform, but the parent stream will continue to run if it is live. This action is irreversible, and a new simulcast would need to be created if you want to resume streaming to the same platform. 

Webhook event: <a href="https://docs.fastpix.io/docs/live-events#videolive_streamsimulcast_targetdeleted">video.live_stream.simulcast_target.deleted</a>


#### Example
A broadcaster needs to stop simulcasting to one platform due to technical difficulties while keeping the stream active on others. For instance, a tech company is simulcasting a product launch on multiple platforms. Midway through the event, they decide to stop the simulcast on Facebook due to performance issues, but keep it running on YouTube. They call this API to delete the Facebook simulcast target.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-simulcast-of-stream" method="delete" path="/live/streams/{streamId}/simulcast/{simulcastId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.simulcastStream.deleteSimulcastOfStream({
    streamId: "8717422d89288ad5958d4a86e9afe2a2",
    simulcastId: "9217422d89288ad5958d4a86e9afe2a1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { simulcastStreamDeleteSimulcastOfStream } from "@fastpix/fastpix-node/funcs/simulcastStreamDeleteSimulcastOfStream.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await simulcastStreamDeleteSimulcastOfStream(fastpix, {
    streamId: "8717422d89288ad5958d4a86e9afe2a2",
    simulcastId: "9217422d89288ad5958d4a86e9afe2a1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("simulcastStreamDeleteSimulcastOfStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSimulcastOfStreamRequest](../../models/operations/deletesimulcastofstreamrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SimulcastdeleteResponse](../../models/simulcastdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UnauthorizedError       | 401                            | application/json               |
| errors.InvalidPermissionError  | 403                            | application/json               |
| errors.NotFoundErrorSimulcast  | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## getSpecificSimulcastOfStream

Retrieves the details of a specific simulcast associated with a parent live stream. By providing both the `streamId` of the parent stream and the `simulcastId`, FastPix returns detailed information about the simulcast, such as the stream URL, the status of the simulcast, and metadata. 

#### Example
This endpoint can be used to verify the status of the simulcast on external platforms before the live stream begins. For instance, before starting a live gaming event, the organizer wants to ensure that the simulcast to Twitch is set up correctly. They retrieve the simulcast information to confirm that everything is properly configured.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-specific-simulcast-of-stream" method="get" path="/live/streams/{streamId}/simulcast/{simulcastId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.simulcastStream.getSpecificSimulcastOfStream({
    streamId: "8717422d89288ad5958d4a86e9afe2a2",
    simulcastId: "8717422d89288ad5958d4a86e9afe2a2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { simulcastStreamGetSpecificSimulcastOfStream } from "@fastpix/fastpix-node/funcs/simulcastStreamGetSpecificSimulcastOfStream.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await simulcastStreamGetSpecificSimulcastOfStream(fastpix, {
    streamId: "8717422d89288ad5958d4a86e9afe2a2",
    simulcastId: "8717422d89288ad5958d4a86e9afe2a2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("simulcastStreamGetSpecificSimulcastOfStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpecificSimulcastOfStreamRequest](../../models/operations/getspecificsimulcastofstreamrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SimulcastResponse](../../models/simulcastresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UnauthorizedError       | 401                            | application/json               |
| errors.InvalidPermissionError  | 403                            | application/json               |
| errors.NotFoundErrorSimulcast  | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## updateSpecificSimulcastOfStream

Allows you to enable or disable a specific simulcast associated with a parent live stream. The status of the simulcast can be updated at any point, whether the live stream is active or idle. However, once the live stream is disabled, the simulcast can no longer be modified. 

Webhook event: <a href="https://docs.fastpix.io/docs/live-events#videolive_streamsimulcast_targetupdated">video.live_stream.simulcast_target.updated</a>

#### Example
When a `PATCH` request is made to this endpoint, the API updates the status of the simulcast. This can be useful for pausing or resuming a simulcast on a particular platform without stopping the parent live stream.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update-specific-simulcast-of-stream" method="put" path="/live/streams/{streamId}/simulcast/{simulcastId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.simulcastStream.updateSpecificSimulcastOfStream({
    streamId: "9714422d89287ad5758d4a86e9afe1a2",
    simulcastId: "8717422d89288ad5958d4a86e9afe2a2",
    simulcastUpdateRequest: {
      isEnabled: false,
      metadata: {
        "simulcast_name": "Tech today",
      },
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
import { simulcastStreamUpdateSpecificSimulcastOfStream } from "@fastpix/fastpix-node/funcs/simulcastStreamUpdateSpecificSimulcastOfStream.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await simulcastStreamUpdateSpecificSimulcastOfStream(fastpix, {
    streamId: "9714422d89287ad5758d4a86e9afe1a2",
    simulcastId: "8717422d89288ad5958d4a86e9afe2a2",
    simulcastUpdateRequest: {
      isEnabled: false,
      metadata: {
        "simulcast_name": "Tech today",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("simulcastStreamUpdateSpecificSimulcastOfStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSpecificSimulcastOfStreamRequest](../../models/operations/updatespecificsimulcastofstreamrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SimulcastUpdateResponse](../../models/simulcastupdateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UnauthorizedError       | 401                            | application/json               |
| errors.InvalidPermissionError  | 403                            | application/json               |
| errors.NotFoundErrorSimulcast  | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |