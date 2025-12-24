# RetrieveMediaInputInfoResponse


## Supported Types

### `operations.RetrieveMediaInputInfoResponseBody`

```typescript
const value: operations.RetrieveMediaInputInfoResponseBody = {
  success: true,
  data: {
    configuration: {
      url: "https://static.fastpix.io/fp-sample-video.mp4",
    },
    file: {
      containerFormat: "mp4",
      tracks: [
        {
          id: "6eb56a83-9a8b-47a5-94b2-cadb4458cf4d",
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

