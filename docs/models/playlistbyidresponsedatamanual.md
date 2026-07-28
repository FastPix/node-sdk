# PlaylistByIdResponseDataManual

## Example Usage

```typescript
import { PlaylistByIdResponseDataManual } from "@fastpix/fastpix-node/models";

let value: PlaylistByIdResponseDataManual = {
  id: "your-playlist-id",
  name: "playlist1",
  referenceId: "your-reference-id",
  type: "manual",
  description: "This is a manual playlist",
  mediaList: [
    {
      createdAt: new Date("2025-03-21T05:58:38.000708Z"),
      creatorId: "your-creator-id",
      duration: "00:00:10",
      id: "your-media-id",
      sourceResolution: "1080p",
      status: "Ready",
      thumbnail:
        "your-thumbnail-url",
      title: "Media 1",
    },
  ],
  workspaceId: "your-workspace-id",
  createdAt: new Date("2025-05-12T12:55:24.368182Z"),
  updatedAt: new Date("2025-05-27T09:51:03.166094Z"),
  mediaCount: 3,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique id of the playlist                                                                 | your-playlist-id                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the playlist set by the user                                                      | playlist1                                                                                     |
| `referenceId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique string value assigned by user to the playlist.                                         | playlists301                                                                                  |
| `type`                                                                                        | *"manual"*                                                                                    | :heavy_check_mark:                                                                            | type of the playlist, when it was created                                                     | manual                                                                                        |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the playlist set by the user.                                                  | This is a manual playlist                                                                     |
| `mediaList`                                                                                   | [models.PlaylistByIdResponseMediaListItem](../models/playlistbyidresponsemedialistitem.md)[]  | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique id of the workspace in which the playlist is present.                              | your-workspace-id                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of playlist creation.                                                               | 2025-05-12T12:55:24.368182Z                                                                   |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Playlist's most recent update timestamp.                                                      | 2025-05-27T09:51:03.166094Z                                                                   |
| `mediaCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | No. of media present in the playlist                                                          | 3                                                                                             |