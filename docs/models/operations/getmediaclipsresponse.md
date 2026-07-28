# GetMediaClipsResponse


## Supported Types

### `models.MediaClipResponse`

```typescript
const value: models.MediaClipResponse = {
  success: true,
  data: [
    {
      id: "your-media-id",
      duration: "00:00:13",
      status: "Ready",
      thumbnail:
        "your-thumbnail-url",
      createdAt: new Date("2025-03-12T06:17:26.403017Z"),
      playbackIds: [
        {
          id: "your-playback-id",
          accessPolicy: "public",
        },
      ],
    },
  ],
  pagination: {
    totalRecords: 4,
    currentOffset: 1,
    offsetCount: 4,
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

