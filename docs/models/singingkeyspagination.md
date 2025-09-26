# SingingKeysPagination

Pagination organizes content into pages for better readability and navigation.

## Example Usage

```typescript
import { SingingKeysPagination } from "@fastpix/fastpix-node/models";

let value: SingingKeysPagination = {
  totalRecords: 100,
  currentOffset: 1,
  offsetCount: 10,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `totalRecords`                                                            | *number*                                                                  | :heavy_minus_sign:                                                        | It gives the total number of media assets that are accessible overall.    | 100                                                                       |
| `currentOffset`                                                           | *number*                                                                  | :heavy_minus_sign:                                                        | Determines the current point for data retrieval within a paginated list.  | 1                                                                         |
| `offsetCount`                                                             | *number*                                                                  | :heavy_minus_sign:                                                        | The offset count is expressed as total records by limit.                  | 10                                                                        |