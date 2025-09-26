# SigningKeyNotFoundErrorError

Displays details about the reasons behind the request's failure.

## Example Usage

```typescript
import { SigningKeyNotFoundErrorError } from "@fastpix/fastpix-node/models";

let value: SigningKeyNotFoundErrorError = {
  code: 4,
  message: "Signing key Not Found",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `code`                                                      | *number*                                                    | :heavy_minus_sign:                                          | An error code indicating the type of the error.             | 4O4                                                         |
| `message`                                                   | *string*                                                    | :heavy_minus_sign:                                          | A descriptive message providing more details for the error. | Signing key Not Found                                       |