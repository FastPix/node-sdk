# InvalidPlaylistIdResponseError

Displays details about the reasons behind the request's failure.

## Example Usage

```typescript
import { InvalidPlaylistIdResponseError } from "@fastpix/fastpix-node/models";

let value: InvalidPlaylistIdResponseError = {
  code: 422,
  message: "payload validation failed",
  fields: [
    {
      field: "fieldName",
      message: "must not be null",
    },
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                           | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Displays the error code indicating the type of the error.                                                                        | 422                                                                                                                              |
| `message`                                                                                                                        | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | A descriptive message providing more details for the error.                                                                      | payload validation failed                                                                                                        |
| `fields`                                                                                                                         | [models.FieldError](../models/fielderror.md)[]                                                                                   | :heavy_minus_sign:                                                                                                               | It is an collection of objects, where each object contains information about a specific field and a corresponding error message. |                                                                                                                                  |