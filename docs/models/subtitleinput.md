# SubtitleInput

Generates subtitle files for audio/video files.

## Example Usage

```typescript
import { SubtitleInput } from "@fastpix/fastpix-node/models";

let value: SubtitleInput = {
  type: "subtitle",
  url:
    "your-subtitle-url",
  languageName: "your-language-name",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Defines the type of input.<br/>                                                  | subtitle                                                                         |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | The direct URL of the subtitle file.                                             | your-subtitle-url |
| `languageName`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | Name of the language in which the subtitles will be generated.                   | your-language-name                                                                          |
| `languageCode`                                                                   | [models.LanguageCode](../models/languagecode.md)                                 | :heavy_minus_sign:                                                               | Language code for content localization                                           | your-language-code                                                                            |