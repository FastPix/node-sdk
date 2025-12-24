# ListSigningKeysResponse


## Supported Types

### `models.GetAllSigningKeysResponse`

```typescript
const value: models.GetAllSigningKeysResponse = {
  success: true,
  data: [
    {
      id: "84474705-92d5-4fa9-8cb8-e4a0ddb0598a",
      createdAt: new Date("2025-10-27T05:22:54.782954Z"),
    },
  ],
  pagination: {
    totalRecords: 1,
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

