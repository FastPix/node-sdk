# FileT

Contains metadata and structural details about the media file.

## Example Usage

```typescript
import { FileT } from "@fastpix/fastpix-node/models/operations";

let value: FileT = {
  containerFormat: "mp4",
  tracks: [
    {
      id: "9oa85f64-5717-4562-b3fc-2c963f66afa6",
      type: "subtitle",
      status: "available",
      languageName: "english",
      languageCode: "en",
    },
  ],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `containerFormat`                                                                       | *string*                                                                                | :heavy_minus_sign:                                                                      | Specifies the container format that encapsulates audio, video, subtitles, and metadata. | mp4                                                                                     |
| `tracks`                                                                                | *operations.Track*[]                                                                    | :heavy_minus_sign:                                                                      | A list of all media tracks including video, audio, and subtitles.                       |                                                                                         |