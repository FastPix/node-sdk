# PlaylistCreatedSchemaMediaList

## Example Usage

```typescript
import { PlaylistCreatedSchemaMediaList } from "@fastpix/fastpix-node/models";

let value: PlaylistCreatedSchemaMediaList = {
  createdAt: new Date("2025-03-21T05:58:38.000708Z"),
  duration: "00:00:10",
  id: "942e0ced-146b-487e-988f-6de578de1000",
  sourceResolution: "1080p",
  status: "Ready",
  thumbnail:
    "https://venus-images.fastpix.dev/ff31b32e-4979-4d2b-ad2a-685af43c9902/thumbnail.png",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_minus_sign:                                                                                         | timestamp of media creation in the workspace                                                               | 2025-03-21T05:58:38.000708Z                                                                                |
| `duration`                                                                                                 | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | duration of the media in hh:mm:ss format                                                                   | 00:00:10                                                                                                   |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | unique identifier of the media                                                                             | 942e0ced-146b-487e-988f-6de578de1000                                                                       |
| `sourceResolution`                                                                                         | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The source resolution of the media                                                                         | 1080p                                                                                                      |
| `status`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The status of the video in the workspace. Only media which are in ready status are added into the playlist | Ready                                                                                                      |
| `thumbnail`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Thumbnail to the particular media                                                                          | https://venus-images.fastpix.dev/ff31b32e-4979-4d2b-ad2a-685af43c9902/thumbnail.png                        |