# StreamAlreadyEnabledErrorError

Contains details explaining why the request failed.

## Example Usage

```typescript
import { StreamAlreadyEnabledErrorError } from "@fastpix/fastpix-node/models";

let value: StreamAlreadyEnabledErrorError = {
  code: 400,
  message: "stream is already enabled",
  description: "The requested stream is already in an enabled state.",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                           | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | HTTP status code indicating the nature of the error.                                                                             | 400                                                                                                                              |
| `message`                                                                                                                        | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | A short message summarizing the error.                                                                                           | stream is already enabled                                                                                                        |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | A detailed explanation indicating that the stream is already active, idle, or preparing, and therefore cannot be enabled again.<br/> | The requested stream is already in an enabled state.                                                                             |