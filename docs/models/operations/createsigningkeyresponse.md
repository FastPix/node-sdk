# CreateSigningKeyResponse


## Supported Types

### `models.CreateResponse`

```typescript
const value: models.CreateResponse = {
  success: true,
  data: {
    id: "your-id",
    privateKey:
      "your-private-key",
    createdAt: new Date("2024-01-11T10:00:06.618993Z"),
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

