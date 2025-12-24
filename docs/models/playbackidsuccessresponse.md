# PlaybackIdSuccessResponse

Displays the result of the request.

## Example Usage

```typescript
import { PlaybackIdSuccessResponse } from "@fastpix/fastpix-node/models";

let value: PlaybackIdSuccessResponse = {
  success: true,
  data: {
    id: "88b7ac0f-2504-4dd5-b7b4-d84ab4fee1bd",
    accessPolicy: "public",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `success`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Shows the request status. Returns true for success and false for failure.          | true                                                                               |
| `data`                                                                             | [models.PlaybackIdSuccessResponseData](../models/playbackidsuccessresponsedata.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |