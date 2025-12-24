# MediaClipResponseData

## Example Usage

```typescript
import { MediaClipResponseData } from "@fastpix/fastpix-node/models";

let value: MediaClipResponseData = {
  id: "b62427ec-07fd-4a89-b3c0-94909aaaa1da",
  duration: "00:00:13",
  status: "Ready",
  thumbnail:
    "https://images.fastpix.app/66dc7b0b-9dfb-4721-a738-837f89ccbd0a/thumbnail.png",
  createdAt: new Date("2025-03-12T06:17:26.403017Z"),
  playbackIds: [
    {
      id: "66dc7b0b-9dfb-4721-a738-837f89ccbd0a",
      accessPolicy: "public",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier assigned to the media by FastPix.                                       | b62427ec-07fd-4a89-b3c0-94909aaaa1da                                                          |
| `duration`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Duration of the media in HH:MM:SS format.                                                     | 00:00:13                                                                                      |
| `status`                                                                                      | [models.MediaClipResponseStatus](../models/mediaclipresponsestatus.md)                        | :heavy_minus_sign:                                                                            | The current processing status of the media.                                                   | Ready                                                                                         |
| `thumbnail`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | A video thumbnail that acts as a preview image for the video.                                 | https://images.fastpix.app/66dc7b0b-9dfb-4721-a738-837f89ccbd0a/thumbnail.png                 |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of when the media was created.                                                      | 2025-03-12T06:17:26.403017Z                                                                   |
| `playbackIds`                                                                                 | [models.MediaClipResponsePlaybackId](../models/mediaclipresponseplaybackid.md)[]              | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |