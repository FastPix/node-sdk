# GetAllPlaylistsResponse

## Example Usage

```typescript
import { GetAllPlaylistsResponse } from "@fastpix/fastpix-node/models";

let value: GetAllPlaylistsResponse = {
  success: true,
  data: [
    {
      id: "your-id",
      name: "playist1",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-06-04T13:29:04.253244Z"),
      mediaCount: 0,
    },
    {
      id: "your-id",
      name: "playist2",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-06-04T13:01:05.073809Z"),
      mediaCount: 0,
    },
    {
      id: "your-id",
      name: "Onboarding",
      type: "manual",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-06-04T12:17:38.917664Z"),
      mediaCount: 0,
    },
    {
      id: "your-id",
      name: "December playlist",
      type: "manual",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-15T11:06:51.545280Z"),
      mediaCount: 0,
    },
    {
      id: "your-id",
      name: "March Highlights",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-12T12:55:24.368182Z"),
      mediaCount: 9,
    },
    {
      id: "your-id",
      name: "playlist1",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-07T10:49:29.226943Z"),
      mediaCount: 9,
    },
    {
      id: "your-id",
      name: "playlist1",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-07T10:48:09.179324Z"),
      mediaCount: 9,
    },
    {
      id: "your-id",
      name: "playlist1",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-07T10:47:06.339271Z"),
      mediaCount: 9,
    },
    {
      id: "your-id",
      name: "playlist1",
      type: "smart",
      referenceId: "your-reference-id",
      createdAt: new Date("2025-05-07T10:03:21.487649Z"),
      mediaCount: 9,
    },
    {
      id: "your-id",
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

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | Shows the request status. Returns true for success and false for failure.      | true                                                                           |
| `data`                                                                         | [models.PlaylistItem](../models/playlistitem.md)[]                             | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `pagination`                                                                   | [models.Pagination](../models/pagination.md)                                   | :heavy_minus_sign:                                                             | Pagination organizes content into pages for better readability and navigation. |                                                                                |