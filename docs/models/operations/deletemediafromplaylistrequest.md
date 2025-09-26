# DeleteMediaFromPlaylistRequest

## Example Usage

```typescript
import { DeleteMediaFromPlaylistRequest } from "@fastpix/fastpix-node/models/operations";

let value: DeleteMediaFromPlaylistRequest = {
  playlistId: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `playlistId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | The unique id of the playlist you want to perform the operation on. |
| `mediaIdsRequest`                                                   | [models.MediaIdsRequest](../../models/mediaidsrequest.md)           | :heavy_minus_sign:                                                  | N/A                                                                 |