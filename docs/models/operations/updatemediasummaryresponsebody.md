# UpdateMediaSummaryResponseBody

Media details updated successfully with the generated summary

## Example Usage

```typescript
import { UpdateMediaSummaryResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaSummaryResponseBody = {
  success: true,
  data: {
    mediaId: "your-media-id",
    isSummaryEnabled: true,
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.SummaryResponse](../../models/summaryresponse.md)                 | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |