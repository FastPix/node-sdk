# UpdateMediaChaptersResponse

Media details updated successfully with the chapters feature enabled or disabled

## Example Usage

```typescript
import { UpdateMediaChaptersResponse } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaChaptersResponse = {
  success: true,
  data: {
    mediaId: "your-media-id",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `success`                                                   | *boolean*                                                   | :heavy_minus_sign:                                          | Indicates if the request was successful or not.             | true                                                        |
| `data`                                                      | [models.ChaptersResponse](../../models/chaptersresponse.md) | :heavy_minus_sign:                                          | N/A                                                         |                                                             |