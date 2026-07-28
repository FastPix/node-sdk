# UpdatedMp4SupportRequest

## Example Usage

```typescript
import { UpdatedMp4SupportRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdatedMp4SupportRequest = {
  mediaId: "your-media-id",
  body: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The unique identifier assigned to the media when created. The value must be a valid UUID.<br/>     | your-media-id                                                               |
| `body`                                                                                             | [operations.UpdatedMp4SupportRequestBody](../../models/operations/updatedmp4supportrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                | {<br/>"mp4Support": "capped_4k"<br/>}                                                              |