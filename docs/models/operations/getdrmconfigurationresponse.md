# GetDrmConfigurationResponse


## Supported Types

### `operations.GetDrmConfigurationResponseBody`

```typescript
const value: operations.GetDrmConfigurationResponseBody = {
  success: true,
  data: [
    {
      id: "e3dfdf15-16bb-4835-98b9-484c1e4320cc",
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

