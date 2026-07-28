# PatchResponseDTO

Displays the result of the request.

## Example Usage

```typescript
import { PatchResponseDTO } from "@fastpix/fastpix-node/models";

let value: PatchResponseDTO = {
  success: true,
  data: {
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
    enableDvrMode: false,
    mediaPolicy: "public",
    metadata: {
      "livestream_name": "Gaming_stream",
    },
    lowLatency: true,
    closedCaptions: false,
    playbackIds: [
      {
        id: "your-id",
        accessPolicy: "public",
      },
    ],
    srtPlaybackResponse: {
      srtPlaybackStreamId: "your-srt-playback-stream-id",
      srtPlaybackSecret:
        "your-srt-playback-secret",
    },
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.PatchResponseData](../models/patchresponsedata.md)                | :heavy_minus_sign:                                                        | Displays the result of the request.                                       |                                                                           |