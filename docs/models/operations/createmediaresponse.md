# CreateMediaResponse


## Supported Types

### `models.CreateMediaSuccessResponse`

```typescript
const value: models.CreateMediaSuccessResponse = {
  success: true,
  data: {
    id: "a1d1acdd-8f4e-4add-b498-6b398cf349d9",
    status: "Created",
    createdAt: new Date("2023-10-20T10:50:34.594302Z"),
    updatedAt: new Date("2023-10-20T10:50:34.594302Z"),
    playbackIds: [
      {
        id: "6ta85f64-5717-4562-b3fc-2c963f66afa6",
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
        url: "https://static.fastpix.io/fp-sample-video.mp4",
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

