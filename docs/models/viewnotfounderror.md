# ViewNotFoundError

Returns the problem that has occured

## Example Usage

```typescript
import { ViewNotFoundError } from "@fastpix/fastpix-node/models";

let value: ViewNotFoundError = {
  code: 404,
  message: "View not found",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `code`                                                      | *number*                                                    | :heavy_minus_sign:                                          | An error code indicating the type of the error.             | 404                                                         |
| `message`                                                   | *string*                                                    | :heavy_minus_sign:                                          | A descriptive message providing more details for the error. | View not found                                              |