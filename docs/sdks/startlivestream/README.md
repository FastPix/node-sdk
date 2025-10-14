# StartLiveStream
(*startLiveStream*)

## Overview

### Available Operations

* [createNewStream](#createnewstream) - Create a new stream

## createNewStream

Allows you to initiate a new <a href="https://docs.fastpix.io/docs/get-started-with-live-streaming">RTMPS</a> or <a href="https://docs.fastpix.io/docs/using-srt-to-live-stream">SRT</a> live stream on FastPix. Upon creating a stream, FastPix generates a unique `streamKey` and `srtSecret`, which can be used with any broadcasting software (like OBS) to connect to FastPix's RTMPS or SRT servers.
Leverage SRT for live streaming in environments with unstable networks, taking advantage of its error correction and encryption features for a resilient and secure broadcast. 

<h4>How it works</h4> 

1. Send a a `POST` request to this endpoint. You can configure the stream settings, including `metadata` (such as stream name and description), `reconnectWindow` (in case of disconnection), and privacy options (`public` or `private`). 

2. FastPix returns the stream details for both RTMPS and SRT configurations. These keys and IDs from the stream details are essential for connecting the broadcasting software to FastPix’s servers and transmitting the live stream to viewers.

3. Once the live stream is created, we’ll shoot a `POST` message to the address you give us with the webhook event <a href="https://docs.fastpix.io/docs/live-events#videolive_streamcreated">video.live_stream.created</a>.


**Example:**


  Imagine a gaming platform that allows users to live stream gameplay directly from their dashboard. The API creates a new stream, provides the necessary stream key, and sets it to "private" so that only specific viewers can access it. 


Related guide: <a href="https://docs.fastpix.io/docs/how-to-livestream">How to live stream</a>

### Live Stream Settings Explained

#### What is DVR Mode?

**DVR (Digital Video Recorder) Mode** allows viewers to control their live stream viewing experience, just like a TV DVR at home.

**With DVR Mode Enabled (`enableDvrMode: true`):**
- Viewers can **pause** the live stream
- Viewers can **rewind** to see earlier parts
- Viewers can **resume** from where they paused
- Perfect for viewers who join the stream late

**With DVR Mode Disabled (`enableDvrMode: false`):**
- Viewers can only watch in **real-time**
- No pausing or rewinding allowed
- Stream plays continuously like traditional TV

#### Complete Live Stream Configuration

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.startLiveStream.createNewStream({
    playbackSettings: {
      accessPolicy: "public", // Who can watch the stream
    },
    inputMediaSettings: {
      mediaPolicy: "public", // Who can access recorded content
      metadata: {
        "livestream_name": "My Live Stream",
        "description": "Live stream description",
      },
      enableDvrMode: true, // Enable pause/rewind functionality
      reconnectWindow: 60, // Seconds to wait if connection drops
      maxResolution: "1080p", // Maximum video quality
    },
  });

  console.log(result);
}

run();
```

#### Settings Explained for Beginners

| Setting | What It Does | Options | Example Use Case |
|---------|--------------|---------|-------------------|
| **`accessPolicy`** | Controls who can watch your live stream | `"public"` or `"private"` | `"public"` = Anyone can watch, `"private"` = Only authenticated users |
| **`mediaPolicy`** | Controls who can access the recorded video after streaming | `"public"` or `"private"` | `"public"` = Anyone can watch recording, `"private"` = Only authenticated users |
| **`enableDvrMode`** | Allows viewers to pause and rewind the live stream | `true` or `false` | `true` = Viewers can pause/rewind, `false` = Real-time only |
| **`reconnectWindow`** | How long to wait if your internet connection drops | `60-1800` seconds | `60` = Wait 1 minute before ending stream, `1800` = Wait 30 minutes |
| **`maxResolution`** | Maximum video quality for your stream | `"720p"`, `"1080p"`, `"4K"` | `"1080p"` = High quality, `"720p"` = Lower bandwidth usage |
| **`metadata`** | Tags and information about your stream | Key-value pairs | `{"title": "My Stream", "category": "Gaming"}` |

#### When to Use DVR Mode

**Use `enableDvrMode: true` for:**
- **Educational content** - Students can pause lectures to take notes
- **Live events** - Viewers joining late can rewind to the beginning
- **Sports streams** - Fans can rewind to see amazing plays
- **Long presentations** - Viewers can take breaks and resume
- **Tutorials** - Step-by-step guides where pausing is helpful
- **Q&A sessions** - Viewers can pause to think about questions

**Use `enableDvrMode: false` for:**
- **Breaking news** - Information that must be watched in real-time
- **Live auctions** - Time-sensitive bidding where pausing isn't appropriate
- **Live gaming** - Real-time gameplay where pausing breaks the experience
- **Live concerts** - Continuous music performances
- **Live sports** - Real-time action where pausing disrupts the flow
- **Resource saving** - When you want to save bandwidth and storage

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-new-stream" method="post" path="/live/streams" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-security-key",
  },
});

async function run() {
  const result = await fastpix.startLiveStream.createNewStream({
    playbackSettings: {
      accessPolicy: "public",
    },
    inputMediaSettings: {
      mediaPolicy: "public",
      metadata: {
        "livestream_name": "fastpix_livestream",
      },
      enableDvrMode: true,
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
import { startLiveStreamCreateNewStream } from "@fastpix/fastpix-node/funcs/startLiveStreamCreateNewStream.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await startLiveStreamCreateNewStream(fastpix, {
    playbackSettings: {
      accessPolicy: "public",
    },
    inputMediaSettings: {
      mediaPolicy: "public",
      metadata: {
        "livestream_name": "fastpix_livestream",
      },
      enableDvrMode: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("startLiveStreamCreateNewStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateLiveStreamRequest](../../models/createlivestreamrequest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LiveStreamResponseDTO](../../models/livestreamresponsedto.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UnauthorizedError       | 401                            | application/json               |
| errors.InvalidPermissionError  | 403                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |