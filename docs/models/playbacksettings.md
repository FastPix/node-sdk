# PlaybackSettings

Displays the result of the playback settings.

## Example Usage

```typescript
import { PlaybackSettings } from "@fastpix/fastpix-node/models";

let value: PlaybackSettings = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `accessPolicy`                                             | [models.BasicAccessPolicy](../models/basicaccesspolicy.md) | :heavy_minus_sign:                                         | Basic access policy for media content                      || `accessRestrictions`                                       | [models.AccessRestrictions](../models/accessrestrictions.md) | :heavy_minus_sign:                                         | Access control restrictions applied to the playback ID.    |
