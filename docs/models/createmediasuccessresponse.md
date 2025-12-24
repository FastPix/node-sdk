# CreateMediaSuccessResponse

## Example Usage

```typescript
import { CreateMediaSuccessResponse } from "@fastpix/fastpix-node/models";

let value: CreateMediaSuccessResponse = {
  success: true,
  data: {
    id: "a1d1acdd-8f4e-4add-b498-6b398cf349d9",
    status: "Created",
    createdAt: new Date("2023-10-20T10:50:34.594302Z"),
    updatedAt: new Date("2023-10-20T10:50:34.594302Z"),
    playbackIds: [
      {
        id: "6ta85f64-5717-4562-b3fc-2c963f66afa6",
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
        url: "https://static.fastpix.io/fp-sample-video.mp4",
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