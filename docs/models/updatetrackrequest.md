# UpdateTrackRequest

Contains details about the track being added to the media file.

## Example Usage

```typescript
import { UpdateTrackRequest } from "@fastpix/fastpix-node/models";

let value: UpdateTrackRequest = {
  url:
    "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt",
  languageCode: "fr",
  languageName: "french",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `url`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | The direct URL of the track file. It should point to a valid audio or subtitle file. | http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt     |
| `languageCode`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | The BCP 47 language code representing the track's language.                          | fr                                                                                   |
| `languageName`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | The full name of the language corresponding to the `languageCode`.                   | french                                                                               |