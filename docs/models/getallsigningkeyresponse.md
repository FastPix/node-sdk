# GetAllSigningKeyResponse

## Example Usage

```typescript
import { GetAllSigningKeyResponse } from "@fastpix/fastpix-node/models";

let value: GetAllSigningKeyResponse = {
  success: true,
  data: [
    {
      id: "fc9d9368-6ee5-4b16-ae50-880a2374bdc4",
      createdAt: new Date("2024-01-11T10:00:06.618993Z"),
      workspace: [
        {
          id: "6fa85f64-5717-4562-b3fc-2c963f66ag5t",
          name: "environment1",
          workspaceType: "production",
        },
      ],
      pagination: {
        totalRecords: 100,
        currentOffset: 1,
        offsetCount: 10,
      },
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `success`                                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | It demonstrates whether the request is successful or not.                        | 100                                                                              |
| `data`                                                                           | [models.GetAllSigningKeyResponseDTO](../models/getallsigningkeyresponsedto.md)[] | :heavy_minus_sign:                                                               | Displays the result of the request.                                              |                                                                                  |