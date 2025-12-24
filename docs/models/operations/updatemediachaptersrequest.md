# UpdateMediaChaptersRequest

## Example Usage

```typescript
import { UpdateMediaChaptersRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaChaptersRequest = {
  mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  body: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `mediaId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique identifier assigned to the media when created. The value must be a valid UUID.<br/>         | 4fa85f64-5717-4562-b3fc-2c963f66afa6                                                                   |
| `body`                                                                                                 | [operations.UpdateMediaChaptersRequestBody](../../models/operations/updatemediachaptersrequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    | {<br/>"chapters": true<br/>}                                                                           |