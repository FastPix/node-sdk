# CreatePlaylistRequest


## Supported Types

### `models.CreatePlaylistRequestManual`

```typescript
const value: models.CreatePlaylistRequestManual = {
  name: "Playlist name",
  referenceId: "your-reference-id",
  type: "manual",
  description: "This is a playlist",
};
```

### `models.CreatePlaylistRequestSmart`

```typescript
const value: models.CreatePlaylistRequestSmart = {
  name: "playlist name",
  referenceId: "your-reference-id",
  type: "smart",
  description: "This is a playlist",
  playOrder: "createdDate ASC",
  limit: 20,
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
};
```

