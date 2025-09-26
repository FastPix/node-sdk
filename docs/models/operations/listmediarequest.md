# ListMediaRequest

## Example Usage

```typescript
import { ListMediaRequest } from "@fastpix/fastpix-node/models/operations";

let value: ListMediaRequest = {
  limit: 20,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `limit`                                                                                   | *number*                                                                                  | :heavy_minus_sign:                                                                        | Limit specifies the maximum number of items to display per page.                          | 20                                                                                        |
| `offset`                                                                                  | *number*                                                                                  | :heavy_minus_sign:                                                                        | Offset determines the starting point for data retrieval within a paginated list.          | 1                                                                                         |
| `orderBy`                                                                                 | [models.SortOrder](../../models/sortorder.md)                                             | :heavy_minus_sign:                                                                        | The values in the list can be arranged in two ways: DESC (Descending) or ASC (Ascending). | desc                                                                                      |