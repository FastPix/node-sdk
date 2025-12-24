# ListVideoViewsTimespan

This parameter specifies the time span between which the video views list must be retrieved by. You can provide either from and to unix epoch timestamps or time duration. The scope of duration is between 60 minutes to 30 days.

**Accepted formats are:**

array of epoch timestamps for example  
`timespan[]=1498867200&timespan[]=1498953600`

duration string for example  
`timespan[]=24:hours` or `timespan[]=7:days`


## Example Usage

```typescript
import { ListVideoViewsTimespan } from "@fastpix/fastpix-node/models/operations";

let value: ListVideoViewsTimespan = "24:hours";
```

## Values

```typescript
"60:minutes" | "6:hours" | "24:hours" | "3:days" | "7:days" | "30:days"
```