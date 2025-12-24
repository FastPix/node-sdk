# PlaylistByIdResponseData


## Supported Types

### `models.PlaylistByIdResponseDataManual`

```typescript
const value: models.PlaylistByIdResponseDataManual = {
  id: "2455174e-64d9-4324-86bd-80cb1af5b20a",
  name: "playlist1",
  referenceId: "playlists301",
  type: "manual",
  description: "This is a manual playlist",
  mediaList: [
    {
      createdAt: new Date("2025-03-21T05:58:38.000708Z"),
      creatorId: "FastPix@14612",
      duration: "00:00:10",
      id: "942e0ced-146b-487e-988f-6de578de1000",
      sourceResolution: "1080p",
      status: "Ready",
      thumbnail:
        "https://venus-images.fastpix.dev/ff31b32e-4979-4d2b-ad2a-685af43c9902/thumbnail.png",
      title: "Media 1",
    },
  ],
  workspaceId: "d760b903-86ef-44d6-9b73-334130e0cf2d",
  createdAt: new Date("2025-05-12T12:55:24.368182Z"),
  updatedAt: new Date("2025-05-27T09:51:03.166094Z"),
  mediaCount: 3,
};
```

### `models.PlaylistByIdResponseDataSmart`

```typescript
const value: models.PlaylistByIdResponseDataSmart = {
  id: "2455174e-64d9-4324-86bd-80cb1af5b20a",
  name: "playlist1",
  referenceId: "playlists301",
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
      creatorId: "FastPix@14612",
      duration: "00:00:10",
      id: "942e0ced-146b-487e-988f-6de578de1000",
      sourceResolution: "1080p",
      status: "Ready",
      thumbnail:
        "https://venus-images.fastpix.dev/ff31b32e-4979-4d2b-ad2a-685af43c9902/thumbnail.png",
      title: "Media 1",
    },
  ],
  workspaceId: "d760b903-86ef-44d6-9b73-334130e0cf2d",
  createdAt: new Date("2025-05-12T12:55:24.368182Z"),
  updatedAt: new Date("2025-05-27T09:51:03.166094Z"),
  mediaCount: 3,
};
```

