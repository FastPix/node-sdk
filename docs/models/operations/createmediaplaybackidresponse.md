# CreateMediaPlaybackIdResponse


## Supported Types

### `operations.CreateMediaPlaybackIdResponseBody`

```typescript
const value: operations.CreateMediaPlaybackIdResponseBody = {
  success: true,
  data: {
    id: "b331e0d8-bef4-4ad2-8760-757fdb2818b7",
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
    resolution: "1080p",
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

