# ForbiddenError

Displays details about the reasons behind the request's failure.

## Example Usage

```typescript
import { ForbiddenError } from "@fastpix/fastpix-node/models";

let value: ForbiddenError = {
  code: 403,
  message: "forbidden",
  description:
    "The Access token does not have permissions to perform the request. Check access token's permissions. Read more https://docs.fastpix.io/docs/user-roles",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                                                                 | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Displays the error code indicating the type of the error.                                                                                              | 403                                                                                                                                                    |
| `message`                                                                                                                                              | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | A descriptive message providing more details for the error.                                                                                            | forbidden                                                                                                                                              |
| `description`                                                                                                                                          | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | A detailed explanation of the possible causes for the error.<br/>                                                                                      | The Access token does not have permissions to perform the request. Check access token's permissions. Read more https://docs.fastpix.io/docs/user-roles |