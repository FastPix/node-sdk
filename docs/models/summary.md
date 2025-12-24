# Summary

## Example Usage

```typescript
import { Summary } from "@fastpix/fastpix-node/models";

let value: Summary = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `generate`                                                                                                         | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Enable or disable the summary feature for the media. <br/>Set to true to enable summary or false to disable.<br/>  |
| `summaryLength`                                                                                                    | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Specifies the desired word count for the generated summary.<br/>- The value must be between **30** and **250** words.<br/> |