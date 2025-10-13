# UpdateTrackResponse

Contains details about the track that was added or updated.

## Example Usage

```typescript
import { UpdateTrackResponse } from "@fastpix/fastpix-node/models";

let value: UpdateTrackResponse = {
  id: "your-track-id",
  type: "subtitle",
  url:
    "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt",
  languageCode: "fr",
  languageName: "french",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_minus_sign:                                                               | The unique identifier of the track.                                              | a5833611-e92c-4ba9-89f0-a42f8e9aef5e                                             |
| `type`                                                                           | [models.UpdateTrackResponseType](../models/updatetrackresponsetype.md)           | :heavy_minus_sign:                                                               | Specifies the type of track (audio or subtitle).                                 | subtitle                                                                         |
| `url`                                                                            | *string*                                                                         | :heavy_minus_sign:                                                               | The direct URL of the track file.                                                | http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt |
| `languageCode`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | The BCP 47 language code representing the track's language.                      | fr                                                                               |
| `languageName`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | The full name of the language corresponding to the `languageCode`.               | french                                                                           |