# ListUploadsResponse

List of video media

## Example Usage

```typescript
import { ListUploadsResponse } from "@fastpix/fastpix-node/models/operations";

let value: ListUploadsResponse = {
  success: true,
  data: [
    {
      status: "waiting",
      url:
        "https://storage.fastpix.net/uploads/7619ee69-d758-4589-80ee-965f6bfc922c/9149264c-6cb9-40d3-9313-95a85c56135e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=assets-svc%2F20250109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250109T084749Z&X-Amz-Expires=14400&X-Amz-SignedHeaders=host&X-Amz-Signature=f0a1e3798792543bff7fed64314cc386f56adc1bc1a65f6d4d9c137c6998b6ce",
      corsOrigin: "*",
      pushMediaSettings: {
        playbackIds: [
          {
            accessPolicy: "public",
            accessRestrictions: {
              domains: {
                defaultPolicy: "allow",
                allow: [],
                deny: [],
              },
              userAgents: {
                defaultPolicy: "allow",
                allow: [],
                deny: [],
              },
            },
          },
        ],
        metadata: {
          "key1": "value1",
        },
      },
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
| `success`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | Demonstrates whether the request is successful or not.                         | true                                                                           |
| `data`                                                                         | [models.DirectUpload](../../models/directupload.md)[]                          | :heavy_minus_sign:                                                             | Displays the result of the request.                                            |                                                                                |
| `pagination`                                                                   | [models.Pagination](../../models/pagination.md)                                | :heavy_minus_sign:                                                             | Pagination organizes content into pages for better readability and navigation. |                                                                                |