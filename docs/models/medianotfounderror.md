# MediaNotFoundError

Displays details about the reasons behind the request's failure.

## Example Usage

```typescript
import { MediaNotFoundError } from "@fastpix/fastpix-node/models";

let value: MediaNotFoundError = {
  code: 404,
  message: "media workspace relation not found",
  description:
    "The requested resource (eg:mediaId) doesn't exist in the workspace",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `code`                                                             | *number*                                                           | :heavy_minus_sign:                                                 | Displays the error code indicating the type of the error.          | 404                                                                |
| `message`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | A descriptive message providing more details for the error.        | media workspace relation not found                                 |
| `description`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | A detailed explanation of the possible causes for the error.<br/>  | The requested resource (eg:mediaId) doesn't exist in the workspace |