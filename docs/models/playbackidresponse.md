# PlaybackIdResponse

A collection of Playback ID objects utilized for crafting HLS playback urls.

## Example Usage

```typescript
import { PlaybackIdResponse } from "@fastpix/fastpix-node/models";

let value: PlaybackIdResponse = {
  id: "your-playback-id",
  accessPolicy: "public",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | Unique identifier for the playbackId                                              | 68b7ac0f-2504-4dd5-b7b4-d84ab4fee1bd                                              |
| `accessPolicy`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | Determines if access to the streamed content is kept private or available to all. | public                                                                            |