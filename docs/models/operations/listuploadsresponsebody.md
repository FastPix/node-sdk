# ListUploadsResponseBody

List of video media

## Example Usage

```typescript
import { ListUploadsResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: ListUploadsResponseBody = {
  success: true,
  data: [
    {
      uploadId: "your-upload-id",
      trial: true,
      status: "waiting",
      url:
        "your-upload-url",
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
        mediaQuality: "standard",
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
| `success`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | Shows the request status. Returns true for success and false for failure.      | true                                                                           |
| `data`                                                                         | [models.UnusedDirectUpload](../../models/unuseddirectupload.md)[]              | :heavy_minus_sign:                                                             | Displays the result of the request.                                            |                                                                                |
| `pagination`                                                                   | [models.Pagination](../../models/pagination.md)                                | :heavy_minus_sign:                                                             | Pagination organizes content into pages for better readability and navigation. |                                                                                |