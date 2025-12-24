# ListPlaybackIdsResponse


## Supported Types

### `operations.ListPlaybackIdsResponseBody`

```typescript
const value: operations.ListPlaybackIdsResponseBody = {
  success: true,
  data: [
    {
      id: "54fd5e7e-3aa5-4817-b56d-44932f67f6c3",
      accessPolicy: "drm",
      accessRestrictions: {
        domains: {
          defaultPolicy: "allow",
          allow: [
            "example.com",
            "trustedsite.org",
          ],
          deny: [
            "malicioussite.io",
            "abc.net",
          ],
        },
        userAgents: {
          defaultPolicy: "deny",
          allow: [
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
          ],
          deny: [
            "PostmanRuntime/7.29.0",
          ],
        },
      },
    },
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

