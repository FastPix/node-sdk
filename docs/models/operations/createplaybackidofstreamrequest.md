# CreatePlaybackIdOfStreamRequest

## Example Usage

```typescript
import { CreatePlaybackIdOfStreamRequest } from "@fastpix/fastpix-node/models/operations";

let value: CreatePlaybackIdOfStreamRequest = {
  streamId: "8717422d89288ad5958d4a86e9afe2a2",
  playbackIdRequest: {
    accessPolicy: "public",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `streamId`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | Upon creating a new live stream, FastPix assigns a unique identifier to the stream. | 8717422d89288ad5958d4a86e9afe2a2                                                    |
| `playbackIdRequest`                                                                 | [models.PlaybackIdRequest](../../models/playbackidrequest.md)                       | :heavy_check_mark:                                                                  | N/A                                                                                 | {<br/>"accessPolicy": "public"<br/>}                                                |