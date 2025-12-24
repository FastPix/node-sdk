# GenerateSubtitleTrackResponseBody

Media details updated successfully

## Example Usage

```typescript
import { GenerateSubtitleTrackResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: GenerateSubtitleTrackResponseBody = {
  success: true,
  data: {
    id: "ace60fc7-e876-4fc6-b9d9-c33fa242f84b",
    type: "subtitle",
    languageCode: "it-IT",
    languageName: "Italian",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `success`                                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | Demonstrates whether the request is successful or not.                | true                                                                  |
| `data`                                                                | [models.GenerateTrackResponse](../../models/generatetrackresponse.md) | :heavy_minus_sign:                                                    | Represents the response for a successfully generated subtitle track.  |                                                                       |