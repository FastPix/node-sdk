# GetSpecificSimulcastOfStreamResponse


## Supported Types

### `models.SimulcastResponse`

```typescript
const value: models.SimulcastResponse = {
  success: true,
  data: {
    simulcastId: "your-simulcast-id",
    url: "your-rtmp-url",
    streamKey: "your-stream-key",
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

