# GenerateSubtitleTrackRequest

## Example Usage

```typescript
import { GenerateSubtitleTrackRequest } from "@fastpix/fastpix-node/models/operations";

let value: GenerateSubtitleTrackRequest = {
  mediaId: "your-media-id",
  trackId: "your-track-id",
  trackSubtitlesGenerateRequest: {
    languageName: "English",
    metadata: {
      "key1": "value1",
    },
    languageCode: "en-IE",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | A universally unique identifier (UUID) assigned to the media by FastPix.                                       | 4fa85f64-5717-4562-b3fc-2c963f66afa6                                                                           |
| `trackId`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | A universally unique identifier (UUID) assigned to the specific track for which subtitles should be generated. | d46f5df9-1a8f-4f0a-b56e-9f5b5d5b9e21                                                                           |
| `trackSubtitlesGenerateRequest`                                                                                | [models.TrackSubtitlesGenerateRequest](../../models/tracksubtitlesgeneraterequest.md)                          | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |