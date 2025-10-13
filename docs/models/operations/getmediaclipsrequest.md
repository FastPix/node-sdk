# GetMediaClipsRequest

## Example Usage

```typescript
import { GetMediaClipsRequest } from "@fastpix/fastpix-node/models/operations";

let value: GetMediaClipsRequest = {
  sourceMediaId: "your-source-media-id",
  offset: 5,
  limit: 20,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `sourceMediaId`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | The unique identifier of the source media.                                               | fc733e3f-2fba-4c3d-9388-2511dc50d15f                                                     |
| `offset`                                                                                 | *number*                                                                                 | :heavy_minus_sign:                                                                       | Offset determines the starting point for data retrieval within a paginated list.         | 5                                                                                        |
| `limit`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | The number of media clips to retrieve per request.                                       | 20                                                                                       |
| `orderBy`                                                                                | [models.SortOrder](../../models/sortorder.md)                                            | :heavy_minus_sign:                                                                       | The values in the list can be arranged in two ways DESC (Descending) or ASC (Ascending). | desc                                                                                     |