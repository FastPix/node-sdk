# CreateMediaPlaybackIdRequest

## Example Usage

```typescript
import { CreateMediaPlaybackIdRequest } from "@fastpix/fastpix-node/models/operations";

let value: CreateMediaPlaybackIdRequest = {
  mediaId: "dbb8a39a-e4a5-4120-9f22-22f603f1446e",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The unique identifier assigned to the media when created. The value must be a valid UUID.                  | dbb8a39a-e4a5-4120-9f22-22f603f1446e                                                                       |
| `body`                                                                                                     | [operations.CreateMediaPlaybackIdRequestBody](../../models/operations/createmediaplaybackidrequestbody.md) | :heavy_minus_sign:                                                                                         | Request body for creating playback id for an media                                                         |                                                                                                            |