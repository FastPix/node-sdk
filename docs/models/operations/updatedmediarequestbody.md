# UpdatedMediaRequestBody

## Example Usage

```typescript
import { UpdatedMediaRequestBody } from "@fastpix/fastpix-node/models/operations";

let value: UpdatedMediaRequestBody = {
  metadata: {
    "user": "fastpix_admin",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `metadata`                                                | Record<string, *string*>                                  | :heavy_minus_sign:                                        | N/A                                                       | {<br/>"user": "fastpix_admin"<br/>}                       |
| `title`                                                   | *string*                                                  | :heavy_minus_sign:                                        | Title of the media file.                                  | My Video Title                                            |
| `creatorId`                                               | *string*                                                  | :heavy_minus_sign:                                        | The unique identifier of the user who created this media. | 8fa85f64-5717-4562-b3fc-2c963f66afa6                      |