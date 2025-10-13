# GetDrmConfigurationResponse

DRM configuration(s) retrieved successfully

## Example Usage

```typescript
import { GetDrmConfigurationResponse } from "@fastpix/fastpix-node/models/operations";

let value: GetDrmConfigurationResponse = {
  success: true,
  data: {
    id: "your-drm-configuration-id",
  },
  pagination: {
    totalRecords: 100,
    currentOffset: 1,
    offsetCount: 10,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            | true                                                                           |
| `data`                                                                         | [models.DrmIdResponse](../../models/drmidresponse.md)                          | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `pagination`                                                                   | [models.Pagination](../../models/pagination.md)                                | :heavy_minus_sign:                                                             | Pagination organizes content into pages for better readability and navigation. |                                                                                |