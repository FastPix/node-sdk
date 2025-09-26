# ManageVideos
(*manageVideos*)

## Overview

### Available Operations

* [listMedia](#listmedia) - Get list of all media
* [listLiveClips](#listliveclips) - Get all clips of a live stream
* [getMedia](#getmedia) - Get a media by ID
* [updatedMedia](#updatedmedia) - Update a media by ID
* [deleteMedia](#deletemedia) - Delete a media by ID
* [addMediaTrack](#addmediatrack) - Add audio / subtitle track
* [cancelUpload](#cancelupload) - Cancel ongoing upload
* [updateMediaTrack](#updatemediatrack) - Update audio / subtitle track
* [deleteMediaTrack](#deletemediatrack) - Delete audio / subtitle track
* [generateSubtitleTrack](#generatesubtitletrack) - Generate track subtitle
* [updatedSourceAccess](#updatedsourceaccess) - Update the source access of a media by ID
* [updatedMp4Support](#updatedmp4support) - Update the mp4Support of a media by ID
* [retrieveMediaInputInfo](#retrievemediainputinfo) - Get info of media inputs
* [listUploads](#listuploads) - Get all unused upload URLs
* [getMediaClips](#getmediaclips) - Get all clips of a media

## listMedia

This endpoint returns a list of all media files uploaded to FastPix within a specific workspace. Each media entry contains data such as the media `id`, `createdAt`, `status`, `type` and more. It allows you to retrieve an overview of your media assets, making it easier to manage and review them. 


#### How it works

Use the access token and secret key related to the workspace in the request header. When called, the API provides a paginated response containing all the media items in that specific workspace. This is helpful for retrieving a large volume of media and managing content in bulk. 



#### Example
You're managing a video platform and need to check all the uploaded media in your library to ensure no outdated or low-quality content is being served. Using this endpoint, you can retrieve a complete list of media, allowing you to filter, sort, or update items as needed.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-media" method="get" path="/on-demand" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.listMedia({
    limit: 20,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageVideosListMedia } from "@fastpix/fastpix-node/funcs/manageVideosListMedia.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosListMedia(fastpix, {
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosListMedia failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMediaRequest](../../models/operations/listmediarequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMediaResponse](../../models/operations/listmediaresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ForbiddenError          | 403                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## listLiveClips

Retrieves a list of all media clips generated from a specific livestream. Each media entry includes metadata such as the clip media IDs, and other relevant details. A media clip is a segmented portion of an original media file (source live stream). Clips are often created for various purposes such as previews, highlights, or customized edits.
#### How it works
To use this endpoint, provide the `livestreamId` as a parameter. The API then returns a paginated list of clipped media items created from that livestream. Pagination ensures optimal performance and usability when dealing with a large number of media files, making it easier to organize and manage content in bulk.

Related guide: <a href="https://docs.fastpix.io/docs/instant-live-clipping">Instant live clipping</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-live-clips" method="get" path="/on-demand/{livestreamId}/live-clips" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.listLiveClips({
    livestreamId: "b6f71268143f70c798a7851a0a92dcbf",
    limit: 20,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageVideosListLiveClips } from "@fastpix/fastpix-node/funcs/manageVideosListLiveClips.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosListLiveClips(fastpix, {
    livestreamId: "b6f71268143f70c798a7851a0a92dcbf",
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosListLiveClips failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLiveClipsRequest](../../models/operations/listliveclipsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListLiveClipsResponse](../../models/operations/listliveclipsresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ForbiddenError          | 403                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## getMedia

By calling this endpoint, you can retrieve detailed information about a specific media item, including its current `status` and a `playbackId`. This is particularly useful for retrieving specific media details when managing large content libraries. 



#### How it works 



1. Make a GET request to this endpoint, using the `<mediaId>` received after uploading the media file. 


2. Receive a response that includes details about the media: 

* `status` Indicates whether the media is still `preparing` or has transitioned to `ready`.  

* The `playbackId` is a unique identifier that allows you to stream the media once it is `ready`. You can construct the stream URL in this format: `https://stream.fastpix.io/<playbackId>.m3u8`


#### Example

Suppose your platform provides users with an interface where they can manage their uploaded content. A user requests detailed information about a specific video to see if it has been fully processed and is available for playback. Using the media ID, you can fetch the information from FastPix and display it in the user's dashboard.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-media" method="get" path="/on-demand/{mediaId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.getMedia({
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageVideosGetMedia } from "@fastpix/fastpix-node/funcs/manageVideosGetMedia.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosGetMedia(fastpix, {
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosGetMedia failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediaRequest](../../models/operations/getmediarequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMediaResponse](../../models/operations/getmediaresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ForbiddenError          | 403                            | application/json               |
| errors.MediaNotFoundError      | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## updatedMedia

This endpoint allows you to update specific parameters of an existing media file. You can modify the key-value pairs of the metadata that were provided in the payload during the creation of media from a URL or when uploading the media directly from device. 


#### How it works

1. Make a PATCH request to this endpoint, replacing `<mediaId>` with the unique ID (`uploadId` or `id`) of the media received after uploading to FastPix. 

2. Include the updated parameters in the request body. 

3. Receive a response containing the updated media data, confirming the changes made. 

Once you have made the update request, you can also look for the webhook event <a href="https://docs.fastpix.io/docs/media-events#videomediaupdated">video.media.updated</a> to notify your system about update status. 

#### Example
Imagine a scenario where a user uploads a video and later realizes they need to change the title, add a new description or tags. You can use this endpoint to update the media metadata without having to re-upload the entire video.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updated-media" method="patch" path="/on-demand/{mediaId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.updatedMedia({
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    requestBody: {
      metadata: {
        "metadata": "{\"user\":\"fastpix_admin\"}",
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
import { manageVideosUpdatedMedia } from "@fastpix/fastpix-node/funcs/manageVideosUpdatedMedia.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosUpdatedMedia(fastpix, {
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    requestBody: {
      metadata: {
        "metadata": "{\"user\":\"fastpix_admin\"}",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosUpdatedMedia failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatedMediaRequest](../../models/operations/updatedmediarequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdatedMediaResponse](../../models/operations/updatedmediaresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ForbiddenError          | 403                            | application/json               |
| errors.MediaNotFoundError      | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## deleteMedia

This endpoint allows you to permanently delete a a specific video or audio media file along with all associated data. If you wish to remove a media from FastPix storage, use this endpoint with the `mediaId` (either `uploadId` or `id`) received during the media's creation or upload. 


#### How it works


1. Make a DELETE request to this endpoint, replacing `<mediaId>` with the `uploadId` or the `id` of the media you want to delete. 

2. Since this action is irreversible, ensure that you no longer need the media before proceeding. Once deleted, the media cannot be retrieved or played back. 

3. Webhook event to look for: <a href="https://docs.fastpix.io/docs/media-events#videomediadeleted">video.media.deleted</a>

#### Example
A user on a video-sharing platform decides to remove an old video from their profile, or suppose you're running a content moderation system, and one of the videos uploaded by a user violates your platform's policies. Using this endpoint, the media is permanently deleted from your library, ensuring it's no longer accessible or viewable by other users.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-media" method="delete" path="/on-demand/{mediaId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.deleteMedia({
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageVideosDeleteMedia } from "@fastpix/fastpix-node/funcs/manageVideosDeleteMedia.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosDeleteMedia(fastpix, {
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosDeleteMedia failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMediaRequest](../../models/operations/deletemediarequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteMediaResponse](../../models/operations/deletemediaresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ForbiddenError          | 403                            | application/json               |
| errors.MediaNotFoundError      | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## addMediaTrack

This endpoint allows you to add an audio or subtitle track to an existing media file using its `mediaId`. You need to provide the track `url` along with its `type` (audio or subtitle), `languageName` and `languageCode` in the request payload.


#### How it works

1. Send a POST request to this endpoint, replacing `{mediaId}` with the media ID (`uploadId` or `id`).

2. Provide the necessary details in the request body.

3. Receive a response containing a unique track ID and the details of the newly added track.


#### Webhook events

1. After successfully adding a track, your system will receive the webhook event <a href="https://docs.fastpix.io/docs/transform-media-events#videomediatrackcreated">video.media.track.created</a>.

2. Once the track is processed and ready, you will receive the webhook event <a href="https://docs.fastpix.io/docs/transform-media-events#videomediatrackready">video.media.track.ready</a>.

3. Finally, an update event <a href="https://docs.fastpix.io/docs/media-events#videomediaupdated">video.media.updated</a> will notify your system about the media's updated status.


#### Example
Suppose you have a video uploaded to the FastPix platform, and you want to add an Italian audio track to it. By calling this API, you can attach an external audio file (https://static.fastpix.io/music-1.mp3) to the media file. Similarly, if you need to add subtitles in different languages, you can specify type: `subtitle` with the corresponding subtitle `url`, `languageCode` and `languageName`.

Related guides: <a href="https://docs.fastpix.io/docs/manage-subtitle-tracks">Add own subtitle tracks</a>, <a href="https://docs.fastpix.io/docs/manage-audio-tracks">Add own audio tracks</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="Add-media-track" method="post" path="/on-demand/{mediaId}/tracks" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.addMediaTrack({
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    requestBody: {
      tracks: {
        url: "https://static.fastpix.io/music-1.mp3",
        type: "audio",
        languageCode: "it",
        languageName: "Italian",
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
import { manageVideosAddMediaTrack } from "@fastpix/fastpix-node/funcs/manageVideosAddMediaTrack.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosAddMediaTrack(fastpix, {
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    requestBody: {
      tracks: {
        url: "https://static.fastpix.io/music-1.mp3",
        type: "audio",
        languageCode: "it",
        languageName: "Italian",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosAddMediaTrack failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddMediaTrackRequest](../../models/operations/addmediatrackrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddMediaTrackResponse](../../models/operations/addmediatrackresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.TrackDuplicateRequestError | 400                               | application/json                  |
| errors.InvalidPermissionError     | 401                               | application/json                  |
| errors.ForbiddenError             | 403                               | application/json                  |
| errors.MediaNotFoundError         | 404                               | application/json                  |
| errors.ValidationErrorResponse    | 422                               | application/json                  |
| errors.FastpixDefaultError        | 4XX, 5XX                          | \*/\*                             |

## cancelUpload

This endpoint allows you to cancel ongoing upload by its `uploadId`. Once cancelled, the upload will be marked as cancelled. Use this if a user aborts an upload or if you want to programmatically stop an in-progress upload.

#### How it works

1. Make a PUT request to this endpoint, replacing `{uploadId}` with the unique upload ID received after starting the upload.
2. The response will confirm the cancellation and provide the status of the upload.

#### Webhook Events

Once the upload is cancelled, you will receive the webhook event <a href="https://docs.fastpix.io/docs/media-events#videomediauploadcancelled-event">video.media.upload.cancelled</a>.

#### Example

Suppose a user starts uploading a large video file but decides to cancel before completion. By calling this API, you can immediately stop the upload and free up resources.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancel-upload" method="put" path="/on-demand/upload/{uploadId}/cancel" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.cancelUpload({
    uploadId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageVideosCancelUpload } from "@fastpix/fastpix-node/funcs/manageVideosCancelUpload.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosCancelUpload(fastpix, {
    uploadId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosCancelUpload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelUploadRequest](../../models/operations/canceluploadrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CancelUploadResponse](../../models/operations/canceluploadresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestError         | 400                            | application/json               |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ForbiddenError          | 403                            | application/json               |
| errors.MediaNotFoundError      | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## updateMediaTrack

This endpoint allows you to update an existing audio or subtitle track associated with a media file. When updating a track, you must provide the new track `url`, `languageName`, and `languageCode`, ensuring all three parameters are included in the request.


#### How it works

1. Send a PATCH request to this endpoint, replacing `{mediaId}` with the media ID, and `{trackId}` with the ID of the track you want to update.

2. Provide the necessary details in the request body.

3. Receive a response confirming the track update.

#### Webhook Events

After updating a track, your system will receive webhook notifications:

1. After successfully updating a track, your system will receive the webhook event <a href="https://docs.fastpix.io/docs/transform-media-events#videomediatrackupdated">video.media.track.updated</a>.

2. Once the new track is processed and ready, you will receive the webhook event <a href="https://docs.fastpix.io/docs/transform-media-events#videomediatrackready">video.media.track.ready</a>.

3. Once the media file is updated with the new track details, a <a href="https://docs.fastpix.io/docs/media-events#videomediaupdated">video.media.updated</a> event will be triggered.


#### Example
Suppose you previously added a French subtitle track to a video but now need to update it with a different file. By calling this API, you can replace the existing subtitle file (.vtt) with a new one while keeping the same track ID. This is useful when:

  - The original track file has errors and needs correction.
  - You want to improve subtitle translations or replace an audio track with a better-quality version.
  
Related guides: <a href="https://docs.fastpix.io/docs/manage-subtitle-tracks">Add own subtitle tracks</a>, <a href="https://docs.fastpix.io/docs/manage-audio-tracks">Add own audio tracks</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="update-media-track" method="patch" path="/on-demand/{mediaId}/tracks/{trackId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.updateMediaTrack({
    trackId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    updateTrackRequest: {
      url: "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt",
      languageCode: "fr",
      languageName: "french",
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
import { manageVideosUpdateMediaTrack } from "@fastpix/fastpix-node/funcs/manageVideosUpdateMediaTrack.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosUpdateMediaTrack(fastpix, {
    trackId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    updateTrackRequest: {
      url: "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt",
      languageCode: "fr",
      languageName: "french",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosUpdateMediaTrack failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateMediaTrackRequest](../../models/operations/updatemediatrackrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateMediaTrackResponse](../../models/operations/updatemediatrackresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.TrackDuplicateRequestError | 400                               | application/json                  |
| errors.InvalidPermissionError     | 401                               | application/json                  |
| errors.ForbiddenError             | 403                               | application/json                  |
| errors.MediaNotFoundError         | 404                               | application/json                  |
| errors.ValidationErrorResponse    | 422                               | application/json                  |
| errors.FastpixDefaultError        | 4XX, 5XX                          | \*/\*                             |

## deleteMediaTrack

This endpoint allows you to delete an existing audio or subtitle track from a media file. Once deleted, the track will no longer be available for playback.


#### How it works


1. Send a DELETE request to this endpoint, replacing `{mediaId}` with the media ID, and `{trackId}` with the ID of the track you want to remove.

2. The track will be deleted from the media file, and you will receive a confirmation response.

#### Webhook events

1. After successfully deleting a track, your system will receive the webhook event **video.media.track.deleted**.

2. Once the media file is updated to reflect the track removal, a <a href="https://docs.fastpix.io/docs/media-events#videomediaupdated">video.media.updated</a> event will be triggered.


#### Example
Suppose you uploaded an audio track in Italian for a video but later realize it's incorrect or no longer needed. By calling this API, you can remove the specific track while keeping the rest of the media file unchanged. This is useful when:

  - A track was mistakenly added and needs to be removed.
  - The content owner requests the removal of a specific subtitle or audio track.
  - A new version of the track will be uploaded to replace the existing one.
  
Related guides: <a href="https://docs.fastpix.io/docs/manage-subtitle-tracks">Add own subtitle tracks</a>, <a href="https://docs.fastpix.io/docs/manage-audio-tracks">Add own audio tracks</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-media-track" method="delete" path="/on-demand/{mediaId}/tracks/{trackId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.deleteMediaTrack({
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    trackId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageVideosDeleteMediaTrack } from "@fastpix/fastpix-node/funcs/manageVideosDeleteMediaTrack.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosDeleteMediaTrack(fastpix, {
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    trackId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosDeleteMediaTrack failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMediaTrackRequest](../../models/operations/deletemediatrackrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteMediaTrackResponse](../../models/operations/deletemediatrackresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ForbiddenError          | 403                            | application/json               |
| errors.MediaNotFoundError      | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## generateSubtitleTrack

This endpoint allows you to generate subtitles for an existing audio track in a media file. By calling this API, you can generate subtitles automatically using speech recognition

#### How it works

1. Send a `POST` request to this endpoint, replacing `{mediaId}` with the media ID and `{trackId}` with the track ID.

2. Provide the necessary details in the request body, including the languageName and languageCode.

3. Receive a response containing a unique subtitle track ID and its details.

#### Webhook Events

1. Once the subtitle track is generated and ready, you will receive the webhook event <a href="https://docs.fastpix.io/docs/transform-media-events#videomediasubtitlegeneratedready">video.media.subtitle.generated.ready</a>.

2. Finally, an update event <a href="https://docs.fastpix.io/docs/media-events#videomediaupdated">video.media.updated</a> will notify your system about the media's updated status.

</br> Related guide: <a href="https://docs.fastpix.io/docs/add-auto-generated-subtitles-to-videos">Add auto-generated subtitles</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="Generate-subtitle-track" method="post" path="/on-demand/{mediaId}/tracks/{trackId}/generate-subtitles" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.generateSubtitleTrack({
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    trackId: "d46f5df9-1a8f-4f0a-b56e-9f5b5d5b9e21",
    trackSubtitlesGenerateRequest: {
      languageName: "Italian",
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
import { manageVideosGenerateSubtitleTrack } from "@fastpix/fastpix-node/funcs/manageVideosGenerateSubtitleTrack.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosGenerateSubtitleTrack(fastpix, {
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    trackId: "d46f5df9-1a8f-4f0a-b56e-9f5b5d5b9e21",
    trackSubtitlesGenerateRequest: {
      languageName: "Italian",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosGenerateSubtitleTrack failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GenerateSubtitleTrackRequest](../../models/operations/generatesubtitletrackrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateSubtitleTrackResponse](../../models/operations/generatesubtitletrackresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.TrackDuplicateRequestError | 400                               | application/json                  |
| errors.InvalidPermissionError     | 401                               | application/json                  |
| errors.ForbiddenError             | 403                               | application/json                  |
| errors.MediaNotFoundError         | 404                               | application/json                  |
| errors.ValidationErrorResponse    | 422                               | application/json                  |
| errors.FastpixDefaultError        | 4XX, 5XX                          | \*/\*                             |

## updatedSourceAccess

This endpoint allows you to update the `sourceAccess` setting of an existing media file. The `sourceAccess` parameter determines whether the original media file is accessible or restricted. Setting this to `true` enables access to the media source, while setting it to `false` restricts access. 

#### How it works

1. Make a `PATCH` request to this endpoint, replacing `{mediaId}` with the ID of the media you want to update.

2. Include the updated `sourceAccess` parameter in the request body.

3. Receive a response confirming the update to the media's source access status.
4. Webhook events: <a href="https://docs.fastpix.io/docs/transform-media-events#videomediasourceready">video.media.source.ready</a>, <a href="https://docs.fastpix.io/docs/transform-media-events#videomediasourcedeleted">video.media.source.deleted</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updated-source-access" method="patch" path="/on-demand/{mediaId}/source-access" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.updatedSourceAccess({
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    requestBody: {
      sourceAccess: true,
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
import { manageVideosUpdatedSourceAccess } from "@fastpix/fastpix-node/funcs/manageVideosUpdatedSourceAccess.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosUpdatedSourceAccess(fastpix, {
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    requestBody: {
      sourceAccess: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosUpdatedSourceAccess failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatedSourceAccessRequest](../../models/operations/updatedsourceaccessrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdatedSourceAccessResponse](../../models/operations/updatedsourceaccessresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ForbiddenError          | 403                            | application/json               |
| errors.MediaNotFoundError      | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## updatedMp4Support

This endpoint allows you to update the `mp4Support` setting of an existing media file using its media ID. You can specify the MP4 support level, such as `none`, `capped_4k`, `audioOnly`, or a combination of `audioOnly`, `capped_4k`, in the request payload.

#### How it works

1. Send a PATCH request to this endpoint, replacing `{mediaId}` with the media ID.

2. Provide the desired `mp4Support` value in the request body.

3. Receive a response confirming the update, including the media's updated MP4 support status.

#### MP4 Support Options

- `none` – MP4 support is disabled for this media.

- `capped_4k` – The media will have mp4 renditions up to 4K resolution.

- `audioOnly` – The media will generate an m4a file containing only the audio track.

- `audioOnly,capped_4k` – The media will have both an audio-only m4a file and mp4 renditions up to 4K resolution.

#### Webhook events

- <a href="https://docs.fastpix.io/docs/transform-media-events#videomediamp4supportready">video.media.mp4Support.ready</a> – Triggered when the MP4 support setting is successfully updated.

#### Example
Suppose you have a video uploaded to the FastPix platform, and you want to allow users to download the video in MP4 format. By setting "mp4Support": "capped_4k", the system will generate an MP4 rendition of the video up to 4K resolution, making it available for download via the stream URL(`https://stream.fastpix.io/{playbackId}/{capped-4k.mp4 | audio.m4a}`).
If you want users to stream only the audio from the media file, you can set "mp4Support": "audioOnly". This will provide an audio-only stream URL that allows users to listen to the media without video.
By setting "mp4Support": "audioOnly,capped_4k", both options will be enabled. Users will be able to download the MP4 video and also stream just the audio version of the media.


Related guide: <a href="https://docs.fastpix.io/docs/mp4-support-for-offline-viewing">Use MP4 support for offline viewing</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updated-mp4Support" method="patch" path="/on-demand/{mediaId}/update-mp4Support" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.updatedMp4Support({
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    requestBody: {
      mp4Support: "capped_4k",
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
import { manageVideosUpdatedMp4Support } from "@fastpix/fastpix-node/funcs/manageVideosUpdatedMp4Support.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosUpdatedMp4Support(fastpix, {
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
    requestBody: {
      mp4Support: "capped_4k",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosUpdatedMp4Support failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatedMp4SupportRequest](../../models/operations/updatedmp4supportrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdatedMp4SupportResponse](../../models/operations/updatedmp4supportresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.DuplicateMp4SupportError | 400                             | application/json                |
| errors.InvalidPermissionError   | 401                             | application/json                |
| errors.ForbiddenError           | 403                             | application/json                |
| errors.MediaNotFoundError       | 404                             | application/json                |
| errors.ValidationErrorResponse  | 422                             | application/json                |
| errors.FastpixDefaultError      | 4XX, 5XX                        | \*/\*                           |

## retrieveMediaInputInfo

Allows you to retrieve detailed information about the media inputs associated with a specific media item. You can use this endpoint to verify the media file's input URL, track creation status, and container format. The `mediaId` (either `uploadId` or `id`) must be provided to fetch the information. 


#### How it works

Upon making a `GET` request with the mediaId, FastPix returns a response with: 

* The public storage input `url` of the uploaded media file. 

* Information about the `tracks` associated with the media, including both video and audio tracks, indicating whether they have been successfully created. 

* The format of the uploaded media file container (e.g., MP4, MKV). 

This endpoint is particularly useful for ensuring that all necessary tracks (video and audio) have been correctly associated with the media during the upload or media creation process.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="retrieveMediaInputInfo" method="get" path="/on-demand/{mediaId}/input-info" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.retrieveMediaInputInfo({
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageVideosRetrieveMediaInputInfo } from "@fastpix/fastpix-node/funcs/manageVideosRetrieveMediaInputInfo.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosRetrieveMediaInputInfo(fastpix, {
    mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosRetrieveMediaInputInfo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RetrieveMediaInputInfoRequest](../../models/operations/retrievemediainputinforequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RetrieveMediaInputInfoResponse](../../models/operations/retrievemediainputinforesponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ForbiddenError          | 403                            | application/json               |
| errors.MediaNotFoundError      | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## listUploads

This endpoint retrieves a paginated list of all unused upload signed URLs within your organization. It provides comprehensive metadata including upload IDs, creation dates, status, and URLs, helping you manage your media resources efficiently.

An unused upload URL is a signed URL that gets generated when an user initiates upload but never completed the upload process. This can happen due to reasons like network issues, manual cancellation of upload, browser/app crashes or session timeouts.These URLs remain in the system as "unused" since they were created but never resulted in a successful media file upload.

#### How it works

 - The endpoint returns metadata for all unused upload URLs in your organization's library.
 - Results are paginated to manage large datasets effectively.
 - Signed URLs expire after 24 hours from creation.
 - Each entry includes full metadata about the unused upload.



#### Example

A video management team for a media organization regularly uploads content to their system but often forgets to delete or utilize unused uploads. These unused uploads, which have signed URLs that expire after 24 hours, need to be managed efficiently. By using this API, they can retrieve metadata for all unused uploads, identify expired signed URLs, and decide whether to regenerate URLs, reuse the uploads, or delete them.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-uploads" method="get" path="/on-demand/uploads" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.listUploads({
    limit: 20,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageVideosListUploads } from "@fastpix/fastpix-node/funcs/manageVideosListUploads.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosListUploads(fastpix, {
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosListUploads failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUploadsRequest](../../models/operations/listuploadsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListUploadsResponse](../../models/operations/listuploadsresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ForbiddenError          | 403                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |

## getMediaClips

This endpoint retrieves a list of all media clips associated with a given source media ID. It helps in organizing and managing media's efficiently by providing metadata, including clip media IDs and other relevant details.

A media clip is a segmented portion of an original media file (source media). Clips are often created for various purposes such as previews, highlights, or customized edits. This API allows you to fetch all such clips linked to a specific source media, making it easier to track and manage clips.


#### How it works

- The endpoint returns metadata for all media clips associated with the given `sourceMediaId`.
- Results are paginated to efficiently handle large datasets.
- Each entry includes detailed metadata such as media `id`, `duration`, and `status`.
- Helps in organizing clips effectively by providing structured information.


#### Example

Imagine you're managing a video editing platform where users upload full-length videos and create short clips for social media sharing. To keep track of all clips linked to a particular video, you call this API with the sourceMediaId. The response provides a list of all associated clips, allowing you to manage, edit, or repurpose them as needed.

Related guide: <a href="https://docs.fastpix.io/docs/create-clips-from-existing-media">Create clips from existing media</a>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-media-clips" method="get" path="/on-demand/{sourceMediaId}/media-clips" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.manageVideos.getMediaClips({
    sourceMediaId: "fc733e3f-2fba-4c3d-9388-2511dc50d15f",
    offset: 5,
    limit: 20,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageVideosGetMediaClips } from "@fastpix/fastpix-node/funcs/manageVideosGetMediaClips.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await manageVideosGetMediaClips(fastpix, {
    sourceMediaId: "fc733e3f-2fba-4c3d-9388-2511dc50d15f",
    offset: 5,
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosGetMediaClips failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMediaClipsRequest](../../models/operations/getmediaclipsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MediaClipResponse](../../models/mediaclipresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.InvalidPermissionError  | 401                            | application/json               |
| errors.ForbiddenError          | 403                            | application/json               |
| errors.MediaClipNotFoundError  | 404                            | application/json               |
| errors.ValidationErrorResponse | 422                            | application/json               |
| errors.FastpixDefaultError     | 4XX, 5XX                       | \*/\*                          |