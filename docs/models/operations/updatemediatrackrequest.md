# UpdateMediaTrackRequest

## Example Usage

```typescript
import { UpdateMediaTrackRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaTrackRequest = {
  trackId: "your-track-id",
  mediaId: "your-media-id",
  updateTrackRequest: {
    url:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt",
    languageCode: "fr",
    languageName: "french",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `trackId`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters. | 4fa85f64-5717-4562-b3fc-2c963f66afa6                                                                              |
| `mediaId`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters. | 4fa85f64-5717-4562-b3fc-2c963f66afa6                                                                              |
| `updateTrackRequest`                                                                                              | [models.UpdateTrackRequest](../../models/updatetrackrequest.md)                                                   | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |