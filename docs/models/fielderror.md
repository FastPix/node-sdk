# FieldError

## Example Usage

```typescript
import { FieldError } from "@fastpix/fastpix-node/models";

let value: FieldError = {
  field: "fieldName",
  message: "must not be null",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `field`                                                | *string*                                               | :heavy_check_mark:                                     | Displays the specific field associated with the error. | fieldName                                              |
| `message`                                              | *string*                                               | :heavy_check_mark:                                     | Error message for the field                            | must not be null                                       |