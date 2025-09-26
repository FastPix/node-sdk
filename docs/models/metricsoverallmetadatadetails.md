# MetricsOverallMetaDataDetails

Metadata that has to be paased for metric calculations.

## Example Usage

```typescript
import { MetricsOverallMetaDataDetails } from "@fastpix/fastpix-node/models";

let value: MetricsOverallMetaDataDetails = {
  aggregation: "viewEnd",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `aggregation`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | defines the field or dimension on which the aggregation is to be   applied. | viewEnd                                                                     |