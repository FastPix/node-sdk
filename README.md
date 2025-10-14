# FastPix Node.js SDK

A robust, type-safe Node.js SDK designed for seamless integration with the FastPix API platform.

<!-- Start Summary [summary] -->
## Introduction

The FastPix Node.js SDK simplifies integration with the FastPix platform. It provides a clean, TypeScript interface for secure and efficient communication with the FastPix API, enabling easy management of media uploads, live streaming, on‑demand content, playlists, video analytics, and signing keys for secure access and token management. It is intended for use with Node.js 18 and above.

## Prerequisites

### Environment and Version Support

<table>
<tr>
<th>Requirement</th>
<th>Version</th>
<th>Description</th>
</tr>
<tr>
<td><strong>Node.js</strong></td>
<td><code>18+</code></td>
<td>Core runtime environment</td> 
</tr>
<tr>
<td><strong>npm/yarn/pnpm</strong></td>
<td><code>Latest</code></td>
<td>Package manager for dependencies</td>
</tr>
<tr>
<td><strong>Internet</strong></td>
<td><code>Required</code></td>
<td>API communication and authentication</td>
</tr>
</table>

> **Pro Tip:** We recommend using Node.js 20+ for optimal performance and the latest language features.

### Getting Started with FastPix

To get started with the **FastPix Node.js SDK**, ensure you have the following:

- The FastPix APIs are authenticated using a **Username** and a **Password**. You must generate these credentials to use the SDK.

- Follow the steps in the [Authentication with Basic Auth](https://docs.fastpix.io/docs/basic-authentication) guide to obtain your credentials.

### Environment Variables (Optional)

Configure your FastPix credentials using environment variables for enhanced security and convenience:

```bash
# Set your FastPix credentials
export FASTPIX_USERNAME="your-access-token"
export FASTPIX_PASSWORD="your-secret-key"
```

> **Security Note:** Never commit your credentials to version control. Use environment variables or secure credential management systems.

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Fastpix Node.js SDK](#fastpix-nodejs-sdk)
  * [Setup](#setup)
  * [Example Usage](#example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Development](#development)

<!-- End Table of Contents [toc] -->

<!-- Start Setup [setup] -->
## Setup

### Installation

Install the FastPix Node.js SDK using your preferred package manager:

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

### Imports

Import the necessary modules for your FastPix integration:

```typescript
// Basic imports
import { Fastpix } from "@fastpix/fastpix-node";
import type { CreateMediaRequest } from "@fastpix/fastpix-node/models/operations";
```

> **Note:** If you encounter import errors in your project, you may need to add `"type": "module"` to your `package.json` file to enable ES modules support. This SDK is built with ES modules and requires proper module configuration.

> **Security Note:** For production applications, it's recommended to make API calls from your backend server rather than directly from the browser to:
> - Keep credentials secure
> - Avoid CORS issues  
> - Implement proper authentication.

### Initialization

Initialize the FastPix SDK with your credentials:

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});
```

Or using environment variables:

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: process.env.FASTPIX_USERNAME,
    password: process.env.FASTPIX_PASSWORD,
  },
});
```

<!-- End Setup [setup] -->

<!-- Start Example Usage [example-usage] -->
## Example Usage

### Example

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
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

    // handle response
    console.log(result);

}

