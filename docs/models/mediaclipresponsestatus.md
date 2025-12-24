# MediaClipResponseStatus

The current processing status of the media.

## Example Usage

```typescript
import { MediaClipResponseStatus } from "@fastpix/fastpix-node/models";

let value: MediaClipResponseStatus = "Ready";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Created" | "Downloading" | "Downloaded" | "Validating" | "In Queue" | "Processing" | "Ready" | "Failed" | Unrecognized<string>
```