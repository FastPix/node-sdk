# PlaylistByIdResponseMediaListItem

## Example Usage

```typescript
import { PlaylistByIdResponseMediaListItem } from "@fastpix/fastpix-node/models";

let value: PlaylistByIdResponseMediaListItem = {
  createdAt: new Date("2025-03-21T05:58:38.000708Z"),
  creatorId: "your-creator-id",
  duration: "00:00:10",
  id: "your-id",
  sourceResolution: "1080p",
  status: "Ready",
  thumbnail:
    "your-thumbnail-url",
  title: "Media 1",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of media creation in the workspace.                                                 | 2025-03-21T05:58:38.000708Z                                                                   |
| `creatorId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Creator ID of the media.                                                                      | FastPix@14612                                                                                 |
| `duration`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Duration of the media in hh:mm:ss format.                                                     | 00:00:10                                                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | unique id of the particular media.                                                            | your-id                                                          |
| `sourceResolution`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | source resolution of the media.                                                               | 1080p                                                                                         |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | status of the media, only media with ready status is added to playlist.                       | Ready                                                                                         |
| `thumbnail`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | thumbnail for the particular media.                                                           | your-thumbnail-url           |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Title of the media.                                                                           | Media 1                                                                                       |