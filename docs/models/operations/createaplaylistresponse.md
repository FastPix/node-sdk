# CreateAPlaylistResponse


## Supported Types

### `models.PlaylistCreatedResponse`

```typescript
const value: models.PlaylistCreatedResponse = {
  success: true,
  data: {
    id: "your-id",
    name: "playist",
    referenceId: "your-reference-id",
    type: "smart",
    description: "This is a playlist",
    playOrder: "createdDate ASC",
    metadata: {
      createdDate: {
        startDate: "2024-11-11",
        endDate: "2024-12-12",
      },
      updatedDate: {
        startDate: "2024-11-11",
        endDate: "2024-12-12",
      },
    },
    mediaList: [
      {
        createdAt: new Date("2024-11-12T05:58:38.000708Z"),
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
        createdAt: new Date("2024-12-05T07:23:18.000108Z"),
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
        createdAt: new Date("2024-12-05T07:21:15.000508Z"),
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
    createdAt: new Date("2025-06-04T13:29:39.409886Z"),
    updatedAt: new Date("2025-06-04T13:29:39.409886Z"),
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

