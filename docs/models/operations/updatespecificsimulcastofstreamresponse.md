# UpdateSpecificSimulcastOfStreamResponse


## Supported Types

### `models.SimulcastUpdateResponse`

```typescript
const value: models.SimulcastUpdateResponse = {
  success: true,
  data: {
    simulcastId: "your-simulcast-id",
    url: "your-rtmp-url",
    streamKey: "your-stream-key",
    isEnabled: false,
    metadata: {
      "simulcast_name": "Tech today",
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

