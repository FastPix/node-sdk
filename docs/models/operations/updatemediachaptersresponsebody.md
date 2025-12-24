# UpdateMediaChaptersResponseBody

Media details updated successfully with the chapters feature enabled or disabled

## Example Usage

```typescript
import { UpdateMediaChaptersResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaChaptersResponseBody = {
  success: true,
  data: {
    mediaId: "c695988b-ff84-42ae-bb21-10f284fedb0e",
    isChaptersEnabled: true,
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.ChaptersResponse](../../models/chaptersresponse.md)               | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |