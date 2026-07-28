# UpdateMediaChaptersRequest

## Example Usage

```typescript
import { UpdateMediaChaptersRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaChaptersRequest = {
  mediaId: "your-media-id",
  body: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique identifier assigned to the media when created. The value must be a valid UUID.<br/>         | your-media-id                                                                   |
| `body`                                                                                                 | [operations.UpdateMediaChaptersRequestBody](../../models/operations/updatemediachaptersrequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    | {<br/>"chapters": true<br/>}                                                                           |