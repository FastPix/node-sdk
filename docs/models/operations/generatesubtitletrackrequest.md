# GenerateSubtitleTrackRequest

## Example Usage

```typescript
import { GenerateSubtitleTrackRequest } from "@fastpix/fastpix-node/models/operations";

let value: GenerateSubtitleTrackRequest = {
  mediaId: "your-media-id",
  trackId: "your-track-id",
  body: {
    metadata: {
      "key1": "value1",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The unique identifier assigned to the media when created. The value must be a valid UUID.                    | your-media-id                                                                         |
| `trackId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | A universally unique identifier (UUID) assigned to the specific track for which subtitles must be generated. | your-track-id                                                                         |
| `body`                                                                                                       | [models.TrackSubtitlesGenerateRequest](../../models/tracksubtitlesgeneraterequest.md)                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |