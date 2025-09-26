# UnauthorizedError

Displays details about the reasons behind the request's failure.

## Example Usage

```typescript
import { UnauthorizedError } from "@fastpix/fastpix-node/models";

let value: UnauthorizedError = {
  code: 401,
  message: "unauthorized",
  description:
    "This happens because of 1)Miss match between access token and secret key 2)Miss match between access token and workspace 3)No valid Access token provided.",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                                                     | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | Displays the error code indicating the type of the error.                                                                                                  | 401                                                                                                                                                        |
| `message`                                                                                                                                                  | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | A descriptive message providing more details for the error.                                                                                                | unauthorized                                                                                                                                               |
| `description`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | A detailed explanation of the possible causes for the error.<br/>                                                                                          | This happens because of 1)Miss match between access token and secret key 2)Miss match between access token and workspace 3)No valid Access token provided. |