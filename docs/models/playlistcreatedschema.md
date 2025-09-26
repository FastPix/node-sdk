# PlaylistCreatedSchema

Displays the result of the request.

## Example Usage

```typescript
import { PlaylistCreatedSchema } from "@fastpix/fastpix-node/models";

let value: PlaylistCreatedSchema = {
  id: "e3dfdf15-16bb-4835-98b9-484c1e4320cc",
  mediaList: [
    {
      createdAt: new Date("2025-03-21T05:58:38.000708Z"),
      duration: "00:00:10",
      id: "942e0ced-146b-487e-988f-6de578de1000",
      sourceResolution: "1080p",
      status: "Ready",
      thumbnail:
        "https://venus-images.fastpix.dev/ff31b32e-4979-4d2b-ad2a-685af43c9902/thumbnail.png",
    },
  ],
  workspaceId: "d760b903-86ef-44d6-9b73-334130e0cf2d",
  createdAt: new Date("2025-06-04T13:29:39.409886Z"),
  updatedAt: new Date("2025-06-04T13:29:39.409886Z"),
  mediaCount: 3,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Upon creating a new play,ist, FastPix assigns a unique identifier to the playlist.            | e3dfdf15-16bb-4835-98b9-484c1e4320cc                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name to the playlist set by the user.                                                     |                                                                                               |
| `referenceId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique string value assigned by user to the playlist.                                         |                                                                                               |
| `type`                                                                                        | [models.PlaylistCreatedSchemaType](../models/playlistcreatedschematype.md)                    | :heavy_minus_sign:                                                                            | Type will be either smart or manual, as sent in the request body.                             |                                                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description to the playlist set by the user.                                              |                                                                                               |
| `playOrder`                                                                                   | [models.PlaylistOrder](../models/playlistorder.md)                                            | :heavy_minus_sign:                                                                            | Determines the insertion order of media into playlist.                                        |                                                                                               |
| `metadata`                                                                                    | [models.PlaylistCreatedSchemaMetadata](../models/playlistcreatedschemametadata.md)            | :heavy_minus_sign:                                                                            | date range filter used when creating the smart playlist                                       |                                                                                               |
| `mediaList`                                                                                   | [models.PlaylistCreatedSchemaMediaList](../models/playlistcreatedschemamedialist.md)[]        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Id of the workspace                                                                           | d760b903-86ef-44d6-9b73-334130e0cf2d                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of playlist creation.                                                               | 2025-06-04T13:29:39.409886Z                                                                   |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Playlist's most recent update timestamp.                                                      | 2025-06-04T13:29:39.409886Z                                                                   |
| `mediaCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | No. of media present in the playlist                                                          | 3                                                                                             |