# AddMediaTrackRequestBody

## Example Usage

```typescript
import { AddMediaTrackRequestBody } from "@fastpix/fastpix-node/models/operations";

let value: AddMediaTrackRequestBody = {
  tracks: {
    url: "https://static.fastpix.io/music-1.mp3",
    type: "audio",
    languageCode: "it",
    languageName: "Italian",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `tracks`                                                        | [models.AddTrackRequest](../../models/addtrackrequest.md)       | :heavy_minus_sign:                                              | Contains details about the track being added to the media file. |