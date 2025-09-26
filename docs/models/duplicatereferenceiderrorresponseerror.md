# DuplicateReferenceIdErrorResponseError

Displays details about the reasons behind the request's failure.

## Example Usage

```typescript
import { DuplicateReferenceIdErrorResponseError } from "@fastpix/fastpix-node/models";

let value: DuplicateReferenceIdErrorResponseError = {
  code: 409,
  message: "playlist create failed",
  description: "A playlist with the given reference ID already exists.",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `code`                                                        | *number*                                                      | :heavy_minus_sign:                                            | Displays the error code indicating the type of the error.     | 409                                                           |
| `message`                                                     | *string*                                                      | :heavy_minus_sign:                                            | A descriptive message providing more details for the error.   | playlist create failed                                        |
| `description`                                                 | *string*                                                      | :heavy_minus_sign:                                            | A detailed explanation of the possible causes for the error.<br/> | A playlist with the given reference ID already exists.        |