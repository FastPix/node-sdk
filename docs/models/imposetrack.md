# ImposeTrack

## Example Usage

```typescript
import { ImposeTrack } from "@fastpix/fastpix-node/models";

let value: ImposeTrack = {
  url:
    "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-2.ogg",
  startTime: 0,
  endTime: 5,
  fadeInLevel: 1,
  fadeOutLevel: 4,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `url`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | URL of the audio track to impose on the video.                                              | http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-2.ogg |
| `startTime`                                                                                 | *number*                                                                                    | :heavy_minus_sign:                                                                          | Start time (in seconds) of the imposed audio in the video.                                  | 0                                                                                           |
| `endTime`                                                                                   | *number*                                                                                    | :heavy_minus_sign:                                                                          | End time (in seconds) of the imposed audio in the video.                                    | 5                                                                                           |
| `fadeInLevel`                                                                               | *number*                                                                                    | :heavy_minus_sign:                                                                          | Level of fade-in effect (in seconds) at the start of the imposed audio.                     | 1                                                                                           |
| `fadeOutLevel`                                                                              | *number*                                                                                    | :heavy_minus_sign:                                                                          | Level of fade-out effect (in seconds) at the end of the imposed audio.                      | 4                                                                                           |