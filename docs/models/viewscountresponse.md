# ViewsCountResponse

## Example Usage

```typescript
import { ViewsCountResponse } from "@fastpix/fastpix-node/models";

let value: ViewsCountResponse = {
  success: true,
  data: {
    views: 20,
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.ViewsCountResponseData](../models/viewscountresponsedata.md)      | :heavy_minus_sign:                                                        | Contains the view count details.                                          |                                                                           |