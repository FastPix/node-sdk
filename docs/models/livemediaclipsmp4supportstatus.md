# LiveMediaClipsMp4SupportStatus

Generation status of this MP4 rendition.

## Example Usage

```typescript
import { LiveMediaClipsMp4SupportStatus } from "@fastpix/fastpix-node/models";

let value: LiveMediaClipsMp4SupportStatus = "ready";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"preparing" | "ready" | "failed" | Unrecognized<string>
```