# DomainRestrictions

Restrictions based on the originating domain of a request

## Example Usage

```typescript
import { DomainRestrictions } from "@fastpix/fastpix-node/models";

let value: DomainRestrictions = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `defaultPolicy`                                                       | [models.PolicyAction](../models/policyaction.md)                      | :heavy_minus_sign:                                                    | Policy action type                                                    |
| `allow`                                                               | *string*[]                                                            | :heavy_minus_sign:                                                    | A list of domain names or patterns that are explicitly allowed access |
| `deny`                                                                | *string*[]                                                            | :heavy_minus_sign:                                                    | A list of domain names or patterns that are explicitly denied access  |