# UpdatedSourceAccessRequest

## Example Usage

```typescript
import { UpdatedSourceAccessRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdatedSourceAccessRequest = {
  mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  body: {
    sourceAccess: true,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique identifier assigned to the media when created. The value must be a valid UUID.<br/>         | 4fa85f64-5717-4562-b3fc-2c963f66afa6                                                                   |
| `body`                                                                                                 | [operations.UpdatedSourceAccessRequestBody](../../models/operations/updatedsourceaccessrequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    | {<br/>"sourceAccess": true<br/>}                                                                       |