# CreateMediaResponse


## Supported Types

### `models.CreateMediaSuccessResponse`

```typescript
const value: models.CreateMediaSuccessResponse = {
  success: true,
  data: {
    id: "your-media-id",
    status: "Created",
    createdAt: new Date("2023-10-20T10:50:34.594302Z"),
    updatedAt: new Date("2023-10-20T10:50:34.594302Z"),
    playbackIds: [
      {
        id: "your-playback-id",
      },
    ],
    metadata: {
      "key1": "value1",
    },
    mediaQuality: "standard",
    sourceAccess: false,
    maxResolution: "1080p",
    inputs: [
      {
        type: "video",
        url: "your-video-url",
      },
    ],
    optimizeAudio: false,
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

