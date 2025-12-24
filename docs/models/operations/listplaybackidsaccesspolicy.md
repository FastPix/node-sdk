# ListPlaybackIdsAccessPolicy

The access policy set for the playback ID.

## Example Usage

```typescript
import { ListPlaybackIdsAccessPolicy } from "@fastpix/fastpix-node/models/operations";

let value: ListPlaybackIdsAccessPolicy = "drm";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"public" | "private" | "drm" | Unrecognized<string>
```