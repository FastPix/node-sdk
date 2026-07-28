# DeletePlaybackIdOfStreamRequest

## Example Usage

```typescript
import { DeletePlaybackIdOfStreamRequest } from "@fastpix/fastpix-node/models/operations";

let value: DeletePlaybackIdOfStreamRequest = {
  streamId: "your-stream-id",
  playbackId: "your-playback-id",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `streamId`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | Upon creating a new live stream, FastPix assigns a unique identifier to the stream. | your-stream-id                                                    |
| `playbackId`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier for the playbackId                                                | your-playback-id                                                |