# CreateMediaPlaybackIdResponseBody

Playback ID for a media content.

## Example Usage

```typescript
import { CreateMediaPlaybackIdResponseBody } from "@fastpix/fastpix-node/models/operations";

let value: CreateMediaPlaybackIdResponseBody = {
  success: true,
  data: {
    id: "b331e0d8-bef4-4ad2-8760-757fdb2818b7",
    accessPolicy: "public",
    accessRestrictions: {
      domains: {
        defaultPolicy: "allow",
        allow: [],
        deny: [],
      },
      userAgents: {
        defaultPolicy: "allow",
        allow: [],
        deny: [],
      },
    },
    resolution: "1080p",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `success`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | Shows the request status. Returns true for success and false for failure.    | true                                                                         |
| `data`                                                                       | [models.CreatePlaybackId](../../models/createplaybackid.md)                  | :heavy_minus_sign:                                                           | A collection of Playback ID objects utilized for crafting HLS playback urls. |                                                                              |