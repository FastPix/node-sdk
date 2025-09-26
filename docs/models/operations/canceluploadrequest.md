# CancelUploadRequest

## Example Usage

```typescript
import { CancelUploadRequest } from "@fastpix/fastpix-node/models/operations";

let value: CancelUploadRequest = {
  uploadId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `uploadId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | When uploading the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters. | 4fa85f64-5717-4562-b3fc-2c963f66afa6                                                                               |