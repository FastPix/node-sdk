# In-Video AI Features
(*inVideoAIFeatures*)

## Overview

### Available Operations

* [updateMediaSummary](#updatemediasummary) - Generate video summary
* [updateMediaChapters](#updatemediachapters) - Generate video chapters
* [updateMediaNamedEntities](#updatemedianamedentities) - Generate named entities
* [updateMediaModeration](#updatemediamoderation) - Enable video moderation

## updateMediaSummary

This endpoint allows you to generate the summary for an existing media.

#### How it works
1. Send a PATCH request to this endpoint, replacing `<mediaId>` with the unique ID of the media for which you wish to generate a summary.
2. Include the `generate` parameter in the request body.
3. Include the `summaryLength` parameter, specify the desired length of the summary in words (e.g., 120 words), this determines how concise or detailed the summary will be. If no specific summary length is provided, the default length will be 100 words. 
4. The response will include the updated media data and confirmation of the changes applied.

You can use the <a href="https://docs.fastpix.io/docs/ai-events#videomediaaisummaryready">video.mediaAI.summary.ready</a> webhook event to track and notify about the summary generation.

**Use case**: This is particularly useful when a user uploads a video and later chooses to generate a summary without needing to re-upload the video.

Related guide: <a href="https://docs.fastpix.io/docs/generate-video-summary">Video summary</a>

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
  const result = await fastpix.inVideoAIFeatures.updateMediaSummary({
    mediaId: "your-media-id",
    generate: true,
    summaryLength: 120,
  });

  console.log(result);
}

run();
```

## updateMediaChapters

This endpoint enables you to generate chapters for an existing media file.

#### How it works
1. Make a `PATCH` request to this endpoint, replacing `<mediaId>` with the ID of the media for which you want to generate chapters.
2. Include the `chapters` parameter in the request body to enable.
3. The response will contain the updated media data, confirming the changes made.

You can use the <a href="https://docs.fastpix.io/docs/ai-events#videomediaaichaptersready">video.mediaAI.chapters.ready</a> webhook event to track and notify about the chapters generation.

**Use case:** This is particularly useful when a user uploads a video and later decides to enable chapters without re-uploading the entire video.

Related guide: <a href="https://docs.fastpix.io/reference/update-media-chapters">Video chapters</a>

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
  const result = await fastpix.inVideoAIFeatures.updateMediaChapters({
    mediaId: "your-media-id",
    chapters: true,
  });

  console.log(result);
}

run();
```

## updateMediaNamedEntities

This endpoint allows you to generate named entities for an existing media.

#### How it works
1. Send a PATCH request to this endpoint, replacing `<mediaId>` with the unique ID of the media for which you wish to generate named entities.
2. Include the `generate` parameter in the request body.
3. The response will include the updated media data and confirmation of the changes applied.

You can use the <a href="https://docs.fastpix.io/docs/ai-events#videomediaainamedentitiesready">video.mediaAI.namedEntities.ready</a> webhook event to track and notify about the named entities generation.

**Use case**: This is particularly useful when a user uploads a video and later chooses to generate named entities without needing to re-upload the video.

Related guide: <a href="https://docs.fastpix.io/docs/generate-named-entities">Named entities</a>

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
  const result = await fastpix.inVideoAIFeatures.updateMediaNamedEntities({
    mediaId: "your-media-id",
    generate: true,
  });

  console.log(result);
}

run();
```

## updateMediaModeration

This endpoint allows you to enable content moderation for an existing media.

#### How it works
1. Send a PATCH request to this endpoint, replacing `<mediaId>` with the unique ID of the media for which you wish to enable moderation.
2. Include the `moderation` parameter in the request body to enable.
3. The response will include the updated media data and confirmation of the changes applied.

You can use the <a href="https://docs.fastpix.io/docs/ai-events#videomediaaimoderationready">video.mediaAI.moderation.ready</a> webhook event to track and notify about the moderation results.

**Use case**: This is particularly useful when a user uploads a video and later chooses to enable content moderation without needing to re-upload the video.

Related guide: <a href="https://docs.fastpix.io/docs/using-nsfw-and-profanity-filter-for-video-moderation">Video moderation</a>

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
  const result = await fastpix.inVideoAIFeatures.updateMediaModeration({
    mediaId: "your-media-id",
    moderation: true,
  });

  console.log(result);
}

run();
```

## AI Features Overview

### What are In-Video AI Features?

In-Video AI Features provide powerful artificial intelligence capabilities to enhance your video content:

- **Video Summarization** - Generate concise summaries of your video content
- **Chapter Generation** - Automatically create chapter markers for better navigation
- **Named Entity Recognition** - Extract important people, places, and organizations mentioned
- **Content Moderation** - Automatically detect and flag inappropriate content

### Use Cases

**Educational Content:**
- Generate summaries for lecture videos
- Create chapter markers for course content
- Extract key topics and entities

**Content Management:**
- Automatically moderate user-uploaded content
- Generate previews and highlights
- Organize content by topics and entities

**Social Media:**
- Create short clips with AI-generated summaries
- Moderate content before publishing
- Generate engaging chapter previews

### Best Practices

1. **Generate summaries** for long-form content to improve discoverability
2. **Enable chapters** for educational and tutorial videos
3. **Use moderation** for user-generated content
4. **Extract entities** for content categorization and search
