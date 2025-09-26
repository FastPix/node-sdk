# LiveStreamPagination

Pagination organizes content into pages for better readability and navigation.

## Example Usage

```typescript
import { LiveStreamPagination } from "@fastpix/fastpix-node/models";

let value: LiveStreamPagination = {
  totalRecords: 12,
  currentOffset: 5,
  offsetCount: 2,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `totalRecords`                                                           | *number*                                                                 | :heavy_minus_sign:                                                       | It gives the total number of media assets that are accessible overall.   | 12                                                                       |
| `currentOffset`                                                          | *number*                                                                 | :heavy_minus_sign:                                                       | Determines the current point for data retrieval within a paginated list. | 5                                                                        |
| `offsetCount`                                                            | *number*                                                                 | :heavy_minus_sign:                                                       | The offset count is expressed as total records by limit.                 | 2                                                                        |