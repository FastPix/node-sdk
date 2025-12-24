# SigningKeysPagination

Pagination organizes content into pages for better readability and navigation.

## Example Usage

```typescript
import { SigningKeysPagination } from "@fastpix/fastpix-node/models";

let value: SigningKeysPagination = {
  totalRecords: 1,
  currentOffset: 1,
  offsetCount: 10,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `totalRecords`                                                                  | *number*                                                                        | :heavy_minus_sign:                                                              | It gives the total number of Signing keys that are created by a user.           | 1                                                                               |
| `currentOffset`                                                                 | *number*                                                                        | :heavy_minus_sign:                                                              | Offset determines the current point for data retrieval within a paginated list. | 1                                                                               |
| `offsetCount`                                                                   | *number*                                                                        | :heavy_minus_sign:                                                              | The offset count is expressed as total records by limit                         | 10                                                                              |