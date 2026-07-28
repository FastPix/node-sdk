# CreateMediaPlaybackIdRequestBody

Request body for creating playback id for an media

## Example Usage

```typescript
import { CreateMediaPlaybackIdRequestBody } from "@fastpix/fastpix-node/models/operations";

let value: CreateMediaPlaybackIdRequestBody = {
  accessPolicy: "drm",
  drmConfigurationId: "your-drm-configuration-id",
  resolution: "1080p",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `accessPolicy`                                                                                                           | [models.AccessPolicy](../../models/accesspolicy.md)                                                                      | :heavy_check_mark:                                                                                                       | Access policy for media content                                                                                          |                                                                                                                          |
| `accessRestrictions`                                                                                                     | [operations.CreateMediaPlaybackIdAccessRestrictions](../../models/operations/createmediaplaybackidaccessrestrictions.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `drmConfigurationId`                                                                                                     | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | DRM configuration ID (required if accessPolicy is "drm")                                                                 | your-drm-configuration-id                                                                                     |
| `resolution`                                                                                                             | [operations.Resolution](../../models/operations/resolution.md)                                                           | :heavy_minus_sign:                                                                                                       | The maximum resolution for the playback ID.                                                                              | 1080p                                                                                                                    |