# Placement

## Example Usage

```typescript
import { Placement } from "@fastpix/fastpix-node/models";

let value: Placement = {
  xAlign: "left",
  xMargin: "10%",
  yAlign: "top",
  yMargin: "10%",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `xAlign`                                      | [models.XAlign](../models/xalign.md)          | :heavy_minus_sign:                            | Horizontal alignment of the watermark.        | left                                          |
| `xMargin`                                     | *string*                                      | :heavy_minus_sign:                            | Horizontal margin from the edge of the video. | 10%                                           |
| `yAlign`                                      | [models.YAlign](../models/yalign.md)          | :heavy_minus_sign:                            | Vertical alignment of the watermark.          | top                                           |
| `yMargin`                                     | *string*                                      | :heavy_minus_sign:                            | Vertical margin from the edge of the video.   | 10%                                           |