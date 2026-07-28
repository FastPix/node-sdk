# MediaClipResponse

## Example Usage

```typescript
import { MediaClipResponse } from "@fastpix/fastpix-node/models";

let value: MediaClipResponse = {
  success: true,
  data: [
    {
      id: "your-media-id",
      duration: "00:00:13",
      status: "Ready",
      thumbnail:
        "your-thumbnail-url",
      createdAt: new Date("2025-03-12T06:17:26.403017Z"),
      playbackIds: [
        {
          id: "your-playback-id",
          accessPolicy: "public",
        },
      ],
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | Shows the request status. Returns true for success and false for failure.      | true                                                                           |
| `data`                                                                         | [models.MediaClipResponseData](../models/mediaclipresponsedata.md)[]           | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `pagination`                                                                   | [models.MediaClipResponsePagination](../models/mediaclipresponsepagination.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |