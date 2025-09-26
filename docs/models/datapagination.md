# DataPagination

Pagination organizes content into pages for better readability and navigation.

## Example Usage

```typescript
import { DataPagination } from "@fastpix/fastpix-node/models";

let value: DataPagination = {
  totalRecords: 2,
  currentOffset: 1,
  offsetCount: 1,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `totalRecords`                                               | *number*                                                     | :heavy_minus_sign:                                           | The total number of records retrieved within the timeframe.<br/> | 2                                                            |
| `currentOffset`                                              | *number*                                                     | :heavy_minus_sign:                                           | The current offset value. <br/><br/>Default: 1<br/>          | 1                                                            |
| `offsetCount`                                                | *number*                                                     | :heavy_minus_sign:                                           | The total number of offsets based on limit.<br/>             | 1                                                            |