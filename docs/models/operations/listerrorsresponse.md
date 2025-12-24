# ListErrorsResponse


## Supported Types

### `operations.ListErrorsResponseBody`

```typescript
const value: operations.ListErrorsResponseBody = {
  success: true,
  data: {
    errors: [
      {
        percentage: 0.0222222222222222,
        notes: "An informative note on specific error",
        message:
          "com.fastpix.stats.sdk.h71.a - android.media.mediadrm$mediadrmstateexception: failed to handle key response: drm vendor-defined error: -2998",
        lastSeen: "2023-12-01T11:31:07Z",
        id: "9pa85f64-5717-4562-b3fc-2c963f66afa6",
        description: "a description for the specific error",
        count: 4,
        code: "1003",
      },
    ],
    topErrors: [
      {
        percentage: 0.0222222222222222,
        uniqueViewersEffectedPercentage: 0.0122222222222222,
        notes: "An informative note for a specific error",
        message:
          "com.fastpix.stats.sdk.h71.a - android.media.mediadrm$mediadrmstateexception: failed to handle key response: drm vendor-defined error: -2998",
        lastSeen: "2023-12-01T11:31:07Z",
        count: 4,
        code: "1003",
      },
    ],
  },
  timespan: [
    1610025789,
    1610025947,
  ],
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

