# GetDataViewlistCurrentViewsFilterData

## Example Usage

```typescript
import { GetDataViewlistCurrentViewsFilterData } from "@fastpix/fastpix-node/models/operations";

let value: GetDataViewlistCurrentViewsFilterData = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `concurrentViewers`                                         | *number*                                                    | :heavy_minus_sign:                                          | Number of concurrent viewers for this dimension value.      |
| `dimensionName`                                             | *string*                                                    | :heavy_minus_sign:                                          | Name of the dimension (e.g., country, device type, etc.).   |
| `metricValue`                                               | *number*                                                    | :heavy_minus_sign:                                          | Additional metric value for this dimension (if applicable). |