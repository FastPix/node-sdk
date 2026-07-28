# CancelUploadResponseBody

Upload cancelled successfully

## Example Usage

```typescript
import { CancelUploadResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: CancelUploadResponseBody = {
  success: true,
  data: {
    uploadId: "your-upload-id",
    trial: false,
    status: "cancelled",
    url:
      "your-upload-url",
    timeout: 14400,
    corsOrigin: "*",
    maxResolution: "1080p",
    accessPolicy: "public",
    metadata: {
      "key1": "value1",
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `success`                                                         | *boolean*                                                         | :heavy_minus_sign:                                                | Demonstrates whether the request is successful or not.            | true                                                              |
| `data`                                                            | [models.MediaCancelResponse](../../models/mediacancelresponse.md) | :heavy_minus_sign:                                                | Response returned when an upload is cancelled.                    |                                                                   |