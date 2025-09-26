# PlaylistByIdResponseData

## Example Usage

```typescript
import { PlaylistByIdResponseData } from "@fastpix/fastpix-node/models";

let value: PlaylistByIdResponseData = {
  id: "2455174e-64d9-4324-86bd-80cb1af5b20a",
  name: "playlist1",
  referenceId: "a111dfdfdafsdfe",
  type: "smart",
  description: "This is a manual playlist",
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
  createdAt: new Date("2025-05-12T12:55:24.368182Z"),
  updatedAt: new Date("2025-05-27T09:51:03.166094Z"),
  mediaCount: 3,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique id of the playlist                                                                 | 2455174e-64d9-4324-86bd-80cb1af5b20a                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the playlist set by the user                                                      | playlist1                                                                                     |
| `referenceId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique string value assigned by user to the playlist.                                         | a111dfdfdafsdfe                                                                               |
| `type`                                                                                        | [models.PlaylistByIdResponseType](../models/playlistbyidresponsetype.md)                      | :heavy_minus_sign:                                                                            | type of the playlist, when it was created                                                     | smart                                                                                         |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the playlist set by the user.                                                  | This is a manual playlist                                                                     |
| `mediaList`                                                                                   | [models.PlaylistByIdResponseMediaList](../models/playlistbyidresponsemedialist.md)[]          | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique id of the workspace in which the playlist is present.                              | d760b903-86ef-44d6-9b73-334130e0cf2d                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of playlist creation.                                                               | 2025-05-12T12:55:24.368182Z                                                                   |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Playlist's most recent update timestamp.                                                      | 2025-05-27T09:51:03.166094Z                                                                   |
| `mediaCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | No. of media present in the playlist                                                          | 3                                                                                             |