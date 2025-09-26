# MediaClipResponseData

## Example Usage

```typescript
import { MediaClipResponseData } from "@fastpix/fastpix-node/models";

let value: MediaClipResponseData = {
  thumbnail:
    "https://images.fastpix.app/66dc7b0b-9dfb-4721-a738-837f89ccbd0a/thumbnail.png",
  id: "b62427ec-07fd-4a89-b3c0-94909aaaa1da",
  sourceMediaId: "fc733e3f-2fba-4c3d-9388-2511dc50d15f",
  workspaceId: "a56a1e42-65ec-4f9d-9fc1-89d24cd59348",
  metadata: {
    "key1": "value1",
  },
  maxResolution: "480p",
  sourceResolution: "480p",
  status: "ready",
  sourceAccess: false,
  playbackIds: [
    {
      id: "66dc7b0b-9dfb-4721-a738-837f89ccbd0a",
      accessPolicy: "public",
      accessRestrictions: {
        domains: {
          defaultPolicy: "allow",
          allow: [],
          deny: [],
        },
        userAgents: {
          defaultPolicy: "allow",
          allow: [],
          deny: [],
        },
      },
    },
  ],
  tracks: [
    {
      id: "a0dd6283-001a-41eb-91ed-851de81e9714",
      type: "video",
      width: 640,
      height: 360,
      status: "Ready",
      languageCode: "und",
      languageName: "default",
    },
  ],
  isAudioOnly: false,
  subtitleAvailable: false,
  duration: "00:00:20",
  aspectRatio: "16:9",
  createdAt: new Date("2025-03-12T06:17:26.403017Z"),
  updatedAt: new Date("2025-03-12T06:17:41.863577Z"),
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `thumbnail`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | A video thumbnail that acts as a preview image for the video.                                          | https://images.fastpix.app/66dc7b0b-9dfb-4721-a738-837f89ccbd0a/thumbnail.png                          |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The unique identifier assigned to the media by FastPix.                                                | b62427ec-07fd-4a89-b3c0-94909aaaa1da                                                                   |
| `sourceMediaId`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The ID of the original source media.                                                                   | fc733e3f-2fba-4c3d-9388-2511dc50d15f                                                                   |
| `workspaceId`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The unique identifier for the workspace associated with the media.                                     | a56a1e42-65ec-4f9d-9fc1-89d24cd59348                                                                   |
| `metadata`                                                                                             | Record<string, *string*>                                                                               | :heavy_minus_sign:                                                                                     | Tag a video in "key" : "value" pairs for searchable metadata. Maximum 10 entries, 255 characters each. | {<br/>"key1": "value1"<br/>}                                                                           |
| `maxResolution`                                                                                        | [models.MediaClipResponseMaxResolution](../models/mediaclipresponsemaxresolution.md)                   | :heavy_minus_sign:                                                                                     | The maximum resolution specified for the media.                                                        | 480p                                                                                                   |
| `sourceResolution`                                                                                     | [models.MediaClipResponseSourceResolution](../models/mediaclipresponsesourceresolution.md)             | :heavy_minus_sign:                                                                                     | The actual resolution of the uploaded media.                                                           | 480p                                                                                                   |
| `status`                                                                                               | [models.Status](../models/status.md)                                                                   | :heavy_minus_sign:                                                                                     | The current processing status of the media.                                                            | Ready                                                                                                  |
| `sourceAccess`                                                                                         | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Indicates whether the original media file is accessible.                                               | false                                                                                                  |
| `playbackIds`                                                                                          | [models.MediaClipResponsePlaybackId](../models/mediaclipresponseplaybackid.md)[]                       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `tracks`                                                                                               | [models.MediaClipResponseTrack](../models/mediaclipresponsetrack.md)[]                                 | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `generatedSubtitles`                                                                                   | [models.GeneratedSubtitle](../models/generatedsubtitle.md)[]                                           | :heavy_minus_sign:                                                                                     | Generated subtitle tracks associated with the media.                                                   |                                                                                                        |
| `isAudioOnly`                                                                                          | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Indicates whether the media contains only audio.                                                       | false                                                                                                  |
| `subtitleAvailable`                                                                                    | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Indicates whether subtitles are available for the media.                                               | false                                                                                                  |
| `duration`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The total duration of the media.                                                                       | 00:00:20                                                                                               |
| `aspectRatio`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The aspect ratio of the media.                                                                         | 16:9                                                                                                   |
| `createdAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | Timestamp of when the media was created.                                                               | 2025-03-12T06:17:26.403017Z                                                                            |
| `updatedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | Timestamp of when the media was last updated.                                                          | 2025-03-12T06:17:41.863577Z                                                                            |