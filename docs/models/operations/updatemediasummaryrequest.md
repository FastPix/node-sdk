# UpdateMediaSummaryRequest

## Example Usage

```typescript
import { UpdateMediaSummaryRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaSummaryRequest = {
  mediaId: "4fa85f64-5717-4562-b3fc-2c963f66afa6",
  requestBody: {
    generate: true,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | The unique identifier assigned to the media when created. The value should be a valid UUID.<br/>     | 4fa85f64-5717-4562-b3fc-2c963f66afa6                                                                 |
| `requestBody`                                                                                        | [operations.UpdateMediaSummaryRequestBody](../../models/operations/updatemediasummaryrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  | {<br/>"generate": true,<br/>"summaryLength": 100<br/>}                                               |