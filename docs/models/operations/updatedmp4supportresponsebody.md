# UpdatedMp4SupportResponseBody

Media details updated successfully

## Example Usage

```typescript
import { UpdatedMp4SupportResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: UpdatedMp4SupportResponseBody = {
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
    sourceAccess: true,
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
    generatedSubtitles: [],
    isAudioOnly: false,
    subtitleAvailable: false,
    duration: "00:00:10",
    aspectRatio: "16:9",
    createdAt: new Date("2024-12-06T03:47:26.489888Z"),
    updatedAt: new Date("2024-12-06T03:47:47.593400Z"),
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.Media](../../models/media.md)                                     | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |