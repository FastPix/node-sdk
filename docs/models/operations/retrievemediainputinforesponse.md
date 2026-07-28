# RetrieveMediaInputInfoResponse


## Supported Types

### `operations.RetrieveMediaInputInfoResponseBody`

```typescript
const value: operations.RetrieveMediaInputInfoResponseBody = {
  success: true,
  data: {
    configuration: {
      url: "your-video-url",
    },
    file: {
      containerFormat: "mp4",
      tracks: [
        {
          id: "your-track-id",
          type: "video",
          width: 1280,
          height: 720,
          frameRate: "30/1",
          status: "available",
        },
      ],
    },
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

