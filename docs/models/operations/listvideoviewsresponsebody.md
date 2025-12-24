# ListVideoViewsResponseBody

Get the list of Views

## Example Usage

```typescript
import { ListVideoViewsResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: ListVideoViewsResponseBody = {
  success: true,
  data: [
    {
      viewId: "92752c49-1bce-4cf8-bea4-5c2c2ac7575d",
      operatingSystem: "MacOS",
      application: "Chrome",
      viewStartTime: "2024-04-15T04:43:44",
      viewEndTime: "2024-04-15T04:44:05",
      videoTitle:
        "Champion Engagement Model: Best practices for identifying and engaging your champion",
      errorCode: null,
      errorMessage: null,
      country: "IN",
      viewWatchTime: 10016,
      qoeScore: 0.955924359113425,
    },
    {
      viewId: "aa3f20e4-6065-4c7c-aed5-c7f8d127bcba",
      operatingSystem: "MacOS",
      application: "Chrome",
      viewStartTime: "2024-04-15T11:31:48",
      viewEndTime: "2024-04-15T11:32:30",
      videoTitle: "How to reduce time-to-value for your customers",
      errorCode: null,
      errorMessage: null,
      country: "IN",
      viewWatchTime: 31926,
      qoeScore: 0.958520302068513,
    },
    {
      viewId: "d7e6929a-9b7f-4f88-a8eb-033fb9e6dc6d",
      operatingSystem: "MacOS",
      application: "Chrome",
      viewStartTime: "2024-04-15T20:34:42",
      viewEndTime: "2024-04-15T20:35:00",
      videoTitle: "Implementing projects the ISRO way",
      errorCode: null,
      errorMessage: null,
      country: "IN",
      viewWatchTime: 17562,
      qoeScore: 0.958648125844009,
    },
    {
      viewId: "eca6400a-73e9-4250-8d0a-cb1cda15fed4",
      operatingSystem: "MacOS",
      application: "Chrome",
      viewStartTime: "2024-04-15T20:38:48",
      viewEndTime: "2024-04-15T20:39:23",
      videoTitle: "Designing your onboarding and adoption journey",
      errorCode: null,
      errorMessage: null,
      country: "IN",
      viewWatchTime: 34823,
      qoeScore: 0.956301364903515,
    },
    {
      viewId: "687b3a54-6646-4343-bfbe-459742042f54",
      operatingSystem: "MacOS",
      application: "Chrome",
      viewStartTime: "2024-04-16T09:20:34",
      viewEndTime: "2024-04-16T09:21:24",
      videoTitle:
        "How to Approach an Irate Customer With Mimecast\"s Alice Jeffery",
      errorCode: null,
      errorMessage: null,
      country: "IN",
      viewWatchTime: 13493,
      qoeScore: 0.472563044953793,
    },
    {
      viewId: "c1464fdb-f3f8-4ccd-8914-94e1851e8459",
      operatingSystem: "MacOS",
      application: "Chrome",
      viewStartTime: "2024-04-16T09:22:42",
      viewEndTime: "2024-04-16T09:22:45",
      videoTitle:
        "How to Approach an Irate Customer With Mimecast\"s Alice Jeffery",
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