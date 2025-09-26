# PlaylistByIdResponse

## Example Usage

```typescript
import { PlaylistByIdResponse } from "@fastpix/fastpix-node/models";

let value: PlaylistByIdResponse = {
  success: true,
  data: {
    id: "46d5fce1-683a-457f-86d7-c048bb429505",
    name: "okkokk",
    referenceId: "122q",
    type: "manual",
    description: "This Playlist contains nothing for now",
    mediaList: [
      {
        createdAt: new Date("2025-05-27T09:37:52.445936Z"),
        duration: "00:00:10",
        id: "a1cd180e-f9b5-4e99-9d44-b9c9baabad89",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "https://venus-images.fastpix.dev/bed25609-1887-4c49-91a5-5c6b1edeb1a2/thumbnail.png",
      },
      {
        createdAt: new Date("2025-04-04T13:26:23.507284Z"),
        duration: "00:00:10",
        id: "245800c3-7b73-47d9-a201-e961260dcb30",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "https://mercury-images.fastpix.dev/3c6ceeea-d24b-487f-9dd0-5a16148b5d46/thumbnail.png",
      },
      {
        createdAt: new Date("2025-04-04T13:26:12.552840Z"),
        duration: "00:00:10",
        id: "41316aac-5396-4278-8f44-08d5f2495b12",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "https://mercury-images.fastpix.dev/8989d0d3-5c5b-41b2-89d5-df6094e6093f/thumbnail.png",
      },
    ],
    workspaceId: "d760b903-86ef-44d6-9b73-334130e0cf2d",
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