# UpdatedMediaRequest

## Example Usage

```typescript
import { UpdatedMediaRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdatedMediaRequest = {
  mediaId: "your-media-id",
  body: {
    metadata: {
      "user": "fastpix_admin",
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `mediaId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | The unique identifier assigned to the media when created. The value must be a valid UUID. | your-media-id                                                      |
| `body`                                                                                    | [operations.UpdatedMediaRequestBody](../../models/operations/updatedmediarequestbody.md)  | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |