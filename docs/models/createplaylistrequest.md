# CreatePlaylistRequest

## Example Usage

```typescript
import { CreatePlaylistRequest } from "@fastpix/fastpix-node/models";

let value: CreatePlaylistRequest = {
  name: "playlist name",
  referenceId: "a1",
  type: "smart",
  description: "This is a playlist",
  playOrder: "createdDate ASC",
  limit: 20,
  metadata: {
    createdDate: {
      startDate: "2024-11-11",
      endDate: "2024-12-12",
    },
    updatedDate: {
      startDate: "2024-11-11",
      endDate: "2024-12-12",
    },
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                           | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Name of the playlist.                                                                                                                            |
| `referenceId`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Unique string value assigned by user to the playlist.                                                                                            |
| `type`                                                                                                                                           | [models.CreatePlaylistRequestType](../models/createplaylistrequesttype.md)                                                                       | :heavy_check_mark:                                                                                                                               | For a smart playlist metadata is required.                                                                                                       |
| `description`                                                                                                                                    | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Description for a playlist (Optional).                                                                                                           |
| `playOrder`                                                                                                                                      | [models.PlaylistOrder](../models/playlistorder.md)                                                                                               | :heavy_minus_sign:                                                                                                                               | Determines the insertion order of media into playlist.                                                                                           |
| `limit`                                                                                                                                          | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Optional parameter to limit no. of media in a playlist.                                                                                          |
| `metadata`                                                                                                                                       | [models.CreatePlaylistRequestMetadata](../models/createplaylistrequestmetadata.md)                                                               | :heavy_minus_sign:                                                                                                                               | Required when playlist type is smart - media created between startDate and endDate of createdDate will be add, similarily updatedDate (Optional) |