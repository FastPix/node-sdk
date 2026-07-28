# VideoInputSegment2

## Example Usage

```typescript
import { VideoInputSegment2 } from "@fastpix/fastpix-node/models";

let value: VideoInputSegment2 = {
  url: "your-upload-url",
  insertAtEnd: true,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `url`                                                      | *string*                                                   | :heavy_check_mark:                                         | URL of the segment to be added.                            | your-upload-url              |
| `insertAtEnd`                                              | *boolean*                                                  | :heavy_check_mark:                                         | Flag indicating the segment should be inserted at the end. | true                                                       |