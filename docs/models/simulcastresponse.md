# SimulcastResponse

Displays the result of the request.

## Example Usage

```typescript
import { SimulcastResponse } from "@fastpix/fastpix-node/models";

let value: SimulcastResponse = {
  success: true,
  data: {
    simulcastId: "your-simulcast-id",
    url: "your-rtmp-url",
    streamKey: "your-stream-key",
    isEnabled: true,
    metadata: {
      "livestream_name": "Tech-Connect Summit",
    },
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.SimulcastResponseData](../models/simulcastresponsedata.md)        | :heavy_minus_sign:                                                        | Displays the result of the request.                                       |                                                                           |