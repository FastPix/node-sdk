# AddMediaTrackRequest

## Example Usage

```typescript
import { AddMediaTrackRequest } from "@fastpix/fastpix-node/models/operations";

let value: AddMediaTrackRequest = {
  mediaId: "your-media-id",
  body: {
    tracks: {
      type: "audio",
      url: "your-audio-url",
      languageCode: "your-language-code",
      languageName: "your-language-name",
      title: "Italian audio",
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | The unique identifier assigned to the media when created. The value must be a valid UUID.  | your-media-id                                                       |
| `body`                                                                                     | [operations.AddMediaTrackRequestBody](../../models/operations/addmediatrackrequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |