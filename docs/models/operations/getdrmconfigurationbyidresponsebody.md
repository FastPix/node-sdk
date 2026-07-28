# GetDrmConfigurationByIdResponseBody

DRM configuration retrieved successfully

## Example Usage

```typescript
import { GetDrmConfigurationByIdResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: GetDrmConfigurationByIdResponseBody = {
  success: true,
  data: {
    id: "your-id",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.DrmIdResponse](../../models/drmidresponse.md)                     | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |