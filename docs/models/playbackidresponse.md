# PlaybackIdResponse

A collection of Playback ID objects utilized for crafting HLS playback urls.

## Example Usage

```typescript
import { PlaybackIdResponse } from "@fastpix/fastpix-node/models";

let value: PlaybackIdResponse = {
  id: "your-id",
  accessPolicy: "public",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | Unique identifier for the playbackId                                              | your-id                                              |
| `accessPolicy`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | Determines if access to the streamed content is kept private or available to all. | public                                                                            |