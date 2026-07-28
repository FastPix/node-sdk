# Subtitles

Generates subtitle files for audio/video files.


## Example Usage

```typescript
import { Subtitles } from "@fastpix/fastpix-node/models/operations";

let value: Subtitles = {
  languageName: "your-language-name",
  metadata: {
    "key1": "value1",
  },
  languageCode: "your-language-code",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `languageName`                                                                                            | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Name of the language for the subtitles.                                                                   | your-language-name                                                                                                   |
| `metadata`                                                                                                | Record<string, *string*>                                                                                  | :heavy_minus_sign:                                                                                        | "Tag a video in "key" : "value" pairs for searchable metadata. Maximum 10 entries, 255 characters each."<br/> | {<br/>"key1": "value1"<br/>}                                                                              |
| `languageCode`                                                                                            | [operations.LanguageCode](../../models/operations/languagecode.md)                                        | :heavy_minus_sign:                                                                                        | Language codes (BCP 47 compliant) used for text files.<br/>                                               | your-language-code                                                                                                        |