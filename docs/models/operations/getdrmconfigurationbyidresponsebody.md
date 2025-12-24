# GetDrmConfigurationByIdResponseBody

DRM configuration retrieved successfully

## Example Usage

```typescript
import { GetDrmConfigurationByIdResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: GetDrmConfigurationByIdResponseBody = {
  success: true,
  data: {
    id: "e3dfdf15-16bb-4835-98b9-484c1e4320cc",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.DrmIdResponse](../../models/drmidresponse.md)                     | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |