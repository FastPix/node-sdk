# MediaMediaQuality

The quality tier applied to the media.

## Example Usage

```typescript
import { MediaMediaQuality } from "@fastpix/fastpix-node/models";

let value: MediaMediaQuality = "standard";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standard" | "pro" | "premium" | Unrecognized<string>
```