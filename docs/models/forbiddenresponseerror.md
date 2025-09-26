# ForbiddenResponseError

Displays details about the reasons behind the request's failure.

## Example Usage

```typescript
import { ForbiddenResponseError } from "@fastpix/fastpix-node/models";

let value: ForbiddenResponseError = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `code`                                                      | *number*                                                    | :heavy_minus_sign:                                          | Forbidden response                                          | 403                                                         |
| `message`                                                   | *string*                                                    | :heavy_minus_sign:                                          | A descriptive message providing more details for the error. | forbidden                                                   |