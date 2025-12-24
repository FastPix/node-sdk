# MetricsTimeseriesmetadataDetails

Retrieves breakdown values for a specified metric and timespan

## Example Usage

```typescript
import { MetricsTimeseriesmetadataDetails } from "@fastpix/fastpix-node/models";

let value: MetricsTimeseriesmetadataDetails = {
  granularity: "day",
  aggregation: "viewEnd",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `granularity`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | the unit for aggregating the timeseries data.                               | day                                                                         |
| `aggregation`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | defines the field or dimension on which the aggregation is to be   applied. | viewEnd                                                                     |