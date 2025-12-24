# UnusedUploadsPlaybackIdDomains

Restrictions based on the originating domain of a request (for example, whether requests from certain websites must be allowed or blocked).

## Example Usage

```typescript
import { UnusedUploadsPlaybackIdDomains } from "@fastpix/fastpix-node/models";

let value: UnusedUploadsPlaybackIdDomains = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `defaultPolicy`                                                            | [models.PolicyAction](../models/policyaction.md)                           | :heavy_minus_sign:                                                         | Policy action type                                                         |
| `allow`                                                                    | *string*[]                                                                 | :heavy_minus_sign:                                                         | A list of domains that are explicitly allowed access.                      |
| `deny`                                                                     | *string*[]                                                                 | :heavy_minus_sign:                                                         | A list of domains that are explicitly blocked from accessing the resource. |