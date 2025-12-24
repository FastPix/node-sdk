# UpdatedMediaRequest

## Example Usage

```typescript
import { UpdatedMediaRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdatedMediaRequest = {
  mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
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
| `mediaId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | The unique identifier assigned to the media when created. The value must be a valid UUID. | 4fa85f64-5717-4562-b3fc-2c963f66afa6                                                      |
| `body`                                                                                    | [operations.UpdatedMediaRequestBody](../../models/operations/updatedmediarequestbody.md)  | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |