# GetSpecificSimulcastOfStreamResponse


## Supported Types

### `models.SimulcastResponse`

```typescript
const value: models.SimulcastResponse = {
  success: true,
  data: {
    simulcastId: "8717422d89288ad5958d4a86e9afe2a2",
    url: "rtmp://hyd01.contribute.live-video.net/app/",
    streamKey: "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
    isEnabled: true,
    metadata: {
      "livestream_name": "Tech-Connect Summit",
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

