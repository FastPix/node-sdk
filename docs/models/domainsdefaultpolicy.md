# DomainsDefaultPolicy

Specifies the default access policy for domains. 
If set to `allow`, all domains are allowed access unless otherwise specified in the `deny` lists. 
If set to `deny`, all domains are denied access unless otherwise specified in the `allow` lists.


## Example Usage

```typescript
import { DomainsDefaultPolicy } from "@fastpix/fastpix-node/models";

let value: DomainsDefaultPolicy = "deny";
```

## Values

```typescript
"allow" | "deny"
```