# UpdateMediaTrackRequest

## Example Usage

```typescript
import { UpdateMediaTrackRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaTrackRequest = {
  trackId: "your-track-id",
  mediaId: "your-media-id",
  body: {},
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `trackId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | The unique identifier assigned to the media when created. The value must be a valid UUID. | your-track-id                                                      |
| `mediaId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | The unique identifier assigned to the media when created. The value must be a valid UUID. | your-media-id                                                      |
| `body`                                                                                    | [models.UpdateTrackRequest](../../models/updatetrackrequest.md)                           | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |