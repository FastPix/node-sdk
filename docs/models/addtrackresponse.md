# AddTrackResponse

Contains details about the track that was added or updated.

## Example Usage

```typescript
import { AddTrackResponse } from "@fastpix/fastpix-node/models";

let value: AddTrackResponse = {
  id: "ace60fc7-e876-4fc6-b9d9-c33fa242f84b",
  type: "audio",
  url: "https://static.fastpix.io/music-1.mp3",
  languageCode: "it",
  languageName: "Italian",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | The unique identifier of the track.                                | ace60fc7-e876-4fc6-b9d9-c33fa242f84b                               |
| `type`                                                             | [models.AddTrackResponseType](../models/addtrackresponsetype.md)   | :heavy_minus_sign:                                                 | Specifies the type of track (audio or subtitle).                   | audio                                                              |
| `url`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | The direct URL of the track file.                                  | https://static.fastpix.io/music-1.mp3                              |
| `languageCode`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | The BCP 47 language code representing the track's language.        | it                                                                 |
| `languageName`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | The full name of the language corresponding to the `languageCode`. | Italian                                                            |