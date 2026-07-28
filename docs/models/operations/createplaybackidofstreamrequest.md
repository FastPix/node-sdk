# CreatePlaybackIdOfStreamRequest

## Example Usage

```typescript
import { CreatePlaybackIdOfStreamRequest } from "@fastpix/fastpix-node/models/operations";

let value: CreatePlaybackIdOfStreamRequest = {
  streamId: "your-stream-id",
  body: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `streamId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | After creating a new live stream, FastPix assigns a unique identifier to the stream. | your-stream-id                                                     |
| `body`                                                                               | [models.PlaybackIdRequest](../../models/playbackidrequest.md)                        | :heavy_check_mark:                                                                   | N/A                                                                                  | {<br/>"accessPolicy": "public"<br/>}                                                 |