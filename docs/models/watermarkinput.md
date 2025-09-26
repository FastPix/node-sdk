# WatermarkInput

## Example Usage

```typescript
import { WatermarkInput } from "@fastpix/fastpix-node/models";

let value: WatermarkInput = {
  type: "watermark",
  url: "https://static.fastpix.io/watermark-4k.png",
  placement: {
    xAlign: "left",
    xMargin: "10%",
    yAlign: "top",
    yMargin: "10%",
  },
  width: "25%",
  height: "25%",
  opacity: "80%",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | [models.WatermarkInputType](../models/watermarkinputtype.md) | :heavy_minus_sign:                                           | Type of overlay (currently only supports 'watermark').       | watermark                                                    |
| `url`                                                        | *string*                                                     | :heavy_minus_sign:                                           | URL of the watermark image.                                  | https://static.fastpix.io/watermark-4k.png                   |
| `placement`                                                  | [models.Placement](../models/placement.md)                   | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `width`                                                      | *string*                                                     | :heavy_minus_sign:                                           | Width of the watermark in percentage or pixels.              | 25%                                                          |
| `height`                                                     | *string*                                                     | :heavy_minus_sign:                                           | Height of the watermark in percentage or pixels.             | 25%                                                          |
| `opacity`                                                    | *string*                                                     | :heavy_minus_sign:                                           | Opacity of the watermark in percentage.                      | 80%                                                          |