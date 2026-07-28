# PlaylistCreatedSchema


## Supported Types

### `models.PlaylistByIdResponseDataManual`

```typescript
const value: models.PlaylistByIdResponseDataManual = {
  id: "your-playlist-id",
  name: "playlist1",
  referenceId: "your-reference-id",
  type: "manual",
  description: "This is a manual playlist",
  mediaList: [
    {
      createdAt: new Date("2025-03-21T05:58:38.000708Z"),
      creatorId: "your-creator-id",
      duration: "00:00:10",
      id: "your-media-id",
      sourceResolution: "1080p",
      status: "Ready",
      thumbnail:
        "your-thumbnail-url",
      title: "Media 1",
    },
  ],
  workspaceId: "your-workspace-id",
  createdAt: new Date("2025-05-12T12:55:24.368182Z"),
  updatedAt: new Date("2025-05-27T09:51:03.166094Z"),
  mediaCount: 3,
};
```

### `models.PlaylistByIdResponseDataSmart`

```typescript
const value: models.PlaylistByIdResponseDataSmart = {
  id: "your-playlist-id",
  name: "playlist1",
  referenceId: "your-reference-id",
  type: "smart",
  description: "This is a smart playlist",
  playOrder: "createdDate DESC",
  metadata: {
    createdDate: {
      startDate: "2024-11-11",
      endDate: "2024-11-11",
    },
    updatedDate: {
      startDate: "2024-11-11",
      endDate: "2024-11-11",
    },
  },
  mediaList: [
    {
      createdAt: new Date("2025-03-21T05:58:38.000708Z"),
      creatorId: "your-creator-id",
      duration: "00:00:10",
      id: "your-media-id",
      sourceResolution: "1080p",
      status: "Ready",
      thumbnail:
        "your-thumbnail-url",
      title: "Media 1",
    },
  ],
  workspaceId: "your-workspace-id",
  createdAt: new Date("2025-05-12T12:55:24.368182Z"),
  updatedAt: new Date("2025-05-27T09:51:03.166094Z"),
  mediaCount: 3,
};
```

