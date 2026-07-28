# GetLiveStreamPlaybackIdRequest

## Example Usage

```typescript
import { GetLiveStreamPlaybackIdRequest } from "@fastpix/fastpix-node/models/operations";

let value: GetLiveStreamPlaybackIdRequest = {
  streamId: "your-stream-id",
  playbackId: "your-playback-id",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `streamId`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | After creating a new live stream, FastPix assigns a unique identifier to the stream.  | your-stream-id                                                      |
| `playbackId`                                                                          | *string*                                                                              | :heavy_check_mark:                                                                    | After creating a new playbackId, FastPix assigns a unique identifier to the playback. | your-playback-id                                                      |