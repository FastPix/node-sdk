# AddMediaTrackRequestBody

## Example Usage

```typescript
import { AddMediaTrackRequestBody } from "@fastpix/fastpix-node/models/operations";

let value: AddMediaTrackRequestBody = {
  tracks: {
    type: "audio",
    url: "your-audio-url",
    languageCode: "your-language-code",
    languageName: "your-language-name",
    title: "Italian audio",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `tracks`                                                        | [models.AddTrackRequest](../../models/addtrackrequest.md)       | :heavy_check_mark:                                              | Contains details about the track being added to the media file. |