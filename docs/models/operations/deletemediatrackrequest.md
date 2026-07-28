# DeleteMediaTrackRequest

## Example Usage

```typescript
import { DeleteMediaTrackRequest } from "@fastpix/fastpix-node/models/operations";

let value: DeleteMediaTrackRequest = {
  mediaId: "your-media-id",
  trackId: "your-track-id",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `mediaId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | The unique identifier assigned to the media when created. The value must be a valid UUID. | your-media-id                                                      |
| `trackId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | The unique identifier assigned to the media when created. The value must be a valid UUID. | your-track-id                                                      |