# ListPlaybackIdsAccessRestrictions

Restrictions applied to this playback ID.

## Example Usage

```typescript
import { ListPlaybackIdsAccessRestrictions } from "@fastpix/fastpix-node/models/operations";

let value: ListPlaybackIdsAccessRestrictions = {
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `domains`                                                                                    | [operations.ListPlaybackIdsDomains](../../models/operations/listplaybackidsdomains.md)       | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `userAgents`                                                                                 | [operations.ListPlaybackIdsUserAgents](../../models/operations/listplaybackidsuseragents.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |