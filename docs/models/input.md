# Input


## Supported Types

### `models.PullVideoInput`

```typescript
const value: models.PullVideoInput = {
  startTime: 0,
  endTime: 60,
  introUrl: "https://static.fastpix.io/fp-sample-video.mp4",
  outroUrl: "https://static.fastpix.io/fp-sample-video.mp4",
  expungeSegments: [
    "4-6",
    "15-19",
  ],
  segments: [
    {
      url: "https://storage.googleapis.com/gtv-videos-mp4/sample-segment.mp4",
      insertAt: 2,
    },
  ],
};
```

### `models.WatermarkInput`

```typescript
const value: models.WatermarkInput = {
  type: "watermark",
  url: "https://static.fastpix.io/watermark-4k.png",
  placement: {
    xAlign: "left",
    xMargin: "10%",
    yAlign: "top",
    yMargin: "10%",
  },
  width: "25%",
  height: "25%",
  opacity: "80%",
};
```

### `models.AudioInput`

```typescript
const value: models.AudioInput = {
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

### `models.SubtitleInput`

```typescript
const value: models.SubtitleInput = {
  type: "subtitle",
  url:
    "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt",
  languageName: "english",
};
```

