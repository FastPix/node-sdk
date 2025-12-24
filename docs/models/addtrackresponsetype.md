# AddTrackResponseType

Specifies the type of track (audio or subtitle).

## Example Usage

```typescript
import { AddTrackResponseType } from "@fastpix/fastpix-node/models";

let value: AddTrackResponseType = "audio";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"audio" | "subtitle" | Unrecognized<string>
```