# SimulcastUnavailableError

Returns the problem that has occured.


## Example Usage

```typescript
import { SimulcastUnavailableError } from "@fastpix/fastpix-node/models";

let value: SimulcastUnavailableError = {
  code: 400,
  message: "Simulcast is not available for trial streams",
  description:
    "The requested resource (eg:streamId/playbackId) doesn't exist in the workspace",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `code`                                                                         | *number*                                                                       | :heavy_minus_sign:                                                             | An error code indicating the type of the error.<br/>                           | 400                                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | A descriptive message providing more details for the error<br/>                | Simulcast is not available for trial streams                                   |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | A detailed explanation of the possible causes for the error.<br/>              | The requested resource (eg:streamId/playbackId) doesn't exist in the workspace |