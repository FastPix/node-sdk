# UpdateTrackResponse

Contains details about the track that was added or updated.

## Example Usage

```typescript
import { UpdateTrackResponse } from "@fastpix/fastpix-node/models";

let value: UpdateTrackResponse = {
  id: "your-track-id",
  type: "subtitle",
  url:
    "your-subtitle-url",
  languageCode: "your-language-code",
  languageName: "your-language-name",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_minus_sign:                                                               | The unique identifier of the track.                                              | your-track-id                                             |
| `type`                                                                           | [models.UpdateTrackResponseType](../models/updatetrackresponsetype.md)           | :heavy_minus_sign:                                                               | Specifies the type of track (audio or subtitle).                                 | subtitle                                                                         |
| `url`                                                                            | *string*                                                                         | :heavy_minus_sign:                                                               | The direct URL of the track file.                                                | your-subtitle-url |
| `languageCode`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | The BCP 47 language code representing the track's language.                      | your-language-code                                                                               |
| `languageName`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | The full name of the language corresponding to the `languageCode`.               | your-language-name                                                                           |
| `title`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | Title of the track.                                                              | My track title                                                                   |