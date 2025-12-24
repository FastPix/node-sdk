# ViewsByTopContentDetails

Retrieves a list of the top video views

## Example Usage

```typescript
import { ViewsByTopContentDetails } from "@fastpix/fastpix-node/models";

let value: ViewsByTopContentDetails = {
  videoTitle: "example video title",
  views: 44,
  uniqueViews: 40,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `videoTitle`                                                      | *string*                                                          | :heavy_minus_sign:                                                | Title of the video                                                | example video title                                               |
| `views`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Total count of view sessions for a particular video content.      | 44                                                                |
| `uniqueViews`                                                     | *number*                                                          | :heavy_minus_sign:                                                | Total count of unique video viewers for particular video content. | 40                                                                |