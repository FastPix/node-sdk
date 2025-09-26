# UpdateMediaSummaryRequestBody

## Example Usage

```typescript
import { UpdateMediaSummaryRequestBody } from "@fastpix/fastpix-node/models/operations";

let value: UpdateMediaSummaryRequestBody = {
  generate: true,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `generate`                                                                                                          | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | Enable or disable the summary feature for the media. Set to true to enable summary or false to disable.<br/>        | true                                                                                                                |
| `summaryLength`                                                                                                     | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | Specifies the desired word count for the generated summary. <br/>- The value must be between **30** and **250** words.<br/> | 100                                                                                                                 |