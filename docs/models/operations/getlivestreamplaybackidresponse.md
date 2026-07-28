# GetLiveStreamPlaybackIdResponse


## Supported Types

### `models.PlaybackIdSuccessResponse`

```typescript
const value: models.PlaybackIdSuccessResponse = {
  success: true,
  data: {
    id: "your-id",
    accessPolicy: "public",
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

