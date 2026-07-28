# CreateResponse

## Example Usage

```typescript
import { CreateResponse } from "@fastpix/fastpix-node/models";

let value: CreateResponse = {
  success: true,
  data: {
    id: "your-id",
    privateKey:
      "your-private-key",
    createdAt: new Date("2024-01-11T10:00:06.618993Z"),
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | Shows the request status. Returns true for success and false for failure.      | true                                                                           |
| `data`                                                                         | [models.CreateSigningKeyResponseDTO](../models/createsigningkeyresponsedto.md) | :heavy_minus_sign:                                                             | Displays the result of the request.                                            |                                                                                |