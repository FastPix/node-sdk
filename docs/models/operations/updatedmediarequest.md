# UpdatedMediaRequest

## Example Usage

```typescript
import { UpdatedMediaRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdatedMediaRequest = {
  mediaId: "your-media-id",
  requestBody: {
    metadata: {
      "metadata": "{\"user\":\"fastpix_admin\"}",
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters. | 4fa85f64-5717-4562-b3fc-2c963f66afa6                                                                              |
| `requestBody`                                                                                                     | [operations.UpdatedMediaRequestBody](../../models/operations/updatedmediarequestbody.md)                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |