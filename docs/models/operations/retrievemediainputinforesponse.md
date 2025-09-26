# RetrieveMediaInputInfoResponse

Get video media input information

## Example Usage

```typescript
import { RetrieveMediaInputInfoResponse } from "@fastpix/fastpix-node/models/operations";

let value: RetrieveMediaInputInfoResponse = {
  success: true,
  data: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `success`                                                                                      | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Demonstrates whether the request is successful or not.                                         |
| `data`                                                                                         | [operations.RetrieveMediaInputInfoData](../../models/operations/retrievemediainputinfodata.md) | :heavy_minus_sign:                                                                             | Displays the result of the request.                                                            |