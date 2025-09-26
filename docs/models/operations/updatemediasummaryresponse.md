# UpdateMediaSummaryResponse

Media details updated successfully with the generated summary

## Example Usage

```typescript
import { UpdateMediaSummaryResponse } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaSummaryResponse = {
  success: true,
  data: {
    mediaId: "c695988b-ff84-42ae-bb21-10f284fedb0e",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `success`                                                 | *boolean*                                                 | :heavy_minus_sign:                                        | Indicates if the request was successful or not.           | true                                                      |
| `data`                                                    | [models.SummaryResponse](../../models/summaryresponse.md) | :heavy_minus_sign:                                        | N/A                                                       |                                                           |