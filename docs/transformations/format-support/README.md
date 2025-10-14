# Format Support
(*formatSupport*)

## Overview

### Available Operations

* [updateMP4Support](#updatemp4support) - Configure MP4 download capabilities

## updateMP4Support

This endpoint allows you to configure MP4 download capabilities for your media content, enabling or disabling direct MP4 file downloads.

#### How it works
1. Send a PATCH request to this endpoint, replacing `<mediaId>` with the unique ID of the media.
2. Include the MP4 support settings in the request body (enabled, disabled, etc.).
3. The response will include the updated media data and confirmation of the format support changes applied.

**Use case**: This is particularly useful when you need to control how users can download your content, implement content protection, or manage bandwidth usage.

Related guide: <a href="https://docs.fastpix.io/docs/mp4-support">MP4 support</a>

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
  const result = await fastpix.manageVideos.updateMP4Support({
    mediaId: "your-media-id",
    mp4Support: true,
    downloadQuality: "1080p",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FastpixCore } from "@fastpix/fastpix-node/core.js";
import { manageVideosUpdateMP4Support } from "@fastpix/fastpix-node/funcs/manageVideosUpdateMP4Support.js";

// Use `FastpixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const fastpix = new FastpixCore({
  security: {
    username: "your-access-token",
    password: "your-secret-key",
  },
});

async function run() {
  const res = await manageVideosUpdateMP4Support(fastpix, {
    mediaId: "your-media-id",
    mp4Support: true,
    downloadQuality: "1080p",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("manageVideosUpdateMP4Support failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mediaId` | string | ✓ | The unique identifier of the media |
| `mp4Support` | boolean | ✓ | Enable or disable MP4 download support |
| `downloadQuality` | string | - | Maximum download quality (720p, 1080p, 4K) |

### Response

**Promise<[models.MediaResponse](../../models/mediaresponse.md)>**

### Errors

| Error Type | Status Code | Content Type |
|-------------|-------------|--------------|
| errors.InvalidPermissionError | 401 | application/json |
| errors.ForbiddenError | 403 | application/json |
| errors.ValidationErrorResponse | 422 | application/json |
| errors.FastpixDefaultError | 4XX, 5XX | */* |

## Format Support Overview

### What is MP4 Support?

MP4 support controls whether users can download your media content as MP4 files, providing flexibility in content distribution and protection.

### Support Options

**Enabled MP4 Support:**
- Users can download content as MP4 files
- Suitable for educational content and user-generated media
- Provides offline access capabilities

**Disabled MP4 Support:**
- Content is streaming-only
- Prevents unauthorized downloads
- Suitable for premium and protected content

### Use Cases

**Content Protection:**
- Prevent unauthorized downloads
- Protect premium content
- Implement DRM-like restrictions

**Bandwidth Management:**
- Control download traffic
- Manage server costs
- Optimize content delivery

**Business Models:**
- Implement download restrictions for premium content
- Control content distribution
- Manage licensing agreements

### Best Practices

1. **Enable MP4 support** for educational and user-generated content
2. **Disable MP4 support** for premium and protected content
3. **Consider quality settings** for download optimization
4. **Monitor download patterns** for bandwidth management
5. **Implement proper access controls** for downloadable content
