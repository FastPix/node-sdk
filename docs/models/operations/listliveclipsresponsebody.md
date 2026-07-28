# ListLiveClipsResponseBody

List of video media

## Example Usage

```typescript
import { ListLiveClipsResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: ListLiveClipsResponseBody = {
  success: true,
  data: [
    {
      thumbnail:
        "your-thumbnail-url",
      id: "your-media-id",
      workspaceId: "your-workspace-id",
      streamId: "your-stream-id",
      status: "Ready",
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
  ],
  pagination: {
    totalRecords: 100,
    currentOffset: 1,
    offsetCount: 10,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | Demonstrates whether the request is successful or not.                         | true                                                                           |
| `data`                                                                         | [models.LiveMediaClips](../../models/livemediaclips.md)[]                      | :heavy_minus_sign:                                                             | Displays the result of the request.                                            |                                                                                |
| `pagination`                                                                   | [models.Pagination](../../models/pagination.md)                                | :heavy_minus_sign:                                                             | Pagination organizes content into pages for better readability and navigation. |                                                                                |