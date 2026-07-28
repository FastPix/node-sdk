# RetrieveMediaInputInfoResponseBody

Get video media input information

## Example Usage

```typescript
import { RetrieveMediaInputInfoResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: RetrieveMediaInputInfoResponseBody = {
  success: true,
  data: {
    configuration: {
      url: "your-video-url",
    },
    file: {
      containerFormat: "mp4",
      tracks: [
        {
          id: "your-track-id",
          type: "video",
          width: 1280,
          height: 720,
          frameRate: "30/1",
          status: "available",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `success`                                                                                      | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Shows the request status. Returns true for success and false for failure.                      |
| `data`                                                                                         | [operations.RetrieveMediaInputInfoData](../../models/operations/retrievemediainputinfodata.md) | :heavy_minus_sign:                                                                             | Displays the result of the request.                                                            |