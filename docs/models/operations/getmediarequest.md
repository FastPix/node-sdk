# GetMediaRequest

## Example Usage

```typescript
import { GetMediaRequest } from "@fastpix/fastpix-node/models/operations";

let value: GetMediaRequest = {
  mediaId: "your-media-id",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `mediaId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | The unique identifier assigned to the media when created. The value must be a valid UUID. | your-media-id                                                      |