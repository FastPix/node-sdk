# CreateMediaPlaybackIdAccessRestrictions

## Example Usage

```typescript
import { CreateMediaPlaybackIdAccessRestrictions } from "@fastpix/fastpix-node/models/operations";

let value: CreateMediaPlaybackIdAccessRestrictions = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `domains`                                                             | [models.DomainRestrictions](../../models/domainrestrictions.md)       | :heavy_minus_sign:                                                    | Restrictions based on the originating domain of a request             |
| `userAgents`                                                          | [models.UserAgentRestrictions](../../models/useragentrestrictions.md) | :heavy_minus_sign:                                                    | Restrictions based on the user agent                                  |