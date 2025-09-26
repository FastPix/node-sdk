# UpdatedMp4SupportRequest

## Example Usage

```typescript
import { UpdatedMp4SupportRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdatedMp4SupportRequest = {
  mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  requestBody: {
    mp4Support: "capped_4k",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters.<br/> | 4fa85f64-5717-4562-b3fc-2c963f66afa6                                                                               |
| `requestBody`                                                                                                      | [operations.UpdatedMp4SupportRequestBody](../../models/operations/updatedmp4supportrequestbody.md)                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | {<br/>"mp4Support": "capped_4k"<br/>}                                                                              |