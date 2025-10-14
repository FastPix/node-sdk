# Get Media Clips
(*getMediaClips*)

## Overview

### Available Operations

* [getMediaClips](#getmediaclips) - Get all clips of a media

## getMediaClips

This endpoint retrieves a list of all media clips associated with a given source media ID. It helps in organizing and managing media efficiently by providing metadata, including clip media IDs and other relevant details.

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

```typescript
import { Fastpix } from "@fastpix/fastpix-node";

const fastpix = new Fastpix({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const result = await fastpix.manageVideos.getMediaClips({
    sourceMediaId: "your-source-media-id",
    limit: 20,
    offset: 0,
    orderBy: "DESC",
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
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await manageVideosGetMediaClips(fastpix, {
    sourceMediaId: "your-source-media-id",
    limit: 20,
    offset: 0,
    orderBy: "DESC",
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

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sourceMediaId` | string | ✓ | The unique identifier of the source media |
| `limit` | number | - | The number of media clips to retrieve per request |
| `offset` | number | - | Offset determines the starting point for data retrieval within a paginated list |
| `orderBy` | SortOrder | - | The values in the list can be arranged in two ways: DESC (Descending) or ASC (Ascending) |

### Response

**Promise<[models.MediaClipResponse](../../models/mediaclipresponse.md)>**

### Errors

| Error Type | Status Code | Content Type |
|-------------|-------------|--------------|
| errors.InvalidPermissionError | 401 | application/json |
| errors.ForbiddenError | 403 | application/json |
| errors.MediaClipNotFoundError | 404 | application/json |
| errors.ValidationErrorResponse | 422 | application/json |
| errors.FastpixDefaultError | 4XX, 5XX | */* |

## Media Clips Overview

### What are Media Clips?

Media clips are segmented portions of an original media file (source media). They are created for various purposes:

- **Previews** - Short previews for social media
- **Highlights** - Key moments from longer content
- **Customized edits** - Specific segments for different audiences
- **Social media content** - Optimized clips for different platforms

### Use Cases

**Content Creation:**
- Create short clips from long-form content
- Generate social media previews
- Extract highlights for marketing

**Video Editing Platforms:**
- Allow users to create clips from uploaded videos
- Generate previews for video libraries
- Create highlight reels

**Media Management:**
- Organize content by clips
- Track usage of different segments
- Manage content distribution

### Best Practices

1. **Use pagination** for large datasets
2. **Order results** by creation date or relevance
3. **Filter by status** to get only ready clips
4. **Cache results** for frequently accessed clips
5. **Monitor clip usage** for analytics
