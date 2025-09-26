# MetricsBreakdownDetails

## Example Usage

```typescript
import { MetricsBreakdownDetails } from "@fastpix/fastpix-node/models";

let value: MetricsBreakdownDetails = {
  views: 17,
  value: 0.868748761512138,
  totalWatchTime: 218599,
  totalPlayingTime: 218599,
  field: "Chrome",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `views`                                                                           | *number*                                                                          | :heavy_minus_sign:                                                                | Total count of view sessions for a paricular video content.                       | 17                                                                                |
| `value`                                                                           | *models.MetricsBreakdownDetailsValue*                                             | :heavy_check_mark:                                                                | The specific metric value calculated based on the applied filters.                | 0.868748761512138                                                                 |
| `totalWatchTime`                                                                  | *number*                                                                          | :heavy_minus_sign:                                                                | Total time watched across all views, represented in milliseconds.                 | 218599                                                                            |
| `totalPlayingTime`                                                                | *number*                                                                          | :heavy_minus_sign:                                                                | Total time spent playing the video, represented in milliseconds.                  | 218599                                                                            |
| `field`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | the value of dimension or filter value on which the aggregation is to be applied. | Chrome                                                                            |