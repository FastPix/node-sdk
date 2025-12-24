# GetLiveStreamByIdResponse


## Supported Types

### `models.LivestreamgetResponse`

```typescript
const value: models.LivestreamgetResponse = {
  success: true,
  data: {
    streamId: "fa7f8c0950ea48ebcc5ef9de8c23deaa",
    streamKey:
      "3dc5d7641f918baa083a5c52a5bd9cbckfa7f8c0950ea48ebcc5ef9de8c23deaa",
    srtSecret:
      "c51739512d0088d98a46925c9b74c73akfa7f8c0950ea48ebcc5ef9de8c23deaa",
    trial: false,
    status: "idle",
    maxResolution: "1080p",
    maxDuration: 28800,
    createdAt: new Date("2024-10-15T08:48:31.551351Z"),
    enableRecording: true,
    enableDvrMode: false,
    mediaPolicy: "public",
    metadata: {
      "livestream_name": "fastpix_livestream",
    },
    lowLatency: true,
    closedCaptions: false,
    playbackIds: [
      {
        id: "4e43ec52-4775-4f68-a3ff-a57d8a59bba8",
        accessPolicy: "public",
      },
    ],
    mediaIds: [
      "03cdf35d-8626-4b5f-bd14-d2212cd2a991",
    ],
    srtPlaybackResponse: {
      srtPlaybackStreamId: "playfa7f8c0950ea48ebcc5ef9de8c23deaa",
      srtPlaybackSecret:
        "490e707dd4d165c9e38d261b252f9457kfa7f8c0950ea48ebcc5ef9de8c23deaa",
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

