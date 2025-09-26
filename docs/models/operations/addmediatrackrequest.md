# AddMediaTrackRequest

## Example Usage

```typescript
import { AddMediaTrackRequest } from "@fastpix/fastpix-node/models/operations";

let value: AddMediaTrackRequest = {
  mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  requestBody: {
    tracks: {
      url: "https://static.fastpix.io/music-1.mp3",
      type: "audio",
      languageCode: "it",
      languageName: "Italian",
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters. | 4fa85f64-5717-4562-b3fc-2c963f66afa6                                                                              |
| `requestBody`                                                                                                     | [operations.AddMediaTrackRequestBody](../../models/operations/addmediatrackrequestbody.md)                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |