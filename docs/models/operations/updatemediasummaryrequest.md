# UpdateMediaSummaryRequest

## Example Usage

```typescript
import { UpdateMediaSummaryRequest } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaSummaryRequest = {
  mediaId: "your-media-id",
  body: {
    generate: true,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | The unique identifier assigned to the media when created. The value must be a valid UUID.<br/>       | your-media-id                                                                 |
| `body`                                                                                               | [operations.UpdateMediaSummaryRequestBody](../../models/operations/updatemediasummaryrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  | {<br/>"generate": true,<br/>"summaryLength": 100<br/>}                                               |