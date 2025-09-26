# DirectUploadVideoMediaAccessRestrictions

## Example Usage

```typescript
import { DirectUploadVideoMediaAccessRestrictions } from "@fastpix/fastpix-node/models/operations";

let value: DirectUploadVideoMediaAccessRestrictions = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `domains`                                                             | [models.DomainRestrictions](../../models/domainrestrictions.md)       | :heavy_minus_sign:                                                    | Restrictions based on the originating domain of a request             |
| `userAgents`                                                          | [models.UserAgentRestrictions](../../models/useragentrestrictions.md) | :heavy_minus_sign:                                                    | Restrictions based on the user agent                                  |