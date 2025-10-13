# UpdatedSourceAccessRequest

## Example Usage

```typescript
import { UpdatedSourceAccessRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdatedSourceAccessRequest = {
  mediaId: "your-media-id",
  requestBody: {
    sourceAccess: true,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.<br/> | 4fa85f64-5717-4562-b3fc-2c963f66afa6                                                                               |
| `requestBody`                                                                                                      | [operations.UpdatedSourceAccessRequestBody](../../models/operations/updatedsourceaccessrequestbody.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | {<br/>"sourceAccess": true<br/>}                                                                                   |