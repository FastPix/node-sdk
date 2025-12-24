# GetTimeseriesDataResponse


## Supported Types

### `operations.GetTimeseriesDataResponseBody`

```typescript
const value: operations.GetTimeseriesDataResponseBody = {
  success: true,
  metadata: {
    granularity: "day",
    aggregation: "view_end",
  },
  data: [
    {
      intervalTime: new Date("2023-12-04T14:00:00Z"),
      metricValue: 0.793110142151515,
      numberOfViews: 143244,
    },
  ],
  timespan: [
    1610025789,
    1610025947,
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

