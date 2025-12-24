# ListOverallValuesResponseBody

Get filter/ dimension value details by dimension name.

## Example Usage

```typescript
import { ListOverallValuesResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: ListOverallValuesResponseBody = {
  success: true,
  metadata: {
    aggregation: "view_end",
  },
  data: {
    value: 0.740365072855583,
    totalWatchTime: 59534302,
    uniqueViews: 44,
    totalViews: 195,
    totalPlayTime: 24729470,
    globalValue: 0.740365072855583,
  },
  timespan: [
    1610025789,
    1610025947,
  ],
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `success`                                                                             | *boolean*                                                                             | :heavy_minus_sign:                                                                    | Shows the request status. Returns true for success and false for failure.             |                                                                                       |
| `metadata`                                                                            | [models.MetricsOverallmetadataDetails](../../models/metricsoverallmetadatadetails.md) | :heavy_minus_sign:                                                                    | metadata that has to be paased for metric calculations.                               |                                                                                       |
| `data`                                                                                | [models.MetricsOverallDataDetails](../../models/metricsoveralldatadetails.md)         | :heavy_minus_sign:                                                                    | Retrieves overall values for a specified metric                                       |                                                                                       |
| `timespan`                                                                            | *number*[]                                                                            | :heavy_minus_sign:                                                                    | The timespan from and to details displayed in the form of unix epoch timestamps.<br/> | {<br/>"availableValue": [<br/>1610025789,<br/>1610025947<br/>]<br/>}                  |