# UpdateMediaTrackResponse


## Supported Types

### `operations.UpdateMediaTrackResponseBody`

```typescript
const value: operations.UpdateMediaTrackResponseBody = {
  success: true,
  data: {
    id: "your-id",
    type: "subtitle",
    url:
      "your-subtitle-url",
    languageCode: "your-language-code",
    languageName: "your-language-name",
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

