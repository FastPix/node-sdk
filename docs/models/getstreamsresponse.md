# GetStreamsResponse

Displays the result of the request.

## Example Usage

```typescript
import { GetStreamsResponse } from "@fastpix/fastpix-node/models";

let value: GetStreamsResponse = {
  success: true,
  data: [
    {
      streamId: "your-stream-id",
      streamKey:
        "your-stream-key",
      srtSecret:
        "your-srt-secret",
      trial: false,
      status: "idle",
      maxResolution: "1080p",
      maxDuration: 28800,
      createdAt: new Date("2024-10-15T08:48:31.551351Z"),
      reconnectWindow: 100,
      enableRecording: true,
      enableDvrMode: true,
      mediaPolicy: "public",
      metadata: {
        "livestream_name": "Gaming_stream",
      },
      lowLatency: false,
      closedCaptions: false,
      playbackIds: [
        {
          id: "your-playback-id",
          accessPolicy: "public",
        },
      ],
      mediaIds: [
    "your-media-id-1",
  ],
      srtPlaybackResponse: {
        srtPlaybackStreamId: "your-srt-playback-stream-id",
        srtPlaybackSecret:
          "your-srt-playback-secret",
      },
    },
  ],
  pagination: {
    totalRecords: 4,
    currentOffset: 1,
    offsetCount: 4,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `success`                                                                              | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Shows the request status. Returns true for success and false for failure.              | true                                                                                   |
| `data`                                                                                 | [models.GetCreateLiveStreamResponseDTO](../models/getcreatelivestreamresponsedto.md)[] | :heavy_minus_sign:                                                                     | Displays the result of the request.                                                    |                                                                                        |
| `pagination`                                                                           | [models.LiveStreamPagination](../models/livestreampagination.md)                       | :heavy_minus_sign:                                                                     | Pagination organizes content into pages for better readability and navigation.         |                                                                                        |