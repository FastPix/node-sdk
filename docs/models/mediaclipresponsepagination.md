# MediaClipResponsePagination

## Example Usage

```typescript
import { MediaClipResponsePagination } from "@fastpix/fastpix-node/models";

let value: MediaClipResponsePagination = {
  totalRecords: 4,
  currentOffset: 1,
  offsetCount: 4,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `totalRecords`                                        | *number*                                              | :heavy_minus_sign:                                    | Total number of records available.                    | 4                                                     |
| `currentOffset`                                       | *number*                                              | :heavy_minus_sign:                                    | The starting offset of the current result set.        | 1                                                     |
| `offsetCount`                                         | *number*                                              | :heavy_minus_sign:                                    | The number of items returned in the current response. | 4                                                     |