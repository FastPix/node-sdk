# CreateMediaRequestDomains

## Example Usage

```typescript
import { CreateMediaRequestDomains } from "@fastpix/fastpix-node/models";

let value: CreateMediaRequestDomains = {};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultPolicy`                                                                                                                                 | [models.PolicyAction](../models/policyaction.md)                                                                                                | :heavy_minus_sign:                                                                                                                              | Policy action type                                                                                                                              |
| `allow`                                                                                                                                         | *string*[]                                                                                                                                      | :heavy_minus_sign:                                                                                                                              | A list of domain names or patterns that are explicitly allowed access. <br/>This list is only effective when the `defaultPolicy` is set to `deny`.<br/> |
| `deny`                                                                                                                                          | *string*[]                                                                                                                                      | :heavy_minus_sign:                                                                                                                              | A list of domain names or patterns that are explicitly denied access. <br/>This list is only effective when the `defaultPolicy` is set to `allow`.<br/> |