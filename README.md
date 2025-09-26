# FastPix Typescript SDK

Type-safe and developer-friendly TypeScript SDK for integration with the FastPix platform API.

# Introduction

The FastPix TypeScript SDK simplifies integration with the FastPix platform. It provides a type-safe and developer-friendly interface for secure and efficient communication with the FastPix API, enabling easy management of media uploads, live streaming, on-demand content, playlists, video analytics, and signing keys for secure access and token management. It is intended for use with Node.js (version >= 18)

# Key Features

## Media API
- **Upload Media**: Seamlessly upload media files from URLs or local devices.  
- **Manage Media**: List, fetch, update, and delete media assets with ease.  
- **Playback IDs**: Generate and manage playback IDs for secure and flexible media access.  
- **Advanced Media Tools**: Generate video summaries, chapters, named entities, subtitles, and perform content moderation.  
- **Playlist Management**: Create and manage playlists, add or remove media, and adjust playback order.  
- **DRM Support**: Configure and manage DRM settings for protected content.  

## Live API
- **Create & Manage Live Streams**: Effortlessly create, list, update, and delete live streams.  
- **Control Stream Access**: Generate playback IDs to manage viewer access securely.  
- **Stream Management**: Enable, disable, or complete streams with fine-grained control.  
- **Simulcast to Multiple Platforms**: Broadcast live content to multiple platforms simultaneously.  

## Signing Keys
- **Create Signing Keys**: Generate signing keys for secure token-based access.  
- **List & Retrieve Keys**: Fetch all keys or get details for a specific key.  
- **Manage Keys**: Delete or revoke signing keys to maintain secure access control.  

## Video Data API
- **View Analytics**: List video views, get detailed view information, and track top-performing content.  
- **Concurrent Viewer Insights**: Access timeseries data for live and on-demand streams.  
- **Custom Reporting**: Filter viewers by dimensions, list breakdowns, and compare metrics across datasets.  
- **Error Tracking & Diagnostics**: Retrieve logs and analyze errors for proactive monitoring.  

