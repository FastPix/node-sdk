# UpdateSpecificSimulcastOfStreamRequest

## Example Usage

```typescript
import { UpdateSpecificSimulcastOfStreamRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateSpecificSimulcastOfStreamRequest = {
  streamId: "9714422d89287ad5758d4a86e9afe1a2",
  simulcastId: "8717422d89288ad5958d4a86e9afe2a2",
  simulcastUpdateRequest: {
    isEnabled: false,
    metadata: {
      "simulcast_name": "Tech today",
    },
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `streamId`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Upon creating a new live stream, FastPix assigns a unique identifier to the stream.                                            | 9714422d89287ad5758d4a86e9afe1a2                                                                                               |
| `simulcastId`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | When you create the new simulcast, FastPix assign a universal unique identifier which can contain a maximum of 255 characters. | 8717422d89288ad5958d4a86e9afe2a2                                                                                               |
| `simulcastUpdateRequest`                                                                                                       | [models.SimulcastUpdateRequest](../../models/simulcastupdaterequest.md)                                                        | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            | {<br/>"isEnabled": false,<br/>"metadata": {<br/>"simulcast_name": "Tech today"<br/>}<br/>}                                     |