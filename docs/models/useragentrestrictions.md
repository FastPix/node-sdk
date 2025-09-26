# UserAgentRestrictions

Restrictions based on the user agent

## Example Usage

```typescript
import { UserAgentRestrictions } from "@fastpix/fastpix-node/models";

let value: UserAgentRestrictions = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `defaultPolicy`                                          | [models.PolicyAction](../models/policyaction.md)         | :heavy_minus_sign:                                       | Policy action type                                       |
| `allow`                                                  | *string*[]                                               | :heavy_minus_sign:                                       | A list of user agents that are explicitly allowed access |
| `deny`                                                   | *string*[]                                               | :heavy_minus_sign:                                       | A list of user agents that are explicitly denied access  |