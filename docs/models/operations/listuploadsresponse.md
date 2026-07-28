# ListUploadsResponse


## Supported Types

### `operations.ListUploadsResponseBody`

```typescript
const value: operations.ListUploadsResponseBody = {
  success: true,
  data: [
    {
      uploadId: "your-upload-id",
      trial: true,
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
      },
    },
  ],
  pagination: {
    totalRecords: 100,
    currentOffset: 1,
    offsetCount: 10,
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

