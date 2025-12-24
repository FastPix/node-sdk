# VideoInputSegment1

## Example Usage

```typescript
import { VideoInputSegment1 } from "@fastpix/fastpix-node/models";

let value: VideoInputSegment1 = {
  url: "https://storage.googleapis.com/gtv-videos-mp4",
  insertAt: 2,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `url`                                                  | *string*                                               | :heavy_check_mark:                                     | URL of the segment to be added.                        | https://storage.googleapis.com/gtv-videos-mp4          |
| `insertAt`                                             | *number*                                               | :heavy_check_mark:                                     | The timestamp at which the segment should be inserted. | 2                                                      |