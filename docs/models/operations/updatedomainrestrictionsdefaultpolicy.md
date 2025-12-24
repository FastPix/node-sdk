# UpdateDomainRestrictionsDefaultPolicy

Specify the fallback behavior for domains that are not listed in the `allow` or `deny` lists.

## Example Usage

```typescript
import { UpdateDomainRestrictionsDefaultPolicy } from "@fastpix/fastpix-node/models/operations";

let value: UpdateDomainRestrictionsDefaultPolicy = "allow";
```

## Values

```typescript
"allow" | "deny"
```