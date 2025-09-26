# CreateSimulcastOfStreamRequest

## Example Usage

```typescript
import { CreateSimulcastOfStreamRequest } from "@fastpix/fastpix-node/models/operations";

let value: CreateSimulcastOfStreamRequest = {
  streamId: "8717422d89288ad5958d4a86e9afe2a2",
  simulcastRequest: {
    url: "rtmp://hyd01.contribute.live-video.net/app/",
    streamKey: "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",
    metadata: {
      "livestream_name": "Tech-Connect Summit",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `streamId`                                                                                                                                                                        | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | Upon creating a new live stream, FastPix assigns a unique identifier to the stream.                                                                                               | 8717422d89288ad5958d4a86e9afe2a2                                                                                                                                                  |
| `simulcastRequest`                                                                                                                                                                | [models.SimulcastRequest](../../models/simulcastrequest.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               | {<br/>"url": "rtmp://hyd01.contribute.live-video.net/app/",<br/>"streamKey": "live_1012464221_DuM8W004MoZYNxQEZ0czODgfHCFBhk",<br/>"metadata": {<br/>"livestream_name": "Tech-Connect Summit"<br/>}<br/>} |