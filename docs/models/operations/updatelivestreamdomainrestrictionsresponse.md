# UpdateLiveStreamDomainRestrictionsResponse


## Supported Types

### `operations.UpdateLiveStreamDomainRestrictionsResponseBody`

```typescript
const value: operations.UpdateLiveStreamDomainRestrictionsResponseBody = {
  success: true,
  data: {
    defaultPolicy: "allow",
    allow: [
      "yourdomain.com",
      "yourworkdomain.com",
    ],
    deny: [
      "sampledomain.com",
    ],
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

