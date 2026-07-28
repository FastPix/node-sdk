# Input


## Supported Types

### `models.VideoInput`

```typescript
const value: models.VideoInput = {
  type: "video",
  introUrl: "your-intro-url",
  outroUrl: "your-outro-url",
  expungeSegments: [
    "4-6",
    "15-19",
  ],
  segments: [
    {
      url: "your-upload-url",
      insertAtEnd: true,
    },
  ],
};
```

### `models.WatermarkInput`

```typescript
const value: models.WatermarkInput = {
  type: "watermark",
  url: "your-watermark-url",
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

### `models.SubtitleInput`

```typescript
const value: models.SubtitleInput = {
  type: "subtitle",
  url:
    "your-subtitle-url",
  languageName: "your-language-name",
};
```

