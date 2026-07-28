# AddMediaToPlaylistResponse


## Supported Types

### `models.PlaylistByIdResponse`

```typescript
const value: models.PlaylistByIdResponse = {
  success: true,
  data: {
    id: "your-id",
    name: "My Playlist",
    referenceId: "your-reference-id",
    type: "smart",
    description: "This Playlist contains videos from December 2024.",
    playOrder: "createdDate ASC",
    metadata: {
      createdDate: {
        startDate: "2024-12-11T00:00:00Z",
        endDate: "2024-12-12T00:00:00Z",
      },
      updatedDate: {
        startDate: "2024-12-11T00:00:00Z",
        endDate: "2024-12-12T00:00:00Z",
      },
    },
    mediaList: [
      {
        createdAt: new Date("2025-05-27T09:37:52.445936Z"),
        creatorId: "your-creator-id",
        duration: "00:00:10",
        id: "your-id",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "your-thumbnail-url",
        title: "Media 1",
      },
      {
        createdAt: new Date("2025-04-04T13:26:23.507284Z"),
        creatorId: "your-creator-id",
        duration: "00:00:10",
        id: "your-id",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "your-thumbnail-url",
        title: "Media 2",
      },
      {
        createdAt: new Date("2025-04-04T13:26:12.552840Z"),
        creatorId: "your-creator-id",
        duration: "00:00:10",
        id: "your-id",
        sourceResolution: "1080p",
        status: "Ready",
        thumbnail:
          "your-thumbnail-url",
        title: "Media 3",
      },
    ],
    workspaceId: "your-workspace-id",
    createdAt: new Date("2025-06-05T09:10:30.655275Z"),
    updatedAt: new Date("2025-06-05T12:23:47.096690Z"),
    mediaCount: 3,
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

