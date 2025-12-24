# GetMediaClipsResponse


## Supported Types

### `models.MediaClipResponse`

```typescript
const value: models.MediaClipResponse = {
  success: true,
  data: [
    {
      id: "b62427ec-07fd-4a89-b3c0-94909aaaa1da",
      duration: "00:00:13",
      status: "Ready",
      thumbnail:
        "https://images.fastpix.app/66dc7b0b-9dfb-4721-a738-837f89ccbd0a/thumbnail.png",
      createdAt: new Date("2025-03-12T06:17:26.403017Z"),
      playbackIds: [
        {
          id: "66dc7b0b-9dfb-4721-a738-837f89ccbd0a",
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

