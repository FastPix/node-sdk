# GetAllPlaylistsResponse

## Example Usage

```typescript
import { GetAllPlaylistsResponse } from "@fastpix/fastpix-node/models";

let value: GetAllPlaylistsResponse = {
  success: true,
  data: [
    {
      id: "db6e860f-cb57-43dd-8acf-39c9effd5608",
      name: "playist1",
      type: "smart",
      referenceId: "playlists101",
      createdAt: new Date("2025-06-04T13:29:04.253244Z"),
      mediaCount: 0,
    },
    {
      id: "5c18559f-c1b1-4697-9282-77211d4396bb",
      name: "playist2",
      type: "smart",
      referenceId: "playlists102",
      createdAt: new Date("2025-06-04T13:01:05.073809Z"),
      mediaCount: 0,
    },
    {
      id: "a4735902-b5e6-431f-8875-7a1a2cbc7a7b",
      name: "Onboarding",
      type: "manual",
      referenceId: "playlists103",
      createdAt: new Date("2025-06-04T12:17:38.917664Z"),
      mediaCount: 0,
    },
    {
      id: "1ffce718-7072-4b61-9b27-e7d18198094d",
      name: "December playlist",
      type: "manual",
      referenceId: "playlists104",
      createdAt: new Date("2025-05-15T11:06:51.545280Z"),
      mediaCount: 0,
    },
    {
      id: "2455174e-64d9-4324-86bd-80cb1af5b20a",
      name: "March Highlights",
      type: "smart",
      referenceId: "playlists105",
      createdAt: new Date("2025-05-12T12:55:24.368182Z"),
      mediaCount: 9,
    },
    {
      id: "d55c4e51-e426-498f-b760-6f9357e2349e",
      name: "playlist1",
      type: "smart",
      referenceId: "playlists106",
      createdAt: new Date("2025-05-07T10:49:29.226943Z"),
      mediaCount: 9,
    },
    {
      id: "63d73b6e-50dd-4653-990b-8a8df85ad09f",
      name: "playlist1",
      type: "smart",
      referenceId: "playlists107",
      createdAt: new Date("2025-05-07T10:48:09.179324Z"),
      mediaCount: 9,
    },
    {
      id: "5a93de86-0848-4ab4-befe-8dba4b8433e5",
      name: "playlist1",
      type: "smart",
      referenceId: "playlists108",
      createdAt: new Date("2025-05-07T10:47:06.339271Z"),
      mediaCount: 9,
    },
    {
      id: "d315b847-38c4-431f-b1b6-32dc5013700a",
      name: "playlist1",
      type: "smart",
      referenceId: "playlists109",
      createdAt: new Date("2025-05-07T10:03:21.487649Z"),
      mediaCount: 9,
    },
    {
      id: "86348042-6367-4dfc-b018-b3ee9934f45b",
      name: "playlist1",
      type: "manual",
      referenceId: "playlists201",
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