# DirectUploadVideoMediaAccessRestrictions

## Example Usage

```typescript
import { DirectUploadVideoMediaAccessRestrictions } from "@fastpix/fastpix-node/models/operations";

let value: DirectUploadVideoMediaAccessRestrictions = {
  domains: {
    allow: [
      "example.com",
      "trustedsite.org",
    ],
    deny: [
      "malicioussite.io",
      "spamdomain.net",
    ],
  },
  userAgents: {
    allow: [
      "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
      "curl/7.68.0",
    ],
    deny: [
      "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      "PostmanRuntime/7.29.0",
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `domains`                                                                                                  | [operations.DirectUploadVideoMediaDomains](../../models/operations/directuploadvideomediadomains.md)       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `userAgents`                                                                                               | [operations.DirectUploadVideoMediaUserAgents](../../models/operations/directuploadvideomediauseragents.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |