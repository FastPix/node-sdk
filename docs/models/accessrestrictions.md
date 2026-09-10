# AccessRestrictions

Access control restrictions applied to a playback ID.

## Example Usage

```typescript
import { AccessRestrictions } from "@fastpix/fastpix-node/models";

let value: AccessRestrictions = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `domains`                                                       | [models.DomainRestrictions](../models/domainrestrictions.md)    | :heavy_minus_sign:                                              | Restrictions based on the originating domain of a request       |
| `userAgents`                                                    | [models.UserAgentRestrictions](../models/useragentrestrictions.md) | :heavy_minus_sign:                                           | Restrictions based on the user agent                            |
