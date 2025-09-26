# DirectUploadVideoMediaRequest

Request body for direct upload

## Example Usage

```typescript
import { DirectUploadVideoMediaRequest } from "@fastpix/fastpix-node/models/operations";

let value: DirectUploadVideoMediaRequest = {
  corsOrigin: "*",
  pushMediaSettings: {
    accessPolicy: "public",
    metadata: {
      "key1": "value1",
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `corsOrigin`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | Upload media directly from a device using the URL name or enter '*' to allow all. | *                                                                                 |
| `pushMediaSettings`                                                               | [operations.PushMediaSettings](../../models/operations/pushmediasettings.md)      | :heavy_minus_sign:                                                                | Configuration settings for media upload.                                          |                                                                                   |