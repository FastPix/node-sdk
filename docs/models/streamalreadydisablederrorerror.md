# StreamAlreadyDisabledErrorError

Contains details explaining why the request failed.

## Example Usage

```typescript
import { StreamAlreadyDisabledErrorError } from "@fastpix/fastpix-node/models";

let value: StreamAlreadyDisabledErrorError = {
  code: 400,
  message: "stream already disabled",
  description: "The requested stream is already disabled.",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                          | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | HTTP status code indicating the nature of the error.                                                            | 400                                                                                                             |
| `message`                                                                                                       | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | A short message summarizing the error.                                                                          | stream already disabled                                                                                         |
| `description`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | A detailed explanation indicating that the stream is already in a disabled state and cannot be disabled again.<br/> | The requested stream is already disabled.                                                                       |