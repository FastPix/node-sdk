# GetAllPlaylistsResponse


## Supported Types

### `models.GetAllPlaylistsResponse`

```typescript
const value: models.GetAllPlaylistsResponse = {
  success: true,
  data: [
    {
      id: "your-playlist-id",
      name: "playist1",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-06-04T13:29:04.253244Z"),
      mediaCount: 0,
    },
    {
      id: "your-playlist-id",
      name: "playist2",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-06-04T13:01:05.073809Z"),
      mediaCount: 0,
    },
    {
      id: "your-playlist-id",
      name: "Onboarding",
      type: "manual",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-06-04T12:17:38.917664Z"),
      mediaCount: 0,
    },
    {
      id: "your-playlist-id",
      name: "December playlist",
      type: "manual",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-15T11:06:51.545280Z"),
      mediaCount: 0,
    },
    {
      id: "your-playlist-id",
      name: "March Highlights",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-12T12:55:24.368182Z"),
      mediaCount: 9,
    },
    {
      id: "your-playlist-id",
      name: "playlist1",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-07T10:49:29.226943Z"),
      mediaCount: 9,
    },
    {
      id: "your-playlist-id",
      name: "playlist1",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-07T10:48:09.179324Z"),
      mediaCount: 9,
    },
    {
      id: "your-playlist-id",
      name: "playlist1",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-07T10:47:06.339271Z"),
      mediaCount: 9,
    },
    {
      id: "your-playlist-id",
      name: "playlist1",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-07T10:03:21.487649Z"),
      mediaCount: 9,
    },
    {
      id: "your-playlist-id",
      name: "playlist1",
      type: "manual",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-05T12:48:44.177451Z"),
      mediaCount: 2,
    },
  ],
  pagination: {
    totalRecords: 46,
    currentOffset: 1,
    offsetCount: 5,
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

