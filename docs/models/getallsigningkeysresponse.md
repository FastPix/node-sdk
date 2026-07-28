# GetAllSigningKeysResponse

## Example Usage

```typescript
import { GetAllSigningKeysResponse } from "@fastpix/fastpix-node/models";

let value: GetAllSigningKeysResponse = {
  success: true,
  data: [
    {
      id: "your-signing-key-id",
      createdAt: new Date("2025-10-27T05:22:54.782954Z"),
    },
  ],
  pagination: {
    totalRecords: 1,
    currentOffset: 1,
    offsetCount: 10,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `success`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Shows the request status. Returns true for success and false for failure.          | true                                                                               |
| `data`                                                                             | [models.GetAllSigningKeysResponseDto](../models/getallsigningkeysresponsedto.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `pagination`                                                                       | [models.SigningKeysPagination](../models/signingkeyspagination.md)                 | :heavy_minus_sign:                                                                 | Pagination organizes content into pages for better readability and navigation.     |                                                                                    |