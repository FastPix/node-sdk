# ListBreakdownValuesResponse


## Supported Types

### `operations.ListBreakdownValuesResponseBody`

```typescript
const value: operations.ListBreakdownValuesResponseBody = {
  success: true,
  metadata: {
    aggregation: "view_end",
  },
  data: [
    {
      views: 3,
      value: 30,
      totalWatchTime: 83208,
      totalPlayingTime: 57165,
      field: "PostmanRuntime",
    },
    {
      views: 24,
      value: 28,
      totalWatchTime: 913048,
      totalPlayingTime: 2624467,
      field: "Chrome",
    },
  ],
  pagination: {
    totalRecords: 2,
    currentOffset: 1,
    offsetCount: 1,
  },
  timespan: [
    1712915263,
    1713520063,
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

