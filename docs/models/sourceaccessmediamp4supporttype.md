# SourceAccessMediaMp4SupportType

The MP4 rendition type. `capped_4k` is a downloadable MP4 video capped at 4K resolution, `audioOnly` is a downloadable m4a audio-only file.

## Example Usage

```typescript
import { SourceAccessMediaMp4SupportType } from "@fastpix/fastpix-node/models";

let value: SourceAccessMediaMp4SupportType = "capped_4k";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"capped_4k" | "audioOnly" | Unrecognized<string>
```