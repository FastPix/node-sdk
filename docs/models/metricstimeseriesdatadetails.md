# MetricsTimeseriesDataDetails

The metrics value at specific time intervals.

## Example Usage

```typescript
import { MetricsTimeseriesDataDetails } from "@fastpix/fastpix-node/models";

let value: MetricsTimeseriesDataDetails = {
  intervalTime: new Date("2023-12-04T14:00:00.000Z"),
  metricValue: 0.793110142151515,
  numberOfViews: 143244,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `intervalTime`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp for the data point indicating when the metric value was recorded.               | 2023-12-04T14:00:00.000Z                                                                      |
| `metricValue`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | The value of the specified metric at the given interval.                                      | 0.793110142151515                                                                             |
| `numberOfViews`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | The total number of views recorded during that interval.                                      | 143244                                                                                        |