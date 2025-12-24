# DirectUploadVideoMediaAccessPolicy

Determines if access to the streamed content is kept private, drm or available to all.

## Example Usage

```typescript
import { DirectUploadVideoMediaAccessPolicy } from "@fastpix/fastpix-node/models/operations";

let value: DirectUploadVideoMediaAccessPolicy = "public";
```

## Values

```typescript
"public" | "private" | "drm"
```