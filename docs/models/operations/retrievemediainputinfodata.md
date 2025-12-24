# RetrieveMediaInputInfoData

Displays the result of the request.

## Example Usage

```typescript
import { RetrieveMediaInputInfoData } from "@fastpix/fastpix-node/models/operations";

let value: RetrieveMediaInputInfoData = {
  configuration: {
    url: "https://static.fastpix.io/fp-sample-video.mp4",
  },
  file: {
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
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `configuration`                                                      | [operations.Configuration](../../models/operations/configuration.md) | :heavy_minus_sign:                                                   | Represents configuration details for the media.                      |
| `file`                                                               | [operations.FileT](../../models/operations/filet.md)                 | :heavy_minus_sign:                                                   | Contains metadata and structural details about the media file.       |