# DuplicateMp4SupportError

Displays details about the reasons behind the request's failure.

## Example Usage

```typescript
import { DuplicateMp4SupportError } from "@fastpix/fastpix-node/models";

let value: DuplicateMp4SupportError = {
  code: 404,
  message: "mp4Support value already exists",
  description:
    "The mp4Support value you are trying to update is already set to the same value. Please check mp4Support of the media before attempting again.",
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                                        | *number*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Displays the error code indicating the type of the error.                                                                                     | 404                                                                                                                                           |
| `message`                                                                                                                                     | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | A descriptive message providing more details for the error.                                                                                   | mp4Support value already exists                                                                                                               |
| `description`                                                                                                                                 | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | A detailed explanation of the possible causes for the error.<br/>                                                                             | The mp4Support value you are trying to update is already set to the same value. Please check mp4Support of the media before attempting again. |