run();
```
<!-- End Example Usage [example-usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

Comprehensive Node.js SDK for FastPix platform integration with full API coverage.

### Media API

Upload, manage, and transform video content with comprehensive media management capabilities.

For detailed documentation, see [FastPix Video on Demand Overview](https://docs.fastpix.io/docs/video-on-demand-overview).

#### Input Video
- [Create from URL](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/inputvideo/README.md#createmedia) - Upload video content from external URL
- [Upload from Device](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/inputvideo/README.md#directuploadvideomedia) - Upload video files directly from device

#### Manage Videos
- [List All Media](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managevideos/README.md#listmedia) - Retrieve complete list of all media files
- [Get Media by ID](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managevideos/README.md#getmedia) - Get detailed information for specific media
- [Update Media](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managevideos/README.md#updatedmedia) - Modify media metadata and settings
- [Delete Media](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managevideos/README.md#deletemedia) - Remove media files from library
- [Cancel Upload](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managevideos/README.md#cancelupload) - Stop ongoing media upload process
- [Get Input Info](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managevideos/README.md#retrievemediainputinfo) - Retrieve detailed input information
- [List Uploads](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managevideos/README.md#listuploads) - Get all available upload URLs

#### Playback
- [Create Playback ID](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/playback/README.md#createmediaplaybackid) - Generate secure playback identifier
- [Delete Playback ID](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/playback/README.md#deletemediaplaybackid) - Remove playback access
- [Get Playback ID](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/playback/README.md#getplaybackid) - Retrieve playback configuration details

#### Playlist
- [Create Playlist](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/playlist/README.md#createaplaylist) - Create new video playlist
- [List Playlists](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/playlist/README.md#getallplaylists) - Get all available playlists
- [Get Playlist](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/playlist/README.md#getplaylistbyid) - Retrieve specific playlist details
- [Update Playlist](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/playlist/README.md#updateaplaylist) - Modify playlist settings and metadata
- [Delete Playlist](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/playlist/README.md#deleteaplaylist) - Remove playlist from library
- [Add Media](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/playlist/README.md#addmediatoplaylist) - Add media items to playlist
- [Reorder Media](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/playlist/README.md#changemediaorderinplaylist) - Change order of media in playlist
- [Remove Media](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/playlist/README.md#deletemediafromplaylist) - Remove media from playlist

#### Signing Keys
- [Create Key](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/signingkeys/README.md#createsigningkey) - Generate new signing key pair
- [List Keys](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/signingkeys/README.md#listsigningkeys) - Get all available signing keys
- [Delete Key](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/signingkeys/README.md#deletesigningkey) - Remove signing key from system
- [Get Key](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/signingkeys/README.md#getsigningkeybyid) - Retrieve specific signing key details

#### DRM Configurations
- [List DRM Configs](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/drmconfigurations/README.md#getdrmconfiguration) - Get all DRM configuration options
- [Get DRM Config](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/drmconfigurations/README.md#getdrmconfigurationbyid) - Retrieve specific DRM configuration

### Live API 

Stream, manage, and transform live video content with real-time broadcasting capabilities.

For detailed documentation, see [FastPix Live Stream Overview](https://docs.fastpix.io/docs/live-stream-overview).

#### Start Live Stream
- [Create Stream](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/startlivestream/README.md#createnewstream) - Initialize new live streaming session with **DVR mode support**

#### Manage Live Stream
- [List Streams](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managelivestream/README.md#getallstreams) - Retrieve all active live streams
- [Get Viewer Count](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managelivestream/README.md#getlivestreamviewercountbyid) - Get real-time viewer statistics
- [Get Stream](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managelivestream/README.md#getlivestreambyid) - Retrieve detailed stream information
- [Delete Stream](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managelivestream/README.md#deletelivestream) - Terminate and remove live stream
- [Update Stream](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managelivestream/README.md#updatelivestream) - Modify stream settings and configuration
- [Enable Stream](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managelivestream/README.md#enablelivestream) - Activate live streaming
- [Disable Stream](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managelivestream/README.md#disablelivestream) - Pause live streaming
- [Complete Stream](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/managelivestream/README.md#completelivestream) - Finalize and archive stream

#### Live Playback
- [Create Playback ID](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/liveplayback/README.md#createplaybackidofstream) - Generate secure live playback access
- [Delete Playback ID](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/liveplayback/README.md#deleteplaybackidofstream) - Revoke live playback access
- [Get Playback ID](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/liveplayback/README.md#getlivestreamplaybackid) - Retrieve live playback configuration

#### Simulcast Stream
- [Create Simulcast](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/simulcaststream/README.md#createsimulcastofstream) - Set up multi-platform streaming
- [Delete Simulcast](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/simulcaststream/README.md#deletesimulcastofstream) - Remove simulcast configuration
- [Get Simulcast](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/simulcaststream/README.md#getspecificsimulcastofstream) - Retrieve simulcast settings
- [Update Simulcast](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/simulcaststream/README.md#updatespecificsimulcastofstream) - Modify simulcast parameters

### Video Data API 

Monitor video performance and quality with comprehensive analytics and real-time metrics.

For detailed documentation, see [FastPix Video Data Overview](https://docs.fastpix.io/docs/video-data-overview).

#### Metrics
- [List Breakdown Values](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/metrics/README.md#listbreakdownvalues) - Get detailed breakdown of metrics by dimension
- [List Overall Values](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/metrics/README.md#listoverallvalues) - Get aggregated metric values across all content
- [Get Timeseries Data](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/metrics/README.md#gettimeseriesdata) - Retrieve time-based metric trends and patterns
- [List Comparison Values](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/metrics/README.md#listcomparisonvalues) - Compare metrics across different time periods

#### Views
- [List Video Views](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/views/README.md#listvideoviews) - Get comprehensive list of video viewing sessions
- [Get View Details](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/views/README.md#getvideoviewdetails) - Retrieve detailed information about specific video views
- [List Top Content](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/views/README.md#listbytopcontent) - Find your most popular and engaging content
- [Get Concurrent Viewers](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/views/README.md#getdataviewlistcurrentviewsgettimeseriesviews) - Monitor real-time viewer counts over time
- [Get Viewer Breakdown](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/views/README.md#getdataviewlistcurrentviewsfilter) - Analyze viewers by device, location, and other dimensions

#### Dimensions
- [List Dimensions](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/dimensions/README.md#listdimensions) - Get available data dimensions for filtering and analysis
- [List Filter Values](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/dimensions/README.md#listfiltervaluesfordimension) - Get specific values for a particular dimension

### Transformations

Transform and enhance your video content with powerful AI and editing capabilities.

#### In-Video AI Features

Enhance video content with AI-powered features including moderation, summarization, and intelligent categorization.

For detailed documentation, see [Video Moderation Guide](https://docs.fastpix.io/docs/using-nsfw-and-profanity-filter-for-video-moderation).

- [Generate Summary](https://github.com/FastPix/node-sdk/blob/main/docs/transformations/in-video-ai/README.md#updatemediasummary) - Create AI-generated video summaries
- [Create Chapters](https://github.com/FastPix/node-sdk/blob/main/docs/transformations/in-video-ai/README.md#updatemediachapters) - Automatically generate video chapter markers
- [Extract Entities](https://github.com/FastPix/node-sdk/blob/main/docs/transformations/in-video-ai/README.md#updatemedianamedentities) - Identify and extract named entities from content
- [Enable Moderation](https://github.com/FastPix/node-sdk/blob/main/docs/transformations/in-video-ai/README.md#updatemediamoderation) - Activate content moderation and safety checks

#### Media Clips

Retrieve and manage media clips created from your source content.

For detailed documentation, see [Create clips from existing media](https://docs.fastpix.io/docs/create-clips-from-existing-media).

- [Get Media Clips](https://github.com/FastPix/node-sdk/blob/main/docs/transformations/get-clips/README.md#getmediaclips) - Retrieve all clips associated with a source media

#### Subtitles

Generate automatic subtitles for enhanced accessibility and user experience.

For detailed documentation, see [Generate subtitles](https://docs.fastpix.io/docs/generate-subtitles).

- [Generate Subtitles](https://github.com/FastPix/node-sdk/blob/main/docs/transformations/subtitles/README.md#generatesubtitletrack) - Create automatic subtitles for media

#### Media Tracks

Add, update, and manage audio and subtitle tracks for your media content.

For detailed documentation, see [Add tracks](https://docs.fastpix.io/docs/add-tracks).

- [Add Track](https://github.com/FastPix/node-sdk/blob/main/docs/transformations/tracks/README.md#addmediatrack) - Add audio or subtitle tracks to media
- [Update Track](https://github.com/FastPix/node-sdk/blob/main/docs/transformations/tracks/README.md#updatemediatrack) - Modify existing audio or subtitle tracks
- [Delete Track](https://github.com/FastPix/node-sdk/blob/main/docs/transformations/tracks/README.md#deletemediatrack) - Remove audio or subtitle tracks

#### Access Control

Control access permissions and visibility for your media content.

For detailed documentation, see [Access control](https://docs.fastpix.io/docs/access-control).

- [Update Source Access](https://github.com/FastPix/node-sdk/blob/main/docs/transformations/access-control/README.md#updatesourceaccess) - Control access permissions for media source

#### Format Support

Configure download capabilities and format support for your media content.

For detailed documentation, see [MP4 support](https://docs.fastpix.io/docs/mp4-support).

- [Update MP4 Support](https://github.com/FastPix/node-sdk/blob/main/docs/transformations/format-support/README.md#updatemp4support) - Configure MP4 download capabilities

### Error Handling

Handle and manage errors with comprehensive error handling capabilities and detailed error information for all API operations.

- [List Errors](https://github.com/FastPix/node-sdk/blob/main/docs/sdks/errors/README.md#listerrors) - Retrieve comprehensive error logs and diagnostics

<!-- End Available Resources and Operations [operations] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API. However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

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

# Development

This Node.js SDK is programmatically generated from our API specifications. Any manual modifications to internal files will be overwritten during subsequent generation cycles. 

We value community contributions and feedback. Feel free to submit pull requests or open issues with your suggestions, and we'll do our best to include them in future releases.

## Detailed Usage

For comprehensive understanding of each API's functionality, including detailed request and response specifications, parameter descriptions, and additional examples, please refer to the [FastPix API Reference](https://docs.fastpix.io/reference/signingkeys-overview).

The API reference offers complete documentation for all available endpoints and features, enabling developers to integrate and leverage FastPix APIs effectively.

