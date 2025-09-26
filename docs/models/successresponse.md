# SuccessResponse

## Example Usage

```typescript
import { SuccessResponse } from "@fastpix/fastpix-node/models";

let value: SuccessResponse = {
  success: true,
  data: [
    {},
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `success`                                                        | *boolean*                                                        | :heavy_check_mark:                                               | Demonstrates whether the request is successful or not.           |
| `data`                                                           | [models.SuccessResponseData](../models/successresponsedata.md)[] | :heavy_check_mark:                                               | Array of response data                                           |