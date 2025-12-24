# ListFilterValuesForDimensionResponseBody

Get filter / dimension value details by dimension name.

## Example Usage

```typescript
import { ListFilterValuesForDimensionResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: ListFilterValuesForDimensionResponseBody = {
  success: true,
  data: [
    {
      value: "Chrome",
      uniqueCount: 20,
      count: 44,
    },
  ],
  timespan: [
    1610025789,
    1610025947,
  ],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `success`                                                                           | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Shows the request status. Returns true for success and false for failure.           |                                                                                     |
| `data`                                                                              | [models.BrowserNameDimensiondetails](../../models/browsernamedimensiondetails.md)[] | :heavy_minus_sign:                                                                  | filter values associated with a specific dimension                                  |                                                                                     |
| `timespan`                                                                          | *number*[]                                                                          | :heavy_minus_sign:                                                                  | The timespan from and to details displayed in the form of unix epoch timestamps.<br/> | {<br/>"availableValue": [<br/>1610025789,<br/>1610025947<br/>]<br/>}                |