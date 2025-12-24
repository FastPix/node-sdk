# MetricsmetadataDetails

Retrieves breakdown values for a specified metric and timespan

## Example Usage

```typescript
import { MetricsmetadataDetails } from "@fastpix/fastpix-node/models";

let value: MetricsmetadataDetails = {
  aggregation: "viewEnd",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `aggregation`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | defines the field or dimension on which the aggregation is to be   applied. | viewEnd                                                                     |