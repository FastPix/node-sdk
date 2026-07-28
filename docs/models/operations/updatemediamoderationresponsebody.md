# UpdateMediaModerationResponseBody

Media details updated successfully with the named entity extraction feature enabled or disabled

## Example Usage

```typescript
import { UpdateMediaModerationResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaModerationResponseBody = {
  success: true,
  data: {
    mediaId: "your-media-id",
    isModerationEnabled: true,
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Shows the request status. Returns true for success and false for failure. | true                                                                      |
| `data`                                                                    | [models.ModerationResponse](../../models/moderationresponse.md)           | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |