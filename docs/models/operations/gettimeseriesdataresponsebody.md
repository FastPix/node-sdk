# GetTimeseriesDataResponseBody

Get filter/ dimension value details by dimension name.

## Example Usage

```typescript
import { GetTimeseriesDataResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: GetTimeseriesDataResponseBody = {
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

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `success`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Shows the request status. Returns true for success and false for failure.                   |                                                                                             |
| `metadata`                                                                                  | [models.MetricsTimeseriesmetadataDetails](../../models/metricstimeseriesmetadatadetails.md) | :heavy_minus_sign:                                                                          | Retrieves breakdown values for a specified metric and timespan                              |                                                                                             |
| `data`                                                                                      | [models.MetricsTimeseriesDataDetails](../../models/metricstimeseriesdatadetails.md)[]       | :heavy_minus_sign:                                                                          | Displays the result of the request.                                                         |                                                                                             |
| `timespan`                                                                                  | *number*[]                                                                                  | :heavy_minus_sign:                                                                          | The timespan from and to details displayed in the form of unix epoch timestamps.<br/>       | {<br/>"availableValue": [<br/>1610025789,<br/>1610025947<br/>]<br/>}                        |