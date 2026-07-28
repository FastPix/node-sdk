# GetMediaClipsRequest

## Example Usage

```typescript
import { GetMediaClipsRequest } from "@fastpix/fastpix-node/models/operations";

let value: GetMediaClipsRequest = {
  mediaId: "your-media-id",
  offset: 5,
  limit: 20,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `mediaId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | The unique identifier assigned to the media when created. The value must be a valid UUID. | your-media-id                                                      |
| `offset`                                                                                  | *number*                                                                                  | :heavy_minus_sign:                                                                        | Offset determines the starting point for data retrieval within a paginated list.          | 5                                                                                         |
| `limit`                                                                                   | *number*                                                                                  | :heavy_minus_sign:                                                                        | The number of media clips to retrieve per request.                                        | 20                                                                                        |
| `orderBy`                                                                                 | [models.SortOrder](../../models/sortorder.md)                                             | :heavy_minus_sign:                                                                        | The values in the list can be arranged in two ways DESC (Descending) or ASC (Ascending).  | desc                                                                                      |