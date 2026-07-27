# AddMediaTrackRequestBody

## Example Usage

```typescript
import { AddMediaTrackRequestBody } from "@fastpix/fastpix-node/models/operations";

let value: AddMediaTrackRequestBody = {
  tracks: {
    type: "audio",
    url: "https://static.fastpix.com/music-1.mp3",
    languageCode: "it",
    languageName: "Italian",
    title: "Italian audio",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `tracks`                                                        | [models.AddTrackRequest](../../models/addtrackrequest.md)       | :heavy_check_mark:                                              | Contains details about the track being added to the media file. |