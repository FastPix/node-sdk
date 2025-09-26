# MediaClipResponseTrack

## Example Usage

```typescript
import { MediaClipResponseTrack } from "@fastpix/fastpix-node/models";

let value: MediaClipResponseTrack = {
  id: "a0dd6283-001a-41eb-91ed-851de81e9714",
  type: "video",
  width: 640,
  height: 360,
  status: "Ready",
  languageCode: "und",
  languageName: "default",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | The unique identifier for the media track.                         | a0dd6283-001a-41eb-91ed-851de81e9714                               |
| `type`                                                             | [models.MediaClipResponseType](../models/mediaclipresponsetype.md) | :heavy_minus_sign:                                                 | The type of media track.                                           | video                                                              |
| `width`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The width of the video track (applicable to video only).           | 640                                                                |
| `height`                                                           | *number*                                                           | :heavy_minus_sign:                                                 | The height of the video track (applicable to video only).          | 360                                                                |
| `status`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | The current processing status of the track.                        | Ready                                                              |
| `languageCode`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | The language code of the audio or subtitle track.                  | und                                                                |
| `languageName`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | The language name of the audio or subtitle track.                  | default                                                            |