# WatermarkInput

Contains configuration details for applying a watermark overlay to a video.  
The watermark is placed over the media content during processing.  
For detailed setup steps and customization options, refer to the 
<a href="https://docs.fastpix.io/docs/watermark-your-videos" target="_blank">FastPix Watermark Guide</a>.


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
| `type`                                                       | [models.WatermarkInputType](../models/watermarkinputtype.md) | :heavy_check_mark:                                           | Type of overlay (currently only supports "watermark").       | watermark                                                    |
| `url`                                                        | *string*                                                     | :heavy_check_mark:                                           | URL of the watermark image.                                  | https://static.fastpix.io/watermark-4k.png                   |
| `placement`                                                  | [models.Placement](../models/placement.md)                   | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `width`                                                      | *string*                                                     | :heavy_minus_sign:                                           | Width of the watermark in percentage or pixels.              | 25%                                                          |
| `height`                                                     | *string*                                                     | :heavy_minus_sign:                                           | Height of the watermark in percentage or pixels.             | 25%                                                          |
| `opacity`                                                    | *string*                                                     | :heavy_minus_sign:                                           | Opacity of the watermark in percentage.                      | 80%                                                          |