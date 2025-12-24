# GetMediaResponseSourceResolution

The actual resolution of the uploaded media. This represents the native quality of the source media.

## Example Usage

```typescript
import { GetMediaResponseSourceResolution } from "@fastpix/fastpix-node/models";

let value: GetMediaResponseSourceResolution = "1080p";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"2160p" | "1440p" | "1080p" | "720p" | "480p" | Unrecognized<string>
```