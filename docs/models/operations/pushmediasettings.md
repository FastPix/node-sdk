# PushMediaSettings

Configuration settings for media upload.

## Example Usage

```typescript
import { PushMediaSettings } from "@fastpix/fastpix-node/models/operations";

let value: PushMediaSettings = {
  accessPolicy: "private",
  startTime: 0,
  endTime: 60,
  inputs: [
    {
      type: "video",
      url: "https://static.fastpix.io/sample.mp4",
      startTime: 0,
      endTime: 60,
      introUrl: "https://static.fastpix.io/sample.mp4",
      outroUrl: "https://static.fastpix.io/sample.mp4",
      expungeSegments: [
        "4-6",
        "15-19",
      ],
      segments: [
        {
          url: "https://storage.googleapis.com/gtv-videos-mp4",
          insertAtEnd: true,
        },
      ],
    },
  ],
  metadata: {
    "key1": "value1",
  },
  subtitles: {
    languageName: "english",
    metadata: {
      "key1": "value1",
    },
    languageCode: "en",
  },
  sourceAccess: true,
  mp4Support: "capped_4k",
  summary: {
    generate: true,
  },
  chapters: true,
  namedEntities: true,
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `accessPolicy`                                                                                                                            | [models.BasicAccessPolicy](../../models/basicaccesspolicy.md)                                                                             | :heavy_check_mark:                                                                                                                        | Basic access policy for media content                                                                                                     |                                                                                                                                           |
| `startTime`                                                                                                                               | *number*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Start time indicates where encoding should begin within the video file, in seconds.                                                       | 0                                                                                                                                         |
| `endTime`                                                                                                                                 | *number*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | End time indicates where encoding should end within the video file, in seconds.                                                           | 60                                                                                                                                        |
| `inputs`                                                                                                                                  | *operations.Input*[]                                                                                                                      | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |                                                                                                                                           |
| `metadata`                                                                                                                                | Record<string, *string*>                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Tag a video in "key" : "value" pairs for searchable metadata. Maximum 10 entries, 255 characters each.                                    | {<br/>"key1": "value1"<br/>}                                                                                                              |
| `subtitles`                                                                                                                               | [operations.Subtitles](../../models/operations/subtitles.md)                                                                              | :heavy_minus_sign:                                                                                                                        | Generates subtitle files for audio/video files.<br/>                                                                                      |                                                                                                                                           |
| `optimizeAudio`                                                                                                                           | *boolean*                                                                                                                                 | :heavy_minus_sign:                                                                                                                        | Enhance the quality and volume of the audio track. This is available for pre-recorded content only.<br/>                                  | true                                                                                                                                      |
| `maxResolution`                                                                                                                           | [operations.MaxResolution](../../models/operations/maxresolution.md)                                                                      | :heavy_minus_sign:                                                                                                                        | Determines the highest quality resolution available.<br/>                                                                                 | 1080p                                                                                                                                     |
| `sourceAccess`                                                                                                                            | *boolean*                                                                                                                                 | :heavy_minus_sign:                                                                                                                        | The sourceAccess parameter determines whether the original media file is accessible. Set to true to enable access or false to restrict it | true                                                                                                                                      |
| `mp4Support`                                                                                                                              | [operations.DirectUploadVideoMediaMp4Support](../../models/operations/directuploadvideomediamp4support.md)                                | :heavy_minus_sign:                                                                                                                        | Generates MP4 video up to 4K ("capped_4k"), m4a audio only ("audioOnly"), or both for offline viewing.<br/>                               | capped_4k                                                                                                                                 |
| `summary`                                                                                                                                 | [operations.Summary](../../models/operations/summary.md)                                                                                  | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |                                                                                                                                           |
| `chapters`                                                                                                                                | *boolean*                                                                                                                                 | :heavy_minus_sign:                                                                                                                        | Enable or disable the chapters feature for the media. Set to `true` to enable chapters or `false` to disable.<br/>                        | true                                                                                                                                      |
| `namedEntities`                                                                                                                           | *boolean*                                                                                                                                 | :heavy_minus_sign:                                                                                                                        | Enable or disable named entity extraction. Set to `true` to enable or `false` to disable.<br/>                                            | true                                                                                                                                      |
| `moderation`                                                                                                                              | [operations.DirectUploadVideoMediaModeration](../../models/operations/directuploadvideomediamoderation.md)                                | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |                                                                                                                                           |
| `accessRestrictions`                                                                                                                      | [operations.DirectUploadVideoMediaAccessRestrictions](../../models/operations/directuploadvideomediaaccessrestrictions.md)                | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |                                                                                                                                           |