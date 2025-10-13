# UpdateMediaModerationResponse

Media details updated successfully with the named entity extraction feature enabled or disabled

## Example Usage

```typescript
import { UpdateMediaModerationResponse } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaModerationResponse = {
  success: true,
  data: {
    mediaId: "your-media-id",
    isModerationEnabled: true,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `success`                                                       | *boolean*                                                       | :heavy_minus_sign:                                              | Indicates if the request was successful or not.                 | true                                                            |
| `data`                                                          | [models.ModerationResponse](../../models/moderationresponse.md) | :heavy_minus_sign:                                              | N/A                                                             |                                                                 |