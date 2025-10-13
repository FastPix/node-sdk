# UpdateMediaTrackResponse

Media details updated successfully

## Example Usage

```typescript
import { UpdateMediaTrackResponse } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaTrackResponse = {
  success: true,
  data: {
    id: "your-track-id",
    type: "subtitle",
    url:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.vtt",
    languageCode: "fr",
    languageName: "french",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `success`                                                         | *boolean*                                                         | :heavy_minus_sign:                                                | Demonstrates whether the request is successful or not.            | true                                                              |
| `data`                                                            | [models.UpdateTrackResponse](../../models/updatetrackresponse.md) | :heavy_minus_sign:                                                | Contains details about the track that was added or updated.       |                                                                   |