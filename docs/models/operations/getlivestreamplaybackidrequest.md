# GetLiveStreamPlaybackIdRequest

## Example Usage

```typescript
import { GetLiveStreamPlaybackIdRequest } from "@fastpix/fastpix-node/models/operations";

let value: GetLiveStreamPlaybackIdRequest = {
  streamId: "61a264dcc447b63da6fb79ef925cd76d",
  playbackId: "61a264dcc447b63da6fb79ef925cd76d",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `streamId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | Upon creating a new live stream, FastPix assigns a unique identifier to the stream.  | 61a264dcc447b63da6fb79ef925cd76d                                                     |
| `playbackId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | Upon creating a new playbackId, FastPix assigns a unique identifier to the playback. | 61a264dcc447b63da6fb79ef925cd76d                                                     |