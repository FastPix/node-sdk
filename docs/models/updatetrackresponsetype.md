# UpdateTrackResponseType

Specifies the type of track (audio or subtitle).

## Example Usage

```typescript
import { UpdateTrackResponseType } from "@fastpix/fastpix-node/models";

let value: UpdateTrackResponseType = "subtitle";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"audio" | "subtitle" | Unrecognized<string>
```