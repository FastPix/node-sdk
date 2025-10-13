# GetDrmConfigurationByIdResponse

DRM configuration retrieved successfully

## Example Usage

```typescript
import { GetDrmConfigurationByIdResponse } from "@fastpix/fastpix-node/models/operations";

let value: GetDrmConfigurationByIdResponse = {
  success: true,
  data: {
    id: "your-drm-configuration-id",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `success`                                             | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   | true                                                  |
| `data`                                                | [models.DrmIdResponse](../../models/drmidresponse.md) | :heavy_minus_sign:                                    | N/A                                                   |                                                       |