For detailed usage, refer to the [FastPix API Reference](https://docs.fastpix.io/reference/signingkeys-overview).

# Prerequisites:

## Getting started with FastPix:

To get started with the **FastPix Node SDK**, ensure you have the following:

- The FastPix APIs are authenticated using an **Access Token** and a **Secret Key**. You must generate these credentials to use the SDK.

- Follow the steps in the [Authentication with Access Tokens](https://docs.fastpix.io/docs/basic-authentication) guide to obtain your credentials.

# Installation:

You can install the FastPix TypeScript SDK using your preferred Node.js package manager:

```bash
npm install @fastpix/fastpix-node
```

### PNPM

```bash
pnpm add @fastpix/fastpix-node
```

### Bun

```bash
bun add @fastpix/fastpix-node
```

### Yarn

```bash
yarn add @fastpix/fastpix-node
```

## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
This package is published with CommonJS and ES Modules (ESM) support.

## Table of Contents
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
  * [Detailed Usage](#detailed-usage)
  * [Support](#support)

## SDK Example Usage

### Example

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "secret-key",
  },
});

async function run() {
  const result = await fastpix.inputVideo.createMedia({
    inputs: [
      {
        type: "video",
        url: "https://static.fastpix.io/sample.mp4",
      },
    ],
    metadata: {
      "key1": "value1",
    },
    accessPolicy: "public",
  });

  console.log(result);
}

run();

```

## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [dimensions](docs/sdks/dimensions/README.md)

* [listDimensions](docs/sdks/dimensions/README.md#listdimensions) - List the dimensions
* [listFilterValuesForDimension](docs/sdks/dimensions/README.md#listfiltervaluesfordimension) - List the filter values for a dimension

### [drmConfigurations](docs/sdks/drmconfigurations/README.md)

* [getDrmConfiguration](docs/sdks/drmconfigurations/README.md#getdrmconfiguration) - Get list of DRM configuration IDs
* [getDrmConfigurationById](docs/sdks/drmconfigurations/README.md#getdrmconfigurationbyid) - Get DRM configuration by ID

### [errors](docs/sdks/errors/README.md)

* [listErrors](docs/sdks/errors/README.md#listerrors) - List errors


### [inputVideo](docs/sdks/inputvideo/README.md)

* [createMedia](docs/sdks/inputvideo/README.md#createmedia) - Create media from URL
* [directUploadVideoMedia](docs/sdks/inputvideo/README.md#directuploadvideomedia) - Upload media from device

### [inVideoAIFeatures](docs/sdks/invideoaifeatures/README.md)

* [updateMediaSummary](docs/sdks/invideoaifeatures/README.md#updatemediasummary) - Generate video summary
* [updateMediaChapters](docs/sdks/invideoaifeatures/README.md#updatemediachapters) - Generate video chapters
* [updateMediaNamedEntities](docs/sdks/invideoaifeatures/README.md#updatemedianamedentities) - Generate named entities
* [updateMediaModeration](docs/sdks/invideoaifeatures/README.md#updatemediamoderation) - Enable video moderation

### [livePlayback](docs/sdks/liveplayback/README.md)

* [createPlaybackIdOfStream](docs/sdks/liveplayback/README.md#createplaybackidofstream) - Create a playbackId
* [deletePlaybackIdOfStream](docs/sdks/liveplayback/README.md#deleteplaybackidofstream) - Delete a playbackId
* [getLiveStreamPlaybackId](docs/sdks/liveplayback/README.md#getlivestreamplaybackid) - Get playbackId details

### [manageLiveStream](docs/sdks/managelivestream/README.md)

* [getAllStreams](docs/sdks/managelivestream/README.md#getallstreams) - Get all live streams
* [getLiveStreamViewerCountById](docs/sdks/managelivestream/README.md#getlivestreamviewercountbyid) - Get stream views by ID
* [getLiveStreamById](docs/sdks/managelivestream/README.md#getlivestreambyid) - Get stream by ID
* [deleteLiveStream](docs/sdks/managelivestream/README.md#deletelivestream) - Delete a stream
* [updateLiveStream](docs/sdks/managelivestream/README.md#updatelivestream) - Update a stream
* [enableLiveStream](docs/sdks/managelivestream/README.md#enablelivestream) - Enable a stream
* [disableLiveStream](docs/sdks/managelivestream/README.md#disablelivestream) - Disable a stream
* [completeLiveStream](docs/sdks/managelivestream/README.md#completelivestream) - Complete a stream

### [manageVideos](docs/sdks/managevideos/README.md)

* [listMedia](docs/sdks/managevideos/README.md#listmedia) - Get list of all media
* [listLiveClips](docs/sdks/managevideos/README.md#listliveclips) - Get all clips of a live stream
* [getMedia](docs/sdks/managevideos/README.md#getmedia) - Get a media by ID
* [updatedMedia](docs/sdks/managevideos/README.md#updatedmedia) - Update a media by ID
* [deleteMedia](docs/sdks/managevideos/README.md#deletemedia) - Delete a media by ID
* [addMediaTrack](docs/sdks/managevideos/README.md#addmediatrack) - Add audio / subtitle track
* [cancelUpload](docs/sdks/managevideos/README.md#cancelupload) - Cancel ongoing upload
* [updateMediaTrack](docs/sdks/managevideos/README.md#updatemediatrack) - Update audio / subtitle track
* [deleteMediaTrack](docs/sdks/managevideos/README.md#deletemediatrack) - Delete audio / subtitle track
* [generateSubtitleTrack](docs/sdks/managevideos/README.md#generatesubtitletrack) - Generate track subtitle
* [updatedSourceAccess](docs/sdks/managevideos/README.md#updatedsourceaccess) - Update the source access of a media by ID
* [updatedMp4Support](docs/sdks/managevideos/README.md#updatedmp4support) - Update the mp4Support of a media by ID
* [retrieveMediaInputInfo](docs/sdks/managevideos/README.md#retrievemediainputinfo) - Get info of media inputs
* [listUploads](docs/sdks/managevideos/README.md#listuploads) - Get all unused upload URLs
* [getMediaClips](docs/sdks/managevideos/README.md#getmediaclips) - Get all clips of a media

### [metrics](docs/sdks/metrics/README.md)

* [listBreakdownValues](docs/sdks/metrics/README.md#listbreakdownvalues) - List breakdown values
* [listOverallValues](docs/sdks/metrics/README.md#listoverallvalues) - List overall values
* [getTimeseriesData](docs/sdks/metrics/README.md#gettimeseriesdata) - Get timeseries data
* [listComparisonValues](docs/sdks/metrics/README.md#listcomparisonvalues) - List comparison values

### [playback](docs/sdks/playback/README.md)

* [createMediaPlaybackId](docs/sdks/playback/README.md#createmediaplaybackid) - Create a playback ID
* [deleteMediaPlaybackId](docs/sdks/playback/README.md#deletemediaplaybackid) - Delete a playback ID
* [getPlaybackId](docs/sdks/playback/README.md#getplaybackid) - Get a playback ID

### [playlist](docs/sdks/playlist/README.md)

* [createAPlaylist](docs/sdks/playlist/README.md#createaplaylist) - Create a new playlist
* [getAllPlaylists](docs/sdks/playlist/README.md#getallplaylists) - Get all playlists
* [getPlaylistById](docs/sdks/playlist/README.md#getplaylistbyid) - Get a playlist by ID
* [updateAPlaylist](docs/sdks/playlist/README.md#updateaplaylist) - Update a playlist by ID
* [deleteAPlaylist](docs/sdks/playlist/README.md#deleteaplaylist) - Delete a playlist by ID
* [addMediaToPlaylist](docs/sdks/playlist/README.md#addmediatoplaylist) - Add media to a playlist by ID
* [changeMediaOrderInPlaylist](docs/sdks/playlist/README.md#changemediaorderinplaylist) - Change media order in a playlist by ID
* [deleteMediaFromPlaylist](docs/sdks/playlist/README.md#deletemediafromplaylist) - Delete media in a playlist by ID

### [signingKeys](docs/sdks/signingkeys/README.md)

* [createSigningKey](docs/sdks/signingkeys/README.md#createsigningkey) - Create a signing key
* [listSigningKeys](docs/sdks/signingkeys/README.md#listsigningkeys) - Get list of signing key
* [deleteSigningKey](docs/sdks/signingkeys/README.md#deletesigningkey) - Delete a signing key
* [getSigningKeyById](docs/sdks/signingkeys/README.md#getsigningkeybyid) - Get signing key by ID

### [simulcastStream](docs/sdks/simulcaststream/README.md)

* [createSimulcastOfStream](docs/sdks/simulcaststream/README.md#createsimulcastofstream) - Create a simulcast
* [deleteSimulcastOfStream](docs/sdks/simulcaststream/README.md#deletesimulcastofstream) - Delete a simulcast
* [getSpecificSimulcastOfStream](docs/sdks/simulcaststream/README.md#getspecificsimulcastofstream) - Get a specific simulcast
* [updateSpecificSimulcastOfStream](docs/sdks/simulcaststream/README.md#updatespecificsimulcastofstream) - Update a simulcast

### [startLiveStream](docs/sdks/startlivestream/README.md)

* [createNewStream](docs/sdks/startlivestream/README.md#createnewstream) - Create a new stream

### [views](docs/sdks/views/README.md)

* [listVideoViews](docs/sdks/views/README.md#listvideoviews) - List video views
* [getVideoViewDetails](docs/sdks/views/README.md#getvideoviewdetails) - Get details of video view
* [listByTopContent](docs/sdks/views/README.md#listbytopcontent) - List by top content
* [getDataViewlistCurrentViewsGetTimeseriesViews](docs/sdks/views/README.md#getdataviewlistcurrentviewsgettimeseriesviews) - Get concurrent viewers timeseries
* [getDataViewlistCurrentViewsFilter](docs/sdks/views/README.md#getdataviewlistcurrentviewsfilter) - Get concurrent viewers breakdown by dimension

</details>

## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "secret-key",
  },
});

async function run() {
  const result = await fastpix.inputVideo.createMedia({
    inputs: [
      {
        type: "video",
        url: "https://static.fastpix.io/sample.mp4",
      },
    ],
    metadata: {
      "key1": "value1",
    },
    accessPolicy: "public",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    username: "your-access-token",
    password: "secret-key",
  },
});

async function run() {
  const result = await fastpix.inputVideo.createMedia({
    inputs: [
      {
        type: "video",
        url: "https://static.fastpix.io/sample.mp4",
      },
    ],
    metadata: {
      "key1": "value1",
    },
    accessPolicy: "public",
  });

  console.log(result);
}

run();

```

## Error Handling

[`FastpixError`](./src/models/errors/fastpixerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Fastpix } from "@fastpix/fastpix-node";
import * as errors from "@fastpix/fastpix-node/models/errors";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "secret-key",
  },
});

async function run() {
  try {
    const result = await fastpix.inputVideo.createMedia({
      inputs: [
        {
          type: "video",
          url: "https://static.fastpix.io/sample.mp4",
        },
      ],
      metadata: {
        "key1": "value1",
      },
      accessPolicy: "public",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.FastpixError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.BadRequestError) {
        console.log(error.data$.success); // boolean
        console.log(error.data$.error); // models.BadRequestError
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`FastpixError`](./src/models/errors/fastpixerror.ts): The base class for HTTP error responses.
  * [`InvalidPermissionError`](./src/models/errors/invalidpermissionerror.ts): *
  * [`ValidationErrorResponse`](./src/models/errors/validationerrorresponse.ts): Status code `422`. *

<details><summary>Less common errors (28)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`FastpixError`](./src/models/errors/fastpixerror.ts)**:
* [`ForbiddenError`](./src/models/errors/forbiddenerror.ts): Status code `403`. Applicable to 26 of 66 methods.*
* [`UnauthorizedError`](./src/models/errors/unauthorizederror.ts): Applicable to 24 of 66 methods.*
* [`MediaNotFoundError`](./src/models/errors/medianotfounderror.ts): Status code `404`. Applicable to 17 of 66 methods.*
* [`BadRequestError`](./src/models/errors/badrequesterror.ts): Bad Request. Status code `400`. Applicable to 10 of 66 methods.*
* [`NotFoundError`](./src/models/errors/notfounderror.ts): Status code `404`. Applicable to 8 of 66 methods.*
* [`ViewNotFoundError`](./src/models/errors/viewnotfounderror.ts): View Not Found. Status code `404`. Applicable to 7 of 66 methods.*
* [`LiveNotFoundError`](./src/models/errors/livenotfounderror.ts): Stream Not Found. Status code `404`. Applicable to 6 of 66 methods.*
* [`InvalidPlaylistIdResponseError`](./src/models/errors/invalidplaylistidresponseerror.ts): Payload Validation Failed. Status code `422`. Applicable to 6 of 66 methods.*
* [`UnAuthorizedResponseError`](./src/models/errors/unauthorizedresponseerror.ts): response for unauthorized request. Status code `401`. Applicable to 4 of 66 methods.*
* [`ForbiddenResponseError`](./src/models/errors/forbiddenresponseerror.ts): response for forbidden request. Status code `403`. Applicable to 4 of 66 methods.*
* [`TrackDuplicateRequestError`](./src/models/errors/trackduplicaterequesterror.ts): Duplicate language name. Status code `400`. Applicable to 3 of 66 methods.*
* [`NotFoundErrorSimulcast`](./src/models/errors/notfounderrorsimulcast.ts): Stream/Simulcast Not Found. Status code `404`. Applicable to 3 of 66 methods.*
* [`MediaOrPlaybackNotFoundError`](./src/models/errors/mediaorplaybacknotfounderror.ts): Status code `404`. Applicable to 2 of 66 methods.*
* [`NotFoundErrorPlaybackId`](./src/models/errors/notfounderrorplaybackid.ts): Status code `404`. Applicable to 2 of 66 methods.*
* [`SigningKeyNotFoundError`](./src/models/errors/signingkeynotfounderror.ts): Bad Request. Status code `404`. Applicable to 2 of 66 methods.*
* [`DuplicateMp4SupportError`](./src/models/errors/duplicatemp4supporterror.ts): Mp4Support value already exists. Status code `400`. Applicable to 1 of 66 methods.*
* [`TrialPlanRestrictionError`](./src/models/errors/trialplanrestrictionerror.ts): Bad Request – Stream is either already enabled or cannot be enabled on trial plan. Status code `400`. Applicable to 1 of 66 methods.*
* [`StreamAlreadyEnabledError`](./src/models/errors/streamalreadyenablederror.ts): Bad Request – Stream is either already enabled or cannot be enabled on trial plan. Status code `400`. Applicable to 1 of 66 methods.*
* [`StreamAlreadyDisabledError`](./src/models/errors/streamalreadydisablederror.ts): Stream already disabled. Status code `400`. Applicable to 1 of 66 methods.*
* [`SimulcastUnavailableError`](./src/models/errors/simulcastunavailableerror.ts): Simulcast is not available for trial streams. Status code `400`. Applicable to 1 of 66 methods.*
* [`MediaClipNotFoundError`](./src/models/errors/mediaclipnotfounderror.ts): media workspace relation not found. Status code `404`. Applicable to 1 of 66 methods.*
* [`DuplicateReferenceIdErrorResponse`](./src/models/errors/duplicatereferenceiderrorresponse.ts): Displays the result of the request. Status code `409`. Applicable to 1 of 66 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.

## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  serverURL: "https://api.fastpix.io/v1/",
  security: {
    username: "your-access-token",
    password: "secret-key",
  },
});

async function run() {
  const result = await fastpix.inputVideo.createMedia({
    inputs: [
      {
        type: "video",
        url: "https://static.fastpix.io/sample.mp4",
      },
    ],
    metadata: {
      "key1": "value1",
    },
    accessPolicy: "public",
  });

  console.log(result);
}

run();

```

## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Fastpix } from "@fastpix/fastpix-node";
import { HTTPClient } from "@fastpix/fastpix-node/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Fastpix({ httpClient: httpClient });
```

## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const sdk = new Fastpix({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `FASTPIX_DEBUG` to true.

## Detailed Usage

For a complete understanding of each API's functionality, including request and response details, parameter descriptions, and additional examples, please refer to the [FastPix API Reference](https://docs.fastpix.io/reference/signingkeys-overview).

The API reference provides comprehensive documentation for all available endpoints and features, ensuring developers can integrate and utilize FastPix APIs efficiently.

## Support

If you have any queries, please reach out to **support@fastpix.io**.
