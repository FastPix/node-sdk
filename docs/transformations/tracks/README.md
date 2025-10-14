# Media Tracks
(*tracks*)

## Overview

### Available Operations

* [addMediaTrack](#addmediatrack) - Add audio or subtitle tracks to media
* [updateMediaTrack](#updatemediatrack) - Modify existing audio or subtitle tracks
* [deleteMediaTrack](#deletemediatrack) - Remove audio or subtitle tracks

## addMediaTrack

This endpoint allows you to add audio or subtitle tracks to an existing media file.

#### How it works
1. Send a POST request to this endpoint, replacing `<mediaId>` with the unique ID of the media.
2. Include the track information in the request body (language, type, etc.).
3. The response will include the updated media data and confirmation of the changes applied.

**Use case**: This is particularly useful when you want to add multiple language tracks or additional audio/subtitle options to your media.

Related guide: <a href="https://docs.fastpix.io/docs/add-tracks">Add tracks</a>

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
  const result = await fastpix.manageVideos.addMediaTrack({
    mediaId: "your-media-id",
    language: "en",
    type: "audio",
    name: "English Audio Track",
  });

  console.log(result);
}

run();
```

## updateMediaTrack

This endpoint allows you to modify existing audio or subtitle tracks for a media file.

#### How it works
1. Send a PATCH request to this endpoint, replacing `<mediaId>` and `<trackId>` with the appropriate IDs.
2. Include the updated track information in the request body.
3. The response will include the updated media data and confirmation of the changes applied.

**Use case**: This is useful when you need to update track metadata, change language settings, or modify track properties.

Related guide: <a href="https://docs.fastpix.io/docs/update-tracks">Update tracks</a>

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
  const result = await fastpix.manageVideos.updateMediaTrack({
    mediaId: "your-media-id",
    trackId: "your-track-id",
    language: "es",
    name: "Spanish Audio Track",
  });

  console.log(result);
}

run();
```

## deleteMediaTrack

This endpoint allows you to remove audio or subtitle tracks from a media file.

#### How it works
1. Send a DELETE request to this endpoint, replacing `<mediaId>` and `<trackId>` with the appropriate IDs.
2. The response will include the updated media data and confirmation of the track removal.

**Use case**: This is useful when you need to remove outdated tracks, clean up unused language options, or simplify your media structure.

Related guide: <a href="https://docs.fastpix.io/docs/delete-tracks">Delete tracks</a>

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
  const result = await fastpix.manageVideos.deleteMediaTrack({
    mediaId: "your-media-id",
    trackId: "your-track-id",
  });

  console.log(result);
}

run();
```

## Media Tracks Overview

### What are Media Tracks?

Media tracks are additional audio or subtitle streams that can be added to your video content to provide multiple language options or accessibility features.

### Types of Tracks

**Audio Tracks:**
- Multiple language audio streams
- Commentary tracks
- Music-only tracks
- Sound effects tracks

**Subtitle Tracks:**
- Closed captions
- Subtitles in multiple languages
- SDH (Subtitles for Deaf and Hard of Hearing)
- Forced subtitles for foreign language content

### Use Cases

**International Content:**
- Add multiple language audio tracks
- Provide subtitles in different languages
- Support global audiences

**Accessibility:**
- Add closed captions for hearing-impaired users
- Provide audio descriptions
- Support assistive technologies

**Content Enhancement:**
- Add commentary tracks
- Include director's commentary
- Provide educational content overlays

### Best Practices

1. **Use consistent naming** for track identification
2. **Provide multiple language options** for international content
3. **Include accessibility tracks** for all public content
4. **Test track playback** across different devices
5. **Organize tracks logically** by language and type
