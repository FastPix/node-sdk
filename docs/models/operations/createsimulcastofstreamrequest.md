# CreateSimulcastOfStreamRequest

## Example Usage

```typescript
import { CreateSimulcastOfStreamRequest } from "@fastpix/fastpix-node/models/operations";

let value: CreateSimulcastOfStreamRequest = {
  streamId: "your-stream-id",
  body: {
    url: "your-rtmp-url",
    streamKey: "your-stream-key",
    metadata: {
      "livestream_name": "Tech-Connect Summit",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `streamId`                                                                                                                                                                        | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | After creating a new live stream, FastPix assigns a unique identifier to the stream.                                                                                              | your-stream-id                                                                                                                                                  |
| `body`                                                                                                                                                                            | [models.SimulcastRequest](../../models/simulcastrequest.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               | {<br/>"url": "your-rtmp-url",<br/>"streamKey": "your-stream-key",<br/>"metadata": {<br/>"livestream_name": "Tech-Connect Summit"<br/>}<br/>} |