# DirectUploadVideoMediaResponseBody

Direct upload created successfully

## Example Usage

```typescript
import { DirectUploadVideoMediaResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: DirectUploadVideoMediaResponseBody = {
  success: true,
  data: {
    uploadId: "your-upload-id",
    trial: false,
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
      sourceAccess: false,
      optimizeAudio: false,
    },
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.DirectUpload](../../models/directupload.md)                       | :heavy_minus_sign:                                                        | Displays the result of the request.                                       |                                                                           |