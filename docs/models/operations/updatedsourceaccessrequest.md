# UpdatedSourceAccessRequest

## Example Usage

```typescript
import { UpdatedSourceAccessRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdatedSourceAccessRequest = {
  mediaId: "your-media-id",
  body: {
    sourceAccess: true,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique identifier assigned to the media when created. The value must be a valid UUID.<br/>         | your-media-id                                                                   |
| `body`                                                                                                 | [operations.UpdatedSourceAccessRequestBody](../../models/operations/updatedsourceaccessrequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    | {<br/>"sourceAccess": true<br/>}                                                                       |