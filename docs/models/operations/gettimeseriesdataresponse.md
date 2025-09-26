# GetTimeseriesDataResponse

Get filter/ dimension value details by dimension name.

## Example Usage

```typescript
import { GetTimeseriesDataResponse } from "@fastpix/fastpix-node/models/operations";

let value: GetTimeseriesDataResponse = {
  success: true,
  metaData: {
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
| `success`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | It demonstrates whether the request is successful or not.                                   |                                                                                             |
| `metaData`                                                                                  | [models.MetricsTimeseriesMetaDataDetails](../../models/metricstimeseriesmetadatadetails.md) | :heavy_minus_sign:                                                                          | Retrieves breakdown values for a specified metric and timespan                              |                                                                                             |
| `data`                                                                                      | [models.MetricsTimeseriesDataDetails](../../models/metricstimeseriesdatadetails.md)[]       | :heavy_minus_sign:                                                                          | Displays the result of the request.                                                         |                                                                                             |
| `timespan`                                                                                  | *number*[]                                                                                  | :heavy_minus_sign:                                                                          | The timeframe from and to details displayed in the form of unix epoch timestamps.<br/>      | {<br/>"availableValue": [<br/>1610025789,<br/>1610025947<br/>]<br/>}                        |