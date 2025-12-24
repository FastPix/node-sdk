# DeleteMediaFromPlaylistRequest

## Example Usage

```typescript
import { DeleteMediaFromPlaylistRequest } from "@fastpix/fastpix-node/models/operations";

let value: DeleteMediaFromPlaylistRequest = {
  playlistId: "your-playlist-id",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `playlistId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | The unique id of the playlist you want to perform the operation on. |
| `body`                                                              | [models.MediaIdsRequest](../../models/mediaidsrequest.md)           | :heavy_minus_sign:                                                  | N/A                                                                 |