# UpdateSpecificSimulcastOfStreamRequest

## Example Usage

```typescript
import { UpdateSpecificSimulcastOfStreamRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateSpecificSimulcastOfStreamRequest = {
  streamId: "your-stream-id",
  simulcastId: "your-simulcast-id",
  body: {
    metadata: {
      "simulcast_name": "Tech today",
    },
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `streamId`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Upon creating a new live stream, FastPix assigns a unique identifier to the stream.                                            | your-stream-id                                                                                               |
| `simulcastId`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | When you create the new simulcast, FastPix assign a universal unique identifier which can contain a maximum of 255 characters. | your-simulcast-id                                                                                               |
| `body`                                                                                                                         | [models.SimulcastUpdateRequest](../../models/simulcastupdaterequest.md)                                                        | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            | {<br/>"isEnabled": true,<br/>"metadata": {<br/>"simulcast_name": "Tech today"<br/>}<br/>}                                      |