# PlaylistOrder

Determines the insertion order of media into playlist.

## Example Usage

```typescript
import { PlaylistOrder } from "@fastpix/fastpix-node/models";

let value: PlaylistOrder = "createdDate ASC";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"createdDate ASC" | "createdDate DESC" | Unrecognized<string>
```