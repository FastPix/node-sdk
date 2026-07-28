# CreateMediaSuccessResponse

## Example Usage

```typescript
import { CreateMediaSuccessResponse } from "@fastpix/fastpix-node/models";

let value: CreateMediaSuccessResponse = {
  success: true,
  data: {
    id: "your-media-id",
    status: "Created",
    createdAt: new Date("2023-10-20T10:50:34.594302Z"),
    updatedAt: new Date("2023-10-20T10:50:34.594302Z"),
    playbackIds: [
      {
        id: "your-playback-id",
      },
    ],
    metadata: {
      "key1": "value1",
    },
    mediaQuality: "standard",
    sourceAccess: false,
    maxResolution: "1080p",
    inputs: [
      {
        type: "video",
        url: "your-video-url",
      },
    ],
    optimizeAudio: false,
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.CreateMediaResponse](../models/createmediaresponse.md)            | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |