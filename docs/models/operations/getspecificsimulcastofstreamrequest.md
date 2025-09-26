# GetSpecificSimulcastOfStreamRequest

## Example Usage

```typescript
import { GetSpecificSimulcastOfStreamRequest } from "@fastpix/fastpix-node/models/operations";

let value: GetSpecificSimulcastOfStreamRequest = {
  streamId: "8717422d89288ad5958d4a86e9afe2a2",
  simulcastId: "8717422d89288ad5958d4a86e9afe2a2",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `streamId`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Upon creating a new live stream, FastPix assigns a unique identifier to the stream.                                            | 8717422d89288ad5958d4a86e9afe2a2                                                                                               |
| `simulcastId`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | When you create the new simulcast, FastPix assign a universal unique identifier which can contain a maximum of 255 characters. | 8717422d89288ad5958d4a86e9afe2a2                                                                                               |