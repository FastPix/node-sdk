# SimulcastResponse

Displays the result of the request.

## Example Usage

```typescript
import { SimulcastResponse } from "@fastpix/fastpix-node/models";

let value: SimulcastResponse = {
  success: true,
  data: {
    simulcastId: "8717422d89288ad5958d4a86e9afe2a2",
    url: "rtmp://hyd01.contribute.live-video.net/app/",
    streamKey: "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
    isEnabled: true,
    metadata: {
      "livestream_name": "Tech-Connect Summit",
    },
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.SimulcastResponseData](../models/simulcastresponsedata.md)        | :heavy_minus_sign:                                                        | Displays the result of the request.                                       |                                                                           |