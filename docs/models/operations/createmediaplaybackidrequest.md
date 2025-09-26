# CreateMediaPlaybackIdRequest

## Example Usage

```typescript
import { CreateMediaPlaybackIdRequest } from "@fastpix/fastpix-node/models/operations";

let value: CreateMediaPlaybackIdRequest = {
  mediaId: "dbb8a39a-e4a5-4120-9f22-22f603f1446e",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | When creating the media, FastPix assigns a universally unique identifier with a maximum length of 255 characters. | dbb8a39a-e4a5-4120-9f22-22f603f1446e                                                                              |
| `requestBody`                                                                                                     | [operations.CreateMediaPlaybackIdRequestBody](../../models/operations/createmediaplaybackidrequestbody.md)        | :heavy_minus_sign:                                                                                                | Request body for creating playback id for an media                                                                |                                                                                                                   |