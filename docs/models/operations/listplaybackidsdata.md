# ListPlaybackIdsData

## Example Usage

```typescript
import { ListPlaybackIdsData } from "@fastpix/fastpix-node/models/operations";

let value: ListPlaybackIdsData = {
  id: "your-playback-id",
  accessPolicy: "drm",
  accessRestrictions: {
    domains: {
      defaultPolicy: "allow",
      allow: [
        "example.com",
        "trustedsite.org",
      ],
      deny: [
        "malicioussite.io",
        "abc.net",
      ],
    },
    userAgents: {
      defaultPolicy: "deny",
      allow: [
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
      ],
      deny: [
        "PostmanRuntime/7.29.0",
      ],
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Unique identifier of the playback ID.                                                                        | your-playback-id                                                                         |
| `accessPolicy`                                                                                               | [operations.ListPlaybackIdsAccessPolicy](../../models/operations/listplaybackidsaccesspolicy.md)             | :heavy_minus_sign:                                                                                           | The access policy set for the playback ID.                                                                   | drm                                                                                                          |
| `accessRestrictions`                                                                                         | [operations.ListPlaybackIdsAccessRestrictions](../../models/operations/listplaybackidsaccessrestrictions.md) | :heavy_minus_sign:                                                                                           | Restrictions applied to this playback ID.                                                                    |                                                                                                              |