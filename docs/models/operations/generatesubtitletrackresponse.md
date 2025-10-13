# GenerateSubtitleTrackResponse

Media details updated successfully

## Example Usage

```typescript
import { GenerateSubtitleTrackResponse } from "@fastpix/fastpix-node/models/operations";

let value: GenerateSubtitleTrackResponse = {
  success: true,
  data: {
    id: "your-track-id",
    type: "subtitle",
    languageCode: "fr-CH",
    languageName: "Italian",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `success`                                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | Demonstrates whether the request is successful or not.                | true                                                                  |
| `data`                                                                | [models.GenerateTrackResponse](../../models/generatetrackresponse.md) | :heavy_minus_sign:                                                    | Represents the response for a successfully generated subtitle track.  |                                                                       |