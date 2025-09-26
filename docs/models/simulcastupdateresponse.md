# SimulcastUpdateResponse

Displays the result of the request.

## Example Usage

```typescript
import { SimulcastUpdateResponse } from "@fastpix/fastpix-node/models";

let value: SimulcastUpdateResponse = {
  success: true,
  data: {
    simulcastId: "8717422d89288ad5958d4a86e9afe2a2",
    url: "rtmp://hyd01.contribute.live-video.net/app/",
    streamKey: "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
    isEnabled: false,
    metadata: {
      "simulcast_name": "Tech today",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | It demonstrates whether the request is successful or not.                      | true                                                                           |
| `data`                                                                         | [models.SimulcastUpdateResponseData](../models/simulcastupdateresponsedata.md) | :heavy_minus_sign:                                                             | Displays the result of the request.                                            |                                                                                |