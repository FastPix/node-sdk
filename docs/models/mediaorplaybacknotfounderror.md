# MediaOrPlaybackNotFoundError

Displays details about the reasons behind the request's failure.

## Example Usage

```typescript
import { MediaOrPlaybackNotFoundError } from "@fastpix/fastpix-node/models";

let value: MediaOrPlaybackNotFoundError = {
  code: 404,
  message: "Media/PlaybackId not Found",
  description:
    "The requested stream or PlaybackId could not be found. Please ensure the ID is correct and try again.",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `code`                                                                                                | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Displays the error code indicating the type of the error.                                             | 404                                                                                                   |
| `message`                                                                                             | *string*                                                                                              | :heavy_minus_sign:                                                                                    | A descriptive message providing more details for the error.                                           | Media/PlaybackId not Found                                                                            |
| `description`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | A detailed explanation of the possible causes for the error.<br/>                                     | The requested stream or PlaybackId could not be found. Please ensure the ID is correct and try again. |