# PatchResponseDTO

Displays the result of the request.

## Example Usage

```typescript
import { PatchResponseDTO } from "@fastpix/fastpix-node/models";

let value: PatchResponseDTO = {
  success: true,
  data: {
    streamId: "fa7f8c0950ea48ebcc5ef9de8c23deaa",
    streamKey:
      "3dc5d7641f918baa083a5c52a5bd9cbckfa7f8c0950ea48ebcc5ef9de8c23deaa",
    srtSecret:
      "c51739512d0088d98a46925c9b74c73akfa7f8c0950ea48ebcc5ef9de8c23deaa",
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
        id: "4e43ec52-4775-4f68-a3ff-a57d8a59bba8",
        accessPolicy: "public",
      },
    ],
    srtPlaybackResponse: {
      srtPlaybackStreamId: "playfa7f8c0950ea48ebcc5ef9de8c23deaa",
      srtPlaybackSecret:
        "490e707dd4d165c9e38d261b252f9457kfa7f8c0950ea48ebcc5ef9de8c23deaa",
    },
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.PatchResponseData](../models/patchresponsedata.md)                | :heavy_minus_sign:                                                        | Displays the result of the request.                                       |                                                                           |