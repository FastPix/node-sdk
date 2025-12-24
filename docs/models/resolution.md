# Resolution

The maximum resolution for the playback ID.

## Example Usage

```typescript
import { Resolution } from "@fastpix/fastpix-node/models";

let value: Resolution = "1080p";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"480p" | "720p" | "1080p" | "1440p" | "2160p" | Unrecognized<string>
```