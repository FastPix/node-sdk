# GetPlaybackIdResponse

Successfully retrieved playback ID details

## Example Usage

```typescript
import { GetPlaybackIdResponse } from "@fastpix/fastpix-node/models/operations";

let value: GetPlaybackIdResponse = {
  success: true,
  data: {
    id: "6ta85f64-5717-4562-b3fc-2c963f66afa6",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `success`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | Indicates if the request was successful or not.                              | true                                                                         |
| `data`                                                                       | [operations.GetPlaybackIdData](../../models/operations/getplaybackiddata.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |