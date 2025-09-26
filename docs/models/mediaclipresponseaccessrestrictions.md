# MediaClipResponseAccessRestrictions

## Example Usage

```typescript
import { MediaClipResponseAccessRestrictions } from "@fastpix/fastpix-node/models";

let value: MediaClipResponseAccessRestrictions = {
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `domains`                                                                      | [models.MediaClipResponseDomains](../models/mediaclipresponsedomains.md)       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `userAgents`                                                                   | [models.MediaClipResponseUserAgents](../models/mediaclipresponseuseragents.md) | :heavy_minus_sign:                                                             | N/A                                                                            |