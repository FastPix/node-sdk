# ListBreakdownValuesResponse

Get filter/ dimension value details by dimension name.

## Example Usage

```typescript
import { ListBreakdownValuesResponse } from "@fastpix/fastpix-node/models/operations";

let value: ListBreakdownValuesResponse = {
  success: true,
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
  timespan: [
    1712915263,
    1713520063,
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `success`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | It demonstrates whether the request is successful or not.                                   |                                                                                             |
| `metaData`                                                                                  | [models.MetricsTimeseriesMetaDataDetails](../../models/metricstimeseriesmetadatadetails.md) | :heavy_minus_sign:                                                                          | Retrieves breakdown values for a specified metric and timespan                              |                                                                                             |
| `data`                                                                                      | [models.MetricsBreakdownDetails](../../models/metricsbreakdowndetails.md)[]                 | :heavy_minus_sign:                                                                          | Retrieves breakdown values for a specified metric and timespan                              |                                                                                             |
| `timespan`                                                                                  | *number*[]                                                                                  | :heavy_minus_sign:                                                                          | The timeframe from and to details displayed in the form of unix epoch timestamps.<br/>      | {<br/>"availableValue": [<br/>1610025789,<br/>1610025947<br/>]<br/>}                        |