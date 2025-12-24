# AccessPolicy

Access policy for media content

## Example Usage

```typescript
import { AccessPolicy } from "@fastpix/fastpix-node/models";

let value: AccessPolicy = "private";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"public" | "private" | "drm" | Unrecognized<string>
```