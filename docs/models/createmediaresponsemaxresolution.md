# CreateMediaResponseMaxResolution

The maximum resolution tier defines the highest quality at which your media is available.

## Example Usage

```typescript
import { CreateMediaResponseMaxResolution } from "@fastpix/fastpix-node/models";

let value: CreateMediaResponseMaxResolution = "1080p";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"2160p" | "1440p" | "1080p" | "720p" | "480p" | Unrecognized<string>
```