# CancelUploadRequest

## Example Usage

```typescript
import { CancelUploadRequest } from "@fastpix/fastpix-node/models/operations";

let value: CancelUploadRequest = {
  uploadId: "your-upload-id",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `uploadId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | When uploading the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters. | your-upload-id                                                                               |