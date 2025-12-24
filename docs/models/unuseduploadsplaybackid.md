# UnusedUploadsPlaybackId

A collection of Playback ID objects utilized for crafting HLS playback urls.

## Example Usage

```typescript
import { UnusedUploadsPlaybackId } from "@fastpix/fastpix-node/models";

let value: UnusedUploadsPlaybackId = {};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessPolicy`                                                                                                                                                                     | [models.AccessPolicy](../models/accesspolicy.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                 | Access policy for media content                                                                                                                                                    |
| `accessRestrictions`                                                                                                                                                               | [models.UnusedUploadsPlaybackIdAccessRestrictions](../models/unuseduploadsplaybackidaccessrestrictions.md)                                                                         | :heavy_minus_sign:                                                                                                                                                                 | Controls access based on domains and user agents. Defines a default policy (either "allow" or "deny") and provides lists for explicitly allowed or denied domains and user agents. |