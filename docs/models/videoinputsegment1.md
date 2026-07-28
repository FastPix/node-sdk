# VideoInputSegment1

## Example Usage

```typescript
import { VideoInputSegment1 } from "@fastpix/fastpix-node/models";

let value: VideoInputSegment1 = {
  url: "your-upload-url",
  insertAt: 2,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `url`                                                  | *string*                                               | :heavy_check_mark:                                     | URL of the segment to be added.                        | your-upload-url          |
| `insertAt`                                             | *number*                                               | :heavy_check_mark:                                     | The timestamp at which the segment should be inserted. | 2                                                      |