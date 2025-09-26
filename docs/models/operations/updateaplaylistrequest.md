# UpdateAPlaylistRequest

## Example Usage

```typescript
import { UpdateAPlaylistRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateAPlaylistRequest = {
  playlistId: "<id>",
  updatePlaylistRequest: {
    name: "updated name",
    description: "updated description",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `playlistId`                                                          | *string*                                                              | :heavy_check_mark:                                                    | The unique id of the playlist you want to retrieve.                   |                                                                       |
| `updatePlaylistRequest`                                               | [models.UpdatePlaylistRequest](../../models/updateplaylistrequest.md) | :heavy_check_mark:                                                    | N/A                                                                   | {<br/>"name": "updated name",<br/>"description": "updated description"<br/>} |