# ListBreakdownValuesResponseBody

Get filter/ dimension value details by dimension name.

## Example Usage

```typescript
import { ListBreakdownValuesResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: ListBreakdownValuesResponseBody = {
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

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `success`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Shows the request status. Returns true for success and false for failure.         |                                                                                   |
| `metadata`                                                                        | [models.MetricsmetadataDetails](../../models/metricsmetadatadetails.md)           | :heavy_minus_sign:                                                                | Retrieves breakdown values for a specified metric and timespan                    |                                                                                   |
| `data`                                                                            | [models.MetricsBreakdownDetails](../../models/metricsbreakdowndetails.md)[]       | :heavy_minus_sign:                                                                | Retrieves breakdown values for a specified metric and timespan                    |                                                                                   |
| `pagination`                                                                      | [models.DataPagination](../../models/datapagination.md)                           | :heavy_minus_sign:                                                                | Pagination organizes content into pages for better readability and navigation.    |                                                                                   |
| `timespan`                                                                        | *number*[]                                                                        | :heavy_minus_sign:                                                                | The timespan from and to details displayed in the form of unix epoch timestamps.<br/> | {<br/>"availableValue": [<br/>1610025789,<br/>1610025947<br/>]<br/>}              |