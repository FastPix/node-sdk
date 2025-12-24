# DefaultError

## Example Usage

```typescript
import { DefaultError } from "@fastpix/fastpix-node/models";

let value: DefaultError = {
  success: false,
  error: {
    code: NaN,
    message: "Message describing the error",
    description: "Detailed explanation of why the request failed",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `success`                                                                                            | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Shows if the request was completed successfully. Returns `true` for success and `false` for failure. | false                                                                                                |
| `error`                                                                                              | [models.ErrorT](../models/errort.md)                                                                 | :heavy_minus_sign:                                                                                   | Contains details about the error if the request failed.                                              |                                                                                                      |