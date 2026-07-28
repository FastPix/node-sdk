# PlaybackIdSuccessResponseData

## Example Usage

```typescript
import { PlaybackIdSuccessResponseData } from "@fastpix/fastpix-node/models";

let value: PlaybackIdSuccessResponseData = {
  id: "your-id",
  accessPolicy: "public",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | Unique identifier for the playbackId                                              | your-id                                              |
| `accessPolicy`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | Determines if access to the streamed content is kept private or available to all. | public                                                                            |