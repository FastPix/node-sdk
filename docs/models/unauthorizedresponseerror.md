# UnAuthorizedResponseError

Displays details about the reasons behind the request's failure.

## Example Usage

```typescript
import { UnAuthorizedResponseError } from "@fastpix/fastpix-node/models";

let value: UnAuthorizedResponseError = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `code`                                                      | *number*                                                    | :heavy_minus_sign:                                          | UnAuthorized response                                       | 401                                                         |
| `message`                                                   | *string*                                                    | :heavy_minus_sign:                                          | A descriptive message providing more details for the error. | unauthorized                                                |