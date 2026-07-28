# CreateMediaResponseInput

## Example Usage

```typescript
import { CreateMediaResponseInput } from "@fastpix/fastpix-node/models";

let value: CreateMediaResponseInput = {
  type: "video",
  url: "your-video-url",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_minus_sign:                                   | The type of input media. Commonly set to `video`.    | video                                                |
| `url`                                                | *string*                                             | :heavy_minus_sign:                                   | The publicly accessible URL of the input video file. | your-video-url        |