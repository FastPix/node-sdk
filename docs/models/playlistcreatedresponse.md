# PlaylistCreatedResponse

Displays the result of the request.

## Example Usage

```typescript
import { PlaylistCreatedResponse } from "@fastpix/fastpix-node/models";

let value: PlaylistCreatedResponse = {
  success: true,
  data: {
    id: "e3dfdf15-16bb-4835-98b9-484c1e4320cc",
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
        id: "942e0ced-146b-487e-988f-6de578de1000",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "https://venus-images.fastpix.dev/ff31b32e-4979-4d2b-ad2a-685af43c9902/thumbnail.png",
      },
      {
        createdAt: new Date("2024-12-05T07:23:18.000108Z"),
        duration: "00:00:10",
        id: "6d12262b-0686-4131-9de2-bb515f7c0f38",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "https://mercury-images.fastpix.dev/e49a0d7b-6f2c-4743-84d1-45522cc20ded/thumbnail.png",
      },
      {
        createdAt: new Date("2024-12-05T07:21:15.000508Z"),
        duration: "00:00:10",
        id: "a1cd180e-f9b5-4e99-9d44-b9c9baabad89",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "https://mercury-images.fastpix.dev/e49a0d7b-6f2c-4743-84d1-45522cc20ded/thumbnail.png",
      },
    ],
    workspaceId: "d760b903-86ef-44d6-9b73-334130e0cf2d",
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