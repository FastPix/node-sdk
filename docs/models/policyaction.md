# PolicyAction

Policy action type

## Example Usage

```typescript
import { PolicyAction } from "@fastpix/fastpix-node/models";

let value: PolicyAction = "allow";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"allow" | "deny" | Unrecognized<string>
```