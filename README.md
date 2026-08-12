  # FastPix Node.js SDK

  [![npm version](https://img.shields.io/npm/v/@fastpix/fastpix-node)](https://www.npmjs.com/package/@fastpix/fastpix-node)
  [![npm downloads](https://img.shields.io/npm/dm/@fastpix/fastpix-node)](https://www.npmjs.com/package/@fastpix/fastpix-node)
  [![license](https://img.shields.io/npm/l/@fastpix/fastpix-node)](https://www.npmjs.com/package/@fastpix/fastpix-node)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

  A robust, type-safe Node.js SDK designed for seamless integration with the FastPix API platform.

  The FastPix Node.js SDK is a strongly-typed TypeScript and JavaScript client for the FastPix video API. From any Node.js 18+ app you can upload and manage videos, run live streams and simulcasts, create and secure playback IDs, manage playlists and signing keys, pull video analytics (views, metrics, dimensions, and errors), verify webhooks, and drive in-video AI features such as subtitles, chapters, summaries, and content moderation.

  **Works with:** Node.js 18+ · TypeScript and JavaScript · ESM and CommonJS · npm / pnpm / yarn / bun · any Node server framework (Express, etc.)

  📖 **Docs:** https://fastpix.com/docs/language-sdks/nodejs-sdk &nbsp;·&nbsp; 🚀 **Free account:** https://dashboard.fastpix.com

  ## Introduction

  The FastPix Node.js SDK simplifies integration with the FastPix platform. It provides a clean, TypeScript interface for secure and efficient communication with the FastPix API, enabling easy management of media uploads, live streaming, on‑demand content, playlists, video analytics, and signing keys for secure access and token management. It is intended for use with Node.js 18 and above.

  <br />

  ## Prerequisites

  ### Environment and Version Support

  | Requirement | Version | Description |
  |---|---:|---|
  | Node.js | `18+` | Core runtime environment |
  | npm/yarn/pnpm | `Latest` | Package manager for dependencies |
  | Internet | `Required` | API communication and authentication |

  > Pro Tip: We recommend using Node.js 20+ for optimal performance and the latest language features.

  <br />

  ### Getting Started with FastPix

  To get started with the FastPix Node.js SDK, ensure you have the following:

  - The FastPix APIs are authenticated using a **Username** and a **Password**. You must generate these credentials to use the SDK.
  - Follow the steps in the [Authentication with Basic Auth](https://fastpix.com/docs/getting-started/activate-your-account#authentication-format) guide to obtain your credentials.

  <br />

  ### Environment Variables (Optional)

  Configure your FastPix credentials using environment variables for enhanced security and convenience:

  ```bash
  # Set your FastPix credentials
  export FASTPIX_USERNAME="your-access-token"
  export FASTPIX_PASSWORD="your-secret-key"

  # Optional: only needed to verify inbound webhooks (separate from the API credentials above)
  export FASTPIX_WEBHOOK_SECRET="your-webhook-signing-secret"
  ```

  > Security Note: Never commit your credentials to version control. Use environment variables or secure credential management systems.

  <br />

  ## Table of Contents

  * [Fastpix Node.js SDK](#fastpix-nodejs-sdk)
    * [Setup](#setup)
    * [Example Usage](#example-usage)
    * [Available Resources and Operations](#available-resources-and-operations)
    * [Standalone functions](#standalone-functions)
    * [Retries](#retries)
    * [Error Handling](#error-handling)
    * [Server Selection](#server-selection)
    * [Custom HTTP Client](#custom-http-client)
    * [Debugging](#debugging)
    * [Webhooks](#webhooks)
    * [FAQ](#faq)
    * [Which FastPix SDK should I use?](#which-fastpix-sdk-should-i-use)
    * [Development](#development)

  <br />

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

  This SDK supports both **ES modules** and **CommonJS**. Examples in this documentation use ES module syntax as it's the preferred format, but you can use either approach.

  #### ES Modules (Recommended)
  ```typescript
  import { Fastpix } from "@fastpix/fastpix-node";
  import type { CreateMediaRequest } from "@fastpix/fastpix-node/models";
  ```

  #### CommonJS
  ```javascript
  const { Fastpix } = require("@fastpix/fastpix-node");
  ```

  > Why ES Modules? ES modules provide better tree-shaking, static analysis, and are the modern JavaScript standard.

  <br />

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
      username: process.env.FASTPIX_USERNAME, // Your Access Token
      password: process.env.FASTPIX_PASSWORD, // Your Secret Key
    },
  });
  ```
  <br />

  ## Example Usage

  ```typescript
  import { Fastpix } from "@fastpix/fastpix-node";

  const fastpix = new Fastpix({
    security: {
      username: "your-access-token",
      password: "your-secret-key",
    },
  });

  async function run() {
    const result = await fastpix.inputVideo.create({
      inputs: [
        {
          type: "video",
          url: "https://static.fastpix.com/fp-sample-video.mp4",
        },
      ],
      metadata: {
        "key1": "value1",
      },
    });

    console.log(JSON.stringify(result, null, 2));
  }

  run();
  ```

  <br />

  ### Expected result

  If the request succeeds, the API returns a response similar to:

  ```json
  {
    "success": true,
    "data": {
      "id": "5157e363-5abb-414d-83c7-520ecdc9f5fd",
      "status": "Created"
    }
  }
  ```

  The returned media ID confirms that the video was created successfully.

  <br />

  ## Available Resources and Operations

  Comprehensive Node.js SDK for FastPix platform integration with full API coverage.

  ### Media API

  Upload, manage, and transform video content with comprehensive media management capabilities.

  For detailed documentation, see [FastPix Video on Demand Overview](https://fastpix.com/docs/video-on-demand-api/overview
  ).

  #### Input Video
  - [Create from URL](docs/sdks/inputvideo/README.md#create) - Upload video content from external URL
  - [Upload from Device](docs/sdks/inputvideo/README.md#upload) - Upload video files directly from device

  #### Manage Videos
  - [List All Media](docs/sdks/media/README.md#list) - Retrieve complete list of all media files
  - [Get Media by ID](docs/sdks/managevideos/README.md#get) - Get detailed information for specific media
  - [Update Media](docs/sdks/managevideos/README.md#update) - Modify media metadata and settings
  - [Delete Media](docs/sdks/managevideos/README.md#delete) - Remove media files from library
  - [Cancel Upload](docs/sdks/managevideos/README.md#cancelupload) - Stop ongoing media upload process
  - [Get Input Info](docs/sdks/managevideos/README.md#retrievemediainputinfo) - Retrieve detailed input information
  - [List Uploads](docs/sdks/managevideos/README.md#listuploads) - Get all available upload URLs

  #### Playback
  - [Create Playback ID](docs/sdks/playback/README.md#create) - Generate secure playback identifier
  - [Delete Playback ID](docs/sdks/playback/README.md#delete) - Remove playback access
  - [Get Playback ID](docs/sdks/playback/README.md#get) - Retrieve playback configuration details

  #### Playlist
  - [Create Playlist](docs/sdks/playlist/README.md#create) - Create new video playlist
  - [List Playlists](docs/sdks/playlist/README.md#list) - Get all available playlists
  - [Get Playlist](docs/sdks/playlist/README.md#get) - Retrieve specific playlist details
  - [Update Playlist](docs/sdks/playlist/README.md#update) - Modify playlist settings and metadata
  - [Delete Playlist](docs/sdks/playlist/README.md#delete) - Remove playlist from library
  - [Add Media](docs/sdks/playlists/README.md#addmedia) - Add media items to playlist
  - [Reorder Media](docs/sdks/playlist/README.md#updatemediaorder) - Change order of media in playlist
  - [Remove Media](docs/sdks/playlists/README.md#deletemedia) - Remove media from playlist

  #### Signing Keys
  - [Create Key](docs/sdks/signingkeys/README.md#create) - Generate new signing key pair
  - [List Keys](docs/sdks/signingkeys/README.md#list) - Get all available signing keys
  - [Delete Key](docs/sdks/signingkeys/README.md#delete) - Remove signing key from system
  - [Get Key](docs/sdks/signingkeys/README.md#getbyid) - Retrieve specific signing key details

  #### DRM Configurations
  - [List DRM Configs](docs/sdks/drmconfigurations/README.md#list) - Get all DRM configuration options
  - [Get DRM Config](docs/sdks/drmconfigurations/README.md#get) - Retrieve specific DRM configuration

  ### Live API

  Stream, manage, and transform live video content with real-time broadcasting capabilities.

  For detailed documentation, see [FastPix Live Stream Overview](https://fastpix.com/docs/live-stream-api/overview).

  #### Start Live Stream
  - [Create Stream](docs/sdks/livestreams/README.md#create) - Initialize new live streaming session with DVR mode support

  #### Manage Live Stream
  - [List Streams](docs/sdks/livestreams/README.md#list) - Retrieve all active live streams
  - [Get Viewer Count](docs/sdks/managelivestream/README.md#getviewercount) - Get real-time viewer statistics
  - [Get Stream](docs/sdks/managelivestream/README.md#get) - Retrieve detailed stream information
  - [Delete Stream](docs/sdks/livestreams/README.md#delete) - Terminate and remove live stream
  - [Update Stream](docs/sdks/managelivestream/README.md#update) - Modify stream settings and configuration
  - [Enable Stream](docs/sdks/managelivestream/README.md#enable) - Activate live streaming
  - [Disable Stream](docs/sdks/managelivestream/README.md#disable) - Pause live streaming
  - [Complete Stream](docs/sdks/managelivestream/README.md#complete) - Finalize and archive stream

  #### Live Playback
  - [Create Playback ID](docs/sdks/liveplayback/README.md#createid) - Generate secure live playback access
  - [Delete Playback ID](docs/sdks/liveplayback/README.md#delete) - Revoke live playback access
  - [Get Playback ID](docs/sdks/liveplayback/README.md#get) - Retrieve live playback configuration

  #### Simulcast Stream
  - [Create Simulcast](docs/sdks/simulcasts/README.md#create) - Set up multi-platform streaming
  - [Delete Simulcast](docs/sdks/simulcaststreams/README.md#delete) - Remove simulcast configuration
  - [Get Simulcast](docs/sdks/simulcasts/README.md#get) - Retrieve simulcast settings
  - [Update Simulcast](docs/sdks/simulcasts/README.md#update) - Modify simulcast parameters

  ### Video Data API

  Monitor video performance and quality with comprehensive analytics and real-time metrics.

  For detailed documentation, see [FastPix Video Data Overview](https://fastpix.com/docs/video-data-api/overview).

  #### Metrics
  - [List Breakdown Values](docs/sdks/metrics/README.md#listbreakdownvalues) - Get detailed breakdown of metrics by dimension
  - [List Overall Values](docs/sdks/metrics/README.md#listoverallvalues) - Get aggregated metric values across all content
  - [Get Timeseries Data](docs/sdks/metrics/README.md#gettimeseriesdata) - Retrieve time-based metric trends and patterns

  #### Views
  - [List Video Views](docs/sdks/views/README.md#list) - Get comprehensive list of video viewing sessions
  - [Get View Details](docs/sdks/views/README.md#getdetails) - Retrieve detailed information about specific video views
  - [List Top Content](docs/sdks/views/README.md#listtopcontent) - Find your most popular and engaging content
  - [Get Concurrent Viewers](docs/sdks/metrics/README.md#listcompares) - Monitor real-time viewer counts over time
  - [Get Viewer Breakdown](docs/sdks/metrics/README.md#listbreakdownvalues) - Analyze viewers by device, location, and other dimensions

  #### Dimensions
  - [List Dimensions](docs/sdks/dimensions/README.md#list) - Get available data dimensions for filtering and analysis
  - [List Filter Values](docs/sdks/dimensions/README.md#listfiltervalues) - Get specific values for a particular dimension

  ### Transformations

  Transform and enhance your video content with powerful AI and editing capabilities.

  #### In-Video AI Features

  Enhance video content with AI-powered features including moderation, summarization, and intelligent categorization.

  - [Update Summary](docs/sdks/aifeatures/README.md#updatesummary) - Create AI-generated video summaries
  - [Create Chapters](docs/sdks/invideoaifeatures/README.md#generatechapters) - Automatically generate video chapter markers
  - [Extract Entities](docs/sdks/aifeatures/README.md#generatenamedentities) - Identify and extract named entities from content
  - [Enable Moderation](docs/sdks/invideoai/README.md#updatemoderation) - Activate content moderation and safety checks

  #### Media Clips

  - [Get Media Clips](docs/sdks/media/README.md#getclips) - Retrieve all clips associated with a source media

  #### Subtitles

  - [Generate Subtitles](docs/sdks/managevideos/README.md#generatesubtitletrack) - Create automatic subtitles for media

  #### Media Tracks

  - [Add Track](docs/sdks/managevideos/README.md#addtrack) - Add audio or subtitle tracks to media
  - [Update Track](docs/sdks/managevideos/README.md#updatetrack) - Modify existing audio or subtitle tracks
  - [Delete Track](docs/sdks/media/README.md#deletetrack) - Remove audio or subtitle tracks

  #### Access Control

  - [Update Source Access](docs/sdks/media/README.md#updatesourceaccess) - Control access permissions for media source

  #### Format Support

  - [Update MP4 Support](docs/sdks/managevideos/README.md#updatemp4support) - Configure MP4 download capabilities


  <br />


  <!-- End Available Resources and Operations [operations] -->

  <!-- Start Standalone functions [standalone-funcs] -->
  ## Standalone functions

  All the methods listed above are available as standalone functions. These
  functions are ideal for use in applications running in the browser, serverless
  runtimes or other environments where application bundle size is a primary
  concern. When using a bundler to build your application, all unused
  functionality will be either excluded from the final bundle or tree-shaken away.

  To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

  <details>

  <summary>Available standalone functions</summary>

  - [`aiFeaturesGenerateNamedEntities`](docs/sdks/aifeatures/README.md#generatenamedentities) - Generate named entities
  - [`aiFeaturesUpdateSummary`](docs/sdks/aifeatures/README.md#updatesummary) - Generate video summary
  - [`dimensionsList`](docs/sdks/dimensions/README.md#list) - List the dimensions
  - [`dimensionsListFilterValues`](docs/sdks/dimensions/README.md#listfiltervalues) - List the filter values for a dimension
  - [`drmConfigurationsGet`](docs/sdks/drmconfigurations/README.md#get) - Get DRM configuration by ID
  - [`drmConfigurationsList`](docs/sdks/drmconfigurations/README.md#list) - Get list of DRM configuration IDs
  - [`errorsList`](docs/sdks/errors/README.md#list) - List errors
  - [`inputVideoCreate`](docs/sdks/inputvideo/README.md#create) - Create media from URL
  - [`inputVideoUpload`](docs/sdks/inputvideo/README.md#upload) - Upload media from device
  - [`inVideoAIfeaturesGenerateChapters`](docs/sdks/invideoaifeatures/README.md#generatechapters) - Generate video chapters
  - [`inVideoAIUpdateModeration`](docs/sdks/invideoai/README.md#updatemoderation) - Enable video moderation
  - [`livePlaybackCreateId`](docs/sdks/liveplayback/README.md#createid) - Create a playbackId
  - [`livePlaybackDelete`](docs/sdks/liveplayback/README.md#delete) - Delete a playbackId
  - [`livePlaybackGet`](docs/sdks/liveplayback/README.md#get) - Get playbackId details
  - [`liveStreamsCreate`](docs/sdks/livestreams/README.md#create) - Create a new stream
  - [`liveStreamsDelete`](docs/sdks/livestreams/README.md#delete) - Delete a stream
  - [`liveStreamsEnable`](docs/sdks/livestreams/README.md#enable) - Enable a stream
  - [`liveStreamsList`](docs/sdks/livestreams/README.md#list) - Get all live streams
  - [`liveStreamsListClips`](docs/sdks/livestreams/README.md#listclips) - Get all clips of a live stream
  - [`manageLiveStreamComplete`](docs/sdks/managelivestream/README.md#complete) - Complete a stream
  - [`manageLiveStreamDisable`](docs/sdks/managelivestream/README.md#disable) - Disable a stream
  - [`manageLiveStreamGet`](docs/sdks/managelivestream/README.md#get) - Get stream by ID
  - [`manageLiveStreamGetViewerCount`](docs/sdks/managelivestream/README.md#getviewercount) - Get stream views by ID
  - [`manageLiveStreamUpdate`](docs/sdks/managelivestream/README.md#update) - Update a stream
  - [`manageVideosAddTrack`](docs/sdks/managevideos/README.md#addtrack) - Add audio / subtitle track
  - [`manageVideosCancelUpload`](docs/sdks/managevideos/README.md#cancelupload) - Cancel ongoing upload
  - [`manageVideosDelete`](docs/sdks/managevideos/README.md#delete) - Delete a media by ID
  - [`manageVideosGenerateSubtitleTrack`](docs/sdks/managevideos/README.md#generatesubtitletrack) - Generate track subtitle
  - [`manageVideosGet`](docs/sdks/managevideos/README.md#get) - Get a media by ID
  - [`manageVideosGetSummary`](docs/sdks/managevideos/README.md#getsummary) - Get the summary of a video
  - [`manageVideosListUploads`](docs/sdks/managevideos/README.md#listuploads) - Get all unused upload URLs
  - [`manageVideosRetrieveMediaInputInfo`](docs/sdks/managevideos/README.md#retrievemediainputinfo) - Get info of media inputs
  - [`manageVideosUpdate`](docs/sdks/managevideos/README.md#update) - Update a media by ID
  - [`manageVideosUpdateMp4Support`](docs/sdks/managevideos/README.md#updatemp4support) - Update the mp4Support of a media by ID
  - [`manageVideosUpdateTrack`](docs/sdks/managevideos/README.md#updatetrack) - Update audio / subtitle track
  - [`mediaDeleteTrack`](docs/sdks/media/README.md#deletetrack) - Delete audio / subtitle track
  - [`mediaGetClips`](docs/sdks/media/README.md#getclips) - Get all clips of a media
  - [`mediaList`](docs/sdks/media/README.md#list) - Get list of all media
  - [`mediaUpdateSourceAccess`](docs/sdks/media/README.md#updatesourceaccess) - Update the source access of a media by ID
  - [`metricsGetTimeseriesData`](docs/sdks/metrics/README.md#gettimeseriesdata) - Get timeseries data
  - [`metricsListBreakdownValues`](docs/sdks/metrics/README.md#listbreakdownvalues) - List breakdown values
  - [`metricsListCompares`](docs/sdks/metrics/README.md#listcompares) - List comparison values
  - [`metricsListOverallValues`](docs/sdks/metrics/README.md#listoverallvalues) - List overall values
  - [`playbackCreate`](docs/sdks/playback/README.md#create) - Create a playback ID
  - [`playbackDelete`](docs/sdks/playback/README.md#delete) - Delete a playback ID
  - [`playbackGet`](docs/sdks/playback/README.md#get) - Get a playback ID
  - [`playbackListIds`](docs/sdks/playback/README.md#listids) - Get all playback IDs details for a media
  - [`playbackUpdateDomainRestrictions`](docs/sdks/playback/README.md#updatedomainrestrictions) - Update domain restrictions for a playback ID
  - [`playbackUpdateUserAgentRestrictions`](docs/sdks/playback/README.md#updateuseragentrestrictions) - Update user-agent restrictions for a playback ID
  - [`playlistCreate`](docs/sdks/playlist/README.md#create) - Create a new playlist
  - [`playlistDelete`](docs/sdks/playlist/README.md#delete) - Delete a playlist by ID
  - [`playlistGet`](docs/sdks/playlist/README.md#get) - Get a playlist by ID
  - [`playlistList`](docs/sdks/playlist/README.md#list) - Get all playlists
  - [`playlistsAddMedia`](docs/sdks/playlists/README.md#addmedia) - Add media to a playlist by ID
  - [`playlistsDeleteMedia`](docs/sdks/playlists/README.md#deletemedia) - Delete media in a playlist by ID
  - [`playlistUpdate`](docs/sdks/playlist/README.md#update) - Update a playlist by ID
  - [`playlistUpdateMediaOrder`](docs/sdks/playlist/README.md#updatemediaorder) - Change media order in a playlist by ID
  - [`signingKeysCreate`](docs/sdks/signingkeys/README.md#create) - Create a signing key
  - [`signingKeysDelete`](docs/sdks/signingkeys/README.md#delete) - Delete a signing key
  - [`signingKeysGetById`](docs/sdks/signingkeys/README.md#getbyid) - Get signing key by ID
  - [`signingKeysList`](docs/sdks/signingkeys/README.md#list) - Get list of signing key
  - [`simulcastsCreate`](docs/sdks/simulcasts/README.md#create) - Create a simulcast
  - [`simulcastsGet`](docs/sdks/simulcasts/README.md#get) - Get a specific simulcast
  - [`simulcastStreamsDelete`](docs/sdks/simulcaststreams/README.md#delete) - Delete a simulcast
  - [`simulcastsUpdate`](docs/sdks/simulcasts/README.md#update) - Update a simulcast
  - [`viewsGetDetails`](docs/sdks/views/README.md#getdetails) - Get details of video view
  - [`viewsList`](docs/sdks/views/README.md#list) - List video views
  - [`viewsListTopContent`](docs/sdks/views/README.md#listtopcontent) - List by top content

  </details>
  <!-- End Standalone functions [standalone-funcs] -->

  <br />

  <!-- Start Retries [retries] -->
  ## Retries

  Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

  To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
  ```typescript
  import { Fastpix } from "@fastpix/fastpix-node";

  const fastpix = new Fastpix({
    security: {
      username: "your-access-token",
      password: "your-secret-key",
    },
  });

  async function run() {
    const result = await fastpix.inputVideo.create({
      inputs: [
        {
          type: "video",
          url: "https://static.fastpix.com/fp-sample-video.mp4",
        },
      ],
      metadata: {
        "key1": "value1",
      },
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

    console.log(JSON.stringify(result, null, 2));
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
      password: "your-secret-key",
    },
  });

  async function run() {
    const result = await fastpix.inputVideo.create({
      inputs: [
        {
          type: "video",
          url: "https://static.fastpix.com/fp-sample-video.mp4",
        },
      ],
      metadata: {
        "key1": "value1",
      },
    });

    console.log(JSON.stringify(result, null, 2));
  }

  run();

  ```
  <!-- End Retries [retries] -->

  <br />

  <!-- Start Error Handling [errors] -->
  ## Error Handling

  [`FastpixError`](./src/models/errors/fastpixerror.ts) is the base class for all HTTP error responses. It has the following properties:

  | Property            | Type       | Description                                            |
  | ------------------- | ---------- | ------------------------------------------------------ |
  | `error.message`     | `string`   | Error message                                          |
  | `error.statusCode`  | `number`   | HTTP response status code eg `404`                     |
  | `error.headers`     | `Headers`  | HTTP response headers                                  |
  | `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned. |
  | `error.rawResponse` | `Response` | Raw HTTP response                                      |

  ### Example
  ```typescript
  import { Fastpix } from "@fastpix/fastpix-node";
  import * as errors from "@fastpix/fastpix-node/models/errors";

  const fastpix = new Fastpix({
    security: {
      username: "your-access-token",
      password: "your-secret-key",
    },
  });

  async function run() {
    try {
      const result = await fastpix.inputVideo.create({
        inputs: [
          {
            type: "video",
            url: "https://static.fastpix.com/fp-sample-video.mp4",
          },
        ],
        metadata: {
          "key1": "value1",
        },
      });

      console.log(JSON.stringify(result, null, 2));
    } catch (error) {
      if (error instanceof errors.FastpixError) {
        console.log(error.message);
        console.log(error.statusCode);
        console.log(error.body);
        console.log(error.headers);
      }
    }
  }

  run();

  ```

  <br />

  ### Error Classes
  **Primary error:**
  * [`FastpixError`](./src/models/errors/fastpixerror.ts): The base class for HTTP error responses.

  <details><summary>Less common errors (6)</summary>

  <br />

  **Network errors:**
  * [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
  * [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
  * [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
  * [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
  * [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


  **Inherit from [`FastpixError`](./src/models/errors/fastpixerror.ts)**:
  * [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

  </details>
  <!-- End Error Handling [errors] -->

  <br />

  <!-- Start Server Selection [server] -->
  ## Server Selection

  ### Override Server URL Per-Client

  The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
  ```typescript
  import { Fastpix } from "@fastpix/fastpix-node";

  const fastpix = new Fastpix({
    serverURL: "https://api.fastpix.com/v1/",
    security: {
      username: "your-access-token",
      password: "your-secret-key",
    },
  });

  async function run() {
    const result = await fastpix.inputVideo.create({
      inputs: [
        {
          type: "video",
          url: "https://static.fastpix.com/fp-sample-video.mp4",
        },
      ],
      metadata: {
        "key1": "value1",
      },
    });

    console.log(JSON.stringify(result, null, 2));
  }

  run();

  ```
  <!-- End Server Selection [server] -->

  <br />

  <!-- Start Custom HTTP Client [http-client] -->
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
  <!-- End Custom HTTP Client [http-client] -->

  <br />

  <!-- Start Debugging [debug] -->
  ## Debugging

  You can setup your SDK to emit debug logs for SDK requests and responses.

  You can pass a logger that matches `console`'s interface as an SDK option.

  > [!WARNING]
  > Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

  ```typescript
  import { Fastpix } from "@fastpix/fastpix-node";

  const sdk = new Fastpix({ debugLogger: console });
  ```

  You can also enable a default debug logger by setting an environment variable `FASTPIX_DEBUG` to true.
  <!-- End Debugging [debug] -->

  <br />

  <!-- Placeholder for Future fastpix SDK Sections -->
  ## Webhooks
  
  FastPix signs every webhook delivery. The SDK's `webhooks` resource verifies that signature and returns the parsed, trusted event in **one call** — so you never act on a forged payload.
  
  The signing secret is **separate** from your API credentials (it's the base64 secret from the FastPix dashboard). Provide it via the `webhookSecret` option, or let it default to the `FASTPIX_WEBHOOK_SECRET` environment variable.
  
  ### The one call
  
  ```typescript
  // Verifies the signature, then returns the parsed event. Throws
  // WebhookVerificationError if the signature is missing, wrong, or the body
  // isn't the raw bytes. `rawBody` must be the unparsed request body.
  const event = fastpix.webhooks.unwrap(rawBody, headers);
  ```
  
  `event` is a typed, discriminated union — `switch (event.type)` narrows `event.data` (`Media` for `video.media.*`, the live-stream payload for `video.live_stream.*`).
  
  ### Express example
  
  ```typescript
  import express from "express";
  import { Fastpix, WebhookVerificationError } from "@fastpix/fastpix-node";
  
  const fastpix = new Fastpix({ webhookSecret: process.env.FASTPIX_WEBHOOK_SECRET });
  const app = express();
  const seen = new Set<string>(); // use a durable store (Redis/DB) in production
  
  app.post(
    "/webhooks/fastpix",
    express.raw({ type: "application/json" }), // REQUIRED: verify over the raw bytes
    (req, res) => {
      const signature = req.header("FastPix-Signature");
      const rawText = req.body?.toString("utf8") ?? "";
  
      // Dashboard validation probe: unsigned, empty/"{}" body → ack with 200 first.
      if (!signature && (rawText.trim() === "" || rawText.trim() === "{}")) {
        return res.status(200).send("ok");
      }
  
      try {
        const event = fastpix.webhooks.unwrap(req.body, req.headers);
  
        if (seen.has(event.id)) return res.status(202).send("duplicate"); // dedupe on id
        seen.add(event.id);
  
        switch (event.type) {
          case "video.media.ready":
          case "video.media.updated":
            console.log(`media ${event.object.id} -> ${event.data.status}`); // data: Media
            break;
          case "video.live_stream.created":
            console.log(`stream ${event.data.streamId} created`); // data: live-stream
            break;
          default:
            console.log(`unhandled: ${event.type}`);
        }
        return res.status(202).send("accepted");
      } catch (err) {
        if (err instanceof WebhookVerificationError) {
          return res.status(400).send("invalid signature"); // bad signature
        }
        throw err; // unexpected → 500
      }
    },
  );
  
  app.listen(3000, () => console.log("Listening on :3000/webhooks/fastpix"));
  ```
  
  > **CommonJS:** swap the imports for `const express = require("express");` and `const { Fastpix, WebhookVerificationError } = require("@fastpix/fastpix-node");` — everything else is identical.

  <br />
  
  ### Troubleshooting
  
  | Symptom | Fix |
  |---|---|
  | `400` "must be the raw request payload" | Use `express.raw({ type: "application/json" })`, not `express.json()`. |
  | Dashboard says endpoint **not connecting** | Return `200` to the unsigned empty/`{}` validation probe before verifying. |
  | `400` "signature mismatch" on your own test | Base64-**decode** the secret first: `createHmac("sha256", Buffer.from(secret, "base64"))`. Sign the *exact* body bytes you send. |
  | No events arrive at all | `http://localhost` isn't reachable — register a public tunnel URL (e.g. `npx ngrok http 3000`). |
  
  > **No timestamp is signed**, so there is no replay window — enforce idempotency by deduping on the top-level event `id`.
  
  Full reference (event envelope, typed events, local testing, all gotchas): [`docs/webhooks.md`](./docs/webhooks.md). Standalone example: [`examples/webhooksServer.example.ts`](./examples/webhooksServer.example.ts).

  <br />

  ## FAQ

  **How do I install the FastPix Node.js SDK?**

  Run `npm install @fastpix/fastpix-node` (or the pnpm/yarn/bun equivalent). See [Setup](#setup) and [Installation](#installation).

  **How do I authenticate the SDK?**

  FastPix uses Basic Auth: pass your access token as the `username` and your secret key as the `password` when constructing the client. See [Initialization](#initialization).

  **Does it support TypeScript, ESM, and CommonJS?**

  Yes - the package ships TypeScript type definitions and works with both ES modules and CommonJS. See [Imports](#imports).

  **How do I upload a video in Node.js?**

  Create media from a URL or a direct upload through the input-video resource on the client. See [Example Usage](#example-usage) and [Available Resources and Operations](#available-resources-and-operations).

  **How do I start a live stream?**

  Use the Live API resources to create and manage streams, simulcasts, and live playback IDs. See [Available Resources and Operations](#available-resources-and-operations).

  **How do I get video analytics and metrics in Node.js?**

  The Video Data API exposes metrics, views, dimensions, and errors for quality-of-experience monitoring. See [Available Resources and Operations](#available-resources-and-operations).

  **How do I verify FastPix webhooks in Node.js?**

  The SDK includes webhook signature verification. See [Webhooks](#webhooks).

  **How do I handle API errors?**

  Wrap calls in try/catch; the SDK throws typed errors exposing the message, status code, and response body. See [Error Handling](#error-handling).

  **How do I configure automatic retries?**

  Pass a retry configuration per call or at client initialization to control the backoff strategy. See [Retries](#retries).

  **How do I use a custom HTTP client, proxy, or timeout?**

  Provide your own HTTP client to configure timeouts, proxies, and custom headers, or add request/response hooks. See [Custom HTTP Client](#custom-http-client).

  **How do I import only the functions I need (tree-shaking)?**

  Use the standalone functions instead of the full client for smaller bundles. See [Standalone functions](#standalone-functions).

  **Which Node.js versions are supported?**

  Node.js 18 and above. See [Prerequisites](#prerequisites).

  <br />

  ## Which FastPix SDK should I use?

  FastPix publishes a server SDK for every major backend language, each generated from the same API specification:

  | Language | Repo | Install |
  |---|---|---|
  | **Node.js / TypeScript** (this repo) | [node-sdk](https://github.com/FastPix/node-sdk) | `npm install @fastpix/fastpix-node` |
  | PHP | [fastpix-php](https://github.com/FastPix/fastpix-php) | `composer require fastpix/sdk` |
  | Python | [fastpix-python](https://github.com/FastPix/fastpix-python) | `pip install fastpix-python` |
  | Go | [fastpix-go](https://github.com/FastPix/fastpix-go) | `go get github.com/FastPix/fastpix-go` |
  | Java | [fastpix-java](https://github.com/FastPix/fastpix-java) | `io.fastpix:sdk` (Maven/Gradle) |
  | C# / .NET | [fastpix-sdk-csharp](https://github.com/FastPix/fastpix-sdk-csharp) | `dotnet add package Fastpix` |
  | Ruby | [fastpix-ruby](https://github.com/FastPix/fastpix-ruby) | `gem install fastpixapi` |

  To upload and play the media these SDKs create, use the FastPix browser libraries: [web-uploads-sdk](https://github.com/FastPix/web-uploads-sdk), [react-web-uploader](https://github.com/FastPix/react-web-uploader), and [web-player-component](https://github.com/FastPix/web-player-component). Browse everything in the [FastPix organization](https://github.com/orgs/FastPix/repositories).

  <br />

  ## Development

  This Node.js SDK is programmatically generated from our API specifications. Any manual modifications to internal files will be overwritten during subsequent generation cycles. 

  We value community contributions and feedback. Feel free to submit pull requests or open issues with your suggestions, and we'll do our best to include them in future releases.

  ## Detailed Usage

  For comprehensive understanding of each API's functionality, including detailed request and response specifications, parameter descriptions, and additional examples, please refer to the [FastPix API Reference](https://fastpix.com/docs/product-os-api/overview).

  The API reference offers complete documentation for all available endpoints and features, enabling developers to integrate and leverage FastPix APIs effectively.