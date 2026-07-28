# DirectUploadVideoMediaResponse


## Supported Types

### `operations.DirectUploadVideoMediaResponseBody`

```typescript
const value: operations.DirectUploadVideoMediaResponseBody = {
  success: true,
  data: {
    uploadId: "your-upload-id",
    trial: false,
    status: "waiting",
    url:
      "your-upload-url",
    corsOrigin: "*",
    pushMediaSettings: {
      playbackIds: [
        {
          accessPolicy: "public",
          accessRestrictions: {
            domains: {
              defaultPolicy: "allow",
              allow: [],
              deny: [],
            },
            userAgents: {
              defaultPolicy: "allow",
              allow: [],
              deny: [],
            },
          },
        },
      ],
      metadata: {
        "key1": "value1",
      },
      mediaQuality: "standard",
      sourceAccess: false,
      optimizeAudio: false,
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

