# CreateMediaPlaybackIdData

Displays the result of the request.

## Example Usage

```typescript
import { CreateMediaPlaybackIdData } from "@fastpix/fastpix-node/models/operations";

let value: CreateMediaPlaybackIdData = {
  playbackIds: [
    {
      id: "6ta85f64-5717-4562-b3fc-2c963f66afa6",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `playbackIds`                                                                | [models.PlaybackId](../../models/playbackid.md)[]                            | :heavy_minus_sign:                                                           | A collection of Playback ID objects utilized for crafting HLS playback URLs. |