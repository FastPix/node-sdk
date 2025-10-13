# PlaylistCreatedResponse

Displays the result of the request.

## Example Usage

```typescript
import { PlaylistCreatedResponse } from "@fastpix/fastpix-node/models";

let value: PlaylistCreatedResponse = {
  success: true,
  data: {
    id: "your-playlist-id",
    name: "playist",
    referenceId: "a1",
    type: "smart",
    description: "This is a playlist",
    playOrder: "createdDate ASC",
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
    mediaList: [
      {
        createdAt: new Date("2024-11-12T05:58:38.000708Z"),
        duration: "00:00:10",
        id: "your-media-id-1",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "https://venus-images.fastpix.dev/ff31b32e-4979-4d2b-ad2a-685af43c9902/thumbnail.png",
      },
      {
        createdAt: new Date("2024-12-05T07:23:18.000108Z"),
        duration: "00:00:10",
        id: "your-media-id-2",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "https://mercury-images.fastpix.dev/e49a0d7b-6f2c-4743-84d1-45522cc20ded/thumbnail.png",
      },
      {
        createdAt: new Date("2024-12-05T07:21:15.000508Z"),
        duration: "00:00:10",
        id: "your-media-id-3",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "https://mercury-images.fastpix.dev/e49a0d7b-6f2c-4743-84d1-45522cc20ded/thumbnail.png",
      },
    ],
    workspaceId: "your-workspace-id",
    createdAt: new Date("2025-06-04T13:29:39.409886Z"),
    updatedAt: new Date("2025-06-04T13:29:39.409886Z"),
    mediaCount: 3,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | It demonstrates whether the request is successful or not.          | true                                                               |
| `data`                                                             | [models.PlaylistCreatedSchema](../models/playlistcreatedschema.md) | :heavy_minus_sign:                                                 | Displays the result of the request.                                |                                                                    |