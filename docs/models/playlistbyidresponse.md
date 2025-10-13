# PlaylistByIdResponse

## Example Usage

```typescript
import { PlaylistByIdResponse } from "@fastpix/fastpix-node/models";

let value: PlaylistByIdResponse = {
  success: true,
  data: {
    id: "your-playlist-id",
    name: "okkokk",
    referenceId: "122q",
    type: "manual",
    description: "This Playlist contains nothing for now",
    mediaList: [
      {
        createdAt: new Date("2025-05-27T09:37:52.445936Z"),
        duration: "00:00:10",
        id: "your-media-id-1",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "https://venus-images.fastpix.dev/bed25609-1887-4c49-91a5-5c6b1edeb1a2/thumbnail.png",
      },
      {
        createdAt: new Date("2025-04-04T13:26:23.507284Z"),
        duration: "00:00:10",
        id: "your-media-id-2",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "https://mercury-images.fastpix.dev/3c6ceeea-d24b-487f-9dd0-5a16148b5d46/thumbnail.png",
      },
      {
        createdAt: new Date("2025-04-04T13:26:12.552840Z"),
        duration: "00:00:10",
        id: "your-media-id-3",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "https://mercury-images.fastpix.dev/8989d0d3-5c5b-41b2-89d5-df6094e6093f/thumbnail.png",
      },
    ],
    workspaceId: "your-workspace-id",
    createdAt: new Date("2025-06-05T09:10:30.655275Z"),
    updatedAt: new Date("2025-06-05T12:23:47.096690Z"),
    mediaCount: 3,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `success`                                                                | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      | true                                                                     |
| `data`                                                                   | [models.PlaylistByIdResponseData](../models/playlistbyidresponsedata.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |