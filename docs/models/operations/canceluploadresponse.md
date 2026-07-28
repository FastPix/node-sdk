# CancelUploadResponse


## Supported Types

### `operations.CancelUploadResponseBody`

```typescript
const value: operations.CancelUploadResponseBody = {
  success: true,
  data: {
    uploadId: "your-upload-id",
    trial: false,
    status: "cancelled",
    url:
      "your-upload-url",
    timeout: 14400,
    corsOrigin: "*",
    maxResolution: "1080p",
    accessPolicy: "public",
    metadata: {
      "key1": "value1",
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

