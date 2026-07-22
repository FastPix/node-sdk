# SourceAccessMediaMp4SupportStatus

Generation status of this MP4 rendition.

## Example Usage

```typescript
import { SourceAccessMediaMp4SupportStatus } from "@fastpix/fastpix-node/models";

let value: SourceAccessMediaMp4SupportStatus = "ready";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"preparing" | "ready" | "failed" | Unrecognized<string>
```