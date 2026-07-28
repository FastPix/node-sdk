# ListVideoViewsResponseBody

Get the list of Views

## Example Usage

```typescript
import { ListVideoViewsResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: ListVideoViewsResponseBody = {
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

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `success`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Shows the request status. Returns true for success and false for failure.         |                                                                                   |
| `data`                                                                            | [models.ViewsList](../../models/viewslist.md)[]                                   | :heavy_minus_sign:                                                                | Displays the result of the request.                                               |                                                                                   |
| `pagination`                                                                      | [models.DataPagination](../../models/datapagination.md)                           | :heavy_minus_sign:                                                                | Pagination organizes content into pages for better readability and navigation.    |                                                                                   |
| `timespan`                                                                        | *number*[]                                                                        | :heavy_minus_sign:                                                                | The timespan from and to details displayed in the form of unix epoch timestamps.<br/> | {<br/>"availableValue": [<br/>1610025789,<br/>1610025947<br/>]<br/>}              |