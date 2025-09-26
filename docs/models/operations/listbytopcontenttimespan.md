# ListByTopContentTimespan

This parameter specifies the time span between which the video views list should be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.


## Example Usage

```typescript
import { ListByTopContentTimespan } from "@fastpix/fastpix-node/models/operations";

let value: ListByTopContentTimespan = "7:days";
```

## Values

```typescript
"60:minutes" | "6:hours" | "24:hours" | "3:days" | "7:days" | "30:days"
```