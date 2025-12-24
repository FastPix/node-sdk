# ListComparisonValuesResponse


## Supported Types

### `operations.ListComparisonValuesResponseBody`

```typescript
const value: operations.ListComparisonValuesResponseBody = {
  success: true,
  data: [
    {
      value: 6,
      type: "number",
      name: "Views",
      metric: "views",
      measurement: "count",
      items: [
        {
          value: 6,
          type: "number",
          name: "Unique Viewers",
          metric: "uniqueViewers",
          measurement: "count",
          items: null,
        },
        {
          value: 503934,
          type: "milliseconds",
          name: "Playing Time",
          metric: "playingTime",
          measurement: "sum",
          items: null,
        },
      ],
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

