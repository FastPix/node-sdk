# ListVideoViewsResponse


## Supported Types

### `operations.ListVideoViewsResponseBody`

```typescript
const value: operations.ListVideoViewsResponseBody = {
  success: true,
  data: [
    {
      viewId: "your-view-id",
      operatingSystem: "MacOS",
      application: "Chrome",
      viewStartTime: "2024-04-15T04:43:44",
      viewEndTime: "2024-04-15T04:44:05",
      videoTitle:
        "your-video-title",
      errorCode: null,
      errorMessage: null,
      country: "IN",
      viewWatchTime: 10016,
      qoeScore: 0.955924359113425,
    },
    {
      viewId: "your-view-id",
      operatingSystem: "MacOS",
      application: "Chrome",
      viewStartTime: "2024-04-15T11:31:48",
      viewEndTime: "2024-04-15T11:32:30",
      videoTitle: "your-video-title",
      errorCode: null,
      errorMessage: null,
      country: "IN",
      viewWatchTime: 31926,
      qoeScore: 0.958520302068513,
    },
    {
      viewId: "your-view-id",
      operatingSystem: "MacOS",
      application: "Chrome",
      viewStartTime: "2024-04-15T20:34:42",
      viewEndTime: "2024-04-15T20:35:00",
      videoTitle: "your-video-title",
      errorCode: null,
      errorMessage: null,
      country: "IN",
      viewWatchTime: 17562,
      qoeScore: 0.958648125844009,
    },
    {
      viewId: "your-view-id",
      operatingSystem: "MacOS",
      application: "Chrome",
      viewStartTime: "2024-04-15T20:38:48",
      viewEndTime: "2024-04-15T20:39:23",
      videoTitle: "your-video-title",
      errorCode: null,
      errorMessage: null,
      country: "IN",
      viewWatchTime: 34823,
      qoeScore: 0.956301364903515,
    },
    {
      viewId: "your-view-id",
      operatingSystem: "MacOS",
      application: "Chrome",
      viewStartTime: "2024-04-16T09:20:34",
      viewEndTime: "2024-04-16T09:21:24",
      videoTitle:
        "your-video-title"s Alice Jeffery",
      errorCode: null,
      errorMessage: null,
      country: "IN",
      viewWatchTime: 13493,
      qoeScore: 0.472563044953793,
    },
    {
      viewId: "your-view-id",
      operatingSystem: "MacOS",
      application: "Chrome",
      viewStartTime: "2024-04-16T09:22:42",
      viewEndTime: "2024-04-16T09:22:45",
      videoTitle:
        "your-video-title"s Alice Jeffery",
      errorCode: null,
      errorMessage: null,
      country: "IN",
      viewWatchTime: 1,
      qoeScore: 0.5,
    },
  ],
  pagination: {
    totalRecords: 27,
    currentOffset: 1,
    offsetCount: 3,
  },
  timespan: [
    1712910924,
    1713515724,
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

