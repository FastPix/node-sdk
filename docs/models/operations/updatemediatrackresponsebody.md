# UpdateMediaTrackResponseBody

Media details updated successfully

## Example Usage

```typescript
import { UpdateMediaTrackResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaTrackResponseBody = {
  success: true,
  data: {
    id: "your-id",
    type: "subtitle",
    url:
      "your-subtitle-url",
    languageCode: "your-language-code",
    languageName: "your-language-name",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `success`                                                         | *boolean*                                                         | :heavy_minus_sign:                                                | Demonstrates whether the request is successful or not.            | true                                                              |
| `data`                                                            | [models.UpdateTrackResponse](../../models/updatetrackresponse.md) | :heavy_minus_sign:                                                | Contains details about the track that was added or updated.       |                                                                   |