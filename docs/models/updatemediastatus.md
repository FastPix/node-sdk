# UpdateMediaStatus

Determines the media's status, which can be one of the possible values.

## Example Usage

```typescript
import { UpdateMediaStatus } from "@fastpix/fastpix-node/models";

let value: UpdateMediaStatus = "Downloaded";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Created" | "Downloading" | "Downloaded" | "Validating" | "In Queue" | "Processing" | "Ready" | "Failed" | Unrecognized<string>
```