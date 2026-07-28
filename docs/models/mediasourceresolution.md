# MediaSourceResolution

The actual resolution of the uploaded media. This represents the native quality of the source media.

## Example Usage

```typescript
import { MediaSourceResolution } from "@fastpix/fastpix-node/models";

let value: MediaSourceResolution = "1080p";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"2160p" | "2160" | "1440p" | "1440" | "1080p" | "1080" | "720p" | "720" | "480p" | "480" | "360p" | "360" | Unrecognized<string>
```