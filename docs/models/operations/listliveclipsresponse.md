# ListLiveClipsResponse


## Supported Types

### `operations.ListLiveClipsResponseBody`

```typescript
const value: operations.ListLiveClipsResponseBody = {
  success: true,
  data: [
    {
      thumbnail:
        "your-thumbnail-url",
      id: "your-id",
      workspaceId: "your-workspace-id",
      streamId: "your-stream-id",
      status: "Ready",
      sourceAccess: false,
      playbackIds: [
        {
          id: "your-id",
          accessPolicy: "public",
          accessRestrictions: {
            domains: {
              defaultPolicy: "allow",
              allow: [],
              deny: [],
            },
            userAgents: {
              defaultPolicy: "allow",
              allow: [],
              deny: [],
            },
          },
        },
      ],
      tracks: [
        {
          id: "your-id",
          type: "video",
          width: 1920,
          height: 1080,
          frameRate: "30/1",
          status: "available",
        },
      ],
      isAudioOnly: false,
      subtitleAvailable: true,
      duration: "00:00:10",
      aspectRatio: "16:9",
      createdAt: new Date("2025-01-09T06:44:44.617138Z"),
      updatedAt: new Date("2025-01-09T06:44:53.742648Z"),
    },
  ],
  pagination: {
    totalRecords: 100,
    currentOffset: 1,
    offsetCount: 10,
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

