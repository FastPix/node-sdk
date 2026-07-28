# AudioInput

## Example Usage

```typescript
import { AudioInput } from "@fastpix/fastpix-node/models";

let value: AudioInput = {
  type: "audio",
  swapTrackUrl:
    "your-track-url",
  imposeTracks: [
    {
      url:
        "your-audio-url
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
| `type`                                                                                       | [models.AudioInputType](../models/audioinputtype.md)                                         | :heavy_check_mark:                                                                           | Type of overlay (currently only supports "audio").                                           | audio                                                                                        |
| `swapTrackUrl`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | URL of the audio track to replace the existing audio in the video.                           | your-track-url |
| `imposeTracks`                                                                               | [models.ImposeTrack](../models/imposetrack.md)[]                                             | :heavy_minus_sign:                                                                           | List of additional audio tracks to overlay on the video.                                     |                                                                                              |