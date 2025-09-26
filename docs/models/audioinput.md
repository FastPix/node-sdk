# AudioInput

## Example Usage

```typescript
import { AudioInput } from "@fastpix/fastpix-node/models";

let value: AudioInput = {
  type: "audio",
  swapTrackUrl:
    "https://file-examples.com/storage/fe0e9b723466913cf9611b7/2017/11/file_example_MP3_700KB.mp3",
  imposeTracks: [
    {
      url:
        "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-2.ogg",
      startTime: 0,
      endTime: 5,
      fadeInLevel: 1,
      fadeOutLevel: 4,
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [models.AudioInputType](../models/audioinputtype.md)                                         | :heavy_minus_sign:                                                                           | Type of overlay (currently only supports 'audio').                                           | audio                                                                                        |
| `swapTrackUrl`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | URL of the audio track to replace the existing audio in the video.                           | https://file-examples.com/storage/fe0e9b723466913cf9611b7/2017/11/file_example_MP3_700KB.mp3 |
| `imposeTracks`                                                                               | [models.ImposeTrack](../models/imposetrack.md)[]                                             | :heavy_minus_sign:                                                                           | List of additional audio tracks to overlay on the video.                                     |                                                                                              |