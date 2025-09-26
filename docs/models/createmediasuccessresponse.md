# CreateMediaSuccessResponse

## Example Usage

```typescript
import { CreateMediaSuccessResponse } from "@fastpix/fastpix-node/models";

let value: CreateMediaSuccessResponse = {
  success: true,
  data: {
    id: "iyuU4HFxhJg1vMHM2uztnJut1hIJBuNBSzJionwUV7c",
    status: "preparing",
    createdAt: new Date("2023-10-20T10:50:34.594302Z"),
    updatedAt: new Date("2023-10-20T10:50:34.594302Z"),
    playbackIds: [
      {
        id: "6ta85f64-5717-4562-b3fc-2c963f66afa6",
      },
    ],
    metadata: {
      "key1": "value1",
    },
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `success`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | Demonstrates whether the request is successful or not.         | true                                                           |
| `data`                                                         | [models.CreateMediaResponse](../models/createmediaresponse.md) | :heavy_check_mark:                                             | N/A                                                            |                                                                |