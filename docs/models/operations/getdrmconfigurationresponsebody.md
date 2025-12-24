# GetDrmConfigurationResponseBody

DRM configuration(s) retrieved successfully

## Example Usage

```typescript
import { GetDrmConfigurationResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: GetDrmConfigurationResponseBody = {
  success: true,
  data: [
    {
      id: "e3dfdf15-16bb-4835-98b9-484c1e4320cc",
    },
  ],
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
| `success`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | Shows the request status. Returns true for success and false for failure.      | true                                                                           |
| `data`                                                                         | [models.DrmIdResponse](../../models/drmidresponse.md)[]                        | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `pagination`                                                                   | [models.Pagination](../../models/pagination.md)                                | :heavy_minus_sign:                                                             | Pagination organizes content into pages for better readability and navigation. |                                                                                |