# TrackDuplicateRequestError

Displays details about the reasons behind the request's failure.

## Example Usage

```typescript
import { TrackDuplicateRequestError } from "@fastpix/fastpix-node/models";

let value: TrackDuplicateRequestError = {
  code: 400,
  message: "duplicate language name",
  description: "Duplicate language name exists for the given track ID.",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `code`                                                        | *number*                                                      | :heavy_minus_sign:                                            | Displays the error code indicating the type of the error.     | 400                                                           |
| `message`                                                     | *string*                                                      | :heavy_minus_sign:                                            | A descriptive message providing more details for the error.   | duplicate language name                                       |
| `description`                                                 | *string*                                                      | :heavy_minus_sign:                                            | A detailed explanation of the possible causes for the error.<br/> | Duplicate language name exists for the given track ID.        |