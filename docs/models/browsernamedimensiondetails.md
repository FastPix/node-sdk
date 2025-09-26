# BrowserNameDimensiondetails

## Example Usage

```typescript
import { BrowserNameDimensiondetails } from "@fastpix/fastpix-node/models";

let value: BrowserNameDimensiondetails = {
  value: "Chrome",
  uniqueCount: 20,
  count: 44,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `value`                                                            | *string*                                                           | :heavy_check_mark:                                                 | The specific metric value calculated based on the applied filters. | Chrome                                                             |
| `uniqueCount`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | The count of unique viewers who interacted with the content.       | 20                                                                 |
| `count`                                                            | *number*                                                           | :heavy_check_mark:                                                 | The count of viewers.                                              | 44                                                                 |