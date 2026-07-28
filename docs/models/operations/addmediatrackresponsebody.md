# AddMediaTrackResponseBody

Media details updated successfully

## Example Usage

```typescript
import { AddMediaTrackResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: AddMediaTrackResponseBody = {
  success: true,
  data: {
    id: "your-id",
    type: "audio",
    url: "your-audio-url",
    languageCode: "your-language-code",
    languageName: "your-language-name",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `success`                                                   | *boolean*                                                   | :heavy_minus_sign:                                          | Demonstrates whether the request is successful or not.      | true                                                        |
| `data`                                                      | [models.AddTrackResponse](../../models/addtrackresponse.md) | :heavy_minus_sign:                                          | Contains details about the track that was added or updated. |                                                             |