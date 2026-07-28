# UpdatedSourceAccessResponse


## Supported Types

### `operations.UpdatedSourceAccessResponseBody`

```typescript
const value: operations.UpdatedSourceAccessResponseBody = {
  success: true,
  data: {
    thumbnail:
      "your-thumbnail-url",
    id: "your-media-id",
    workspaceId: "your-workspace-id",
    metadata: {
      "key1": "value1",
    },
    mediaQuality: "standard",
    status: "Ready",
    sourceAccess: true,
    playbackIds: [
      {
        id: "your-playback-id",
        accessPolicy: "public",
        accessRestrictions: {
          domains: {
            defaultPolicy: "allow",
            allow: [],
            deny: [],
          },
          userAgents: {
            defaultPolicy: "allow",
            allow: [],
            deny: [],
          },
        },
      },
    ],
    tracks: [
      {
        id: "your-track-id",
        type: "video",
        width: 1920,
        height: 1080,
        frameRate: "30/1",
        status: "available",
      },
    ],
    generatedSubtitles: [],
    isAudioOnly: false,
    subtitleAvailable: false,
    duration: "00:00:10",
    aspectRatio: "16:9",
    createdAt: new Date("2024-12-06T03:47:26.489888Z"),
    updatedAt: new Date("2024-12-06T03:47:47.593400Z"),
  },
};
```

### `models.DefaultError`

```typescript
const value: models.DefaultError = {
  success: false,
  error: {
    code: NaN,
    message: "Message describing the error",
    description: "Detailed explanation of why the request failed",
  },
};
```

