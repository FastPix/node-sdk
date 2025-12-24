# UpdatedSourceAccessResponse


## Supported Types

### `operations.UpdatedSourceAccessResponseBody`

```typescript
const value: operations.UpdatedSourceAccessResponseBody = {
  success: true,
  data: {
    thumbnail:
      "https://venus-images.fastpix.dev/cf41c9f7-ece3-4efe-8d31-c6e000dc422b/thumbnail.png",
    id: "eb56a668-0354-40c2-9233-f3197e1baabd",
    workspaceId: "c788be40-91a5-4d2d-abf7-47398a6276a1",
    metadata: {
      "key1": "value1",
    },
    mediaQuality: "standard",
    status: "Ready",
    sourceAccess: true,
    playbackIds: [
      {
        id: "cf41c9f7-ece3-4efe-8d31-c6e000dc422b",
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
        id: "344fd5bc-82af-4d11-bc1c-785d9e6f9aef",
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

