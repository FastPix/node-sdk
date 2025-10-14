# Subtitles
(*subtitles*)

## Overview

### Available Operations

* [generateSubtitleTrack](#generatesubtitletrack) - Create automatic subtitles for media

## generateSubtitleTrack

This endpoint allows you to generate automatic subtitles for an existing media file.

#### How it works
1. Send a PATCH request to this endpoint, replacing `<mediaId>` with the unique ID of the media for which you wish to generate subtitles.
2. Include the `generate` parameter in the request body to enable subtitle generation.
3. The response will include the updated media data and confirmation of the changes applied.

You can use the <a href="https://docs.fastpix.io/docs/ai-events#videomediaaisubtitlesready">video.mediaAI.subtitles.ready</a> webhook event to track and notify about the subtitle generation.

**Use case**: This is particularly useful when a user uploads a video and later chooses to generate subtitles without needing to re-upload the video.

Related guide: <a href="https://docs.fastpix.io/docs/add-auto-generated-subtitles-to-videos">Generate subtitles</a>

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
  const result = await fastpix.manageVideos.generateSubtitleTrack({
    mediaId: "your-media-id",
    generate: true,
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
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await manageVideosGenerateSubtitleTrack(fastpix, {
    mediaId: "your-media-id",
    generate: true,
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

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mediaId` | string | ✓ | The unique identifier of the media |
| `generate` | boolean | ✓ | Enable subtitle generation |

### Response

**Promise<[models.MediaResponse](../../models/mediaresponse.md)>**

### Errors

| Error Type | Status Code | Content Type |
|-------------|-------------|--------------|
| errors.InvalidPermissionError | 401 | application/json |
| errors.ForbiddenError | 403 | application/json |
| errors.ValidationErrorResponse | 422 | application/json |
| errors.FastpixDefaultError | 4XX, 5XX | */* |

## Subtitles Overview

### What are Automatic Subtitles?

Automatic subtitles are AI-generated text overlays that provide accessibility and better user experience for video content.

### Use Cases

**Accessibility:**
- Make content accessible to hearing-impaired users
- Provide text alternatives for audio content
- Improve content discoverability through text search

**International Content:**
- Generate subtitles in multiple languages
- Make content accessible to global audiences
- Improve engagement in different regions

**Content Enhancement:**
- Add professional subtitles to user-generated content
- Improve video SEO with searchable text
- Enhance social media sharing with captions

### Best Practices

1. **Generate subtitles** for all public content
2. **Review and edit** AI-generated subtitles for accuracy
3. **Use multiple languages** for international content
4. **Enable subtitle search** for better content discovery
5. **Provide manual override** for important content
