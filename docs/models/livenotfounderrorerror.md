# LiveNotFoundErrorError

Displays details about the reasons behind the request's failure.

## Example Usage

```typescript
import { LiveNotFoundErrorError } from "@fastpix/fastpix-node/models";

let value: LiveNotFoundErrorError = {
  code: 404,
  message: "stream not found",
  description:
    "The requested resource (eg:streamId) doesn't exist in the workspace",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `code`                                                              | *number*                                                            | :heavy_minus_sign:                                                  | Displays the error code indicating the type of the error.           | 404                                                                 |
| `message`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | A descriptive message providing more details for the error.         | stream not found                                                    |
| `description`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | A detailed explanation of the possible causes for the error.<br/>   | The requested resource (eg:streamId) doesn't exist in the workspace |