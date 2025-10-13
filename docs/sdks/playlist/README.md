# Playlist
(*playlist*)

## Overview

### Available Operations

* [createAPlaylist](#createaplaylist) - Create a new playlist
* [getAllPlaylists](#getallplaylists) - Get all playlists
* [getPlaylistById](#getplaylistbyid) - Get a playlist by ID
* [updateAPlaylist](#updateaplaylist) - Update a playlist by ID
* [deleteAPlaylist](#deleteaplaylist) - Delete a playlist by ID
* [addMediaToPlaylist](#addmediatoplaylist) - Add media to a playlist by ID
* [changeMediaOrderInPlaylist](#changemediaorderinplaylist) - Change media order in a playlist by ID
* [deleteMediaFromPlaylist](#deletemediafromplaylist) - Delete media in a playlist by ID

## createAPlaylist

This endpoint creates a new playlist within a specified workspace. A playlist acts as a container for organizing media items either manually or based on filters and metadata. <br> <br>
### Playlists can be created in two modes
- **Manual:** An empty playlist is created without any initial media items. It's intended for manual curation, where items can be added later in a user-defined sequence.
- **Smart:** The playlist is auto-populated at creation time based on filters (video creation date range) criteria provided in the request.

#### How it works 

 - When a user sends a POST request to this endpoint, FastPix creates a playlist and returns a playlist ID, using which items can be added later in a user-defined sequence.
 - For a smart playlist, the playlist will be auto-populated based on metadata in the request body.


#### Example
An e-learning platform creates a new playlist titled "Beginner Python Series" via the API. The response includes a unique playlist ID. The platform then uses this ID to add a series of video tutorials to the playlist in a defined order. The playlist is presented to learners on the frontend as a structured learning path.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-a-playlist" method="post" path="/on-demand/playlists" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.playlist.createAPlaylist({
    name: "playlist name",
    referenceId: "a1",
    type: "smart",
    description: "This is a playlist",
    playOrder: "createdDate ASC",
    limit: 20,
    metadata: {
      createdDate: {
        startDate: "2024-11-11",
        endDate: "2024-12-12",
      },
      updatedDate: {
        startDate: "2024-11-11",
        endDate: "2024-12-12",
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
import { playlistCreateAPlaylist } from "@fastpix/fastpix-node/funcs/playlistCreateAPlaylist.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await playlistCreateAPlaylist(fastpix, {
    name: "playlist name",
    referenceId: "a1",
    type: "smart",
    description: "This is a playlist",
    playOrder: "createdDate ASC",
    limit: 20,
    metadata: {
      createdDate: {
        startDate: "2024-11-11",
        endDate: "2024-12-12",
      },
      updatedDate: {
        startDate: "2024-11-11",
        endDate: "2024-12-12",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("playlistCreateAPlaylist failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreatePlaylistRequest](../../models/createplaylistrequest.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PlaylistCreatedResponse](../../models/playlistcreatedresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.UnauthorizedError                 | 401                                      | application/json                         |
| errors.InvalidPermissionError            | 403                                      | application/json                         |
| errors.DuplicateReferenceIdErrorResponse | 409                                      | application/json                         |
| errors.ValidationErrorResponse           | 422                                      | application/json                         |
| errors.FastpixDefaultError               | 4XX, 5XX                                 | \*/\*                                    |

## getAllPlaylists

This endpoint retrieves all playlists present within a specified workspace. It allows users to view the collection of playlists that have been created, whether manual or smart, along with their associated metadata.
#### How it works

 - When a user sends a GET request to this endpoint, FastPix returns a list of all playlists in the workspace, including details such as playlist IDs, titles, creation mode (manual or smart), and other relevant metadata.
 
#### Example

  An e-learning platform requests all playlists within a workspace to display an overview of available learning paths. The response includes multiple playlists like "Beginner Python Series" and "Advanced Java Tutorials," enabling the platform to show users a catalog of curated content collections.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-all-playlists" method="get" path="/on-demand/playlists" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.playlist.getAllPlaylists({
    limit: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { playlistGetAllPlaylists } from "@fastpix/fastpix-node/funcs/playlistGetAllPlaylists.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await playlistGetAllPlaylists(fastpix, {
    limit: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("playlistGetAllPlaylists failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllPlaylistsRequest](../../models/operations/getallplaylistsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetAllPlaylistsResponse](../../models/getallplaylistsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.UnauthorizedError   | 401                        | application/json           |
| errors.FastpixDefaultError | 4XX, 5XX                   | \*/\*                      |

## getPlaylistById

This endpoint retrieves detailed information about a specific playlist using its unique `playlistId`. It provides comprehensive metadata about the playlist, including its title, creation mode (manual or smart), media items along with the metadata of each media in the playlist.

 
#### Example
An e-learning platform requests details for the playlist "Beginner Python Series" by providing its unique `playlistId`. The response includes the playlist's title, creation mode, and the ordered list of video tutorials contained within, enabling the platform to present the full learning path to users.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-playlist-by-id" method="get" path="/on-demand/playlists/{playlistId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.playlist.getPlaylistById({
    playlistId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { playlistGetPlaylistById } from "@fastpix/fastpix-node/funcs/playlistGetPlaylistById.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await playlistGetPlaylistById(fastpix, {
    playlistId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("playlistGetPlaylistById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPlaylistByIdRequest](../../models/operations/getplaylistbyidrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PlaylistByIdResponse](../../models/playlistbyidresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnauthorizedError              | 401                                   | application/json                      |
| errors.NotFoundError                  | 404                                   | application/json                      |
| errors.InvalidPlaylistIdResponseError | 422                                   | application/json                      |
| errors.FastpixDefaultError            | 4XX, 5XX                              | \*/\*                                 |

## updateAPlaylist

This endpoint allows you to update the name and description of an existing playlist. It enables modifications to the playlist's metadata without altering the media items or playlist structure.
#### How it works

 - When a user sends a PUT request to this endpoint with the `playlistId` and updated name and description in the request body, FastPix updates the playlist metadata accordingly and returns the updated playlist details.

#### Example
An e-learning platform updates the playlist titled "Beginner Python Series" to rename it as "Python Basics" and add a more detailed description. The updated metadata is reflected when retrieving the playlist, helping users better understand the playlist content.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update-a-playlist" method="put" path="/on-demand/playlists/{playlistId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.playlist.updateAPlaylist({
    playlistId: "<id>",
    updatePlaylistRequest: {
      name: "updated name",
      description: "updated description",
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
import { playlistUpdateAPlaylist } from "@fastpix/fastpix-node/funcs/playlistUpdateAPlaylist.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await playlistUpdateAPlaylist(fastpix, {
    playlistId: "<id>",
    updatePlaylistRequest: {
      name: "updated name",
      description: "updated description",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("playlistUpdateAPlaylist failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAPlaylistRequest](../../models/operations/updateaplaylistrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PlaylistCreatedResponse](../../models/playlistcreatedresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnauthorizedError              | 401                                   | application/json                      |
| errors.InvalidPermissionError         | 403                                   | application/json                      |
| errors.InvalidPlaylistIdResponseError | 422                                   | application/json                      |
| errors.FastpixDefaultError            | 4XX, 5XX                              | \*/\*                                 |

## deleteAPlaylist

This endpoint allows you to delete an existing playlist from the workspace. Once deleted, the playlist and its metadata are permanently removed and cannot be recovered.
#### How it works
 - When a user sends a DELETE request to this endpoint with the `playlistId`, FastPix removes the specified playlist from the workspace and returns a confirmation of successful deletion.
 
#### Example
An e-learning platform deletes an outdated playlist titled "Old Python Tutorials" by providing its unique playlist ID. The platform receives confirmation that the playlist has been removed, ensuring learners no longer see the obsolete content.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-a-playlist" method="delete" path="/on-demand/playlists/{playlistId}" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.playlist.deleteAPlaylist({
    playlistId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { playlistDeleteAPlaylist } from "@fastpix/fastpix-node/funcs/playlistDeleteAPlaylist.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await playlistDeleteAPlaylist(fastpix, {
    playlistId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("playlistDeleteAPlaylist failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAPlaylistRequest](../../models/operations/deleteaplaylistrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SuccessResponse](../../models/successresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnauthorizedError              | 401                                   | application/json                      |
| errors.InvalidPermissionError         | 403                                   | application/json                      |
| errors.NotFoundError                  | 404                                   | application/json                      |
| errors.InvalidPlaylistIdResponseError | 422                                   | application/json                      |
| errors.FastpixDefaultError            | 4XX, 5XX                              | \*/\*                                 |

## addMediaToPlaylist

This endpoint allows you to add one or more media items to an existing playlist. By passing the media ID(s) in the request, the specified media items are appended to the playlist in the order provided.
#### How it works

 - When a user sends a PATCH request to this endpoint with the `playlistId` as path parameter and a list of media ID(s) in the request body, FastPix adds the specified media items to the playlist and returns the updated playlist details.
 
#### Example
An e-learning platform adds new video tutorials to the "Beginner Python Series" playlist by sending their media IDs in the request. The playlist is updated with the new content, ensuring learners have access to the latest tutorials in sequence.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add-media-to-playlist" method="patch" path="/on-demand/playlists/{playlistId}/media" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.playlist.addMediaToPlaylist({
    playlistId: "<id>",
    mediaIdsRequest: {
      mediaIds: [
        "your-media-id-1",
        "your-media-id-2",
        "your-media-id-3",
      ],
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
import { playlistAddMediaToPlaylist } from "@fastpix/fastpix-node/funcs/playlistAddMediaToPlaylist.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await playlistAddMediaToPlaylist(fastpix, {
    playlistId: "<id>",
    mediaIdsRequest: {
      mediaIds: [
        "your-media-id-1",
        "your-media-id-2",
        "your-media-id-3",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("playlistAddMediaToPlaylist failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddMediaToPlaylistRequest](../../models/operations/addmediatoplaylistrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PlaylistByIdResponse](../../models/playlistbyidresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnauthorizedError              | 401                                   | application/json                      |
| errors.InvalidPermissionError         | 403                                   | application/json                      |
| errors.NotFoundError                  | 404                                   | application/json                      |
| errors.InvalidPlaylistIdResponseError | 422                                   | application/json                      |
| errors.FastpixDefaultError            | 4XX, 5XX                              | \*/\*                                 |

## changeMediaOrderInPlaylist

This endpoint allows you to change the order of media items within a playlist. By passing the complete list of media IDs in the desired sequence, the playlist's play order is updated accordingly.
#### How it works

 - When a user sends a PUT request to this endpoint with the `playlistId` as path parameter and the reordered list of all media IDs in the request body, FastPix updates the playlist to reflect the new media sequence and returns the updated playlist details.
 
#### Example
An e-learning platform rearranges the "Beginner Python Series" playlist by submitting a reordered list of media IDs. The playlist now follows the new sequence, providing learners with a better structured learning path.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="change-media-order-in-playlist" method="put" path="/on-demand/playlists/{playlistId}/media" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.playlist.changeMediaOrderInPlaylist({
    playlistId: "<id>",
    mediaIdsRequest: {
      mediaIds: [
        "your-media-id-1",
        "your-media-id-2",
        "your-media-id-3",
      ],
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
import { playlistChangeMediaOrderInPlaylist } from "@fastpix/fastpix-node/funcs/playlistChangeMediaOrderInPlaylist.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await playlistChangeMediaOrderInPlaylist(fastpix, {
    playlistId: "<id>",
    mediaIdsRequest: {
      mediaIds: [
        "your-media-id-1",
        "your-media-id-2",
        "your-media-id-3",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("playlistChangeMediaOrderInPlaylist failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChangeMediaOrderInPlaylistRequest](../../models/operations/changemediaorderinplaylistrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PlaylistByIdResponse](../../models/playlistbyidresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnauthorizedError              | 401                                   | application/json                      |
| errors.InvalidPermissionError         | 403                                   | application/json                      |
| errors.NotFoundError                  | 404                                   | application/json                      |
| errors.InvalidPlaylistIdResponseError | 422                                   | application/json                      |
| errors.FastpixDefaultError            | 4XX, 5XX                              | \*/\*                                 |

## deleteMediaFromPlaylist

This endpoint allows you to delete one or more media items from an existing playlist. By passing the media ID(s) in the request, the specified media items are removed from the playlist.
#### How it works

 - When a user sends a DELETE request to this endpoint with the playlist ID as the path parameter and the media ID(s) to be removed in the request body, FastPix deletes the specified media items from the playlist and returns the updated playlist details.
 
#### Example
An e-learning platform removes outdated video tutorials from the "Beginner Python Series" playlist by specifying their media IDs in the request. The playlist is updated to exclude these items, ensuring learners only access relevant content.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-media-from-playlist" method="delete" path="/on-demand/playlists/{playlistId}/media" -->
```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await fastpix.playlist.deleteMediaFromPlaylist({
    playlistId: "<id>",
    mediaIdsRequest: {
      mediaIds: [
        "your-media-id-1",
        "your-media-id-2",
        "your-media-id-3",
      ],
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
import { playlistDeleteMediaFromPlaylist } from "@fastpix/fastpix-node/funcs/playlistDeleteMediaFromPlaylist.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await playlistDeleteMediaFromPlaylist(fastpix, {
    playlistId: "<id>",
    mediaIdsRequest: {
      mediaIds: [
        "your-media-id-1",
        "your-media-id-2",
        "your-media-id-3",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("playlistDeleteMediaFromPlaylist failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMediaFromPlaylistRequest](../../models/operations/deletemediafromplaylistrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PlaylistByIdResponse](../../models/playlistbyidresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnauthorizedError              | 401                                   | application/json                      |
| errors.InvalidPermissionError         | 403                                   | application/json                      |
| errors.NotFoundError                  | 404                                   | application/json                      |
| errors.InvalidPlaylistIdResponseError | 422                                   | application/json                      |
| errors.FastpixDefaultError            | 4XX, 5XX                              | \*/\*                                 |