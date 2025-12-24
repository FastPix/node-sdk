# LiveMediaClipsMaxResolution

The maximum resolution specified by the user for the media.

## Example Usage

```typescript
import { LiveMediaClipsMaxResolution } from "@fastpix/fastpix-node/models";

let value: LiveMediaClipsMaxResolution = "1080p";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"2160p" | "1440p" | "1080p" | "720p" | "480p" | Unrecognized<string>
```