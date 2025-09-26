# NotFoundErrorError

## Example Usage

```typescript
import { NotFoundErrorError } from "@fastpix/fastpix-node/models";

let value: NotFoundErrorError = {
  code: 404,
  message: "playlist not found",
  description: "The requested playlist doesn't exist in the workspace",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `code`                                                | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   | 404                                                   |
| `message`                                             | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   | playlist not found                                    |
| `description`                                         | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   | The requested playlist doesn't exist in the workspace |