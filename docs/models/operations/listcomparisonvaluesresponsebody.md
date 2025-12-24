# ListComparisonValuesResponseBody

Get filter/ dimension value details by dimension name.

## Example Usage

```typescript
import { ListComparisonValuesResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: ListComparisonValuesResponseBody = {
  success: true,
  data: [
    {
      value: 6,
      type: "number",
      name: "Views",
      metric: "views",
      measurement: "count",
      items: [
        {
          value: 6,
          type: "number",
          name: "Unique Viewers",
          metric: "uniqueViewers",
          measurement: "count",
          items: null,
        },
        {
          value: 503934,
          type: "milliseconds",
          name: "Playing Time",
          metric: "playingTime",
          measurement: "sum",
          items: null,
        },
      ],
    },
  ],
  timespan: [
    1610025789,
    1610025947,
  ],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `success`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Shows the request status. Returns true for success and false for failure.         |                                                                                   |
| `data`                                                                            | [models.MetricsComparisonDetails](../../models/metricscomparisondetails.md)[]     | :heavy_minus_sign:                                                                | Displays the result of the request.<br/>                                          |                                                                                   |
| `timespan`                                                                        | *number*[]                                                                        | :heavy_minus_sign:                                                                | The timespan from and to details displayed in the form of unix epoch timestamps.<br/> | {<br/>"availableValue": [<br/>1610025789,<br/>1610025947<br/>]<br/>}              |