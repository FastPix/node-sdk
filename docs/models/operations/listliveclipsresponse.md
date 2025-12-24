# ListLiveClipsResponse


## Supported Types

### `operations.ListLiveClipsResponseBody`

```typescript
const value: operations.ListLiveClipsResponseBody = {
  success: true,
  data: [
    {
      thumbnail:
        "https://images.fastpix.io/837f028b-dcaf-4c23-b368-3748641f74ac/thumbnail.png",
      id: "cfeec1a3-6cbd-40df-a425-2ed7f8f72ced",
      workspaceId: "6dc2b4e0-0615-42fd-a580-1f4aad932dfe",
      streamId: "98f28be5ac9bd7a4205634691a1a096b",
      status: "Ready",
      sourceAccess: false,
      playbackIds: [
        {
          id: "837f028b-dcaf-4c23-b368-3748641f74ac",
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
          id: "f301a2a1-b40d-40fa-b419-4d0cd92a62f8",
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

