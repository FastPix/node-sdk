# UpdateMediaModerationRequest

## Example Usage

```typescript
import { UpdateMediaModerationRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaModerationRequest = {
  mediaId: "your-media-id",
  body: {
    moderation: {
      type: "video",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The unique identifier assigned to the media when created. The value must be a valid UUID.<br/>             | your-media-id                                                                       |
| `body`                                                                                                     | [operations.UpdateMediaModerationRequestBody](../../models/operations/updatemediamoderationrequestbody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        | {<br/>"moderation": {<br/>"type": "video"<br/>}<br/>}                                                      |