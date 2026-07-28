# GetMediaResponseBody

Get a video media by id

## Example Usage

```typescript
import { GetMediaResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: GetMediaResponseBody = {
  success: true,
  data: {
    thumbnail:
      "your-thumbnail-url",
    id: "your-media-id",
    workspaceId: "your-workspace-id",
    metadata: {
      "key1": "value1",
    },
    mediaQuality: "standard",
    status: "Ready",
    mp4Support: [
      {
        type: "capped_4k",
        status: "ready",
        height: 1080,
        width: 1920,
        ext: "mp4",
      },
    ],
    sourceAccess: false,
    playbackIds: [
      {
        id: "your-playback-id",
        accessPolicy: "public",
        accessRestrictions: {
          domains: {
            defaultPolicy: "allow",
            allow: [],
            deny: [],
          },
          userAgents: {
            defaultPolicy: "allow",
            allow: [],
            deny: [],
          },
        },
      },
    ],
    tracks: [
      {
        id: "your-track-id",
        type: "video",
        width: 1920,
        height: 1080,
        frameRate: "30/1",
        status: "available",
      },
    ],
    isAudioOnly: false,
    subtitleAvailable: true,
    duration: "00:00:10",
    aspectRatio: "16:9",
    createdAt: new Date("2025-01-09T06:44:44.617138Z"),
    updatedAt: new Date("2025-01-09T06:44:53.742648Z"),
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `success`                                                   | *boolean*                                                   | :heavy_minus_sign:                                          | Demonstrates whether the request is successful or not.      | true                                                        |
| `data`                                                      | [models.GetMediaDetailResponse](../../models/getmediadetailresponse.md) | :heavy_minus_sign:                                          | N/A                                                         |                                                             |