# DeletePlaybackIdOfStreamRequest

## Example Usage

```typescript
import { DeletePlaybackIdOfStreamRequest } from "@fastpix/fastpix-node/models/operations";

let value: DeletePlaybackIdOfStreamRequest = {
  streamId: "8717422d89288ad5958d4a86e9afe2a2",
  playbackId: "88b7ac0f-2504-4dd5-b7b4-d84ab4fee1bd",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `streamId`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | Upon creating a new live stream, FastPix assigns a unique identifier to the stream. | 8717422d89288ad5958d4a86e9afe2a2                                                    |
| `playbackId`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier for the playbackId                                                | 88b7ac0f-2504-4dd5-b7b4-d84ab4fee1bd                                                |