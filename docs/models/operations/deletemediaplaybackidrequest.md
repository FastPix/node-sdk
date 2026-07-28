# DeleteMediaPlaybackIdRequest

## Example Usage

```typescript
import { DeleteMediaPlaybackIdRequest } from "@fastpix/fastpix-node/models/operations";

let value: DeleteMediaPlaybackIdRequest = {
  mediaId: "your-media-id",
  playbackId: "your-playback-id",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | The unique identifier assigned to the media when created. The value must be a valid UUID.             | your-media-id                                                                  |
| `playbackId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | Return the universal unique identifier for playbacks  which can contain a maximum of 255 characters.  | your-playback-id                                                                  |