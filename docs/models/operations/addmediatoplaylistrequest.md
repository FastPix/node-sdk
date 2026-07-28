# AddMediaToPlaylistRequest

## Example Usage

```typescript
import { AddMediaToPlaylistRequest } from "@fastpix/fastpix-node/models/operations";

let value: AddMediaToPlaylistRequest = {
  playlistId: "your-playlist-id",
  body: {
    mediaIds: [
    "your-media-id-1",
    "your-media-id-2",
    "your-media-id-3",
  ],
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `playlistId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | The unique id of the playlist you want to perform the operation on. |
| `body`                                                              | [models.MediaIdsRequest](../../models/mediaidsrequest.md)           | :heavy_check_mark:                                                  | N/A                                                                 |