# ChangeMediaOrderInPlaylistRequest

## Example Usage

```typescript
import { ChangeMediaOrderInPlaylistRequest } from "@fastpix/fastpix-node/models/operations";

let value: ChangeMediaOrderInPlaylistRequest = {
  playlistId: "your-playlist-id",
  body: {
    mediaIds: [
      "a1cd180e-f9b5-4e99-9d44-b9c9baabad89",
      "245800c3-7b73-47d9-a201-e961260dcb30",
      "41316aac-5396-4278-8f44-08d5f2495b12",
    ],
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `playlistId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | The unique id of the playlist you want to perform the operation on. |
| `body`                                                              | [models.MediaIdsRequest](../../models/mediaidsrequest.md)           | :heavy_check_mark:                                                  | N/A                                                                 |