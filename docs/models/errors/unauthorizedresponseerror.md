# UnAuthorizedResponseError

## Example Usage

```typescript
import { UnAuthorizedResponseError } from "@fastpix/fastpix-node/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | It demonstrates whether the request is successful or not.                                                | false                                                                                                    |
| `error`                                                                                                  | [models.UnAuthorizedResponseError](../../models/unauthorizedresponseerror.md)                            | :heavy_minus_sign:                                                                                       | Displays details about the reasons behind the request's failure.                                         | {<br/>"success": false,<br/>"error": {<br/>"success": false,<br/>"error": {<br/>"code": 401,<br/>"message": "unauthorized"<br/>}<br/>}<br/>} |