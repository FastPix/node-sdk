# UpdateLiveStreamResponse


## Supported Types

### `models.PatchResponseDTO`

```typescript
const value: models.PatchResponseDTO = {
  success: true,
  data: {
    streamId: "your-stream-id",
    streamKey:
      "your-stream-key",
    srtSecret:
      "your-srt-secret",
    trial: false,
    status: "idle",
    maxResolution: "1080p",
    maxDuration: 28800,
    createdAt: new Date("2024-10-15T08:48:31.551351Z"),
    reconnectWindow: 100,
    enableRecording: true,
    enableDvrMode: false,
    mediaPolicy: "public",
    metadata: {
      "livestream_name": "Gaming_stream",
    },
    lowLatency: true,
    closedCaptions: false,
    playbackIds: [
      {
        id: "your-playback-id",
        accessPolicy: "public",
      },
    ],
    srtPlaybackResponse: {
      srtPlaybackStreamId: "your-srt-playback-stream-id",
      srtPlaybackSecret:
        "your-srt-playback-secret",
    },
  },
};
```

### `models.DefaultError`

```typescript
const value: models.DefaultError = {
  success: false,
  error: {
    code: NaN,
    message: "Message describing the error",
    description: "Detailed explanation of why the request failed",
  },
};
```

