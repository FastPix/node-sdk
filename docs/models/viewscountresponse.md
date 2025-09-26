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

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `success`                                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates whether the request was successful or not.                 | true                                                                 |
| `data`                                                               | [models.ViewsCountResponseData](../models/viewscountresponsedata.md) | :heavy_minus_sign:                                                   | Contains the view count details.                                     |                                                                      |