# AddTrackRequest

Contains details about the track being added to the media file.

## Example Usage

```typescript
import { AddTrackRequest } from "@fastpix/fastpix-node/models";

let value: AddTrackRequest = {
  url: "https://static.fastpix.io/music-1.mp3",
  type: "audio",
  languageCode: "it",
  languageName: "Italian",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `url`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | The direct URL of the track file. It should point to a valid audio or subtitle file. | https://static.fastpix.io/music-1.mp3                                                |
| `type`                                                                               | [models.AddTrackRequestType](../models/addtrackrequesttype.md)                       | :heavy_minus_sign:                                                                   | Specifies the type of track being added. It can be either `audio` or `subtitle`.     | audio                                                                                |
| `languageCode`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | The BCP 47 language code representing the track's language.                          | it                                                                                   |
| `languageName`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | The full name of the language corresponding to the `languageCode`.                   | Italian                                                                              |