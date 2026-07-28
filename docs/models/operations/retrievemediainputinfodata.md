# RetrieveMediaInputInfoData

Displays the result of the request.

## Example Usage

```typescript
import { RetrieveMediaInputInfoData } from "@fastpix/fastpix-node/models/operations";

let value: RetrieveMediaInputInfoData = {
  configuration: {
    url: "your-video-url",
  },
  file: {
    containerFormat: "mp4",
    tracks: [
      {
        id: "your-track-id",
        type: "subtitle",
        status: "available",
        languageName: "your-language-name",
        languageCode: "your-language-code",
      },
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `configuration`                                                      | [operations.Configuration](../../models/operations/configuration.md) | :heavy_minus_sign:                                                   | Represents configuration details for the media.                      |
| `file`                                                               | [operations.FileT](../../models/operations/filet.md)                 | :heavy_minus_sign:                                                   | Contains metadata and structural details about the media file.       |