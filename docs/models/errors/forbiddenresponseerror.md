# ForbiddenResponseError

## Example Usage

```typescript
import { ForbiddenResponseError } from "@fastpix/fastpix-node/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `success`                                                                                             | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | It demonstrates whether the request is successful or not.                                             | false                                                                                                 |
| `error`                                                                                               | [models.ForbiddenResponseError](../../models/forbiddenresponseerror.md)                               | :heavy_minus_sign:                                                                                    | Displays details about the reasons behind the request's failure.                                      | {<br/>"success": false,<br/>"error": {<br/>"success": false,<br/>"error": {<br/>"code": 403,<br/>"message": "forbidden"<br/>}<br/>}<br/>} |