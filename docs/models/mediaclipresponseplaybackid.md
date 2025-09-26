# MediaClipResponsePlaybackId

## Example Usage

```typescript
import { MediaClipResponsePlaybackId } from "@fastpix/fastpix-node/models";

let value: MediaClipResponsePlaybackId = {
  id: "66dc7b0b-9dfb-4721-a738-837f89ccbd0a",
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | The unique identifier for playback.                                                            | 66dc7b0b-9dfb-4721-a738-837f89ccbd0a                                                           |
| `accessPolicy`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | The access policy of the playback.                                                             | public                                                                                         |
| `accessRestrictions`                                                                           | [models.MediaClipResponseAccessRestrictions](../models/mediaclipresponseaccessrestrictions.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |