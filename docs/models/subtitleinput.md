# SubtitleInput

Generates subtitle files for audio/video files.

## Example Usage

```typescript
import { SubtitleInput } from "@fastpix/fastpix-node/models";

let value: SubtitleInput = {
  type: "subtitle",
  url:
    "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt",
  languageName: "english",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Defines the type of input.<br/>                                                  | subtitle                                                                         |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | The direct URL of the subtitle file.                                             | http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt |
| `languageName`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | Name of the language in which the subtitles will be generated.                   | english                                                                          |
| `languageCode`                                                                   | [models.LanguageCode](../models/languagecode.md)                                 | :heavy_minus_sign:                                                               | Language code for content localization                                           | en-US                                                                            |