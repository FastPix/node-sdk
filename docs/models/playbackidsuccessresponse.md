# PlaybackIdSuccessResponse

Displays the result of the request.

## Example Usage

```typescript
import { PlaybackIdSuccessResponse } from "@fastpix/fastpix-node/models";

let value: PlaybackIdSuccessResponse = {
  success: true,
  data: {
    id: "your-playback-id",
    accessPolicy: "public",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `success`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Shows the request status. Returns true for success and false for failure.          | true                                                                               |
| `data`                                                                             | [models.PlaybackIdSuccessResponseData](../models/playbackidsuccessresponsedata.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |