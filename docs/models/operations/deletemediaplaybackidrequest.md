# DeleteMediaPlaybackIdRequest

## Example Usage

```typescript
import { DeleteMediaPlaybackIdRequest } from "@fastpix/fastpix-node/models/operations";

let value: DeleteMediaPlaybackIdRequest = {
  mediaId: "dbb8a39a-e4a5-4120-9f22-22f603f1446e",
  playbackId: "dbb8a39a-e4a5-4120-9f22-22f603f1446e",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `mediaId`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | Return the universal unique identifier for media which can contain a maximum of 255 characters.       | dbb8a39a-e4a5-4120-9f22-22f603f1446e                                                                  |
| `playbackId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | Return the universal unique identifier for playbacks  which can contain a maximum of 255 characters.  | dbb8a39a-e4a5-4120-9f22-22f603f1446e                                                                  |