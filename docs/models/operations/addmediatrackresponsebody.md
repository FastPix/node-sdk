# AddMediaTrackResponseBody

Media details updated successfully

## Example Usage

```typescript
import { AddMediaTrackResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: AddMediaTrackResponseBody = {
  success: true,
  data: {
    id: "ace60fc7-e876-4fc6-b9d9-c33fa242f84b",
    type: "audio",
    url: "https://static.fastpix.io/music-1.mp3",
    languageCode: "it",
    languageName: "Italian",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `success`                                                   | *boolean*                                                   | :heavy_minus_sign:                                          | Demonstrates whether the request is successful or not.      | true                                                        |
| `data`                                                      | [models.AddTrackResponse](../../models/addtrackresponse.md) | :heavy_minus_sign:                                          | Contains details about the track that was added or updated. |                                                             |