# UpdateLiveStreamRequest

## Example Usage

```typescript
import { UpdateLiveStreamRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateLiveStreamRequest = {
  streamId: "your-stream-id",
  body: {
    metadata: {
      "livestream_name": "Gaming_stream",
    },
    reconnectWindow: 100,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `streamId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | After creating a new live stream, FastPix assigns a unique identifier to the stream. | your-stream-id                                                     |
| `body`                                                                               | [models.PatchLiveStreamRequest](../../models/patchlivestreamrequest.md)              | :heavy_check_mark:                                                                   | N/A                                                                                  | {<br/>"metadata": {<br/>"livestream_name": "Gaming_stream"<br/>},<br/>"reconnectWindow": 100<br/>} |